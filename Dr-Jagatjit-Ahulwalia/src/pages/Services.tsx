import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { AnimatedReveal } from '../components/AnimatedReveal'
import { CTASection } from '../components/CTASection'
import { PageHero } from '../components/PageHero'
import { ServiceCard } from '../components/ServiceCard'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Button } from '../components/ui/Button'
import { catalogServices } from '../data/servicesCatalog'

function sectionId(title: string) {
  if (title.startsWith('Injury')) return 'injury'
  if (title.startsWith('Prenatal')) return 'prenatal'
  if (title.startsWith('Specialized')) return 'cupping'
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

export default function Services() {
  return (
    <div>
      <PageHero
        eyebrow="Services"
        title="Modalities that meet you where you are"
        subtitle="From natural medicine education to therapeutic touch—each service is framed as wellness support with individualized planning."
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: 'Services' },
        ]}
      >
        <Button to="/booking">Book consultation</Button>
      </PageHero>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Explore pathways"
            subtitle="Select a card to open its dedicated page when available, or scroll for deeper descriptions."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {catalogServices.map((s, i) => (
              <ServiceCard
                key={s.title}
                title={s.title}
                description={s.summary}
                icon={s.icon}
                to={s.detailPath}
                delay={i * 0.05}
              />
            ))}
          </div>
        </div>
      </section>

      {catalogServices.map((s, i) => {
        const id = sectionId(s.title)
        return (
          <section key={s.title} id={id} className={`scroll-mt-28 border-t border-white/10 py-16 sm:py-24 ${i % 2 === 0 ? 'bg-base-950' : 'bg-base-900/35'}`}>
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                <AnimatedReveal>
                  <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary backdrop-blur-md">
                    <s.icon className="h-4 w-4" aria-hidden />
                    Deep dive
                  </div>
                  <h2 className="mt-4 font-serif text-3xl font-semibold text-cream sm:text-4xl">{s.title}</h2>
                  <p className="mt-5 text-base leading-relaxed text-muted">{s.summary}</p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    {s.detailPath ? (
                      <Button to={s.detailPath}>Open modality page</Button>
                    ) : null}
                    <Button to="/booking" variant="secondary">
                      Request appointment
                    </Button>
                  </div>
                </AnimatedReveal>
                <motion.aside
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="rounded-3xl border border-white/10 bg-gradient-to-br from-primary/10 via-transparent to-coral/10 p-6 shadow-glass backdrop-blur-xl"
                >
                  <h3 className="font-serif text-lg font-semibold text-cream">Wellness scope reminder</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    Descriptions highlight supportive intentions—not cures or guaranteed timelines. Medical questions,
                    prescriptions, and emergencies belong with your physician or local emergency services.
                  </p>
                  <Link to="/terms" className="mt-4 inline-block text-sm font-semibold text-primary hover:underline">
                    Read full disclaimer
                  </Link>
                </motion.aside>
              </div>
            </div>
          </section>
        )
      })}

      <CTASection />
    </div>
  )
}
