import Image from "next/image";

import { Button } from "@/components/ui/button";

const navItems = ["About Us", "Products", "Resources", "Security"];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-stroke-subtle bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-[60px] w-full max-w-[1440px] items-center justify-between px-6 md:px-10 lg:px-16">
        <div className="flex items-center gap-3">
          <Image
            src="/images/mahaana-purple-logo.svg"
            alt="Mahaana"
            width={120}
            height={24}
            className="h-6 w-auto"
            priority
          />
        </div>

        <nav aria-label="Primary navigation" className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Button
              key={item}
              asChild
              variant="ghost"
              className="type-body-base h-auto rounded-[var(--radius)] px-0 py-0 font-[var(--weight-regular)] text-[var(--text-secondary)] hover:bg-transparent hover:text-brand"
            >
              <a href="#" aria-label={item}>
                {item}
              </a>
            </Button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            asChild
            variant="outline"
            className="type-body-base rounded-[var(--radius)] bg-background px-4 py-2 font-[var(--weight-medium)] text-brand shadow-[0px_1px_1px_0px_rgba(18,18,18,0.1),0px_0px_0px_1px_rgba(18,18,18,0.07),0px_1px_3px_0px_rgba(18,18,18,0.1)]"
          >
            <a href="#" aria-label="Login">
              Login
            </a>
          </Button>
          <Button
            asChild
            variant="primaryGradient"
            className="type-body-base rounded-[var(--radius)] px-5 py-2"
          >
            <a href="#" aria-label="Open account">
              Open account
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
