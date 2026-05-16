import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingCTA } from "@/components/floating-cta"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactContent } from "@/components/contact/contact-content"

export const metadata: Metadata = {
  title: "Contact Us | Lupin Project Group",
  description: "Get in touch with Lupin Project Group for a free quote on your construction or handyman project in Scarborough. Call 905-233-2100 or fill out our contact form.",
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactHero />
        <ContactContent />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  )
}
