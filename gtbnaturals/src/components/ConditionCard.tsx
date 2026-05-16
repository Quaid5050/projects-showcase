import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { conditionCategories } from '../data/conditions'

function IconFor({ id }: { id: string }) {
  const cat = conditionCategories.find((c) => c.id === id)
  const Icon = cat?.icon
  if (!Icon) return null
  return <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
    >
      <Link
        to={`/conditions#${id}`}
        className="group surface-card surface-card-interactive flex h-full flex-col overflow-hidden p-6 transition-all duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
      >
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange/88 to-orange/68 text-white shadow-[0_4px_18px_-6px_rgb(230_120_0_/_0.45),inset_0_1px_0_0_rgb(255_255_255_/_0.35)] ring-1 ring-orange/55 transition duration-300 group-hover:from-orange/95 group-hover:to-orange/75 group-hover:shadow-[0_6px_20px_-8px_rgb(230_120_0_/_0.42)]">
          <IconFor id={id} />
        </div>
        <h3 className="flex items-start justify-between gap-3 font-serif text-xl font-semibold text-cream">
          <span>{title}</span>
          <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-orange transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-amber" aria-hidden />
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{blurb}</p>
      </Link>
    </motion.div>
  )
}
