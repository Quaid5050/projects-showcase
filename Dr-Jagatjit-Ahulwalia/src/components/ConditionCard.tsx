import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { conditionCategories } from '../data/conditions'

function IconFor({ id }: { id: string }) {
  const cat = conditionCategories.find((c) => c.id === id)
  const Icon = cat?.icon
  if (!Icon) return null
  return <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
}

export function ConditionCard({
  id,
  title,
  blurb,
  delay = 0,
}: {
  id: string
  title: string
  blurb: string
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5 }}
    >
      <Link
        to={`/conditions#${id}`}
        className="group flex h-full flex-col rounded-2xl border border-white/10 bg-base-900/60 p-5 shadow-glass backdrop-blur-md transition hover:border-coral/35 hover:shadow-[0_0_40px_-12px_rgba(240,125,125,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-coral/15 text-coral ring-1 ring-coral/25">
          <IconFor id={id} />
        </span>
        <h3 className="mt-4 font-serif text-lg font-semibold text-cream">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{blurb}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
          View focus areas
          <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" aria-hidden />
        </span>
      </Link>
    </motion.div>
  )
}
