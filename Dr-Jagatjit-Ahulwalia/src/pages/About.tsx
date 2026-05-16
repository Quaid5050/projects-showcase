import { AnimatedReveal } from '../components/AnimatedReveal'
import { CTASection } from '../components/CTASection'
import { PageHero } from '../components/PageHero'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Button } from '../components/ui/Button'
import { credentialCards } from '../data/credentials'

export default function About() {
  return (
    <div>
      <PageHero
        eyebrow="About"
        title="Dr. Jagatjit Ahluwalia"
        subtitle="Holistic practitioner offering natural medicine insight, manual osteopathy, herbal wellness, hypnotherapy, and massage therapy—with warmth, structure, and respect for your pace."
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: 'About' },
        ]}
      >
        <Button to="/booking">Book consultation</Button>
      </PageHero>

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:gap-16 lg:px-8">
          <AnimatedReveal className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-base-800 to-base-950 p-4 shadow-card">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,212,0,0.12),transparent_50%)]" aria-hidden />
            <img src="/logo.png" alt="GTB wellness mark" className="relative w-full rounded-3xl object-contain p-8" width={560} height={560} />
          </AnimatedReveal>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Introduction"
              title="A whole-person lens, translated into calm, practical care"
              subtitle="Dr. Jagatjit Ahluwalia offers holistic wellness support through natural medicine, manual osteopathy, herbal wellness, hypnotherapy, and therapeutic bodywork. The approach is centered on understanding the whole person — lifestyle, symptoms, stress patterns, physical structure, and wellness goals — before creating individualized support plans."
            />
            <div className="mt-8 space-y-4 text-base leading-relaxed text-muted">
              <p>
                Sessions weave evidence-aware natural health education with tactile therapies that soothe the nervous
                system. You are invited to ask questions, pause when needed, and co-create pacing that fits your life.
              </p>
              <p>
                This is complementary wellness care: supportive, transparent, and aligned with professional boundaries.
                Where medical evaluation or emergency services are appropriate, referral language is clear and
                compassionate.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-base-900/40 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Philosophy of care"
            subtitle="Care is collaborative, educational, and grounded in consent. We favor gentle experiments over rigid protocols, and celebrate sustainable shifts over quick fixes."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                t: 'Whole-person assessment',
                d: 'We look at how sleep, stress, structure, digestion, and emotions intertwine—without reducing you to a single symptom.',
              },
              {
                t: 'Client-centered support',
                d: 'You choose the modalities that feel aligned. We translate options into plain language so decisions feel grounded.',
              },
              {
                t: 'Integrative pacing',
                d: 'Plans evolve as you do—layering bodywork, herbs, or mind–body tools only when readiness is present.',
              },
            ].map((x) => (
              <AnimatedReveal
                key={x.t}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-glass backdrop-blur-md"
              >
                <h3 className="font-serif text-lg font-semibold text-cream">{x.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{x.d}</p>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Credentials highlight"
            title="Training that supports trustworthy care"
            subtitle="A selection of recognitions—see the full credentials page for the complete list."
          />
          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {credentialCards.slice(0, 6).map((c) => (
              <li
                key={c}
                className="rounded-xl border border-white/10 bg-base-900/50 px-4 py-3 text-sm text-cream shadow-glass backdrop-blur-md"
              >
                {c}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button to="/credentials" variant="secondary">
              View all credentials
            </Button>
          </div>
        </div>
      </section>

      <CTASection title="Begin with a conversation" subtitle="Share your goals and questions—booking is simple and pressure-free." />
    </div>
  )
}
