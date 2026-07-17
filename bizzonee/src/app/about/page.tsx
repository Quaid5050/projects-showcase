import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import AboutPage from "@/components/sections/AboutPage";

export const metadata: Metadata = {
  title: "About Us",
  description: "BizzOne Digital: a full-service AI automation and digital growth agency helping 180+ brands scale with design, engineering and marketing.",
};

export default function About() {
  return (
    <>
      <Navbar />
      <main className="relative pt-20">
        <AboutPage />
      </main>
      <Footer />
    </>
  );
}