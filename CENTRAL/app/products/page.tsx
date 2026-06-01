import Link from 'next/link';

const products = [
  {
    name: 'Single Mausoleum',
    category: 'Mausoleum',
    desc: 'An intimate and dignified structure for one, crafted from premium granite with classical architectural detail. Ideal for individuals seeking a private, above-ground memorial.',
    features: ['Premium granite construction', 'Custom engraving available', 'Weather-sealed interior', 'Classical or modern design'],
    svg: (
      <svg width="100%" height="200" viewBox="0 0 300 200" fill="none">
        <path d="M150 20L40 70V175H260V70L150 20Z" stroke="#c9a84c" strokeWidth="1" fill="rgba(201,168,76,0.02)"/>
        <path d="M150 20L40 70M150 20L260 70" stroke="#c9a84c" strokeWidth="1.5"/>
        <rect x="90" y="100" width="8" height="75" stroke="rgba(201,168,76,0.5)" strokeWidth="0.75" fill="none"/>
        <rect x="202" y="100" width="8" height="75" stroke="rgba(201,168,76,0.5)" strokeWidth="0.75" fill="none"/>
        <rect x="120" y="125" width="60" height="50" stroke="#c9a84c" strokeWidth="1" fill="rgba(0,0,0,0.4)"/>
        <path d="M120 125C120 108 180 108 180 125" stroke="#c9a84c" strokeWidth="1" fill="none"/>
        <rect x="50" y="173" width="200" height="6" stroke="rgba(201,168,76,0.4)" strokeWidth="0.5" fill="none"/>
        <circle cx="150" cy="20" r="4" fill="#c9a84c"/>
        <rect x="55" y="70" width="190" height="14" stroke="rgba(201,168,76,0.4)" strokeWidth="0.5" fill="none"/>
      </svg>
    ),
  },
  {
    name: 'Double Mausoleum',
    category: 'Mausoleum',
    desc: 'A shared monument honoring two lives, designed with spacious dual crypts and timeless architectural elegance. Perfect for couples and life partners.',
    features: ['Dual crypt capacity', 'Matching interior finishes', 'Joint inscription panels', 'Bronze door options'],
    svg: (
      <svg width="100%" height="200" viewBox="0 0 300 200" fill="none">
        <path d="M150 18L30 72V175H270V72L150 18Z" stroke="#c9a84c" strokeWidth="1" fill="rgba(201,168,76,0.02)"/>
        <path d="M150 18L30 72M150 18L270 72" stroke="#c9a84c" strokeWidth="1.5"/>
        <rect x="75" y="100" width="8" height="75" stroke="rgba(201,168,76,0.5)" strokeWidth="0.75" fill="none"/>
        <rect x="217" y="100" width="8" height="75" stroke="rgba(201,168,76,0.5)" strokeWidth="0.75" fill="none"/>
        <rect x="108" y="125" width="38" height="50" stroke="#c9a84c" strokeWidth="1" fill="rgba(0,0,0,0.4)"/>
        <rect x="154" y="125" width="38" height="50" stroke="#c9a84c" strokeWidth="1" fill="rgba(0,0,0,0.4)"/>
        <path d="M108 125C108 108 146 108 146 125" stroke="#c9a84c" strokeWidth="1" fill="none"/>
        <path d="M154 125C154 108 192 108 192 125" stroke="#c9a84c" strokeWidth="1" fill="none"/>
        <rect x="40" y="173" width="220" height="6" stroke="rgba(201,168,76,0.4)" strokeWidth="0.5" fill="none"/>
        <circle cx="150" cy="18" r="4" fill="#c9a84c"/>
        <rect x="42" y="72" width="216" height="14" stroke="rgba(201,168,76,0.4)" strokeWidth="0.5" fill="none"/>
      </svg>
    ),
  },
  {
    name: 'Four Crypt Mausoleum',
    category: 'Mausoleum',
    desc: 'A distinguished family structure accommodating four crypts with grand proportions and refined granite craftsmanship, ideal for immediate family memorialization.',
    features: ['Four individual crypts', 'Stacked or side-by-side layout', 'Interior ventilation system', 'Family name inscription'],
    svg: (
      <svg width="100%" height="200" viewBox="0 0 300 200" fill="none">
        <path d="M150 15L20 75V180H280V75L150 15Z" stroke="#c9a84c" strokeWidth="1" fill="rgba(201,168,76,0.02)"/>
        <path d="M150 15L20 75M150 15L280 75" stroke="#c9a84c" strokeWidth="1.5"/>
        {[65,115,165,215].map((x,i) => <rect key={i} x={x} y="100" width="7" height="80" stroke="rgba(201,168,76,0.4)" strokeWidth="0.6" fill="none"/>)}
        <rect x="88" y="115" width="40" height="30" stroke="#c9a84c" strokeWidth="0.75" fill="rgba(0,0,0,0.3)"/>
        <rect x="172" y="115" width="40" height="30" stroke="#c9a84c" strokeWidth="0.75" fill="rgba(0,0,0,0.3)"/>
        <rect x="88" y="148" width="40" height="30" stroke="#c9a84c" strokeWidth="0.75" fill="rgba(0,0,0,0.3)"/>
        <rect x="172" y="148" width="40" height="30" stroke="#c9a84c" strokeWidth="0.75" fill="rgba(0,0,0,0.3)"/>
        <rect x="30" y="178" width="240" height="6" stroke="rgba(201,168,76,0.4)" strokeWidth="0.5" fill="none"/>
        <circle cx="150" cy="15" r="4" fill="#c9a84c"/>
        <rect x="28" y="75" width="244" height="14" stroke="rgba(201,168,76,0.4)" strokeWidth="0.5" fill="none"/>
      </svg>
    ),
  },
  {
    name: 'Six Crypt Mausoleum',
    category: 'Mausoleum',
    desc: 'A grand estate-level memorial accommodating six family members. Stately proportions, premium granite, and architectural grandeur define this impressive structure.',
    features: ['Six individual crypts', 'Grand entryway', 'Interior marble options', 'Stained glass available'],
    svg: (
      <svg width="100%" height="200" viewBox="0 0 300 200" fill="none">
        <path d="M150 12L15 78V182H285V78L150 12Z" stroke="#c9a84c" strokeWidth="1" fill="rgba(201,168,76,0.02)"/>
        <path d="M150 12L15 78M150 12L285 78" stroke="#c9a84c" strokeWidth="1.5"/>
        {[48,86,124,162,200,238].map((x,i) => <rect key={i} x={x} y="102" width="7" height="80" stroke="rgba(201,168,76,0.35)" strokeWidth="0.6" fill="none"/>)}
        {[65,145,225].map((x,i) => (
          <g key={i}>
            <rect x={x} y="112" width="28" height="22" stroke="#c9a84c" strokeWidth="0.75" fill="rgba(0,0,0,0.3)"/>
            <rect x={x} y="138" width="28" height="22" stroke="#c9a84c" strokeWidth="0.75" fill="rgba(0,0,0,0.3)"/>
            <rect x={x} y="162" width="28" height="16" stroke="#c9a84c" strokeWidth="0.75" fill="rgba(0,0,0,0.3)"/>
          </g>
        ))}
        <rect x="25" y="180" width="250" height="5" stroke="rgba(201,168,76,0.4)" strokeWidth="0.5" fill="none"/>
        <circle cx="150" cy="12" r="4" fill="#c9a84c"/>
        <rect x="23" y="78" width="254" height="14" stroke="rgba(201,168,76,0.4)" strokeWidth="0.5" fill="none"/>
        <path d="M100 78V92M150 78V92M200 78V92" stroke="rgba(201,168,76,0.3)" strokeWidth="0.5"/>
      </svg>
    ),
  },
  {
    name: 'Estate Mausoleum',
    category: 'Estate',
    desc: 'The pinnacle of memorial architecture — a grand private estate mausoleum with full interior access, seating, and capacity for an entire family legacy.',
    features: ['Walk-in interior', 'Multiple crypt levels', 'Interior seating & windows', 'Fully custom design'],
    svg: (
      <svg width="100%" height="200" viewBox="0 0 300 200" fill="none">
        <path d="M150 10L10 80V185H290V80L150 10Z" stroke="#c9a84c" strokeWidth="1.2" fill="rgba(201,168,76,0.02)"/>
        <path d="M150 10L10 80M150 10L290 80" stroke="#c9a84c" strokeWidth="2"/>
        {[30,60,90,200,230,260].map((x,i)=><rect key={i} x={x} y="105" width="9" height="80" stroke="rgba(201,168,76,0.45)" strokeWidth="0.75" fill="none"/>)}
        {[30,60,90,200,230,260].map((x,i)=><rect key={i} x={x-2} y="98" width="13" height="8" stroke="rgba(201,168,76,0.3)" strokeWidth="0.5" fill="none"/>)}
        <rect x="117" y="130" width="66" height="55" stroke="#c9a84c" strokeWidth="1.2" fill="rgba(0,0,0,0.5)"/>
        <path d="M117 130C117 104 183 104 183 130" stroke="#c9a84c" strokeWidth="1.2" fill="none"/>
        <circle cx="170" cy="158" r="3" stroke="#c9a84c" strokeWidth="0.75" fill="rgba(201,168,76,0.3)"/>
        <rect x="20" y="183" width="260" height="5" stroke="rgba(201,168,76,0.4)" strokeWidth="0.5" fill="none"/>
        <rect x="10" y="188" width="280" height="5" stroke="rgba(201,168,76,0.35)" strokeWidth="0.5" fill="none"/>
        <circle cx="150" cy="10" r="5" stroke="#c9a84c" strokeWidth="1.2" fill="rgba(201,168,76,0.2)"/>
        <circle cx="150" cy="10" r="2" fill="#c9a84c"/>
        <rect x="18" y="80" width="264" height="16" stroke="rgba(201,168,76,0.45)" strokeWidth="0.75" fill="rgba(201,168,76,0.02)"/>
        {/* Windows on sides */}
        <rect x="37" y="118" width="14" height="18" stroke="rgba(201,168,76,0.4)" strokeWidth="0.5" fill="rgba(201,168,76,0.04)"/>
        <rect x="249" y="118" width="14" height="18" stroke="rgba(201,168,76,0.4)" strokeWidth="0.5" fill="rgba(201,168,76,0.04)"/>
      </svg>
    ),
  },
  {
    name: 'Family Columbarium',
    category: 'Columbarium',
    desc: 'Beautifully designed niches for cremated remains arranged for an entire family. A graceful, space-efficient memorial honoring multiple loved ones.',
    features: ['Multiple niche configurations', 'Individual name plates', 'Sealed niche fronts', 'Optional photo insets'],
    svg: (
      <svg width="100%" height="200" viewBox="0 0 300 200" fill="none">
        <rect x="20" y="20" width="260" height="160" stroke="#c9a84c" strokeWidth="1" fill="rgba(201,168,76,0.02)"/>
        <path d="M20 20L150 5L280 20" stroke="#c9a84c" strokeWidth="1.2" fill="none"/>
        {[0,1,2,3].map(row => [0,1,2,3,4].map(col => (
          <rect key={`${row}-${col}`} x={28+col*48} y={30+row*36} width="40" height="28" stroke="rgba(201,168,76,0.5)" strokeWidth="0.75" fill="rgba(201,168,76,0.03)"/>
        )))}
        <rect x="28" y="174" width="244" height="6" stroke="rgba(201,168,76,0.3)" strokeWidth="0.5" fill="none"/>
        <circle cx="150" cy="5" r="3" fill="#c9a84c"/>
      </svg>
    ),
  },
  {
    name: 'Community Columbarium',
    category: 'Columbarium',
    desc: 'Large-scale columbarium structures designed for cemeteries, churches, and community organizations — accommodating hundreds of niches with elegant design.',
    features: ['High-capacity niche design', 'Modular expandable system', 'Weather-resistant granite', 'Custom engraving'],
    svg: (
      <svg width="100%" height="200" viewBox="0 0 300 200" fill="none">
        <rect x="10" y="15" width="280" height="170" stroke="#c9a84c" strokeWidth="1.2" fill="rgba(201,168,76,0.02)"/>
        <path d="M10 15L150 2L290 15" stroke="#c9a84c" strokeWidth="1.5" fill="none"/>
        {[0,1,2,3,4].map(row => [0,1,2,3,4,5,6].map(col => (
          <rect key={`${row}-${col}`} x={18+col*38} y={22+row*30} width="30" height="22" stroke="rgba(201,168,76,0.4)" strokeWidth="0.6" fill="rgba(201,168,76,0.025)"/>
        )))}
        <rect x="18" y="178" width="264" height="5" stroke="rgba(201,168,76,0.3)" strokeWidth="0.5" fill="none"/>
        <circle cx="150" cy="2" r="3" fill="#c9a84c"/>
      </svg>
    ),
  },
  {
    name: 'Cremation Bench',
    category: 'Cremation',
    desc: 'A serene granite bench that serves as both a beautiful memorial and a peaceful place for reflection, incorporating an urn chamber with discreet elegance.',
    features: ['Integrated urn chamber', 'Custom inscription panel', 'Multiple granite colors', 'Weather-resistant seal'],
    svg: (
      <svg width="100%" height="200" viewBox="0 0 300 200" fill="none">
        <rect x="30" y="90" width="240" height="35" stroke="#c9a84c" strokeWidth="1.2" fill="rgba(201,168,76,0.03)"/>
        <rect x="50" y="123" width="40" height="65" stroke="#c9a84c" strokeWidth="1" fill="rgba(201,168,76,0.02)"/>
        <rect x="210" y="123" width="40" height="65" stroke="#c9a84c" strokeWidth="1" fill="rgba(201,168,76,0.02)"/>
        <rect x="60" y="175" width="180" height="10" stroke="rgba(201,168,76,0.4)" strokeWidth="0.5" fill="none"/>
        {/* Inscription plaque */}
        <rect x="100" y="45" width="100" height="50" stroke="rgba(201,168,76,0.5)" strokeWidth="0.75" fill="rgba(201,168,76,0.03)"/>
        <line x1="110" y1="62" x2="190" y2="62" stroke="rgba(201,168,76,0.3)" strokeWidth="0.5"/>
        <line x1="110" y1="72" x2="190" y2="72" stroke="rgba(201,168,76,0.3)" strokeWidth="0.5"/>
        <line x1="110" y1="82" x2="170" y2="82" stroke="rgba(201,168,76,0.3)" strokeWidth="0.5"/>
        {/* Ground */}
        <line x1="20" y1="190" x2="280" y2="190" stroke="rgba(201,168,76,0.3)" strokeWidth="0.75"/>
      </svg>
    ),
  },
  {
    name: 'Cemetery Restoration',
    category: 'Service',
    desc: 'Professional restoration of existing mausoleums, memorials, and granite structures — bringing weathered monuments back to their original dignity and beauty.',
    features: ['Structural assessment', 'Surface cleaning & sealing', 'Crack and joint repair', 'Complete refurbishment'],
    svg: (
      <svg width="100%" height="200" viewBox="0 0 300 200" fill="none">
        {/* Before/after concept */}
        <path d="M70 40L20 70V160H120V70L70 40Z" stroke="rgba(201,168,76,0.3)" strokeWidth="1" fill="none" strokeDasharray="4 3"/>
        <path d="M230 35L175 68V162H285V68L230 35Z" stroke="#c9a84c" strokeWidth="1.2" fill="rgba(201,168,76,0.02)"/>
        {/* Arrow */}
        <path d="M128 100H168" stroke="#c9a84c" strokeWidth="1"/>
        <path d="M158 94L168 100L158 106" stroke="#c9a84c" strokeWidth="1" fill="none"/>
        {/* Left weathered */}
        <rect x="45" y="115" width="50" height="45" stroke="rgba(201,168,76,0.2)" strokeWidth="0.75" fill="none" strokeDasharray="3 2"/>
        <circle cx="70" cy="40" r="3" stroke="rgba(201,168,76,0.3)" strokeWidth="0.75" fill="none"/>
        {/* Right restored */}
        <rect x="193" y="110" width="75" height="52" stroke="#c9a84c" strokeWidth="1" fill="rgba(0,0,0,0.3)"/>
        <path d="M193 110C193 92 268 92 268 110" stroke="#c9a84c" strokeWidth="1" fill="none"/>
        <circle cx="230" cy="35" r="4" fill="#c9a84c"/>
        <rect x="185" y="160" width="100" height="5" stroke="rgba(201,168,76,0.4)" strokeWidth="0.5" fill="none"/>
        <text x="55" y="185" fontSize="8" fill="rgba(201,168,76,0.4)" fontFamily="Cinzel, serif">BEFORE</text>
        <text x="210" y="185" fontSize="8" fill="#c9a84c" fontFamily="Cinzel, serif">AFTER</text>
      </svg>
    ),
  },
];

const categories = ['All', 'Mausoleum', 'Columbarium', 'Cremation', 'Estate', 'Service'];

export default function ProductsPage() {
  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero */}
      <section style={{
        padding: '80px 48px 60px',
        background: 'linear-gradient(160deg, #0f0d0a 0%, #0a0a0a 100%)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.03 }}>
          <svg width="100%" height="100%" viewBox="0 0 1200 500" preserveAspectRatio="xMidYMid slice">
            <defs><pattern id="grid3" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="#c9a84c" strokeWidth="0.5"/></pattern></defs>
            <rect width="100%" height="100%" fill="url(#grid3)"/>
          </svg>
        </div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'center', marginBottom: '20px' }}>
            <div style={{ width: '40px', height: '1px', background: 'rgba(201,168,76,0.5)' }}></div>
            <span style={{ fontFamily: 'Cinzel, serif', fontSize: '0.6rem', letterSpacing: '0.3em', color: '#c9a84c' }}>OUR COLLECTION</span>
            <div style={{ width: '40px', height: '1px', background: 'rgba(201,168,76,0.5)' }}></div>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#f0e8d8', marginBottom: '20px' }}>Products & Services</h1>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', color: '#d4c9b0', maxWidth: '550px', margin: '0 auto' }}>
            From intimate single mausoleums to grand community columbariums — each crafted with precision and care.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section style={{ padding: '80px 48px', background: '#0a0a0a' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '32px' }}>
            {products.map((p, i) => (
              <div key={i} className="product-card" style={{ overflow: 'hidden' }}>
                {/* SVG illustration area */}
                <div style={{
                  background: 'linear-gradient(145deg, #0d0b09, #120e08)',
                  borderBottom: '1px solid rgba(201,168,76,0.1)',
                  padding: '24px',
                  position: 'relative',
                }}>
                  <div style={{
                    position: 'absolute', top: '12px', right: '16px',
                    fontFamily: 'Cinzel, serif', fontSize: '0.55rem', letterSpacing: '0.2em',
                    color: '#c9a84c', background: 'rgba(201,168,76,0.08)',
                    border: '1px solid rgba(201,168,76,0.2)',
                    padding: '4px 10px',
                  }}>{p.category}</div>
                  {p.svg}
                </div>
                {/* Content */}
                <div style={{ padding: '28px 28px 32px' }}>
                  <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '1rem', letterSpacing: '0.08em', color: '#f0e8d8', marginBottom: '12px' }}>
                    {p.name}
                  </h3>
                  <p style={{ color: '#8a7f72', fontSize: '0.875rem', lineHeight: '1.7', marginBottom: '20px' }}>{p.desc}</p>
                  <div style={{ marginBottom: '24px' }}>
                    {p.features.map((f, fi) => (
                      <div key={fi} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6L5 9L10 3" stroke="#c9a84c" strokeWidth="1.2"/>
                        </svg>
                        <span style={{ color: '#a09580', fontSize: '0.8rem' }}>{f}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact" className="btn-outline" style={{ fontSize: '0.65rem', padding: '10px 24px' }}>
                    Request a Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 48px', background: '#0d0b09', textAlign: 'center', borderTop: '1px solid rgba(201,168,76,0.1)' }}>
        <h2 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2rem)', color: '#f0e8d8', marginBottom: '16px' }}>Need a Custom Solution?</h2>
        <p style={{ color: '#8a7f72', maxWidth: '480px', margin: '0 auto 36px' }}>
          Every memorial is unique. Contact us for a personalized consultation and custom pricing based on your specific requirements.
        </p>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact" className="btn-gold" style={{ textDecoration: 'none' }}>Request Custom Quote</Link>
          <a href="tel:+19107344426" className="btn-outline">Call Us Directly</a>
        </div>
      </section>
    </div>
  );
}
