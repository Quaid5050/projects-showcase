import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const ArrowRight = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
)
const HomeIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
)
const ChartIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
)
const ShieldIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
)

const pillars = [
  {
    icon: <HomeIcon />,
    title: 'Home Ownership',
    desc: 'Helping families secure the right mortgage solutions.',
    cta: 'Explore Home Financing',
    to: '/services#home-financing',
  },
  {
    icon: <ChartIcon />,
    title: 'Wealth Building',
    desc: 'Creating long-term financial growth through smart investing.',
    cta: 'Explore Wealth Planning',
    to: '/services#wealth-planning',
  },
  {
    icon: <ShieldIcon />,
    title: 'Financial Protection',
    desc: 'Protecting what matters most through insurance planning.',
    cta: 'Explore Insurance Solutions',
    to: '/services#financial-protection',
  },
]

export default function FinancialJourney() {
  return (
    <section className="py-28 bg-white relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <span className="text-gold-600 font-semibold text-sm uppercase tracking-widest mb-3 inline-block">Your Financial Journey</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-4">Every Financial Goal<br />Starts With a Plan</h2>
          <div className="w-16 h-0.5 bg-gold-500 mx-auto mb-5" />
          <p className="text-gray-600 text-lg mb-0 max-w-2xl mx-auto leading-relaxed">
            My goal is simple: help you buy your home, build your wealth, and protect your future.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}>
              <Link to={p.to}
                className="group block h-full bg-white border border-gray-200 rounded-2xl p-8 hover:border-gold-500/50 hover:-translate-y-1 hover:shadow-xl transition-all duration-400 text-center">
                <div className="w-16 h-16 mx-auto bg-gold-500/10 rounded-2xl flex items-center justify-center text-gold-600 mb-6 group-hover:bg-gold-500 group-hover:text-white transition-all duration-300">
                  {p.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-navy-900 mb-3 group-hover:text-gold-600 transition-colors">{p.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{p.desc}</p>
                <span className="inline-flex items-center gap-2 text-gold-600 font-semibold text-sm group-hover:gap-3 transition-all">
                  {p.cta} <ArrowRight />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-lg text-gray-700 mt-12 max-w-2xl mx-auto">
          A strong financial future is built on{' '}
          <span className="text-gold-600 font-semibold">all three pillars</span> — not just one.
        </motion.p>
      </div>
    </section>
  )
}
