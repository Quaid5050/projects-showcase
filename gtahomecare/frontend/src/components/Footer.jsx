import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const services = [
  ['Home Care', '/services/home-care'],
  ['North York Senior Care', '/services/north-york-senior-care'],
  ['Companion Care', '/services/companion-care'],
  ['Respite Care', '/services/respite-care'],
  ['24-Hour Home Care', '/services/24-hour-home-care'],
  ['Personal Care Services', '/services/personal-care-services'],
  ['Foot Spa & Nail Grooming', '/services/foot-spa-nail-grooming'],
  ['Physiotherapy', '/services/physiotherapy'],
];

export default function Footer() {
  return (
    <footer style={{ background: '#111', color: 'white' }}>
      <div className="container" style={{ padding: '4rem 1.5rem 3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '2.5rem' }}>
        {/* Brand */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
            <img src="/logonew.png" alt="GTA Homecare Services" style={{ height: 48, width: 'auto' }} />
          </div>
          <p style={{ fontFamily: 'Poppins,sans-serif', fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            Compassionate, trusted Filipino homecare support across the Greater Toronto Area.
          </p>
          <a href="https://www.facebook.com/gtahomecaree/" target="_blank" rel="noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.82rem', fontFamily: 'Poppins,sans-serif' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            Facebook
          </a>
        </div>

        {/* Services */}
        <div>
          <h4 style={{ fontFamily: 'Poppins,sans-serif', fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 700, marginBottom: '1.25rem' }}>Our Services</h4>
          <ul style={{ listStyle: 'none' }}>
            {services.map(([name, path]) => (
              <li key={path} style={{ marginBottom: '0.6rem' }}>
                <Link to={path} style={{ fontFamily: 'Poppins,sans-serif', fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = 'var(--gold-light)'}
                  onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}
                >{name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ fontFamily: 'Poppins,sans-serif', fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 700, marginBottom: '1.25rem' }}>Quick Links</h4>
          <ul style={{ listStyle: 'none' }}>
            {[['Home', '/'], ['About Us', '/about'], ['Gallery', '/gallery'], ['Testimonials', '/testimonials'], ['Book Appointment', '/booking'], ['Contact Us', '/contact']].map(([name, path]) => (
              <li key={path} style={{ marginBottom: '0.6rem' }}>
                <Link to={path} style={{ fontFamily: 'Poppins,sans-serif', fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}
                  onMouseEnter={e => e.target.style.color = 'var(--gold-light)'}
                  onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}
                >{name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ fontFamily: 'Poppins,sans-serif', fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 700, marginBottom: '1.25rem' }}>Contact Us</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { icon: <MapPin size={14} />, val: '2231 Jane St, Toronto, ON M3M 1A5' },
              { icon: <Phone size={14} />, val: '+1 416 910 0223', href: 'tel:+14169100223' },
              { icon: <Mail size={14} />, val: 'gtahomecaree@gmail.com', href: 'mailto:gtahomecaree@gmail.com' },
              { icon: <Clock size={14} />, val: 'Available 24/7' },
            ].map((item, i) => (
              <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--gold)', marginTop: 2, flexShrink: 0 }}>{item.icon}</span>
                {item.href
                  ? <a href={item.href} style={{ fontFamily: 'Poppins,sans-serif', fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>{item.val}</a>
                  : <span style={{ fontFamily: 'Poppins,sans-serif', fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)' }}>{item.val}</span>
                }
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container" style={{ padding: '1.25rem 1.5rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
          <p style={{ fontFamily: 'Poppins,sans-serif', fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)' }}>
            &copy; {new Date().getFullYear()} GTA Homecare Services. All rights reserved.
          </p>
          <p style={{ fontFamily: 'Poppins,sans-serif', fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)' }}>
            Serving the Greater Toronto Area
          </p>
        </div>
      </div>
    </footer>
  );
}
