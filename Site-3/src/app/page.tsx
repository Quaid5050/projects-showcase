import { Hero } from "@/components/sections/Hero"
import { CoreFeatures } from "@/components/sections/CoreFeatures"
import { FeatureShowcase } from "@/components/sections/FeatureShowcase"
import { HowItWorksTimeline } from "@/components/sections/HowItWorksTimeline"
import { IndustriesGrid } from "@/components/sections/IndustriesGrid"
import { CTA } from "@/components/sections/CTA"

export default function Home() {
  return (
    <>
      <Hero />
      <CoreFeatures />
      <FeatureShowcase />
      <HowItWorksTimeline />
      <IndustriesGrid />
      <CTA />
    </>
  )
}
