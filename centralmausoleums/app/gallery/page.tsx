'use client';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

type GImg = { src: string; alt: string; category: string };

const galleryImages: GImg[] = [

  /* ── Single Mausoleums — new folder ── */
  { src: '/single mausoleum/SD-809.jpg',                                                              alt: 'Single Mausoleum 1', category: 'Single Mausoleums' },
  { src: '/single mausoleum/1_crypt_domestic[1].jpg',                                                 alt: 'Single Mausoleum 2', category: 'Single Mausoleums' },
  { src: '/single mausoleum/WLS-104HR-A-India-Red.jpg',                                               alt: 'Single Mausoleum 3', category: 'Single Mausoleums' },
  { src: '/single mausoleum/single_gray_granite_gable_roof_fluted_columns-Skrmetta-HPIM0598.jpg',     alt: 'Single Mausoleum 4', category: 'Single Mausoleums' },
  { src: '/single mausoleum/single_crypt_import[1].jpg',                                              alt: 'Single Mausoleum 5', category: 'Single Mausoleums' },
  { src: '/single mausoleum/M-8.jpg',                                                                 alt: 'Single Mausoleum 6', category: 'Single Mausoleums' },
  { src: '/single mausoleum/Picture33333333333333-removebg-preview.png',                              alt: 'Single Mausoleum 7', category: 'Single Mausoleums' },

  /* ── Double Mausoleums ── */
  { src: '/Double Mausoleums/DOUBLE-CRYPT-STERWALD-WITH-PLAIN-COLUMNS-1024x738.jpg', alt: 'Double Mausoleum 1',  category: 'Double Mausoleums' },
  { src: '/Double Mausoleums/WLS-208HR-India-Dakota.jpg',                            alt: 'Double Mausoleum 2',  category: 'Double Mausoleums' },
  { src: '/Double Mausoleums/WLS-202HR-Rose-Beta-e1775843167487.jpg',                alt: 'Double Mausoleum 3',  category: 'Double Mausoleums' },
  { src: '/Double Mausoleums/My_Pictures0006-1024x679.jpg',                          alt: 'Double Mausoleum 4',  category: 'Double Mausoleums' },
  { src: '/Double Mausoleums/SD-803.jpg',                                            alt: 'Double Mausoleum 5',  category: 'Double Mausoleums' },
  { src: '/Double Mausoleums/SD-800.jpg',                                            alt: 'Double Mausoleum 6',  category: 'Double Mausoleums' },
  { src: '/Double Mausoleums/bailey-mausoleum_orig.jpg',                             alt: 'Double Mausoleum 7',  category: 'Double Mausoleums' },
  { src: '/Double Mausoleums/Dark_Gray_Sterwald.jpg',                                alt: 'Double Mausoleum 8',  category: 'Double Mausoleums' },
  { src: '/Double Mausoleums/sm-2018lg.jpg',                                         alt: 'Double Mausoleum 9',  category: 'Double Mausoleums' },
  { src: '/Double Mausoleums/tm05.jpg',                                              alt: 'Double Mausoleum 10', category: 'Double Mausoleums' },
  { src: '/Double Mausoleums/86697174_1886856244780915_4108290622698291200_n.jpg',   alt: 'Double Mausoleum 11', category: 'Double Mausoleums' },
  { src: '/Double Mausoleums/CP-7742-2020_Legacy_Estates_Book[49].jpg',              alt: 'Double Mausoleum 12', category: 'Double Mausoleums' },
  { src: '/Double Mausoleums/Mausoleum-Gallery-Pics-2 (1).jpg',                      alt: 'Double Mausoleum 13', category: 'Double Mausoleums' },

  /* ── Four Crypt ── */
  { src: '/Four Mausoleum/Parker_WalkUp_Gallery.jpg',                                alt: 'Four Crypt 1', category: 'Four Crypt' },
  { src: '/Four Mausoleum/four-crypt-flat-top.jpg',                                  alt: 'Four Crypt 2', category: 'Four Crypt' },
  { src: '/Four Mausoleum/4-Crypt-Stacked-Rooftop.jpg',                              alt: 'Four Crypt 3', category: 'Four Crypt' },
  { src: '/Four Mausoleum/PC-Products_Main-ClassicMausoleum.jpg',                    alt: 'Four Crypt 4', category: 'Four Crypt' },
  { src: '/Four Mausoleum/Picture6.png',                                             alt: 'Four Crypt 5', category: 'Four Crypt' },
  { src: '/Four Mausoleum/59823197_1596477177152158_5303922300003811328_n.jpg',      alt: 'Four Crypt 6', category: 'Four Crypt' },
  { src: '/Four Mausoleum/CP-7742-2020_Legacy_Estates_Book[47].jpg',                 alt: 'Four Crypt 7', category: 'Four Crypt' },

  /* ── Six Crypt — new folder ── */
  { src: '/Six crypt/6-Crypt-Stacked-Dark-Cloud-Grey.jpg',       alt: 'Six Crypt 1', category: 'Six Crypt' },
  { src: '/Six crypt/CORAL-BLUE-STACKED-1024x752.jpg',           alt: 'Six Crypt 2', category: 'Six Crypt' },
  { src: '/Six crypt/CP-7742-2020_Legacy_Estates_Book[45].jpg',  alt: 'Six Crypt 3', category: 'Six Crypt' },
  { src: '/Six crypt/Paramount_Detail_WalkUp_Gallery.jpg',       alt: 'Six Crypt 4', category: 'Six Crypt' },

  /* ── Estates ── */
  { src: '/Estates/Tribute_WalkIn_Gallery.jpg',           alt: 'Estate 1',  category: 'Estates' },
  { src: '/Estates/Elite_WalkIn_Gallery.jpg',             alt: 'Estate 2',  category: 'Estates' },
  { src: '/Estates/Sovereign_WalkIn_Gallery.jpg',         alt: 'Estate 3',  category: 'Estates' },
  { src: '/Estates/Birthright_WalkIn_Gallery.jpg',        alt: 'Estate 4',  category: 'Estates' },
  { src: '/Estates/Tribute_Interior_WalkIn_Gallery.jpg',  alt: 'Estate 5',  category: 'Estates' },
  { src: '/Estates/Walk-in-Mausoleum-Grey-Youngstown-OH1.jpg', alt: 'Estate 6', category: 'Estates' },
  { src: '/Estates/Tan-brown-walk-in-Houst-TX-2.jpg',     alt: 'Estate 7',  category: 'Estates' },
  { src: '/Estates/Blake-Mausoleum.jpg',                  alt: 'Estate 8',  category: 'Estates' },
  { src: '/Estates/Reeves.jpg',                           alt: 'Estate 9',  category: 'Estates' },
  { src: '/Estates/db_SM-3002_20Mod1.jpg',                alt: 'Estate 10', category: 'Estates' },
  { src: '/Estates/maus2.png',                            alt: 'Estate 11', category: 'Estates' },
  { src: '/Estates/maus-3.png',                           alt: 'Estate 12', category: 'Estates' },
  { src: '/Estates/kosik.png',                            alt: 'Estate 13', category: 'Estates' },

  /* ── Family Columbarium ── */
  { src: '/Family And Companion Columberia/sd-701_final.png',                                             alt: 'Family Columbarium 1',  category: 'Family Columbarium' },
  { src: '/Family And Companion Columberia/sd-702_final.png',                                             alt: 'Family Columbarium 2',  category: 'Family Columbarium' },
  { src: '/Family And Companion Columberia/4-Niche-Columbarium.png',                                      alt: 'Family Columbarium 3',  category: 'Family Columbarium' },
  { src: '/Family And Companion Columberia/cremation_jpgs3.jpg',                                          alt: 'Family Columbarium 4',  category: 'Family Columbarium' },
  { src: '/Family And Companion Columberia/cremation_jpgs8.jpg',                                          alt: 'Family Columbarium 5',  category: 'Family Columbarium' },
  { src: '/Family And Companion Columberia/40684956_1411156542350890_8868624286714167296_n.jpg',           alt: 'Family Columbarium 6',  category: 'Family Columbarium' },
  { src: '/Family And Companion Columberia/40931005_1411156562350888_3417247178094018560_n.jpg',           alt: 'Family Columbarium 7',  category: 'Family Columbarium' },
  { src: '/Family And Companion Columberia/c678e4f279e02d7b33367bbee5fcb4c4.jpg',                         alt: 'Family Columbarium 8',  category: 'Family Columbarium' },
  { src: '/Family And Companion Columberia/15-P08-369-COLUMBARIUM-6-inch-rooftop-Greenfield2.jpg',        alt: 'Family Columbarium 9',  category: 'Family Columbarium' },
  { src: '/Family And Companion Columberia/285907698_1031290814190972_268715687459268653_n.jpg',           alt: 'Family Columbarium 10', category: 'Family Columbarium' },

  /* ── Community Columbarium ── */
  { src: '/Community Columberian/SD-756_Edit_Gallery.jpg',   alt: 'Community Columbarium 1', category: 'Community Columbarium' },
  { src: '/Community Columberian/SD-781_Render_Gallery.jpg', alt: 'Community Columbarium 2', category: 'Community Columbarium' },
  { src: '/Community Columberian/SD-782_Gallery.jpg',        alt: 'Community Columbarium 3', category: 'Community Columbarium' },
  { src: '/Community Columberian/SD-784_Render_Gallery.jpg', alt: 'Community Columbarium 4', category: 'Community Columbarium' },
  { src: '/Community Columberian/SD-792_Trellis_Gallery.jpg',alt: 'Community Columbarium 5', category: 'Community Columbarium' },
  { src: '/Community Columberian/SD793_Edit_Gallery.jpg',    alt: 'Community Columbarium 6', category: 'Community Columbarium' },
  { src: '/Community Columberian/R.jpg',                     alt: 'Community Columbarium 7', category: 'Community Columbarium' },

  /* ── Cremation Benches ── */
  { src: '/Cremation Benches/SD-004_FINAL_Gallery__1_-removebg-preview.png',   alt: 'Cremation Bench 1', category: 'Cremation Benches' },
  { src: '/Cremation Benches/SD-003_Setup_E_Gallery__1_-removebg-preview.png', alt: 'Cremation Bench 2', category: 'Cremation Benches' },
  { src: '/Cremation Benches/SD-005C_FINAL_Gallery-removebg-preview.png',      alt: 'Cremation Bench 3', category: 'Cremation Benches' },
  { src: '/Cremation Benches/SD-032_FINAL_George_Gallery-removebg-preview.png',alt: 'Cremation Bench 4', category: 'Cremation Benches' },
  { src: '/Cremation Benches/DSC06264_Angel_Bronze_Edit_Gallery-removebg-preview.png', alt: 'Cremation Bench 5', category: 'Cremation Benches' },
  { src: '/Cremation Benches/New folder (3)/Image_20260420_0001.jpg',          alt: 'Cremation Bench 6', category: 'Cremation Benches' },
  { src: '/Cremation Benches/New folder (3)/Image_20260420_0002.jpg',          alt: 'Cremation Bench 7', category: 'Cremation Benches' },
];

const CATS = ['All', 'Single Mausoleums', 'Double Mausoleums', 'Four Crypt', 'Six Crypt', 'Estates', 'Family Columbarium', 'Community Columbarium', 'Cremation Benches'];

export default function GalleryPage() {
  const [active, setActive]     = useState('All');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = active === 'All' ? galleryImages : galleryImages.filter(i => i.category === active);

  const closeLightbox = useCallback(() => setLightbox(null), []);
  const prev = useCallback(() => setLightbox(i => i !== null ? (i - 1 + filtered.length) % filtered.length : null), [filtered.length]);
  const next = useCallback(() => setLightbox(i => i !== null ? (i + 1) % filtered.length : null), [filtered.length]);

  useEffect(() => {
    if (lightbox === null) return;
    const h = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', h);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', h); document.body.style.overflow = ''; };
  }, [lightbox, prev, next, closeLightbox]);

  return (
    <div style={{ background: '#faf8f4', paddingTop: '80px', minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{ background: '#2c2820', padding: 'clamp(56px,8vw,80px) clamp(20px,5vw,56px)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.04 }}>
          <svg width="100%" height="100%" viewBox="0 0 1200 300" preserveAspectRatio="xMidYMid slice">
            <defs><pattern id="gg" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M60 0L0 0 0 60" fill="none" stroke="#b8922a" strokeWidth="0.5"/></pattern></defs>
            <rect width="100%" height="100%" fill="url(#gg)"/>
          </svg>
        </div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', justifyContent: 'center', marginBottom: '18px' }}>
            <div style={{ width: '36px', height: '1px', background: '#b8922a' }}/>
            <span style={{ fontFamily: 'Cinzel, serif', fontSize: '0.58rem', letterSpacing: '0.4em', color: '#d4aa4a' }}>OUR WORK</span>
            <div style={{ width: '36px', height: '1px', background: '#b8922a' }}/>
          </div>
          <h1 style={{ fontFamily: 'Cinzel, serif', fontSize: 'clamp(2rem, 5vw, 3.2rem)', color: '#faf8f4', marginBottom: '14px' }}>Gallery</h1>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1rem,2vw,1.2rem)', color: 'rgba(212,200,180,0.8)', maxWidth: '540px', margin: '0 auto' }}>
            {galleryImages.length} real photos from our portfolio — every category, every structure.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section style={{ background: '#fff', borderBottom: '1px solid rgba(184,146,42,0.12)', position: 'sticky', top: '72px', zIndex: 50, padding: '0 clamp(16px,4vw,48px)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', overflowX: 'auto', scrollbarWidth: 'none' }}>
          {CATS.map(cat => (
            <button key={cat} onClick={() => { setActive(cat); setLightbox(null); }} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: 'Cinzel, serif', fontSize: 'clamp(0.5rem,1.2vw,0.6rem)', letterSpacing: '0.15em',
              textTransform: 'uppercase', whiteSpace: 'nowrap',
              padding: '16px clamp(10px,1.5vw,18px)',
              color: active === cat ? '#b8922a' : '#7a7268',
              borderBottom: active === cat ? '2px solid #b8922a' : '2px solid transparent',
              transition: 'all 0.25s',
            }}>
              {cat}
              <span style={{ marginLeft: '5px', fontSize: '0.48rem', opacity: 0.6 }}>
                ({cat === 'All' ? galleryImages.length : galleryImages.filter(i => i.category === cat).length})
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Masonry Grid */}
      <section style={{ padding: 'clamp(32px,5vw,64px) clamp(16px,4vw,48px)', maxWidth: '1300px', margin: '0 auto' }}>
        <style>{`
          .gal-grid { columns: 3; column-gap: 16px; }
          .gal-item { break-inside: avoid; margin-bottom: 16px; overflow: hidden; cursor: pointer; position: relative; background: #e8e4dc; }
          .gal-item:hover .gal-overlay { background: rgba(44,40,32,0.45); }
          .gal-overlay { position: absolute; inset: 0; background: rgba(44,40,32,0); transition: background 0.35s; display: flex; align-items: flex-end; padding: 18px; }
          .gal-label { opacity: 0; transform: translateY(8px); transition: opacity 0.35s, transform 0.35s; }
          .gal-item:hover .gal-label { opacity: 1; transform: translateY(0); }
          .gal-item img { display: block; width: 100%; height: auto; transition: transform 0.45s ease; }
          .gal-item:hover img { transform: scale(1.04); }
          @media (max-width: 900px) { .gal-grid { columns: 2; } }
          @media (max-width: 480px) { .gal-grid { columns: 1; } }
        `}</style>

        <div className="gal-grid">
          {filtered.map((img, i) => (
            <div key={img.src + i} className="gal-item"
              onClick={() => setLightbox(i)}
              role="button" tabIndex={0} aria-label={`View ${img.alt}`}
              onKeyDown={e => e.key === 'Enter' && setLightbox(i)}
            >
              <Image src={img.src} alt={img.alt} width={600} height={400}
                sizes="(max-width:480px) 100vw, (max-width:900px) 50vw, 33vw"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
              <div className="gal-overlay">
                <div className="gal-label">
                  <div style={{ fontFamily: 'Cinzel, serif', fontSize: '0.6rem', letterSpacing: '0.15em', color: '#d4aa4a', marginBottom: '3px' }}>{img.category}</div>
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '0.95rem', color: '#faf8f4', fontStyle: 'italic' }}>{img.alt}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '16px', fontFamily: 'Cinzel, serif', fontSize: '0.65rem', letterSpacing: '0.15em', color: '#a09890' }}>
          Showing {filtered.length} of {galleryImages.length} images
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 200, background: 'rgba(10,8,5,0.96)', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(6px)' }}
          onClick={closeLightbox}
        >
          <div style={{ position: 'relative', maxWidth: '90vw', maxHeight: '88vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            onClick={e => e.stopPropagation()}
          >
            <Image src={filtered[lightbox].src} alt={filtered[lightbox].alt}
              width={1200} height={800}
              style={{ maxWidth: '90vw', maxHeight: '82vh', width: 'auto', height: 'auto', objectFit: 'contain', display: 'block' }}
              quality={90}
            />
            <div style={{ position: 'absolute', bottom: '-44px', left: 0, right: 0, textAlign: 'center' }}>
              <span style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '0.95rem', color: 'rgba(212,200,180,0.75)' }}>{filtered[lightbox].alt}</span>
              <span style={{ fontSize: '0.75rem', color: '#b8922a', marginLeft: '16px' }}>{lightbox + 1} / {filtered.length}</span>
            </div>
          </div>

          <button onClick={closeLightbox} style={{ position: 'fixed', top: '24px', right: '28px', background: 'rgba(44,40,32,0.7)', border: '1px solid rgba(184,146,42,0.3)', cursor: 'pointer', width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(4px)', zIndex: 201 }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 3L15 15M3 15L15 3" stroke="#d4aa4a" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </button>
          <button onClick={e => { e.stopPropagation(); prev(); }} style={{ position: 'fixed', left: '16px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(44,40,32,0.7)', border: '1px solid rgba(184,146,42,0.3)', cursor: 'pointer', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 201 }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M13 4L7 10L13 16" stroke="#d4aa4a" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </button>
          <button onClick={e => { e.stopPropagation(); next(); }} style={{ position: 'fixed', right: '16px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(44,40,32,0.7)', border: '1px solid rgba(184,146,42,0.3)', cursor: 'pointer', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 201 }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7 4L13 10L7 16" stroke="#d4aa4a" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </button>
        </div>
      )}
    </div>
  );
}