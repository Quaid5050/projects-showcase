import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";
import { LocalBusinessJsonLd } from "@/components/seo/JsonLd";
import { SITE, getSiteOrigin } from "@/lib/site";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const siteOrigin = getSiteOrigin();

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: {
    default: `${SITE.name} | Handyman in Toronto`,
    template: `%s | ${SITE.name}`,
  },
  description: `${SITE.name} — professional handyman services, home repair services, painting services, TV mounting, drywall repair, and furniture assembly in Toronto. Affordable handyman with transparent pricing.`,
  keywords: [
    "handyman services near me",
    "local handyman",
    "affordable handyman",
    "home repair services",
    "handyman in Toronto",
    "professional handyman services",
    "property maintenance services",
    "furniture assembly",
    "TV mounting",
    "drywall repair",
    "painting services",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteOrigin,
    siteName: SITE.name,
    title: `${SITE.name} | Toronto Handyman`,
    description:
      "Trusted Toronto handyman for repairs, installs, painting, and maintenance. Book online or request a free estimate.",
    images: [{ url: SITE.logoPath, width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Toronto Handyman`,
    description:
      "Professional handyman services in Toronto — repairs, installs, painting, and more.",
  },
  alternates: { canonical: siteOrigin },
};

export const viewport: Viewport = {
  themeColor: "#1c1c1c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA" className={`${dmSans.variable} h-full scroll-smooth`}>
      <body className="min-h-full bg-background font-sans text-foreground antialiased">
        <LocalBusinessJsonLd />
        <Header />
        <div className="flex min-h-screen flex-col pb-24 md:pb-8">{children}</div>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
