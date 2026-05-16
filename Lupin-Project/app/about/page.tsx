import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingCTA } from "@/components/floating-cta"
import { AboutHero } from "@/components/about/about-hero"
import { AboutStory } from "@/components/about/about-story"
import { AboutValues } from "@/components/about/about-values"
import { AboutTeam } from "@/components/about/about-team"
import { CTASection } from "@/components/home/cta-section"

export const metadata: Metadata = {
  title: "About Us | Lupin Project Group",
  description: "Learn about Lupin Project Group - your trusted construction and handyman service provider in Scarborough, Ontario. Quality craftsmanship and reliable service.",
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <AboutStory />
        <AboutValues />
        <AboutTeam />
        <CTASection />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  )
}
