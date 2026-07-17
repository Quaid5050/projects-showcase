import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const ArrowRight = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
)
const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
)
const HomeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
)
const ChartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
)
const ShieldIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
)

const cards = [
  {
    icon: <HomeIcon />,
    title: 'Home Financing',
    tagline: 'Helping you navigate every stage of homeownership.',
    items: ['First-Time Home Buyers', 'Mortgage Renewals', 'Refinancing', 'Investment Properties', 'HELOC'],
    to: '/services#home-financing',
  },
  {
    icon: <ChartIcon />,
    title: 'Wealth Planning',
    tagline: 'Helping you build lasting financial security.',
    items: ['Retirement Planning', 'Tax-Efficient Investing', 'RESP', 'Wealth Building Strategies', 'Estate Planning'],
    to: '/services#wealth-planning',
  },
  {
    icon: <ShieldIcon />,
    title: 'Financial Protection',
    tagline: "Helping protect everything you've built.",
    items: ['Life Insurance', 'Critical Illness Insurance', 'Disability Insurance', 'Super Visa Insurance'],
    to: '/services#financial-protection',
  },
]

export default function ServicePillars() {
  return (
    <section id="services-section" className="py-28 bg-gray-50 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <span className="text-gold-600 font-semibold text-sm uppercase tracking-widest mb-3 inline-block">Our Services</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-4">How We Can Help</h2>
          <div className="w-16 h-0.5 bg-gold-500 mx-auto mb-5" />
          <p className="text-gray-600 text-lg mb-0 max-w-2xl mx-auto leading-relaxed">
            Three core pillars working together to secure your today and build your tomorrow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group flex flex-col bg-white border border-gray-200 rounded-2xl p-8 hover:border-gold-500/50 hover:-translate-y-1 hover:shadow-xl transition-all duration-400">
              <div className="w-14 h-14 bg-gold-500 rounded-xl flex items-center justify-center text-white mb-6 shadow-gold">
                {c.icon}
              </div>
              <h3 className="font-serif text-xl font-bold text-navy-900 mb-2 group-hover:text-gold-600 transition-colors">{c.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{c.tagline}</p>

              <ul className="space-y-3 mb-8 flex-1">
                {c.items.map(item => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-5 h-5 bg-gold-500/15 rounded-full flex items-center justify-center text-gold-600 flex-shrink-0">
                      <CheckIcon />
                    </span>
                    <span className="text-navy-800 text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <Link to={c.to}
                className="inline-flex items-center gap-2 text-gold-600 font-semibold text-sm hover:text-gold-700 group-hover:gap-3 transition-all mt-auto">
                Learn More <ArrowRight />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
