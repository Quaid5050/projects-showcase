import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const services = [
  { name: 'Home Care', path: '/services/home-care' },
  { name: 'North York Senior Care', path: '/services/north-york-senior-care' },
  { name: 'Companion Care', path: '/services/companion-care' },
  { name: 'Respite Care', path: '/services/respite-care' },
  { name: '24-Hour Home Care', path: '/services/24-hour-home-care' },
  { name: 'Personal Care Services', path: '/services/personal-care-services' },
  { name: 'Foot Spa & Nail Grooming', path: '/services/foot-spa-nail-grooming' },
  { name: 'Physiotherapy', path: '/services/physiotherapy' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => { setMobileOpen(false); setDropOpen(false); }, [pathname]);

  return (
    <>
      {/* Main nav */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: scrolled ? 'white' : 'rgba(255,255,255,0.97)',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.1)' : '0 1px 0 rgba(0,0,0,0.06)',
        transition: 'all 0.3s'
      }}>
        <div className="container navbar-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 1.5rem' }}>
          {/* Logo */}
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
            <img src="/logonew.png" alt="GTA Homecare Services" style={{ height: 48, width: 'auto' }} />
          </Link>

          {/* Desktop nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }} className="desktop-nav">
            {[['/', 'Home'], ['/about', 'About Us']].map(([path, label]) => (
              <Link key={path} to={path} style={{ textDecoration: 'none', fontFamily: 'Poppins,sans-serif', fontSize: '0.875rem', fontWeight: 700, color: pathname === path ? 'var(--red)' : 'var(--text-dark)', letterSpacing: '0.03em', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'var(--red)'}
                onMouseLeave={e => e.target.style.color = pathname === path ? 'var(--red)' : 'var(--text-dark)'}
              >{label}</Link>
            ))}

            {/* Dropdown */}
            <div style={{ position: 'relative' }}
              onMouseEnter={() => setDropOpen(true)}
              onMouseLeave={() => setDropOpen(false)}
            >
              <button style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4, fontFamily: 'Poppins,sans-serif', fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-dark)', letterSpacing: '0.03em' }}>
                Services <ChevronDown size={14} style={{ transform: dropOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
              </button>
              {dropOpen && (
                <div style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)', paddingTop: 8, minWidth: 220, zIndex: 100 }}>
                  <div style={{ background: 'white', borderRadius: 10, boxShadow: '0 10px 40px rgba(0,0,0,0.12)', padding: '0.5rem 0', border: '1px solid var(--border)' }}>
                    {services.map(s => (
                      <Link key={s.path} to={s.path} style={{ display: 'block', padding: '0.6rem 1.25rem', textDecoration: 'none', fontFamily: 'Poppins,sans-serif', fontSize: '0.85rem', color: 'var(--text-mid)', transition: 'all 0.15s' }}
                        onMouseEnter={e => { e.currentTarget.style.background = '#fef0f0'; e.currentTarget.style.color = 'var(--red)'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text-mid)'; }}
                      >{s.name}</Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {[['/gallery', 'Gallery'], ['/testimonials', 'Testimonials'], ['/contact', 'Contact']].map(([path, label]) => (
              <Link key={path} to={path} style={{ textDecoration: 'none', fontFamily: 'Poppins,sans-serif', fontSize: '0.875rem', fontWeight: 700, color: pathname === path ? 'var(--red)' : 'var(--text-dark)', letterSpacing: '0.03em', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'var(--red)'}
                onMouseLeave={e => e.target.style.color = pathname === path ? 'var(--red)' : 'var(--text-dark)'}
              >{label}</Link>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Link to="/booking" className="btn-primary navbar-book-btn" style={{ padding: '0.6rem 1.25rem', fontSize: '0.78rem' }}>Book Now</Link>
            <button onClick={() => setMobileOpen(!mobileOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'none', color: 'var(--text-dark)' }} className="mobile-toggle">
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div style={{ background: 'white', borderTop: '1px solid var(--border)', padding: '1rem 1.5rem' }}>
            {[['/', 'Home'], ['/about', 'About Us'], ['/gallery', 'Gallery'], ['/testimonials', 'Testimonials'], ['/contact', 'Contact'], ['/booking', 'Book Appointment']].map(([path, label]) => (
              <Link key={path} to={path} style={{ display: 'block', padding: '0.65rem 0.5rem', textDecoration: 'none', fontFamily: 'Poppins,sans-serif', fontSize: '0.9rem', fontWeight: 700, color: pathname === path ? 'var(--red)' : 'var(--text-dark)', borderBottom: '1px solid var(--border)' }}>{label}</Link>
            ))}
            <div style={{ marginTop: '0.75rem', paddingTop: '0.75rem' }}>
              <div style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-light)', marginBottom: '0.5rem', fontFamily: 'Poppins,sans-serif', fontWeight: 700 }}>Our Services</div>
              {services.map(s => (
                <Link key={s.path} to={s.path} style={{ display: 'block', padding: '0.5rem 0.5rem', textDecoration: 'none', fontFamily: 'Poppins,sans-serif', fontSize: '0.85rem', color: 'var(--text-mid)' }}>{s.name}</Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 900px) { .desktop-nav { display: none !important; } .mobile-toggle { display: flex !important; } }
        @media (max-width: 480px) {
          .navbar-row { padding: 0.75rem 1rem !important; gap: 0.5rem; }
          .navbar-book-btn { padding: 0.5rem 0.7rem !important; font-size: 0.68rem !important; gap: 4px !important; letter-spacing: 0.03em !important; }
        }
        @media (max-width: 360px) {
          .navbar-book-btn { padding: 0.45rem 0.55rem !important; font-size: 0.62rem !important; }
        }
      `}</style>
    </>
  );
}
