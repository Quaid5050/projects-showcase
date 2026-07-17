import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const StrategyIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
)
const NetworkIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="5" r="3"/><circle cx="5" cy="19" r="3"/><circle cx="19" cy="19" r="3"/><path d="M12 8v3m0 0-5 5m5-5 5 5"/></svg>
)
const BookIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
)
const HandshakeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/></svg>
)
const HeartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
)
const PinIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
)
const GlobeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
)

const reasons = [
  { icon: <StrategyIcon />, title: 'Personalized Financial Strategies', desc: 'Advice tailored to your unique goals, income, and life stage — never one-size-fits-all.' },
  { icon: <NetworkIcon />, title: 'Access to Multiple Lenders & Insurance Solutions', desc: 'We shop the market for you to find the right products at the right price.' },
  { icon: <BookIcon />, title: 'Education-First Approach', desc: 'We explain every option in simple language so you can decide with confidence.' },
  { icon: <HandshakeIcon />, title: 'Long-Term Relationships', desc: 'A trusted partner for every stage of life — not just a one-time transaction.' },
  { icon: <HeartIcon />, title: 'Honest Advice', desc: 'Transparent, client-first guidance with no pressure and no hidden agendas.' },
  { icon: <PinIcon />, title: 'Local Expertise', desc: 'Deep knowledge of Ottawa, Kanata, and the surrounding Canadian market.' },
  { icon: <GlobeIcon />, title: 'Multilingual Support', desc: 'Clear communication in the language you and your family are most comfortable with.' },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="py-28 bg-white relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <span className="text-gold-600 font-semibold text-sm uppercase tracking-widest mb-3 inline-block">Why Choose Us</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-4">Why Families Choose<br />Finance With Preet</h2>
          <div className="w-16 h-0.5 bg-gold-500 mx-auto mb-5" />
          <p className="text-gray-600 text-lg mb-0 max-w-2xl mx-auto leading-relaxed">
            More than an advisor — a knowledgeable financial partner committed to your family's success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-gold-500/40 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-gold-500/10 rounded-xl flex items-center justify-center text-gold-600 mb-4 group-hover:bg-gold-500 group-hover:text-white transition-all duration-300">
                {r.icon}
              </div>
              <h3 className="font-semibold text-navy-900 mb-2 text-[15px] leading-snug">{r.title}</h3>
              <p className="text-gray-600 text-xs leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-14">
          <Link to="/booking" className="btn-primary inline-block px-10 py-4 text-base">
            Schedule Your Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
