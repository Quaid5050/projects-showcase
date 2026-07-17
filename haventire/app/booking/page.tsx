'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, CheckCircle2, Send, ChevronDown } from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import { services, locations, WHY_CHOOSE_IMG } from '@/lib/data';

export default function BookingPage() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', service: '', location: '', date: '', message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, type: 'booking' }),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', phone: '', service: '', location: '', date: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <PageHero
        title="Book An Appointment"
        subtitle="Schedule your service at either of our GTA locations. Fill out the form below and our team will confirm your booking within 24 hours."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Book An Appointment' }]}
        bgImage={WHY_CHOOSE_IMG}
      />

      <section className="py-20 lg:py-28 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_360px] gap-12 lg:gap-16">

            {/* FORM */}
            <div className="bg-white border border-[#ebebeb] p-8 lg:p-10">
              <p className="sec-label">Schedule Your Visit</p>
              <h2 className="text-2xl md:text-3xl font-black text-[#1a1a1a] mb-2">Booking Form</h2>
              <div className="red-divider mb-4" />
              <p className="text-[#666] text-sm mb-8">All fields marked with * are required.</p>

              {status === 'success' ? (
                <div className="py-16 text-center">
                  <CheckCircle2 size={56} className="text-[#e01e25] mx-auto mb-5" />
                  <h3 className="text-2xl font-black text-[#1a1a1a] mb-3">Booking Received!</h3>
                  <p className="text-[#666] max-w-sm mx-auto mb-8">
                    Thank you! We&apos;ve received your booking request and will confirm your appointment within 24 hours.
                  </p>
                  <button onClick={() => setStatus('idle')} className="btn-red">Book Another Service</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-[#1a1a1a] uppercase tracking-wider mb-2">Full Name *</label>
                      <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="John Smith"
                        className="w-full border border-[#e0e0e0] focus:border-[#e01e25] focus:outline-none px-4 py-3 text-sm text-[#1a1a1a] transition-colors" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#1a1a1a] uppercase tracking-wider mb-2">Email Address *</label>
                      <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="john@example.com"
                        className="w-full border border-[#e0e0e0] focus:border-[#e01e25] focus:outline-none px-4 py-3 text-sm text-[#1a1a1a] transition-colors" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-[#1a1a1a] uppercase tracking-wider mb-2">Phone Number *</label>
                      <input type="tel" name="phone" value={form.phone} onChange={handleChange} required placeholder="(416) 000-0000"
                        className="w-full border border-[#e0e0e0] focus:border-[#e01e25] focus:outline-none px-4 py-3 text-sm text-[#1a1a1a] transition-colors" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#1a1a1a] uppercase tracking-wider mb-2">Preferred Date</label>
                      <input type="date" name="date" value={form.date} onChange={handleChange}
                        className="w-full border border-[#e0e0e0] focus:border-[#e01e25] focus:outline-none px-4 py-3 text-sm text-[#1a1a1a] transition-colors" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-[#1a1a1a] uppercase tracking-wider mb-2">Service Required *</label>
                      <div className="relative">
                        <select name="service" value={form.service} onChange={handleChange} required
                          className="w-full border border-[#e0e0e0] focus:border-[#e01e25] focus:outline-none px-4 py-3 text-sm text-[#1a1a1a] appearance-none bg-white transition-colors">
                          <option value="">Select a service</option>
                          {services.map((s) => <option key={s.slug} value={s.name}>{s.name}</option>)}
                          <option value="Multiple Services">Multiple Services</option>
                          <option value="Not Sure">Not Sure — Need Consultation</option>
                        </select>
                        <ChevronDown size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#aaa] pointer-events-none" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#1a1a1a] uppercase tracking-wider mb-2">Preferred Location *</label>
                      <div className="relative">
                        <select name="location" value={form.location} onChange={handleChange} required
                          className="w-full border border-[#e0e0e0] focus:border-[#e01e25] focus:outline-none px-4 py-3 text-sm text-[#1a1a1a] appearance-none bg-white transition-colors">
                          <option value="">Select a location</option>
                          {locations.map((l) => <option key={l.name} value={l.name}>{l.name}</option>)}
                        </select>
                        <ChevronDown size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#aaa] pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1a1a1a] uppercase tracking-wider mb-2">Additional Notes / Vehicle Details</label>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={4}
                      placeholder="Vehicle make, model, year, and any specific requests..."
                      className="w-full border border-[#e0e0e0] focus:border-[#e01e25] focus:outline-none px-4 py-3 text-sm text-[#1a1a1a] resize-none transition-colors" />
                  </div>

                  {status === 'error' && (
                    <p className="text-red-500 text-sm">Something went wrong. Please try again or call us directly.</p>
                  )}

                  <button type="submit" disabled={status === 'loading'}
                    className="btn-red flex items-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed">
                    {status === 'loading' ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <>Get Appointment <Send size={15} /></>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* SIDEBAR */}
            <aside className="space-y-6">
              {/* Hours */}
              <div className="bg-[#1a1a1a] p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#e01e25]" />
                <p className="text-[#e01e25] text-xs font-bold uppercase tracking-widest mb-4">Hours of Operation</p>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm border-b border-gray-800 pb-3">
                    <span className="text-gray-400">Monday – Saturday</span>
                    <span className="text-white font-semibold">9:00 AM – 7:00 PM</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Sunday</span>
                    <span className="text-[#e01e25] font-semibold">Closed</span>
                  </div>
                </div>
              </div>

              {/* Locations */}
              {locations.map((loc) => (
                <div key={loc.name} className="bg-white border border-[#ebebeb] p-6 hover:border-[#e01e25] transition-colors">
                  <h4 className="text-[#1a1a1a] font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                    <MapPin size={15} className="text-[#e01e25]" />
                    {loc.name}
                  </h4>
                  <div className="space-y-2">
                    <p className="text-[#666] text-sm flex items-start gap-2">
                      <MapPin size={13} className="text-[#e01e25] shrink-0 mt-0.5" />
                      {loc.address}
                    </p>
                    <a href={`tel:${loc.phoneRaw}`} className="flex items-center gap-2 text-sm text-[#666] hover:text-[#e01e25] transition-colors">
                      <Phone size={13} className="text-[#e01e25] shrink-0" />
                      {loc.phone}
                    </a>
                  </div>
                </div>
              ))}

              {/* Email */}
              <div className="bg-white border border-[#ebebeb] p-6 hover:border-[#e01e25] transition-colors">
                <h4 className="text-[#1a1a1a] font-bold text-sm uppercase tracking-wider mb-3">Email Us</h4>
                <a href="mailto:haventinttire@gmail.com" className="flex items-center gap-2 text-sm text-[#666] hover:text-[#e01e25] transition-colors">
                  <Mail size={14} className="text-[#e01e25] shrink-0" />
                  haventinttire@gmail.com
                </a>
              </div>

              {/* CTA */}
              <Link href="/contact"
                className="block bg-[#e01e25] p-6 text-center hover:bg-[#b8191f] transition-colors">
                <p className="text-white font-black text-base mb-1">Have Questions?</p>
                <p className="text-white/80 text-sm">Contact us before booking</p>
              </Link>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
