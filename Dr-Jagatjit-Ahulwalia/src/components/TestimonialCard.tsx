import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

export function TestimonialCard({
  quote,
  name,
  context,
  delay = 0,
}: {
  quote: string
  name: string
  context: string
  delay?: number
}) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.35 } }}
      className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-6 shadow-card backdrop-blur-xl"
    >
      <Quote className="h-8 w-8 text-primary/50" aria-hidden />
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-cream/95 sm:text-base">“{quote}”</blockquote>
      <figcaption className="mt-6 border-t border-white/10 pt-4 text-sm">
        <span className="font-semibold text-cream">{name}</span>
        <span className="mt-1 block text-xs text-muted">{context}</span>
      </figcaption>
      <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-coral/10 blur-2xl" aria-hidden />
    </motion.figure>
  )
}
