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
  { icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, num: '5 min', label: 'Average Service Time' },
  { icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>, num: '$35', label: 'Starting Price' },
  { icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>, num: 'Same Day', label: 'Appointments' },
  { icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>, num: 'Virtual', label: 'Service Available' },
];

export default function Home() {
  return (
    <div style={{ paddingTop: 70 }}>

      {/* ── HERO (light bg, dark text, visible image right) ── */}
      <section style={{ minHeight: '80vh', background: 'linear-gradient(135deg, #f0f4fa 0%, #e8edf6 40%, #d6e0f0 100%)', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        {/* Right side image — visible Toronto skyline + justice statue */}
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '50%', overflow: 'hidden' }}>
          <img src="https://images.unsplash.com/photo-1589578527966-fdac0f44566c?w=900&q=80" alt="Justice statue Toronto" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }}/>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, #f0f4fa 0%, rgba(240,244,250,0.4) 30%, transparent 60%)' }}/>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(240,244,250,0.3) 0%, transparent 40%)' }}/>
        </div>

        <div style={{ position: 'relative', zIndex: 2, maxWidth: 1200, margin: '0 auto', padding: '80px 5%', width: '100%' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: '1px solid rgba(26,75,140,0.2)', padding: '7px 16px', borderRadius: 100, marginBottom: 28, background: 'rgba(255,255,255,0.6)' }}>
            <span style={{ width: 6, height: 6, background: 'var(--blue)', borderRadius: '50%', animation: 'pulse 2s infinite' }}/>
            <span style={{ fontSize: 11, color: 'var(--blue)', letterSpacing: 2, textTransform: 'uppercase', fontWeight: 600 }}>Toronto's Trusted Notary</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(44px,6vw,78px)', fontWeight: 900, color: 'var(--navy)', lineHeight: 1.05, marginBottom: 22, maxWidth: 580 }}>
            Legal Documents<br/>Done <em style={{ color: 'var(--blue)', fontStyle: 'italic' }}>Right.</em><br/>Done Fast.
          </h1>
          <p style={{ fontSize: 17, color: 'var(--text)', maxWidth: 440, lineHeight: 1.75, marginBottom: 44, fontWeight: 400 }}>
            Professional notary services in the heart of Toronto. Walk-ins welcome.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Link to="/booking" style={{
              background: 'var(--navy)', color: '#fff',
              padding: '14px 32px', borderRadius: 4,
              fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase',
              border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 10,
              textDecoration: 'none', transition: 'all 0.3s',
            }}>
              Book an Appointment
            </Link>
            <Link to="/services" style={{
              background: 'transparent', color: 'var(--navy)',
              padding: '14px 32px', borderRadius: 4,
              fontSize: 13, fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase',
              border: '2px solid var(--navy)', cursor: 'pointer',
              display: 'inline-flex', alignItems: 'center', gap: 10,
              textDecoration: 'none', transition: 'all 0.3s',
            }}>
              Our Services
            </Link>
          </div>
        </div>
        <style>{`@keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.5;transform:scale(1.4)}}`}</style>
      </section>

      {/* ── STATS BAR (white) ── */}
      <section style={{ background: '#fff', padding: '48px 5%', borderBottom: '1px solid #eef1f6' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: 32 }}>
          {stats.map(s => (
            <div key={s.label} style={{ textAlign: 'center', minWidth: 140 }}>
              <div style={{ width: 56, height: 56, border: '2px solid var(--navy)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px', color: 'var(--navy)' }}>{s.icon}</div>
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 28, fontWeight: 700, color: 'var(--navy)' }}>{s.num}</div>
              <div style={{ fontSize: 10, color: 'var(--text)', letterSpacing: 1.5, textTransform: 'uppercase', marginTop: 4, fontWeight: 600 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TRUST BADGES (light) ── */}
      <div style={{ background: '#f9fafb', padding: '18px 5%', borderBottom: '1px solid #eef1f6' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'center', gap: 44, flexWrap: 'wrap' }}>
          {['Licensed Notary Public', 'Barrister & Solicitor', 'TTC Subway Accessible', 'Virtual Commissioning Available'].map(t => (
            <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 9, color: 'var(--text)', fontSize: 13 }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              {t}
            </div>
          ))}
        </div>
      </div>

      {/* ── SERVICES (white) ── */}
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
              <div key={s.title} style={{ background: '#fff', padding: '44px 36px', transition: 'background 0.3s', cursor: 'default' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--cream)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#fff'; }}>
                <div style={{ width: 50, height: 50, background: 'rgba(26,75,140,0.07)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 22, color: 'var(--blue)' }}>{s.icon}</div>
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 19, fontWeight: 700, color: 'var(--navy)', marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontSize: 13.5, color: 'var(--text)', lineHeight: 1.7 }}>{s.desc}</p>
                <div style={{ marginTop: 18, fontSize: 12, fontWeight: 700, color: 'var(--gold)', letterSpacing: 0.5 }}>From $35</div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:900px){.services-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* ── HOW IT WORKS (dark navy) ── */}
      <section style={{ background: 'var(--navy)', padding: '88px 5%', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(26,75,140,0.10) 1px,transparent 1px),linear-gradient(90deg,rgba(26,75,140,0.10) 1px,transparent 1px)', backgroundSize: '80px 80px', pointerEvents: 'none' }}/>
        <div style={{ position: 'absolute', top: '-20%', left: '-10%', width: 500, height: 500, background: 'radial-gradient(circle,rgba(26,75,140,0.3) 0%,transparent 70%)', pointerEvents: 'none' }}/>
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <span style={{ fontSize: 11, color: 'var(--gold)', letterSpacing: 3, textTransform: 'uppercase', fontWeight: 600, display: 'block', marginBottom: 12 }}>Simple Process</span>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(30px,4vw,48px)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: 16 }}>How It <span style={{ color: 'var(--gold)' }}>Works</span></h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', maxWidth: 520, margin: '0 auto', lineHeight: 1.8 }}>Three simple steps to get your documents notarized — fast and hassle-free.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 0 }} className="how-grid">
            {[
              { step: '01', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>, title: 'Book Online', desc: 'Choose your service, pick a time that works, and book in under 60 seconds.' },
              { step: '02', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>, title: 'Bring Your Documents', desc: 'Bring valid government ID and your unsigned documents. We handle the rest.' },
              { step: '03', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="20 6 9 17 4 12"/></svg>, title: 'Done in 5 Minutes', desc: 'Your documents are notarized, stamped, and legally binding. Walk in, walk out.' },
            ].map((item, i) => (
              <div key={item.step} style={{ padding: '44px 36px', borderRight: i < 2 ? '1px solid rgba(184,150,90,0.12)' : 'none', textAlign: 'center' }}>
                <div style={{ width: 64, height: 64, background: 'rgba(184,150,90,0.08)', border: '1px solid rgba(184,150,90,0.2)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', color: 'var(--gold)' }}>{item.icon}</div>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 13, fontWeight: 700, color: 'var(--gold)', letterSpacing: 2, marginBottom: 12 }}>STEP {item.step}</div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 12, fontFamily: "'Playfair Display',serif" }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){.how-grid{grid-template-columns:1fr!important;}.how-grid>div{border-right:none!important;border-bottom:1px solid rgba(184,150,90,0.12);}}`}</style>
      </section>

      {/* ── LOCATION / TTC (split layout) ── */}
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 420 }} className="ttc-grid">
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <img src="https://images.unsplash.com/photo-1566438503908-4f8377461f58?q=80" alt="Toronto TTC" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 60%' }}/>
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,22,40,0.35)' }}/>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', padding: '56px 8%', background: '#fff', position: 'relative' }}>
          <div>
            <span style={{ fontSize: 11, color: 'var(--gold)', letterSpacing: 3, textTransform: 'uppercase', fontWeight: 600, marginBottom: 14, display: 'block' }}>Serving Toronto</span>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(26px,3vw,40px)', fontWeight: 700, color: 'var(--navy)', lineHeight: 1.15, marginBottom: 18 }}>Conveniently Located on the TTC Subway Line</h2>
            <p style={{ fontSize: 15, color: 'var(--text)', lineHeight: 1.8, marginBottom: 28 }}>Easy access from anywhere in the GTA. Virtual appointments also available.</p>
            <Link to="/contact" className="btn-primary">Get Directions</Link>
          </div>
          <div style={{ position: 'absolute', bottom: 24, right: 32, opacity: 0.08 }}>
            <svg width="100" height="100" viewBox="0 0 24 24" fill="var(--blue)"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3" fill="#fff"/></svg>
          </div>
        </div>
        <style>{`@media(max-width:768px){.ttc-grid{grid-template-columns:1fr!important;}.ttc-grid>div:first-child{min-height:260px;}}`}</style>
      </section>

      {/* ── WHY US (white/cream) ── */}
      <section style={{ background: '#fafbfd', padding: '96px 5%', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 40 }}>
            <div style={{ maxWidth: 500 }}>
              <span className="section-label">Why Toronto Notary Office</span>
              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(30px,4vw,50px)', fontWeight: 700, color: 'var(--navy)', lineHeight: 1.1, marginBottom: 16 }}>
                The <span style={{ color: 'var(--blue)' }}>Difference</span><br/>You Can Feel
              </h2>
              <p style={{ fontSize: 16, color: 'var(--text)', marginBottom: 48, lineHeight: 1.8 }}>We built our practice around your convenience — not ours.</p>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }} className="why-grid">
            {[
              { n: '01', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, title: 'In & Out in 5 Minutes', body: "No long waits. No unnecessary complexity. Your time is valuable — we respect that." },
              { n: '02', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>, title: 'Same-Day Availability', body: "Urgent document needs don't wait. Same-day appointments are usually available." },
              { n: '03', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>, title: 'Virtual Commissioning', body: "Can't make it in person? Get documents notarized from anywhere in Ontario." },
              { n: '04', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>, title: 'Subway Accessible', body: "Conveniently located right on the TTC subway line. Easy to reach from anywhere in the GTA." },
            ].map(w => (
              <div key={w.n} style={{ border: '1px solid #e8ecf4', padding: '36px', borderRadius: 6, background: '#fff', transition: 'all 0.3s', cursor: 'default' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--blue)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(26,75,140,0.08)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#e8ecf4'; e.currentTarget.style.boxShadow = 'none'; }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                  <div style={{ width: 44, height: 44, background: 'rgba(26,75,140,0.07)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--blue)' }}>{w.icon}</div>
                  <span style={{ fontFamily: "'Playfair Display',serif", fontSize: 32, fontWeight: 900, color: 'var(--blue)', opacity: 0.15 }}>{w.n}</span>
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: 'var(--navy)', marginBottom: 10 }}>{w.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--text)', lineHeight: 1.7 }}>{w.body}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){.why-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* ── TESTIMONIALS (dark navy) ── */}
      <section style={{ background: '#12254a', padding: '88px 5%', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', bottom: '-20%', right: '-5%', width: 500, height: 500, background: 'radial-gradient(circle,rgba(184,150,90,0.08) 0%,transparent 70%)', pointerEvents: 'none' }}/>
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span style={{ fontSize: 11, color: 'var(--gold)', letterSpacing: 3, textTransform: 'uppercase', fontWeight: 600, display: 'block', marginBottom: 12 }}>Client Reviews</span>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(30px,4vw,48px)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: 16 }}>What Our <span style={{ color: 'var(--gold)' }}>Clients</span> Say</h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', maxWidth: 520, margin: '0 auto', lineHeight: 1.8 }}>Trusted by thousands of Torontonians for fast, reliable notary services.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }} className="testimonials-grid">
            {[
              { name: 'Sarah M.', role: 'Real Estate Agent', text: "Fastest notary service I've ever used. My clients love it — same-day appointments with no wait times." },
              { name: 'James K.', role: 'Business Owner', text: "I needed power of attorney documents notarized urgently. They got me in the same day and I was out in 5 minutes." },
              { name: 'Priya D.', role: 'Immigration Consultant', text: "Reliable, professional, and always available when I need statutory declarations done for my clients." },
            ].map((t, i) => (
              <div key={i} style={{ background: 'rgba(10,22,40,0.5)', border: '1px solid rgba(184,150,90,0.12)', padding: '36px', borderRadius: 4 }}>
                <div style={{ display: 'flex', gap: 4, marginBottom: 20 }}>
                  {[1,2,3,4,5].map(s => (<svg key={s} width="16" height="16" viewBox="0 0 24 24" fill="var(--gold)" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>))}
                </div>
                <p style={{ fontSize: 14.5, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: 24, fontStyle: 'italic' }}>"{t.text}"</p>
                <div style={{ borderTop: '1px solid rgba(184,150,90,0.12)', paddingTop: 18 }}>
                  <div style={{ fontSize: 15, fontWeight: 700, color: '#fff' }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: 'var(--gold)', marginTop: 3 }}>{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){.testimonials-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* ── DOCUMENTS (dark navy) ── */}
      <section style={{ background: 'var(--navy)', padding: '80px 5%', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(26,75,140,0.08) 1px,transparent 1px),linear-gradient(90deg,rgba(26,75,140,0.08) 1px,transparent 1px)', backgroundSize: '50px 50px', pointerEvents: 'none' }}/>
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 40 }} className="docs-flex">
            <div style={{ maxWidth: 480 }}>
              <span style={{ fontSize: 11, color: 'var(--gold)', letterSpacing: 3, textTransform: 'uppercase', fontWeight: 600, display: 'block', marginBottom: 12 }}>We Handle Everything</span>
              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(26px,3.5vw,42px)', fontWeight: 700, color: '#fff', lineHeight: 1.15, marginBottom: 18 }}>All Your <span style={{ color: 'var(--gold)' }}>Notary Needs</span> in One Place</h2>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>From affidavits to real estate closings — we've commissioned over 10,000+ documents for individuals, businesses, and law firms across the GTA.</p>
              <Link to="/booking" className="btn-primary">Book Now</Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, flex: '1', maxWidth: 480 }} className="doc-tags-grid">
              {['Affidavits', 'Statutory Declarations', 'Consent Letters', 'Power of Attorney', 'Certified Copies', 'Real Estate Docs', 'Immigration Papers', 'Travel Consent', 'Sworn Statements', 'Court Documents'].map(d => (
                <div key={d} style={{ background: 'rgba(184,150,90,0.06)', border: '1px solid rgba(184,150,90,0.15)', padding: '14px 20px', borderRadius: 4, display: 'flex', alignItems: 'center', gap: 10 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>{d}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.docs-flex{flex-direction:column;}.doc-tags-grid{max-width:100%!important;}}`}</style>
      </section>

      {/* ── CTA (gold) ── */}
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