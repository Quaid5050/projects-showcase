import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Central Mausoleums & Granite | Premium Memorial Structures",
  description: "Crafting timeless mausoleums, columbariums, and granite memorials. Single, Double, Four & Six Crypt structures, Cremation Benches, Cemetery Restoration.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <style>{`
          @media (max-width: 768px) {
            .hidden-mobile { display: none !important; }
            .show-mobile { display: block !important; }
            nav { padding: 16px 24px !important; }
          }
          @media (min-width: 769px) {
            .show-mobile { display: none !important; }
          }
        `}</style>
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
