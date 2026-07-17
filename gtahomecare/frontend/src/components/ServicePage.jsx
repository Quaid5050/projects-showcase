import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Phone } from 'lucide-react';

const allServices = [
  { name: 'Home Care', path: '/services/home-care' },
  { name: 'North York Senior Care', path: '/services/north-york-senior-care' },
  { name: 'Companion Care', path: '/services/companion-care' },
  { name: 'Respite Care', path: '/services/respite-care' },
  { name: '24-Hour Home Care', path: '/services/24-hour-home-care' },
  { name: 'Personal Care Services', path: '/services/personal-care-services' },
];

export default function ServicePage({ title, subtitle, heroImg, intro, body, features, img2 }) {
  return (
    <>
      <div className="page-hero">
        <img src={heroImg} alt={title} />
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <span className="section-tag" style={{ color: 'var(--gold-light)' }}>Our Services</span>
          <h1 style={{ fontFamily: 'Baloo 2,sans-serif', fontSize: 'clamp(2rem,4vw,3rem)', color: 'white' }}>{title}</h1>
        </div>
      </div>

      <section style={{ padding: '4rem 0', background: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '3rem', alignItems: 'start' }}>
            <div>
              <span className="section-tag">{subtitle}</span>
              <h2 style={{ fontFamily: 'Baloo 2,sans-serif', fontSize: '2rem', color: 'var(--text-dark)', marginBottom: '1rem' }}>{title}</h2>
              <div className="divider-gold" />
              <p style={{ fontFamily: 'Poppins,sans-serif', color: 'var(--text-mid)', lineHeight: 1.85, margin: '1.25rem 0 1rem', fontSize: '0.95rem' }}>{intro}</p>
              {body.map((p, i) => <p key={i} style={{ fontFamily: 'Poppins,sans-serif', color: 'var(--text-mid)', lineHeight: 1.85, marginBottom: '1rem', fontSize: '0.95rem' }}>{p}</p>)}
              <img src={img2} alt={title} style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover', borderRadius: 10, margin: '1.5rem 0' }} />
              <h3 style={{ fontFamily: 'Baloo 2,sans-serif', fontSize: '1.5rem', color: 'var(--text-dark)', marginBottom: '1.25rem' }}>What's Included</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
                {features.map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, background: 'var(--cream)', padding: '0.6rem 0.8rem', borderRadius: 6 }}>
                    <CheckCircle size={15} color="var(--red)" style={{ flexShrink: 0, marginTop: 2 }} />
                    <span style={{ fontFamily: 'Poppins,sans-serif', fontSize: '0.85rem', color: 'var(--text-dark)' }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ background: '#FEF0F0', borderRadius: 10, padding: '1.5rem', border: '1px solid #FECACA' }}>
                <h4 style={{ fontFamily: 'Baloo 2,sans-serif', fontSize: '1.1rem', color: 'var(--text-dark)', marginBottom: '0.75rem' }}>Get Started Today</h4>
                <p style={{ fontFamily: 'Poppins,sans-serif', fontSize: '0.85rem', color: 'var(--text-mid)', marginBottom: '1rem', lineHeight: 1.7 }}>Contact us for a free assessment.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <Link to="/booking" className="btn-primary" style={{ justifyContent: 'center', fontSize: '0.8rem', padding: '0.75rem' }}>Book Free Assessment</Link>
                  <a href="tel:+14169100223" className="btn-outline" style={{ justifyContent: 'center', fontSize: '0.8rem', padding: '0.75rem' }}>
                    <Phone size={14} /> +1 416 910 0223
                  </a>
                </div>
              </div>
              <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 10, padding: '1.25rem' }}>
                <h4 style={{ fontFamily: 'Poppins,sans-serif', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-light)', fontWeight: 700, marginBottom: '0.75rem' }}>Other Services</h4>
                {allServices.map(s => (
                  <Link key={s.path} to={s.path} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '0.5rem 0', textDecoration: 'none', fontFamily: 'Poppins,sans-serif', fontSize: '0.85rem', color: 'var(--text-mid)', borderBottom: '1px solid var(--border)', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--red)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-mid)'}>
                    <ArrowRight size={12} color="var(--gold)" /> {s.name}
                  </Link>
                ))}
              </div>
              <div style={{ background: '#111', borderRadius: 10, padding: '1.5rem', color: 'white' }}>
                <div style={{ fontFamily: 'Poppins,sans-serif', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.5rem' }}>Contact</div>
                <div style={{ fontFamily: 'Poppins,sans-serif', fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)', marginBottom: '0.5rem' }}>2231 Jane St, Toronto, ON</div>
                <a href="tel:+14169100223" style={{ fontFamily: 'Baloo 2,sans-serif', fontSize: '1.25rem', color: 'white', textDecoration: 'none' }}>+1 416 910 0223</a>
                <div style={{ fontFamily: 'Poppins,sans-serif', fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', marginTop: 4 }}>Available 24/7</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style>{`@media(max-width:768px){section div[style*="grid-template-columns: 1fr 300px"]{grid-template-columns:1fr!important;} div[style*="grid-template-columns: 1fr 1fr"]{grid-template-columns:1fr!important;}}`}</style>
    </>
  );
}
