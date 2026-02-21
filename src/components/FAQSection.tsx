"use client";

import { PageContainer } from "@/components/ui/container";
import { Faq4 } from "@/components/faq4";
import { SectionReveal } from "@/components/ui/section-reveal";
import { SectionShell } from "@/components/ui/section-shell";

const faqs = [
  {
    q: "I prefer low risk investments. Do you have something for me?",
    a: "Yes, Mahaana Save+ is ideal for low-risk investing. You can invest and withdraw funds at any time while making greater returns than a bank savings account.",
  },
  {
    q: "What is the minimum amount to start investing?",
    a: "You can start investing with as little as PKR 1,000. There is no maximum limit.",
  },
  {
    q: "Are Mahaana's funds Shariah compliant?",
    a: "Yes, all our funds are screened and approved by an independent Shariah Advisory Board to ensure full compliance with Islamic investment principles.",
  },
  {
    q: "How do I withdraw my money?",
    a: "You can request a withdrawal anytime through the app. Funds are typically transferred to your bank account within 2-3 business days.",
  },
  {
    q: "Is my money safe with Mahaana?",
    a: "Absolutely. Mahaana is regulated by SECP, and all funds are held with CDC (Central Depository Company). We use bank-grade encryption for all transactions.",
  },
  {
    q: "What returns can I expect?",
    a: "Returns vary depending on market conditions and the fund you choose. Our Mahaana Save+ fund has historically delivered competitive returns. Past performance is not indicative of future results.",
  },
];

export default function FAQSection() {
  const items = faqs.map((faq) => ({
    question: faq.q,
    answer: faq.a,
  }));

  return (
    <SectionShell id="faq" className="scroll-mt-20">
      <PageContainer className="flex flex-col items-center">
        <SectionReveal>
        <Faq4
          headline="Frequently Asked Questions"
          subhead="Find answers to common questions about Mahaana investing, accounts, and Shariah compliance."
          items={items}
        />
        </SectionReveal>
      </PageContainer>
    </SectionShell>
  );
}
