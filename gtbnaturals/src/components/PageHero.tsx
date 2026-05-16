import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import type { ReactNode } from 'react'

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
  breadcrumb,
}: {
  eyebrow?: string
  title: string
  subtitle?: string
  children?: ReactNode
  breadcrumb?: { label: string; to?: string }[]
}) {
  return (
    <section className="relative overflow-hidden border-b border-stone-200 bg-linear-to-br from-white via-peach/28 to-peach/12 pt-10 pb-16 sm:pt-12 sm:pb-20 lg:pt-14 lg:pb-24">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-32 top-0 h-105 w-105 rounded-full bg-linear-to-br from-orange/12 via-peach/30 to-transparent blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-95 w-95 rounded-full bg-linear-to-tl from-amber/22 via-orange/12 to-gold/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {breadcrumb?.length ? (
          <nav className="mb-6 flex flex-wrap items-center gap-2 text-xs text-muted" aria-label="Breadcrumb">
            {breadcrumb.map((b, i) => (
              <span key={`${b.label}-${i}`} className="flex items-center gap-2">
                {i > 0 ? <ChevronRight className="h-3.5 w-3.5 opacity-50" aria-hidden /> : null}
                {b.to ? (
                  <Link to={b.to} className="hover:text-primary">
                    {b.label}
                  </Link>
                ) : (
                  <span className="text-cream/90">{b.label}</span>
                )}
              </span>
            ))}
          </nav>
        ) : null}

        {eyebrow ? (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-primary"
          >
            {eyebrow}
          </motion.p>
        ) : null}

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="mt-3 max-w-4xl font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-cream sm:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>

        {subtitle ? (
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl"
          >
            {subtitle}
          </motion.p>
        ) : null}

        {children ? <div className="mt-10">{children}</div> : null}
      </div>
    </section>
  )
}
