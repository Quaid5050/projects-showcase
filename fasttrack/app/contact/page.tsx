'use client';
import { useState } from 'react';
import PageHero from '../components/PageHero';

const ADMIN_PASS = 'FTRack2024!';

const faqs = [
  { q: 'Do you ship nationwide?', a: 'Yes. We ship all equipment across the continental United States. Freight shipping is arranged through our logistics partners.' },
  { q: 'How long does a custom build take?', a: 'Custom builds typically take 4–8 weeks from design approval to delivery, depending on scope.' },
  { q: 'Do you offer installation?', a: 'Yes, installation service is available in most regions. Contact us to confirm availability in your area.' },
  { q: 'What is your warranty policy?', a: 'All equipment comes with a 2-year structural warranty. Extended plans are available.' },
  { q: 'Do you offer bulk/corporate pricing?', a: 'Absolutely. Corporate clients receive custom pricing based on order volume. Contact us for a tailored quote.' },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle');
  const [openFaq, setOpenFaq] = useState<number|null>(null);
  const [showModal, setShowModal] = useState(false);
  const [pass, setPass] = useState('');
  const [passErr, setPassErr] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const [showPw, setShowPw] = useState(false);

  const change = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault(); setStatus('sending');
    try {
      const r = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      if (r.ok) { setStatus('sent'); setForm({ name: '', email: '', phone: '', subject: '', message: '' }); }
      else setStatus('error');
    } catch { setStatus('error'); }
  };

  const tryLogin = () => {
    if (pass === ADMIN_PASS) { setUnlocked(true); setShowModal(false); setPassErr(''); }
    else setPassErr('Incorrect password. Try again.');
  };

  return (
    <>
      <PageHero title="GET IN" highlight="TOUCH"
        subtitle="Whether it's a single rack or a full commercial facility — reach out and let's build something great."
        breadcrumb="Contact" bg="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=1600&q=80" />

      {/* Main form section */}
      <section style={{ padding: '96px 0', background: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: 48, alignItems: 'start' }} className="contact-pg-grid">

            {/* Sidebar */}
            <div>
              <div style={{ background: '#111', padding: '40px 36px', marginBottom: 16 }}>
                <h3 className="font-display" style={{ color: '#fff', fontSize: 26, marginBottom: 36 }}>CONTACT INFO</h3>
                {[
                  { label: 'Email', val: 'thackerdalescott@gmail.com', href: 'mailto:thackerdalescott@gmail.com' },
                  { label: 'Phone', val: '+1 (618) 825-8282', href: 'tel:+16188258282' },
                  { label: 'Hours', val: 'Mon–Fri: 9AM–6PM CST', href: null },
                ].map(item => (
                  <div key={item.label} style={{ marginBottom: 24, paddingBottom: 24, borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#4b5563', marginBottom: 5 }}>{item.label}</div>
                    {item.href
                      ? <a href={item.href} style={{ color: '#e5e7eb', fontSize: 14, textDecoration: 'none', transition: 'color 0.2s', wordBreak: 'break-all' }}
                          onMouseEnter={e=>(e.currentTarget.style.color='#DC2626')} onMouseLeave={e=>(e.currentTarget.style.color='#e5e7eb')}>{item.val}</a>
                      : <span style={{ color: '#e5e7eb', fontSize: 14 }}>{item.val}</span>}
                  </div>
                ))}
                <div>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#4b5563', marginBottom: 12 }}>Social</div>
                  <div style={{ display: 'flex', gap: 10 }}>
                    {[
                      <svg key="ig" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
                      <svg key="fb" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
                    ].map((icon, i) => (
                      <a key={i} href="#" style={{ width: 36, height: 36, border: '1px solid rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6b7280', textDecoration: 'none', transition: 'all 0.2s' }}
                        onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.color='#DC2626';(e.currentTarget as HTMLElement).style.borderColor='#DC2626';}}
                        onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.color='#6b7280';(e.currentTarget as HTMLElement).style.borderColor='rgba(255,255,255,0.12)';}}
                      >{icon}</a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Response time badge */}
              <div style={{ background: '#DC2626', padding: '24px 28px', marginBottom: 16 }}>
                <div className="font-display" style={{ color: '#fff', fontSize: 40, lineHeight: 1 }}>24H</div>
                <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: 12, letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: 4 }}>Average Response Time</div>
              </div>

              {/* Admin */}
              {!unlocked ? (
                <button onClick={() => setShowModal(true)}
                  style={{ width: '100%', padding: '14px', border: '2px dashed #d1d5db', background: 'none', cursor: 'pointer', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9ca3af', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, transition: 'all 0.2s' }}
                  onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor='#DC2626';(e.currentTarget as HTMLElement).style.color='#DC2626';}}
                  onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor='#d1d5db';(e.currentTarget as HTMLElement).style.color='#9ca3af';}}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  Admin Access
                </button>
              ) : (
                <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', padding: '12px 16px', fontSize: 13, color: '#16a34a', fontWeight: 600, textAlign: 'center' }}>
                  ✓ Admin panel active
                </div>
              )}
            </div>

            {/* Form */}
            <div style={{ background: '#f9fafb', padding: '48px 44px' }} className="contact-form-box">
              <h3 className="font-display" style={{ fontSize: 30, color: '#111', marginBottom: 36 }}>SEND A MESSAGE</h3>
              {status === 'sent' ? (
                <div style={{ textAlign: 'center', padding: '48px 0' }}>
                  <div style={{ width: 64, height: 64, background: '#DC2626', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <h4 className="font-display" style={{ fontSize: 28, color: '#111', marginBottom: 8 }}>MESSAGE SENT!</h4>
                  <p style={{ color: '#6b7280', marginBottom: 24 }}>We'll respond within 24 hours.</p>
                  <button onClick={() => setStatus('idle')} className="btn-outline-red">Send Another</button>
                </div>
              ) : (
                <form onSubmit={submit}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }} className="form-2col">
                    <div><label className="field-label">Full Name *</label><input className="field" type="text" name="name" required value={form.name} onChange={change} placeholder="John Doe" /></div>
                    <div><label className="field-label">Email *</label><input className="field" type="email" name="email" required value={form.email} onChange={change} placeholder="john@example.com" /></div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }} className="form-2col">
                    <div><label className="field-label">Phone</label><input className="field" type="tel" name="phone" value={form.phone} onChange={change} placeholder="+1 (000) 000-0000" /></div>
                    <div>
                      <label className="field-label">Subject *</label>
                      <select className="field" name="subject" required value={form.subject} onChange={change}>
                        <option value="">Select...</option>
                        <option>Equipment Inquiry</option>
                        <option>Training Programs</option>
                        <option>Custom Build</option>
                        <option>Corporate Solutions</option>
                        <option>Pricing Request</option>
                        <option>Support / Maintenance</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div style={{ marginBottom: 28 }}>
                    <label className="field-label">Message *</label>
                    <textarea className="field" name="message" required rows={6} value={form.message} onChange={change} placeholder="Tell us about your project..." style={{ resize: 'none' }} />
                  </div>
                  {status === 'error' && (
                    <div style={{ background: '#fef2f2', border: '1px solid #fecaca', color: '#dc2626', padding: '12px 16px', fontSize: 13, marginBottom: 20 }}>
                      Something went wrong. Please try again or email us directly.
                    </div>
                  )}
                  <button type="submit" className="btn-red" disabled={status === 'sending'} style={{ opacity: status==='sending'?.6:1 }}>
                    {status === 'sending' ? 'Sending...' : <>Send Message <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg></>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '80px 0', background: '#f9fafb' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="section-label" style={{ justifyContent: 'center' }}><span>FAQ</span></div>
            <h2 className="font-display" style={{ fontSize: 'clamp(36px,5vw,60px)', color: '#111', lineHeight: 1 }}>
              COMMON <span style={{ color: '#DC2626' }}>QUESTIONS</span>
            </h2>
          </div>
          <div>
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderBottom: '1px solid #e5e7eb' }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: '100%', padding: '20px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
                  <span style={{ fontSize: 16, fontWeight: 600, color: '#111' }}>{faq.q}</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round"
                    style={{ transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s', flexShrink: 0 }}>
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </button>
                {openFaq === i && (
                  <div style={{ paddingBottom: 20, color: '#6b7280', fontSize: 15, lineHeight: 1.75 }}>{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admin Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div style={{ background: '#fff', padding: '40px', width: '100%', maxWidth: 400, margin: '0 16px' }} onClick={e => e.stopPropagation()}>
            <div style={{ textAlign: 'center', marginBottom: 28 }}>
              <div style={{ width: 56, height: 56, background: '#fef2f2', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="1.8" strokeLinecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              </div>
              <h3 className="font-display" style={{ fontSize: 26, color: '#111' }}>ADMIN ACCESS</h3>
              <p style={{ color: '#6b7280', fontSize: 14, marginTop: 6 }}>Enter password to continue</p>
            </div>
            <div style={{ position: 'relative', marginBottom: 12 }}>
              <input className="field" type={showPw ? 'text' : 'password'} value={pass}
                onChange={e => { setPass(e.target.value); setPassErr(''); }}
                onKeyDown={e => e.key === 'Enter' && tryLogin()}
                placeholder="Password" autoFocus style={{ paddingRight: 48 }} />
              <button onClick={() => setShowPw(!showPw)} style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#9ca3af' }}>
                {showPw
                  ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                  : <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>}
              </button>
            </div>
            {passErr && <p style={{ color: '#DC2626', fontSize: 13, marginBottom: 12 }}>{passErr}</p>}
            <button onClick={tryLogin} className="btn-red" style={{ width: '100%', justifyContent: 'center', marginBottom: 10 }}>Unlock</button>
            <button onClick={() => { setShowModal(false); setPass(''); setPassErr(''); }}
              style={{ width: '100%', background: 'none', border: 'none', color: '#9ca3af', fontSize: 13, cursor: 'pointer', padding: '8px' }}>Cancel</button>
          </div>
        </div>
      )}

      <style>{`
        @media(max-width:960px){.contact-pg-grid{grid-template-columns:1fr!important}}
        @media(max-width:580px){.contact-form-box{padding:28px 20px!important} .form-2col{grid-template-columns:1fr!important}}
      `}</style>
    </>
  );
}
