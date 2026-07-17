import Link from 'next/link';
import Image from 'next/image';

const HERO_IMG    = '/hero-bg.png';
const ABOUT_IMG   = '/Estates/Tribute_WalkIn_Gallery.jpg';
const FEATURE_IMG = '/whyus.png';

const stats = [
  { value: '30+', label: 'Years of Craftsmanship' },
  { value: '500+', label: 'Structures Built' },
  { value: '100%', label: 'Custom Designed' },
  { value: '50+', label: 'States Served' },
];

const products = [
  { name: 'Single Mausoleum', img: '/Double Mausoleums/bailey-mausoleum_orig.jpg', tag: 'Most Popular' },
  { name: 'Double Mausoleum', img: '/Double Mausoleums/DOUBLE-CRYPT-STERWALD-WITH-PLAIN-COLUMNS-1024x738.jpg', tag: 'Family' },
  { name: 'Columbarium', img: '/Community Columberian/SD-756_Edit_Gallery.jpg', tag: 'Cremation' },
  { name: 'Cremation Bench', img: '/Cremation Benches/SD-004_FINAL_Gallery__1_-removebg-preview.png', tag: 'Memorial' },
  { name: 'Estate Mausoleum', img: '/Estates/Tribute_WalkIn_Gallery.jpg', tag: 'Grand' },
  { name: 'Cemetery Restoration', img: '/Estates/Blake-Mausoleum.jpg', tag: 'Service' },
];

/* ── Gallery grid: pulled from every client folder ── */
const galleryItems = [
  { img: '/Estates/Sovereign_WalkIn_Gallery.jpg',               label: 'Walk-In Estate' },
  { img: '/Double Mausoleums/DOUBLE-CRYPT-STERWALD-WITH-PLAIN-COLUMNS-1024x738.jpg', label: 'Double Mausoleum' },
  { img: '/Community Columberian/SD-792_Trellis_Gallery.jpg',   label: 'Community Columbarium' },
  { img: '/Cremation Benches/SD-003_Setup_E_Gallery__1_-removebg-preview.png', label: 'Cremation Bench' },
  { img: '/Estates/Elite_WalkIn_Gallery.jpg',                   label: 'Estate Mausoleum' },
  { img: '/Family And Companion Columberia/sd-702_final.png',   label: 'Family Columbarium' },
  { img: '/Four Mausoleum/Parker_WalkUp_Gallery.jpg',           label: 'Four Crypt Mausoleum' },
  { img: '/Double Mausoleums/WLS-208HR-India-Dakota.jpg',       label: 'Custom Granite' },
  { img: '/Community Columberian/SD-784_Render_Gallery.jpg',    label: 'Columbarium Render' },
  { img: '/Estates/Birthright_WalkIn_Gallery.jpg',              label: 'Birthright Estate' },
  { img: '/Cremation Benches/SD-005C_FINAL_Gallery-removebg-preview.png', label: 'Memorial Bench' },
  { img: '/Family And Companion Columberia/cremation_jpgs8.jpg',label: 'Companion Columbarium' },
];

const features = [
  {
    svg: <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M16 3L29 10V22L16 29L3 22V10L16 3Z" stroke="#b8922a" strokeWidth="1.2" fill="none"/><circle cx="16" cy="16" r="4" stroke="#b8922a" strokeWidth="1" fill="rgba(184,146,42,0.1)"/></svg>,
    title: 'Premium Granite',
    desc: 'We source only the finest granite — durable, weather-resistant, and beautifully polished to last centuries.',
  },
  {
    svg: <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect x="3" y="3" width="26" height="26" stroke="#b8922a" strokeWidth="1.2" fill="none"/><path d="M9 16L14 21L23 11" stroke="#b8922a" strokeWidth="1.8" strokeLinecap="round"/></svg>,
    title: 'Custom Design',
    desc: 'Every structure is uniquely designed to reflect the personality and legacy of those being honored.',
  },
  {
    svg: <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="13" stroke="#b8922a" strokeWidth="1.2" fill="none"/><path d="M16 8V17L21 22" stroke="#b8922a" strokeWidth="1.5" strokeLinecap="round"/></svg>,
    title: 'Timely Delivery',
    desc: 'Our experienced team ensures every project is completed with precision, care, and on schedule.',
  },
  {
    svg: <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M16 4C9.4 4 4 9.4 4 16C4 22.6 9.4 28 16 28" stroke="#b8922a" strokeWidth="1.2"/><path d="M22 4L26 8L18 16" stroke="#b8922a" strokeWidth="1.5" strokeLinecap="round"/></svg>,
    title: 'Nationwide Service',
    desc: 'Serving families and cemeteries across 50+ states with excellence in granite artistry.',
  },
  {
    svg: <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M16 5C11 5 6 9 6 15C6 23 16 27 16 27C16 27 26 23 26 15C26 9 21 5 16 5Z" stroke="#b8922a" strokeWidth="1.2" fill="none"/><circle cx="16" cy="15" r="4" stroke="#b8922a" strokeWidth="1" fill="rgba(184,146,42,0.1)"/></svg>,
    title: 'Compassionate Care',
    desc: 'We work with families during profound moments with sensitivity, patience, and heartfelt respect.',
  },
  {
    svg: <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect x="4" y="8" width="24" height="18" stroke="#b8922a" strokeWidth="1.2" fill="none"/><path d="M4 12H28M12 12V26M20 12V26" stroke="#b8922a" strokeWidth="0.8"/><path d="M4 8L16 4L28 8" stroke="#b8922a" strokeWidth="1.2"/></svg>,
    title: 'Cemetery Restoration',
    desc: 'From new construction to full cemetery restoration — comprehensive memorial services.',
  },
];

export default function HomePage() {
  return (
    <div style={{ background: '#faf8f4' }}>

      {/* ── HERO ── */}
      <style>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          min-height: 100dvh;
          display: flex;
          align-items: center;
          overflow: hidden;
        }
        .hero-img-wrap {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .hero-img-wrap img {
          object-fit: cover !important;
          object-position: center center !important;
          width: 100% !important;
          height: 100% !important;
        }
        @media (max-width: 768px) {
          .hero-img-wrap img {
            object-position: 60% center !important;
          }
          .hero-content {
            padding: 100px 20px 80px !important;
          }
          .hero-content h1 {
            font-size: clamp(1.8rem, 8vw, 2.8rem) !important;
          }
        }
      `}</style>
      <section className="hero-section">
        <div className="hero-img-wrap">
          <Image
            src={HERO_IMG}
            alt="Grand mausoleum"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center center' }}
            priority
            quality={90}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(10,8,5,0.82) 0%, rgba(10,8,5,0.55) 55%, rgba(10,8,5,0.32) 100%)' }}/>
        </div>

        {/* Content */}
        <div className="hero-content" style={{
          position: 'relative', zIndex: 2,
          maxWidth: '1200px', margin: '0 auto', width: '100%',
          padding: 'clamp(100px, 15vw, 140px) clamp(20px, 5vw, 56px) clamp(70px, 10vw, 100px)',
        }}>
          <div style={{ maxWidth: '640px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '28px' }}>
              <div style={{ width: '36px', height: '1px', background: '#b8922a' }}/>
              <span style={{ fontFamily: 'Cinzel, serif', fontSize: '0.58rem', letterSpacing: '0.4em', color: '#d4aa4a', textTransform: 'uppercase' }}>Excellence in Granite</span>
            </div>

            <h1 style={{
              fontFamily: 'Cinzel, serif',
              fontSize: 'clamp(2rem, 6vw, 4.5rem)',
              fontWeight: 400, lineHeight: 1.15,
              color: '#faf8f4', marginBottom: '12px', letterSpacing: '0.04em',
            }}>
              Central Mausoleums
            </h1>
            <h1 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(1.5rem, 4vw, 3rem)',
              fontWeight: 300, fontStyle: 'italic',
              color: '#d4aa4a', marginBottom: '32px', letterSpacing: '0.06em',
            }}>
              & Granite
            </h1>

            <div style={{ width: '52px', height: '2px', background: 'linear-gradient(90deg, #b8922a, #d4aa4a)', marginBottom: '28px' }}/>

            <p style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
              color: 'rgba(244,240,232,0.88)',
              lineHeight: 1.85, marginBottom: '44px', fontWeight: 300,
            }}>
              Crafting premium mausoleums, columbariums, and granite memorials that stand as timeless tributes — honoring lives with enduring beauty and dignity.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link href="/products" className="btn-gold">Explore Our Works</Link>
              <Link href="/contact" style={{
                display: 'inline-block', background: 'transparent', color: '#faf8f4',
                fontFamily: 'Cinzel, serif', fontSize: '0.68rem', letterSpacing: '0.2em',
                textTransform: 'uppercase', padding: '13px 35px',
                border: '1.5px solid rgba(250,248,244,0.55)', textDecoration: 'none', transition: 'all 0.3s',
              }}>Request Consultation</Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute', bottom: '28px', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', zIndex: 2,
        }}>
          <span style={{ fontFamily: 'Cinzel, serif', fontSize: '0.52rem', letterSpacing: '0.3em', color: 'rgba(212,170,74,0.7)' }}>SCROLL</span>
          <div style={{ width: '1px', height: '36px', background: 'linear-gradient(to bottom, rgba(212,170,74,0.6), transparent)' }}/>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section style={{ background: '#2c2820', padding: '40px 32px' }}>
        <style>{`
          @media (max-width: 600px) {
            .stats-grid {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 0 !important;
            }
            .stats-grid > div {
              border-right: none !important;
              border-bottom: 1px solid rgba(255,255,255,0.07) !important;
              padding: 20px 12px !important;
            }
            .stats-grid > div:nth-child(odd) {
              border-right: 1px solid rgba(255,255,255,0.07) !important;
            }
            .stats-grid > div:nth-child(3),
            .stats-grid > div:nth-child(4) {
              border-bottom: none !important;
            }
            .why-features-grid {
              grid-template-columns: 1fr !important;
            }
            .hero-buttons {
              flex-direction: column !important;
            }
            .hero-buttons a {
              text-align: center !important;
            }
          }
        `}</style>
        <div
          className="stats-grid"
          style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}
        >
          {stats.map((s, i) => (
            <div key={i} style={{
              textAlign: 'center',
              borderRight: i < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none',
              padding: '8px 16px',
            }}>
              <div style={{ fontFamily: 'Cinzel, serif', fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', color: '#d4aa4a', lineHeight: 1.1, marginBottom: '6px' }}>{s.value}</div>
              <div style={{ fontSize: '0.68rem', letterSpacing: '0.1em', color: '#7a7268', textTransform: 'uppercase', lineHeight: 1.4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT INTRO ── */}
      <section className="section-pad" style={{ padding: 'clamp(60px,8vw,96px) clamp(20px,5vw,56px)', background: '#fff' }}>
        <div style={{ maxWidth: '1150px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px,6vw,80px)', alignItems: 'center' }} className="grid-2">
          <div style={{ position: 'relative', height: 'clamp(320px,50vw,520px)', overflow: 'hidden' }}>
            <Image src={ABOUT_IMG} alt="Memorial craftsmanship" fill style={{ objectFit: 'cover' }} quality={85}/>
            <div style={{ position: 'absolute', top: '20px', left: '20px', right: '-12px', bottom: '-12px', border: '1.5px solid rgba(184,146,42,0.35)', zIndex: -1, pointerEvents: 'none' }}/>
            <div style={{ position: 'absolute', bottom: '28px', right: '28px', background: 'rgba(44,40,32,0.9)', backdropFilter: 'blur(8px)', padding: '16px 22px', border: '1px solid rgba(184,146,42,0.3)' }}>
              <div style={{ fontFamily: 'Cinzel, serif', fontSize: '1.4rem', color: '#d4aa4a', lineHeight: 1 }}>30+</div>
              <div style={{ fontSize: '0.65rem', color: '#a09890', letterSpacing: '0.1em', marginTop: '4px' }}>YEARS EXPERIENCE</div>
            </div>
          </div>

          <div>
            <div className="section-label"><span>Our Legacy</span></div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', lineHeight: 1.25, marginBottom: '24px' }}>
              Built for Eternity.<br/>Designed with Heart.
            </h2>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1rem,2vw,1.15rem)', color: '#4a4540', lineHeight: 1.85, marginBottom: '20px' }}>
              At Central Mausoleums & Granite, we understand that a memorial is more than stone — it is a sacred promise to preserve memory, honor legacy, and provide families a place of solace for generations.
            </p>
            <p style={{ fontSize: '0.9rem', color: '#7a7268', lineHeight: 1.85, marginBottom: '36px' }}>
              Each structure is individually crafted with premium granite, architectural precision, and deep respect for the families we serve.
            </p>
            <Link href="/about" className="btn-outline">Our Story</Link>
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ── */}
      <section className="section-pad" style={{ padding: 'clamp(60px,8vw,96px) clamp(20px,5vw,56px)', background: '#faf8f4' }}>
        <div style={{ maxWidth: '1250px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div className="section-label"><span>Our Collection</span></div>
            </div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.4rem)', marginBottom: '14px' }}>Crafted with Precision</h2>
            <p style={{ color: '#7a7268', maxWidth: '480px', margin: '0 auto', fontSize: '0.95rem' }}>
              Each memorial structure is a testament to exceptional craftsmanship, enduring materials, and timeless design.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }} className="grid-3">
            {products.map((p, i) => (
              <Link key={i} href="/products" style={{ textDecoration: 'none' }}>
                <div className="product-card">
                  <div className="card-img" style={{ height: '240px', position: 'relative', overflow: 'hidden', background: '#e8e4dc' }}>
                    <Image src={p.img} alt={p.name} fill style={{ objectFit: 'cover' }} quality={80}/>
                    <div style={{
                      position: 'absolute', top: '14px', left: '14px',
                      background: 'rgba(44,40,32,0.85)', backdropFilter: 'blur(4px)',
                      padding: '4px 12px', fontFamily: 'Cinzel, serif',
                      fontSize: '0.52rem', letterSpacing: '0.2em', color: '#d4aa4a', textTransform: 'uppercase',
                    }}>{p.tag}</div>
                  </div>
                  <div style={{ padding: '22px 24px 26px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '0.85rem', letterSpacing: '0.08em', color: '#2c2820', marginBottom: '4px' }}>{p.name}</h3>
                      <span style={{ fontSize: '0.75rem', color: '#b8922a' }}>View Details →</span>
                    </div>
                    <div style={{ width: '36px', height: '36px', border: '1px solid rgba(184,146,42,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7H12M8 3L12 7L8 11" stroke="#b8922a" strokeWidth="1.2" strokeLinecap="round"/></svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link href="/products" className="btn-dark">View All Products & Services</Link>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO GALLERY ── */}
      <section style={{ padding: 'clamp(60px,8vw,96px) clamp(20px,5vw,56px)', background: '#2c2820' }}>
        <style>{`
          .gallery-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 8px;
          }
          .gallery-grid .tall { grid-row: span 2; }
          .gallery-item {
            position: relative;
            overflow: hidden;
            cursor: pointer;
            background: #1a1710;
          }
          .gallery-item img {
            transition: transform 0.6s ease !important;
          }
          .gallery-item:hover img {
            transform: scale(1.06) !important;
          }
          .gallery-item .g-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to top, rgba(10,8,5,0.75) 0%, transparent 55%);
            opacity: 0;
            transition: opacity 0.35s;
          }
          .gallery-item:hover .g-overlay { opacity: 1; }
          .gallery-item .g-label {
            position: absolute;
            bottom: 16px;
            left: 16px;
            font-family: 'Cinzel', serif;
            font-size: 0.6rem;
            letter-spacing: 0.18em;
            color: #d4aa4a;
            text-transform: uppercase;
            opacity: 0;
            transform: translateY(6px);
            transition: all 0.35s;
          }
          .gallery-item:hover .g-label {
            opacity: 1;
            transform: translateY(0);
          }
          @media (max-width: 900px) {
            .gallery-grid { grid-template-columns: repeat(3, 1fr); }
            .gallery-grid .tall { grid-row: span 1; }
          }
          @media (max-width: 600px) {
            .gallery-grid { grid-template-columns: repeat(2, 1fr); }
          }
        `}</style>

        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '52px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', justifyContent: 'center', marginBottom: '18px' }}>
              <div style={{ width: '40px', height: '1px', background: 'rgba(184,146,42,0.5)' }}/>
              <span style={{ fontFamily: 'Cinzel, serif', fontSize: '0.58rem', letterSpacing: '0.4em', color: '#d4aa4a' }}>PORTFOLIO</span>
              <div style={{ width: '40px', height: '1px', background: 'rgba(184,146,42,0.5)' }}/>
            </div>
            <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: 'clamp(1.5rem,3vw,2.3rem)', color: '#faf8f4', letterSpacing: '0.04em', marginBottom: '12px' }}>
              Our Work Speaks for Itself
            </h2>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1rem,2vw,1.15rem)', color: '#7a7268', maxWidth: '460px', margin: '0 auto' }}>
              Every structure you see below was designed, fabricated, and installed by our team — no two alike.
            </p>
          </div>

          <div className="gallery-grid">
            {galleryItems.map((g, i) => (
              <div
                key={i}
                className={`gallery-item${i === 0 || i === 4 ? ' tall' : ''}`}
                style={{ height: i === 0 || i === 4 ? 'auto' : '220px' }}
              >
                <div style={{ position: 'relative', width: '100%', height: i === 0 || i === 4 ? '452px' : '220px' }}>
                  <Image
                    src={g.img}
                    alt={g.label}
                    fill
                    style={{ objectFit: 'cover' }}
                    quality={80}
                    sizes="(max-width:600px) 50vw, (max-width:900px) 33vw, 25vw"
                  />
                </div>
                <div className="g-overlay"/>
                <div className="g-label">{g.label}</div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '44px' }}>
            <Link href="/products" className="btn-gold">View Full Collection</Link>
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="section-pad" style={{ padding: 'clamp(60px,8vw,96px) clamp(20px,5vw,56px)', background: '#fff' }}>
        <div style={{ maxWidth: '1150px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px,6vw,80px)', alignItems: 'center' }} className="grid-2">
            <div>
              <div className="section-label"><span>Why Choose Us</span></div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.4rem)', lineHeight: 1.25, marginBottom: '20px' }}>The Central Difference</h2>
              <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1rem,2vw,1.1rem)', color: '#4a4540', lineHeight: 1.85, marginBottom: '40px' }}>
                Decades of expertise, unmatched materials, and genuine compassion — delivered with every structure we build.
              </p>
              {/* Features — 1 col on mobile, 2 col on desktop */}
              <div
                className="why-features-grid"
                style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}
              >
                {features.map((f, i) => (
                  <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{ flexShrink: 0, marginTop: '2px' }}>{f.svg}</div>
                    <div>
                      <h4 style={{ fontFamily: 'Cinzel, serif', fontSize: '0.75rem', letterSpacing: '0.08em', color: '#2c2820', marginBottom: '6px' }}>{f.title}</h4>
                      <p style={{ fontSize: '0.82rem', color: '#7a7268', lineHeight: 1.7 }}>{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Feature image */}
            <div style={{ position: 'relative', height: 'clamp(380px,55vw,580px)', overflow: 'hidden' }}>
              <Image src={FEATURE_IMG} alt="Memorial stone detail" fill style={{ objectFit: 'cover' }} quality={85}/>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(44,40,32,0.3) 0%, transparent 50%)' }}/>
              <div style={{
                position: 'absolute', bottom: '32px', left: '24px', right: '24px',
                background: 'rgba(250,248,244,0.94)', backdropFilter: 'blur(8px)',
                padding: '22px 24px', borderLeft: '3px solid #b8922a',
              }}>
                <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: 'clamp(0.9rem,2vw,1rem)', color: '#2c2820', lineHeight: 1.7, marginBottom: '10px' }}>
                  "Every structure we build is a promise — to honor memory, preserve legacy, and bring peace to those who grieve."
                </p>
                <span style={{ fontFamily: 'Cinzel, serif', fontSize: '0.6rem', letterSpacing: '0.15em', color: '#b8922a' }}>— RICKY WORLEY, FOUNDER</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: '#2c2820', padding: 'clamp(60px,8vw,80px) clamp(20px,5vw,56px)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.04 }}>
          <svg width="100%" height="100%" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice">
            <defs><pattern id="ctag" width="80" height="80" patternUnits="userSpaceOnUse"><path d="M 80 0 L 0 0 0 80" fill="none" stroke="#b8922a" strokeWidth="0.5"/></pattern></defs>
            <rect width="100%" height="100%" fill="url(#ctag)"/>
          </svg>
        </div>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '640px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <div style={{ width: '40px', height: '1px', background: 'rgba(184,146,42,0.5)' }}/>
            <svg width="8" height="8" viewBox="0 0 8 8" style={{ margin: '0 10px' }}><rect x="1" y="1" width="6" height="6" transform="rotate(45 4 4)" stroke="#b8922a" strokeWidth="1" fill="none"/></svg>
            <div style={{ width: '40px', height: '1px', background: 'rgba(184,146,42,0.5)' }}/>
          </div>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.4rem)', color: '#faf8f4', marginBottom: '16px' }}>Begin Your Memorial Journey</h2>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1rem,2vw,1.15rem)', color: '#a09890', lineHeight: 1.8, marginBottom: '40px' }}>
            Contact us today for a personalized consultation. We'll guide you through every step with care, expertise, and unwavering dedication.
          </p>
          <div className="btn-row hero-buttons" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-gold">Schedule a Consultation</Link>
            <a href="tel:+19107344426" style={{
              display: 'inline-block', background: 'transparent', color: '#faf8f4',
              fontFamily: 'Cinzel, serif', fontSize: '0.68rem', letterSpacing: '0.2em',
              padding: '13px 35px', border: '1.5px solid rgba(250,248,244,0.3)', textDecoration: 'none', transition: 'all 0.3s',
            }}>+1 (910) 734-4426</a>
          </div>
        </div>
      </section>
    </div>
  );
}