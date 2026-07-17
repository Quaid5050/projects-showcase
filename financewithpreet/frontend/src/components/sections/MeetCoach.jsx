import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import API from '../../utils/api'

const ArrowRight = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
)
const HomeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
)
const ShieldIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
)
const ChartIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
)
const FamilyIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
)
const PinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
)

const badges = [
  { icon: <HomeIcon />, label: 'Mortgage Professional' },
  { icon: <ShieldIcon />, label: 'Insurance Advisor' },
  { icon: <ChartIcon />, label: 'Investment Solutions Provider' },
  { icon: <FamilyIcon />, label: 'Family-Focused Financial Planning' },
  { icon: <PinIcon />, label: 'Serving Ottawa, Kanata & Surrounding Areas' },
]

const DEFAULTS = {
  coachImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=700&q=80',
  coachName: 'Preet Singh',
  coachRole: 'Personal Finance Coach',
  coachBio: "Hi, I'm Preet Kamal Singh. I founded Finance With Preet because I believe financial decisions shouldn't be confusing.\n\nWhether you're buying a home, planning for retirement, or protecting your family, my goal is to provide honest advice, personalized solutions, and long-term support that helps you achieve financial confidence.",
  coachCta: 'Learn More About Preet',
}

export default function MeetCoach() {
  const [data, setData] = useState(DEFAULTS)

  useEffect(() => {
    API.get('/hero').then(r => {
      if (r.data) {
        setData(d => ({
          coachImage: r.data.coachImage || d.coachImage,
          coachName: r.data.coachName || d.coachName,
          coachRole: r.data.coachRole || d.coachRole,
          coachBio: r.data.coachBio || d.coachBio,
          coachCta: r.data.coachCta || d.coachCta,
        }))
      }
    }).catch(() => {})
  }, [])

  const paragraphs = (data.coachBio || '').split(/\n\s*\n/).filter(Boolean)

  return (
    <section className="py-28 bg-white relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Left — headshot */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-gray-200 shadow-xl max-w-md mx-auto">
              <img
                src={data.coachImage}
                alt={`${data.coachName} — ${data.coachRole}`}
                className="w-full h-full object-cover aspect-[4/5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />

              {/* Name card */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/90 backdrop-blur-md border border-gold-500/20 rounded-2xl px-5 py-4">
                <p className="font-serif font-bold text-navy-900 text-lg leading-none">{data.coachName}</p>
                <p className="text-gold-600 text-sm italic mt-1">{data.coachRole}</p>
              </div>
            </div>
          </motion.div>

          {/* Right — content */}
          <div>
            <motion.span
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="text-gold-600 font-semibold text-sm uppercase tracking-widest mb-3 inline-block">
              Meet Preet
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl font-bold text-navy-900 mb-6 leading-tight">
              Meet Your Personal <span className="text-gold-600">Finance Coach</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
              className="w-12 h-0.5 bg-gold-500 mb-6" />

            <motion.div
              initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.25 }}
              className="space-y-4 text-gray-600 leading-relaxed text-[15px] mb-8">
              {paragraphs.map((p, i) => (
                <p key={i}>
                  {i === 0
                    ? <><span className="text-navy-900 font-semibold">{p.split('.')[0]}.</span>{p.slice(p.indexOf('.') + 1)}</>
                    : p}
                </p>
              ))}
            </motion.div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 mb-9">
              {badges.map((b, i) => (
                <motion.div
                  key={b.label}
                  initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                  className="flex items-center gap-2 bg-gray-50 border border-gray-200 hover:border-gold-500/40 rounded-full pl-3 pr-4 py-2 transition-colors duration-300">
                  <span className="text-gold-600">{b.icon}</span>
                  <span className="text-navy-800 text-xs font-medium">{b.label}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }}>
              <Link to="/about" className="btn-primary inline-flex items-center gap-2">
                {data.coachCta} <ArrowRight />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
