'use client';
import { useState } from 'react';
import PageHero from '../components/PageHero';

const cats = ['All', 'Equipment', 'Training', 'Facility', 'Athletes'];

const items = [
  { src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80', label: 'Power Rack System', cat: 'Equipment' },
  { src: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80', label: 'Training Floor Setup', cat: 'Facility' },
  { src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80', label: 'Barbell & Weight Systems', cat: 'Equipment' },
  { src: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&q=80', label: 'Custom Commercial Build', cat: 'Facility' },
  { src: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&q=80', label: 'Functional Trainer Station', cat: 'Equipment' },
  { src: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80', label: 'Elite Athlete Session', cat: 'Athletes' },
  { src: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800&q=80', label: 'Strength Platform', cat: 'Equipment' },
  { src: 'https://images.unsplash.com/photo-1590487988256-9ed24133863e?w=800&q=80', label: 'Group Training Class', cat: 'Training' },
  { src: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&q=80', label: 'Deadlift Platform', cat: 'Equipment' },
  { src: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80', label: 'Commercial Gym Floor', cat: 'Facility' },
  { src: 'https://images.unsplash.com/photo-1554344728-77cf90d9ed26?w=800&q=80', label: 'Coaching Session', cat: 'Training' },
  { src: 'https://images.unsplash.com/photo-1581009137042-c552e485697a?w=800&q=80', label: 'Athletic Performance', cat: 'Athletes' },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState('All');
  const [active, setActive] = useState<number | null>(null);
  const filtered = filter === 'All' ? items : items.filter(i => i.cat === filter);

  return (
    <>
      <PageHero title="OUR" highlight="WORK"
        subtitle="Custom-built installations, equipment in action, and the athletes who train with Fast Track Rack systems."
        breadcrumb="Gallery" bg="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=1600&q=80" />

      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>

          {/* Filters */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 48 }}>
            {cats.map(cat => (
              <button key={cat} onClick={() => setFilter(cat)}
                style={{
                  padding: '10px 22px', border: '2px solid', cursor: 'pointer',
                  fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
                  transition: 'all 0.2s',
                  background: filter === cat ? '#DC2626' : '#fff',
                  color: filter === cat ? '#fff' : '#6b7280',
                  borderColor: filter === cat ? '#DC2626' : '#e5e7eb',
                }}
              >{cat}</button>
            ))}
          </div>

          {/* Masonry */}
          <div style={{ columns: 3, columnGap: 8 }} className="gallery-cols">
            {filtered.map((item, i) => (
              <div key={i} onClick={() => setActive(i)}
                style={{ breakInside: 'avoid', marginBottom: 8, cursor: 'pointer', position: 'relative', overflow: 'hidden', display: 'block' }}
                className="gallery-item"
              >
                <img src={item.src} alt={item.label} style={{ width: '100%', display: 'block', transition: 'transform 0.4s' }} />
                <div className="gallery-overlay" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg,rgba(0,0,0,0.65) 0%,transparent 55%)', opacity: 0, transition: 'opacity 0.3s', display: 'flex', alignItems: 'flex-end', padding: 18 }}>
                  <div>
                    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', color: '#DC2626', textTransform: 'uppercase', marginBottom: 4 }}>{item.cat}</div>
                    <p style={{ color: '#fff', fontSize: 13, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{item.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {active !== null && (
        <div className="modal-overlay" onClick={() => setActive(null)}>
          <div style={{ maxWidth: 960, width: '100%', margin: '0 16px', position: 'relative' }} onClick={e => e.stopPropagation()}>
            <button onClick={() => setActive(null)} style={{ position: 'absolute', top: -44, right: 0, background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
            {/* Prev / Next */}
            <button onClick={() => setActive((active - 1 + filtered.length) % filtered.length)}
              style={{ position: 'absolute', left: -52, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }} className="lb-arrow">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <button onClick={() => setActive((active + 1) % filtered.length)}
              style={{ position: 'absolute', right: -52, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }} className="lb-arrow">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
            <img src={filtered[active].src.replace('w=800', 'w=1400')} alt={filtered[active].label}
              style={{ width: '100%', maxHeight: '80vh', objectFit: 'contain', display: 'block' }} />
            <div style={{ background: '#111', padding: '14px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span style={{ fontSize: 10, color: '#DC2626', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' }}>{filtered[active].cat}</span>
                <p style={{ color: '#fff', fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 2 }}>{filtered[active].label}</p>
              </div>
              <span style={{ color: '#6b7280', fontSize: 13 }}>{active + 1} / {filtered.length}</span>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .gallery-item:hover img { transform: scale(1.06); }
        .gallery-item:hover .gallery-overlay { opacity: 1; }
        @media(max-width:900px){ .gallery-cols{columns:2!important} }
        @media(max-width:480px){ .gallery-cols{columns:1!important} }
        .lb-arrow { display:block; }
        @media(max-width:720px){ .lb-arrow{display:none!important} }
      `}</style>
    </>
  );
}
