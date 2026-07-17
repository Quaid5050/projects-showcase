import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "M&L Cleaning Home Services LLC | Professional Cleaning in Lake Wales, FL",
  description: "Reliable residential & commercial cleaning services in Lake Wales, Winter Haven, Haines City, Davenport, Bartow. Deep cleaning, move-in/move-out, recurring & Airbnb cleaning. Call (863) 456-8958.",
  keywords: "cleaning services Lake Wales FL, deep cleaning, move-in move-out cleaning, commercial cleaning, Airbnb cleaning, residential cleaning Polk County",
  openGraph: {
    title: "M&L Cleaning Home Services LLC",
    description: "Professional Cleaning Services You Can Trust in Lake Wales, FL",
    type: "website",
    url: "https://mlcleaninghs.com",
  },
  icons: {
    icon: "/logo1.png",
    shortcut: "/logo1.png",
    apple: "/logo1.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${playfairDisplay.variable} ${inter.variable}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
