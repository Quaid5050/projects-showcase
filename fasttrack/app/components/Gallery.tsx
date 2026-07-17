'use client';
import { useState } from 'react';
import Link from 'next/link';

const items = [
  { src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80', label: 'Power Rack System' },
  { src: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80', label: 'Training Floor' },
  { src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80', label: 'Barbell Racks' },
  { src: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&q=80', label: 'Commercial Facility' },
  { src: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&q=80', label: 'Functional Trainer' },
  { src: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80', label: 'Elite Athletes' },
];

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section style={{ padding: '96px 0', background: '#fff' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>

        {/* Header row */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 48, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <div className="section-label"><span>Portfolio</span></div>
            <h2 className="font-display" style={{ fontSize: 'clamp(40px, 6vw, 72px)', color: '#111', lineHeight: 1 }}>
              OUR <span style={{ color: '#DC2626' }}>WORK</span>
            </h2>
          </div>
          <Link href="/gallery" className="btn-outline-red" style={{ marginBottom: 4 }}>View Full Gallery</Link>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 4 }} className="gallery-grid">
          {items.slice(0, 4).map((item, i) => (
            <div
              key={i}
              className="img-zoom"
              onClick={() => setActive(i)}
              style={{
                cursor: 'pointer',
                position: 'relative',
                aspectRatio: '3/4',
              }}
            >
              <img src={item.src} alt={item.label} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(0deg, rgba(0,0,0,0.65) 0%, transparent 50%)',
                opacity: 0,
                transition: 'opacity 0.3s',
                display: 'flex', alignItems: 'flex-end', padding: '20px',
              }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '0')}
              >
                <div>
                  <div style={{ width: 24, height: 2, background: '#DC2626', marginBottom: 8 }} />
                  <p style={{ color: '#fff', fontWeight: 700, fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{item.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div className="modal-overlay" onClick={() => setActive(null)}>
          <div style={{ maxWidth: 900, width: '100%', margin: '0 16px' }} onClick={e => e.stopPropagation()}>
            <button onClick={() => setActive(null)} style={{ position: 'absolute', top: 20, right: 20, background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
            <img src={items[active].src.replace('w=800', 'w=1400')} alt={items[active].label}
              style={{ width: '100%', maxHeight: '80vh', objectFit: 'contain', display: 'block' }} />
            <div style={{ background: '#111', padding: '16px 24px' }}>
              <p style={{ color: '#fff', fontWeight: 700, fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{items[active].label}</p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) { .gallery-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 480px) { .gallery-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
