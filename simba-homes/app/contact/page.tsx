'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const services = ['Custom Home', 'Spec Home', 'Land Development', 'Subdivision', 'Lot Services', 'Renovation', 'General Inquiry'];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', budget: '', message: '' });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setSent(true);
      } else {
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setError('Network error. Please try again or call us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: '#252D3D',
    border: '1px solid rgba(255,255,255,0.08)',
    color: '#fff',
    padding: '14px 18px',
    fontSize: '14px',
    fontFamily: 'Inter, sans-serif',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: 'Barlow Condensed, sans-serif',
    fontSize: '11px',
    fontWeight: 700,
    letterSpacing: '0.2em',
    textTransform: 'uppercase' as const,
    color: '#718096',
    marginBottom: '8px',
  };

  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', height: '380px', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <Image src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1400&q=80" alt="Contact Simba Homes" fill style={{ objectFit: 'cover' }} unoptimized />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(30,37,51,0.9)' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: '#D01C2A' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1200px', margin: '0 auto', padding: '0 48px', width: '100%' }}>
          <div className="section-label" style={{ marginBottom: '12px' }}>Let&apos;s Build Together</div>
          <h1 style={{ fontSize: 'clamp(40px, 6vw, 72px)', color: '#fff' }}>CONTACT US</h1>
          <p style={{ color: '#718096', fontSize: '16px', marginTop: '12px' }}>Ready to start your project? We&apos;d love to hear from you.</p>
          <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
            <Link href="/" style={{ fontSize: '13px', color: '#718096' }}>Home</Link>
            <span style={{ color: '#4A5568' }}>/</span>
            <span style={{ fontSize: '13px', color: '#D01C2A' }}>Contact</span>
          </div>
        </div>
      </section>

      {/* Main contact section */}
      <section style={{ background: '#1E2533', padding: '96px 48px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '64px', alignItems: 'start' }}>

          {/* Left — Contact info */}
          <div>
            <div className="section-label" style={{ marginBottom: '12px' }}>Reach Us</div>
            <h2 style={{ fontSize: 'clamp(26px, 3vw, 38px)', color: '#fff', marginBottom: '24px' }}>GET IN TOUCH</h2>
            <p style={{ fontSize: '14px', color: '#718096', lineHeight: 1.8, marginBottom: '40px' }}>
              Contact Parminder and our team to discuss your project. We respond to all inquiries within 24 hours.
            </p>

            {/* Contact cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
              <a href="tel:+17787077325" style={{ display: 'flex', gap: '16px', alignItems: 'center', background: '#252D3D', padding: '20px 24px', borderLeft: '3px solid #D01C2A' }}>
                <div style={{ width: '40px', height: '40px', background: '#D01C2A', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.09 1.18 2 2 0 012.08 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                </div>
                <div>
                  <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#718096', marginBottom: '2px' }}>Phone</div>
                  <div style={{ fontSize: '15px', color: '#fff', fontWeight: 500 }}>+1 778 707 7325</div>
                </div>
              </a>

              <a href="mailto:info@simbahomes.ca" style={{ display: 'flex', gap: '16px', alignItems: 'center', background: '#252D3D', padding: '20px 24px', borderLeft: '3px solid #D01C2A' }}>
                <div style={{ width: '40px', height: '40px', background: '#D01C2A', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#718096', marginBottom: '2px' }}>Email</div>
                  <div style={{ fontSize: '15px', color: '#fff', fontWeight: 500 }}>info@simbahomes.ca</div>
                </div>
              </a>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'center', background: '#252D3D', padding: '20px 24px', borderLeft: '3px solid #4A5568' }}>
                <div style={{ width: '40px', height: '40px', background: '#4A5568', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#718096', marginBottom: '2px' }}>Location</div>
                  <div style={{ fontSize: '15px', color: '#fff', fontWeight: 500 }}>British Columbia, Canada</div>
                </div>
              </div>

              <a href="https://instagram.com/simbahomes" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', gap: '16px', alignItems: 'center', background: '#252D3D', padding: '20px 24px', borderLeft: '3px solid #4A5568' }}>
                <div style={{ width: '40px', height: '40px', background: '#4A5568', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="#fff"/></svg>
                </div>
                <div>
                  <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#718096', marginBottom: '2px' }}>Instagram</div>
                  <div style={{ fontSize: '15px', color: '#fff', fontWeight: 500 }}>@simbahomes</div>
                </div>
              </a>
            </div>

            {/* Office hours */}
            <div style={{ background: '#252D3D', padding: '24px', borderTop: '2px solid #D01C2A' }}>
              <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#D01C2A', marginBottom: '12px' }}>Response Time</div>
              <p style={{ fontSize: '13px', color: '#718096', lineHeight: 1.7 }}>We respond to all inquiries within <strong style={{ color: '#CBD5E0' }}>24 business hours</strong>. For urgent matters, call us directly at +1 778 707 7325.</p>
            </div>
          </div>

          {/* Right — Form */}
          <div style={{ background: '#252D3D', padding: '48px', borderTop: '4px solid #D01C2A' }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ width: '72px', height: '72px', background: '#D01C2A', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                  <svg width="32" height="24" viewBox="0 0 32 24" fill="none"><path d="M2 12l8 8L30 2" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h3 style={{ fontSize: '28px', color: '#fff', marginBottom: '12px' }}>MESSAGE RECEIVED!</h3>
                <p style={{ color: '#718096', fontSize: '15px', lineHeight: 1.7 }}>Thank you for reaching out to Simba Homes. Parminder will contact you within 24 business hours to discuss your project.</p>
                <button onClick={() => setSent(false)} style={{ marginTop: '24px', background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: '#CBD5E0', padding: '10px 24px', fontFamily: 'Barlow Condensed, sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', cursor: 'pointer' }}>Send Another Message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontSize: '24px', color: '#fff', marginBottom: '8px' }}>SEND US A MESSAGE</h3>
                <p style={{ fontSize: '13px', color: '#718096', marginBottom: '32px' }}>Fill out the form and we&apos;ll be in touch within 24 hours.</p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                  <div>
                    <label style={labelStyle}>Full Name *</label>
                    <input required value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="John Smith" style={inputStyle}
                      onFocus={e => e.target.style.borderColor = '#D01C2A'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Email Address *</label>
                    <input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="john@email.com" style={inputStyle}
                      onFocus={e => e.target.style.borderColor = '#D01C2A'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                  <div>
                    <label style={labelStyle}>Phone Number</label>
                    <input value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} placeholder="+1 (778) 000-0000" style={inputStyle}
                      onFocus={e => e.target.style.borderColor = '#D01C2A'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Service Needed</label>
                    <select value={form.service} onChange={e => setForm({...form, service: e.target.value})} style={{...inputStyle, cursor: 'pointer'}}>
                      <option value="" style={{background:'#252D3D'}}>Select a service</option>
                      {services.map(s => <option key={s} value={s} style={{background:'#252D3D'}}>{s}</option>)}
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label style={labelStyle}>Approximate Budget</label>
                  <select value={form.budget} onChange={e => setForm({...form, budget: e.target.value})} style={{...inputStyle, cursor: 'pointer'}}>
                    <option value="" style={{background:'#252D3D'}}>Select budget range</option>
                    {['Under $300K', '$300K - $500K', '$500K - $750K', '$750K - $1M', '$1M - $2M', '$2M+', 'Not sure yet'].map(b => (
                      <option key={b} value={b} style={{background:'#252D3D'}}>{b}</option>
                    ))}
                  </select>
                </div>

                <div style={{ marginBottom: '28px' }}>
                  <label style={labelStyle}>Project Details *</label>
                  <textarea required rows={5} value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                    placeholder="Tell us about your project — location, timeline, size, specific requirements..." style={{...inputStyle, resize: 'vertical' as const}}
                    onFocus={e => e.target.style.borderColor = '#D01C2A'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                  />
                </div>

                {error && (
                  <div style={{ background: 'rgba(208,28,42,0.1)', border: '1px solid rgba(208,28,42,0.3)', color: '#ff6b6b', padding: '12px 16px', fontSize: '13px', marginBottom: '16px', lineHeight: 1.5 }}>
                    {error}
                  </div>
                )}
                <button type="submit" disabled={submitting} className="btn-primary" style={{ width: '100%', border: 'none', cursor: submitting ? 'wait' : 'pointer', opacity: submitting ? 0.8 : 1 }}>
                  {submitting ? 'Sending...' : 'Send Message →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          section > div[style*="grid-template-columns: 1fr 1.6fr"] { grid-template-columns: 1fr !important; }
          form > div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) { section { padding-left: 20px !important; padding-right: 20px !important; } }
      `}</style>
    </>
  );
}