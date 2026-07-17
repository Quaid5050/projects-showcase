import { Award } from 'lucide-react'
import { AnimatedReveal } from '../components/AnimatedReveal'
import { CTASection } from '../components/CTASection'
import { PageHero } from '../components/PageHero'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Button } from '../components/ui/Button'
import { credentialCards } from '../data/credentials'

export default function About() {
  return (
    <div className="relative overflow-hidden">
      <div
        className="pointer-events-none fixed inset-0 bg-cover bg-center bg-no-repeat opacity-25 z-0"
        style={{ backgroundImage: 'url(/overall%20bg.png)' }}
        aria-hidden
      />
      <div className="relative z-1">
      <PageHero
        eyebrow="About"
        title="Dr. Jagatjit Ahluwalia"
        subtitle="At GTB Naturals we Restore Health, Balance, and Vitality where Natural Healing meets Modern, and it empowers your body to rejuvenate its healing potential so that you can enjoy your life fully."
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: 'About' },
        ]}
      />


      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:gap-16 lg:px-8">
          <AnimatedReveal className="relative overflow-hidden rounded-[2rem] border border-stone-200 bg-gradient-to-b from-base-800 to-base-950 p-4 shadow-card">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgb(255_210_2_/_0.12),transparent_50%)]" aria-hidden />
            <img src="/logo1.png" alt="GTB . mark" className="relative w-full rounded-3xl object-contain p-8" width={560} height={560} />
          </AnimatedReveal>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Introduction"
              title="A whole-body approach to health that treats more than symptoms."
              subtitle="Natural, personalized care for deeper healing and vitality."
            />
            <div className="mt-8 space-y-4 text-base leading-relaxed text-muted">
              <p>
                At GTB Naturals we provide integrative, root-cause-oriented care grounded in natural and manual therapies. Here the clinical approach combines natural medicine, manual osteopathy, herbal therapeutics, hypnotherapy, and body-based treatment modalities to support systemic balance and functional well-being. Each case is approached individually with emphasis on assessment, education, and structured care planning.
              </p>
              <p>
                This is complementary . care: supportive, transparent, and aligned with professional boundaries.
                Where medical evaluation or emergency services are appropriate, referral language is clear and
                compassionate.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-stone-200 bg-base-900 py-16 sm:py-24">
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
                className="surface-card p-6"
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
                className="surface-card surface-card-interactive flex gap-3 p-4 sm:gap-4 sm:p-5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-orange/88 to-orange/68 text-white shadow-sm ring-1 ring-orange/45 sm:h-11 sm:w-11">
                  <Award className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden />
                </span>
                <p className="text-sm font-medium leading-snug text-cream">{c}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button to="/credentials" variant="outlineFeatured">
              View all credentials
            </Button>
          </div>
        </div>
      </section>

      <CTASection title="Begin with a conversation" subtitle="Share your goals and questions—booking is simple and pressure-free." />
      </div>
    </div>
  )
}