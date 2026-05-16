import { HeroSection } from '@/components/home/hero-section';
import { TrustBar } from '@/components/home/trust-bar';
import { AboutSection } from '@/components/home/about-section';
import { StatsSection } from '@/components/home/stats-section';
import { ServicesSection } from '@/components/home/services-section';
import { ServiceDetailsSection } from '@/components/home/service-details-section';
import { WhyChooseUs } from '@/components/home/why-choose-us';
import { TestimonialsSection } from '@/components/home/testimonials-section';
import { CtaSection } from '@/components/home/cta-section';
import { FaqSection } from '@/components/home/faq-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <AboutSection />
      <StatsSection />
      <ServicesSection />
      <ServiceDetailsSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
