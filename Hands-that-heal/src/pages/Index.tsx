import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { CTASection } from "@/components/sections/CTASection";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { NextStep } from "@/components/sections/NextStep";
import { Stats } from "@/components/sections/Stats";
import { FAQPreview } from "@/components/sections/FAQPreview";
import { BookingCTA } from "@/components/sections/BookingCTA";

const Index = () => {
  return (
    <>
      <title>Hands That Heal — Feel Comfortable and Confident in Your Own Skin</title>
      <meta name="description" content="Laser hair removal, body contouring, organic teeth whitening, Brazilian laser, and cryotherapy. Safe for all skin tones. Hamilton, ON." />
      <link rel="canonical" href="/" />

      {/* 1. Hero */}
      <Hero />

      {/* 2. About Us */}
      <AboutSection />

      {/* 3. Special Offer */}
      <CTASection />

      {/* 4. Services */}
      <ServicesPreview />

      {/* 5. Why Choose Us */}
      <WhyChooseUs />

      {/* 6. Before & After Results */}
      <BeforeAfter />

      {/* 7. Testimonials */}
      <Testimonials />

      {/* 7. Next Step CTA */}
      <NextStep />

      {/* 8. Stats */}
      <Stats />

      {/* 9. FAQ Preview */}
      <FAQPreview />

      {/* 10. Booking CTA */}
      <BookingCTA />
    </>
  );
};

export default Index;
