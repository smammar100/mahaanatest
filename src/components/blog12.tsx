import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PageContainer } from "@/components/ui/container";
import { SectionReveal } from "@/components/ui/section-reveal";
import { SectionShell } from "@/components/ui/section-shell";
import { Separator } from "@/components/ui/separator";

interface Post {
  id: string;
  title: string;
  summary: string;
  label: string;
  author: string;
  published: string;
  url: string;
  image: string;
  readTime?: string;
}

interface Blog12Props {
  tagline?: string;
  heading?: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
  posts?: Post[];
  className?: string;
}

const Blog12 = ({
  tagline = "Our Blogs",
  heading = "Discover the latest trends",
  description = "Explore our blog for insightful articles, personal reflections and ideas that inspire action on the topics you care about.",
  buttonText = "View All Blogs",
  buttonUrl = "#",
  posts = [],
  className,
}: Blog12Props) => {
  return (
    <SectionShell id="news" className={cn("scroll-mt-20 bg-background", className)}>
      <PageContainer>
        <SectionReveal>
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-4 text-center">
          <h2 className="type-h2 font-[var(--weight-semibold)] text-pretty">{heading}</h2>
          <p className="type-body-lg max-w-3xl text-[var(--text-secondary)]">
            {description}
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <a
              key={post.id}
              className="cursor-pointer rounded-[var(--radius-xl)] border border-stroke-subtle bg-white transition-shadow duration-200 hover:shadow-ds-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2"
              href={post.url}
            >
              <div className="p-2">
                <div className="relative aspect-video w-full overflow-hidden rounded-[var(--radius-lg)]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="px-3 pt-2 pb-4">
                <h3 className="type-h5 mb-1 font-[var(--weight-medium)]">{post.title}</h3>
                <p className="line-clamp-2 type-body-sm text-[var(--text-secondary)]">
                  {post.summary}
                </p>
                <Separator className="my-5" />
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="size-9 rounded-full ring-1 ring-input">
                      <AvatarFallback className="type-caption">
                        {post.author.slice(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <span className="type-body-sm font-[var(--weight-regular)]">{post.author}</span>
                  </div>
                  <Badge variant="secondary" className="h-fit">
                    {post.readTime ?? "5 min read"}
                  </Badge>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button variant="outline" asChild>
            <a href={buttonUrl} className="inline-flex items-center gap-2">
              {buttonText} <ArrowRight className="h-full w-4" />
            </a>
          </Button>
        </div>
        </SectionReveal>
      </PageContainer>
    </SectionShell>
  );
};

export { Blog12 };
