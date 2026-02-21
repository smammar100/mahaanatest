import { cn } from "@/lib/utils";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { PageContainer } from "@/components/ui/container";
import { SectionReveal } from "@/components/ui/section-reveal";
import { SectionShell } from "@/components/ui/section-shell";

const testimonials = [
  {
    id: "testimonial-1",
    text: "Mahaana made investing so simple for me. I started with just PKR 5,000 and now I can see my money growing every day. It feels great to finally have a Shariah-compliant option that actually works.",
    name: "Ahmed Raza",
    company: "Mahaana Investor, Lahore",
    avatar: "/images/avatar-1.png",
  },
  {
    id: "testimonial-2",
    text: "Finally, an app that lets me invest in halal mutual funds without the hassle. The Save+ account is perfect for my emergency fund.",
    name: "Sara Khan",
    company: "Mahaana Investor, Karachi",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
  },
  {
    id: "testimonial-3",
    text: "I was able to open my retirement account in minutes and claim my tax credit. The Shariah-compliant portfolios give me peace of mind.",
    name: "Usman Ali",
    company: "Mahaana Investor, Islamabad",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
  },
  {
    id: "testimonial-4",
    text: "Transparent, low fees, and easy to use. Mahaana has changed how I think about saving for my children's education.",
    name: "Fatima Hassan",
    company: "Mahaana Investor, Faisalabad",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
  },
  {
    id: "testimonial-5",
    text: "The best investment app in Pakistan. I love that I can track my goals and switch between Save+ and retirement in one place.",
    name: "Omar Farooq",
    company: "Mahaana Investor, Rawalpindi",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
  },
  {
    id: "testimonial-6",
    text: "Started with a small amount to test the waters. The app is intuitive and the returns on my Save+ account have been steady. Highly recommend.",
    name: "Ayesha Malik",
    company: "Mahaana Investor, Lahore",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
  },
  {
    id: "testimonial-7",
    text: "SECP-regulated and Shariah-compliant—exactly what I was looking for. My family now uses Mahaana for all our savings goals.",
    name: "Bilal Ahmed",
    company: "Mahaana Investor, Multan",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
  },
  {
    id: "testimonial-8",
    text: "The tax benefit on the retirement plan is a game-changer. I'm building my nest egg the halal way thanks to Mahaana.",
    name: "Zainab Hussain",
    company: "Mahaana Investor, Peshawar",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
  },
  {
    id: "testimonial-9",
    text: "Simple onboarding, clear dashboard, and real growth. I've recommended Mahaana to everyone in my circle.",
    name: "Hassan Mahmood",
    company: "Mahaana Investor, Quetta",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
  },
];

interface Testimonial11Props {
  className?: string;
}

const Testimonial11 = ({ className }: Testimonial11Props) => {
  return (
    <SectionShell className={cn("relative", className)}>
      <PageContainer>
        <SectionReveal>
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h2 className="type-h2 font-[var(--weight-semibold)] text-pretty">
            What our investors say
          </h2>
          <p className="type-body-lg max-w-3xl text-[var(--text-secondary)]">
            Join thousands of Pakistanis who are building wealth the Shariah-compliant way with Mahaana.
          </p>
        </div>
        <div className="mx-auto mt-10 h-fit w-full max-w-6xl columns-1 gap-4 sm:columns-2 lg:columns-3 [&>div:nth-child(n+5)]:hidden sm:[&>div:nth-child(n+5)]:inline-block sm:[&>div:nth-child(n+9)]:hidden lg:[&>div:nth-child(n+9)]:inline-block">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="my-2 inline-block w-full rounded-[var(--radius-lg)] border border-stroke-subtle bg-white py-4 px-6"
            >
              <div className="flex flex-col">
                <p className="mb-4 type-body-sm text-[var(--text-primary)]">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="flex items-center gap-1 md:gap-2">
                  <Avatar className="size-8 md:size-10">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name}</AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <p className="type-caption font-[var(--weight-medium)]">{testimonial.name}</p>
                    <p className="type-caption text-[var(--text-secondary)]">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-center">
          <Button variant="outline" asChild>
            <a href="#">Read all reviews</a>
          </Button>
        </div>
        </SectionReveal>
      </PageContainer>
    </SectionShell>
  );
};

export { Testimonial11 };
