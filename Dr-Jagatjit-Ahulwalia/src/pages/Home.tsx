import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Leaf, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { AnimatedBackground } from '../components/AnimatedBackground'
import { AnimatedReveal } from '../components/AnimatedReveal'
import { ConditionCard } from '../components/ConditionCard'
import { ContactForm } from '../components/ContactForm'
import { CTASection } from '../components/CTASection'
import { TestimonialCard } from '../components/TestimonialCard'
import { FAQAccordion } from '../components/FAQAccordion'
import { HeroEmblem } from '../components/HeroEmblem'
import { ServiceCard } from '../components/ServiceCard'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Button } from '../components/ui/Button'
import { homeConditionHighlights } from '../data/conditions'
import { faqItems, faqPreviewIds } from '../data/faqs'
import { homeServiceOverview } from '../data/servicesCatalog'
import { testimonials } from '../data/testimonials'

const trust = [
  'Doctorate of Natural Medicine',
  'Manual Osteopathic Therapist',
  'Professional Herbalist',
  'Certified Hypnotherapist',
  'RMT · Alberta, Canada',
] as const

const process = [
  { title: 'Consultation', text: 'Clarify goals, comfort, and what “wellness” means for you right now.' },
  { title: 'Holistic assessment', text: 'Explore patterns across stress, sleep, structure, and lifestyle themes.' },
  { title: 'Personalized plan', text: 'Co-create non-invasive modalities and education you can sustain.' },
  { title: 'Ongoing support', text: 'Revisit progress, refine tools, and celebrate steady improvements.' },
] as const

const signatures = [
  {
    title: 'Natural Medicine',
    text: 'Whole-person education and complementary wellness strategies that may support energy, stress resilience, and daily rhythm.',
    to: '/natural-medicine',
  },
  {
    title: 'Manual Osteopathy',
    text: 'Hands-on care oriented to mobility, posture, and ease—paired with clear movement education.',
    to: '/manual-osteopathy',
  },
  {
    title: 'Herbal Care',
    text: 'Plant-informed guidance with safety-forward preparation support and transparent expectations.',
    to: '/herbal-wellness',
  },
  {
    title: 'Hypnotherapy',
    text: 'Relaxation-first mind–body tools for habit change, stress patterns, and self-regulation skills.',
    to: '/hypnotherapy',
  },
  {
    title: 'Massage Therapy',
    text: 'Therapeutic bodywork that may help with tension, circulation, and restorative rest.',
    to: '/massage-therapy',
  },
] as const

const why = [
  'Personalized care',
  'Holistic assessment',
  'Non-invasive modalities',
  'Integrative support',
  'Client education',
  'Wellness-focused plans',
] as const

export default function Home() {
  const previewFaqs = faqItems.filter((f) => (faqPreviewIds as readonly string[]).includes(f.id))

  return (
    <div>
      {/* Premium hero */}
      <section className="relative min-h-[100svh] overflow-hidden border-b border-white/10 pt-6 sm:pt-8">
        <AnimatedBackground dense />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,212,0,0.12),transparent_55%)]" aria-hidden />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,200,83,0.1),transparent_50%)]" aria-hidden />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:min-h-[calc(100svh-5rem)] lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-20">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary sm:text-xs"
            >
              <Leaf className="h-3.5 w-3.5" aria-hidden />
              Holistic Natural Medicine · Osteopathy · Herbal Wellness
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-cream sm:text-5xl lg:text-[3.35rem] xl:text-6xl"
            >
              Holistic Wellness Care for{' '}
              <span className="bg-gradient-to-r from-gold via-orange to-primary bg-clip-text text-transparent">
                Mind, Body &amp; Natural Balance
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
            >
              Personalized support through natural medicine, herbal wellness, manual osteopathy, hypnotherapy, and
              therapeutic bodywork.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button to="/booking">Book Consultation</Button>
              <Button to="/services" variant="secondary">
                Explore Services
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              {['Client-centered', 'Evidence-aware', 'Non-invasive'].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-muted backdrop-blur-md"
                >
                  {t}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center"
          >
            <HeroEmblem />
          </motion.div>
        </div>

        <div className="relative -mb-1 text-[#050505]" aria-hidden>
          <svg className="w-full" viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path
              fill="currentColor"
              d="M0,64 C360,120 720,0 1080,48 C1260,72 1380,96 1440,88 L1440,120 L0,120 Z"
              className="text-base-950"
            />
          </svg>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b border-white/10 bg-base-950 py-10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-4 sm:px-6 lg:px-8">
          {trust.map((t, i) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted sm:text-sm"
            >
              <CheckCircle2 className="h-4 w-4 text-primary" aria-hidden />
              {t}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services overview */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Services"
            title="Whole-person modalities, thoughtfully combined"
            subtitle="Explore pathways that may support regulation, mobility, stress patterns, and restorative rest—always within a wellness scope."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {homeServiceOverview.map((s, i) => (
              <ServiceCard
                key={s.title}
                title={s.title}
                description={s.blurb}
                icon={s.icon}
                to={s.to}
                delay={i * 0.06}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Whole-person */}
      <section className="relative overflow-hidden border-y border-white/10 bg-base-900/35 py-20 sm:py-28">
        <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 translate-x-1/3 rounded-full bg-primary/10 blur-[100px]" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <SectionHeading
              align="left"
              eyebrow="Integrated approach"
              title="Whole-person wellness — not a single-lens fix"
              subtitle="Care considers emotional tone, physical structure, lifestyle rhythms, herbal education, and nervous system regulation together. Plans stay flexible as your life shifts."
            />
            <AnimatedReveal className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-transparent p-8 shadow-glass backdrop-blur-xl">
              <ul className="space-y-4 text-muted">
                <li className="flex gap-3">
                  <Sparkles className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden />
                  <span>
                    <strong className="text-cream">Emotional &amp; mental support:</strong> stress skills, sleep
                    hygiene, and hypnotherapy-informed relaxation.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Sparkles className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <span>
                    <strong className="text-cream">Structural &amp; physical ease:</strong> manual osteopathy and massage
                    that may help mobility and comfort.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Sparkles className="mt-1 h-5 w-5 shrink-0 text-coral" aria-hidden />
                  <span>
                    <strong className="text-cream">Lifestyle &amp; herbal education:</strong> botanical preparation
                    guidance with safety-forward pacing.
                  </span>
                </li>
              </ul>
            </AnimatedReveal>
          </div>
        </div>
      </section>

      {/* Featured conditions */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Focus areas"
            title="Featured condition themes"
            subtitle="Explore categories we may support with holistic care—language stays wellness-oriented, not diagnostic."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {homeConditionHighlights.map((c, i) => (
              <ConditionCard key={c.id} id={c.id} title={c.title} blurb={c.blurb} delay={i * 0.05} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button to="/conditions" variant="outline">
              Browse all categories
            </Button>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-white/10 bg-base-850/60 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Process"
            title="A steady rhythm from first visit to follow-up"
            subtitle="Transparent pacing, informed consent, and collaborative decision-making at every step."
          />
          <div className="relative mt-16">
            <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-primary/60 via-white/10 to-transparent lg:block" aria-hidden />
            <div className="grid gap-6 lg:grid-cols-4">
              {process.map((p, i) => (
                <motion.article
                  key={p.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.45 }}
                  className="relative overflow-hidden rounded-2xl border border-white/10 bg-base-950/60 p-6 shadow-glass backdrop-blur-md"
                >
                  <span className="text-3xl font-bold text-primary/25">{i + 1}</span>
                  <h3 className="mt-2 font-serif text-lg font-semibold text-cream">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Signature modalities */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl space-y-8 px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Signature modalities"
            title="Depth where it matters — clarity where it helps"
            subtitle="Each pathway has its own detail page with expectations, scope, and gentle honesty about what wellness support can and cannot promise."
          />
          <div className="space-y-6">
            {signatures.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -16 : 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className={`grid gap-6 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br p-6 shadow-card backdrop-blur-xl sm:p-10 lg:grid-cols-2 lg:items-center ${
                  i % 2 === 0 ? 'from-primary/10 to-base-950' : 'from-coral/10 to-base-950'
                }`}
              >
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-cream sm:text-3xl">{s.title}</h3>
                  <p className="mt-4 text-muted">{s.text}</p>
                  <Link
                    to={s.to}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3"
                  >
                    Learn more <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                </div>
                <div className="relative min-h-[160px] rounded-2xl border border-white/10 bg-base-950/50 p-6">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,212,0,0.12),transparent_45%)]" aria-hidden />
                  <p className="relative text-sm leading-relaxed text-muted">
                    Complementary wellness care may help you feel more resourced alongside conventional support. We
                    stay transparent about scope, timelines, and when referral or emergency care is the right next step.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="border-y border-white/10 bg-base-900/40 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Why choose this clinic" title="Care that feels human, structured, and calm" />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {why.map((t, i) => (
              <motion.div
                key={t}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm font-medium text-cream shadow-glass backdrop-blur-md"
              >
                {t}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Voices"
            title="Placeholder reflections from the care journey"
            subtitle="Replace with verified client stories when available. Tone reflects wellness support—not guaranteed clinical outcomes."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.id} quote={t.quote} name={t.name} context={t.context} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />

      {/* FAQ preview */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="FAQ" title="Questions clients ask first" />
          <div className="mt-10">
            <FAQAccordion items={previewFaqs} />
          </div>
          <div className="mt-8 text-center">
            <Button to="/faq" variant="secondary">
              View all FAQs
            </Button>
          </div>
        </div>
      </section>

      {/* Contact preview */}
      <section className="border-t border-white/10 bg-base-850/50 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Contact"
            title="Ready when you are"
            subtitle="Share a few details—preferred timing, services of interest, and what you hope to support."
          />
          <div className="mt-12">
            <ContactForm compact />
          </div>
        </div>
      </section>
    </div>
  )
}
