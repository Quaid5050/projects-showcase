import { motion } from 'framer-motion'
import { AnimatedReveal } from '../AnimatedReveal'

type Align = 'left' | 'center'

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
}: {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: Align
  className?: string
}) {
  const wrapper = align === 'center' ? 'mx-auto max-w-3xl text-center' : 'mx-0 max-w-2xl text-left'

  return (
    <AnimatedReveal className={`${wrapper} ${className}`}>
      {eyebrow ? (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="text-xs font-semibold uppercase tracking-[0.22em] text-primary"
        >
          {eyebrow}
        </motion.p>
      ) : null}
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.55, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        className="mt-3 font-serif text-3xl font-semibold leading-tight text-cream sm:text-4xl lg:text-[2.65rem]"
      >
        {title}
      </motion.h2>
      {subtitle ? (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 text-base leading-relaxed text-muted sm:text-lg"
        >
          {subtitle}
        </motion.p>
      ) : null}
    </AnimatedReveal>
  )
}
