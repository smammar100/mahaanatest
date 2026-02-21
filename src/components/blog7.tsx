import Image from "next/image";
import { ArrowRight, FileText } from "lucide-react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PageContainer } from "@/components/ui/container";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { SectionShell } from "@/components/ui/section-shell";

interface Post {
  id: string;
  title: string;
  summary: string;
  label: string;
  author: string;
  published: string;
  url: string;
  image: string;
}

interface Blog7Props {
  tagline: string;
  heading: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  posts: Post[];
  className?: string;
}

const Blog7 = ({
  tagline = "Latest Updates",
  heading = "Blog Posts",
  description = "Discover the latest trends, tips, and best practices in modern web development. From UI components to design systems, stay updated with our expert insights.",
  buttonText = "View all articles",
  buttonUrl = "https://shadcnblocks.com",
  posts = [
    {
      id: "post-1",
      title: "Getting Started with shadcn/ui Components",
      summary:
        "Learn how to quickly integrate and customize shadcn/ui components in your Next.js projects. We'll cover installation, theming, and best practices for building modern interfaces.",
      label: "Tutorial",
      author: "Sarah Chen",
      published: "1 Jan 2024",
      url: "https://shadcnblocks.com",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    },
    {
      id: "post-2",
      title: "Building Accessible Web Applications",
      summary:
        "Explore how to create inclusive web experiences using shadcn/ui's accessible components. Discover practical tips for implementing ARIA labels, keyboard navigation, and semantic HTML.",
      label: "Accessibility",
      author: "Marcus Rodriguez",
      published: "1 Jan 2024",
      url: "https://shadcnblocks.com",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    },
    {
      id: "post-3",
      title: "Modern Design Systems with Tailwind CSS",
      summary:
        "Dive into creating scalable design systems using Tailwind CSS and shadcn/ui. Learn how to maintain consistency while building flexible and maintainable component libraries.",
      label: "Design Systems",
      author: "Emma Thompson",
      published: "1 Jan 2024",
      url: "https://shadcnblocks.com",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    },
  ],
  className,
}: Blog7Props) => {
  return (
    <SectionShell id="news" className={className}>
      <PageContainer>
        <div className="mb-12 flex max-w-3xl flex-col gap-4">
          <Badge variant="secondary">{tagline}</Badge>
          <h2 className="type-h2 font-[var(--weight-semibold)]">
            {heading}
          </h2>
          <p className="type-body-lg text-[var(--text-secondary)]">{description}</p>
          <Button variant="primaryGradient" asChild className="w-fit">
            <a href={buttonUrl} className="inline-flex items-center gap-2">
              {buttonText}
              <ArrowRight className="size-4" />
            </a>
          </Button>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Card key={post.id} className="flex flex-col overflow-hidden">
              <a href={post.url} className="block">
                {post.image.includes("placeholder-dark") ? (
                  <div className="flex aspect-video w-full items-center justify-center bg-surface-subtle">
                    <FileText className="size-12 text-[var(--text-secondary)]" aria-hidden />
                  </div>
                ) : (
                  <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
              </a>
              <CardHeader>
                <Badge variant="outline" className="w-fit">
                  {post.label}
                </Badge>
                <a href={post.url}>
                  <h3 className="type-h5 font-[var(--weight-semibold)] hover:underline">
                    {post.title}
                  </h3>
                </a>
                <p className="type-body-sm text-[var(--text-secondary)]">
                  {post.author} · {post.published}
                </p>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="type-body-sm text-[var(--text-secondary)]">{post.summary}</p>
              </CardContent>
              <CardFooter>
                <Button variant="link" asChild className="h-auto p-0">
                  <a href={post.url} className="inline-flex items-center gap-2">
                    Read more
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </PageContainer>
    </SectionShell>
  );
};

export { Blog7 };
