import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "CBC Foot Products Ltd. | Custom Orthotics Calgary",
  description:
    "45 years of custom orthotic excellence. Free foot & back assessment. Lifetime warranty. Serving Calgary and surrounding areas.",
  keywords:
    "custom orthotics, foot assessment, back pain relief, Calgary orthotics, CBC Foot Products",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lato:wght@300;400;700;900&display=swap" rel="stylesheet" />
      </head>
      <body style={{ fontFamily: "'Lato', sans-serif", backgroundColor: "#F5F7FC", color: "#1a1a1a", margin: 0, padding: 0, overflowX: "hidden" }}>
        <Navbar />
        <main style={{ overflowX: "hidden" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}