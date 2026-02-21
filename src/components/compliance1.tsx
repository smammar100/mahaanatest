import Image from "next/image";

import { cn } from "@/lib/utils";

import { PageContainer } from "@/components/ui/container";
import { SectionShell } from "@/components/ui/section-shell";

interface Compliance1Props {
  className?: string;
}

const Compliance1 = ({ className }: Compliance1Props) => {
  return (
    <SectionShell className={cn("w-full bg-muted/50", className)}>
      <PageContainer>
        <div className="grid gap-9 lg:grid-cols-2">
          <div className="flex flex-col gap-5">
            <h2 className="type-h2 font-[var(--weight-semibold)] text-balance">
              Your Security Is Our #1 Priority
            </h2>
            <p className="type-body-base text-[var(--text-secondary)]">
              Mahaana Wealth is regulated by the Securities and Exchange
              Commission of Pakistan (SECP). Your funds are held with CDC, and
              we use bank-grade encryption to protect every transaction.
            </p>
          </div>
          <div className="rounded-[var(--radius-xl)] border border-stroke-subtle bg-background">
            <div className="relative overflow-hidden border-b border-stroke-subtle p-6 lg:px-8 lg:py-11">
              <div>
                <h3 className="type-h4 font-[var(--weight-medium)]">
                  SECP Regulated
                </h3>
                <p className="type-body-base mt-2 w-full text-[var(--text-secondary)] md:w-3/4 md:pr-10">
                  Licensed and regulated by the Securities and Exchange
                  Commission of Pakistan as a Non-Banking Financial Company
                  (NBFC).
                </p>
              </div>
              <Image
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/compliance/ISO-27001.svg"
                alt="ISO 27001 information security certification"
                width={128}
                height={128}
                className="absolute right-4 -bottom-7 size-24 text-[var(--text-secondary)] opacity-80 grayscale lg:right-8 lg:size-32 dark:invert"
                loading="lazy"
              />
            </div>
            <div className="relative overflow-hidden p-6 lg:px-8 lg:py-11">
              <div>
                <h3 className="type-h4 font-[var(--weight-medium)]">
                  CDC Custodianship
                </h3>
                <p className="type-body-base mt-2 w-full text-[var(--text-secondary)] md:w-3/4 md:pr-10">
                  All investor assets are held with the Central Depository
                  Company (CDC) for independent safekeeping and transparency.
                </p>
              </div>
              <Image
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/compliance/ISO-27017.svg"
                alt="ISO 27017 cloud security certification"
                width={128}
                height={128}
                className="absolute right-4 -bottom-7 size-24 text-[var(--text-secondary)] opacity-80 grayscale lg:right-8 lg:size-32 dark:invert"
                loading="lazy"
              />
            </div>
            <div className="relative overflow-hidden border-t border-stroke-subtle p-6 lg:px-8 lg:py-11">
              <div>
                <h3 className="type-h4 font-[var(--weight-medium)]">
                  Bank-Grade Encryption
                </h3>
                <p className="type-body-base mt-2 w-full text-[var(--text-secondary)] md:w-3/4 md:pr-10">
                  256-bit SSL encryption and multi-factor authentication protect
                  your data and transactions at all times.
                </p>
              </div>
              <Image
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/compliance/ISO-27018.svg"
                alt="ISO 27018 cloud privacy certification"
                width={128}
                height={128}
                className="absolute right-4 -bottom-7 size-24 text-[var(--text-secondary)] opacity-80 grayscale lg:right-8 lg:size-32 dark:invert"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </PageContainer>
    </SectionShell>
  );
};

export { Compliance1 };
