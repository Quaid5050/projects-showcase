'use client'

import { useState } from 'react'
import Image from 'next/image'
import { showToast } from '@/components/Toast'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      showToast('Please fill in all required fields.', 'error')
      return
    }
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        showToast('Message sent! We\'ll be in touch within 24 hours.', 'success')
        setForm({ name: '', email: '', phone: '', subject: '', message: '' })
      } else {
        showToast('Something went wrong. Please try again or call us directly.', 'error')
      }
    } catch {
      showToast('Unable to send. Please contact us directly at (514) 831-8409.', 'error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=900&q=80"
            alt="Contact us"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#0a0a0a]/82" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="font-display text-xs tracking-[0.4em] text-[#d4af37] uppercase mb-4">Get In Touch</p>
          <h1 className="font-display text-5xl md:text-7xl font-light text-white mb-6">
            Contact <span className="gold-text font-semibold">Us</span>
          </h1>
          <div className="gold-divider mb-6" />
          <p className="text-white/60 text-lg font-light">We respond within 24 hours.</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-6 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16">

          {/* Info */}
          <div className="lg:col-span-2">
            <p className="font-display text-xs tracking-[0.4em] text-[#d4af37] uppercase mb-6">Reach Out</p>
            <h2 className="font-display text-3xl font-light text-white mb-8 leading-tight">
              Let's Plan Your<br /><span className="gold-text font-semibold">Perfect Event</span>
            </h2>
            <div className="space-y-6">
              <a href="tel:5148318409" className="flex items-center gap-4 group">
                <div className="w-12 h-12 border border-[#d4af37]/30 flex items-center justify-center group-hover:border-[#d4af37] group-hover:bg-[#d4af37]/10 transition-all">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.09 12 19.79 19.79 0 0 1 1 3.18 2 2 0 0 1 3 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6.29 6.29l.87-.87a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white/40 text-xs tracking-widest uppercase mb-0.5">Phone</p>
                  <p className="text-white group-hover:text-[#d4af37] transition-colors">(514) 831-8409</p>
                </div>
              </a>

              <a href="mailto:flashchic84@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 border border-[#d4af37]/30 flex items-center justify-center group-hover:border-[#d4af37] group-hover:bg-[#d4af37]/10 transition-all">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white/40 text-xs tracking-widest uppercase mb-0.5">Email</p>
                  <p className="text-white group-hover:text-[#d4af37] transition-colors text-sm">flashchic84@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border border-[#d4af37]/30 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white/40 text-xs tracking-widest uppercase mb-0.5">Location</p>
                  <p className="text-white text-sm">Laval, Québec</p>
                  <p className="text-white/40 text-xs">Serving Montréal & area</p>
                </div>
              </div>

              <a
                href="https://instagram.com/flashchicphotobooth"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 border border-[#d4af37]/30 flex items-center justify-center group-hover:border-[#d4af37] group-hover:bg-[#d4af37]/10 transition-all">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="1" fill="#d4af37" stroke="none"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white/40 text-xs tracking-widest uppercase mb-0.5">Instagram</p>
                  <p className="text-white group-hover:text-[#d4af37] transition-colors">@flashchicphotobooth</p>
                </div>
              </a>
            </div>

            {/* Response time badge */}
            <div className="mt-12 p-5 border border-[#d4af37]/20 bg-[#d4af37]/5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white/70 text-xs tracking-widest uppercase">Response Time</span>
              </div>
              <p className="text-white font-semibold">Within 24 hours</p>
              <p className="text-white/40 text-xs mt-1">Usually much faster!</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="luxury-card p-8 md:p-10">
              <h3 className="font-display text-2xl text-white mb-8">Send a Message</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-xs tracking-widest text-white/50 uppercase mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="luxury-input w-full px-4 py-3 text-sm rounded-none"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest text-white/50 uppercase mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="luxury-input w-full px-4 py-3 text-sm rounded-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-xs tracking-widest text-white/50 uppercase mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(514) 000-0000"
                    className="luxury-input w-full px-4 py-3 text-sm rounded-none"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest text-white/50 uppercase mb-2">Subject</label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="luxury-input w-full px-4 py-3 text-sm rounded-none"
                  >
                    <option value="">Select a topic</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Booking Request">Booking Request</option>
                    <option value="Pricing Question">Pricing Question</option>
                    <option value="Custom Package">Custom Package</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-xs tracking-widest text-white/50 uppercase mb-2">Message *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your event — date, location, type of event, number of guests..."
                  rows={5}
                  required
                  className="luxury-input w-full px-4 py-3 text-sm rounded-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-gold w-full py-4 text-sm tracking-[0.2em] font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
