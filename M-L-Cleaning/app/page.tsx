import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import BeforeAfter from "@/components/home/BeforeAfter";
import WhyUs from "@/components/home/WhyUs";
import Reviews from "@/components/home/Reviews";
import ServiceAreas from "@/components/home/ServiceAreas";
import CTA from "@/components/home/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <WhyUs />
      <BeforeAfter />
      <Reviews />
      <ServiceAreas />
      <CTA />
    </>
  );
}
