import Link from 'next/link';

const services = [
  {
    title: 'Mausoleum Construction',
    desc: 'Full-service design, engineering, and construction of single, double, family, and estate mausoleums. From initial consultation to final installation, we handle every detail.',
    steps: ['Site evaluation & consultation', 'Custom architectural design', 'Premium granite fabrication', 'Professional installation', 'Final inspection & delivery'],
    svg: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <path d="M30 6L6 20V52H54V20L30 6Z" stroke="#c9a84c" strokeWidth="1.2" fill="none"/>
        <rect x="20" y="35" width="20" height="17" stroke="#c9a84c" strokeWidth="1" fill="none"/>
        <path d="M20 35C20 27 40 27 40 35" stroke="#c9a84c" strokeWidth="1" fill="none"/>
        <circle cx="30" cy="6" r="3" fill="#c9a84c"/>
        <rect x="10" y="20" width="40" height="8" stroke="rgba(201,168,76,0.4)" strokeWidth="0.5" fill="none"/>
        <rect x="10" y="50" width="40" height="4" stroke="rgba(201,168,76,0.3)" strokeWidth="0.5" fill="none"/>
      </svg>
    ),
  },
  {
    title: 'Columbarium Design & Build',
    desc: 'Custom columbarium structures for families, religious institutions, and cemetery organizations. Available in family, community, and modular configurations.',
    steps: ['Niche capacity planning', 'Architectural design approval', 'Granite sourcing & cutting', 'On-site assembly', 'Bronze nameplate installation'],
    svg: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <rect x="4" y="8" width="52" height="48" stroke="#c9a84c" strokeWidth="1.2" fill="none"/>
        <path d="M4 8L30 2L56 8" stroke="#c9a84c" strokeWidth="1" fill="none"/>
        {[0,1,2].map(r=>[0,1,2,3].map(c=>(
          <rect key={`${r}-${c}`} x={8+c*12} y={14+r*14} width="9" height="9" stroke="rgba(201,168,76,0.5)" strokeWidth="0.6" fill="rgba(201,168,76,0.03)"/>
        )))}
        <rect x="8" y="54" width="44" height="2" stroke="rgba(201,168,76,0.3)" strokeWidth="0.5" fill="none"/>
      </svg>
    ),
  },
  {
    title: 'Cremation Bench Fabrication',
    desc: 'Beautifully crafted granite benches that serve as both memorial tributes and peaceful sitting places — incorporating discreet urn chambers with elegant design.',
    steps: ['Custom size & shape selection', 'Granite color selection', 'Inscription & engraving design', 'Urn chamber preparation', 'Delivery & placement'],
    svg: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <rect x="6" y="24" width="48" height="12" stroke="#c9a84c" strokeWidth="1.2" fill="none"/>
        <rect x="10" y="36" width="12" height="18" stroke="#c9a84c" strokeWidth="1" fill="none"/>
        <rect x="38" y="36" width="12" height="18" stroke="#c9a84c" strokeWidth="1" fill="none"/>
        <rect x="20" y="12" width="20" height="12" stroke="rgba(201,168,76,0.5)" strokeWidth="0.75" fill="rgba(201,168,76,0.03)"/>
        <line x1="24" y1="18" x2="36" y2="18" stroke="rgba(201,168,76,0.3)" strokeWidth="0.5"/>
        <line x1="4" y1="56" x2="56" y2="56" stroke="rgba(201,168,76,0.3)" strokeWidth="0.75"/>
      </svg>
    ),
  },
  {
    title: 'Cemetery Restoration',
    desc: 'Professional restoration of existing mausoleums, tombstones, and granite memorials. We bring weathered, damaged, or neglected monuments back to their original beauty.',
    steps: ['Structural damage assessment', 'Deep cleaning & treatment', 'Crack repair & repointing', 'Surface polishing & sealing', 'Final documentation'],
    svg: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <path d="M15 10L4 18V50H26V18L15 10Z" stroke="rgba(201,168,76,0.3)" strokeWidth="0.75" fill="none" strokeDasharray="3 2"/>
        <path d="M45 8L30 18V52H58V18L45 8Z" stroke="#c9a84c" strokeWidth="1.2" fill="none"/>
        <path d="M28 30H30" stroke="#c9a84c" strokeWidth="1"/>
        <path d="M28 34L30 30" stroke="#c9a84c" strokeWidth="1.2" fill="none"/>
        <rect x="34" y="34" width="16" height="18" stroke="#c9a84c" strokeWidth="0.75" fill="none"/>
        <path d="M34 34C34 26 50 26 50 34" stroke="#c9a84c" strokeWidth="0.75" fill="none"/>
        <circle cx="45" cy="8" r="3" fill="#c9a84c"/>
        <circle cx="15" cy="10" r="2" stroke="rgba(201,168,76,0.3)" strokeWidth="0.75" fill="none"/>
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero */}
      <section style={{
        padding: '80px 48px 60px',
        background: 'linear-gradient(160deg, #0f0d0a 0%, #0a0a0a 100%)',
        textAlign: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.03 }}>
          <svg width="100%" height="100%" viewBox="0 0 1200 500" preserveAspectRatio="xMidYMid slice">
            <defs><pattern id="grid4" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="#c9a84c" strokeWidth="0.5"/></pattern></defs>
            <rect width="100%" height="100%" fill="url(#grid4)"/>
          </svg>
        </div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'center', marginBottom: '20px' }}>
            <div style={{ width: '40px', height: '1px', background: 'rgba(201,168,76,0.5)' }}></div>
            <span style={{ fontFamily: 'Cinzel, serif', fontSize: '0.6rem', letterSpacing: '0.3em', color: '#c9a84c' }}>WHAT WE DO</span>
            <div style={{ width: '40px', height: '1px', background: 'rgba(201,168,76,0.5)' }}></div>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#f0e8d8', marginBottom: '20px' }}>Our Services</h1>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', color: '#d4c9b0', maxWidth: '550px', margin: '0 auto' }}>
            Comprehensive memorial services — from new construction to restoration — delivered with expertise and compassion.
          </p>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: '80px 48px', background: '#0a0a0a' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '64px' }}>
          {services.map((s, i) => (
            <div key={i} style={{
              display: 'grid',
              gridTemplateColumns: i % 2 === 0 ? '1fr 1.6fr' : '1.6fr 1fr',
              gap: '60px',
              alignItems: 'center',
              borderBottom: '1px solid rgba(201,168,76,0.08)',
              paddingBottom: '64px',
            }}>
              {i % 2 !== 0 && (
                <div style={{ padding: '40px', background: 'linear-gradient(145deg, #1a1814, #120e09)', border: '1px solid rgba(201,168,76,0.12)', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>{s.svg}</div>
                  <div>
                    <div style={{ fontFamily: 'Cinzel, serif', fontSize: '0.6rem', letterSpacing: '0.3em', color: '#c9a84c', marginBottom: '16px' }}>PROCESS</div>
                    {s.steps.map((step, si) => (
                      <div key={si} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '12px' }}>
                        <div style={{
                          minWidth: '24px', height: '24px',
                          border: '1px solid rgba(201,168,76,0.3)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontFamily: 'Cinzel, serif', fontSize: '0.6rem', color: '#c9a84c',
                        }}>{si + 1}</div>
                        <span style={{ color: '#8a7f72', fontSize: '0.85rem', paddingTop: '4px' }}>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <div style={{ width: '30px', height: '1px', background: '#c9a84c' }}></div>
                  <span style={{ fontFamily: 'Cinzel, serif', fontSize: '0.55rem', letterSpacing: '0.3em', color: '#c9a84c' }}>SERVICE</span>
                </div>
                <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', color: '#f0e8d8', lineHeight: '1.3', marginBottom: '20px' }}>{s.title}</h2>
                <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', color: '#d4c9b0', lineHeight: '1.8', marginBottom: '32px' }}>{s.desc}</p>
                <Link href="/contact" className="btn-outline" style={{ fontSize: '0.65rem' }}>
                  Get Started
                </Link>
              </div>
              {i % 2 === 0 && (
                <div style={{ padding: '40px', background: 'linear-gradient(145deg, #1a1814, #120e09)', border: '1px solid rgba(201,168,76,0.12)', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>{s.svg}</div>
                  <div>
                    <div style={{ fontFamily: 'Cinzel, serif', fontSize: '0.6rem', letterSpacing: '0.3em', color: '#c9a84c', marginBottom: '16px' }}>PROCESS</div>
                    {s.steps.map((step, si) => (
                      <div key={si} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '12px' }}>
                        <div style={{
                          minWidth: '24px', height: '24px',
                          border: '1px solid rgba(201,168,76,0.3)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontFamily: 'Cinzel, serif', fontSize: '0.6rem', color: '#c9a84c',
                        }}>{si + 1}</div>
                        <span style={{ color: '#8a7f72', fontSize: '0.85rem', paddingTop: '4px' }}>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 48px', background: '#0d0b09', textAlign: 'center', borderTop: '1px solid rgba(201,168,76,0.1)' }}>
        <h2 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2rem)', color: '#f0e8d8', marginBottom: '16px' }}>Ready to Get Started?</h2>
        <p style={{ color: '#8a7f72', maxWidth: '480px', margin: '0 auto 36px' }}>
          Contact our team for a free consultation. We&apos;ll assess your needs and provide a detailed proposal.
        </p>
        <Link href="/contact" className="btn-gold" style={{ textDecoration: 'none' }}>Book a Consultation</Link>
      </section>
    </div>
  );
}
