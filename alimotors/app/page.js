import Hero from '../components/Hero'
import ServicesPreview from '../components/ServicesPreview'
import AboutSection from '../components/AboutSection'
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'

export const metadata = {
  title: 'Ali Motors Workshop | Premium Auto Repair Solutions',
  description: 'Expert car repair and maintenance. Engine repair, diagnostics, tire changes, oil service, and more by certified technicians.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <AboutSection />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </>
  )
}
