import HeroSection from "@/components/sections/HeroSection";
import CoreServices from "@/components/sections/CoreServices";
import ServicesPreview from "@/components/sections/ServicesPreview";
import WhySection from "@/components/sections/WhySection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import BookingCTA from "@/components/sections/BookingCTA";
import BrandsStrip from "@/components/sections/BrandsStrip";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CoreServices />
      <ServicesPreview />
      <WhySection />
      <BrandsStrip />
      <TestimonialsSection />
      <BookingCTA />
    </main>
  );
}
