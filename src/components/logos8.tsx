import { cn } from "@/lib/utils";

interface Logo {
  name: string;
  logo: string;
  className: string;
}

interface Logos8Props {
  title?: string;
  subtitle?: string;
  logos?: Logo[];
  className?: string;
}

const Logos8 = ({
  title = "Backed by leading partners",
  subtitle = "Trusted by global accelerators and institutional partners",
  logos = [
    {
      name: "SparkLabs",
      logo: "/images/logo-sparklabs.png",
      className: "h-8 w-auto max-w-[140px] object-contain",
    },
    {
      name: "IGI Life & Vitality",
      logo: "/images/logo-igi-vitality.png",
      className: "h-8 w-auto max-w-[160px] object-contain",
    },
    {
      name: "VEF",
      logo: "/images/logo-vef.png",
      className: "h-8 w-auto max-w-[100px] object-contain",
    },
    {
      name: "Y Combinator",
      logo: "/images/logo-yc.png",
      className: "h-10 w-auto max-w-[160px] object-contain",
    },
  ],
  className,
}: Logos8Props) => {
  return (
    <section
      className={cn(
        "flex h-fit flex-col items-center justify-center px-6 py-16 md:px-20",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="flex w-full flex-col items-center justify-center text-center">
          <h2 className="type-h2 font-[var(--weight-semibold)]">{title}</h2>
          <p className="type-body-base mt-1 text-[var(--text-secondary)]">{subtitle}</p>
          <div className="mt-8 flex w-full flex-wrap items-center justify-center gap-x-8 gap-y-6 lg:gap-12">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo.logo}
                alt={`${logo.name} logo`}
                width={109}
                height={48}
                className={logo.className}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Logos8 };
