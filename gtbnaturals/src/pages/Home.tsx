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
    title: 'Doctorate of Natural Medicine',
    text:
      'Non-invasive support for emotional, mental, and physical wellness themes—including acupressure, hydrotherapy, botanical medicine, nutrition, coaching, and energy work as appropriate.',
    to: '/natural-medicine',
  },
  {
    title: 'Professional Herbalist',
    text:
      'Plant-based assessment, formulations, client education, progress monitoring, and quality- and sustainability-minded herb sourcing.',
    to: '/herbal-wellness',
  },
  {
    title: 'Manual Osteopathic Therapist',
    text:
      'Hands-on evaluation and treatment for structure and function—soft tissue and joint work, muscle energy techniques, and scope-appropriate cranial or visceral approaches plus lifestyle education.',
    to: '/manual-osteopathy',
  },
  {
    title: 'Certified Hypnotherapist',
    text:
      'Credentialed hypnosis and evidence-informed techniques for emotional, behavioral, and mind–body themes—including inductions, therapeutic suggestions, habit skills, and self-hypnosis when fitting.',
    to: '/hypnotherapy',
  },
  {
    title: 'Massage Therapist',
    text:
      'Consultation-led sessions spanning Swedish, deep tissue, sports massage, trigger point and myofascial work, cupping including fire cupping, and education for self-care and injury prevention.',
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
  const announcementText = 'WE DO THE DIRECT BILLING TO THE INSURANCE COMPANIES'

  return (
    <div className="relative overflow-hidden">
      <div
        className="pointer-events-none fixed inset-0 bg-cover bg-center bg-no-repeat opacity-25 z-0"
        style={{ backgroundImage: 'url(/home.png)' }}
        aria-hidden
      />
      <div className="relative z-1">
        <div className="announcement-bar announcement-bar-fixed-home" role="status" aria-label={announcementText}>
          <div className="announcement-track">
            {[0, 1].map((groupIndex) => (
              <div key={groupIndex} className="announcement-group" aria-hidden={groupIndex === 1}>
                {[0, 1, 2].map((itemIndex) => (
                  <span key={`${groupIndex}-${itemIndex}`} className="announcement-item">
                    {announcementText}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="announcement-home-spacer" aria-hidden />

        {/* Premium hero */}
        <section className="relative min-h-[100svh] overflow-hidden border-b border-white/10">
          <AnimatedBackground dense />

          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:min-h-[calc(100svh-5rem)] lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-20">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary sm:text-xs"
            >
              <Leaf className="h-3.5 w-3.5" aria-hidden />
              Holistic · mental, physical &amp; spiritual wellbeing
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
                delay: 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-6 font-serif text-3xl font-semibold leading-[1.12] tracking-tight text-cream sm:text-4xl lg:text-[2.75rem] xl:text-5xl"
            >
              Welcome to{" "}
              <span className="bg-gradient-to-r from-gold via-orange to-primary bg-clip-text text-transparent">
                GTB Naturals &amp; Holistic Inc.
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-6 max-w-xl space-y-5 text-lg leading-relaxed text-muted"
            >
              <p>
                Where you are not alone in your healing journey. We will strive
                together to heal you mentally, physically &amp; spiritually.
              </p>
              <p>
                We will be your companion at every step of your healing journey
                until unless the root causes of your issues are resolved.
              </p>
              <p>
                We are committed &amp; passionate to design a personalized plan
                for your body to heal at its own pace.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22 }}
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
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              {[
                "Companion-focused",
                "Multi-modality",
                "Personalized healing",
              ].map((t) => (
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
            transition={{
              duration: 0.75,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative flex justify-center"
          >
            <HeroEmblem />
          </motion.div>
        </div>

        <div className="relative -mb-1 text-[#050505]" aria-hidden>
          <svg
            className="w-full"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
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
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
        <div
          className="pointer-events-none absolute right-0 top-0 h-80 w-80 translate-x-1/3 rounded-full bg-primary/10 blur-[100px]"
          aria-hidden
        />
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
                  <Sparkles
                    className="mt-1 h-5 w-5 shrink-0 text-gold"
                    aria-hidden
                  />
                  <span>
                    <strong className="text-cream">
                      Emotional &amp; mental support:
                    </strong>{" "}
                    stress skills, sleep hygiene, and hypnotherapy-informed
                    relaxation.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Sparkles
                    className="mt-1 h-5 w-5 shrink-0 text-primary"
                    aria-hidden
                  />
                  <span>
                    <strong className="text-cream">
                      Structural &amp; physical ease:
                    </strong>{" "}
                    manual osteopathy and massage that may help mobility and
                    comfort.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Sparkles
                    className="mt-1 h-5 w-5 shrink-0 text-coral"
                    aria-hidden
                  />
                  <span>
                    <strong className="text-cream">
                      Lifestyle &amp; herbal education:
                    </strong>{" "}
                    botanical preparation guidance with safety-forward pacing.
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
              <ConditionCard
                key={c.id}
                id={c.id}
                title={c.title}
                blurb={c.blurb}
                delay={i * 0.05}
              />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button to="/conditions" variant="outlineFeatured">
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
            <div
              className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-orange/60 via-white/10 to-transparent lg:block"
              aria-hidden
            />
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
                  <span className="text-3xl font-bold tabular-nums text-orange">
                    {i + 1}
                  </span>
                  <h3 className="mt-2 font-serif text-lg font-semibold text-cream">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {p.text}
                  </p>
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
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className={`grid gap-8 overflow-hidden rounded-2xl border-0 bg-gradient-to-br p-8 shadow-[0_6px_38px_-14px_rgb(15_23_42_/_0.09)] sm:p-12 lg:grid-cols-2 lg:items-center ${
                  i % 2 === 0 ? 'from-white via-white to-peach/5' : 'from-white via-white to-peach/4'
                }`}
              >
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-cream sm:text-3xl">
                    {s.title}
                  </h3>
                  <p className="mt-4 text-muted">{s.text}</p>
                  <Link
                    to={s.to}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-orange transition-colors hover:gap-3 hover:text-orange/85"
                  >
                    Learn more <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                </div>
                <div className="relative min-h-[132px] overflow-hidden rounded-xl border-0 bg-gradient-to-br from-white via-peach/16 to-orange/8 p-4 shadow-[inset_0_1px_0_rgb(255_255_255_/_0.55),0_3px_18px_-8px_rgb(15_23_42_/_0.06)] sm:p-5">
                  <div
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_0%,rgb(255_165_3_/_0.12),transparent_52%),radial-gradient(circle_at_10%_100%,rgb(255_189_1_/_0.1),transparent_48%)]"
                    aria-hidden
                  />
                  <p className="relative text-sm leading-relaxed text-muted">
                    Complementary wellness care may help you feel more resourced
                    alongside conventional support. We stay transparent about
                    scope, timelines, and when referral or emergency care is the
                    right next step.
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
          <SectionHeading
            eyebrow="Why choose this clinic"
            title="Care that feels human, structured, and calm"
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {why.map((t, i) => (
              <motion.div
                key={t}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl border-0 bg-white/[0.93] px-5 py-4 text-sm font-medium text-cream shadow-[0_6px_32px_-14px_rgb(15_23_42_/_0.07),0_2px_8px_-4px_rgb(15_23_42_/_0.04)]"
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
              <TestimonialCard
                key={t.id}
                quote={t.quote}
                name={t.name}
                context={t.context}
                delay={i * 0.08}
              />
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
    </div>
  );
}
