import { sendContact } from '../utils/emailService';
// ── SERVICES PAGE ──────────────────────────────────────────────────────────
import React from 'react';
import { Link } from 'react-router-dom';

const ALL_SERVICES = [
  {
    tag: 'Most Common', title: 'Affidavits',
    desc: 'A sworn written statement used as evidence in legal proceedings. Our notary ensures your affidavit is properly drafted, witnessed, and commissioned according to Ontario law.',
    items: ['Personal affidavits', 'Financial affidavits', 'Identity affidavits', 'Relationship affidavits'],
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
  },
  {
    tag: 'Government Required', title: 'Statutory Declarations',
    desc: 'A formal statement declared to be true in the presence of a notary. Required for many government, insurance, and legal applications throughout Ontario and Canada.',
    items: ['Insurance claims', 'Government applications', 'Change of name declarations', 'Residency declarations'],
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  },
  {
    tag: 'Family Travel', title: 'Consent Letters for Minor Travel',
    desc: 'Essential documentation when a child is travelling without both parents or guardians. Required by CBSA and most international border crossings.',
    items: ['Single parent travel', 'Guardian travel letters', 'International travel consent', 'School trip documentation'],
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>,
  },
  {
    tag: 'Legal Authority', title: 'Power of Attorney',
    desc: 'Legally grant another person the authority to act on your behalf in financial, property, or personal care matters. Properly drafted, witnessed, and notarized.',
    items: ['Continuing POA for Property', 'POA for Personal Care', 'Limited Power of Attorney', 'Business Power of Attorney'],
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>,
  },
  {
    tag: 'Property', title: 'Real Estate Documents',
    desc: 'Comprehensive notarial services for real estate transactions in Ontario. We handle transfers, mortgage documents, and all related notarizations with precision.',
    items: ['Title transfers', 'Mortgage documentation', 'Purchase & sale agreements', 'Vehicle transfer applications'],
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  },
  {
    tag: 'Court & Legal', title: 'Sworn Statements',
    desc: 'Formal sworn statements accepted by courts, institutions, and official bodies. Our notary ensures every statement meets the required legal standards.',
    items: ['Court-accepted statements', 'Employment sworn statements', 'Financial sworn statements', 'Notary record keeping'],
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>,
  },
];

export function Services() {
  return (
    <div style={{ paddingTop: 70 }}>
      <div style={{ background: 'var(--navy)', padding: '88px 5% 72px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(26,75,140,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(26,75,140,0.1) 1px,transparent 1px)', backgroundSize: '50px 50px', opacity: 0.5 }}/>
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <span className="section-label">Professional Notary Services</span>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(38px,5vw,62px)', fontWeight: 900, color: '#fff', marginBottom: 14 }}>Everything You<br/>Need, Notarized.</h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 17, maxWidth: 480 }}>From affidavits to real estate — fast, accurate, and legally binding.</p>
        </div>
      </div>

      <div style={{ background: 'var(--navy)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 2, padding: '2px' }} className="svc-grid">
          {ALL_SERVICES.map(s => (
            <div key={s.title} style={{ background: '#fff', padding: '52px 48px', transition: 'background 0.3s', cursor: 'default' }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--cream)'}
              onMouseLeave={e => e.currentTarget.style.background = '#fff'}>
              <span style={{ display: 'inline-block', background: 'rgba(26,75,140,0.07)', color: 'var(--blue)', padding: '4px 12px', borderRadius: 100, fontSize: 11, fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 18 }}>{s.tag}</span>
              <div style={{ color: 'var(--blue)', marginBottom: 16 }}>{s.icon}</div>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 22, fontWeight: 700, color: 'var(--navy)', marginBottom: 14 }}>{s.title}</h3>
              <p style={{ fontSize: 14.5, color: 'var(--text)', lineHeight: 1.8, marginBottom: 22 }}>{s.desc}</p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {s.items.map(item => (
                  <li key={item} style={{ fontSize: 13.5, color: 'var(--text)', padding: '6px 0', borderBottom: '1px solid #f0f2f7', display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ width: 4, height: 4, background: 'var(--gold)', borderRadius: '50%', flexShrink: 0 }}/>
                    {item}
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: 24, fontSize: 17, fontWeight: 700, color: 'var(--blue)' }}>From $35</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: 'var(--cream)', padding: '80px 5%', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 34, color: 'var(--navy)', marginBottom: 14 }}>Not sure what you need?</h2>
        <p style={{ color: 'var(--text)', marginBottom: 32, fontSize: 16 }}>Contact us and we'll guide you to the right service for your situation.</p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/booking" className="btn-primary">Book a Consultation</Link>
          <Link to="/contact" className="btn-secondary" style={{ color: 'var(--navy)', borderColor: 'rgba(10,22,40,0.25)' }}>Contact Us</Link>
        </div>
      </div>
      <style>{`@media(max-width:768px){.svc-grid{grid-template-columns:1fr!important;}}`}</style>
    </div>
  );
}

// ── ABOUT PAGE ──────────────────────────────────────────────────────────────
export function About() {
  return (
    <div style={{ paddingTop: 70 }}>
      <div style={{ background: 'var(--navy)', minHeight: 520, display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(26,75,140,0.08) 1px,transparent 1px),linear-gradient(90deg,rgba(26,75,140,0.08) 1px,transparent 1px)', backgroundSize: '40px 40px' }}/>
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '40%', overflow: 'hidden' }}>
          <img src="https://images.unsplash.com/photo-1521791055366-0d553872952f?w=800&q=80" alt="Legal professional"
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.28 }}/>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg,var(--navy) 0%,transparent 45%)' }}/>
        </div>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 5%', position: 'relative', zIndex: 2, width: '100%' }}>
          <span className="section-label">About Us</span>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(36px,5vw,58px)', fontWeight: 900, color: '#fff', lineHeight: 1.05, marginBottom: 20, maxWidth: 580 }}>
            Toronto's Notary<br/><em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>You Can Trust</em>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16, lineHeight: 1.8, maxWidth: 520, marginBottom: 16 }}>
            Toronto Notary Office was built with a simple promise: make notarization fast, affordable, and stress-free for every client.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 15, lineHeight: 1.8, maxWidth: 520 }}>
            We are a licensed Notary Public, Barrister, and Solicitor serving the Toronto community. Whether you need a quick affidavit or complex documentation, we handle everything with professionalism and care.
          </p>
        </div>
      </div>

      <section style={{ padding: '96px 5%', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <span className="section-label">Our Values</span>
          <h2 className="section-title">How We Work</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 40, marginTop: 56 }} className="values-grid">
            {[
              { title: 'Speed Without Compromise', body: "Most documents completed in under 5 minutes. We've streamlined every step without cutting corners on accuracy or legality." },
              { title: 'Transparency', body: "Flat-rate pricing starting at $35. No hidden fees. No surprise charges. You know what you'll pay before you arrive." },
              { title: 'Accessibility', body: 'Located on the TTC subway line. Virtual services available. Same-day appointments. We meet you where you are.' },
            ].map(v => (
              <div key={v.title} style={{ padding: '36px 32px', borderLeft: '3px solid var(--gold)' }}>
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 20, fontWeight: 700, color: 'var(--navy)', marginBottom: 12 }}>{v.title}</h3>
                <p style={{ fontSize: 14.5, color: 'var(--text)', lineHeight: 1.8 }}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--cream)', padding: '80px 5%' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }} className="about-split">
          <div>
            <span className="section-label">The Notary</span>
            <h2 className="section-title">Toronto's Trusted Notary</h2>
            <p style={{ fontSize: 15, color: 'var(--text)', lineHeight: 1.8, marginBottom: 20 }}>
              Barrister, Solicitor and Notary Public licensed in Ontario, Canada. We have helped hundreds of Toronto residents and businesses with their notarial needs.
            </p>
            <p style={{ fontSize: 15, color: 'var(--text)', lineHeight: 1.8, marginBottom: 32 }}>
              Our commitment to fast, precise, and client-centered service makes Toronto Notary Office one of the most accessible notary practices in the city.
            </p>
            <Link to="/booking" className="btn-primary">Book an Appointment</Link>
          </div>
          <div style={{ background: 'var(--navy)', padding: '44px', borderRadius: 4 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {[['Licensed Since', '2015+'], ['Documents\nProcessed', '5,000+'], ['Same-Day\nAppts', 'Available'], ['Virtual\nService', 'Available']].map(([label, val]) => (
                <div key={label} style={{ background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: 4, border: '1px solid rgba(184,150,90,0.15)' }}>
                  <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 22, fontWeight: 700, color: 'var(--gold)', marginBottom: 6 }}>{val}</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: 1, whiteSpace: 'pre-line' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div style={{ background: 'var(--gold)', padding: '72px 5%', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 34, color: 'var(--navy)', marginBottom: 14 }}>Ready to Work With Us?</h2>
        <p style={{ color: 'rgba(10,22,40,0.65)', fontSize: 16, marginBottom: 32 }}>Book your appointment online in minutes.</p>
        <Link to="/booking" className="btn-dark" style={{ margin: '0 auto' }}>Book Now</Link>
      </div>
      <style>{`@media(max-width:768px){.values-grid,.about-split{grid-template-columns:1fr!important;}}`}</style>
    </div>
  );
}

// ── CONTACT PAGE ─────────────────────────────────────────────────────────────
export function Contact() {
  const notify = React.useContext(require('../App').NotifContext);
  const [form, setForm] = React.useState({ fname: '', lname: '', email: '', phone: '', subject: 'Question about a service', message: '' });
  const [loading, setLoading] = React.useState(false);
  const change = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async () => {
    if (!form.fname || !form.email || !form.message) { notify('Please fill in required fields'); return; }
    setLoading(true);
    try {
      await sendContact(form);
      notify("Message sent! We'll be in touch shortly.");
      setForm(f => ({ ...f, fname: '', lname: '', email: '', phone: '', message: '' }));
    } catch { notify('Something went wrong. Please call us directly.'); }
    finally { setLoading(false); }
  };

  return (
    <div style={{ paddingTop: 70 }}>
      <div style={{ background: 'var(--navy)', padding: '80px 5% 60px' }}>
        <div style={{ maxWidth: 600 }}>
          <span className="section-label">Get in Touch</span>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(34px,5vw,52px)', fontWeight: 700, color: '#fff', marginBottom: 14 }}>Contact Us</h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 16, lineHeight: 1.7 }}>Questions about a service? Ready to book? Reach out — we respond promptly to all inquiries.</p>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '72px 5%', display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 72 }} className="contact-grid">
        <div>
          {[
            { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6.29 6.29l.94-.94a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>, label: 'Phone', val: '416-572-9794', href: 'tel:4165729794' },
            { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>, label: 'Email', val: 'info@torontonotaryoffice.ca', href: 'mailto:info@torontonotaryoffice.ca' },
            { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>, label: 'Location', val: '5000 Yonge Street, Suite 1901\nToronto, ON M2N 7E9', href: null },
          ].map(item => (
            <div key={item.label} style={{ display: 'flex', gap: 18, marginBottom: 36 }}>
              <div style={{ width: 46, height: 46, background: 'rgba(26,75,140,0.07)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--blue)' }}>{item.icon}</div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--navy)', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 5 }}>{item.label}</div>
                {item.href
                  ? <a href={item.href} style={{ fontSize: 15, color: 'var(--text)', textDecoration: 'none' }}>{item.val}</a>
                  : <p style={{ fontSize: 15, color: 'var(--text)', whiteSpace: 'pre-line', lineHeight: 1.6 }}>{item.val}</p>
                }
              </div>
            </div>
          ))}

          <div style={{ background: 'var(--navy)', padding: '32px', borderRadius: 4 }}>
            <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 18 }}>Office Hours</h3>
            {[['Monday – Friday', 'By Appointment'], ['Saturday', 'By Appointment'], ['Sunday', 'Limited']].map(([day, hours]) => (
              <div key={day} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid rgba(184,150,90,0.12)' }}>
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>{day}</span>
                <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--gold)' }}>{hours}</span>
              </div>
            ))}
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, marginTop: 16 }}>
              Appointment only. Please do not arrive without scheduling — the notary may not be in office.
            </p>
          </div>
        </div>

        <div style={{ background: 'var(--cream)', padding: '44px', borderRadius: 4 }}>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 26, fontWeight: 700, color: 'var(--navy)', marginBottom: 6 }}>Send a Message</h2>
          <p style={{ fontSize: 14, color: 'var(--text)', marginBottom: 28 }}>We'll get back to you within a few hours.</p>
          <div className="form-row">
            <div className="form-group"><label>First Name *</label><input name="fname" value={form.fname} onChange={change} placeholder="John"/></div>
            <div className="form-group"><label>Last Name</label><input name="lname" value={form.lname} onChange={change} placeholder="Smith"/></div>
          </div>
          <div className="form-group"><label>Email *</label><input name="email" type="email" value={form.email} onChange={change} placeholder="john@email.com"/></div>
          <div className="form-group"><label>Phone</label><input name="phone" type="tel" value={form.phone} onChange={change} placeholder="+1 (416) 000-0000"/></div>
          <div className="form-group">
            <label>Subject</label>
            <select name="subject" value={form.subject} onChange={change}>
              <option>Question about a service</option>
              <option>Booking inquiry</option>
              <option>Pricing inquiry</option>
              <option>Virtual service inquiry</option>
              <option>Other</option>
            </select>
          </div>
          <div className="form-group"><label>Message *</label><textarea name="message" value={form.message} onChange={change} rows={4} placeholder="Tell us how we can help..."/></div>
          <button className="btn-primary" onClick={submit} disabled={loading} style={{ width: '100%', justifyContent: 'center', opacity: loading ? 0.7 : 1 }}>
            {loading ? 'Sending...' : 'Send Message'}
            {!loading && <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>}
          </button>
        </div>
      </div>
      <style>{`@media(max-width:768px){.contact-grid{grid-template-columns:1fr!important;}}`}</style>
    </div>
  );
}