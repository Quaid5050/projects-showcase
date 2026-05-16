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
    <div>
      <PageHero
        eyebrow="Credentials"
        title="Training, licensure, and board recognition"
        subtitle="Credentials reflect depth across natural medicine, manual therapy, hypnotherapy, herbalism, and registered massage therapy."
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
                className="flex gap-4 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-transparent p-5 shadow-glass backdrop-blur-xl"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/25">
                  <Award className="h-5 w-5" aria-hidden />
                </span>
                <p className="text-sm font-medium leading-snug text-cream">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-base-900/40 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Education & certification journey"
            subtitle="A simplified timeline—use it to communicate progression and ongoing professional standards."
          />
          <div className="relative mt-14 space-y-8 pl-8 sm:pl-12">
            <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-white/10 to-transparent sm:left-4" aria-hidden />
            {credentialTimeline.map((row, i) => (
              <AnimatedReveal key={row.title} delay={i * 0.06} className="relative">
                <span className="absolute -left-8 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-primary/40 bg-base-950 text-[10px] font-bold text-primary sm:-left-10">
                  {i + 1}
                </span>
                <p className="text-xs font-semibold uppercase tracking-wider text-gold">{row.year}</p>
                <h3 className="mt-1 font-serif text-xl font-semibold text-cream">{row.title}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">{row.detail}</p>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimatedReveal className="rounded-3xl border border-white/10 bg-gradient-to-r from-primary/10 via-base-950 to-coral/10 p-8 shadow-card backdrop-blur-xl sm:p-10">
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
  )
}
