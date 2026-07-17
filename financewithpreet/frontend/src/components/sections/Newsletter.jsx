import { useState } from 'react'
import { motion } from 'framer-motion'
import API from '../../utils/api'
import toast from 'react-hot-toast'

const MailIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
  </svg>
)

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await API.post('/newsletter', { email })
      toast.success("You're subscribed! Welcome to the Finance With Preet community.")
      setEmail('')
    } catch {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-20 bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-gold-500/8 to-navy-950 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-gold-500/8 blur-[80px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-2xl mx-auto px-4 text-center"
      >
        <div className="w-14 h-14 bg-gold-500/15 border border-gold-500/30 rounded-2xl flex items-center justify-center mx-auto mb-6 text-gold-400">
          <MailIcon />
        </div>
        <span className="gold-label">Stay Informed</span>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
          Stay Ahead with Financial Tips
        </h2>
        <p className="text-gray-400 mb-8 leading-relaxed">
          Get free monthly financial tips, tax-saving strategies, and exclusive insights tailored for Canadian families. No spam, ever.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email" value={email} onChange={e => setEmail(e.target.value)} required
            placeholder="Enter your email address"
            className="flex-1 bg-navy-800/80 border border-navy-600/60 rounded-xl px-5 py-4 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold-500/40 focus:border-gold-500/50 transition-all duration-200"
          />
          <button type="submit" disabled={loading}
            className="btn-primary px-7 py-4 whitespace-nowrap disabled:opacity-60">
            {loading ? 'Subscribing...' : 'Subscribe Free'}
          </button>
        </form>
        <p className="text-gray-600 text-xs mt-4">Join 500+ Canadian families. Unsubscribe anytime.</p>
      </motion.div>
    </section>
  )
}
