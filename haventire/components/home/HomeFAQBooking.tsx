'use client';

import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { services } from '@/lib/data';

const faqs = [
  {
    q: 'How long does a ceramic coating last?',
    a: 'A professionally applied ceramic coating can last years when maintained properly. We guide you on care tips to ensure your car stays protected and looking brand new.',
  },
  {
    q: 'Can I book multiple services at the same time?',
    a: 'Absolutely! Many clients combine services such as ceramic coating with window tinting, or PPF with vinyl wraps. Booking multiple services together often saves time and we offer package pricing.',
  },
  {
    q: 'Do you offer warranties or guarantees?',
    a: 'Yes, we stand behind the quality of all our work. Most services come with a satisfaction guarantee, and select products carry manufacturer warranties. Details are discussed during booking.',
  },
  {
    q: 'How soon can I get an appointment?',
    a: 'We strive to accommodate your schedule. Our Mississauga location operates Monday through Saturday, 9 AM – 7 PM. We recommend booking in advance.',
  },
  {
    q: 'Will my car be safe while in your care?',
    a: 'Vehicle safety is our top priority. Our facilities are secured, technicians are certified professionals, and all work is performed with the utmost care from drop-off to pick-up.',
  },
];

const inputCls = 'w-full bg-white border-0 text-[#1a1a1a] text-sm px-4 py-3 outline-none placeholder:text-[#aaa]';
const labelCls = 'block text-white text-[0.6rem] font-bold uppercase tracking-[0.18em] mb-1.5';

export default function HomeFAQBooking() {
  const [open, setOpen] = useState<number | null>(0);
  const [form, setForm] = useState({
    name: '', email: '', phone: '', address: '', carBrand: '', carNo: '', service: '', date: '', time: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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
        setForm({ name: '', email: '', phone: '', address: '', carBrand: '', carNo: '', service: '', date: '', time: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="bg-white pt-20 lg:pt-28 pb-0">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* LEFT — FAQ */}
          <div>
            <p className="text-[#e01e25] text-[0.65rem] font-bold uppercase tracking-[0.3em] mb-3">
              Frequently Asked Question
            </p>
            <h2 className="text-[2rem] md:text-[2.5rem] font-black text-[#1a1a1a] leading-tight mb-5">
              Your Questions, Answered<br />Clearly
            </h2>
            <div className="flex items-center gap-2 mb-7">
              <span className="w-7 h-[3px] bg-[#e01e25] inline-block" />
              <span className="w-7 h-[3px] bg-[#e01e25] inline-block" />
              <span className="w-7 h-[3px] bg-[#e01e25] inline-block" />
            </div>
            <p className="text-[#666] text-sm leading-relaxed mb-8">
              We know choosing the right service for your car can be stressful. Here are the answers to the most common concerns , so you can book with confidence.
            </p>

            <div className="border-t border-[#e8e8e8]">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-[#e8e8e8]">
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex items-center gap-3 py-4 text-left">
                    <span className="text-[#e01e25] font-black text-sm shrink-0 leading-none">
                      Q{i + 1}.
                    </span>
                    <span className={`flex-1 font-semibold text-[0.87rem] leading-snug transition-colors ${
                      open === i ? 'text-[#e01e25]' : 'text-[#1a1a1a]'
                    }`}>
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={16}
                      className={`shrink-0 text-[#aaa] transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${open === i ? 'max-h-48 pb-5' : 'max-h-0'}`}>
                    <p className="text-[#666] text-sm leading-relaxed pl-8 pr-4">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-[#555] text-sm leading-relaxed mb-4">
                Still unsure? Reach out and talk to our experts — we&apos;ll guide you step by step and make it easy to get the care your car deserves.
              </p>
              <Link href="/contact"
                className="text-[#999] text-[0.7rem] font-bold uppercase tracking-[0.15em] hover:text-[#e01e25] transition-colors inline-flex items-center gap-0.5">
                View More FAQ&apos;s
                <ChevronRight size={13} />
                <ChevronRight size={13} className="-ml-2" />
              </Link>
            </div>
          </div>

          {/* RIGHT — Description + Red Booking Form */}
          <div>
            {/* Description paragraph above the red panel */}
            <p className="text-[#555] text-sm leading-relaxed mb-8">
              Schedule your service with Haven Tint &amp; Tire and let our experienced team take care of your vehicle with precision and care. From paint protection and window tinting to wraps and tire services, we make the booking process quick and convenient so you can get back on the road with confidence.
            </p>

            {/* Red form panel */}
            <div className="bg-[#e01e25] p-6 lg:p-8">
              <h2 className="text-[1.7rem] md:text-[2rem] font-black text-white leading-tight mb-6">
                Book An Appointment
              </h2>

              {status === 'success' ? (
                <div className="bg-white/20 text-white font-bold text-center py-8 px-6">
                  <p className="text-lg mb-2">✓ Booking Request Sent!</p>
                  <p className="text-sm font-normal text-white/80 mb-4">We&apos;ll contact you shortly to confirm your appointment.</p>
                  <button onClick={() => setStatus('idle')}
                    className="bg-[#1a1a1a] hover:bg-black text-white font-bold text-[0.7rem] uppercase tracking-[0.15em] py-3 px-6 transition-colors">
                    Book Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Row 1: Name + Email */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className={labelCls}>Your Name *</label>
                      <input type="text" name="name" placeholder="Your name" required
                        value={form.name} onChange={handleChange} className={inputCls} />
                    </div>
                    <div>
                      <label className={labelCls}>Email Address</label>
                      <input type="email" name="email" placeholder="Email address"
                        value={form.email} onChange={handleChange} className={inputCls} />
                    </div>
                  </div>
                  {/* Row 2: Phone + Address */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className={labelCls}>Phone No *</label>
                      <input type="tel" name="phone" placeholder="Your Phone" required
                        value={form.phone} onChange={handleChange} className={inputCls} />
                    </div>
                    <div>
                      <label className={labelCls}>Address</label>
                      <input type="text" name="address" placeholder="Address"
                        value={form.address} onChange={handleChange} className={inputCls} />
                    </div>
                  </div>
                  {/* Row 3: Car Brand + Car No */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className={labelCls}>Car Brand</label>
                      <input type="text" name="carBrand" placeholder="Enter Car Brand"
                        value={form.carBrand} onChange={handleChange} className={inputCls} />
                    </div>
                    <div>
                      <label className={labelCls}>Car No</label>
                      <input type="text" name="carNo" placeholder="09A-9899"
                        value={form.carNo} onChange={handleChange} className={inputCls} />
                    </div>
                  </div>
                  {/* Row 4: Service List */}
                  <div>
                    <label className={labelCls}>Service List</label>
                    <div className="relative">
                      <select name="service"
                        value={form.service} onChange={handleChange}
                        className={`${inputCls} appearance-none cursor-pointer pr-10`}>
                        <option value="">Select a service</option>
                        {services.map((s) => (
                          <option key={s.slug} value={s.name}>{s.name}</option>
                        ))}
                      </select>
                      <ChevronDown size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#aaa] pointer-events-none" />
                    </div>
                  </div>
                  {/* Row 5: Date + Time */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className={labelCls}>Appointment Date</label>
                      <input type="date" name="date"
                        value={form.date} onChange={handleChange} className={inputCls} />
                    </div>
                    <div>
                      <label className={labelCls}>Appointment Time</label>
                      <input type="time" name="time"
                        value={form.time} onChange={handleChange} className={inputCls} />
                    </div>
                  </div>

                  {status === 'error' && (
                    <p className="text-white bg-black/20 text-xs text-center py-2 px-3">
                      Something went wrong. Please try again or call us directly.
                    </p>
                  )}

                  {/* Submit */}
                  <button type="submit" disabled={status === 'loading'}
                    className="w-full bg-[#1a1a1a] hover:bg-black text-white font-black text-[0.72rem] uppercase tracking-[0.18em] py-4 transition-colors disabled:opacity-60 disabled:cursor-not-allowed">
                    {status === 'loading' ? 'Sending...' : 'Get Appointment'}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}