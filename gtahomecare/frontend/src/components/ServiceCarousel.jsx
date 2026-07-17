import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  { title: 'Home Care', img: '/img1.avif', path: '/services/home-care' },
  { title: 'North York Senior Care', img: '/img2.avif', path: '/services/north-york-senior-care' },
  { title: 'Companion Care', img: '/img3.jpg', path: '/services/companion-care' },
  { title: 'Respite Care', img: '/img4.jpg', path: '/services/respite-care' },
  { title: '24-Hour Home Care', img: '/img5.jpg', path: '/services/24-hour-home-care' },
  { title: 'Personal Care Services', img: '/img1.avif', path: '/services/personal-care-services' },
];

export default function ServiceCarousel() {
  const [active, setActive] = useState(0);
  const go = (dir) => setActive(prev => (prev + dir + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(() => setActive(prev => (prev + 1) % slides.length), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section style={{ padding: '5rem 0', background: 'white', overflow: 'hidden' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="section-tag">A Look Inside Our Care</span>
          <h2 style={{ fontFamily: 'Baloo 2,sans-serif', fontSize: 'clamp(1.8rem,3vw,2.5rem)', color: 'var(--text-dark)', marginBottom: '1rem' }}>Moments of Compassionate Care</h2>
          <div className="divider-gold center" />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem' }}>
          <button onClick={() => go(-1)} aria-label="Previous"
            style={{ background: 'white', border: '1px solid var(--border)', borderRadius: '50%', width: 44, height: 44, minWidth: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 2px 10px rgba(0,0,0,0.08)', color: 'var(--red)' }}>
            <ChevronLeft size={22} />
          </button>

          <Link to={slides[active].path} style={{ position: 'relative', display: 'block', width: '100%', maxWidth: 620, borderRadius: 14, overflow: 'hidden', boxShadow: '0 15px 40px rgba(0,0,0,0.15)', textDecoration: 'none' }}>
            <img src={slides[active].img} alt={slides[active].title}
              style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover', display: 'block' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)', padding: '2rem 1.5rem 1.25rem' }}>
              <h3 style={{ fontFamily: 'Baloo 2,sans-serif', fontSize: '1.4rem', color: 'white', margin: 0 }}>{slides[active].title}</h3>
            </div>
          </Link>

          <button onClick={() => go(1)} aria-label="Next"
            style={{ background: 'white', border: '1px solid var(--border)', borderRadius: '50%', width: 44, height: 44, minWidth: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 2px 10px rgba(0,0,0,0.08)', color: 'var(--red)' }}>
            <ChevronRight size={22} />
          </button>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', overflowX: 'auto', marginTop: '2rem', padding: '0.5rem', justifyContent: 'center' }}>
          {slides.map((s, i) => (
            <button key={s.title} onClick={() => setActive(i)}
              style={{ position: 'relative', flex: '0 0 auto', width: 120, height: 80, borderRadius: 8, overflow: 'hidden', border: i === active ? '2.5px solid var(--red)' : '2.5px solid transparent', padding: 0, cursor: 'pointer', opacity: i === active ? 1 : 0.65, transition: 'all 0.2s' }}>
              <img src={s.img} alt={s.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'rgba(0,0,0,0.55)', color: 'white', fontFamily: 'Poppins,sans-serif', fontSize: '0.62rem', fontWeight: 700, padding: '2px 4px', textAlign: 'center' }}>
                {s.title}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
