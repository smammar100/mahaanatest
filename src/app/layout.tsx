import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist_Mono, Outfit } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const switzer = localFont({
  src: [
    {
      path: "../../public/fonts/switzer/otf/Switzer-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/switzer/otf/Switzer-ThinItalic.otf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../../public/fonts/switzer/otf/Switzer-Extralight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/switzer/otf/Switzer-ExtralightItalic.otf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../../public/fonts/switzer/otf/Switzer-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/switzer/otf/Switzer-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/switzer/otf/Switzer-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/switzer/otf/Switzer-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/switzer/otf/Switzer-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/switzer/otf/Switzer-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/switzer/otf/Switzer-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/switzer/otf/Switzer-SemiboldItalic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../public/fonts/switzer/otf/Switzer-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/switzer/otf/Switzer-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/switzer/otf/Switzer-Extrabold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/switzer/otf/Switzer-ExtraboldItalic.otf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../../public/fonts/switzer/otf/Switzer-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/switzer/otf/Switzer-BlackItalic.otf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-switzer",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mahaana.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mahaana – Shariah-Compliant Digital Wealth Manager in Pakistan",
    template: "%s | Mahaana",
  },
  description:
    "Pakistan's first licensed digital wealth manager. Get personalized, Shariah-compliant investing to grow your long-term wealth with Save+, retirement plans, and low-risk funds.",
  alternates: { canonical: "./" },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: siteUrl,
    siteName: "Mahaana",
    title: "Mahaana – Shariah-Compliant Digital Wealth Manager in Pakistan",
    description:
      "Pakistan's first licensed digital wealth manager. Get personalized, Shariah-compliant investing to grow your long-term wealth.",
    images: [
      {
        url: "/images/og-default.png",
        width: 1200,
        height: 630,
        alt: "Mahaana – Shariah-Compliant Investing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahaana – Shariah-Compliant Digital Wealth Manager in Pakistan",
    description:
      "Pakistan's first licensed digital wealth manager. Shariah-compliant investing for your long-term wealth.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistMono.variable} ${outfit.variable} ${switzer.variable} antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-black focus:shadow-md"
        >
          Skip to main content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
