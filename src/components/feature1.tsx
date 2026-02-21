import Image from "next/image";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { PageContainer } from "@/components/ui/container";
import { SectionShell } from "@/components/ui/section-shell";

interface Feature1Props {
  title: string;
  description?: string;
  imageSrc: string;
  imageAlt: string;
  buttonPrimary: {
    text: string;
    href: string;
  };
  buttonSecondary: {
    text: string;
    href: string;
  };
  className?: string;
}

const Feature1 = ({
  title = "Personalized Portfolios Tailored to Your Goals",
  description = "Whether you're saving for retirement, your children's education, or an emergency fund—Mahaana's smart portfolio engine builds a plan that fits your risk appetite and timeline.",
  imageSrc = "/images/feature1-goals-balcony.png",
  imageAlt = "Couple enjoying a moment together, planning for their future",
  buttonPrimary = {
    text: "Open Account",
    href: "https://shadcnblocks.com",
  },
  buttonSecondary = {
    text: "See How It Works",
    href: "https://shadcnblocks.com",
  },
  className,
}: Feature1Props) => {
  return (
    <SectionShell className={className}>
      <PageContainer>
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h2 className="type-h2 my-6 mt-0 font-[var(--weight-semibold)] text-balance">
              {title}
            </h2>
            {description && (
              <p className="type-body-lg mb-8 max-w-xl text-[var(--text-secondary)]">
                {description}
              </p>
            )}
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              <Button variant="primaryGradient" asChild>
                <a href={buttonPrimary.href} target="_blank" rel="noreferrer">
                  {buttonPrimary.text}
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href={buttonSecondary.href} target="_blank" rel="noreferrer">
                  {buttonSecondary.text}
                </a>
              </Button>
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[var(--radius-xl)] shadow-ds-md">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </PageContainer>
    </SectionShell>
  );
};

export { Feature1 };
