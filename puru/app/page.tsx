import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import CapabilitiesBand from '@/components/home/CapabilitiesBand';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import IndustriesGrid from '@/components/home/IndustriesGrid';
import ProcessSection from '@/components/home/ProcessSection';

export const metadata: Metadata = {
  title: 'YUVAAN INTERNATIONAL | Professional Cleaning & Floor Safety Solutions',
  description:
    'Safe. Sustainable. Commercial performance for facilities that need reliable floor-safety programs, product sourcing, and partnership support.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CapabilitiesBand />
      <FeaturedProducts />
      <WhyChooseUs />
      <IndustriesGrid />
      <ProcessSection />
    </>
  );
}
