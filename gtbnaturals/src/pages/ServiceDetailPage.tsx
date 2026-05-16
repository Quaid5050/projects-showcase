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
    <div className="relative overflow-hidden">
      <div
        className="pointer-events-none fixed inset-0 bg-cover bg-center bg-no-repeat opacity-25 z-0"
        style={{ backgroundImage: 'url(/overall%20bg.png)' }}
        aria-hidden
      />
      <div className="relative z-1">
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
              <p className="mt-6 whitespace-pre-line text-base leading-relaxed text-muted">{data.whatItIs}</p>
            </AnimatedReveal>
            <AnimatedReveal delay={0.08}>
              <SectionHeading align="left" eyebrow="Who it may support" title="Examples—not requirements" />
              <ul className="mt-6 space-y-3 text-muted">
                {data.whoMaySupport.map((x) => (
                  <li key={x} className="surface-chip flex gap-3 px-4 py-3 text-sm">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </AnimatedReveal>
          </div>
          {data.roleInPractice?.length ? (
            <AnimatedReveal className="mt-12">
              <SectionHeading
                align="left"
                eyebrow="Practice scope"
                title="What this work can include"
                subtitle="Listed in the same sequence as our service description—supportive wellness scope, not a guarantee of every technique in every visit."
              />
              <ol className="mt-6 grid list-none grid-cols-1 gap-2.5 sm:mt-8 sm:grid-cols-2 sm:gap-3">
                {data.roleInPractice.map((line, idx) => (
                  <li
                    key={`${idx}-${line}`}
                    className="surface-chip flex min-h-0 gap-2.5 rounded-lg px-3 py-2.5 text-sm leading-snug text-muted"
                  >
                    <span className="w-6 shrink-0 pt-0.5 text-xs font-semibold tabular-nums text-primary" aria-hidden>
                      {idx + 1}.
                    </span>
                    <span className="min-w-0">{line}</span>
                  </li>
                ))}
              </ol>
            </AnimatedReveal>
          ) : null}
        </div>
      </section>

      <section className="border-y border-stone-200 bg-base-900 py-14 sm:py-20">
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
                className="surface-card p-5 text-sm leading-relaxed text-muted"
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
                className="surface-chip px-4 py-3 text-sm text-cream/95"
              >
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-stone-200 bg-base-900 py-14 sm:py-20">
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
                className="surface-card p-5"
              >
                <span className="text-3xl font-bold text-orange">{i + 1}</span>
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
    </div>
  )
}
