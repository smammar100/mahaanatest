"use client";

import {
  ArrowUpRight,
  BarChart,
  Bitcoin,
  BookOpen,
  Building,
  Building2,
  ChevronLeft,
  ChevronRight,
  Cloud,
  Cpu,
  FileCode,
  Film,
  Fingerprint,
  GraduationCap,
  HeartPulse,
  LayoutGrid,
  Leaf,
  Lock,
  Menu,
  Users,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { cn } from "@/lib/utils";

import {
  Logo,
  LogoImageDesktop,
  LogoImageMobile,
} from "@/components/logo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const solutions = [
  {
    title: "Cloud Infrastructure",
    description: "Scalable cloud solutions built for modern businesses.",
    href: "#",
    icon: Cloud,
  },
  {
    title: "Security & Compliance",
    description: "Enterprise-grade security with automated compliance.",
    href: "#",
    icon: Lock,
  },
  {
    title: "Identity Management",
    description: "Advanced authentication and access control systems.",
    href: "#",
    icon: Fingerprint,
  },
];

const useCases = [
  { title: "Banking", href: "#", icon: Building2 },
  { title: "Healthcare", href: "#", icon: HeartPulse },
  { title: "Technology", href: "#", icon: Cpu },
  { title: "Education", href: "#", icon: GraduationCap },
  { title: "Agriculture", href: "#", icon: Leaf },
  { title: "BaaS", href: "#", icon: Building },
  { title: "Entertainment", href: "#", icon: Film },
  { title: "SaaS", href: "#", icon: BarChart },
  { title: "Crypto", href: "#", icon: Bitcoin },
];

const documentationLinks = [
  { title: "API Reference", href: "#" },
  { title: "SDK Documentation", href: "#" },
  { title: "Integration Guides", href: "#" },
  { title: "Code Examples", href: "#" },
];

const resources = [
  {
    title: "Blog",
    description: "Latest insights, tutorials, and industry best practices.",
    href: "#",
  },
  {
    title: "News",
    description: "Product updates, announcements, and company news.",
    href: "#",
  },
];

interface Navbar3Props {
  className?: string;
}

const Navbar3 = ({ className }: Navbar3Props) => {
  const [open, setOpen] = useState(false);
  const [submenu, setSubmenu] = useState<
    "platform" | "usecases" | "developers" | "resources" | null
  >(null);

  return (
    <header
      className={cn(
        "sticky top-0 z-30 w-full border-b border-stroke-subtle bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        className,
      )}
    >
      <div className="container mx-auto max-w-[1440px] min-w-full w-full bg-white px-6 md:px-10 lg:px-16">
        <NavigationMenu className="min-w-full w-full [&>div:last-child]:left-1/2 [&>div:last-child]:-translate-x-1/2">
          <div className="flex h-fit w-full items-center justify-between gap-0 py-4">
            {/* Logo */}
            <div>
              {(!open || !submenu) && (
                <>
                  <Logo url="#">
                    <LogoImageDesktop
                      src="/images/mahaana-purple-logo.svg"
                      className="h-6 w-auto"
                      alt="Mahaana"
                    />
                    <LogoImageMobile
                      src="/images/mahaana-purple-logo.svg"
                      className="h-6 w-auto"
                      alt="Mahaana"
                    />
                  </Logo>
                </>
              )}
              {open && submenu && (
                <Button variant="outline" onClick={() => setSubmenu(null)}>
                  Back
                  <ChevronLeft className="ml-2 size-4" />
                </Button>
              )}
            </div>

            <div className="relative flex gap-4 px-4">
            <NavigationMenuList className="hidden lg:flex lg:gap-4">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="rounded-[var(--radius-md)] bg-transparent px-0 py-0 font-[var(--weight-regular)] text-[var(--text-secondary)] shadow-none hover:bg-transparent hover:p-2 hover:underline hover:text-[var(--foreground)] focus-visible:ring-0">
                  Platform
                </NavigationMenuTrigger>
                <NavigationMenuContent className="min-w-[900px] p-6">
                  <div className="grid grid-cols-[1fr_1fr_1fr] gap-6">
                    <NavigationMenuLink
                      href="#"
                      className="group p-0 hover:bg-transparent"
                    >
                      <div className="overflow-clip rounded-[var(--radius-lg)] border border-[var(--input)] bg-background">
                        <div className="flex aspect-[4/3] items-center justify-center bg-surface-subtle">
                          <LayoutGrid className="size-12 text-[var(--text-secondary)]" aria-hidden />
                        </div>
                        <div className="p-5 xl:p-8">
                          <div className="mb-2 type-body-base">
                            Platform Overview
                          </div>
                          <div className="type-body-sm font-[var(--weight-regular)] text-[var(--text-secondary)]">
                            Discover how our platform transforms your workflow.
                          </div>
                        </div>
                      </div>
                    </NavigationMenuLink>
                    <NavigationMenuLink
                      href="#"
                      className="group p-0 hover:bg-transparent"
                    >
                      <div className="overflow-clip rounded-[var(--radius-lg)] border border-[var(--input)] bg-background">
                        <div className="flex aspect-[4/3] items-center justify-center bg-surface-subtle">
                          <LayoutGrid className="size-12 text-[var(--text-secondary)]" aria-hidden />
                        </div>
                        <div className="p-5 xl:p-8">
                          <div className="mb-2 type-body-base">
                            Platform Overview
                          </div>
                          <div className="type-body-sm font-[var(--weight-regular)] text-[var(--text-secondary)]">
                            Discover how our platform transforms your workflow.
                          </div>
                        </div>
                      </div>
                    </NavigationMenuLink>
                    <div className="flex h-fit flex-col">
                      <div className="mb-3 type-caption tracking-widest text-[var(--text-secondary)] uppercase">
                        Solutions
                      </div>
                      <div className="flex flex-1 flex-col gap-0">
                        {solutions.map((solution, index) => (
                          <NavigationMenuLink
                            key={index}
                            href={solution.href}
                            className="group block p-4"
                          >
                            <div className="mb-1 type-body-base">
                              {solution.title}
                            </div>
                            <div className="type-body-sm font-[var(--weight-regular)] text-[var(--text-secondary)]">
                              {solution.description}
                            </div>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="rounded-[var(--radius-md)] bg-transparent px-0 py-0 font-[var(--weight-regular)] text-[var(--text-secondary)] shadow-none hover:bg-transparent hover:p-2 hover:underline hover:text-[var(--foreground)] focus-visible:ring-0">
                  Use cases
                </NavigationMenuTrigger>
                <NavigationMenuContent className="min-w-[900px] p-6">
                  <div className="flex justify-between gap-4">
                    <div className="w-1/2 max-w-[510px]">
                      <div className="mb-6 type-caption tracking-widest text-[var(--text-secondary)] uppercase">
                        Use cases
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        {useCases.map((useCase, index) => (
                          <NavigationMenuLink
                            key={index}
                            href={useCase.href}
                            className="group flex flex-row items-center gap-5"
                          >
                            <div className="type-body-base">{useCase.title}</div>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                    <NavigationMenuLink
                      href="#"
                      className="group flex-1 p-0 hover:bg-transparent"
                    >
                      <div className="flex h-full rounded-[var(--radius-lg)] border border-[var(--input)] bg-background p-0 hover:bg-transparent">
                        <div className="flex w-2/5 max-w-[310px] shrink-0 items-center justify-center overflow-clip rounded-tl-lg rounded-bl-lg bg-surface-subtle">
                          <Users className="size-12 text-[var(--text-secondary)]" aria-hidden />
                        </div>
                        <div className="flex flex-col p-5 xl:p-8">
                          <div className="mb-8 type-caption tracking-widest text-[var(--text-secondary)] uppercase">
                            For user persona
                          </div>
                          <div className="mt-auto">
                            <div className="mb-4 type-h4">
                              Call to action for user persona
                            </div>
                            <div className="type-body-sm font-[var(--weight-regular)] text-[var(--text-secondary)]">
                              Tailored solutions designed specifically for your
                              team&apos;s unique needs.
                            </div>
                          </div>
                        </div>
                      </div>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="rounded-[var(--radius-md)] bg-transparent px-0 py-0 font-[var(--weight-regular)] text-[var(--text-secondary)] shadow-none hover:bg-transparent hover:p-2 hover:underline hover:text-[var(--foreground)] focus-visible:ring-0">
                  Developers
                </NavigationMenuTrigger>
                <NavigationMenuContent className="min-w-[900px] p-6">
                  <div className="flex justify-between gap-8">
                    <div className="w-1/3 max-w-[404px]">
                      <div className="mb-4 type-caption tracking-widest text-[var(--text-secondary)] uppercase">
                        Documentation
                      </div>
                      <div className="mb-6 type-body-sm font-[var(--weight-regular)] text-[var(--text-secondary)]">
                        Call to action for developers
                      </div>
                      <div className="-ml-2.5 space-y-2.5">
                        {documentationLinks.map((doc, index) => (
                          <NavigationMenuLink
                            key={index}
                            href={doc.href}
                            className="group flex flex-row items-center gap-2.5 rounded-[var(--radius-md)] p-2.5 focus:text-accent-foreground"
                          >
                            <ArrowUpRight className="size-4" />
                            <div className="type-body-base">{doc.title}</div>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                    <div className="max-w-[760px] flex flex-1 flex-col space-y-6">
                      <NavigationMenuLink
                        href="#"
                        className="flex flex-row items-center overflow-clip rounded-[var(--radius-lg)] border border-[var(--input)] bg-background p-0 hover:bg-transparent"
                      >
                        <div className="flex-1 p-5 xl:p-8">
                          <div className="mb-2 type-body-base">Showcase link</div>
                          <div className="type-body-sm font-[var(--weight-regular)] text-[var(--text-secondary)]">
                            Explore real-world implementations and success
                            stories from our community.
                          </div>
                        </div>
                        <div className="flex h-[154px] max-w-[264px] shrink-0 items-center justify-center bg-surface-subtle">
                          <FileCode className="size-10 text-[var(--text-secondary)]" aria-hidden />
                        </div>
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href="#"
                        className="flex flex-row items-center overflow-clip rounded-[var(--radius-lg)] border border-[var(--input)] bg-background p-0 hover:bg-transparent"
                      >
                        <div className="flex-1 p-5 xl:p-8">
                          <div className="mb-2 type-body-base">
                            Another showcase link
                          </div>
                          <div className="type-body-sm font-[var(--weight-regular)] text-[var(--text-secondary)]">
                            Learn best practices and advanced techniques from
                            expert developers.
                          </div>
                        </div>
                        <div className="flex h-[154px] max-w-[264px] shrink-0 items-center justify-center bg-surface-subtle">
                          <BookOpen className="size-10 text-[var(--text-secondary)]" aria-hidden />
                        </div>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="rounded-[var(--radius-md)] bg-transparent px-0 py-0 font-[var(--weight-regular)] text-[var(--text-secondary)] shadow-none hover:bg-transparent hover:p-2 hover:underline hover:text-[var(--foreground)] focus-visible:ring-0">
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent className="min-w-[900px] p-8">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="flex flex-1 flex-col">
                      <div className="mb-6 type-caption tracking-widest text-[var(--text-secondary)] uppercase">
                        Resources
                      </div>
                      <div className="grid flex-1 grid-cols-1 gap-6 md:grid-cols-2">
                        {resources.map((resource, index) => (
                          <NavigationMenuLink
                            key={index}
                            href={resource.href}
                            className="flex h-full flex-col overflow-clip rounded-[var(--radius-lg)] border border-[var(--input)] bg-background p-5 hover:bg-surface-subtle hover:text-[var(--foreground)] xl:p-8"
                          >
                            <div className="mt-auto">
                              <div className="mb-2 type-body-base">
                                {resource.title}
                              </div>
                              <div className="type-body-sm font-[var(--weight-regular)] text-[var(--text-secondary)]">
                                {resource.description}
                              </div>
                            </div>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                    <div className="">
                      <div className="mb-6 type-caption tracking-widest text-[var(--text-secondary)] uppercase">
                        Customers
                      </div>
                      <NavigationMenuLink
                        href="#"
                        className="mb-6 flex flex-row overflow-clip rounded-[var(--radius-lg)] border border-[var(--input)] bg-background p-0 hover:bg-transparent"
                      >
                        <div className="flex-1 p-5 xl:p-8">
                          <div className="mb-2 type-body-base">Customers</div>
                          <div className="type-body-sm font-[var(--weight-regular)] text-[var(--text-secondary)]">
                            See how leading companies leverage our platform to
                            drive innovation.
                          </div>
                        </div>
                        <div className="flex w-1/3 max-w-[130px] shrink-0 items-center justify-center bg-surface-subtle">
                          <Building2 className="size-8 text-[var(--text-secondary)]" aria-hidden />
                        </div>
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href="#"
                        className="flex flex-row items-center gap-3 rounded-[var(--radius-lg)] bg-secondary/30 p-3 hover:bg-[var(--secondary)]/80 focus:bg-[var(--secondary)]/80"
                      >
                        <Badge variant="secondary">NEW</Badge>
                        <span className="type-body-sm text-ellipsis text-[var(--secondary-foreground)]">
                          Introducing our latest feature: enhanced analytics
                          dashboard
                        </span>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
            </div>
            <div className="hidden items-center gap-2 lg:flex">
              <Button variant="ghost" asChild>
                <Link href="#">Login</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#">
                  Start now
                  <ChevronRight className="size-4" />
                </Link>
              </Button>
            </div>
            <div className="flex items-center gap-4 lg:hidden">
              <Button
                variant="outline"
                size="icon"
                aria-label="Main Menu"
                onClick={() => {
                  if (open) {
                    setOpen(false);
                    setSubmenu(null);
                  } else {
                    setOpen(true);
                  }
                }}
              >
                {!open && <Menu className="size-4" />}
                {open && <X className="size-4" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu (Root) */}
          {open && (
            <div className="fixed inset-0 top-[72px] z-20 flex h-[calc(100vh-72px)] w-full flex-col overflow-scroll border-t border-stroke-subtle bg-background lg:hidden">
              <div>
                <button
                  type="button"
                  className="flex w-full items-center border-b border-stroke-subtle px-8 py-7 text-left"
                  onClick={() => setSubmenu("platform")}
                >
                  <span className="flex-1">Platform</span>
                  <ChevronRight className="size-4 shrink-0" />
                </button>
                <button
                  type="button"
                  className="flex w-full items-center border-b border-stroke-subtle px-8 py-7 text-left"
                  onClick={() => setSubmenu("usecases")}
                >
                  <span className="flex-1">Use cases</span>
                  <ChevronRight className="size-4 shrink-0" />
                </button>
                <button
                  type="button"
                  className="flex w-full items-center border-b border-stroke-subtle px-8 py-7 text-left"
                  onClick={() => setSubmenu("developers")}
                >
                  <span className="flex-1">Developers</span>
                  <ChevronRight className="size-4 shrink-0" />
                </button>
                <button
                  type="button"
                  className="flex w-full items-center border-b border-stroke-subtle px-8 py-7 text-left"
                  onClick={() => setSubmenu("resources")}
                >
                  <span className="flex-1">Resources</span>
                  <ChevronRight className="size-4 shrink-0" />
                </button>
              </div>
              <div className="mx-8 mt-auto flex flex-col gap-4 py-12">
                <Button variant="outline" asChild size="lg" className="relative">
                  <Link href="#">Login</Link>
                </Button>
                <Button asChild className="relative" size="lg">
                  <Link href="#">Start now</Link>
                </Button>
              </div>
            </div>
          )}

          {/* Mobile Menu > Platform */}
          {open && submenu === "platform" && (
            <div className="fixed inset-0 top-[72px] z-20 flex h-[calc(100vh-72px)] w-full flex-col overflow-scroll border-t border-stroke-subtle bg-background lg:hidden">
              <Link href="#" className="block space-y-6 px-8 py-8">
                <div className="flex w-full aspect-[2/1] items-center justify-center overflow-clip rounded-[var(--radius-lg)] bg-surface-subtle">
                  <LayoutGrid className="size-12 text-[var(--text-secondary)]" aria-hidden />
                </div>
                <div>
                  <div className="mb-2 type-body-base">Platform Overview</div>
                  <div className="type-body-sm font-[var(--weight-regular)] text-[var(--text-secondary)]">
                    Pellentesque nec odio id elit dapibus rutrum.
                  </div>
                </div>
              </Link>
              <div className="px-8 py-3.5 type-caption tracking-widest text-[var(--text-secondary)] uppercase">
                Solutions
              </div>
              <div className="border-t border-stroke-subtle pb-16">
                {solutions.map((solution, index) => (
                  <Link
                    key={index}
                    href={solution.href}
                    className="group flex w-full items-start border-b border-stroke-subtle px-8 py-7 text-left hover:bg-accent"
                  >
                    <div>
                      <div className="mb-1.5 type-body-base">{solution.title}</div>
                      <div className="type-body-sm font-[var(--weight-regular)] text-[var(--text-secondary)]">
                        {solution.description}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Mobile Menu > Use cases */}
          {open && submenu === "usecases" && (
            <div className="fixed inset-0 top-[72px] z-20 flex h-[calc(100vh-72px)] w-full flex-col overflow-scroll bg-background lg:hidden">
              <div className="px-8 py-3.5 type-caption tracking-widest text-[var(--text-secondary)] uppercase">
                Use cases
              </div>
              <div>
                {useCases.map((useCase, index) => (
                  <Link
                    key={index}
                    href={useCase.href}
                    className="group flex w-full items-start border-t border-stroke-subtle px-8 py-7 text-left hover:bg-accent"
                  >
                    <div className="type-body-base">{useCase.title}</div>
                  </Link>
                ))}
              </div>
              <div className="bg-secondary/30 px-8 pt-8 pb-16">
                <div className="mb-7 type-caption tracking-widest text-[var(--text-secondary)] uppercase">
                  For user persona
                </div>
                <Link href="#" className="block space-y-6">
                  <div className="flex aspect-[2/1] items-center justify-center overflow-clip rounded-[var(--radius-lg)] bg-surface-subtle">
                    <Users className="size-12 text-[var(--text-secondary)]" aria-hidden />
                  </div>
                  <div>
                    <div className="mb-1.5 type-body-base">
                      Call to action for user persona
                    </div>
                    <div className="type-body-sm font-[var(--weight-regular)] text-[var(--text-secondary)]">
                      Etiam ornare venenatis neque, sit amet suscipit diam
                      pulvinar a.
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          )}

          {/* Mobile Menu > Developers */}
          {open && submenu === "developers" && (
            <div className="fixed inset-0 top-[72px] z-20 flex h-[calc(100vh-72px)] w-full flex-col overflow-scroll border-t border-stroke-subtle bg-background lg:hidden">
              <Link href="#" className="block space-y-6 px-8 py-8">
                <div className="flex w-full aspect-[2/1] items-center justify-center overflow-clip rounded-[var(--radius-lg)] bg-surface-subtle">
                  <FileCode className="size-12 text-[var(--text-secondary)]" aria-hidden />
                </div>
                <div>
                  <div className="mb-2 type-body-base">Start with our API</div>
                  <div className="type-body-sm font-[var(--weight-regular)] text-[var(--text-secondary)]">
                    Comprehensive documentation and guides to help you integrate
                    quickly.
                  </div>
                </div>
              </Link>
              <Link
                href="#"
                className="block space-y-6 border-t border-stroke-subtle px-8 py-8"
              >
                <div className="flex w-full aspect-[2/1] items-center justify-center overflow-clip rounded-[var(--radius-lg)] bg-surface-subtle">
                  <BookOpen className="size-12 text-[var(--text-secondary)]" aria-hidden />
                </div>
                <div>
                  <div className="mb-2 type-body-base">Quick Start</div>
                  <div className="type-body-sm font-[var(--weight-regular)] text-[var(--text-secondary)]">
                    Get up and running in minutes with our step-by-step
                    tutorials and examples.
                  </div>
                </div>
              </Link>
              <div className="px-8 py-3.5 type-caption tracking-widest text-[var(--text-secondary)] uppercase">
                Documentation
              </div>
              <div className="-mx-2.5 space-y-2.5 px-8 pb-16">
                {documentationLinks.map((doc, index) => (
                  <NavigationMenuLink
                    key={index}
                    href={doc.href}
                    className="group flex flex-row items-center gap-2.5 rounded-[var(--radius-md)] px-2.5 py-[18px] focus:text-accent-foreground"
                  >
                    <div className="flex size-5 items-center justify-center rounded">
                      <ArrowUpRight className="size-3" />
                    </div>
                    <div className="type-body-sm">{doc.title}</div>
                  </NavigationMenuLink>
                ))}
              </div>
            </div>
          )}

          {/* Mobile Menu > Resources */}
          {open && submenu === "resources" && (
            <div className="fixed inset-0 top-[72px] z-20 flex h-[calc(100vh-72px)] w-full flex-col overflow-scroll bg-background lg:hidden">
              <div className="px-8 py-3.5 type-caption tracking-widest text-[var(--text-secondary)] uppercase">
                Resources
              </div>
              <div>
                {resources.map((resource, index) => (
                  <Link
                    key={index}
                    href={resource.href}
                    className="group flex w-full items-start gap-x-4 border-t border-stroke-subtle px-8 py-7 text-left hover:bg-accent"
                  >
                    <div>
                      <div className="mb-1.5 type-body-base">{resource.title}</div>
                      <div className="type-body-sm font-[var(--weight-regular)] text-[var(--text-secondary)]">
                        {resource.description}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="px-8 pt-8 pb-16">
                <div className="mb-7 type-caption tracking-widest text-[var(--text-secondary)] uppercase">
                  Customers
                </div>
                <Link href="#" className="block space-y-6">
                  <div className="flex aspect-[2/1] items-center justify-center overflow-clip rounded-[var(--radius-lg)] bg-surface-subtle">
                    <Building2 className="size-12 text-[var(--text-secondary)]" aria-hidden />
                  </div>
                  <div>
                    <div className="mb-1.5 type-body-base">Customers</div>
                    <div className="type-body-sm font-[var(--weight-regular)] text-[var(--text-secondary)]">
                      See how leading companies leverage our platform to drive
                      innovation.
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          )}
        </NavigationMenu>
      </div>
    </header>
  );
};

export { Navbar3 };
