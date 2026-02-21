/**
 * Infinite Gradient 3D Carousel
 * Based on the tutorial by Clément Grellier (Codrops):
 * "Build a smooth, infinite 3D carousel where each image drives a reactive,
 * canvas-based background gradient that adapts to its colors."
 * Port from https://github.com/clementgrellier/gradientslider
 * Refactored for React: init/destroy API, builds items from existing .card DOM.
 */

export interface GradientCarouselOptions {
  stageEl: HTMLElement;
  cardsEl: HTMLElement;
  canvasEl: HTMLCanvasElement;
}

// Configuration (per Clément Grellier tutorial)
const FRICTION = 0.9;
const WHEEL_SENS = 0.6;
const DRAG_SENS = 1.0;
const MAX_ROTATION = 28;
const MAX_DEPTH = 140;
const MIN_SCALE = 0.8;
const SCALE_RANGE = 0.2;
const GAP = 28;

type CarouselItem = { el: HTMLElement; x: number };

// Instance state (single instance for destroy/cleanup)
let stage: HTMLElement | null = null;
let cardsRoot: HTMLElement | null = null;
let bgCanvas: HTMLCanvasElement | null = null;
let bgCtx: CanvasRenderingContext2D | null = null;
let items: CarouselItem[] = [];
let positions: Float32Array = new Float32Array(0);
let activeIndex = -1;
let isEntering = true;
let CARD_W = 300;
let CARD_H = 400;
let STEP = CARD_W + GAP;
let TRACK = 0;
let SCROLL_X = 0;
let VW_HALF = 0;
let vX = 0;
let rafId: number | null = null;
let bgRAF: number | null = null;
let lastTime = 0;
let lastBgDraw = 0;
let gradPalette: { c1: number[]; c2: number[] }[] = [];
let gradCurrent = { r1: 240, g1: 240, b1: 240, r2: 235, g2: 235, b2: 235 };
let bgFastUntil = 0;
let resizeTimeout: ReturnType<typeof setTimeout> | null = null;
let destroyed = false;
let boundHandlers: {
  wheel: (e: WheelEvent) => void;
  dragstart: (e: DragEvent) => void;
  pointerdown: (e: PointerEvent) => void;
  pointermove: (e: PointerEvent) => void;
  pointerup: (e: PointerEvent) => void;
  resize: () => void;
  visibilitychange: () => void;
} | null = null;
let dragging = false;
let lastX = 0;
let lastT = 0;
let lastDelta = 0;

function mod(n: number, m: number): number {
  return ((n % m) + m) % m;
}

function preloadImageLinks(srcs: string[]): void {
  if (typeof document === "undefined" || !document.head) return;
  srcs.forEach((href) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = href;
    link.fetchPriority = "high";
    document.head.appendChild(link);
  });
}

function waitForImages(): Promise<void> {
  const promises = items.map((it) => {
    const img = it.el.querySelector("img");
    if (!img || (img as HTMLImageElement).complete) return Promise.resolve();
    return new Promise<void>((resolve) => {
      const done = () => resolve();
      img.addEventListener("load", done, { once: true });
      img.addEventListener("error", done, { once: true });
    });
  });
  return Promise.all(promises).then(() => {});
}

async function decodeAllImages(): Promise<void> {
  const tasks = items.map((it) => {
    const img = it.el.querySelector("img") as HTMLImageElement | null;
    if (!img) return Promise.resolve();
    if (typeof img.decode === "function") return img.decode().catch(() => {});
    return Promise.resolve();
  });
  await Promise.allSettled(tasks);
}

function measure(): void {
  const sample = items[0]?.el;
  if (!sample) return;
  const r = sample.getBoundingClientRect();
  CARD_W = r.width || CARD_W;
  CARD_H = r.height || CARD_H;
  STEP = CARD_W + GAP;
  TRACK = items.length * STEP;
  items.forEach((it, i) => {
    it.x = i * STEP;
  });
  positions = new Float32Array(items.length);
}

function computeTransformComponents(screenX: number) {
  const norm = Math.max(-1, Math.min(1, screenX / VW_HALF));
  const absNorm = Math.abs(norm);
  const invNorm = 1 - absNorm;
  const ry = -norm * MAX_ROTATION;
  const tz = invNorm * MAX_DEPTH;
  const scale = MIN_SCALE + invNorm * SCALE_RANGE;
  return { norm, absNorm, invNorm, ry, tz, scale };
}

function transformForScreenX(screenX: number): { transform: string; z: number } {
  const { ry, tz, scale } = computeTransformComponents(screenX);
  return {
    transform: `translate3d(${screenX}px,-50%,${tz}px) rotateY(${ry}deg) scale(${scale})`,
    z: tz,
  };
}

function updateCarouselTransforms(): void {
  if (!stage || items.length === 0) return;
  const half = TRACK / 2;
  let closestIdx = -1;
  let closestDist = Infinity;

  for (let i = 0; i < items.length; i++) {
    let pos = items[i].x - SCROLL_X;
    if (pos < -half) pos += TRACK;
    if (pos > half) pos -= TRACK;
    positions[i] = pos;
    const dist = Math.abs(pos);
    if (dist < closestDist) {
      closestDist = dist;
      closestIdx = i;
    }
  }

  const prevIdx = (closestIdx - 1 + items.length) % items.length;
  const nextIdx = (closestIdx + 1) % items.length;

  for (let i = 0; i < items.length; i++) {
    const it = items[i];
    const pos = positions[i];
    const norm = Math.max(-1, Math.min(1, pos / VW_HALF));
    const { transform, z } = transformForScreenX(pos);
    it.el.style.transform = transform;
    it.el.style.zIndex = String(1000 + Math.round(z));
    const isCore = i === closestIdx || i === prevIdx || i === nextIdx;
    const blur = isCore ? 0 : 2 * Math.pow(Math.abs(norm), 1.1);
    it.el.style.filter = `blur(${blur.toFixed(2)}px)`;
  }

  if (closestIdx !== activeIndex) {
    setActiveGradient(closestIdx);
  }
}

function tick(t: number): void {
  const dt = lastTime ? (t - lastTime) / 1000 : 0;
  lastTime = t;
  SCROLL_X = mod(SCROLL_X + vX * dt, TRACK);
  const decay = Math.pow(FRICTION, dt * 60);
  vX *= decay;
  if (Math.abs(vX) < 0.02) vX = 0;
  updateCarouselTransforms();
  rafId = requestAnimationFrame(tick);
}

function startCarousel(): void {
  cancelCarousel();
  lastTime = 0;
  rafId = requestAnimationFrame((t) => {
    updateCarouselTransforms();
    tick(t);
  });
}

function cancelCarousel(): void {
  if (rafId) cancelAnimationFrame(rafId);
  rafId = null;
}

function rgbToHsl(r: number, g: number, b: number): [number, number, number] {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h: number, s: number;
  const l = (max + min) / 2;
  if (max === min) {
    h = 0;
    s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      default:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return [h * 360, s, l];
}

function hslToRgb(h: number, s: number, l: number): [number, number, number] {
  h = ((h % 360) + 360) % 360;
  h /= 360;
  let r: number, g: number, b: number;
  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

function fallbackFromIndex(idx: number): { c1: number[]; c2: number[] } {
  const h = (idx * 37) % 360;
  const s = 0.65;
  const c1 = hslToRgb(h, s, 0.52);
  const c2 = hslToRgb(h, s, 0.72);
  return { c1, c2 };
}

function extractColors(img: HTMLImageElement, idx: number): { c1: number[]; c2: number[] } {
  try {
    const MAX = 48;
    const ratio =
      img.naturalWidth && img.naturalHeight ? img.naturalWidth / img.naturalHeight : 1;
    const tw = ratio >= 1 ? MAX : Math.max(16, Math.round(MAX * ratio));
    const th = ratio >= 1 ? Math.max(16, Math.round(MAX / ratio)) : MAX;
    const canvas = document.createElement("canvas");
    canvas.width = tw;
    canvas.height = th;
    const ctx = canvas.getContext("2d");
    if (!ctx) return fallbackFromIndex(idx);
    ctx.drawImage(img, 0, 0, tw, th);
    const data = ctx.getImageData(0, 0, tw, th).data;
    const H_BINS = 36;
    const S_BINS = 5;
    const SIZE = H_BINS * S_BINS;
    const wSum = new Float32Array(SIZE);
    const rSum = new Float32Array(SIZE);
    const gSum = new Float32Array(SIZE);
    const bSum = new Float32Array(SIZE);

    for (let i = 0; i < data.length; i += 4) {
      const a = data[i + 3] / 255;
      if (a < 0.05) continue;
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const [h, s, l] = rgbToHsl(r, g, b);
      if (l < 0.1 || l > 0.92 || s < 0.08) continue;
      const w = a * (s * s) * (1 - Math.abs(l - 0.5) * 0.6);
      const hi = Math.max(0, Math.min(H_BINS - 1, Math.floor((h / 360) * H_BINS)));
      const si = Math.max(0, Math.min(S_BINS - 1, Math.floor(s * S_BINS)));
      const bidx = hi * S_BINS + si;
      wSum[bidx] += w;
      rSum[bidx] += r * w;
      gSum[bidx] += g * w;
      bSum[bidx] += b * w;
    }

    let pIdx = -1;
    let pW = 0;
    for (let i = 0; i < SIZE; i++) {
      if (wSum[i] > pW) {
        pW = wSum[i];
        pIdx = i;
      }
    }
    if (pIdx < 0 || pW <= 0) return fallbackFromIndex(idx);
    const pHue = Math.floor(pIdx / S_BINS) * (360 / H_BINS);
    let sIdx = -1;
    let sW = 0;
    for (let i = 0; i < SIZE; i++) {
      const w = wSum[i];
      if (w <= 0) continue;
      const h = Math.floor(i / S_BINS) * (360 / H_BINS);
      let dh = Math.abs(h - pHue);
      dh = Math.min(dh, 360 - dh);
      if (dh >= 25 && w > sW) {
        sW = w;
        sIdx = i;
      }
    }
    const avgRGB = (idx: number) => {
      const w = wSum[idx] || 1e-6;
      return [
        Math.round(rSum[idx] / w),
        Math.round(gSum[idx] / w),
        Math.round(bSum[idx] / w),
      ];
    };
    const [pr, pg, pb] = avgRGB(pIdx);
    let [h1, s1] = rgbToHsl(pr, pg, pb);
    s1 = Math.max(0.45, Math.min(1, s1 * 1.15));
    const c1 = hslToRgb(h1, s1, 0.5);
    let c2: number[];
    if (sIdx >= 0 && sW >= pW * 0.6) {
      const [sr, sg, sb] = avgRGB(sIdx);
      let [h2, s2] = rgbToHsl(sr, sg, sb);
      s2 = Math.max(0.45, Math.min(1, s2 * 1.05));
      c2 = hslToRgb(h2, s2, 0.72);
    } else {
      c2 = hslToRgb(h1, s1, 0.72);
    }
    return { c1, c2 };
  } catch {
    return fallbackFromIndex(idx);
  }
}

function buildPalette(): void {
  gradPalette = items.map((it, i) => {
    const img = it.el.querySelector("img") as HTMLImageElement | null;
    return extractColors(img || new Image(), i);
  });
}

function setActiveGradient(idx: number): void {
  if (!bgCtx || idx < 0 || idx >= items.length || idx === activeIndex) return;
  activeIndex = idx;
  const pal = gradPalette[idx] || { c1: [240, 240, 240], c2: [235, 235, 235] };
  const to = {
    r1: pal.c1[0],
    g1: pal.c1[1],
    b1: pal.c1[2],
    r2: pal.c2[0],
    g2: pal.c2[1],
    b2: pal.c2[2],
  };
  if (typeof (window as unknown as { gsap?: unknown }).gsap !== "undefined") {
    bgFastUntil = performance.now() + 800;
    (window as unknown as { gsap: { to: (t: object, o: object) => void } }).gsap.to(
      gradCurrent,
      { ...to, duration: 0.45, ease: "power2.out" }
    );
  } else {
    Object.assign(gradCurrent, to);
  }
}

function resizeBG(): void {
  if (!bgCanvas || !bgCtx || !stage) return;
  const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
  const w = bgCanvas.clientWidth || stage.clientWidth;
  const h = bgCanvas.clientHeight || stage.clientHeight;
  const tw = Math.floor(w * dpr);
  const th = Math.floor(h * dpr);
  if (bgCanvas.width !== tw || bgCanvas.height !== th) {
    bgCanvas.width = tw;
    bgCanvas.height = th;
    bgCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
}

function drawBackground(): void {
  if (!bgCanvas || !bgCtx || !stage) return;
  const now = performance.now();
  const minInterval = now < bgFastUntil ? 16 : 33;
  if (now - lastBgDraw < minInterval) {
    bgRAF = requestAnimationFrame(drawBackground);
    return;
  }
  lastBgDraw = now;
  resizeBG();
  const w = bgCanvas.clientWidth || stage.clientWidth;
  const h = bgCanvas.clientHeight || stage.clientHeight;
  const baseColor = "#fafbfc";
  bgCtx.fillStyle = baseColor;
  bgCtx.fillRect(0, 0, w, h);
  const time = now * 0.0002;
  const cx = w * 0.5;
  const cy = h * 0.5;
  const a1 = Math.min(w, h) * 0.35;
  const a2 = Math.min(w, h) * 0.28;
  const x1 = cx + Math.cos(time) * a1;
  const y1 = cy + Math.sin(time * 0.8) * a1 * 0.4;
  const x2 = cx + Math.cos(-time * 0.9 + 1.2) * a2;
  const y2 = cy + Math.sin(-time * 0.7 + 0.7) * a2 * 0.5;
  const r1 = Math.max(w, h) * 1.1;
  const r2 = Math.max(w, h) * 1.0;
  const blend = 0.35;
  const b1r = Math.round(gradCurrent.r1 * (1 - blend) + 255 * blend);
  const b1g = Math.round(gradCurrent.g1 * (1 - blend) + 255 * blend);
  const b1b = Math.round(gradCurrent.b1 * (1 - blend) + 255 * blend);
  const b2r = Math.round(gradCurrent.r2 * (1 - blend) + 255 * blend);
  const b2g = Math.round(gradCurrent.g2 * (1 - blend) + 255 * blend);
  const b2b = Math.round(gradCurrent.b2 * (1 - blend) + 255 * blend);
  const g1 = bgCtx.createRadialGradient(x1, y1, 0, x1, y1, r1);
  g1.addColorStop(0, `rgba(${b1r},${b1g},${b1b},0.45)`);
  g1.addColorStop(0.5, `rgba(${b1r},${b1g},${b1b},0.12)`);
  g1.addColorStop(1, "rgba(255,255,255,0)");
  bgCtx.fillStyle = g1;
  bgCtx.fillRect(0, 0, w, h);
  const g2 = bgCtx.createRadialGradient(x2, y2, 0, x2, y2, r2);
  g2.addColorStop(0, `rgba(${b2r},${b2g},${b2b},0.45)`);
  g2.addColorStop(0.5, `rgba(${b2r},${b2g},${b2b},0.12)`);
  g2.addColorStop(1, "rgba(255,255,255,0)");
  bgCtx.fillStyle = g2;
  bgCtx.fillRect(0, 0, w, h);
  const vignetteR = Math.max(w, h) * 1.2;
  const vignette = bgCtx.createRadialGradient(cx, cy, 0, cx, cy, vignetteR);
  vignette.addColorStop(0, "rgba(250,251,252,0)");
  vignette.addColorStop(1, "rgba(250,251,252,0.85)");
  bgCtx.fillStyle = vignette;
  bgCtx.fillRect(0, 0, w, h);
  bgRAF = requestAnimationFrame(drawBackground);
}

function startBG(): void {
  if (!bgCanvas || !bgCtx) return;
  cancelBG();
  bgRAF = requestAnimationFrame(drawBackground);
}

function cancelBG(): void {
  if (bgRAF) cancelAnimationFrame(bgRAF);
  bgRAF = null;
}

async function animateEntryNoGsap(visibleCards: { item: CarouselItem; screenX: number }[]): Promise<void> {
  for (const { item, screenX } of visibleCards) {
    const { transform } = transformForScreenX(screenX);
    item.el.style.opacity = "1";
    item.el.style.transform = transform;
  }
}

async function animateEntry(visibleCards: { item: CarouselItem; screenX: number }[]): Promise<void> {
  const gsap = (window as unknown as { gsap?: { timeline: () => { to: (a: unknown, b: object, c?: number) => void; eventCallback: (e: string, fn: () => void) => void } } }).gsap;
  if (!gsap) {
    await animateEntryNoGsap(visibleCards);
    return;
  }
  await new Promise<void>((r) => requestAnimationFrame(() => r()));
  const tl = gsap.timeline();
  visibleCards.forEach(({ item, screenX }, idx) => {
    const state = { p: 0 };
    const { ry, tz, scale: baseScale } = computeTransformComponents(screenX);
    const START_SCALE = 0.92;
    const START_Y = 40;
    item.el.style.opacity = "0";
    item.el.style.transform =
      `translate3d(${screenX}px,-50%,${tz}px) rotateY(${ry}deg) scale(${START_SCALE}) translateY(${START_Y}px)`;
    tl.to(
      state,
      {
        p: 1,
        duration: 0.6,
        ease: "power3.out",
        onUpdate: () => {
          const t = state.p;
          const currentScale = START_SCALE + (baseScale - START_SCALE) * t;
          const currentY = START_Y * (1 - t);
          item.el.style.opacity = t.toFixed(3);
          if (t >= 0.999) {
            item.el.style.transform = transformForScreenX(screenX).transform;
          } else {
            item.el.style.transform =
              `translate3d(${screenX}px,-50%,${tz}px) rotateY(${ry}deg) scale(${currentScale}) translateY(${currentY}px)`;
          }
        },
      },
      idx * 0.05
    );
  });
  await new Promise<void>((resolve) => {
    tl.eventCallback("onComplete", resolve);
  });
}

async function warmupCompositing(): Promise<void> {
  const originalScrollX = SCROLL_X;
  const stepSize = STEP * 0.5;
  const numSteps = Math.ceil(TRACK / stepSize);
  for (let i = 0; i < numSteps; i++) {
    SCROLL_X = mod(originalScrollX + i * stepSize, TRACK);
    updateCarouselTransforms();
    if (i % 3 === 0) {
      await new Promise<void>((r) => requestAnimationFrame(() => r()));
    }
  }
  SCROLL_X = originalScrollX;
  updateCarouselTransforms();
  await new Promise<void>((r) => requestAnimationFrame(() => r()));
  await new Promise<void>((r) => requestAnimationFrame(() => r()));
}

/**
 * Initialize the gradient carousel. Call after React has rendered cards into cardsEl.
 * Cards must have class "card" and contain an <img>.
 */
export async function initGradientCarousel(options: GradientCarouselOptions): Promise<void> {
  destroyed = false;
  const { stageEl, cardsEl, canvasEl } = options;
  stage = stageEl;
  cardsRoot = cardsEl;
  bgCanvas = canvasEl;
  bgCtx = canvasEl.getContext("2d", { alpha: false });

  const cardEls = cardsEl.querySelectorAll(".card");
  if (cardEls.length === 0 || destroyed) return;

  items = Array.from(cardEls).map((el, i) => ({
    el: el as HTMLElement,
    x: i * (CARD_W + GAP),
  }));

  const imageSrcs = Array.from(cardEls)
    .map((el) => (el.querySelector("img") as HTMLImageElement)?.src)
    .filter(Boolean) as string[];
  preloadImageLinks(imageSrcs);

  VW_HALF = stageEl.clientWidth * 0.5;
  measure();
  updateCarouselTransforms();
  stageEl.classList.add("carouselMode");

  await waitForImages();
  if (destroyed) return;
  await decodeAllImages();
  if (destroyed) return;

  items.forEach((it) => {
    const img = it.el.querySelector("img");
    if (img) void (img as HTMLElement).offsetHeight;
  });

  measure();
  updateCarouselTransforms();
  buildPalette();

  const half = TRACK / 2;
  let closestIdx = 0;
  let closestDist = Infinity;
  for (let i = 0; i < items.length; i++) {
    let pos = items[i].x - SCROLL_X;
    if (pos < -half) pos += TRACK;
    if (pos > half) pos -= TRACK;
    const d = Math.abs(pos);
    if (d < closestDist) {
      closestDist = d;
      closestIdx = i;
    }
  }
  setActiveGradient(closestIdx);

  resizeBG();
  if (bgCtx && bgCanvas && stage) {
    const w = bgCanvas.clientWidth || stage.clientWidth;
    const h = bgCanvas.clientHeight || stage.clientHeight;
    bgCtx.fillStyle = "#fafbfc";
    bgCtx.fillRect(0, 0, w, h);
  }

  await warmupCompositing();
  if (destroyed) return;
  if (typeof requestIdleCallback !== "undefined") {
    await new Promise<void>((r) => requestIdleCallback(() => r(), { timeout: 100 }));
  }
  if (destroyed) return;

  startBG();
  await new Promise<void>((r) => setTimeout(r, 100));
  if (destroyed) return;

  const viewportWidth = stageEl.clientWidth;
  const visibleCards: { item: CarouselItem; screenX: number }[] = [];
  for (let i = 0; i < items.length; i++) {
    let pos = items[i].x - SCROLL_X;
    if (pos < -half) pos += TRACK;
    if (pos > half) pos -= TRACK;
    const screenX = pos;
    if (Math.abs(screenX) < viewportWidth * 0.6) {
      visibleCards.push({ item: items[i], screenX });
    }
  }
  visibleCards.sort((a, b) => a.screenX - b.screenX);

  await animateEntry(visibleCards);
  if (destroyed) return;
  isEntering = false;

  function onResize(): void {
    if (!stage || items.length === 0) return;
    const prevStep = STEP || 1;
    const ratio = SCROLL_X / (items.length * prevStep);
    measure();
    VW_HALF = stage.clientWidth * 0.5;
    SCROLL_X = mod(ratio * TRACK, TRACK);
    updateCarouselTransforms();
    resizeBG();
  }

  const wheelHandler = (e: WheelEvent) => {
    if (isEntering) return;
    e.preventDefault();
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    vX += delta * WHEEL_SENS * 20;
  };

  const dragstartHandler = (e: DragEvent) => e.preventDefault();

  const pointerdownHandler = (e: PointerEvent) => {
    if (isEntering) return;
    if ((e.target as HTMLElement).closest?.(".frame")) return;
    dragging = true;
    lastX = e.clientX;
    lastT = performance.now();
    lastDelta = 0;
    stageEl.setPointerCapture(e.pointerId);
    stageEl.classList.add("dragging");
  };

  const pointermoveHandler = (e: PointerEvent) => {
    if (!dragging) return;
    const now = performance.now();
    const dx = e.clientX - lastX;
    const dt = Math.max(1, now - lastT) / 1000;
    SCROLL_X = mod(SCROLL_X - dx * DRAG_SENS, TRACK);
    lastDelta = dx / dt;
    lastX = e.clientX;
    lastT = now;
  };

  const pointerupHandler = (e: PointerEvent) => {
    if (!dragging) return;
    dragging = false;
    stageEl.releasePointerCapture(e.pointerId);
    vX = -lastDelta * DRAG_SENS;
    stageEl.classList.remove("dragging");
  };

  const resizeHandler = () => {
    if (resizeTimeout) clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(onResize, 80);
  };

  const visibilityHandler = () => {
    if (document.hidden) {
      cancelCarousel();
      cancelBG();
    } else {
      startCarousel();
      startBG();
    }
  };

  boundHandlers = {
    wheel: wheelHandler,
    dragstart: dragstartHandler,
    pointerdown: pointerdownHandler,
    pointermove: pointermoveHandler,
    pointerup: pointerupHandler,
    resize: resizeHandler,
    visibilitychange: visibilityHandler,
  };

  stageEl.addEventListener("wheel", wheelHandler, { passive: false });
  stageEl.addEventListener("dragstart", dragstartHandler);
  stageEl.addEventListener("pointerdown", pointerdownHandler);
  stageEl.addEventListener("pointermove", pointermoveHandler);
  stageEl.addEventListener("pointerup", pointerupHandler);
  window.addEventListener("resize", resizeHandler);
  document.addEventListener("visibilitychange", visibilityHandler);

  startCarousel();
}

/**
 * Destroy the carousel and remove all listeners and animation frames.
 */
export function destroyGradientCarousel(): void {
  if (resizeTimeout) clearTimeout(resizeTimeout);
  resizeTimeout = null;
  cancelCarousel();
  cancelBG();
  if (boundHandlers && stage) {
    stage.removeEventListener("wheel", boundHandlers.wheel);
    stage.removeEventListener("dragstart", boundHandlers.dragstart);
    stage.removeEventListener("pointerdown", boundHandlers.pointerdown);
    stage.removeEventListener("pointermove", boundHandlers.pointermove);
    stage.removeEventListener("pointerup", boundHandlers.pointerup);
    window.removeEventListener("resize", boundHandlers.resize);
    document.removeEventListener("visibilitychange", boundHandlers.visibilitychange);
    boundHandlers = null;
  }
  if (stage) {
    stage.classList.remove("carouselMode", "dragging");
  }
  destroyed = true;
  stage = null;
  cardsRoot = null;
  bgCanvas = null;
  bgCtx = null;
  items = [];
  positions = new Float32Array(0);
  activeIndex = -1;
  isEntering = true;
}
