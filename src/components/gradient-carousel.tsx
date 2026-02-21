"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { initGradientCarousel, destroyGradientCarousel } from "@/lib/gradient-carousel";
import styles from "./gradient-carousel.module.css";

interface GradientCarouselProps {
  images: string[];
  className?: string;
}

export function GradientCarousel({ images, className }: GradientCarouselProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!stageRef.current || !canvasRef.current || !cardsRef.current || images.length === 0) {
      return;
    }
    const stageEl = stageRef.current;
    const canvasEl = canvasRef.current;
    const cardsEl = cardsRef.current;

    const cardCount = cardsEl.querySelectorAll(".card").length;
    if (cardCount !== images.length) {
      return;
    }

    let cancelled = false;
    const rafId = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (cancelled) return;
        initGradientCarousel({
          stageEl,
          cardsEl,
          canvasEl,
        }).catch(() => {
          if (!cancelled) destroyGradientCarousel();
        });
      });
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
      destroyGradientCarousel();
    };
  }, [images.length]);

  if (images.length === 0) return null;

  return (
    <div ref={rootRef} className={cn(styles.root, className)}>
      <div className={styles.canvasWrapper}>
        <canvas
          ref={canvasRef}
          className={styles.canvas}
          id="gradient-carousel-bg"
          aria-hidden="true"
        />
      </div>
      <div
        ref={stageRef}
        className={styles.stage}
        aria-live="polite"
      >
        <div
          ref={cardsRef}
          className={styles.cards}
          role="region"
          aria-label="Infinite carousel of images"
        >
          {images.map((src, i) => (
            <article
              key={`${src}-${i}`}
              className={`card ${styles.card}`}
              style={{ willChange: "transform" }}
            >
              <img
                src={src}
                alt=""
                className={styles.cardImg}
                decoding="async"
                loading="eager"
                draggable={false}
                fetchPriority="high"
              />
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
