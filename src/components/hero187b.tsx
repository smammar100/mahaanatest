"use client";

import {
  ArrowRight,
  Blend,
  ChartNoAxesColumn,
  Check,
  CircleDot,
  Diamond,
  LayoutGrid,
  ListTodo,
  PlusCircle,
} from "lucide-react";
import NextImage from "next/image";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { PageContainer } from "@/components/ui/container";
import { SectionShell } from "@/components/ui/section-shell";

import type { HeroFeatureIconsProps, Image } from "@/lib/hero-feature-icons";

const DEFAULT_FEATURES = [
  {
    title: "Tailored workflows",
    description: "Track progress across custom issue flows for your team.",
    icon: CircleDot,
  },
  {
    title: "Milestones",
    description: "Break projects down into concrete phases.",
    icon: Diamond,
  },
  {
    title: "Cross-team projects",
    description: "Collaborate across teams and departments.",
    icon: Blend,
  },
  {
    title: "Progress insights",
    description: "Track scope, velocity, and progress over time.",
    icon: ChartNoAxesColumn,
  },
];

const DEFAULT_IMAGES: [Image, ...Image[]] = [
  { icon: LayoutGrid, alt: "Kanban", label: "Kanban" },
  { icon: ListTodo, alt: "Issues", label: "Issues" },
  { icon: PlusCircle, alt: "Add Issues", label: "Add Issues" },
];

const Hero187b = ({
  heading = "Shadcnblocks components for your next project",
  description = "Streamline is the fit-for-purpose tool for planning and building modern software products.",
  buttonPrimary = { text: "Get started", href: "#" },
  buttonSecondary = { text: "Documentation", href: "#" },
  features = DEFAULT_FEATURES,
  images = DEFAULT_IMAGES,
  imageOnRight = false,
  imageClassName,
  className,
}: HeroFeatureIconsProps) => {
  const activeImages = images ?? DEFAULT_IMAGES;
  const staticImage = activeImages[0];

  return (
    <SectionShell className={cn("relative flex h-fit flex-col items-center justify-center overflow-hidden", className)}>
      <PageContainer>
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 lg:items-stretch">
          {/* Image column - left by default, right when imageOnRight */}
          <div className={cn("relative order-2 min-h-0 w-full overflow-hidden rounded-[var(--radius-xl)] lg:h-full", imageOnRight ? "lg:order-2" : "lg:order-1")}>
            {staticImage.icon ? (
              <div className={cn("flex h-full min-h-[200px] w-full items-center justify-center bg-surface-subtle rounded-[var(--radius-xl)]", imageClassName)}>
                <staticImage.icon className="size-24 text-[var(--text-secondary)]" aria-hidden />
              </div>
            ) : staticImage.src ? (
              <NextImage
                src={staticImage.src}
                alt={staticImage.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className={cn("object-cover object-[65%_50%] rounded-[var(--radius-xl)]", imageClassName)}
              />
            ) : null}
          </div>

          {/* Content column - right by default, left when imageOnRight */}
          <div className={cn("order-1 flex flex-col space-y-6 lg:space-y-8", imageOnRight ? "lg:order-1" : "lg:order-2")}>
            <div>
              <h2 className="type-h2 my-6 mt-0 font-[var(--weight-semibold)] text-balance">
                {heading}
              </h2>

              <p className="type-body-lg mb-0 max-w-xl text-[var(--text-secondary)]">
                {description}
              </p>
            </div>

            {/* Features */}
            <div className="space-y-3">
              {features?.map((feature) => {
                const Icon = feature.icon ?? Check;
                return (
                  <div key={feature.title} className="flex gap-3">
                    <div className="shrink-0">
                      <Icon className="mt-0.5 size-5 text-primary" />
                    </div>
                    <div>
                      <h2 className="type-body-base font-[var(--weight-semibold)]">{feature.title}</h2>
                      {feature.description ? (
                        <p className="type-body-sm text-[var(--text-secondary)]">
                          {feature.description}
                        </p>
                      ) : null}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              {buttonPrimary && (
                <Button asChild size="lg" aria-label={buttonPrimary.text}>
                  <a href={buttonPrimary.href}>{buttonPrimary.text}</a>
                </Button>
              )}
              {buttonSecondary && (
                <Button asChild aria-label={buttonSecondary.text} variant="outline" size="lg">
                  <a href={buttonSecondary.href}>
                    <span className="flex items-center gap-2">
                      {buttonSecondary.text}
                      <ArrowRight className="size-4" />
                    </span>
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </PageContainer>
    </SectionShell>
  );
};

export { Hero187b };
