import { AnimatedReveal } from '../components/AnimatedReveal'
import { ContactForm } from '../components/ContactForm'
import { CTASection } from '../components/CTASection'
import { PageHero } from '../components/PageHero'
import { SectionHeading } from '../components/ui/SectionHeading'

export default function Booking() {
  return (
    <div className="relative overflow-hidden">
      <div
        className="pointer-events-none fixed inset-0 bg-cover bg-center bg-no-repeat opacity-20 z-0"
        style={{ backgroundImage: 'url(/contact.png)' }}
        aria-hidden
      />
      <div className="relative z-1">
      <PageHero
        eyebrow="Booking"
        title="Contact & appointment requests"
        subtitle="Share your preferred timing and the services you are curious about. We respond as promptly as schedules allow."
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: 'Contact' },
        ]}
      />

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ContactForm />
          <AnimatedReveal className="mt-12 overflow-hidden rounded-3xl border border-dashed border-stone-300 bg-base-900">
            <div className="flex min-h-55 items-center justify-center px-6 py-16 text-center text-sm text-muted">
              <div>
                <p className="font-semibold text-cream">Map placeholder</p>
                <p className="mt-2 max-w-md">
                  Embed Google Maps or your clinic’s location widget here. Replace placeholder studio address in the
                  contact cards when ready.
                </p>
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </section>

      <section className="border-t border-stone-200 bg-base-900 py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <SectionHeading title="Privacy note" subtitle="Appointment inquiries are handled confidentially. See the privacy policy for how information may be stored when you connect a backend." />
        </div>
      </section>

      <CTASection title="Prefer a phone call?" subtitle="Reach the studio line listed in the footer—voicemail is monitored during business days." />
      </div>
    </div>
  )
}
