import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingCTA } from "@/components/floating-cta"
import { ServicesHero } from "@/components/services/services-hero"
import { ServicesList } from "@/components/services/services-list"
import { ServicesProcess } from "@/components/services/services-process"
import { CTASection } from "@/components/home/cta-section"

export const metadata: Metadata = {
  title: "Our Services | Lupin Project Group",
  description: "Explore our comprehensive construction and handyman services including home renovations, commercial maintenance, and custom projects in Scarborough.",
}

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServicesHero />
        <ServicesList />
        <ServicesProcess />
        <CTASection />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  )
}
