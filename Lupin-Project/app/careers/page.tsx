import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CareersHero } from "@/components/careers/careers-hero"
import { CareersContent } from "@/components/careers/careers-content"

export const metadata: Metadata = {
  title: "Careers | Lupin Project Group",
  description: "Join the Lupin Project Group team. We're hiring laborers and skilled tradespeople across the GTA. Submit your resume today.",
}

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main>
        <CareersHero />
        <CareersContent />
      </main>
      <Footer />
    </>
  )
}
