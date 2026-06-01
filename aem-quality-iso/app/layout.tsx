import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AEM Quality ISO Consulting – Simplifying ISO 9001 Certification",
  description: "End-to-end ISO 9001 support for SMEs and ambitious businesses. Assessment, Implementation, Documentation, Training & Certification. Based in Montréal, Québec, Canada.",
  keywords: "ISO 9001, ISO consulting, quality management, certification, Montréal, Québec, SME, gap analysis",
  openGraph: {
    title: "AEM Quality ISO Consulting",
    description: "Simplifying ISO 9001 Certification. Zero to Certified. Efficiently.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" style={{ overflowX: "hidden" }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Barlow:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet" />
      </head>
      <body style={{ overflowX: "hidden", maxWidth: "100vw" }}>
        <Navbar />
        <main style={{ overflowX: "hidden" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}