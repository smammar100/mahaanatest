import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageContainer } from "@/components/ui/container";
import { SectionShell } from "@/components/ui/section-shell";

const columns = [
  {
    title: "About Mahaana",
    links: ["About Us", "Careers", "Newsroom", "Brand Kit", "Security"],
  },
  {
    title: "Our Products",
    links: [
      "MICF",
      "MIIETF",
      "Mahaana Save+",
      "Mahaana Invest (Coming Soon)",
      "Mahaana Retirement (Coming Soon)",
    ],
  },
  {
    title: "Resources",
    links: [
      "Webinars",
      "Guides",
      "Maahanomics",
      "Investment Insights",
      "Investment Calculator",
    ],
  },
  {
    title: "Support / Help",
    links: ["Contact Us", "FAQs"],
  },
];

const regulatoryBadges = [
  {
    label: "Custodians",
    organization: "Central Depository Company (CDC)",
    img: "/images/footer-custodian.png",
  },
  {
    label: "Licensed By",
    organization: "Securities Exchange Commission Pakistan (SECP)",
    img: "/images/footer-licensed.png",
  },
  {
    label: "Member Of",
    organization: "Mutual Funds Association of Pakistan",
    img: "/images/footer-mufap.png",
  },
];

export default function Footer() {
  return (
    <SectionShell as="footer">
      <PageContainer>
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div>
            <Image src="/images/mahaana-purple-logo.svg" alt="Mahaana" width={120} height={24} className="h-6 w-auto" loading="lazy" />
            <nav aria-label="Social media links" className="mt-6 flex items-center gap-3">
              {[
                "icon-facebook",
                "icon-x",
                "icon-instagram",
                "icon-linkedin",
                "icon-youtube",
              ].map((icon) => (
                <Button
                  key={icon}
                  asChild
                  variant="ghost"
                  size="icon"
                  className="h-11 w-11 p-0"
                  aria-label={icon.replace("icon-", "")}
                >
                  <a href="#" aria-label={`Follow Mahaana on ${icon.replace("icon-", "")}`}>
                    <Image
                      src={`/images/${icon}.png`}
                      alt={`${icon.replace("icon-", "")} icon`}
                      width={20}
                      height={20}
                      className="h-5 w-5"
                    />
                  </a>
                </Button>
              ))}
            </nav>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {regulatoryBadges.map((badge) => (
              <Badge
                key={badge.label}
                img={badge.img}
                label={badge.label}
                organization={badge.organization}
              />
            ))}
          </div>
        </div>

        <nav
          aria-label="Footer navigation"
          className="mt-14 grid grid-cols-1 gap-8 border-t border-stroke-subtle pt-10 md:grid-cols-4"
        >
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="type-body-base font-[var(--weight-semibold)] text-[var(--foreground)]">{column.title}</h3>
              <ul className="mt-3 space-y-2 text-[var(--text-secondary)]">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="type-body-sm cursor-pointer hover:text-[var(--text-brand)] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 rounded-[var(--radius-sm)]">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="relative mt-14 aspect-[1200/200] w-full overflow-hidden rounded-[var(--radius)]">
          <Image
            src="/images/secp-banner.png"
            alt="SECP - Securities and Exchange Commission of Pakistan. For investor complaints toll free 0800-88008. File complaints online at https://sdms.secp.gov.pk. Available on Google Play."
            fill
            sizes="(max-width: 1024px) 100vw, 1200px"
            className="object-cover"
            loading="lazy"
          />
        </div>

        <div className="mt-10 border-t border-stroke-subtle pt-4">
          <p className="type-body-base font-[var(--weight-semibold)] text-[var(--foreground)]">Disclaimer</p>
          <p className="type-body-sm mt-4 text-[var(--text-secondary)]">
            Mahaana Wealth Limited is a licensed Asset Management Company and
            Investment Advisor, registered as a NBFC (Non-Banking Financial
            Company) and regulated by the Securities and Exchange Commission of
            Pakistan (SECP). Central Depository Company (CDC) performs the
            custodial functions for Mahaana Wealth Limited products and funds.
            Past performance is not indicative of future results. All
            investments are subject to market risks.
          </p>
        </div>

        <div className="type-body-sm mt-8 flex flex-col gap-3 text-brand md:flex-row md:items-center md:justify-between">
          <p>© 2024 Mahaana Wealth (&quot;Mahaana&quot;)</p>
          <div className="flex items-center gap-2">
            <Button variant="link" asChild className="h-auto px-0 text-brand">
              <a href="#">Privacy Policy</a>
            </Button>
            <Button variant="link" asChild className="h-auto px-0 text-brand">
              <a href="#">Terms of Service</a>
            </Button>
          </div>
        </div>
      </PageContainer>
    </SectionShell>
  );
}

function Badge({
  img,
  label,
  organization,
}: {
  img: string;
  label: string;
  organization: string;
}) {
  return (
    <Card className="flex w-fit items-center gap-3 rounded-[var(--radius)] border border-primary/50 bg-surface-elevated px-3 py-2">
      <Image
        src={img}
        alt={`${label} regulatory badge`}
        width={80}
        height={48}
        className="h-12 w-[80px] rounded-[var(--radius)] object-contain"
        loading="lazy"
      />
      <div className="text-brand">
        <p className="type-caption leading-tight uppercase">{label}</p>
        <p className="type-caption font-[var(--weight-semibold)] leading-tight uppercase">
          {organization}
        </p>
      </div>
    </Card>
  );
}
