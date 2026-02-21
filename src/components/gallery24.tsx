"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

import { cn } from "@/lib/utils";
import { PageContainer } from "@/components/ui/container";
import { SectionReveal } from "@/components/ui/section-reveal";
import { SectionShell } from "@/components/ui/section-shell";
import { useIsMobile } from "@/hooks/use-mobile";

const images = [
  {
    id: 1,
    src: "/images/hajj-saving.png",
    title: "Saving for Hajj",
    code: "#0031",
  },
  {
    id: 2,
    src: "/images/home-saving.png",
    title: "Saving for home",
    code: "#0030",
  },
  {
    id: 3,
    src: "/images/wedding-saving.png",
    title: "Saving for wedding",
    code: "#0032",
  },
  {
    id: 4,
    src: "/images/education-saving.png",
    title: "Saving for education",
    code: "#0033",
  },
  {
    id: 5,
    src: "/images/travel-saving.png",
    title: "Saving for travel",
    code: "#0033",
  },
];

interface Gallery24Props {
  className?: string;
}

const Gallery24 = ({ className }: Gallery24Props) => {
  const [activeImage, setActiveImage] = useState<number | null>(1);

  return (
    <SectionShell className={cn("h-fit", className)}>
      <PageContainer className="relative max-w-7xl overflow-x-clip">
        <SectionReveal>
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-6 text-center">
          <h2 className="type-h2 max-w-xl text-center font-[var(--weight-semibold)] tracking-tight text-[var(--foreground)]">
            Join more than 20K+ investors taking control of their financial future.
          </h2>
          <p className="type-body-lg my-0 max-w-lg text-center text-[var(--text-secondary)]">
            See how our users are getting the best out of Mahaana.
          </p>

          <div className="flex w-full items-center justify-center gap-1">
            {images
              .slice(0, useIsMobile() ? 4 : images.length)
              .map((image, index) => (
                <motion.div
                  key={image.id}
                  className="relative cursor-pointer overflow-hidden rounded-3xl border"
                  initial={{ width: "2.5rem", height: "20rem" }}
                  animate={{
                    width: activeImage === index ? "24rem" : "5rem",
                    height: activeImage === index ? "24rem" : "24rem",
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  onClick={() => setActiveImage(index)}
                  onHoverStart={() => setActiveImage(index)}
                >
                  <AnimatePresence>
                    {activeImage === index && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute h-full w-full bg-gradient-to-t from-black/80 to-transparent"
                      />
                    )}
                  </AnimatePresence>
                  <AnimatePresence>
                    {activeImage === index && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute flex h-full w-full flex-col items-end justify-end px-4 pb-10"
                      >
                        <h3 className="type-h4 w-42 text-right font-[var(--weight-semibold)] tracking-tight text-white lg:w-fit lg:whitespace-nowrap">
                          {image.title.split(" ")[0]}
                          <span className="font-playfair italic">
                            {" "}
                            {image.title.split(" ").slice(1).join(" ")}
                          </span>
                        </h3>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <Image
                    src={image.src}
                    fill
                    sizes="(max-width: 768px) 100px, 384px"
                    className={cn(
                      "object-cover",
                      image.id === 1 && "object-[center_55%]"
                    )}
                    alt={image.title}
                    loading="lazy"
                  />
                </motion.div>
              ))}
          </div>
        </div>
        </SectionReveal>
      </PageContainer>
    </SectionShell>
  );
};

export { Gallery24 };
