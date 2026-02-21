import { ArrowRight } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { BackgroundBeams } from "@/components/ui/background-beams";

const defaultSteps = [
  {
    title: "Sign up & answer a few questions",
    text: "Complete your profile in under 10 minutes and start investing with us.",
  },
  {
    title: "Fund your account",
    text: "Open your Mahaana account with as little as PKR 1,000—no hidden fees.",
  },
  {
    title: "Voilà! Watch your savings grow",
    text: "Our investors earned 20.48% per annum in May 2024*. Track your growth in the app.",
  },
];

interface Feature272Props {
  className?: string;
  headingLine1?: string;
  headingLine2?: string;
  steps?: { title: string; text: string }[];
  ctaText?: string;
}

const Feature272 = ({
  className,
  headingLine1 = "Open your Mahaana account",
  headingLine2 = "in just a few steps",
  steps = defaultSteps,
  ctaText = "Open an account",
}: Feature272Props) => {
  return (
    <section
      className={cn(
        "dark relative flex flex-row flex-wrap items-center justify-center h-full w-screen overflow-hidden bg-brand-gradient-dark py-32 text-white border-0 border-transparent rounded-none",
        className,
      )}
    >
      <div className="relative z-20 flex h-full w-full flex-col items-center justify-center gap-10">
        <h2 className="type-h2 container text-center font-[var(--weight-semibold)] tracking-tighter lg:text-5xl">
          {headingLine1}
          <br />
          {headingLine2}
        </h2>
        <div className="relative flex w-full flex-col md:flex-row justify-start px-0">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className={cn(
                "relative min-w-0 space-y-5 border border-white/20 p-10 text-center md:flex-1",
                index === 0 && "rounded-l-lg",
                index > 0 && index < steps.length - 1 && "rounded-none",
                index === steps.length - 1 && "rounded-r-lg",
              )}
            >
              <p className="type-caption text-white/80 uppercase tracking-wide">
                Step {index + 1}
              </p>
              <h3 className="type-h4 font-[var(--weight-semibold)] tracking-tighter">
                {step.title}
              </h3>
              <p className="type-body-base text-white/80">{step.text}</p>
              {index < steps.length - 1 && (
                <div className="absolute right-1/2 -bottom-5 z-10 flex size-10 translate-x-1/2 rotate-90 items-center justify-center gap-2 rounded-full border border-white bg-white md:top-1/2 md:-right-5 md:translate-x-0 md:-translate-y-1/2 md:rotate-0">
                  <ArrowRight className="size-6 !text-black" />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="container flex justify-center">
          <Button
            type="button"
            variant="outline"
            className="type-body-base rounded-[var(--radius)] border-0 shadow-none bg-white dark:bg-white px-8 py-4 text-black hover:bg-white/90 hover:text-black"
          >
            {ctaText}
          </Button>
        </div>
      </div>
      <BackgroundBeams className="pointer-events-none bg-transparent" />
    </section>
  );
};

export { Feature272 };
