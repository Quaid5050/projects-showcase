import { Search } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { AnimatedReveal } from '../components/AnimatedReveal'
import { ConditionAccordion } from '../components/ConditionAccordion'
import { PageHero } from '../components/PageHero'
import { SectionHeading } from '../components/ui/SectionHeading'
import { conditionCategories } from '../data/conditions'

export default function Conditions() {
  const location = useLocation()
  const [query, setQuery] = useState('')
  const [active, setActive] = useState<string | 'all'>('all')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return conditionCategories.filter((cat) => {
      if (active !== 'all' && cat.id !== active) return false
      if (!q) return true
      if (cat.title.toLowerCase().includes(q)) return true
      return cat.items.some((i) => i.toLowerCase().includes(q))
    })
  }, [query, active])

  useEffect(() => {
    const hash = location.hash.replace('#', '')
    if (!hash) return
    window.requestAnimationFrame(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }, [location.hash, filtered])

  return (
    <div>
      <PageHero
        eyebrow="Conditions"
        title="Wellness themes we may support"
        subtitle="Browse by category or search keywords. Language reflects holistic support—not claims to diagnose, cure, or replace medical care."
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: 'Conditions' },
        ]}
      />

      <section className="border-b border-white/10 bg-base-900/30 py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <label className="relative block w-full lg:max-w-md">
              <span className="sr-only">Search conditions</span>
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" aria-hidden />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search categories or keywords…"
                className="w-full rounded-full border border-white/10 bg-base-950/80 py-3 pl-11 pr-4 text-sm text-cream outline-none ring-primary/30 placeholder:text-muted/50 focus:ring-2"
              />
            </label>
            <p className="text-xs text-muted">
              Tip: combine search with category chips to narrow long lists quickly.
            </p>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {(['all', ...conditionCategories.map((c) => c.id)] as const).map((id) => {
              const label =
                id === 'all'
                  ? 'All categories'
                  : conditionCategories.find((c) => c.id === id)?.title ?? id
              const isOn = active === id
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setActive(id)}
                  className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition ${
                    isOn
                      ? 'border-primary/50 bg-primary/15 text-cream'
                      : 'border-white/10 bg-white/[0.03] text-muted hover:border-primary/30 hover:text-cream'
                  }`}
                >
                  {id === 'all' ? label : label.split('&')[0].trim()}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Categories & focus areas"
            subtitle="Tap a category to expand. If you experience urgent symptoms, seek emergency medical care immediately."
          />

          <div className="mt-6 flex flex-wrap gap-3 text-sm text-muted">
            <span>
              Showing <strong className="text-cream">{filtered.length}</strong> of{' '}
              <strong className="text-cream">{conditionCategories.length}</strong> categories
            </span>
          </div>

          <div className="mt-10">
            {filtered.length ? (
              <ConditionAccordion categories={filtered} />
            ) : (
              <AnimatedReveal className="rounded-2xl border border-white/10 bg-base-900/50 p-8 text-center text-muted">
                No categories match that combination. Try clearing filters or using a shorter keyword.
              </AnimatedReveal>
            )}
          </div>

          <AnimatedReveal className="mt-14 rounded-2xl border border-coral/25 bg-coral/5 p-6 text-sm leading-relaxed text-muted">
            <strong className="text-coral">Disclaimer:</strong> Lists describe wellness themes that clients sometimes
            explore with holistic support—they are not exhaustive diagnoses or treatment promises. Individual results
            vary. Use emergency services for chest pain, severe breathing difficulty, sudden neurological changes, or
            severe pain.
          </AnimatedReveal>
        </div>
      </section>
    </div>
  )
}
