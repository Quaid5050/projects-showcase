import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Layout from '../components/common/Layout'
import CTA from '../components/sections/CTA'

const faqs = [
  { q: 'Is the initial consultation really free?', a: 'Absolutely. Your first consultation with us is completely free with no obligation whatsoever. We believe in earning your trust first before discussing any financial products or services.' },
  { q: 'Do I need to have a lot of money to start?', a: 'Not at all. Many of our clients start with very modest budgets. Whether you can save $50 or $5,000 a month, we have strategies and solutions that work for your current situation and grow with you.' },
  { q: 'What is a TFSA and how much can I contribute?', a: 'A Tax-Free Savings Account (TFSA) lets your investments grow completely tax-free. For 2024, the annual contribution limit is $7,000. Unused contribution room carries forward, so if you\'ve never opened one, you could have up to $95,000 in room.' },
  { q: 'What is an RESP and how does the government grant work?', a: 'A Registered Education Savings Plan (RESP) is a tax-sheltered account for your child\'s education. The government matches 20% of your contributions through the Canada Education Savings Grant (CESG), up to $500 per year — that\'s free money for your child\'s future.' },
  { q: 'How much life insurance do I actually need?', a: 'A common guideline is 10-12x your annual income, but the right amount depends on your debts, number of dependents, lifestyle, and goals. We do a thorough needs analysis to find the right coverage at the right price.' },
  { q: 'Can I work with you if I already have coverage elsewhere?', a: 'Yes. We offer free policy reviews to ensure your existing coverage is adequate and competitively priced. Many clients find they are over-paying or under-insured with their current policies.' },
  { q: 'Do you serve clients across all of Canada?', a: 'Yes! We serve clients across all provinces and territories in Canada. Most of our consultations are done virtually via video call, phone, or Zoom, making it convenient no matter where you are.' },
  { q: 'How do you get paid?', a: 'For insurance products, we are compensated by the insurance company through commissions — there is no out-of-pocket cost to you. For investment planning, we will always be transparent about any fees involved upfront.' },
  { q: 'Do you offer services in Punjabi?', a: 'Yes! We are fully bilingual and can serve you in both English and Punjabi. We want you to feel completely comfortable and understood throughout the process.' },
  { q: 'How long does the process take from first call to having coverage?', a: 'The timeline varies by product. Term life insurance can sometimes be approved within 24-48 hours. More complex applications may take 2-4 weeks. We guide you through every step and keep you informed throughout.' },
]

function FAQItem({ faq, index, open, onToggle }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 15 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
        open ? 'border-gold-500/40 bg-navy-800/80' : 'border-navy-700/40 bg-navy-800/40 hover:border-navy-600/60'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
      >
        <span className={`font-medium pr-4 text-[15px] transition-colors ${open ? 'text-gold-300' : 'text-gray-200'}`}>
          {faq.q}
        </span>
        <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
          open ? 'bg-gold-500 text-navy-900 rotate-45' : 'bg-navy-700 text-gray-400'
        }`}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 text-gray-400 text-sm leading-relaxed border-t border-navy-700/40 pt-4">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-navy-950 text-white pt-40 pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 to-navy-900" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="relative z-10 max-w-7xl mx-auto px-4 text-center"
        >
          <span className="gold-label">FAQ</span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6">
            Frequently Asked <span className="text-gold-400">Questions</span>
          </h1>
          <div className="w-16 h-0.5 bg-gold-500 mx-auto mb-6" />
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            Get answers to the most common questions Canadian families ask about financial planning.
          </p>
        </motion.div>
      </section>

      <section className="py-24 bg-navy-900">
        <div className="max-w-2xl mx-auto px-4">
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                index={i}
                open={open === i}
                onToggle={() => setOpen(open === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </Layout>
  )
}
