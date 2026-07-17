import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import PageLoader from "@/components/PageLoader";

export const metadata: Metadata = {
  title: "876 Tree Removal | Jamaica's Trusted Tree Service",
  description: "Professional tree removal, trimming, lot clearing, and fallen tree services across Jamaica. Serving homeowners, business owners, and land owners.",
  keywords: "tree removal Jamaica, tree trimming Jamaica, lot clearing, fallen tree removal, 876 tree removal",
  icons: {
    icon: "/fav.png",
    shortcut: "/fav.png",
    apple: "/fav.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <PageLoader />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
