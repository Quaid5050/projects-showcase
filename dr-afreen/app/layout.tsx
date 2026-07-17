import type { Metadata } from "next";
import { Cormorant_Garamond, Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Moon Homeopathy | Dr. Afreen – Gentle Care for Women & Children in Toronto",
  description:
    "Moon Homeopathy by Dr. Afreen offers personalized homeopathic support for women, children, and families in Toronto. Gentle wellness guidance through WhatsApp consultations.",
  keywords: [
    "homeopathy Toronto",
    "Dr. Afreen homeopathy",
    "women homeopathy",
    "children homeopathy",
    "natural wellness Toronto",
    "Moon Homeopathy",
    "gentle homeopathic care",
  ],
  authors: [{ name: "Dr. Afreen" }],
  openGraph: {
    title: "Moon Homeopathy | Dr. Afreen",
    description: "Gentle homeopathic care for women, children, and families in Toronto.",
    type: "website",
    locale: "en_CA",
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${nunito.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-body bg-cream text-brand-dark antialiased">
        <Navbar />
        <main className="min-h-screen pb-20 md:pb-0">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
