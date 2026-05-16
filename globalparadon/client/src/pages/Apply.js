import React, { useState } from 'react';
import api from '../api';
import { toast } from 'react-toastify';

const SERVICES = ['Canadian Pardon / Record Suspension', 'US Entry Waiver', 'NEXUS Application', 'Multiple Services', 'Not Sure — Need Advice'];
const PROVINCES = ['Ontario','British Columbia','Alberta','Quebec','Manitoba','Saskatchewan','Nova Scotia','New Brunswick','Prince Edward Island','Newfoundland and Labrador','Northwest Territories','Yukon','Nunavut'];

const CheckIcon = ({ size = 14, color = '#0B1F3A' }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>);
const ArrowRight = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>);
const PhoneSVG = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91A16 16 0 0 0 15 16.91l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>);
const MailSVG = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>);
const MapSVG = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>);
const ClockSVG = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>);
const LockSVG = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>);

export default function Apply() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', province: '', service: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post('/leads', { ...form, source: 'Apply Page' });
      setSubmitted(true);
      toast.success("Application submitted! We'll be in touch within 24 hours.");
    } catch { toast.error('Something went wrong. Please try again.'); }
    setLoading(false);
  };

  const inp = { background: 'rgba(255,255,255,0.07)', borderColor: 'rgba(255,255,255,0.15)', color: '#fff' };

  return (
    <>
      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg,#0B1F3A,#1a3a5c)', paddingTop: 70, paddingBottom: 64, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 60% 50%, rgba(201,168,76,0.07) 0%, transparent 60%)' }} />
        <div className="container" style={{ textAlign: 'center', position: 'relative' }}>
          <div style={{ display: 'inline-block', background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.3)', color: '#E8C46A', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '2.5px', textTransform: 'uppercase', padding: '6px 16px', borderRadius: 20, marginBottom: '1.2rem' }}>Get Started</div>
          <h1 style={{ fontFamily: 'Playfair Display,serif', fontSize: '2.8rem', color: '#fff', marginBottom: '1rem', lineHeight: 1.15 }}>Apply Now — Free Consultation</h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 520, margin: '0 auto', fontSize: '1rem', lineHeight: 1.75 }}>Complete the form below and a Global Pardon & Waivers specialist will review your case and contact you within 24 business hours — no obligation, 100% confidential.</p>
        </div>
      </div>

      {/* Main */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem', alignItems: 'start' }}>

            {/* Left — Info */}
            <div>
              <h2 style={{ fontFamily: 'Playfair Display,serif', fontSize: '1.9rem', color: '#0B1F3A', marginBottom: '1rem', lineHeight: 1.2 }}>Let's Talk About Your Future</h2>
              <p style={{ color: '#6b7280', lineHeight: 1.8, marginBottom: '2rem', fontSize: '0.95rem' }}>GlobalPardon has helped thousands of Canadians remove the barriers imposed by a criminal record. Tell us about your situation and we'll guide you to the right solution — completely free.</p>

              {/* Contact Details */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                {[
                  [<PhoneSVG />, 'Toll-Free', '1-877-226-6612'],
                  [<PhoneSVG />, 'Direct Line', '647-699-8141'],
                  [<MailSVG />, 'Email', 'info@globalpardon.com'],
                  [<MapSVG />, 'Office', '77 City Centre Dr, Mississauga, ON L5B 1M2'],
                  [<ClockSVG />, 'Hours', 'Mon–Fri: 9:00 AM – 5:00 PM EST'],
                ].map(([icon, label, val]) => (
                  <div key={label} style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                    <div style={{ width: 40, height: 40, background: 'rgba(11,31,58,0.06)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#0B1F3A' }}>{icon}</div>
                    <div>
                      <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: 1 }}>{label}</div>
                      <div style={{ fontSize: '0.92rem', color: '#0B1F3A', fontWeight: 500, marginTop: 2 }}>{val}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Privacy box */}
              <div style={{ background: 'rgba(201,168,76,0.07)', border: '1.5px solid rgba(201,168,76,0.25)', borderRadius: 8, padding: '1.4rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                  <LockSVG />
                  <span style={{ fontWeight: 700, fontSize: '0.9rem', color: '#0B1F3A' }}>Our Privacy Guarantee</span>
                </div>
                <p style={{ fontSize: '0.85rem', color: '#6b7280', lineHeight: 1.7, margin: 0 }}>All information submitted is protected under Canada's PIPEDA privacy legislation. Your data is encrypted, never sold, and only reviewed by our certified specialists. We take your privacy as seriously as our own.</p>
              </div>

              {/* Why apply */}
              <h3 style={{ fontFamily: 'Playfair Display,serif', fontSize: '1.2rem', color: '#0B1F3A', marginBottom: '1rem' }}>What Happens After You Apply?</h3>
              {[
                ['Within 24 Hours', 'A specialist reviews your case and calls or emails you to discuss your options.'],
                ['Free Eligibility Assessment', 'We confirm which services apply to your situation and explain the full process.'],
                ['Clear Pricing', 'You receive a complete quote with no hidden fees before any commitment.'],
                ['You Decide', 'If you choose to proceed, we begin immediately. If not, no pressure — ever.'],
              ].map(([title, desc]) => (
                <div key={title} style={{ display: 'flex', gap: 12, marginBottom: '0.9rem', alignItems: 'flex-start' }}>
                  <div style={{ width: 22, height: 22, background: '#C9A84C', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                    <CheckIcon size={11} color="#0B1F3A" />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#0B1F3A', marginBottom: 2 }}>{title}</div>
                    <div style={{ fontSize: '0.84rem', color: '#6b7280', lineHeight: 1.65 }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right — Form */}
            <div style={{ background: '#0B1F3A', borderRadius: 12, padding: '2.5rem', boxShadow: '0 24px 64px rgba(11,31,58,0.2)' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                  <div style={{ width: 70, height: 70, background: 'rgba(34,197,94,0.12)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', border: '2px solid rgba(34,197,94,0.3)' }}>
                    <CheckIcon size={30} color="#4ade80" />
                  </div>
                  <h3 style={{ fontFamily: 'Playfair Display,serif', fontSize: '1.8rem', color: '#E8C46A', marginBottom: '0.8rem' }}>Application Submitted!</h3>
                  <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, fontSize: '0.95rem' }}>Thank you! A GlobalPardon specialist will review your case and contact you within <strong style={{ color: '#fff' }}>24 business hours</strong>.</p>
                  <div style={{ marginTop: '2rem', padding: '1rem', background: 'rgba(255,255,255,0.06)', borderRadius: 8, fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)' }}>
                    Need immediate help? Call us at <strong style={{ color: '#E8C46A' }}>1-877-226-6612</strong>
                  </div>
                </div>
              ) : (
                <>
                  <h3 style={{ fontFamily: 'Playfair Display,serif', fontSize: '1.6rem', color: '#fff', marginBottom: 4 }}>Start Your Application</h3>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', marginBottom: '1.8rem', paddingBottom: '1.4rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>Free consultation — no commitment required</p>
                  <form onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="form-group">
                        <label style={{ color: 'rgba(255,255,255,0.7)' }}>First Name</label>
                        <input style={inp} value={form.firstName} onChange={e => setForm({ ...form, firstName: e.target.value })} placeholder="First name" required />
                      </div>
                      <div className="form-group">
                        <label style={{ color: 'rgba(255,255,255,0.7)' }}>Last Name</label>
                        <input style={inp} value={form.lastName} onChange={e => setForm({ ...form, lastName: e.target.value })} placeholder="Last name" required />
                      </div>
                    </div>
                    <div className="form-group">
                      <label style={{ color: 'rgba(255,255,255,0.7)' }}>Email Address</label>
                      <input style={inp} type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" required />
                    </div>
                    <div className="form-group">
                      <label style={{ color: 'rgba(255,255,255,0.7)' }}>Phone Number</label>
                      <input style={inp} type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+1 (416) 000-0000" />
                    </div>
                    <div className="form-group">
                      <label style={{ color: 'rgba(255,255,255,0.7)' }}>Province / Territory</label>
                      <select style={{ ...inp, width: '100%', padding: '10px 13px', border: '1.5px solid rgba(255,255,255,0.15)', borderRadius: 4, fontFamily: 'inherit', fontSize: '0.9rem' }}
                        value={form.province} onChange={e => setForm({ ...form, province: e.target.value })}>
                        <option value="">Select your province...</option>
                        {PROVINCES.map(p => <option key={p} style={{ background: '#0B1F3A' }}>{p}</option>)}
                      </select>
                    </div>
                    <div className="form-group">
                      <label style={{ color: 'rgba(255,255,255,0.7)' }}>Service Needed</label>
                      <select style={{ ...inp, width: '100%', padding: '10px 13px', border: '1.5px solid rgba(255,255,255,0.15)', borderRadius: 4, fontFamily: 'inherit', fontSize: '0.9rem' }}
                        value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}>
                        <option value="">Select a service...</option>
                        {SERVICES.map(s => <option key={s} style={{ background: '#0B1F3A' }}>{s}</option>)}
                      </select>
                    </div>
                    <div className="form-group">
                      <label style={{ color: 'rgba(255,255,255,0.7)' }}>Message (Optional)</label>
                      <textarea style={{ ...inp, width: '100%', padding: '10px 13px', border: '1.5px solid rgba(255,255,255,0.15)', borderRadius: 4, fontFamily: 'inherit', fontSize: '0.9rem', resize: 'vertical' }}
                        value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                        placeholder="Briefly describe your situation — type of offence, how long ago, what service you think you need..." rows="4"></textarea>
                    </div>
                    <button type="submit" style={{ width: '100%', background: '#C9A84C', color: '#0B1F3A', border: 'none', padding: '14px', borderRadius: 4, fontFamily: 'inherit', fontSize: '0.9rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 6 }} disabled={loading}>
                      {loading ? 'Submitting...' : <><span>Submit Free Application</span> <ArrowRight /></>}
                    </button>
                    <p style={{ textAlign: 'center', marginTop: 12, fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5 }}>
                      <LockSVG /> Encrypted &amp; 100% Confidential — PIPEDA Compliant
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
        <style>{`@media(max-width:900px){section > .container > div{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* Bottom trust section */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">Why Thousands Choose Us</div>
            <h2 className="section-title">You're in Good Hands</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1.5rem' }}>
            {[
              { val: '5,000+', label: 'Clients Served', desc: 'Over 5,000 Canadians have cleared their records with GlobalPardon since 2010.' },
              { val: '98%', label: 'Approval Rate', desc: 'Industry-leading approval rate built on meticulous preparation and expertise.' },
              { val: '16+', label: 'Years Experience', desc: 'Established in 2010 — we\'ve seen every type of case and know how to win.' },
              { val: 'Free', label: 'Consultation', desc: 'Your first call costs you nothing. No pressure, no obligation — ever.' },
            ].map(b => (
              <div key={b.label} style={{ background: '#fff', borderRadius: 10, padding: '1.8rem', textAlign: 'center', border: '1px solid #e5eaf0', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
                <div style={{ fontFamily: 'Playfair Display,serif', fontSize: '2rem', fontWeight: 700, color: '#C9A84C', marginBottom: 4 }}>{b.val}</div>
                <div style={{ fontWeight: 700, fontSize: '0.875rem', color: '#0B1F3A', marginBottom: 8 }}>{b.label}</div>
                <div style={{ fontSize: '0.82rem', color: '#9ca3af', lineHeight: 1.65 }}>{b.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
