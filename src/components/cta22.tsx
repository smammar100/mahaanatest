import Image from "next/image";

import { Button } from "@/components/ui/button";
import { PageContainer } from "@/components/ui/container";
import { SectionReveal } from "@/components/ui/section-reveal";
import { SectionShell } from "@/components/ui/section-shell";

interface Cta22Props {
  badge?: string;
  heading?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  className?: string;
}

export function Cta22({
  badge = "Join thousands of smart investors",
  heading = "We're changing the way Pakistanis save & invest every day",
  description,
  buttonText = "Open an account",
  buttonHref = "#",
  className,
}: Cta22Props) {
  return (
    <SectionShell className={className}>
      <PageContainer>
        <SectionReveal>
          <div className="relative min-h-[200px] overflow-hidden rounded-[var(--radius-xl)] bg-brand-gradient px-6 py-12 text-center md:px-12 md:py-16 lg:px-16 lg:py-20">
            <Image
              src="/images/cta-sparkle.png"
              alt=""
              fill
              sizes="100vw"
              className="pointer-events-none object-cover opacity-25"
              aria-hidden
            />
            <div className="relative mx-auto max-w-2xl">
              {badge && (
                <div className="type-body-sm mb-4 inline-flex items-center gap-2 rounded-[var(--radius)] bg-white/25 px-4 py-2 text-white shadow-ds-xs">
                  <Image
                    src="/images/cta-ranking.png"
                    alt=""
                    width={18}
                    height={18}
                    className="size-[18px]"
                    aria-hidden
                  />
                  <span>{badge}</span>
                </div>
              )}
              <h2 className="type-h2 font-[var(--weight-semibold)] text-white">
                {heading}
              </h2>
              {description && (
                <p className="type-body-lg mt-3 text-white/90">{description}</p>
              )}
              <div className="mt-8">
                <Button
                  variant="primaryGradient"
                  className="type-body-base rounded-[var(--radius)] px-7 py-3"
                  asChild
                >
                  <a href={buttonHref}>{buttonText}</a>
                </Button>
              </div>
            </div>
          </div>
        </SectionReveal>
      </PageContainer>
    </SectionShell>
  );
}
