import Image from "next/image";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { PageContainer } from "@/components/ui/container";
import { SectionShell } from "@/components/ui/section-shell";

interface Feature2Props {
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

const Feature2 = ({
  title = "Grow Your Wealth with Shariah-Compliant Funds",
  description = "Mahaana offers SECP-approved mutual funds that align with Islamic principles and aim for competitive long-term returns—so you can grow your wealth with confidence.",
  imageSrc = "/images/feature2-investing-goal.png",
  imageAlt = "Person in living room viewing smartphone notification: Emergency fund goal reached, with green checkmark",
  buttonPrimary = {
    text: "Start Investing",
    href: "https://shadcnblocks.com",
  },
  buttonSecondary = {
    text: "Learn More",
    href: "https://shadcnblocks.com",
  },
  className,
}: Feature2Props) => {
  return (
    <SectionShell className={className}>
      <PageContainer>
        <div className="grid items-center gap-8 md:gap-16 lg:grid-cols-2">
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
        </div>
      </PageContainer>
    </SectionShell>
  );
};

export { Feature2 };
