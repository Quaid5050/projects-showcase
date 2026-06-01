'use client';
import { useState } from 'react';

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
      if (res.ok) setStatus('sent');
      else setStatus('error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero */}
      <section style={{
        padding: '80px 48px 60px',
        background: 'linear-gradient(160deg, #0f0d0a 0%, #0a0a0a 100%)',
        textAlign: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.03 }}>
          <svg width="100%" height="100%" viewBox="0 0 1200 500" preserveAspectRatio="xMidYMid slice">
            <defs><pattern id="grid5" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="#c9a84c" strokeWidth="0.5"/></pattern></defs>
            <rect width="100%" height="100%" fill="url(#grid5)"/>
          </svg>
        </div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'center', marginBottom: '20px' }}>
            <div style={{ width: '40px', height: '1px', background: 'rgba(201,168,76,0.5)' }}></div>
            <span style={{ fontFamily: 'Cinzel, serif', fontSize: '0.6rem', letterSpacing: '0.3em', color: '#c9a84c' }}>REACH OUT</span>
            <div style={{ width: '40px', height: '1px', background: 'rgba(201,168,76,0.5)' }}></div>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#f0e8d8', marginBottom: '20px' }}>Contact Us</h1>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', color: '#d4c9b0', maxWidth: '520px', margin: '0 auto' }}>
            We welcome every inquiry with care and respect. Reach out and we will respond promptly.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: '80px 48px', background: '#0a0a0a' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '60px', alignItems: 'start' }}>

          {/* Left: Info */}
          <div>
            <div style={{ marginBottom: '48px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <div style={{ width: '30px', height: '1px', background: '#c9a84c' }}></div>
                <span style={{ fontFamily: 'Cinzel, serif', fontSize: '0.6rem', letterSpacing: '0.3em', color: '#c9a84c' }}>GET IN TOUCH</span>
              </div>
              <h2 style={{ fontSize: '1.8rem', color: '#f0e8d8', lineHeight: '1.3', marginBottom: '16px' }}>
                Let&apos;s Create Something Lasting Together
              </h2>
              <p style={{ color: '#8a7f72', fontSize: '0.9rem', lineHeight: '1.8' }}>
                Whether you&apos;re planning a new memorial structure, need restoration work, or simply want to learn more about our offerings — we&apos;re here to help.
              </p>
            </div>

            {[
              {
                svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6.6 10.8C7.8 13.2 9.8 15.2 12.2 16.4L14 14.6C14.2 14.4 14.6 14.4 14.8 14.6C15.8 15 16.8 15.2 18 15.2C18.4 15.2 18.8 15.6 18.8 16V18.8C18.8 19.2 18.4 19.6 18 19.6C9.4 19.6 2.4 12.6 2.4 4C2.4 3.6 2.8 3.2 3.2 3.2H6C6.4 3.2 6.8 3.6 6.8 4C6.8 5.2 7 6.2 7.4 7.2C7.4 7.4 7.4 7.8 7.2 8L6.6 10.8Z" stroke="#c9a84c" strokeWidth="1.2"/></svg>,
                label: 'Phone', value: '+1 (910) 734-4426', href: 'tel:+19107344426',
              },
              {
                svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3 8L12 13L21 8M3 6H21V18H3V6Z" stroke="#c9a84c" strokeWidth="1.2"/></svg>,
                label: 'Email', value: 'Centralmausoleums@gmail.com', href: 'mailto:Centralmausoleums@gmail.com',
              },
              {
                svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="10" r="4" stroke="#c9a84c" strokeWidth="1.2"/><path d="M4 20C4 16 7.6 12.8 12 12.8C16.4 12.8 20 16 20 20" stroke="#c9a84c" strokeWidth="1.2"/></svg>,
                label: 'Contact', value: 'Ricky Worley', href: undefined,
              },
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex', gap: '20px', alignItems: 'flex-start',
                padding: '24px',
                background: 'linear-gradient(145deg, #1a1814, #120e09)',
                border: '1px solid rgba(201,168,76,0.12)',
                marginBottom: '16px',
              }}>
                <div style={{ width: '44px', height: '44px', flexShrink: 0, border: '1px solid rgba(201,168,76,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {item.svg}
                </div>
                <div>
                  <div style={{ fontFamily: 'Cinzel, serif', fontSize: '0.6rem', letterSpacing: '0.2em', color: '#c9a84c', marginBottom: '4px' }}>{item.label}</div>
                  {item.href
                    ? <a href={item.href} style={{ color: '#d4c9b0', fontSize: '0.9rem', textDecoration: 'none' }}>{item.value}</a>
                    : <div style={{ color: '#d4c9b0', fontSize: '0.9rem' }}>{item.value}</div>
                  }
                </div>
              </div>
            ))}

            <div style={{ marginTop: '40px', padding: '24px', border: '1px solid rgba(201,168,76,0.08)', background: 'rgba(201,168,76,0.02)' }}>
              <svg width="100%" height="140" viewBox="0 0 280 140" fill="none">
                <path d="M140 12L30 48V132H250V48L140 12Z" stroke="rgba(201,168,76,0.35)" strokeWidth="0.75" fill="none"/>
                <rect x="70" y="65" width="6" height="67" stroke="rgba(201,168,76,0.25)" strokeWidth="0.6" fill="none"/>
                <rect x="204" y="65" width="6" height="67" stroke="rgba(201,168,76,0.25)" strokeWidth="0.6" fill="none"/>
                <rect x="110" y="88" width="60" height="44" stroke="rgba(201,168,76,0.35)" strokeWidth="0.75" fill="rgba(0,0,0,0.3)"/>
                <path d="M110 88C110 73 170 73 170 88" stroke="rgba(201,168,76,0.35)" strokeWidth="0.75" fill="none"/>
                <rect x="36" y="48" width="208" height="9" stroke="rgba(201,168,76,0.2)" strokeWidth="0.5" fill="none"/>
                <rect x="30" y="130" width="220" height="4" stroke="rgba(201,168,76,0.2)" strokeWidth="0.5" fill="none"/>
                <circle cx="140" cy="12" r="3" fill="rgba(201,168,76,0.5)"/>
                <line x1="20" y1="136" x2="260" y2="136" stroke="rgba(201,168,76,0.15)" strokeWidth="0.5"/>
              </svg>
            </div>
          </div>

          {/* Right: Form */}
          <div style={{ background: 'linear-gradient(145deg, #161310, #0d0b09)', border: '1px solid rgba(201,168,76,0.15)', padding: '48px' }}>
            {status === 'sent' ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" style={{ marginBottom: '24px' }}>
                  <circle cx="32" cy="32" r="30" stroke="#c9a84c" strokeWidth="1.2" fill="none"/>
                  <path d="M18 32L27 41L46 23" stroke="#c9a84c" strokeWidth="2"/>
                </svg>
                <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '1.2rem', color: '#f0e8d8', marginBottom: '12px' }}>Message Received</h3>
                <p style={{ color: '#8a7f72' }}>Thank you for reaching out. We will be in touch shortly with care and attention.</p>
              </div>
            ) : (
              <div>
                <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '1rem', letterSpacing: '0.1em', color: '#f0e8d8', marginBottom: '8px' }}>Send Us a Message</h3>
                <p style={{ color: '#8a7f72', fontSize: '0.85rem', marginBottom: '32px' }}>Fill out the form below and we&apos;ll respond within one business day.</p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'Cinzel, serif', fontSize: '0.6rem', letterSpacing: '0.2em', color: '#c9a84c', marginBottom: '8px' }}>FULL NAME *</label>
                    <input type="text" placeholder="Your full name" value={form.name} onChange={e => setForm({...form, name: e.target.value})}/>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'Cinzel, serif', fontSize: '0.6rem', letterSpacing: '0.2em', color: '#c9a84c', marginBottom: '8px' }}>PHONE</label>
                    <input type="tel" placeholder="Your phone number" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}/>
                  </div>
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', fontFamily: 'Cinzel, serif', fontSize: '0.6rem', letterSpacing: '0.2em', color: '#c9a84c', marginBottom: '8px' }}>EMAIL ADDRESS *</label>
                  <input type="email" placeholder="your@email.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})}/>
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', fontFamily: 'Cinzel, serif', fontSize: '0.6rem', letterSpacing: '0.2em', color: '#c9a84c', marginBottom: '8px' }}>SERVICE OF INTEREST</label>
                  <select value={form.service} onChange={e => setForm({...form, service: e.target.value})}
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(201,168,76,0.2)', color: form.service ? '#f0e8d8' : '#8a7f72', padding: '14px 18px', width: '100%', outline: 'none' }}>
                    <option value="" style={{ background: '#1a1814' }}>Select a service...</option>
                    <option value="Single Mausoleum" style={{ background: '#1a1814' }}>Single Mausoleum</option>
                    <option value="Double Mausoleum" style={{ background: '#1a1814' }}>Double Mausoleum</option>
                    <option value="Four Crypt Mausoleum" style={{ background: '#1a1814' }}>Four Crypt Mausoleum</option>
                    <option value="Six Crypt Mausoleum" style={{ background: '#1a1814' }}>Six Crypt Mausoleum</option>
                    <option value="Estate Mausoleum" style={{ background: '#1a1814' }}>Estate Mausoleum</option>
                    <option value="Columbarium" style={{ background: '#1a1814' }}>Columbarium</option>
                    <option value="Cremation Bench" style={{ background: '#1a1814' }}>Cremation Bench</option>
                    <option value="Cemetery Restoration" style={{ background: '#1a1814' }}>Cemetery Restoration</option>
                    <option value="General Inquiry" style={{ background: '#1a1814' }}>General Inquiry</option>
                  </select>
                </div>

                <div style={{ marginBottom: '32px' }}>
                  <label style={{ display: 'block', fontFamily: 'Cinzel, serif', fontSize: '0.6rem', letterSpacing: '0.2em', color: '#c9a84c', marginBottom: '8px' }}>MESSAGE *</label>
                  <textarea rows={5} placeholder="Tell us about your needs, timeline, and any specific requirements..." value={form.message} onChange={e => setForm({...form, message: e.target.value})} style={{ resize: 'vertical' }}/>
                </div>

                {status === 'error' && (
                  <div style={{ background: 'rgba(180,40,40,0.1)', border: '1px solid rgba(180,40,40,0.3)', padding: '12px 16px', marginBottom: '20px', color: '#e07070', fontSize: '0.85rem' }}>
                    Something went wrong. Please try again or email us directly.
                  </div>
                )}

                <button
                  onClick={handleSubmit}
                  disabled={status === 'sending'}
                  className="btn-gold"
                  style={{ width: '100%', textAlign: 'center', cursor: status === 'sending' ? 'not-allowed' : 'pointer', opacity: status === 'sending' ? 0.7 : 1 }}
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>

                <p style={{ color: '#3d3830', fontSize: '0.75rem', textAlign: 'center', marginTop: '16px' }}>
                  Your inquiry is handled with complete confidentiality and respect.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}