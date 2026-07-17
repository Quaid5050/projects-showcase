'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? 'sent' : 'error');
    } catch { setStatus('error'); }
  };

  return (
    <div style={{ background: '#faf8f4', paddingTop: '80px' }}>
      {/* Hero */}
      <section style={{ position: 'relative', height: '320px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Image src="/Estates/Elite_WalkIn_Gallery.jpg" alt="Contact" fill style={{ objectFit: 'cover', objectPosition: 'center 60%' }} quality={85}/>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,8,5,0.62)' }}/>
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', justifyContent: 'center', marginBottom: '18px' }}>
            <div style={{ width: '36px', height: '1px', background: '#b8922a' }}/>
            <span style={{ fontFamily: 'Cinzel, serif', fontSize: '0.58rem', letterSpacing: '0.4em', color: '#d4aa4a' }}>REACH OUT</span>
            <div style={{ width: '36px', height: '1px', background: '#b8922a' }}/>
          </div>
          <h1 style={{ fontFamily: 'Cinzel, serif', fontSize: 'clamp(2rem, 5vw, 3.2rem)', color: '#faf8f4' }}>Contact Us</h1>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', color: 'rgba(244,240,232,0.8)', marginTop: '14px' }}>
            We welcome every inquiry with care and respect
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section style={{ background: '#2c2820', padding: '0 56px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'rgba(255,255,255,0.06)' }} className="grid-3">
          {[
            { icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M6.6 10.8C7.8 13.2 9.8 15.2 12.2 16.4L14 14.6C14.2 14.4 14.6 14.4 14.8 14.6C15.8 15 16.8 15.2 18 15.2C18.4 15.2 18.8 15.6 18.8 16V18.8C18.8 19.2 18.4 19.6 18 19.6C9.4 19.6 2.4 12.6 2.4 4C2.4 3.6 2.8 3.2 3.2 3.2H6C6.4 3.2 6.8 3.6 6.8 4C6.8 5.2 7 6.2 7.4 7.2C7.4 7.4 7.4 7.8 7.2 8L6.6 10.8Z" stroke="#d4aa4a" strokeWidth="1.2"/></svg>, label: 'Phone', value: '+1 (910) 734-4426', href: 'tel:+19107344426' },
            { icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M3 8L12 13L21 8M3 6H21V18H3V6Z" stroke="#d4aa4a" strokeWidth="1.2"/></svg>, label: 'Email', value: 'Centralmausoleums@gmail.com', href: 'mailto:Centralmausoleums@gmail.com' },
            { icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="10" r="4" stroke="#d4aa4a" strokeWidth="1.2"/><path d="M4 20C4 16 7.6 12.8 12 12.8C16.4 12.8 20 16 20 20" stroke="#d4aa4a" strokeWidth="1.2"/></svg>, label: 'Contact Person', value: 'Ricky Worley', href: undefined },
          ].map((c, i) => (
            <div key={i} style={{ background: '#2c2820', padding: '32px 28px', textAlign: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '14px' }}>{c.icon}</div>
              <div style={{ fontFamily: 'Cinzel, serif', fontSize: '0.6rem', letterSpacing: '0.22em', color: '#b8922a', marginBottom: '8px' }}>{c.label}</div>
              {c.href
                ? <a href={c.href} style={{ color: '#d4cfc4', fontSize: '0.9rem', textDecoration: 'none' }}>{c.value}</a>
                : <div style={{ color: '#d4cfc4', fontSize: '0.9rem' }}>{c.value}</div>
              }
            </div>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <section className="section-pad" style={{ padding: '80px 56px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '56px', alignItems: 'start' }} className="grid-2 contact-grid">
          {/* Left */}
          <div>
            <div className="section-label"><span>Get in Touch</span></div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', lineHeight: 1.25, marginBottom: '16px' }}>
              Let&apos;s Create Something Lasting Together
            </h2>
            <p style={{ fontSize: '0.9rem', color: '#7a7268', lineHeight: 1.8, marginBottom: '36px' }}>
              Whether you&apos;re planning a new memorial structure, need restoration work, or simply want to learn more about our offerings — we&apos;re here to help with care and expertise.
            </p>

            {/* Image */}
            <div style={{ position: 'relative', height: '300px', overflow: 'hidden', marginBottom: '28px' }}>
              <Image src="/about.png" alt="Memorial" fill style={{ objectFit: 'cover' }} quality={80}/>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(44,40,32,0.4), transparent)' }}/>
            </div>

            <div style={{ background: '#fff', border: '1px solid rgba(184,146,42,0.12)', padding: '24px', borderLeft: '3px solid #b8922a' }}>
              <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '1rem', color: '#2c2820', lineHeight: 1.75 }}>
                "We respond to every inquiry personally. You are never just a number — every family we serve receives our full attention."
              </p>
              <div style={{ fontFamily: 'Cinzel, serif', fontSize: '0.58rem', letterSpacing: '0.15em', color: '#b8922a', marginTop: '12px' }}>— RICKY WORLEY</div>
            </div>
          </div>

          {/* Form */}
          <div style={{ background: '#fff', border: '1px solid rgba(184,146,42,0.12)', padding: '44px' }}>
            {status === 'sent' ? (
              <div style={{ textAlign: 'center', padding: '48px 0' }}>
                <div style={{ width: '72px', height: '72px', border: '1.5px solid #b8922a', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M7 16L13 22L25 10" stroke="#b8922a" strokeWidth="2" strokeLinecap="round"/></svg>
                </div>
                <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '1.1rem', color: '#2c2820', marginBottom: '12px' }}>Message Received</h3>
                <p style={{ color: '#7a7268', fontSize: '0.9rem', lineHeight: 1.7 }}>Thank you for reaching out. We will be in touch shortly with care and full attention to your needs.</p>
              </div>
            ) : (
              <>
                <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '0.95rem', letterSpacing: '0.08em', color: '#2c2820', marginBottom: '6px' }}>Send Us a Message</h3>
                <p style={{ color: '#7a7268', fontSize: '0.85rem', marginBottom: '32px' }}>We respond within one business day.</p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'Cinzel, serif', fontSize: '0.58rem', letterSpacing: '0.2em', color: '#b8922a', marginBottom: '7px' }}>FULL NAME *</label>
                    <input type="text" placeholder="Your full name" value={form.name} onChange={e => setForm({...form, name: e.target.value})}/>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'Cinzel, serif', fontSize: '0.58rem', letterSpacing: '0.2em', color: '#b8922a', marginBottom: '7px' }}>PHONE</label>
                    <input type="tel" placeholder="Your phone number" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}/>
                  </div>
                </div>

                <div style={{ marginBottom: '14px' }}>
                  <label style={{ display: 'block', fontFamily: 'Cinzel, serif', fontSize: '0.58rem', letterSpacing: '0.2em', color: '#b8922a', marginBottom: '7px' }}>EMAIL ADDRESS *</label>
                  <input type="email" placeholder="your@email.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})}/>
                </div>

                <div style={{ marginBottom: '14px' }}>
                  <label style={{ display: 'block', fontFamily: 'Cinzel, serif', fontSize: '0.58rem', letterSpacing: '0.2em', color: '#b8922a', marginBottom: '7px' }}>SERVICE OF INTEREST</label>
                  <select value={form.service} onChange={e => setForm({...form, service: e.target.value})} style={{ color: form.service ? '#2c2820' : '#a09890' }}>
                    <option value="">Select a service...</option>
                    {['Single Mausoleum','Double Mausoleum','Four Crypt Mausoleum','Six Crypt Mausoleum','Estate Mausoleum','Columbarium','Cremation Bench','Cemetery Restoration','General Inquiry'].map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div style={{ marginBottom: '28px' }}>
                  <label style={{ display: 'block', fontFamily: 'Cinzel, serif', fontSize: '0.58rem', letterSpacing: '0.2em', color: '#b8922a', marginBottom: '7px' }}>MESSAGE *</label>
                  <textarea rows={5} placeholder="Tell us about your needs, timeline, and any specific requirements..." value={form.message} onChange={e => setForm({...form, message: e.target.value})} style={{ resize: 'vertical' }}/>
                </div>

                {status === 'error' && (
                  <div style={{ background: 'rgba(180,40,40,0.06)', border: '1px solid rgba(180,40,40,0.25)', padding: '12px 16px', marginBottom: '18px', color: '#b03030', fontSize: '0.85rem', borderRadius: '0' }}>
                    Something went wrong. Please try again or email us directly.
                  </div>
                )}

                <button onClick={handleSubmit} disabled={status === 'sending'} className="btn-gold"
                  style={{ width: '100%', textAlign: 'center', opacity: status === 'sending' ? 0.7 : 1, cursor: status === 'sending' ? 'not-allowed' : 'pointer' }}>
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
                <p style={{ color: '#a09890', fontSize: '0.73rem', textAlign: 'center', marginTop: '14px' }}>
                  Your inquiry is handled with complete confidentiality and respect.
                </p>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
