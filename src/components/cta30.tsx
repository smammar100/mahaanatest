import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";
import { PageContainer } from "@/components/ui/container";
import { SectionReveal } from "@/components/ui/section-reveal";
import { SectionShell } from "@/components/ui/section-shell";

interface Cta30Props {
  badge?: string;
  heading?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  className?: string;
}

export function Cta30({
  badge = "Join thousands of smart investors",
  heading = "We're changing the way Pakistanis save & invest every day",
  description,
  buttonText = "Open an account",
  buttonHref = "#",
  className,
}: Cta30Props) {
  return (
    <SectionShell className={className}>
      <PageContainer>
        <SectionReveal>
          <div className="dark relative overflow-hidden rounded-[var(--radius-xl)] border-0 bg-brand-gradient-dark px-6 py-12 text-center md:px-12 md:py-16 lg:px-16 lg:py-20">
            <BackgroundBeams className="pointer-events-none bg-transparent" />
            <div className="relative z-10 mx-auto max-w-2xl">
              {badge && (
                <div className="type-body-sm mb-4 inline-flex w-fit items-center gap-2 rounded-[var(--radius)] bg-white/25 px-2 py-2 shadow-ds-xs">
                  <span className="text-white">✨ {badge} ✨</span>
                </div>
              )}
              <h2 className="type-h2 font-[var(--weight-semibold)] tracking-tight text-white">
                {heading}
              </h2>
              {description && (
                <p className="type-body-lg mt-3 text-white/90">{description}</p>
              )}
              <div className="mt-8">
                <Button
                  type="button"
                  variant="outline"
                  className="type-body-base rounded-[var(--radius)] border-0 bg-white px-7 py-3 font-[var(--weight-medium)] text-black shadow-ds-md hover:bg-white/90 hover:text-black focus-visible:ring-white/30 dark:border-0 dark:bg-white dark:text-black dark:hover:bg-white/90 dark:hover:text-black"
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
