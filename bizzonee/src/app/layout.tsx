import type { Metadata, Viewport } from "next";
import { Sora, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const display = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = "https://bizzonedigital.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "BizzOne Digital: AI Automation & Digital Growth Agency",
    template: "%s | BizzOne Digital",
  },

  description:
    "We build growth engines, not just marketing campaigns. SEO, social media, paid ads, web development and AI automation for ambitious businesses.",

  keywords: [
    "digital marketing agency",
    "AI automation",
    "SEO",
    "paid ads",
    "web development",
    "BizzOne Digital",
  ],

  openGraph: {
    title: "BizzOne Digital: AI Automation & Digital Growth Agency",
    description:
      "From strategy to automation, we help businesses attract, engage, and convert.",
    url: siteUrl,
    siteName: "BizzOne Digital",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "BizzOne Digital",
    description: "AI Automation & Digital Growth Agency",
  },

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#05060A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-sans antialiased">
        <div className="bg-space" />
        <div className="bg-grid" />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}