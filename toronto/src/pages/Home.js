import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>, title: 'Affidavits', desc: 'Sworn written statements used as evidence in legal proceedings, professionally commissioned.' },
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, title: 'Statutory Declarations', desc: 'Formal declarations required for government, insurance, or legal applications across Ontario.' },
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>, title: 'Consent Letters', desc: 'Required documentation for children travelling without both parents or guardians.' },
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>, title: 'Power of Attorney', desc: 'Grant legal authority for financial, property, or personal care decisions — properly notarized.' },
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>, title: 'Real Estate Documents', desc: 'Comprehensive notarial services for real estate transactions, transfers, and mortgage documents.' },
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>, title: 'Sworn Statements', desc: 'Court-accepted sworn statements for legal, employment, and institutional requirements.' },
];

const stats = [
  { num: '5 min', label: 'Average Service Time' },
  { num: '$35', label: 'Starting Price' },
  { num: 'Same Day', label: 'Appointments' },
  { num: 'Virtual', label: 'Service Available' },
];

export default function Home() {
  return (
    <div style={{ paddingTop: 70 }}>

      {/* ── HERO ── */}
      <section style={{
        minHeight: '92vh', background: 'var(--navy)', position: 'relative',
        overflow: 'hidden', display: 'flex', alignItems: 'center',
      }}>
        {/* BG grid */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(26,75,140,0.12) 1px,transparent 1px),linear-gradient(90deg,rgba(26,75,140,0.12) 1px,transparent 1px)', backgroundSize: '60px 60px' }}/>
        <div style={{ position: 'absolute', top: '-15%', right: '-5%', width: 600, height: 600, background: 'radial-gradient(circle,rgba(26,75,140,0.45) 0%,transparent 70%)', pointerEvents: 'none' }}/>
        <div style={{ position: 'absolute', bottom: '-25%', left: '-5%', width: 500, height: 500, background: 'radial-gradient(circle,rgba(184,150,90,0.12) 0%,transparent 70%)', pointerEvents: 'none' }}/>

        {/* Hero image — right side */}
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: '44%',
          overflow: 'hidden',
        }}>
          <img
            src="https://images.unsplash.com/photo-1589578527966-fdac0f44566c?w=900&q=80"
            alt="Legal office"
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.22 }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, var(--navy) 0%, transparent 40%)' }}/>
        </div>

        <div style={{ position: 'relative', zIndex: 2, maxWidth: 1200, margin: '0 auto', padding: '60px 5%', width: '100%' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: '1px solid rgba(184,150,90,0.3)', padding: '7px 16px', borderRadius: 100, marginBottom: 28 }}>
            <span style={{ width: 6, height: 6, background: 'var(--gold)', borderRadius: '50%', animation: 'pulse 2s infinite' }}/>
            <span style={{ fontSize: 11, color: 'var(--gold)', letterSpacing: 2, textTransform: 'uppercase', fontWeight: 600 }}>Toronto's Trusted Notary</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(44px,6vw,84px)', fontWeight: 900, color: '#fff', lineHeight: 1.02, marginBottom: 22, maxWidth: 620 }}>
            Legal Documents<br/>Done <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Right.</em><br/>Done Fast.
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.58)', maxWidth: 480, lineHeight: 1.75, marginBottom: 44, fontWeight: 300 }}>
            Professional notary services in the heart of Toronto. Walk-ins welcome. Same-day appointments available. In and out in 5 minutes.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Link to="/booking" className="btn-primary">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              Book Appointment
            </Link>
            <Link to="/services" className="btn-secondary">
              View Services
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', gap: 44, marginTop: 64, paddingTop: 40, borderTop: '1px solid rgba(184,150,90,0.2)', flexWrap: 'wrap' }}>
            {stats.map(s => (
              <div key={s.label}>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 36, fontWeight: 700, color: 'var(--gold)' }}>{s.num}</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)', letterSpacing: 1, textTransform: 'uppercase', marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.5;transform:scale(1.4)}}`}</style>
      </section>

      {/* ── TRUST BAR ── */}
      <div style={{ background: '#12254a', padding: '18px 5%', borderBottom: '1px solid rgba(184,150,90,0.12)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'center', gap: 44, flexWrap: 'wrap' }}>
          {['Licensed Notary Public', 'Barrister & Solicitor', 'TTC Subway Accessible', 'Virtual Commissioning Available'].map(t => (
            <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 9, color: 'rgba(255,255,255,0.65)', fontSize: 13 }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              {t}
            </div>
          ))}
        </div>
      </div>

      {/* ── SERVICES ── */}
      <section style={{ padding: '96px 5%', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 24 }}>
            <div>
              <span className="section-label">What We Do</span>
              <h2 className="section-title">Our <span>Notary</span> Services</h2>
              <p className="section-sub">Fast, professional, and legally binding. Every document handled with precision.</p>
            </div>
            <Link to="/services" className="btn-primary">All Services</Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 2, background: 'var(--navy)' }} className="services-grid">
            {services.map(s => (
              <div key={s.title} style={{ background: '#fff', padding: '44px 36px', transition: 'background 0.3s', cursor: 'default', position: 'relative', overflow: 'hidden' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--cream)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#fff'; }}>
                <div style={{ width: 50, height: 50, background: 'rgba(26,75,140,0.07)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 22, color: 'var(--blue)' }}>
                  {s.icon}
                </div>
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 19, fontWeight: 700, color: 'var(--navy)', marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontSize: 13.5, color: 'var(--text)', lineHeight: 1.7 }}>{s.desc}</p>
                <div style={{ marginTop: 18, fontSize: 12, fontWeight: 700, color: 'var(--gold)', letterSpacing: 0.5 }}>From $35</div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:900px){.services-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* ── IMAGE BREAK — Toronto city ── */}
      <div style={{ height: 420, position: 'relative', overflow: 'hidden' }}>
        <img
          src="https://images.unsplash.com/photo-1566438503908-4f8377461f58?q=80"
          alt="Toronto skyline"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 60%' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,22,40,0.72)' }}/>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', textAlign: 'center', padding: '0 5%' }}>
          <span style={{ fontSize: 11, color: 'var(--gold)', letterSpacing: 3, textTransform: 'uppercase', fontWeight: 600, marginBottom: 16 }}>Serving Toronto</span>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(28px,4vw,48px)', fontWeight: 700, color: '#fff', marginBottom: 16, maxWidth: 600 }}>
            Conveniently Located on the TTC Subway Line
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', marginBottom: 32 }}>Easy access from anywhere in the GTA. Virtual appointments also available.</p>
          <Link to="/contact" className="btn-primary">Get Directions</Link>
        </div>
      </div>

      {/* ── WHY US ── */}
      <section style={{ background: 'var(--navy)', padding: '96px 5%', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, right: 0, width: 480, height: '100%', background: 'linear-gradient(135deg,rgba(26,75,140,0.25),transparent)', pointerEvents: 'none' }}/>
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <span className="section-label">Why Toronto Notary Office</span>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(30px,4vw,50px)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: 16 }}>
            The <span style={{ color: 'var(--gold)' }}>Difference</span><br/>You Can Feel
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', marginBottom: 56, maxWidth: 480, lineHeight: 1.8 }}>We built our practice around your convenience — not ours.</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }} className="why-grid">
            {[
              { n: '01', title: 'In & Out in 5 Minutes', body: "No long waits. No unnecessary complexity. Your time is valuable — we respect that with every appointment." },
              { n: '02', title: 'Same-Day Availability', body: "Urgent document needs don't wait. Same-day appointments are usually available — just call or book online." },
              { n: '03', title: 'Virtual Commissioning', body: "Can't make it in person? Our virtual commissioning service lets you get documents notarized from anywhere." },
              { n: '04', title: 'Subway Accessible', body: "Conveniently located right on the TTC subway line. Easy to reach from anywhere in the GTA." },
            ].map(w => (
              <div key={w.n} style={{ border: '1px solid rgba(184,150,90,0.18)', padding: '36px', borderRadius: 2, transition: 'all 0.3s', cursor: 'default' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.background = 'rgba(184,150,90,0.04)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(184,150,90,0.18)'; e.currentTarget.style.background = 'transparent'; }}>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 44, fontWeight: 900, color: 'rgba(184,150,90,0.18)', marginBottom: 14, lineHeight: 1 }}>{w.n}</div>
                <h3 style={{ fontSize: 16, fontWeight: 600, color: '#fff', marginBottom: 10 }}>{w.title}</h3>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>{w.body}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){.why-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: 'var(--gold)', padding: '80px 5%' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(28px,4vw,42px)', fontWeight: 700, color: 'var(--navy)', marginBottom: 14 }}>Ready to Get Started?</h2>
          <p style={{ color: 'rgba(10,22,40,0.65)', fontSize: 16, marginBottom: 36, lineHeight: 1.7 }}>Book your appointment online. Receive a confirmation email. Show up — we'll handle the rest.</p>
          <Link to="/booking" className="btn-dark" style={{ margin: '0 auto' }}>
            Book Appointment Now
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </Link>
        </div>
      </section>

    </div>
  );
}
