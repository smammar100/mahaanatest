"use client";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PageContainer } from "@/components/ui/container";
import { SectionShell } from "@/components/ui/section-shell";

const cards = [
  {
    title: "Mahaana Save+",
    subtitle: "Daily returns on your cash.",
    cta: "Save for a rainy day",
  },
  {
    title: "Mahaana Invest",
    subtitle: "Build long-term wealth.",
    cta: "Save for your future",
  },
  {
    title: "Mahaana Retirement",
    subtitle: "Secure your future & save tax.",
    cta: "Save for retirement",
  },
];

interface Hero210Props {
  className?: string;
}

const Hero210 = ({ className }: Hero210Props) => {
  return (
    <SectionShell className={cn("bg-background", className)}>
      <PageContainer>
        <div className="mx-auto flex max-w-2xl flex-col items-center justify-center gap-4 text-center">
          <h1 className="type-h2 font-[var(--weight-semibold)] tracking-tight text-[var(--foreground)] text-balance">
            A perfect portfolio for every stage of your life.
          </h1>
          <p className="type-body-lg max-w-xl text-center text-[var(--text-secondary)] leading-[1.55]">
            I want my money to work harder for me.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <Card
              key={card.title}
              className="flex flex-col border-stroke-subtle bg-surface-elevated text-center"
            >
              <CardHeader className="text-center">
                <CardTitle className="type-body-base font-[var(--weight-semibold)] text-[var(--foreground)]">
                  {card.title}
                </CardTitle>
                <CardDescription className="type-body-sm text-[var(--text-secondary)]">
                  {card.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1" />
              <CardFooter className="justify-center pt-0">
                <Button
                  size="lg"
                  className="type-body-base w-full rounded-[var(--radius)] px-7 font-[var(--weight-medium)] sm:w-auto"
                  asChild
                >
                  <a href="#">{card.cta}</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </PageContainer>
    </SectionShell>
  );
};

export { Hero210 };
