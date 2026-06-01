import Link from 'next/link';

const stats = [
  { value: '30+', label: 'Years of Craftsmanship' },
  { value: '500+', label: 'Structures Built' },
  { value: '100%', label: 'Custom Designed' },
  { value: '50+', label: 'States Served' },
];

const featuredProducts = [
  {
    name: 'Single Mausoleum',
    desc: 'An intimate and dignified resting place, crafted for one with enduring granite and refined architectural detail.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M24 4L6 16V44H42V16L24 4Z" stroke="#c9a84c" strokeWidth="1" fill="none"/>
        <path d="M18 44V28H30V44" stroke="#c9a84c" strokeWidth="1" fill="none"/>
        <circle cx="24" cy="11" r="2" fill="#c9a84c"/>
        <path d="M6 16H42" stroke="rgba(201,168,76,0.3)" strokeWidth="0.5"/>
      </svg>
    ),
  },
  {
    name: 'Double Mausoleum',
    desc: 'A shared monument of love and legacy, designed to honor two lives with timeless elegance and grace.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M24 4L4 16V44H44V16L24 4Z" stroke="#c9a84c" strokeWidth="1" fill="none"/>
        <path d="M16 44V28H23V44M25 44V28H32V44" stroke="#c9a84c" strokeWidth="1" fill="none"/>
        <circle cx="24" cy="11" r="2" fill="#c9a84c"/>
        <path d="M4 16H44" stroke="rgba(201,168,76,0.3)" strokeWidth="0.5"/>
      </svg>
    ),
  },
  {
    name: 'Columbarium',
    desc: 'Beautifully structured niches for cremated remains — serene, respectful, and architecturally distinguished.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="4" y="8" width="40" height="36" stroke="#c9a84c" strokeWidth="1" fill="none"/>
        <path d="M4 8L24 2L44 8" stroke="#c9a84c" strokeWidth="1" fill="none"/>
        <rect x="8" y="14" width="10" height="8" stroke="#c9a84c" strokeWidth="0.75" fill="none"/>
        <rect x="21" y="14" width="10" height="8" stroke="#c9a84c" strokeWidth="0.75" fill="none"/>
        <rect x="34" y="14" width="8" height="8" stroke="#c9a84c" strokeWidth="0.75" fill="none"/>
        <rect x="8" y="26" width="10" height="8" stroke="#c9a84c" strokeWidth="0.75" fill="none"/>
        <rect x="21" y="26" width="10" height="8" stroke="#c9a84c" strokeWidth="0.75" fill="none"/>
        <rect x="34" y="26" width="8" height="8" stroke="#c9a84c" strokeWidth="0.75" fill="none"/>
      </svg>
    ),
  },
  {
    name: 'Cremation Bench',
    desc: 'A serene granite bench serving as both a memorial tribute and a peaceful resting place for reflection.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="4" y="20" width="40" height="6" stroke="#c9a84c" strokeWidth="1" fill="none"/>
        <rect x="8" y="26" width="6" height="16" stroke="#c9a84c" strokeWidth="1" fill="none"/>
        <rect x="34" y="26" width="6" height="16" stroke="#c9a84c" strokeWidth="1" fill="none"/>
        <path d="M14 38H34" stroke="#c9a84c" strokeWidth="0.75"/>
        <rect x="16" y="12" width="16" height="8" stroke="rgba(201,168,76,0.5)" strokeWidth="0.75" fill="none"/>
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(160deg, #0f0d0a 0%, #0a0a0a 50%, #120e08 100%)',
      }}>
        {/* Background SVG architectural pattern */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.04 }}>
          <svg width="100%" height="100%" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#c9a84c" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)"/>
          </svg>
        </div>

        {/* Large background mausoleum silhouette */}
        <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', opacity: 0.05 }}>
          <svg width="800" height="500" viewBox="0 0 800 500" fill="none">
            <path d="M400 50L50 200V480H750V200L400 50Z" fill="#c9a84c"/>
            <rect x="300" y="320" width="200" height="160" fill="#c9a84c"/>
            <path d="M300 320C300 280 350 260 400 260C450 260 500 280 500 320" fill="#c9a84c"/>
            <rect x="340" y="380" width="50" height="100" fill="#0a0a0a"/>
            <rect x="400" y="380" width="50" height="100" fill="#0a0a0a"/>
            <rect x="370" y="360" width="30" height="30" rx="15" fill="#0a0a0a"/>
          </svg>
        </div>

        {/* Gold light glow */}
        <div style={{
          position: 'absolute',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -60%)',
          width: '600px', height: '400px',
          background: 'radial-gradient(ellipse, rgba(201,168,76,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}/>

        {/* Hero Content */}
        <div style={{ textAlign: 'center', maxWidth: '900px', padding: '0 24px', position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '50px', height: '1px', background: 'rgba(201,168,76,0.5)' }}></div>
              <svg width="8" height="8" viewBox="0 0 8 8"><rect x="1" y="1" width="6" height="6" transform="rotate(45 4 4)" stroke="#c9a84c" strokeWidth="1" fill="none"/></svg>
              <div style={{ fontFamily: 'Cinzel, serif', fontSize: '0.65rem', letterSpacing: '0.4em', color: '#c9a84c' }}>EST. EXCELLENCE IN GRANITE</div>
              <svg width="8" height="8" viewBox="0 0 8 8"><rect x="1" y="1" width="6" height="6" transform="rotate(45 4 4)" stroke="#c9a84c" strokeWidth="1" fill="none"/></svg>
              <div style={{ width: '50px', height: '1px', background: 'rgba(201,168,76,0.5)' }}></div>
            </div>
          </div>

          <h1 style={{
            fontFamily: 'Cinzel, serif',
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: '400',
            lineHeight: '1.15',
            letterSpacing: '0.05em',
            marginBottom: '8px',
            color: '#f0e8d8',
          }}>
            CENTRAL MAUSOLEUMS
          </h1>
          <h1 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(1.8rem, 4vw, 3.5rem)',
            fontWeight: '300',
            fontStyle: 'italic',
            color: '#c9a84c',
            marginBottom: '32px',
            letterSpacing: '0.08em',
          }}>
            & Granite
          </h1>

          <div style={{ width: '80px', height: '1px', background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)', margin: '0 auto 32px' }}></div>

          <p style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
            color: '#d4c9b0',
            fontWeight: '300',
            letterSpacing: '0.05em',
            lineHeight: '1.8',
            marginBottom: '48px',
            maxWidth: '680px',
            margin: '0 auto 48px',
          }}>
            Crafting premium mausoleums, columbariums, and granite memorials 
            that stand as timeless tributes — honoring lives with enduring beauty and dignity.
          </p>

          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/products" className="btn-gold" style={{ textDecoration: 'none' }}>
              Explore Our Works
            </Link>
            <Link href="/contact" className="btn-outline">
              Request a Consultation
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
        }}>
          <div style={{ fontFamily: 'Cinzel, serif', fontSize: '0.55rem', letterSpacing: '0.3em', color: 'rgba(201,168,76,0.6)' }}>SCROLL</div>
          <svg width="1" height="40" viewBox="0 0 1 40">
            <line x1="0.5" y1="0" x2="0.5" y2="40" stroke="rgba(201,168,76,0.4)" strokeWidth="1"/>
          </svg>
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{
        background: 'linear-gradient(90deg, #0f0d0a, #1a1610, #0f0d0a)',
        borderTop: '1px solid rgba(201,168,76,0.2)',
        borderBottom: '1px solid rgba(201,168,76,0.2)',
        padding: '40px 48px',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
          {stats.map((s, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'Cinzel, serif', fontSize: '2rem', color: '#c9a84c', marginBottom: '4px' }}>{s.value}</div>
              <div style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: '#8a7f72', textTransform: 'uppercase' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* INTRO SECTION */}
      <section style={{ padding: '100px 48px', background: 'linear-gradient(180deg, #0a0a0a, #0f0d0a)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <div style={{ width: '30px', height: '1px', background: '#c9a84c' }}></div>
              <span style={{ fontFamily: 'Cinzel, serif', fontSize: '0.6rem', letterSpacing: '0.3em', color: '#c9a84c' }}>OUR LEGACY</span>
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3vw, 2.8rem)', color: '#f0e8d8', lineHeight: '1.3', marginBottom: '24px' }}>
              Built for Eternity.<br/>Designed with Heart.
            </h2>
            <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.15rem', color: '#d4c9b0', lineHeight: '1.8', marginBottom: '24px' }}>
              At Central Mausoleums & Granite, we understand that a memorial is more than stone — it is a sacred promise to preserve memory, honor legacy, and provide families a place of solace for generations.
            </div>
            <p style={{ color: '#8a7f72', fontSize: '0.9rem', lineHeight: '1.8', marginBottom: '36px' }}>
              Each structure is individually crafted with premium granite, architectural precision, and deep respect for the families we serve. From intimate single mausoleums to grand estate structures, we bring vision to life in stone.
            </p>
            <Link href="/about" className="btn-outline">
              Our Story
            </Link>
          </div>

          {/* Architectural SVG illustration */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <svg width="400" height="420" viewBox="0 0 400 420" fill="none">
              {/* Main mausoleum structure */}
              <path d="M200 40L40 130V380H360V130L200 40Z" stroke="#c9a84c" strokeWidth="1" fill="rgba(201,168,76,0.02)"/>
              {/* Roof detail */}
              <path d="M200 40L40 130" stroke="#c9a84c" strokeWidth="1.5"/>
              <path d="M200 40L360 130" stroke="#c9a84c" strokeWidth="1.5"/>
              {/* Columns */}
              <rect x="100" y="200" width="12" height="180" stroke="#c9a84c" strokeWidth="0.75" fill="rgba(201,168,76,0.03)"/>
              <rect x="150" y="200" width="12" height="180" stroke="#c9a84c" strokeWidth="0.75" fill="rgba(201,168,76,0.03)"/>
              <rect x="238" y="200" width="12" height="180" stroke="#c9a84c" strokeWidth="0.75" fill="rgba(201,168,76,0.03)"/>
              <rect x="288" y="200" width="12" height="180" stroke="#c9a84c" strokeWidth="0.75" fill="rgba(201,168,76,0.03)"/>
              {/* Door */}
              <rect x="170" y="280" width="60" height="100" stroke="#c9a84c" strokeWidth="1" fill="rgba(0,0,0,0.5)"/>
              <path d="M170 280C170 252 230 252 230 280" stroke="#c9a84c" strokeWidth="1" fill="none"/>
              {/* Capital details on columns */}
              <rect x="97" y="194" width="18" height="8" stroke="#c9a84c" strokeWidth="0.5" fill="none"/>
              <rect x="147" y="194" width="18" height="8" stroke="#c9a84c" strokeWidth="0.5" fill="none"/>
              <rect x="235" y="194" width="18" height="8" stroke="#c9a84c" strokeWidth="0.5" fill="none"/>
              <rect x="285" y="194" width="18" height="8" stroke="#c9a84c" strokeWidth="0.5" fill="none"/>
              {/* Steps */}
              <rect x="50" y="378" width="300" height="8" stroke="#c9a84c" strokeWidth="0.75" fill="rgba(201,168,76,0.02)"/>
              <rect x="40" y="384" width="320" height="8" stroke="#c9a84c" strokeWidth="0.75" fill="rgba(201,168,76,0.02)"/>
              <rect x="30" y="390" width="340" height="8" stroke="#c9a84c" strokeWidth="0.75" fill="rgba(201,168,76,0.02)"/>
              {/* Apex ornament */}
              <circle cx="200" cy="40" r="5" stroke="#c9a84c" strokeWidth="1" fill="rgba(201,168,76,0.2)"/>
              <circle cx="200" cy="40" r="2" fill="#c9a84c"/>
              {/* Frieze */}
              <rect x="60" y="130" width="280" height="20" stroke="#c9a84c" strokeWidth="0.75" fill="rgba(201,168,76,0.03)"/>
              {/* Side texture lines */}
              <line x1="60" y1="160" x2="60" y2="378" stroke="rgba(201,168,76,0.1)" strokeWidth="0.5"/>
              <line x1="340" y1="160" x2="340" y2="378" stroke="rgba(201,168,76,0.1)" strokeWidth="0.5"/>
              {/* Gold ground line */}
              <line x1="20" y1="400" x2="380" y2="400" stroke="rgba(201,168,76,0.3)" strokeWidth="0.75"/>
            </svg>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section style={{ padding: '80px 48px', background: '#0d0b09' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'center', marginBottom: '16px' }}>
              <div style={{ width: '40px', height: '1px', background: 'rgba(201,168,76,0.5)' }}></div>
              <span style={{ fontFamily: 'Cinzel, serif', fontSize: '0.6rem', letterSpacing: '0.3em', color: '#c9a84c' }}>OUR OFFERINGS</span>
              <div style={{ width: '40px', height: '1px', background: 'rgba(201,168,76,0.5)' }}></div>
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#f0e8d8', marginBottom: '16px' }}>
              Crafted with Precision
            </h2>
            <p style={{ color: '#8a7f72', maxWidth: '500px', margin: '0 auto' }}>
              Each memorial structure is a testament to exceptional craftsmanship, enduring materials, and timeless design.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginBottom: '48px' }}>
            {featuredProducts.map((p, i) => (
              <div key={i} className="product-card" style={{ padding: '40px 32px' }}>
                <div style={{ marginBottom: '24px' }}>{p.icon}</div>
                <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '0.9rem', letterSpacing: '0.1em', color: '#f0e8d8', marginBottom: '16px' }}>
                  {p.name}
                </h3>
                <p style={{ color: '#8a7f72', fontSize: '0.875rem', lineHeight: '1.7' }}>{p.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link href="/products" className="btn-outline">View All Products</Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section style={{ padding: '100px 48px', background: 'linear-gradient(180deg, #0d0b09, #0a0a0a)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'center', marginBottom: '16px' }}>
              <div style={{ width: '40px', height: '1px', background: 'rgba(201,168,76,0.5)' }}></div>
              <span style={{ fontFamily: 'Cinzel, serif', fontSize: '0.6rem', letterSpacing: '0.3em', color: '#c9a84c' }}>WHY CHOOSE US</span>
              <div style={{ width: '40px', height: '1px', background: 'rgba(201,168,76,0.5)' }}></div>
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#f0e8d8' }}>The Central Difference</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            {[
              {
                svg: <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><path d="M18 4L22 13H32L24 19L27 29L18 23L9 29L12 19L4 13H14L18 4Z" stroke="#c9a84c" strokeWidth="1" fill="none"/></svg>,
                title: 'Premium Granite',
                desc: 'We source only the finest granite — durable, weather-resistant, and beautifully polished to last centuries.'
              },
              {
                svg: <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><rect x="4" y="4" width="28" height="28" stroke="#c9a84c" strokeWidth="1" fill="none"/><path d="M10 18L16 24L26 12" stroke="#c9a84c" strokeWidth="1.5"/></svg>,
                title: 'Custom Design',
                desc: 'Every structure is uniquely designed to reflect the personality and legacy of those being honored.'
              },
              {
                svg: <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><circle cx="18" cy="18" r="14" stroke="#c9a84c" strokeWidth="1" fill="none"/><path d="M18 10V20L24 26" stroke="#c9a84c" strokeWidth="1.5"/></svg>,
                title: 'Timely Delivery',
                desc: 'We honor your timeline. Our experienced team ensures every project is completed with precision and care.'
              },
              {
                svg: <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><path d="M18 4C10.3 4 4 10.3 4 18C4 25.7 10.3 32 18 32C25.7 32 32 25.7 32 18" stroke="#c9a84c" strokeWidth="1"/><path d="M24 4L28 8L20 16" stroke="#c9a84c" strokeWidth="1.5"/></svg>,
                title: 'Full Cemetery Services',
                desc: 'From new construction to cemetery restoration, we offer comprehensive services for any memorial need.'
              },
              {
                svg: <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><path d="M18 6L20.4 13.2H28L22 17.6L24.4 24.8L18 20.4L11.6 24.8L14 17.6L8 13.2H15.6L18 6Z" stroke="#c9a84c" strokeWidth="1" fill="none"/><circle cx="18" cy="18" r="3" fill="rgba(201,168,76,0.2)" stroke="#c9a84c" strokeWidth="0.75"/></svg>,
                title: 'Compassionate Service',
                desc: 'We work closely with families, funeral homes, and cemetery administrators with dignity and respect.'
              },
              {
                svg: <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><rect x="6" y="10" width="24" height="18" stroke="#c9a84c" strokeWidth="1" fill="none"/><path d="M6 14H30M14 14V28M22 14V28" stroke="#c9a84c" strokeWidth="0.75"/></svg>,
                title: 'Nationwide Reach',
                desc: 'Serving families and cemeteries across 50+ states, bringing excellence in granite artistry wherever needed.'
              },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{
                  flexShrink: 0,
                  width: '64px', height: '64px',
                  border: '1px solid rgba(201,168,76,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'rgba(201,168,76,0.03)',
                }}>
                  {item.svg}
                </div>
                <div>
                  <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '0.85rem', letterSpacing: '0.1em', color: '#f0e8d8', marginBottom: '8px' }}>
                    {item.title}
                  </h3>
                  <p style={{ color: '#8a7f72', fontSize: '0.875rem', lineHeight: '1.7' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{
        padding: '80px 48px',
        background: 'linear-gradient(135deg, #120e08, #0a0a0a)',
        borderTop: '1px solid rgba(201,168,76,0.15)',
        borderBottom: '1px solid rgba(201,168,76,0.15)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '500px', height: '300px',
          background: 'radial-gradient(ellipse, rgba(201,168,76,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}/>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#f0e8d8', marginBottom: '16px' }}>
            Begin Your Memorial Journey
          </h2>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', color: '#d4c9b0', marginBottom: '40px', maxWidth: '500px', margin: '0 auto 40px' }}>
            Contact us today for a personalized consultation. We&apos;ll guide you through every step with care and expertise.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-gold" style={{ textDecoration: 'none' }}>Schedule a Consultation</Link>
            <a href="tel:+19107344426" className="btn-outline">+1 (910) 734-4426</a>
          </div>
        </div>
      </section>
    </div>
  );
}
