import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = "https://bizzonedigital.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "BizzOne Digital — Premium Web, App, Automation & Marketing",
    template: "%s | BizzOne Digital",
  },
  description:
    "BizzOne Digital is a premium technology partner building high-performance websites, mobile apps, CRM, automation and performance marketing that drive measurable growth.",
  keywords: [
    "web development",
    "mobile apps",
    "CRM solutions",
    "automation",
    "UI/UX design",
    "digital marketing",
    "SEO",
    "BizzOne Digital",
  ],
  authors: [{ name: "BizzOne Digital" }],
  openGraph: {
    title: "BizzOne Digital — Digital Growth. Engineered.",
    description:
      "Premium websites, apps, automation, CRM and marketing for ambitious brands.",
    url: siteUrl,
    siteName: "BizzOne Digital",
    type: "website",
    images: [{ url: "/logo.png", width: 512, height: 512, alt: "BizzOne Digital" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BizzOne Digital — Digital Growth. Engineered.",
    description:
      "Premium websites, apps, automation, CRM and marketing for ambitious brands.",
    images: ["/logo.png"],
  },
  icons: { icon: "/logo.png" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#050308",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="noise font-sans antialiased">
        <div className="bg-aurora" />
        <div className="bg-grid" />
        {children}
      </body>
    </html>
  );
}
