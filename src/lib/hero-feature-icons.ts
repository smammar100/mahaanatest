import type { ElementType } from "react";

export interface Feature {
  title: string;
  description: string;
  /** Optional: when omitted (e.g. when passed from Server Component), the client can use a default icon like Check. */
  icon?: ElementType<{ className?: string }>;
  color?: string;
  href?: string;
}

export interface Image {
  src?: string;
  alt: string;
  label?: string;
  /** When set, render this icon instead of img (replaces placeholder images). */
  icon?: ElementType<{ className?: string }>;
}

export interface HeroFeatureIconsProps {
  badge?: string;
  heading: string;
  description?: string;
  /** When true, image column is on the right and content on the left (desktop). */
  imageOnRight?: boolean;
  /** Optional extra class(es) for the image element (e.g. object-right for focus). */
  imageClassName?: string;
  buttonPrimary?: {
    text: string;
    href: string;
  };
  buttonSecondary?: {
    text: string;
    href: string;
  };
  features?: Feature[];
  /** Array of images (at least 1 required). Multiple images enable carousel behavior. */
  images: [Image, ...Image[]];
  className?: string;
}
