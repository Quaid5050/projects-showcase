import { useState } from 'react'
import { motion } from 'framer-motion'
import Layout from '../components/common/Layout'
import API from '../utils/api'
import toast from 'react-hot-toast'

const CalendarIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
const ClockIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
const VideoIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>

const selectClass = "input-dark bg-navy-800/80 border border-navy-600/60 rounded-xl px-4 py-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-gold-500/40 focus:border-gold-500/50 w-full cursor-pointer"

export default function Booking() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', date: '', time: '', message: '', language: 'English' })
  const [loading, setLoading] = useState(false)
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    try {
      await API.post('/bookings', form)
      toast.success('Booking submitted! We\'ll confirm within 24 hours.')
      setForm({ name: '', email: '', phone: '', service: '', date: '', time: '', message: '', language: 'English' })
    } catch {
      toast.error('Something went wrong. Please try again or call us directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-navy-950 text-white pt-40 pb-24">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80" alt=""
            className="w-full h-full object-cover opacity-8" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/90 to-navy-950/95" />
        </div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-gold-500/5 blur-[80px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="relative z-10 max-w-7xl mx-auto px-4 text-center"
        >
          <span className="gold-label">Book a Consultation</span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6">
            Your Free 30-Minute <span className="text-gold-400">Consultation</span>
          </h1>
          <div className="w-16 h-0.5 bg-gold-500 mx-auto mb-6" />
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            No pressure, no cost. Just an honest conversation about your family's financial future.
          </p>
        </motion.div>
      </section>

      <section className="py-24 bg-navy-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Info sidebar */}
            <div className="space-y-5">
              <h3 className="font-serif text-xl font-bold text-white mb-5">What to Expect</h3>
              {[
                { icon: <ClockIcon />, title: '30-Minute Session', desc: 'A focused, productive conversation about your specific financial goals.' },
                { icon: <VideoIcon />, title: 'Video or Phone Call', desc: 'Zoom, Google Meet, or phone — whatever works best for you.' },
                { icon: <CalendarIcon />, title: 'Flexible Scheduling', desc: 'Evenings and weekends available to fit your busy schedule.' },
              ].map((item, i) => (
                <motion.div key={item.title}
                  initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-4 bg-navy-800/60 border border-navy-600/40 rounded-2xl p-5"
                >
                  <div className="w-10 h-10 bg-gold-500/10 border border-gold-500/20 rounded-xl flex items-center justify-center text-gold-400 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-xs">{item.desc}</p>
                  </div>
                </motion.div>
              ))}

              {/* Direct call box */}
              <div className="bg-navy-800/60 border border-gold-500/20 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
                <h4 className="font-semibold text-white mb-2 text-sm">Prefer to call directly?</h4>
                <a href="tel:8732882055" className="text-gold-400 hover:text-gold-300 font-bold text-lg transition-colors">
                  (873) 288-2055
                </a>
                <p className="text-gray-500 text-xs mt-1">Mon–Sat, 9am–8pm EST</p>
              </div>
            </div>

            {/* Booking Form */}
            <motion.div
              initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 bg-navy-800/60 border border-navy-600/40 rounded-2xl p-8"
            >
              <h3 className="font-serif text-2xl font-bold text-white mb-2">Book Your Free Consultation</h3>
              <div className="w-10 h-0.5 bg-gold-500 mb-7" />
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Full Name *</label>
                    <input name="name" value={form.name} onChange={handleChange} required className="input-dark" placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Phone Number *</label>
                    <input name="phone" value={form.phone} onChange={handleChange} required className="input-dark" placeholder="(xxx) xxx-xxxx" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Email Address *</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} required className="input-dark" placeholder="your@email.com" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">I'm Interested In</label>
                    <select name="service" value={form.service} onChange={handleChange} className={selectClass}>
                      <option value="">Select a service</option>
                      {['Life Insurance','Retirement Planning','TFSA / RRSP','RESP - Education','Mortgage Protection','Critical Illness / Disability','General Financial Planning'].map(s => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Language Preference</label>
                    <select name="language" value={form.language} onChange={handleChange} className={selectClass}>
                      <option>English</option>
                      <option>Punjabi</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Preferred Date</label>
                    <input name="date" type="date" value={form.date} onChange={handleChange}
                      className="input-dark [color-scheme:dark]" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Preferred Time</label>
                    <select name="time" value={form.time} onChange={handleChange} className={selectClass}>
                      <option value="">Select a time</option>
                      {['9:00 AM','10:00 AM','11:00 AM','12:00 PM','1:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM','6:00 PM','7:00 PM','8:00 PM'].map(t => <option key={t}>{t}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Additional Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={3}
                    className="input-dark" placeholder="Tell us a bit about your situation..." />
                </div>
                <button type="submit" disabled={loading} className="w-full btn-primary py-4 text-base disabled:opacity-60">
                  {loading ? 'Submitting...' : 'Book My Free Consultation'}
                </button>
                <p className="text-center text-gray-500 text-xs">
                  By submitting, you agree to be contacted by Finance With Preet. No spam, ever.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
