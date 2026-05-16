import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { AnimatedReveal } from '../components/AnimatedReveal'
import { CTASection } from '../components/CTASection'
import { PageHero } from '../components/PageHero'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Button } from '../components/ui/Button'
import { credentialCards, credentialTimeline } from '../data/credentials'

export default function Credentials() {
  return (
    <div className="relative overflow-hidden">
      <div
        className="pointer-events-none fixed inset-0 bg-cover bg-center bg-no-repeat opacity-25 z-0"
        style={{ backgroundImage: 'url(/overall%20bg.png)' }}
        aria-hidden
      />
      <div className="relative z-1">
      <PageHero
        eyebrow="My credentials"
        title="Dr. Jagatjit Ahluwalia"
        subtitle="Training, licensure, and board recognition across natural medicine, holistic health practice, manual osteopathy, hypnotherapy, herbalism, and registered massage therapy."
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: 'Credentials' },
        ]}
      >
        <Button to="/booking">Book consultation</Button>
      </PageHero>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Recognitions & certifications" subtitle="Presented as premium cards—swap or expand as your CV evolves." />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {credentialCards.map((text, i) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 6) * 0.04 }}
                className="surface-card surface-card-interactive flex gap-4 p-5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-orange/88 to-orange/68 text-white shadow-sm ring-1 ring-orange/45">
                  <Award className="h-5 w-5" aria-hidden />
                </span>
                <p className="text-sm font-medium leading-snug text-cream">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-stone-200 bg-base-900 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Education & certification journey"
            subtitle="A simplified timeline—use it to communicate progression and ongoing professional standards."
          />
          <div className="relative mt-14 space-y-8 pr-4 sm:pr-8">
            <div className="absolute bottom-2 left-5 top-2 w-px bg-gradient-to-b from-orange/60 via-stone-300 to-transparent" aria-hidden />
            {credentialTimeline.map((row, i) => {
              const StepIcon = row.icon
              return (
              <AnimatedReveal key={row.title} delay={i * 0.06} className="relative flex gap-3 sm:gap-4">
                <div className="flex w-10 shrink-0 justify-center">
                  <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange/88 to-orange/68 text-white shadow-sm ring-1 ring-orange/45">
                    <StepIcon className="h-5 w-5 shrink-0" aria-hidden />
                    <span className="sr-only">Step {i + 1}</span>
                  </span>
                </div>
                <div className="min-w-0 flex-1 px-0 sm:px-1">
                  <p className="text-xs font-bold uppercase tracking-wider text-primary">{row.year}</p>
                  <h3 className="mt-1 font-serif text-lg font-semibold leading-snug text-cream">{row.title}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">{row.detail}</p>
                </div>
              </AnimatedReveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimatedReveal className="surface-card surface-card-interactive p-8 sm:p-10">
            <SectionHeading
              title="Professional trust"
              subtitle="Ethical practice, informed consent, and clear scope are non-negotiable. Expect documentation, respectful communication, and referrals when concerns fall outside holistic wellness support."
            />
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/terms" variant="secondary">
                Read disclaimer
              </Button>
              <Button to="/booking">Request appointment</Button>
            </div>
          </AnimatedReveal>
        </div>
      </section>

      <CTASection />
      </div>
    </div>
  )
}
