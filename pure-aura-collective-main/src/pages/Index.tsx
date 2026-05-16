import { Hero } from "@/components/sections/Hero";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { AboutSection } from "@/components/sections/AboutSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTASection } from "@/components/sections/CTASection";

const Index = () => {
  return (
    <>
      <title>Hands That Heal — Feel Comfortable & Confident in Your Own Skin</title>
      <meta name="description" content="Hands That Heal offers laser hair removal, body contouring, organic teeth whitening, Brazilian laser (M/F), and cryotherapy. Safe, gentle, and effective for all skin types including darker tones." />
      <link rel="canonical" href="/" />
      <Hero />
      <ServicesPreview />
      <AboutSection />
      <Testimonials />
      <CTASection />
    </>
  );
};

export default Index;
