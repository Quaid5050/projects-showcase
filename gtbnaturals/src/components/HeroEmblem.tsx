import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { catalogServices } from '../data/servicesCatalog'

const heroServices = [
  catalogServices[0], // Doctorate of Natural Medicine — top
  catalogServices[2], // Manual Osteopathic Therapist — left top
  catalogServices[4], // Massage Therapist — bottom
  catalogServices[1], // Professional Herbalist — top right
  catalogServices[3], // Certified Hypnotherapist — below Professional Herbalist
]

/** Orbit layout for labels (same order as `heroServices`). */
const tagLayoutClasses = [
  'left-1/2 top-[3%] -translate-x-1/2 max-w-[min(16rem,86vw)]',
  'left-[2%] top-[40%] -translate-y-1/2 max-w-[min(10rem,44vw)] sm:left-[4%]',
  'left-1/2 bottom-[10%] -translate-x-1/2 max-w-[min(11rem,80vw)] sm:bottom-[8%]',
  'right-[2%] top-[26%] max-w-[min(9rem,44vw)] sm:right-[4%]',
  'right-[2%] bottom-[30%] max-w-[min(9.5rem,46vw)] sm:bottom-[28%]',
] as const

const tagTextAlignClasses = ['text-center', 'text-left', 'text-center', 'text-right', 'text-right'] as const

export function HeroEmblem() {
  return (
    <div className="relative mx-auto flex w-full max-w-lg flex-col items-center gap-4 sm:gap-5">
      <div className="relative aspect-square w-full">
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-b from-gold/20 via-coral-soft/10 to-coral/5 blur-3xl"
          animate={{ opacity: [0.45, 0.75, 0.45], scale: [1, 1.05, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden
        />
        <motion.div
          className="absolute inset-[12%] rounded-full border border-primary/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 48, repeat: Infinity, ease: 'linear' }}
          aria-hidden
        />
        <motion.div
          className="absolute inset-[22%] rounded-full border border-stone-200"
          animate={{ rotate: -360 }}
          transition={{ duration: 64, repeat: Infinity, ease: 'linear' }}
          aria-hidden
        />

        {/* Flame */}
        <motion.div
          className="absolute left-1/2 top-[8%] h-[42%] w-[28%] -translate-x-1/2 rounded-[100%] bg-gradient-to-t from-gold via-amber to-orange opacity-90 shadow-[0_0_56px_rgb(255_165_3_/_0.42)]"
          style={{ clipPath: 'ellipse(50% 55% at 50% 100%)' }}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden
        />

        {/* Leaves */}
        <motion.div
          className="absolute left-[8%] top-[38%] h-[30%] w-[38%] rounded-[60%_40%_50%_50%] bg-gradient-to-br from-primary via-primary-dark to-forest opacity-90 shadow-glow"
          animate={{ rotate: [-2, 3, -2], y: [0, 4, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden
        />
        <motion.div
          className="absolute right-[8%] top-[38%] h-[30%] w-[38%] rounded-[40%_60%_50%_50%] bg-gradient-to-bl from-primary via-primary-dark to-forest opacity-90 shadow-glow"
          animate={{ rotate: [2, -3, 2], y: [0, 4, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
          aria-hidden
        />

        {/* Coral petals */}
        <motion.div
          className="absolute bottom-[26%] left-[30%] h-[12%] w-[18%] rounded-full bg-coral/55 blur-[1px]"
          animate={{ scale: [1, 1.06, 1], opacity: [0.55, 0.85, 0.55] }}
          transition={{ duration: 5.5, repeat: Infinity }}
          aria-hidden
        />
        <motion.div
          className="absolute bottom-[26%] right-[30%] h-[12%] w-[18%] rounded-full bg-coral-soft/50 blur-[1px]"
          animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 5.5, repeat: Infinity, delay: 0.3 }}
          aria-hidden
        />

        {/* Silhouette hint */}
        <div
          className="absolute bottom-[18%] left-1/2 h-[22%] w-[18%] -translate-x-1/2 bg-stone-900"
          style={{ clipPath: 'polygon(20% 0, 80% 0, 100% 100%, 0 100%)' }}
          aria-hidden
        />

        {heroServices.map((s, i) => (
          <div key={s.title} className={`pointer-events-none absolute z-[5] ${tagLayoutClasses[i] ?? ''}`}>
            <motion.span
              className="block"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 5 + i * 0.35, repeat: Infinity, ease: 'easeInOut', delay: i * 0.18 }}
            >
              <Link
                to={s.detailPath ?? '/services'}
                className={`pointer-events-auto block rounded-2xl border border-[hsl(36_20%_88%_/0.6)] bg-white px-3 py-2 text-xs font-bold leading-snug text-cream shadow-ref-soft backdrop-blur-md transition-all duration-500 hover:shadow-ref-elegant hover:bg-white ${tagTextAlignClasses[i]} sm:px-4 sm:text-sm`}
              >
                {s.title}
              </Link>
            </motion.span>
          </div>
        ))}
      </div>

      {/* Corporate line — beneath the emblem */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-xl border-t border-stone-200 pt-4 text-center font-serif text-base font-semibold tracking-wide text-cream sm:text-lg"
      >
        GTB Naturals &amp; Holistic Inc.
      </motion.p>
    </div>
  )
}