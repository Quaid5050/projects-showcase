import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DiscountPopup from "./components/DiscountPopup";

export const metadata: Metadata = {
  title: "Spice Route — Authentic Indian Spices in Canada",
  description: "Premium Indian spices sourced from farms across India. Delivered across Canada.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <DiscountPopup />
        <div className="page-wrap">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
