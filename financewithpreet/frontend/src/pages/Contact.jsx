import { useState } from 'react'
import { motion } from 'framer-motion'
import Layout from '../components/common/Layout'
import API from '../utils/api'
import toast from 'react-hot-toast'

const MailIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
const PhoneIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17z"/></svg>
const InstagramIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>

const contacts = [
  { icon: <PhoneIcon />, title: 'Phone', value: '(873) 288-2055', sub: 'Mon–Sat, 9am–8pm EST', link: 'tel:8732882055' },
  { icon: <MailIcon />, title: 'Email', value: 'financewithpreet@gmail.com', sub: 'We reply within 24 hours', link: 'mailto:financewithpreet@gmail.com' },
  { icon: <InstagramIcon />, title: 'Instagram', value: '@FinanceWithPreet', sub: 'DM us anytime', link: 'https://instagram.com/financewithpreet' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [loading, setLoading] = useState(false)
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    try {
      await API.post('/leads', form)
      toast.success('Message sent! We\'ll get back to you within 24 hours.')
      setForm({ name: '', email: '', phone: '', subject: '', message: '' })
    } catch {
      toast.error('Error sending message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

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
          <span className="gold-label">Contact Us</span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6">
            Get In <span className="text-gold-400">Touch</span>
          </h1>
          <div className="w-16 h-0.5 bg-gold-500 mx-auto mb-6" />
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            Have a question? Send us a message and we'll respond within 24 hours.
          </p>
        </motion.div>
      </section>

      <section className="py-24 bg-navy-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Contact cards */}
            <div className="space-y-5">
              {contacts.map((c, i) => (
                <motion.a key={c.title} href={c.link} target="_blank" rel="noreferrer"
                  initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-4 items-start bg-navy-800/60 border border-navy-600/40 hover:border-gold-500/30 rounded-2xl p-5 transition-all duration-300 group"
                >
                  <div className="w-11 h-11 bg-gold-500/10 border border-gold-500/20 rounded-xl flex items-center justify-center text-gold-400 flex-shrink-0 group-hover:bg-gold-500/20 transition-colors">
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">{c.title}</p>
                    <p className="font-semibold text-white text-sm">{c.value}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{c.sub}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 bg-navy-800/60 border border-navy-600/40 rounded-2xl p-8"
            >
              <h3 className="font-serif text-2xl font-bold text-white mb-2">Send Us a Message</h3>
              <div className="w-10 h-0.5 bg-gold-500 mb-7" />
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Full Name *</label>
                    <input name="name" value={form.name} onChange={handleChange} required className="input-dark" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Phone</label>
                    <input name="phone" value={form.phone} onChange={handleChange} className="input-dark" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Email *</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} required className="input-dark" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Subject</label>
                  <input name="subject" value={form.subject} onChange={handleChange} className="input-dark" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Message *</label>
                  <textarea name="message" value={form.message} onChange={handleChange} required rows={5} className="input-dark" />
                </div>
                <button type="submit" disabled={loading} className="w-full btn-primary py-4 disabled:opacity-60">
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
