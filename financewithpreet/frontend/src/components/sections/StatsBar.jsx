import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const stats = [
  { value: 500, suffix: '+', label: 'Families Protected', icon: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  )},
  { value: 10, suffix: '+', label: 'Years Experience', icon: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
    </svg>
  )},
  { value: 50, suffix: 'M+', prefix: '$', label: 'Coverage Placed', icon: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
    </svg>
  )},
  { value: 4.9, suffix: '★', label: 'Average Rating', icon: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#f59e0b" stroke="none">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  )},
  { value: 100, suffix: '%', label: 'Independent Advice', icon: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  )},
]

function Counter({ value, suffix, prefix, start }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    const isDecimal = value % 1 !== 0
    const duration = 1500
    const steps = 40
    const increment = value / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [start, value])

  return <span>{prefix || ''}{start ? count : 0}{suffix}</span>
}

export default function StatsBar() {
  const [started, setStarted] = useState(false)

  return (
    <section className="bg-navy-950 border-y border-gold-500/10 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onViewportEnter={() => setStarted(true)}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center gap-2 group"
            >
              <div className="w-12 h-12 bg-gold-500/10 border border-gold-500/20 rounded-xl flex items-center justify-center text-gold-400 mb-2 group-hover:bg-gold-500/20 group-hover:border-gold-500/40 transition-all duration-300">
                {s.icon}
              </div>
              <p className="text-2xl md:text-3xl font-bold text-white font-serif">
                <Counter value={s.value} suffix={s.suffix} prefix={s.prefix} start={started} />
              </p>
              <p className="text-gray-500 text-xs tracking-wide">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
