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
      className="flex h-full flex-col"
    >
      <div className="surface-card surface-card-interactive flex h-full min-h-0 flex-1 flex-col overflow-hidden p-6 transition-all duration-500">
        <Quote className="h-8 w-8 text-orange/80" aria-hidden />
        <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-cream/95 sm:text-base">“{quote}”</blockquote>
        <figcaption className="mt-6 border-t border-[hsl(36_20%_88%_/0.55)] pt-4 text-sm">
          <span className="font-semibold text-cream">{name}</span>
          <span className="mt-1 block text-xs text-muted">{context}</span>
        </figcaption>
      </div>
    </motion.figure>
  )
}
