import { motion } from 'framer-motion'

export function AnimatedBackground({ dense = false }: { dense?: boolean }) {
  const count = dense ? 18 : 10
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {Array.from({ length: count }).map((_, i) => (
        <motion.span
          key={i}
          className={`absolute h-1 w-1 rounded-full ${
            i % 4 === 0
              ? 'bg-orange/30'
              : i % 4 === 1
                ? 'bg-gold/30'
                : i % 4 === 2
                  ? 'bg-orange/25'
                  : 'bg-amber/28'
          }`}
          style={{
            left: `${(i * 73) % 100}%`,
            top: `${(i * 41) % 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.15, 0.55, 0.15],
          }}
          transition={{
            duration: 6 + (i % 5),
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.25,
          }}
        />
      ))}
      <motion.div
        className="absolute -left-1/4 top-1/4 h-[120%] w-[120%] rounded-full bg-[radial-gradient(circle_at_center,rgb(255_165_3_/_0.07),transparent_42%,rgb(255_189_1_/_0.08),transparent_52%,rgb(255_243_230_/_0.35),transparent_65%)]"
        animate={{ rotate: [0, 4, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
