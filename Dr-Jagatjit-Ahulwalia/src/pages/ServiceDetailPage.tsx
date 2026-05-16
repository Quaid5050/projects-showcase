import { motion } from 'framer-motion'
import { Navigate, useLocation } from 'react-router-dom'
import { AnimatedReveal } from '../components/AnimatedReveal'
import { CTASection } from '../components/CTASection'
import { FAQAccordion } from '../components/FAQAccordion'
import { PageHero } from '../components/PageHero'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Button } from '../components/ui/Button'
import { getServiceDetail } from '../data/serviceDetailPages'

export default function ServiceDetailPage() {
  const { pathname } = useLocation()
  const data = getServiceDetail(pathname)

  if (!data) {
    return <Navigate to="/services" replace />
  }

  const faqItems = data.faqs.map((f, i) => ({
    id: `${pathname}-faq-${i}`,
    question: f.question,
    answer: f.answer,
  }))

  return (
    <div>
      <PageHero
        eyebrow="Modality"
        title={data.title}
        subtitle={data.subtitle}
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: 'Services', to: '/services' },
          { label: data.title },
        ]}
      >
        <div className="flex flex-wrap gap-4">
          <Button to="/booking">Book consultation</Button>
          <Button to="/services" variant="secondary">
            All services
          </Button>
        </div>
      </PageHero>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <AnimatedReveal>
              <SectionHeading align="left" eyebrow="What it is" title="Clear scope, gentle depth" />
              <p className="mt-6 text-base leading-relaxed text-muted">{data.whatItIs}</p>
            </AnimatedReveal>
            <AnimatedReveal delay={0.08}>
              <SectionHeading align="left" eyebrow="Who it may support" title="Examples—not requirements" />
              <ul className="mt-6 space-y-3 text-muted">
                {data.whoMaySupport.map((x) => (
                  <li key={x} className="flex gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm backdrop-blur-md">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </AnimatedReveal>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-base-900/35 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="What to expect" subtitle="Transparency, consent, and pacing that honors your nervous system." />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {data.whatToExpect.map((x, i) => (
              <motion.div
                key={x}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl border border-white/10 bg-base-950/60 p-5 text-sm leading-relaxed text-muted shadow-glass backdrop-blur-md"
              >
                {x}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Support areas & benefits"
            subtitle="Benefits describe what many clients value—not guaranteed medical outcomes."
          />
          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {data.benefits.map((b) => (
              <li
                key={b}
                className="rounded-xl border border-primary/20 bg-primary/5 px-4 py-3 text-sm text-cream/95 backdrop-blur-md"
              >
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-white/10 bg-base-850/50 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="A simple process" subtitle="Four beats you can expect across modalities." />
          <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {data.process.map((p, i) => (
              <motion.li
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-5"
              >
                <span className="text-3xl font-bold text-primary/25">{i + 1}</span>
                <h3 className="mt-2 font-serif text-lg font-semibold text-cream">{p.title}</h3>
                <p className="mt-2 text-sm text-muted">{p.description}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Frequently asked" />
          <div className="mt-8">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>

      <CTASection title="Curious if this modality fits?" subtitle="We can explore fit, timing, and alternatives together—no obligation." />
    </div>
  )
}
