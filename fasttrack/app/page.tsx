import Hero from './components/Hero';
import Ticker from './components/Ticker';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import CTA from './components/CTA';
import Contact from './components/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Ticker />
      <About />
      <WhyChooseUs />
      <Services />
      <Gallery />
      <Testimonials />
      <Team />
      <CTA />
      <Contact />
    </>
  );
}
