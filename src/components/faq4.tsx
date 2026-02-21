"use client";

import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export interface Faq4Item {
  question: string;
  answer: string;
  badge?: string;
}

interface Faq4Props {
  headline: string;
  subhead?: string;
  items: Faq4Item[];
  className?: string;
}

function Faq4({
  headline,
  subhead,
  items,
  className,
}: Faq4Props) {
  return (
    <div
      className={cn(
        "mx-auto flex w-full max-w-[806px] flex-col items-center text-center",
        className,
      )}
    >
      <h2 className="type-h2 font-[var(--weight-semibold)] text-[var(--foreground)]">
        {headline}
      </h2>
      {subhead && (
        <p className="type-body-lg mt-3 max-w-2xl text-[var(--text-secondary)]">
          {subhead}
        </p>
      )}

      <Accordion
        type="single"
        defaultValue={items[0] ? "faq-0" : undefined}
        collapsible
        className="mt-10 w-full flex flex-col gap-[var(--space-4)]"
      >
        {items.map((item, i) => (
          <Card
            key={item.question}
            className="overflow-hidden rounded-[var(--radius)] border border-stroke-subtle bg-surface-elevated px-6 shadow-ds-md"
          >
            <AccordionItem value={`faq-${i}`} className="border-b-0">
              <AccordionTrigger className="py-6 hover:no-underline">
                <div className="flex flex-col items-start gap-2 text-left">
                  {item.badge && (
                    <Badge variant="secondary" className="h-fit">
                      {item.badge}
                    </Badge>
                  )}
                  <span className="type-h5 font-[var(--weight-medium)] text-[var(--foreground)]">
                    {item.question}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-0 text-left">
                <p className="type-body-base pb-6 text-left text-[var(--text-secondary)]">
                  {item.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          </Card>
        ))}
      </Accordion>
    </div>
  );
}

export { Faq4 };
