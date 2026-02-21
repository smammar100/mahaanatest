"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";

import { cn } from "@/lib/utils";

const defaultTransition = { duration: 0.28, ease: "easeOut" };
const reducedTransition = { duration: 0.01 };

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
}

export function SectionReveal({ children, className }: SectionRevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const transition = prefersReducedMotion ? reducedTransition : defaultTransition;

  return (
    <motion.div
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -48px 0px" }}
      transition={transition}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
