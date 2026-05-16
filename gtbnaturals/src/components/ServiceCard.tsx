import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { LucideIcon } from 'lucide-react'
import { ArrowUpRight } from 'lucide-react'

export function ServiceCard({
  title,
  description,
  icon: Icon,
  to,
  delay = 0,
}: {
  title: string
  description: string
  icon: LucideIcon
  to?: string
  delay?: number
}) {
  const inner = (
    <>
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange/88 to-orange/68 text-white shadow-[0_4px_18px_-6px_rgb(230_120_0_/_0.45),inset_0_1px_0_0_rgb(255_255_255_/_0.35)] ring-1 ring-orange/55 transition duration-300 group-hover:from-orange/95 group-hover:to-orange/75 group-hover:shadow-[0_6px_20px_-8px_rgb(230_120_0_/_0.42)]">
        <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
      </div>
      <h3 className="flex items-start justify-between gap-3 font-serif text-xl font-semibold text-cream">
        <span>{title}</span>
        {to ? (
          <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-orange transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-amber" aria-hidden />
        ) : null}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
    </>
  )

  const cardClass =
    'group surface-card surface-card-interactive flex h-full flex-col overflow-hidden p-6 transition-all duration-500'

  if (to) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -4 }}
      >
        <Link to={to} className={`${cardClass} block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange`}>
          {inner}
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className={cardClass}
    >
      {inner}
    </motion.article>
  )
}
