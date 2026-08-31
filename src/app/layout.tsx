import { SiteShell } from "@/components/layout/SiteShell";
import { siteConfig, seoKeywords } from "@/lib/data";
import { JsonLd } from "@/components/JsonLd";
import { createLocalBusinessJsonLd, createOrganizationJsonLd, createWebSiteJsonLd } from "@/lib/seo";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "MAP Edition Group Limited | SERVICE WITH PASSION!",
    template: "%s | MAP Edition Group Limited",
  },
  description: siteConfig.description,
  keywords: [...seoKeywords],
  authors: [{ name: siteConfig.name }],
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/logo.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/logo.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_GH",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "MAP Edition Group Limited | SERVICE WITH PASSION!",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "MAP Edition Group Limited",
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} h-full`}>
      <body className="flex min-h-full flex-col font-sans antialiased">
        <JsonLd data={createOrganizationJsonLd()} />
        <JsonLd data={createWebSiteJsonLd()} />
        <JsonLd data={createLocalBusinessJsonLd()} />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
