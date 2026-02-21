import {
  BatteryCharging,
  GitPullRequest,
  Layers,
  RadioTower,
  SquareKanban,
  WandSparkles,
} from "lucide-react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { PageContainer } from "@/components/ui/container";
import { SectionShell } from "@/components/ui/section-shell";

interface Feature {
  heading: string;
  description: string;
  icon: React.ReactNode;
}

interface Feature17Props {
  label?: string;
  title?: string;
  features?: Feature[];
  className?: string;
}

const Feature17 = ({
  label = "Features",
  title = "Fully featured components for Shadcn UI & Tailwind",
  features = [
    {
      heading: "100% Digital Setup",
      description:
        "Open your investment account entirely online in under 10 minutes. No paperwork, no branch visits.",
      icon: <GitPullRequest className="size-4 md:size-6" />,
    },
    {
      heading: "Secure investing",
      description:
        "Your funds are held with CDC (Central Depository Company) and managed under strict SECP regulations.",
      icon: <SquareKanban className="size-4 md:size-6" />,
    },
    {
      heading: "Daily Profit Updates",
      description:
        "Track your portfolio performance daily with transparent, real-time profit and loss reporting.",
      icon: <RadioTower className="size-4 md:size-6" />,
    },
    {
      heading: "Shariah-compliant",
      description:
        "All funds are screened and approved by an independent Shariah Advisory Board for full compliance.",
      icon: <WandSparkles className="size-4 md:size-6" />,
    },
    {
      heading: "Data & Fund Protection",
      description:
        "Bank-grade encryption and multi-factor authentication keep your personal and financial data secure.",
      icon: <Layers className="size-4 md:size-6" />,
    },
    {
      heading: "Smart Portfolio Rebalancing",
      description:
        "Our algorithms automatically rebalance your portfolio to maintain optimal asset allocation over time.",
      icon: <BatteryCharging className="size-4 md:size-6" />,
    },
  ],
  className,
}: Feature17Props) => {
  return (
    <SectionShell className={className}>
      <PageContainer>
        {(label || title) && (
          <div className="mb-12 flex max-w-3xl flex-col gap-4">
            <Badge variant="secondary">{label}</Badge>
            <h2 className="type-h2 font-[var(--weight-semibold)]">
              {title}
            </h2>
          </div>
        )}
        <div className="grid gap-12 md:grid-cols-2">
          {features.map((feature, idx) => (
            <div className="flex gap-6 space-y-4 rounded-[var(--radius)] md:block" key={idx}>
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent md:size-12">
                {feature.icon}
              </span>
              <div>
                <h3 className="type-h4 font-[var(--weight-medium)] md:mb-2">
                  {feature.heading}
                </h3>
                <p className="type-body-base text-[var(--text-secondary)]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </PageContainer>
    </SectionShell>
  );
};

export { Feature17 };
