import { motion } from 'framer-motion'

const floatTags = [
  'Natural Medicine',
  'Herbal Wellness',
  'Osteopathy',
  'Hypnotherapy',
  'Massage Therapy',
] as const

export function HeroEmblem() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-lg">
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-b from-gold/25 via-orange/10 to-transparent blur-3xl"
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
        className="absolute inset-[22%] rounded-full border border-white/10"
        animate={{ rotate: -360 }}
        transition={{ duration: 64, repeat: Infinity, ease: 'linear' }}
        aria-hidden
      />

      {/* Flame */}
      <motion.div
        className="absolute left-1/2 top-[8%] h-[42%] w-[28%] -translate-x-1/2 rounded-[100%] bg-gradient-to-t from-gold via-orange to-gold/30 opacity-90 shadow-[0_0_60px_rgba(255,160,0,0.35)]"
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
        className="absolute bottom-[18%] left-1/2 h-[22%] w-[18%] -translate-x-1/2 bg-base-950/90"
        style={{ clipPath: 'polygon(20% 0, 80% 0, 100% 100%, 0 100%)' }}
        aria-hidden
      />

      {/* Floating glass tags */}
      {floatTags.map((label, i) => (
        <motion.span
          key={label}
          className="absolute rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-cream/90 shadow-glass backdrop-blur-md sm:text-xs"
          style={{
            left: `${18 + (i % 3) * 24}%`,
            top: `${12 + ((i * 17) % 5) * 14}%`,
          }}
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 5 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
        >
          {label}
        </motion.span>
      ))}
    </div>
  )
}
