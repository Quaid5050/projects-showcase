import { AnimatedReveal } from '../components/AnimatedReveal'
import { PageHero } from '../components/PageHero'

export default function PrivacyPolicy() {
  return (
    <div>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="Placeholder policy for development—have legal counsel review before production use."
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: 'Privacy Policy' },
        ]}
      />
      <section className="py-14 sm:py-24">
        <div className="mx-auto max-w-3xl space-y-6 px-4 text-sm leading-relaxed text-muted sm:px-6 lg:px-8">
          <AnimatedReveal className="rounded-2xl border border-white/10 bg-base-900/40 p-6 backdrop-blur-md">
            <h2 className="font-serif text-lg font-semibold text-cream">Information we collect</h2>
            <p className="mt-3">
              This demo website may collect information you voluntarily submit through contact or appointment request
              forms (such as name, email, phone number, service interests, preferred dates/times, and messages). When you
              connect a production backend, define retention periods and processors in this section.
            </p>
          </AnimatedReveal>
          <AnimatedReveal className="rounded-2xl border border-white/10 bg-base-900/40 p-6 backdrop-blur-md">
            <h2 className="font-serif text-lg font-semibold text-cream">How we use information</h2>
            <p className="mt-3">
              Information is used to respond to inquiries, coordinate appointments, and improve service
              communication. It is not sold. Replace this text with your jurisdiction-specific disclosures (for
              example, PIPEDA considerations in Canada).
            </p>
          </AnimatedReveal>
          <AnimatedReveal className="rounded-2xl border border-white/10 bg-base-900/40 p-6 backdrop-blur-md">
            <h2 className="font-serif text-lg font-semibold text-cream">Confidentiality</h2>
            <p className="mt-3">
              Wellness consultations deserve privacy. Describe how records are stored, who may access them, and client
              rights to request corrections or deletion where applicable.
            </p>
          </AnimatedReveal>
          <AnimatedReveal className="rounded-2xl border border-white/10 bg-base-900/40 p-6 backdrop-blur-md">
            <h2 className="font-serif text-lg font-semibold text-cream">Cookies & analytics</h2>
            <p className="mt-3">
              If you add analytics or marketing pixels, disclose them here along with opt-out instructions.
            </p>
          </AnimatedReveal>
          <AnimatedReveal className="rounded-2xl border border-white/10 bg-base-900/40 p-6 backdrop-blur-md">
            <h2 className="font-serif text-lg font-semibold text-cream">Contact</h2>
            <p className="mt-3">
              For privacy questions, email <span className="text-cream">privacy@yourdomain.example</span> (placeholder).
            </p>
          </AnimatedReveal>
        </div>
      </section>
    </div>
  )
}
