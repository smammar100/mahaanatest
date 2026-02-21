"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { PageContainer } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { SectionShell } from "@/components/ui/section-shell";
import { Input } from "@/components/ui/input";

export default function Calculator() {
  const [initial, setInitial] = useState("PKR 1,000");
  const [monthly, setMonthly] = useState("PKR 1,000");
  const [duration, setDuration] = useState("25 years");

  const total = useMemo(() => "PKR 718,831.77", []);

  return (
    <SectionShell>
      <PageContainer>
        <div className="mx-auto max-w-[924px] text-center">
          <h2 className="type-h2 font-[var(--weight-semibold)] text-[var(--text-brand)]">
            Calculate your potential
          </h2>
          <p className="type-body-base mt-4 text-foreground">
            Check out our retirement calculator to see just how much the power
            of time and returns can help your money grow.
          </p>
        </div>

        <Card className="mx-auto mt-10 flex w-full max-w-[1100px] flex-col gap-2 border-stroke-subtle p-4 shadow-ds-xs md:flex-row">
          <CardContent className="bg-surface-subtle flex w-full flex-col justify-between rounded-[var(--radius)] p-4 md:w-[364px]">
            <div className="space-y-4">
              <Field
                id="initial-investment"
                label="Initial Investment Amount"
                value={initial}
                onChange={setInitial}
              />
              <Field
                id="monthly-contribution"
                label="Your Monthly Contribution"
                value={monthly}
                onChange={setMonthly}
              />
              <Field
                id="investment-duration"
                label="Duration"
                value={duration}
                onChange={setDuration}
              />
            </div>
            <Button variant="primaryGradient" className="type-body-sm mt-6 h-auto px-3 py-2">
              Calculate my return
            </Button>
          </CardContent>

          <CardContent className="relative flex min-h-[464px] flex-1 flex-col rounded-[var(--radius)] px-6 py-4 md:px-8">
            <p className="type-body-sm text-center text-[var(--text-secondary)]">
              How much you will make after 25 years
            </p>
            <p className="type-h3 text-center font-[var(--weight-medium)] text-[var(--foreground)]">
              {total}
            </p>

            <div className="mt-4 flex-1 rounded-[var(--radius)] border border-stroke-subtle bg-card p-4">
              <div className="relative h-[320px] overflow-hidden rounded-[var(--radius)]">
                <Image
                  src="/images/chart-line-main.png"
                  alt="Projected growth chart from year 1 to year 25"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="type-body-sm mt-3 flex items-center justify-between text-[var(--text-secondary)]">
                <span>Year 1</span>
                <span>Year 25</span>
              </div>
            </div>

            <div className="type-body-sm mt-4 flex flex-wrap items-center justify-center gap-5 text-foreground">
              {["Your Investment", "Conservative", "Balanced", "Growth"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="h-[11px] w-[4px] rounded-[var(--radius)] bg-[var(--color-info-300)]" />
                    <span>{item}</span>
                  </div>
                ),
              )}
            </div>
          </CardContent>
        </Card>
      </PageContainer>
    </SectionShell>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label htmlFor={id} className="block">
      <span className="type-body-sm text-[var(--text-secondary)]">{label}</span>
      <Input
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="type-body-base mt-1 h-12 rounded-[var(--radius)] border-0 border-b border-foreground px-0 text-foreground shadow-none focus-visible:ring-0"
      />
    </label>
  );
}
