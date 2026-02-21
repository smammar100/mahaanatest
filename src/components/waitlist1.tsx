"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { PageContainer } from "@/components/ui/container";
import { SectionShell } from "@/components/ui/section-shell";
import { GradientCarousel } from "@/components/gradient-carousel";

const CAROUSEL_SIZE = 10;
const BASE_IMAGES = [
  "/images/feature2-investing-goal.png",
  "/images/step-group-1.png",
  "/images/step-group-2.png",
];
const DEFAULT_CAROUSEL_IMAGES = Array.from(
  { length: CAROUSEL_SIZE },
  (_, i) => BASE_IMAGES[i % BASE_IMAGES.length]!
);

interface Waitlist1Props {
  className?: string;
  /** Optional list of image URLs for the gradient carousel. Defaults to site assets. */
  carouselImages?: string[];
}

const Waitlist1 = ({ className, carouselImages = DEFAULT_CAROUSEL_IMAGES }: Waitlist1Props) => {
  return (
    <SectionShell className={cn("overflow-visible", className)}>
      <PageContainer>
        <div className="mx-auto flex max-w-xl flex-col items-center gap-8 text-center">
          <div className="space-y-3">
            <h2 className="type-h2 font-[var(--weight-semibold)] text-[var(--foreground)]">
              Join the Waitlist
            </h2>
            <p className="type-body-base text-[var(--text-secondary)]">
              Be the first to know when we launch new products and features.
              Enter your email below to get early access.
            </p>
          </div>

          <GradientCarousel images={carouselImages} className="mt-6 w-full" />
        </div>
      </PageContainer>
    </SectionShell>
  );
};

export { Waitlist1 };
