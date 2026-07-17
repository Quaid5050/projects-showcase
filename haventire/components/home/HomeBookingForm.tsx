'use client';

import { useState } from 'react';
import { ChevronDown, CheckCircle2 } from 'lucide-react';
import { services, locations } from '@/lib/data';

export default function HomeBookingForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', location: '', date: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
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
      setStatus(res.ok ? 'success' : 'error');
      if (res.ok) setForm({ name: '', email: '', phone: '', service: '', location: '', date: '', message: '' });
    } catch { setStatus('error'); }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#1a1a1a] relative overflow-hidden">
      {/* Red side accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#e01e25]" />

      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_480px] gap-12 items-start">

          {/* Left text */}
          <div>
            <p className="text-[#e01e25] text-xs font-bold uppercase tracking-[0.25em] mb-4">Schedule a Visit</p>
            <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-5">
              Book Your Appointment
            </h2>
            <div className="w-14 h-1 bg-[#e01e25] mb-6" />
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              Ready to give your car the care it deserves? Fill out the form and our team will confirm your appointment within 24 hours.
            </p>
            <div className="space-y-4">
              {[
                'Certified & professional technicians',
                'Premium materials on every job',
                'Both Scarborough & Mississauga locations',
                'Satisfaction guaranteed',
              ].map((pt) => (
                <div key={pt} className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-[#e01e25] shrink-0" />
                  <span className="text-gray-300 text-sm">{pt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8">
            {status === 'success' ? (
              <div className="text-center py-10">
                <CheckCircle2 size={50} className="text-[#e01e25] mx-auto mb-4" />
                <h3 className="text-xl font-black text-[#1a1a1a] mb-2">Booking Received!</h3>
                <p className="text-[#666] text-sm mb-6">We&apos;ll confirm your appointment within 24 hours.</p>
                <button onClick={() => setStatus('idle')} className="btn-red text-xs">Book Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-lg font-black text-[#1a1a1a] mb-5 uppercase tracking-wide">Get Appointment</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Full Name *"
                    className="w-full border border-[#e0e0e0] focus:border-[#e01e25] focus:outline-none px-4 py-3 text-sm text-[#1a1a1a] placeholder-[#aaa] transition-colors" />
                  <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="Email Address *"
                    className="w-full border border-[#e0e0e0] focus:border-[#e01e25] focus:outline-none px-4 py-3 text-sm text-[#1a1a1a] placeholder-[#aaa] transition-colors" />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} required placeholder="Phone Number *"
                    className="w-full border border-[#e0e0e0] focus:border-[#e01e25] focus:outline-none px-4 py-3 text-sm text-[#1a1a1a] placeholder-[#aaa] transition-colors" />
                  <input type="date" name="date" value={form.date} onChange={handleChange}
                    className="w-full border border-[#e0e0e0] focus:border-[#e01e25] focus:outline-none px-4 py-3 text-sm text-[#1a1a1a] transition-colors" />
                </div>

                <div className="relative">
                  <select name="service" value={form.service} onChange={handleChange} required
                    className="w-full border border-[#e0e0e0] focus:border-[#e01e25] focus:outline-none px-4 py-3 text-sm text-[#1a1a1a] appearance-none bg-white transition-colors">
                    <option value="">Select Service *</option>
                    {services.map((s) => <option key={s.slug} value={s.name}>{s.name}</option>)}
                    <option value="Multiple Services">Multiple Services</option>
                  </select>
                  <ChevronDown size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#aaa] pointer-events-none" />
                </div>

                <div className="relative">
                  <select name="location" value={form.location} onChange={handleChange} required
                    className="w-full border border-[#e0e0e0] focus:border-[#e01e25] focus:outline-none px-4 py-3 text-sm text-[#1a1a1a] appearance-none bg-white transition-colors">
                    <option value="">Select Location *</option>
                    {locations.map((l) => <option key={l.name} value={l.name}>{l.name} — {l.address}</option>)}
                  </select>
                  <ChevronDown size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#aaa] pointer-events-none" />
                </div>

                <textarea name="message" value={form.message} onChange={handleChange} rows={3}
                  placeholder="Vehicle details & additional notes..."
                  className="w-full border border-[#e0e0e0] focus:border-[#e01e25] focus:outline-none px-4 py-3 text-sm text-[#1a1a1a] resize-none placeholder-[#aaa] transition-colors" />

                {status === 'error' && <p className="text-red-500 text-xs">Something went wrong. Please call us directly.</p>}

                <button type="submit" disabled={status === 'loading'}
                  className="btn-red w-full flex items-center justify-center gap-2 disabled:opacity-60">
                  {status === 'loading' ? 'Sending...' : 'Get Appointment'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
