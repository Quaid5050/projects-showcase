import { useEffect } from 'react';
import PageHero from '../components/PageHero';
import LeadForm from '../components/LeadForm';
import AnimatedSection from '../components/AnimatedSection';
import heroContact from '../assets/images/hero-contact.jpg';

const CONTACT = [
  { icon:'📞', label:'Phone',   value:'+1 754-327-2760',           desc:'Call or text anytime',   href:'tel:+17543272760' },
  { icon:'✉️', label:'Email', value:'independentricbrand@mail.com', desc:'We reply within hours', href:'mailto:independentricbrand@mail.com' },
  { icon:'🌐', label:'Website', value:'junkproservice.com',         desc:'Our live website',       href:'https://junkproservice.com' },
];
const AREAS = ['Punta Gorda', 'Port Charlotte', 'North Port', 'Englewood', 'Venice', 'Sarasota', 'Fort Myers', 'Cape Coral'];

function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target); }});
    }, { threshold: 0.07, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.reveal-scale').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export default function Contact() {
  useReveal();
  useEffect(() => {
    document.title = 'Contact | Junk Pro Service — Get a Free Estimate';
    const m = document.querySelector('meta[name="description"]') || Object.assign(document.createElement('meta'),{name:'description'});
    m.setAttribute('content','Contact Junk Pro Service for fast, affordable junk removal. Call +1 754-327-2760 or fill out our free estimate form.');
    if (!m.parentNode) document.head.appendChild(m);
  }, []);

  return (
    <main className="main-content inner-page page-enter" id="main">
      <PageHero image={heroContact} label="Get In Touch" title="Contact Junk Pro Service"
        subtitle="Need junk removed? Send us a message and we'll get back to you fast." />

      {/* Main contact */}
      <AnimatedSection className="section-pad" style={{ background:'#ffffff' }} aria-labelledby="contact-h">
        <div className="container">
          <div className="pg-two-col" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'var(--space-12)', alignItems:'start' }}>

            <div className="reveal-left">
              <span className="label" style={{ color:'var(--yellow-dark)' }}>Reach Us</span>
              <h2 id="contact-h" style={{ fontSize:'clamp(1.6rem,3.5vw,2.5rem)', fontWeight:900, color:'#111111', margin:'var(--space-3) 0 var(--space-4)' }}>
                We're Ready to <span style={{ color:'var(--yellow-dark)' }}>Help</span>
              </h2>
              <div style={{ width:48, height:3, background:'var(--yellow)', borderRadius:2, marginBottom:'var(--space-6)' }} />
              <p style={{ color:'#555555', lineHeight:1.9, marginBottom:'var(--space-6)' }}>
                Whether you have one item or a full property to clear out, we're here to help.
                Reach out by phone, email, or fill out the form.
              </p>

              <div style={{ display:'flex', flexDirection:'column', gap:'var(--space-3)', marginBottom:'var(--space-6)' }}>
                {CONTACT.map(c => (
                  <a key={c.label} href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="contact-card-light" aria-label={`${c.label}: ${c.value}`}>
                    <span className="contact-card-icon-light" aria-hidden="true">{c.icon}</span>
                    <div>
                      <span className="contact-card-label-dark">{c.label}</span>
                      <span className="contact-card-value-dark">{c.value}</span>
                      <span className="contact-card-desc-dark">{c.desc}</span>
                    </div>
                  </a>
                ))}
              </div>

              <a href="tel:+17543272760" className="phone-cta-block" aria-label="Call Junk Pro Service">
                <p className="phone-cta-eyebrow">⚡ Need a Fast Cleanup?</p>
                <p className="phone-cta-number">+1 754-327-2760</p>
                <p className="phone-cta-sub">Same-day service available</p>
              </a>
            </div>

            <div className="reveal-right">
              <p style={{ fontWeight:700, color:'#111111', marginBottom:'var(--space-4)', fontSize:'var(--fs-lg)' }}>
                Request Your Free Estimate
              </p>
              <LeadForm />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Service Areas */}
      <AnimatedSection className="section-pad" style={{ background:'#f5f5f5' }} aria-labelledby="areas-h">
        <div className="container">
          <div className="section-header reveal">
            <span className="label" style={{ color:'var(--yellow-dark)' }}>Service Areas</span>
            <h2 id="areas-h" style={{ color:'#111111' }}>We Come to You</h2>
            <p style={{ color:'#555555' }}>Proudly serving Southwest Florida homeowners, property managers, and businesses.</p>
          </div>
          <div className="grid-4" style={{ gap:'var(--space-3)' }}>
            {AREAS.map((a,i) => (
              <div key={a} className={`area-tag reveal delay-${(i%4)+1}`}>📍 {a}</div>
            ))}
          </div>
          <p style={{ textAlign:'center', marginTop:'var(--space-5)', color:'#555555', fontSize:'var(--fs-sm)' }}>
            Don't see your area? <a href="tel:+17543272760" style={{ color:'var(--yellow-dark)', fontWeight:700 }}>Call us</a> — we may still be able to help.
          </p>
        </div>
      </AnimatedSection>
    </main>
  );
}
