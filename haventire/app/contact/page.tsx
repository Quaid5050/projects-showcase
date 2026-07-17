'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, CheckCircle2, Send } from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import { locations, ABOUT_GARAGE } from '@/lib/data';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, type: 'contact' }),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', phone: '', email: '', message: '' });
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
        title="Contact Us"
        subtitle="Your car deserves expert care. If you have questions, want a quote, or are ready to schedule a service — reach out and our team will guide you."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact Us' }]}
        bgImage={ABOUT_GARAGE}
      />

      <section className="py-20 lg:py-28 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_380px] gap-12 lg:gap-16">

            {/* FORM */}
            <div className="bg-white border border-[#ebebeb] p-8 lg:p-10">
              <p className="sec-label">Send a Message</p>
              <h2 className="text-2xl md:text-3xl font-black text-[#1a1a1a] mb-2">Get in Touch</h2>
              <div className="red-divider mb-4" />
              <p className="text-[#666] text-sm mb-8">
                Fill out the form below and one of our team members will get back to you shortly.
              </p>

              {status === 'success' ? (
                <div className="py-16 text-center">
                  <CheckCircle2 size={56} className="text-[#e01e25] mx-auto mb-5" />
                  <h3 className="text-2xl font-black text-[#1a1a1a] mb-3">Message Sent!</h3>
                  <p className="text-[#666] max-w-sm mx-auto mb-8">
                    Thanks for reaching out! We&apos;ll get back to you within 24 hours.
                  </p>
                  <button onClick={() => setStatus('idle')} className="btn-red">Send Another Message</button>
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
                      <label className="block text-xs font-bold text-[#1a1a1a] uppercase tracking-wider mb-2">Phone Number *</label>
                      <input type="tel" name="phone" value={form.phone} onChange={handleChange} required placeholder="(416) 000-0000"
                        className="w-full border border-[#e0e0e0] focus:border-[#e01e25] focus:outline-none px-4 py-3 text-sm text-[#1a1a1a] transition-colors" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1a1a1a] uppercase tracking-wider mb-2">Email Address *</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="john@example.com"
                      className="w-full border border-[#e0e0e0] focus:border-[#e01e25] focus:outline-none px-4 py-3 text-sm text-[#1a1a1a] transition-colors" />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1a1a1a] uppercase tracking-wider mb-2">Message *</label>
                    <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
                      placeholder="Tell us how we can help you..."
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
                      <>Send Message <Send size={15} /></>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* SIDEBAR */}
            <aside className="space-y-5">
              {/* Email */}
              <div className="bg-[#1a1a1a] p-7 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#e01e25]" />
                <p className="text-[#e01e25] text-xs font-bold uppercase tracking-widest mb-3">Email Us</p>
                <a href="mailto:haventinttire@gmail.com"
                  className="flex items-center gap-3 text-white hover:text-[#e01e25] transition-colors">
                  <Mail size={18} className="text-[#e01e25] shrink-0" />
                  <span className="font-semibold text-sm">haventinttire@gmail.com</span>
                </a>
              </div>

              {/* Locations */}
              {locations.map((loc) => (
                <div key={loc.name} className="bg-white border border-[#ebebeb] p-6 hover:border-[#e01e25] transition-colors">
                  <h4 className="text-[#1a1a1a] font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                    <MapPin size={14} className="text-[#e01e25]" />
                    {loc.name}
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin size={13} className="text-[#e01e25] shrink-0 mt-0.5" />
                      <p className="text-[#666] text-sm leading-snug">{loc.address}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone size={13} className="text-[#e01e25] shrink-0" />
                      <a href={`tel:${loc.phoneRaw}`} className="text-[#666] text-sm hover:text-[#e01e25] transition-colors">
                        {loc.phone}
                      </a>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock size={13} className="text-[#e01e25] shrink-0 mt-0.5" />
                      <div className="text-xs text-[#666]">
                        <p>{loc.hours}</p>
                        <p>{loc.dayClosed}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Book CTA */}
              <div className="bg-[#e01e25] p-6">
                <h4 className="text-white font-black text-base mb-2">Ready to Book?</h4>
                <p className="text-white/80 text-sm mb-4">Skip the message — book your appointment directly.</p>
                <Link href="/booking"
                  className="block text-center bg-[#1a1a1a] text-white font-bold text-xs uppercase tracking-widest py-3 px-6 hover:bg-white hover:text-[#e01e25] transition-colors">
                  Book An Appointment
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Map links bar */}
      <section className="bg-[#1a1a1a] py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="sec-label">Find Us</p>
              <p className="text-white font-black text-2xl">Mississauga, Ontario</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              {locations.map((loc) => (
                <a key={loc.name}
                  href={loc.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-red flex items-center gap-2 text-xs">
                  <MapPin size={13} /> {loc.name} →
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
