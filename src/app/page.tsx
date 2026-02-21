import dynamic from "next/dynamic";
import { Hero245 } from "@/components/hero245";
import { Navbar3 } from "@/components/navbar3";

const Hero187bDynamic = dynamic(
  () => import("@/components/hero187b").then((m) => m.Hero187b),
  { ssr: true }
);
const Feature272Dynamic = dynamic(
  () => import("@/components/feature272").then((m) => m.Feature272),
  { ssr: true }
);
const Gallery24Dynamic = dynamic(
  () => import("@/components/gallery24").then((m) => m.Gallery24),
  { ssr: true }
);
const Testimonial11Dynamic = dynamic(
  () => import("@/components/testimonial11").then((m) => m.Testimonial11),
  { ssr: true }
);
const Blog12Dynamic = dynamic(
  () => import("@/components/blog12").then((m) => m.Blog12),
  { ssr: true }
);
const FAQSectionDynamic = dynamic(
  () => import("@/components/FAQSection").then((m) => m.default),
  { ssr: true }
);
const CTASectionDynamic = dynamic(
  () => import("@/components/CTASection").then((m) => m.default),
  { ssr: true }
);
const FooterDynamic = dynamic(
  () => import("@/components/Footer").then((m) => m.default),
  { ssr: true }
);

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar3 />
      <main id="main-content" className="scroll-mt-20 pt-16">
        <Hero245 />
        <Hero187bDynamic
          className="bg-background"
          heading="High-yield savings, without the bank restrictions."
          description="Protect your purchasing power and build your safety net. Save+ gives you access to institutional-level, low-risk funds that deliver steady growth, all with the flexibility to access your money whenever you need it."
          buttonPrimary={{ text: "Open a Save+ account", href: "#" }}
          buttonSecondary={{ text: "Learn how it works", href: "#" }}
          features={[
            { title: "Build wealth securely with low-risk, optimized funds", description: "" },
            { title: "Completely liquid—withdraw your money anytime you want", description: "" },
            { title: "Secure, SECP-regulated, and built for your peace of mind", description: "" },
          ]}
          images={[
            { src: "/images/feature2-investing-goal.png", alt: "Person viewing smartphone: Emergency fund goal reached" },
            { src: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80", alt: "Investing and growth" },
            { src: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80", alt: "Financial planning" },
          ]}
        />
        <Hero187bDynamic
          className="bg-background"
          imageOnRight
          imageClassName="object-[55%_50%]"
          heading="Build your future. Cut your tax bill by up to 20%."
          description="Grow your long-term savings with a Shariah-compliant, tax-efficient retirement plan. We build a personalized portfolio based on your goals, allowing you to build wealth securely while significantly reducing your monthly income tax."
          buttonPrimary={{ text: "Open a retirement account", href: "#" }}
          buttonSecondary={{ text: "Learn how it works", href: "#" }}
          features={[
            { title: "Claim up to a 20% income tax credit on your contributions", description: "" },
            { title: "100% Shariah-compliant, expert-curated portfolios", description: "" },
            { title: "Personalized to your unique risk level and retirement goals", description: "" },
          ]}
          images={[
            { src: "/images/retirement-couple-balcony.png", alt: "Couple on balcony enjoying tea with mountain view" },
            { src: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80", alt: "Investing and growth" },
          ]}
        />
        <Feature272Dynamic />
        <Gallery24Dynamic className="bg-background" />
        <Testimonial11Dynamic />
        <Blog12Dynamic
          heading="In News & Media"
          description="See how Mahaana is covered in Pakistan's leading financial publications—and what it means for investors like you."
          buttonText="Read all insights"
          buttonUrl="#"
          posts={[
            {
              id: "post-1",
              title:
                "Mahaana Wealth: making mutual fund investing accessible to all Pakistanis",
              summary:
                "How Mahaana's digital-first platform is helping everyday Pakistanis start investing in mutual funds with confidence and ease.",
              label: "Business Recorder",
              author: "Mahaana",
              published: "1 Jan 2024",
              url: "#",
              image: "/images/blog-1.png",
              readTime: "5 min read",
            },
            {
              id: "post-2",
              title:
                "How passive investing is reshaping Pakistan's retail investment landscape",
              summary:
                "A closer look at how ETFs and index-based strategies are creating new long-term wealth opportunities for local investors.",
              label: "Financial Times PK",
              author: "Mahaana",
              published: "1 Jan 2024",
              url: "#",
              image: "/images/blog-2.png",
              readTime: "5 min read",
            },
            {
              id: "post-3",
              title:
                "Mahaana launches Pakistan's first index-tracking Exchange Traded Fund (MIETF)",
              summary:
                "Coverage of MIETF's launch and what it means for transparent, low-cost passive investing in Pakistan.",
              label: "Business Recorder",
              author: "Mahaana",
              published: "1 Jan 2024",
              url: "#",
              image: "/images/blog-3.png",
              readTime: "5 min read",
            },
          ]}
        />
        <FAQSectionDynamic />
        <CTASectionDynamic />
      </main>
      <FooterDynamic />
    </div>
  );
}
