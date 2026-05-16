import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Merchant Orders | Online Ordering for Modern Restaurants",
  description: "Merchant Orders helps restaurants launch branded online ordering, delivery, pickup, loyalty, analytics, and customer engagement tools from one powerful platform.",
  icons: {
    icon: [{ url: "/images/logo-ta.png", type: "image/png" }],
    apple: "/images/logo-ta.png",
  },
  metadataBase: new URL("https://www.merchantorders.io"),
  alternates: { canonical: "https://www.merchantorders.io" },
  openGraph: {
    type: "website",
    url: "https://www.merchantorders.io",
    siteName: "Merchant Orders",
    title: "Merchant Orders | Online Ordering for Modern Restaurants",
    description: "Merchant Orders helps restaurants launch branded online ordering, delivery, pickup, loyalty, analytics, and customer engagement tools from one powerful platform.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Merchant Orders | Online Ordering for Modern Restaurants",
    description: "Merchant Orders helps restaurants launch branded online ordering, delivery, pickup, loyalty, analytics, and customer engagement tools from one powerful platform.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.merchantorders.io/#organization",
      name: "Merchant Orders",
      url: "https://www.merchantorders.io",
      logo: "https://www.merchantorders.io/images/logo.png",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+18002690818",
        email: "support@merchantorders.io",
        contactType: "customer support",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.merchantorders.io/#website",
      url: "https://www.merchantorders.io",
      name: "Merchant Orders",
      publisher: { "@id": "https://www.merchantorders.io/#organization" },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://www.merchantorders.io/?s={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://www.merchantorders.io/#service",
      name: "Merchant Orders",
      url: "https://www.merchantorders.io",
      description: "Merchant Orders helps restaurants launch branded online ordering, delivery, pickup, loyalty, analytics, and customer engagement tools from one powerful platform.",
      telephone: "+18002690818",
      email: "support@merchantorders.io",
      serviceType: "Restaurant Online Ordering Platform",
      areaServed: "US",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-slate-50 text-slate-900 min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
