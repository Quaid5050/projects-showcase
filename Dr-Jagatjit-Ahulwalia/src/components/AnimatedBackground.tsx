import { motion } from 'framer-motion'

export function AnimatedBackground({ dense = false }: { dense?: boolean }) {
  const count = dense ? 18 : 10
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {Array.from({ length: count }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-primary/30"
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
        className="absolute -left-1/4 top-1/4 h-[120%] w-[120%] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,200,83,0.12),transparent_55%)]"
        animate={{ rotate: [0, 4, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
