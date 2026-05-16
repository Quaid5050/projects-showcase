import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import AboutSection from "@/components/about/AboutSection";
import MissionVisionCards from "@/components/about/MissionVisionCards";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "About Us | Silken Trading",
  description:
    "Learn about Silken Trading — experience in automotive interiors, quality materials, and our mission to deliver premium car interior solutions.",
  openGraph: {
    title: "About Us | Silken Trading",
    description: "Our story, experience, and commitment to premium automotive interiors.",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutSection
        title="Company Story"
        index={0}
        imageSrc="/images/gallery/seat-installed-1.jpeg"
        imageAlt="Silken Trading seat cover installation"
      >
        Silken Trading was founded with a simple mission: to bring luxury and durability to every
        car interior. We started by fitting seat covers and mats for friends and family, and grew
        into a full-service provider of premium automotive interior products and installation.
        Today we serve customers who demand the best fit, materials, and finish for their vehicles.
      </AboutSection>
      <AboutSection
        title="Experience in Automotive Interiors"
        index={1}
        reverse
        imageSrc="/images/gallery/install-1.jpeg"
        imageAlt="Professional installation process"
      >
        Our team has years of experience in selecting, fitting, and installing seat covers, car
        mats, window visors, and accessories. We work with a wide range of materials—from leather
        and neoprene to heavy-duty rubber and carpet—and we ensure every installation meets our
        high standards for fit and appearance.
      </AboutSection>
      <AboutSection
        title="Quality Materials Used"
        index={2}
        imageSrc="/images/gallery/materials-1.jpeg"
        imageAlt="Premium quality materials"
      >
        We source materials from trusted suppliers and only offer products we would use in our own
        vehicles. Our seat covers use premium leather, leatherette, neoprene, and fabric. Our mats
        are heavy-duty rubber or carpet with proper backing. Window visors are UV-resistant and
        designed for a precise fit. Every product is chosen for durability, ease of cleaning, and a
        premium look.
      </AboutSection>
      <MissionVisionCards />
      <AboutCTA />
    </>
  );
}
