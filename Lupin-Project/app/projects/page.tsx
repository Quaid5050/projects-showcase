import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingCTA } from "@/components/floating-cta"
import { ProjectsHero } from "@/components/projects/projects-hero"
import { ProjectsGallery } from "@/components/projects/projects-gallery"
import { CTASection } from "@/components/home/cta-section"

export const metadata: Metadata = {
  title: "Our Projects | Lupin Project Group",
  description: "Browse our portfolio of completed construction and renovation projects in Scarborough. See our quality workmanship in action.",
}

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main>
        <ProjectsHero />
        <ProjectsGallery />
        <CTASection />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  )
}
