import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: { default: "Simba Homes Ltd | Custom Home Builders BC", template: "%s | Simba Homes Ltd" },
  description: "Premium custom home builders, land development & renovation specialists in British Columbia. WBI & BC Housing 2-5-10 Warranty protected.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main style={{ paddingTop: '70px' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
