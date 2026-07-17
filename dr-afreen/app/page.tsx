import IntroWrapper from "@/components/ui/IntroWrapper";
import HeroSection from "@/components/home/HeroSection";
import WelcomeSection from "@/components/home/WelcomeSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import AboutPreview from "@/components/home/AboutPreview";
import ProductPreview from "@/components/home/ProductPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <IntroWrapper>
      <HeroSection />
      <WelcomeSection />
      <ServicesPreview />
      <AboutPreview />
      <ProductPreview />
      <WhyChooseUs />
      <FinalCTA />
    </IntroWrapper>
  );
}
