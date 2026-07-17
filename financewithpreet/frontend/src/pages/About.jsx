import { useRef } from 'react'
import Layout from '../components/common/Layout'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import CTA from '../components/sections/CTA'

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
)

const values = [
  { title: 'Integrity', letter: 'I', desc: 'We always put your interests first. No hidden agendas, no unnecessary products — just honest guidance.' },
  { title: 'Clarity', letter: 'C', desc: 'We break down complex financial concepts into simple, clear language anyone can understand and act on.' },
  { title: 'Compassion', letter: 'C', desc: 'We understand every family has unique dreams and challenges. We approach each situation with genuine care.' },
]

export default function About() {
  const storyRef = useRef(null)
  const valuesRef = useRef(null)
  const storyInView = useInView(storyRef, { once: true, margin: '-60px' })
  const valuesInView = useInView(valuesRef, { once: true, margin: '-60px' })

  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-navy-950 text-white pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&q=80" alt=""
            className="w-full h-full object-cover opacity-8" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/90 to-navy-950/95" />
        </div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-gold-500/5 blur-[80px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <span className="gold-label">About Us</span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6">
            Meet <span className="text-gold-400">Preet</span>
          </h1>
          <div className="w-16 h-0.5 bg-gold-500 mx-auto mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A trusted financial advisor dedicated to helping Canadian families build a secure and prosperous future.
          </p>
        </motion.div>
      </section>

      {/* About the Business */}
      <section className="py-24 bg-navy-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-gold-500/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="gold-label">Who We Are</span>
          <h2 className="section-title">A Holistic Approach to<br />Your Family's Finances</h2>
          <div className="w-16 h-0.5 bg-gold-500 mx-auto mb-8" />
          <div className="space-y-5 text-gray-300 text-[15px] md:text-base leading-relaxed">
            <p>
              Finance With Preet is a Canadian personal finance coaching and financial services business dedicated to helping individuals and families make informed financial decisions with confidence.
            </p>
            <p>
              Unlike traditional mortgage brokers or insurance agents who focus on selling a single product, Finance With Preet takes a holistic approach — helping you understand how every financial decision impacts your long-term goals.
            </p>
            <p>
              Our goal is to become your <span className="text-gold-400 font-semibold">trusted long-term financial partner</span> — not just someone you contact when you need a mortgage.
            </p>
          </div>

          {/* Three core pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-12">
            {[
              { t: 'Mortgages', d: 'The right home financing at every stage.' },
              { t: 'Insurance', d: 'Protecting what matters most to your family.' },
              { t: 'Investments', d: 'Building lasting, long-term wealth.' },
            ].map(p => (
              <div key={p.t} className="bg-navy-800/60 border border-navy-600/40 hover:border-gold-500/30 rounded-2xl p-6 transition-all duration-300">
                <p className="font-serif text-lg font-bold text-gold-400 mb-2">{p.t}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story — overflow-hidden fix for mobile horizontal scroll */}
      <section className="py-28 bg-navy-900 overflow-hidden" ref={storyRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={storyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=700&q=80"
                alt="Preet - Financial Advisor"
                className="rounded-2xl shadow-navy-lg w-full object-cover h-[580px] border border-navy-700/40" />
              {/* Gold badge */}
              <div className="absolute -bottom-5 -right-5 bg-gold-500 text-navy-900 p-5 rounded-2xl shadow-gold">
                <p className="font-serif text-3xl font-bold leading-none">10+</p>
                <p className="text-xs font-bold mt-1">Years Experience</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={storyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <span className="gold-label">My Story</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
                Passionate About Your Family's Financial Success
              </h2>
              <div className="w-12 h-0.5 bg-gold-500 mb-6" />
              <p className="text-gray-400 leading-relaxed mb-5 text-[15px]">
                My name is Preet, and I have spent over a decade helping Canadian families navigate the often overwhelming world of personal finance. As an immigrant who understands the challenges of building a new life in Canada, I am deeply passionate about helping families like yours achieve financial stability and generational wealth.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8 text-[15px]">
                I started Finance With Preet because I saw too many hard-working families being underserved — sold products they didn't need or being left confused by complicated financial jargon. My approach is different: I listen first, educate always, and recommend only what truly serves your best interest.
              </p>
              <ul className="space-y-3 mb-10">
                {['Licensed Financial Advisor — Canada','Certified in Life Insurance & Investments','RESP & RRSP Specialist','Bilingual: English & Punjabi','500+ Families Helped Across Canada'].map((item, i) => (
                  <motion.li key={item}
                    initial={{ opacity: 0, y: 15 }}
                    animate={storyInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.07 }}
                    className="flex items-center gap-3"
                  >
                    <span className="w-5 h-5 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0 text-navy-900">
                      <CheckIcon />
                    </span>
                    <span className="text-gray-300 text-sm">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <Link to="/booking" className="btn-primary inline-block">Book Your Free Consultation</Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-navy-950 relative" ref={valuesRef}>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="gold-label">Our Core Values</span>
            <h2 className="section-title">Everything We Do Is Guided<br />By These Principles</h2>
            <div className="w-16 h-0.5 bg-gold-500 mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div key={v.title}
                initial={{ opacity: 0, y: 30 }} animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="bg-navy-800/60 border border-navy-600/40 hover:border-gold-500/30 rounded-2xl p-7 text-center transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gold-500/10 border border-gold-500/20 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-gold-500/20 transition-colors">
                  <span className="font-serif font-bold text-2xl text-gold-400">{v.letter}</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-3">{v.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </Layout>
  )
}