import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const steps = [
  {
    num: '01', title: 'Book a Free Call',
    desc: 'Schedule your free 30-minute discovery consultation online or call us directly. No paperwork, no pressure.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
  },
  {
    num: '02', title: 'Financial Assessment',
    desc: "We listen carefully to understand your family's goals, current situation, and financial priorities.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    num: '03', title: 'Personalized Recommendations',
    desc: 'We present a custom financial plan with clear recommendations tailored specifically to your life.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
  },
  {
    num: '04', title: 'Implementation',
    desc: 'We handle all the paperwork and put your plan into action quickly and smoothly.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M20 6 9 17l-5-5"/>
      </svg>
    ),
  },
  {
    num: '05', title: 'Ongoing Support',
    desc: 'We stay by your side, reviewing and adjusting your plan as your life and goals evolve.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
]

export default function HowItWorks() {
  return (
    <section className="py-28 bg-blue-50 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold-600 font-semibold text-sm uppercase tracking-widest mb-3 inline-block">How We Work</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-4">A Simple, Clear Process</h2>
          <div className="w-16 h-0.5 bg-gold-500 mx-auto mb-5" />
          <p className="text-gray-600 text-lg mb-0 max-w-2xl mx-auto leading-relaxed">Five straightforward steps to make financial planning stress-free for every Canadian family.</p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-px z-0">
            <div className="w-full h-full border-t-2 border-dashed border-gold-500/30" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-[104px] h-[104px] bg-white border-2 border-gray-200 group-hover:border-gold-500/60 rounded-full flex items-center justify-center text-navy-400 group-hover:text-gold-600 transition-all duration-300 shadow-md">
                    {step.icon}
                  </div>
                  <span className="absolute -top-1 -right-1 w-7 h-7 bg-gold-500 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-gold">
                    {step.num.slice(1)}
                  </span>
                </div>
                <h3 className="font-serif text-base font-bold text-navy-900 mb-3 group-hover:text-gold-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Link to="/booking" className="btn-primary inline-block px-10 py-4 text-base">
            Book a Free Call
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
