"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { BlurText } from "@/components/ui/blur-text";
import { Button } from "@/components/ui/button";
import { PageContainer } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { BorderBeam } from "@/components/ui/border-beam";

const regulatoryBadges = [
  {
    label: "Custodians",
    organization: "Central Depository Company (CDC)",
    img: "/images/footer-custodian.png",
  },
  {
    label: "Licensed By",
    organization: "Securities Exchange Commission Pakistan (SECP)",
    img: "/images/footer-licensed.png",
  },
  {
    label: "Member",
    organization: "Mutual Funds Association of Pakistan (MUFAP)",
    img: "/images/footer-mufap.png",
  },
];

const partnerLogos = [
  { src: "/images/logo-yc.png", alt: "Y Combinator", className: "h-14 w-full max-w-[280px] object-contain" },
  { src: "/images/logo-vef.png", alt: "VEF", className: "h-14 w-full max-w-[175px] object-contain" },
  { src: "/images/logo-igi-vitality.png", alt: "IGI Vitality", className: "h-14 w-full max-w-[245px] object-contain" },
  { src: "/images/logo-sparklabs.png", alt: "SparkLabs", className: "h-14 w-full max-w-[245px] object-contain" },
];

interface Hero245Props {
  className?: string;
}

const Hero245 = ({ className }: Hero245Props) => {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-background pt-12 pb-0",
        className,
      )}
    >
      <PageContainer className="relative flex flex-col gap-12">
        <div className="flex h-fit flex-col items-center justify-center">
          <h1 className="type-display font-[var(--weight-semibold)] tracking-tight text-center text-[var(--foreground)]">
            <BlurText
              as="span"
              text="Smart Investing to Achieve Your Life Goals"
              delay={50}
              animateBy="words"
              direction="top"
              className="block w-full text-center"
            />
          </h1>
          <p className="type-body-lg mt-4 max-w-[670px] text-center text-[var(--text-secondary)]">
            Pakistan&apos;s first licensed digital wealth manager. Get
            personalized, Shariah-compliant investing to grow your long-term
            wealth.
          </p>

          <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <Button asChild size="lg" variant="default" className="type-body-base h-12 rounded-[var(--radius)] px-7">
              <Link href="#faq">
                <span className="text-nowrap">Open an account</span>
                <ChevronRight className="ml-1 size-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {regulatoryBadges.map((badge) => (
              <Card
                key={badge.label}
                className="flex w-full items-center gap-3 rounded-[var(--radius)] border border-primary/50 bg-surface-elevated px-3 py-2 sm:w-[260px]"
              >
                <Image
                  src={badge.img}
                  alt={`${badge.label} regulatory badge`}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-[var(--radius)] object-contain"
                />
                <div className="text-brand">
                  <p className="type-caption leading-tight uppercase">{badge.label}</p>
                  <p className="type-caption font-[var(--weight-semibold)] leading-tight uppercase">
                    {badge.organization}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="relative flex h-[56vh] w-full items-center justify-center overflow-hidden rounded-[var(--radius-xl)] border">
          <iframe
            className="size-full rounded-[var(--radius-xl)] object-cover"
            src="https://www.youtube.com/embed/7KpSVR5JjfM"
            title="Hero video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
          <BorderBeam
            size={280}
            duration={12}
            delay={2}
            borderWidth={2.25}
            colorFrom="var(--color-teal-300)"
            colorTo="var(--color-coral-300)"
          />
        </div>

        <div className="group relative">
          <div className="flex flex-col items-center md:flex-row">
            <div className="md:max-w-56 md:pr-6">
              <p className="type-body-sm text-end text-[var(--text-secondary)]">Backed by leading partners</p>
            </div>
            <div className="relative flex w-full items-center justify-between gap-6 py-6 md:w-[calc(100%-14rem)] md:gap-8">
              {partnerLogos.map((logo) => (
                <div key={logo.src} className="flex min-w-0 flex-1 items-center justify-center">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={280}
                    height={56}
                    className={cn("object-contain opacity-80 hover:opacity-100", logo.className)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
};

export { Hero245 };
