import { AnimatedReveal } from '../components/AnimatedReveal'
import { PageHero } from '../components/PageHero'
import { Button } from '../components/ui/Button'

export default function TermsDisclaimer() {
  return (
    <div>
      <PageHero
        eyebrow="Legal"
        title="Terms & Disclaimer"
        subtitle="Please read this carefully. It explains the limits of wellness information and services offered through this website."
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: 'Terms & Disclaimer' },
        ]}
      >
        <Button to="/booking" variant="secondary">
          Contact studio
        </Button>
      </PageHero>

      <section className="py-14 sm:py-24">
        <div className="mx-auto max-w-3xl space-y-6 px-4 text-sm leading-relaxed text-muted sm:px-6 lg:px-8">
          <AnimatedReveal className="rounded-2xl border border-coral/25 bg-coral/5 p-6 text-cream/95 backdrop-blur-md">
            <strong className="text-coral">Emergency:</strong> If you experience chest pain, severe trouble breathing,
            sudden weakness or numbness on one side, confusion, severe allergic reaction, or thoughts of self-harm,
            call your local emergency number immediately.
          </AnimatedReveal>

          {[
            {
              h: 'Educational & wellness information only',
              p: 'Website content is provided for general wellness education. It is not medical advice, diagnosis, or treatment. Always consult a licensed physician or appropriate clinician for medical concerns.',
            },
            {
              h: 'Not a substitute for medical diagnosis or emergency care',
              p: 'Holistic services described here are complementary wellness supports. They do not replace emergency services, prescriptions, or medically necessary evaluations.',
            },
            {
              h: 'No guaranteed outcomes',
              p: 'Individual responses vary based on many factors. Statements describe what care may support—not guaranteed results or cures.',
            },
            {
              h: 'Consult licensed physicians for medical concerns',
              p: 'Bring questions about medications, imaging, surgery, or new symptoms to your medical provider. We encourage collaborative communication when appropriate.',
            },
            {
              h: 'Use of this site',
              p: 'By using this site, you agree to these terms as they may be updated. Continued use after updates constitutes acceptance.',
            },
          ].map((b) => (
            <AnimatedReveal key={b.h} className="rounded-2xl border border-white/10 bg-base-900/40 p-6 backdrop-blur-md">
              <h2 className="font-serif text-lg font-semibold text-cream">{b.h}</h2>
              <p className="mt-3">{b.p}</p>
            </AnimatedReveal>
          ))}
        </div>
      </section>
    </div>
  )
}
