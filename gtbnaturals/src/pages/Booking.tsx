import { Mail, Phone } from 'lucide-react'
import { AnimatedReveal } from '../components/AnimatedReveal'
import { PageHero } from '../components/PageHero'

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
        eyebrow="Contact"
        title="Get in touch with us"
        subtitle="Reach out by phone or email and we will contact you within 1 business day."
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: 'Contact' },
        ]}
      />

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            <AnimatedReveal className="surface-card flex flex-col items-center gap-4 rounded-2xl p-8 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange/18 to-peach/35 shadow-sm ring-1 ring-orange/25">
                <Phone className="h-6 w-6 text-primary" aria-hidden />
              </span>
              <div>
                <p className="font-serif text-lg font-semibold text-cream">Phone</p>
                <a
                  href="tel:4035550123"
                  className="mt-2 block text-base font-medium text-muted transition hover:text-primary"
                >
                  (403) 555-0123
                </a>
              </div>
            </AnimatedReveal>

            <AnimatedReveal className="surface-card flex flex-col items-center gap-4 rounded-2xl p-8 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange/18 to-peach/35 shadow-sm ring-1 ring-orange/25">
                <Mail className="h-6 w-6 text-primary" aria-hidden />
              </span>
              <div>
                <p className="font-serif text-lg font-semibold text-cream">Email</p>
                <a
                  href="mailto:care@drjahluwalia.example"
                  className="mt-2 block text-base font-medium text-muted transition hover:text-primary"
                >
                  care@drjahluwalia.example
                </a>
              </div>
            </AnimatedReveal>
          </div>

          <AnimatedReveal className="mt-10 rounded-2xl border border-primary/25 bg-primary/5 p-6 text-center">
            <p className="text-base font-semibold text-cream">
              We will contact you within 1 business day.
            </p>
            <p className="mt-2 text-sm text-muted">
              Call us or send an email with your inquiry and preferred timing — our team will get back to you promptly.
            </p>
          </AnimatedReveal>
        </div>
      </section>
      </div>
    </div>
  )
}