'use client'
import { useState } from 'react'

const services = ['Engine Repair', 'Tire Change', 'Oil Change', 'Brake Service', 'Car Diagnostics', 'Suspension Repair', 'Body Paint Work', 'AC Repair', 'Other']

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

 const handleSubmit = (e) => {
  e.preventDefault()
  setLoading(true)

  const phoneNumber = '19052061313'

  const text = `
New Booking Request

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
Service: ${form.service}

Message:
${form.message}
  `

  const smsURL = `sms:${phoneNumber}?body=${encodeURIComponent(text)}`

  setTimeout(() => {
    setLoading(false)
    setSubmitted(true)

    window.open(smsURL, '_self')
  }, 1000)
}

  const infoItems = [
    {
      icon: `<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full"><path d="M2 4.5A1.5 1.5 0 013.5 3h1.372c.648 0 1.22.42 1.421 1.04l.924 2.77a1.5 1.5 0 01-.343 1.548L5.96 9.272a10.24 10.24 0 004.768 4.768l.914-.914a1.5 1.5 0 011.548-.343l2.77.924c.62.2 1.04.773 1.04 1.42V14.5a1.5 1.5 0 01-1.5 1.5H13C6.925 16 2 11.075 2 5v-.5z" stroke="currentColor" strokeWidth="1.3"/></svg>`,
      label: 'Phone',
      value: '+1 905 206 1313',
      sub: '+92 300 123 4567 (Emergency)',
      href: 'tel:+19052061313',
    },
    {
      icon: `<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full"><rect x="2" y="4" width="16" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.3"/><path d="M2 6.5l8 5 8-5" stroke="currentColor" strokeWidth="1.3"/></svg>`,
      label: 'Email',
      value: 'info@autoforge.com',
      sub: 'bookings@autoforge.com',
      href: 'mailto:info@autoforge.com',
    },
    {
      icon: `<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full"><path d="M10 2a5.5 5.5 0 00-5.5 5.5c0 4.25 5.5 10.5 5.5 10.5s5.5-6.25 5.5-10.5A5.5 5.5 0 0010 2z" stroke="currentColor" strokeWidth="1.3"/><circle cx="10" cy="7.5" r="2" stroke="currentColor" strokeWidth="1.3"/></svg>`,
      label: 'Address',
      value: '1125 Crestlawn Dr',
      sub: 'Mississauga, ON L4W 1A7, Canada',
      href: 'https://maps.app.goo.gl/VudHFybQcvXT9cG66',
    },
    {
      icon: `<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full"><circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.3"/><path d="M10 6v4l3 2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>`,
      label: 'Working Hours',
      value: 'Mon - Sat: 8:00 AM - 8:00 PM',
      sub: 'Sunday: 9:00 AM - 5:00 PM',
      href: null,
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-forge-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'linear-gradient(#888 1px, transparent 1px), linear-gradient(90deg, #888 1px, transparent 1px)', backgroundSize: '60px 60px'}}/>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-label mb-4">
            <span className="w-8 h-px bg-forge-red"/>
            Get In Touch
          </div>
          <h1 className="section-title text-6xl sm:text-7xl lg:text-8xl mb-6">
            CONTACT<br/><span className="text-gradient-red">US</span>
          </h1>
          <p className="text-forge-light max-w-lg leading-relaxed">
            Ready to book a service or have a question? We typically respond within 2 hours during business hours.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-forge-black border-b border-forge-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {infoItems.map((item, i) => {
              const inner = (
                <div className="group card-dark p-6 hover:shadow-lg hover:shadow-forge-red/5 transition-all duration-300 h-full">
                  <div className="w-8 h-8 text-forge-red mb-4 group-hover:scale-110 transition-transform"
                    dangerouslySetInnerHTML={{ __html: item.icon }}
                  />
                  <div className="text-forge-gray text-xs tracking-widest uppercase mb-2">{item.label}</div>
                  <div className="text-white font-semibold text-sm mb-1 group-hover:text-forge-red transition-colors">{item.value}</div>
                  <div className="text-forge-gray text-xs">{item.sub}</div>
                </div>
              )
              return item.href ? (
                <a key={i} href={item.href} className="block">{inner}</a>
              ) : (
                <div key={i}>{inner}</div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-20 bg-forge-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <div className="section-label mb-4">
                <span className="w-8 h-px bg-forge-red"/>
                Book a Service
              </div>
              <h2 className="section-title text-4xl mb-8">
                SEND US A <span className="text-gradient-red">MESSAGE</span>
              </h2>

              {submitted ? (
                <div className="border border-forge-red bg-forge-red/10 p-8 text-center">
                  <svg className="w-12 h-12 text-forge-red mx-auto mb-4" viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2"/>
                    <path d="M14 24l7 7 13-14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <h3 className="font-display text-2xl text-white tracking-wide mb-2">BOOKING RECEIVED</h3>
                  <p className="text-forge-gray text-sm">We'll confirm your appointment within 2 hours. Thank you!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-forge-gray text-xs tracking-widest uppercase mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full bg-forge-card border border-forge-border focus:border-forge-red outline-none px-4 py-3 text-white text-sm placeholder:text-forge-gray/50 transition-colors duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-forge-gray text-xs tracking-widest uppercase mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 XXX XXX XXXX"
                        className="w-full bg-forge-card border border-forge-border focus:border-forge-red outline-none px-4 py-3 text-white text-sm placeholder:text-forge-gray/50 transition-colors duration-200"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-forge-gray text-xs tracking-widest uppercase mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full bg-forge-card border border-forge-border focus:border-forge-red outline-none px-4 py-3 text-white text-sm placeholder:text-forge-gray/50 transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-forge-gray text-xs tracking-widest uppercase mb-2">Service Required *</label>
                    <select
                      name="service"
                      required
                      value={form.service}
                      onChange={handleChange}
                      className="w-full bg-forge-card border border-forge-border focus:border-forge-red outline-none px-4 py-3 text-white text-sm transition-colors duration-200 appearance-none cursor-pointer"
                    >
                      <option value="" className="text-forge-gray">Select a service</option>
                      {services.map((s) => (
                        <option key={s} value={s} className="bg-forge-card">{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-forge-gray text-xs tracking-widest uppercase mb-2">Message / Vehicle Details</label>
                    <textarea
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Describe your car issue, make, model, year..."
                      className="w-full bg-forge-card border border-forge-border focus:border-forge-red outline-none px-4 py-3 text-white text-sm placeholder:text-forge-gray/50 transition-colors duration-200 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" viewBox="0 0 16 16" fill="none">
                          <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" strokeDasharray="20" strokeDashoffset="10"/>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Booking Request
                        <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Map + Hours */}
            <div className="flex flex-col gap-6">
              {/* Map */}
              <div id="map" className="relative flex-1 min-h-[300px] overflow-hidden border border-forge-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.9197110020905!2d-79.62518!3d43.62902999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3898d4f1dd15%3A0xb7fe03d1795ef26e!2s1125%20Crestlawn%20Dr%2C%20Mississauga%2C%20ON%20L4W%201A7%2C%20Canada!5e0!3m2!1sen!2s!4v1778283916413!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(1) invert(1) contrast(0.8)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="AutoForge Workshop Location"
                  className="absolute inset-0 w-full h-full"
                />
              </div>

              {/* Hours Card */}
              <div className="card-dark p-6">
                <h3 className="font-display text-xl text-white tracking-wide mb-5">WORKSHOP HOURS</h3>
                <div className="space-y-3">
                  {[
                    { day: 'Monday - Thursday', hours: '8:00 AM - 8:00 PM', open: true },
                    { day: 'Friday', hours: '8:00 AM - 1:00 PM, 3:00 PM - 8:00 PM', open: true },
                    { day: 'Saturday', hours: '8:00 AM - 8:00 PM', open: true },
                    { day: 'Sunday', hours: '9:00 AM - 5:00 PM', open: true },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between py-2 border-b border-forge-border last:border-0">
                      <span className="text-forge-light text-sm">{item.day}</span>
                      <span className="text-forge-gray text-sm text-right">{item.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"/>
                  <span className="text-green-400 text-sm font-medium">24h Emergency Helpline Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
