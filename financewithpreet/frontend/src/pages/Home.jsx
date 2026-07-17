import Layout from '../components/common/Layout'
import Hero from '../components/sections/Hero'
import MeetCoach from '../components/sections/MeetCoach'
import FinancialJourney from '../components/sections/FinancialJourney'
import ServicePillars from '../components/sections/ServicePillars'
import WhyUs from '../components/sections/WhyUs'
import HowItWorks from '../components/sections/HowItWorks'
import LatestBlogs from '../components/sections/LatestBlogs'
import Testimonials from '../components/sections/Testimonials'
import CTA from '../components/sections/CTA'

export default function Home() {
  return (
    <Layout>
      {/* Section 1 — Hero */}
      <Hero />

      {/* Section 2 — Meet Your Personal Finance Coach */}
      <div id="about-section">
        <MeetCoach />
      </div>

      {/* Section 3 — Your Financial Journey */}
      <FinancialJourney />

      {/* Section 4 — How We Can Help (Services) */}
      <ServicePillars />

      {/* Section 5 — Why Families Choose Finance With Preet */}
      <WhyUs />

      {/* Section 6 — How We Work */}
      <HowItWorks />

      {/* Section 7 — Education Hub */}
      <LatestBlogs />

      {/* Section 8 — Client Testimonials */}
      <Testimonials />

      {/* Section 9 — Final CTA */}
      <CTA />
    </Layout>
  )
}
