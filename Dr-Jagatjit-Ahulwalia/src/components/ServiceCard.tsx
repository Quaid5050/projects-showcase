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
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/25 to-forest/40 text-primary ring-1 ring-primary/30">
        <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
      </div>
      <h3 className="flex items-start justify-between gap-3 font-serif text-xl font-semibold text-cream">
        <span>{title}</span>
        {to ? <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-primary/70" aria-hidden /> : null}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
      <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-gold/5 blur-3xl transition group-hover:bg-gold/10" aria-hidden />
    </>
  )

  const cardClass =
    'group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-6 shadow-card backdrop-blur-xl transition duration-500 hover:border-primary/35 hover:shadow-glow'

  if (to) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -6 }}
      >
        <Link to={to} className={`${cardClass} block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary`}>
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
      whileHover={{ y: -6 }}
      className={cardClass}
    >
      {inner}
    </motion.article>
  )
}
