'use client'

import { useState } from 'react'
import Image from 'next/image'
import { showToast } from '@/components/Toast'

const packages = [
  { value: 'photobooth', label: 'Photobooth — $150/hr (2hr min)' },
  { value: 'videobooth', label: '360 Videobooth — $150/hr (2hr min)' },
  { value: 'combo', label: 'Photo + Video Combo — $250/hr (3hr min)' },
]

const eventTypes = [
  'Birthday Party', 'Baby Shower', 'Corporate Event', 'Wedding', 'Gala', 'Graduation', 'Anniversary', 'Other'
]

export default function BookingPage() {
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    startTime: '',
    endTime: '',
    eventLocation: '',
    guestCount: '',
    package: '',
    hours: '',
    theme: '',
    indoorOutdoor: '',
    additionalInfo: '',
    setupTime: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const nextStep = () => {
    if (step === 1) {
      if (!form.firstName || !form.lastName || !form.email || !form.phone) {
        showToast('Please fill in all contact information.', 'error')
        return
      }
    }
    if (step === 2) {
      if (!form.eventType || !form.eventDate || !form.eventLocation || !form.package) {
        showToast('Please complete all event details.', 'error')
        return
      }
    }
    setStep(s => s + 1)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStep(4)
        showToast('Booking request sent! We\'ll confirm within 24 hours.', 'success')
      } else {
        showToast('Something went wrong. Please call us at (514) 831-8409.', 'error')
      }
    } catch {
      showToast('Unable to submit. Please call us at (514) 831-8409.', 'error')
    } finally {
      setLoading(false)
    }
  }

  const steps = [
    { num: 1, label: 'Contact Info' },
    { num: 2, label: 'Event Details' },
    { num: 3, label: 'Confirmation' },
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1800&q=80"
            alt="Book your photobooth"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#0a0a0a]/82" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="font-display text-xs tracking-[0.4em] text-[#d4af37] uppercase mb-4">Reserve Your Date</p>
          <h1 className="font-display text-5xl md:text-7xl font-light text-white mb-6">
            Book <span className="gold-text font-semibold">Your Experience</span>
          </h1>
          <div className="gold-divider mb-6" />
          <p className="text-white/60 text-lg font-light">50% deposit secures your date. We respond within 24 hours.</p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 px-6 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto">

          {step < 4 && (
            <>
              {/* Step indicator */}
              <div className="flex items-center justify-center gap-4 mb-12">
                {steps.map((s, i) => (
                  <div key={s.num} className="flex items-center gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`w-10 h-10 flex items-center justify-center border font-display text-sm transition-all duration-300 ${
                        step >= s.num ? 'border-[#d4af37] bg-[#d4af37] text-[#0a0a0a]' : 'border-[#d4af37]/30 text-white/40'
                      }`}>
                        {step > s.num ? (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 6 9 17l-5-5"/>
                          </svg>
                        ) : s.num}
                      </div>
                      <span className={`text-xs tracking-widest uppercase mt-2 font-sans ${step >= s.num ? 'text-[#d4af37]' : 'text-white/30'}`}>
                        {s.label}
                      </span>
                    </div>
                    {i < steps.length - 1 && (
                      <div className={`w-16 h-px mb-5 transition-all duration-300 ${step > s.num ? 'bg-[#d4af37]' : 'bg-[#d4af37]/20'}`} />
                    )}
                  </div>
                ))}
              </div>

              <div className="luxury-card p-8 md:p-12">

                {/* Step 1: Contact */}
                {step === 1 && (
                  <div>
                    <h2 className="font-display text-2xl text-white mb-8">Your Contact Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label className="block text-xs tracking-widest text-white/50 uppercase mb-2">First Name *</label>
                        <input type="text" name="firstName" value={form.firstName} onChange={handleChange} placeholder="First name" className="luxury-input w-full px-4 py-3 text-sm rounded-none" required />
                      </div>
                      <div>
                        <label className="block text-xs tracking-widest text-white/50 uppercase mb-2">Last Name *</label>
                        <input type="text" name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last name" className="luxury-input w-full px-4 py-3 text-sm rounded-none" required />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                      <div>
                        <label className="block text-xs tracking-widest text-white/50 uppercase mb-2">Email *</label>
                        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" className="luxury-input w-full px-4 py-3 text-sm rounded-none" required />
                      </div>
                      <div>
                        <label className="block text-xs tracking-widest text-white/50 uppercase mb-2">Phone *</label>
                        <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="(514) 000-0000" className="luxury-input w-full px-4 py-3 text-sm rounded-none" required />
                      </div>
                    </div>
                    <button type="button" onClick={nextStep} className="btn-gold w-full py-4 text-sm tracking-widest font-semibold">
                      Next: Event Details →
                    </button>
                  </div>
                )}

                {/* Step 2: Event */}
                {step === 2 && (
                  <div>
                    <h2 className="font-display text-2xl text-white mb-8">Event Details</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label className="block text-xs tracking-widest text-white/50 uppercase mb-2">Package *</label>
                        <select name="package" value={form.package} onChange={handleChange} className="luxury-input w-full px-4 py-3 text-sm rounded-none" required>
                          <option value="">Select package</option>
                          {packages.map(pkg => (
                            <option key={pkg.value} value={pkg.value}>{pkg.label}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs tracking-widest text-white/50 uppercase mb-2">Type of Event *</label>
                        <select name="eventType" value={form.eventType} onChange={handleChange} className="luxury-input w-full px-4 py-3 text-sm rounded-none" required>
                          <option value="">Select event type</option>
                          {eventTypes.map(t => <option key={t} value={t}>{t}</option>)}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label className="block text-xs tracking-widest text-white/50 uppercase mb-2">Event Date *</label>
                        <input type="date" name="eventDate" value={form.eventDate} onChange={handleChange} className="luxury-input w-full px-4 py-3 text-sm rounded-none" required />
                      </div>
                      <div>
                        <label className="block text-xs tracking-widest text-white/50 uppercase mb-2">Number of Hours</label>
                        <input type="number" name="hours" value={form.hours} onChange={handleChange} placeholder="e.g. 3" min="2" className="luxury-input w-full px-4 py-3 text-sm rounded-none" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label className="block text-xs tracking-widest text-white/50 uppercase mb-2">Start Time</label>
                        <input type="time" name="startTime" value={form.startTime} onChange={handleChange} className="luxury-input w-full px-4 py-3 text-sm rounded-none" />
                      </div>
                      <div>
                        <label className="block text-xs tracking-widest text-white/50 uppercase mb-2">End Time</label>
                        <input type="time" name="endTime" value={form.endTime} onChange={handleChange} className="luxury-input w-full px-4 py-3 text-sm rounded-none" />
                      </div>
                    </div>

                    <div className="mb-5">
                      <label className="block text-xs tracking-widest text-white/50 uppercase mb-2">Event Location & Address *</label>
                      <input type="text" name="eventLocation" value={form.eventLocation} onChange={handleChange} placeholder="Venue name and full address" className="luxury-input w-full px-4 py-3 text-sm rounded-none" required />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label className="block text-xs tracking-widest text-white/50 uppercase mb-2">Number of Guests</label>
                        <input type="number" name="guestCount" value={form.guestCount} onChange={handleChange} placeholder="Approx. guest count" className="luxury-input w-full px-4 py-3 text-sm rounded-none" />
                      </div>
                      <div>
                        <label className="block text-xs tracking-widest text-white/50 uppercase mb-2">Indoor / Outdoor</label>
                        <select name="indoorOutdoor" value={form.indoorOutdoor} onChange={handleChange} className="luxury-input w-full px-4 py-3 text-sm rounded-none">
                          <option value="">Select</option>
                          <option value="Indoor">Indoor</option>
                          <option value="Outdoor">Outdoor</option>
                          <option value="Both">Both</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-5">
                      <label className="block text-xs tracking-widest text-white/50 uppercase mb-2">Theme / Colors</label>
                      <input type="text" name="theme" value={form.theme} onChange={handleChange} placeholder="e.g. Black & Gold, Tropical, All White..." className="luxury-input w-full px-4 py-3 text-sm rounded-none" />
                    </div>

                    <div className="mb-8">
                      <label className="block text-xs tracking-widest text-white/50 uppercase mb-2">Additional Notes</label>
                      <textarea name="additionalInfo" value={form.additionalInfo} onChange={handleChange} rows={3} placeholder="Anything else we should know about your event..." className="luxury-input w-full px-4 py-3 text-sm rounded-none resize-none" />
                    </div>

                    <div className="flex gap-4">
                      <button type="button" onClick={() => setStep(1)} className="px-6 py-4 border border-[#d4af37]/30 text-[#d4af37] text-sm tracking-widest hover:bg-[#d4af37]/10 transition-all">
                        ← Back
                      </button>
                      <button type="button" onClick={nextStep} className="btn-gold flex-1 py-4 text-sm tracking-widest font-semibold">
                        Review Booking →
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Review */}
                {step === 3 && (
                  <form onSubmit={handleSubmit}>
                    <h2 className="font-display text-2xl text-white mb-8">Review & Confirm</h2>

                    <div className="space-y-1 mb-8">
                      <div className="p-4 bg-[#d4af37]/5 border border-[#d4af37]/20 mb-6">
                        <p className="text-[#d4af37] text-xs tracking-widest uppercase mb-1">Important</p>
                        <p className="text-white/60 text-sm">A 50% deposit is required to confirm your booking. We will contact you within 24 hours with payment details.</p>
                      </div>

                      <div className="grid grid-cols-2 gap-y-3 text-sm">
                        {[
                          { label: 'Name', value: `${form.firstName} ${form.lastName}` },
                          { label: 'Email', value: form.email },
                          { label: 'Phone', value: form.phone },
                          { label: 'Package', value: packages.find(p => p.value === form.package)?.label?.split('—')[0]?.trim() || form.package },
                          { label: 'Event Type', value: form.eventType },
                          { label: 'Event Date', value: form.eventDate },
                          { label: 'Hours', value: form.hours ? `${form.hours} hours` : 'TBD' },
                          { label: 'Start Time', value: form.startTime || 'TBD' },
                          { label: 'Location', value: form.eventLocation },
                          { label: 'Guests', value: form.guestCount || 'TBD' },
                          { label: 'Indoor/Outdoor', value: form.indoorOutdoor || 'TBD' },
                          { label: 'Theme', value: form.theme || 'None specified' },
                        ].map(({ label, value }) => (
                          <div key={label} className="contents">
                            <span className="text-white/40 tracking-widest uppercase text-xs py-2 pr-4">{label}</span>
                            <span className="text-white/80 py-2 border-b border-[#d4af37]/10">{value}</span>
                          </div>
                        ))}
                      </div>

                      {form.additionalInfo && (
                        <div className="mt-4 p-4 border border-[#d4af37]/15">
                          <p className="text-white/40 text-xs tracking-widest uppercase mb-1">Notes</p>
                          <p className="text-white/70 text-sm">{form.additionalInfo}</p>
                        </div>
                      )}
                    </div>

                    <div className="flex gap-4">
                      <button type="button" onClick={() => setStep(2)} className="px-6 py-4 border border-[#d4af37]/30 text-[#d4af37] text-sm tracking-widest hover:bg-[#d4af37]/10 transition-all">
                        ← Edit
                      </button>
                      <button type="submit" disabled={loading} className="btn-gold flex-1 py-4 text-sm tracking-widest font-semibold disabled:opacity-60">
                        {loading ? 'Submitting...' : 'Confirm Booking Request'}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </>
          )}

          {/* Success */}
          {step === 4 && (
            <div className="luxury-card p-12 text-center">
              <div className="w-20 h-20 border border-[#d4af37]/50 flex items-center justify-center mx-auto mb-8">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5"/>
                </svg>
              </div>
              <h2 className="font-display text-3xl text-white mb-4">
                Booking <span className="gold-text font-semibold">Received!</span>
              </h2>
              <p className="text-white/60 leading-relaxed mb-4 max-w-md mx-auto">
                Thank you, <strong className="text-white">{form.firstName}</strong>! Your booking request has been submitted. We'll review the details and contact you at <strong className="text-[#d4af37]">{form.email}</strong> within 24 hours with a confirmation and deposit invoice.
              </p>
              <p className="text-white/40 text-sm mb-10">Questions? Call us: <a href="tel:5148318409" className="text-[#d4af37]">(514) 831-8409</a></p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/" className="btn-gold px-8 py-3 text-sm tracking-widest font-semibold">
                  Back to Home
                </a>
                <a href="https://instagram.com/flashchicphotobooth" target="_blank" rel="noopener noreferrer" className="px-8 py-3 text-sm tracking-widest border border-[#d4af37]/40 text-[#d4af37] hover:bg-[#d4af37]/10 transition-all">
                  Follow Us
                </a>
              </div>
            </div>
          )}

          {/* Info cards below form */}
          {step < 4 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              {[
                { label: '50% Deposit', desc: 'Secures your date' },
                { label: '24hr Response', desc: 'We confirm quickly' },
                { label: 'Free Cancellation', desc: 'Up to 30 days out*' },
              ].map((info) => (
                <div key={info.label} className="border border-[#d4af37]/20 p-5 text-center">
                  <p className="text-[#d4af37] font-semibold text-sm mb-1">{info.label}</p>
                  <p className="text-white/40 text-xs">{info.desc}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
