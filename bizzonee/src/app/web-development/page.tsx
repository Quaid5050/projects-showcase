import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import WebDevelopment from "@/components/sections/WebDevelopment";

export const metadata: Metadata = {
  title: "Website Design & Development",
  description: "High-performance, modern websites built to grow your business. View packages, see our work, and start onboarding.",
};

export default function WebDevelopmentPage() {
  return (
    <>
      <Navbar />
      <main className="relative pt-20">
        <WebDevelopment />
      </main>
      <Footer />
    </>
  );
}