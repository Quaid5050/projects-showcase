import Link from 'next/link';
import Image from 'next/image';

const services = [
  {
    title: 'Mausoleum Construction',
    subtitle: 'From Vision to Enduring Stone',
    desc: 'Full-service design, engineering, and construction of single, double, family, and estate mausoleums. From initial consultation to final installation, we handle every detail with precision and care.',
    steps: ['Site evaluation & consultation', 'Custom architectural design', 'Premium granite fabrication', 'Professional installation', 'Final inspection & delivery'],
    img: '/Estates/Tribute_WalkIn_Gallery.jpg',
    svg: <svg width="44" height="44" viewBox="0 0 44 44" fill="none"><path d="M22 4L4 14V40H40V14L22 4Z" stroke="#b8922a" strokeWidth="1.2" fill="none"/><rect x="14" y="26" width="16" height="14" stroke="#b8922a" strokeWidth="1" fill="none"/><path d="M14 26C14 19 30 19 30 26" stroke="#b8922a" strokeWidth="1" fill="none"/><circle cx="22" cy="4" r="2.5" fill="#b8922a"/><rect x="6" y="14" width="32" height="8" stroke="rgba(184,146,42,0.4)" strokeWidth="0.75" fill="none"/></svg>,
  },
  {
    title: 'Columbarium Design & Build',
    subtitle: 'Elegant Spaces for Cremated Remains',
    desc: 'Custom columbarium structures for families, religious institutions, and cemetery organizations. Available in family, community, and modular configurations with beautiful granite craftsmanship.',
    steps: ['Niche capacity planning', 'Architectural design approval', 'Granite sourcing & cutting', 'On-site assembly', 'Bronze nameplate installation'],
    img: '/Community Columberian/SD-781_Render_Gallery.jpg',
    svg: <svg width="44" height="44" viewBox="0 0 44 44" fill="none"><rect x="4" y="8" width="36" height="32" stroke="#b8922a" strokeWidth="1.2" fill="none"/><path d="M4 8L22 2L40 8" stroke="#b8922a" strokeWidth="1" fill="none"/>{[0,1,2].map(r=>[0,1,2].map(c=>(<rect key={`${r}-${c}`} x={8+c*11} y={14+r*10} width="8" height="7" stroke="rgba(184,146,42,0.5)" strokeWidth="0.7" fill="rgba(184,146,42,0.04)"/>)))}<rect x="8" y="38" width="28" height="2" stroke="rgba(184,146,42,0.3)" strokeWidth="0.5" fill="none"/></svg>,
  },
  {
    title: 'Cremation Bench Fabrication',
    subtitle: 'Memorial Benches in Lasting Granite',
    desc: 'Beautifully crafted granite benches that serve as both memorial tributes and peaceful sitting places — incorporating discreet urn chambers with elegant inscription panels.',
    steps: ['Custom size & shape selection', 'Granite color selection', 'Inscription & engraving design', 'Urn chamber preparation', 'Delivery & placement'],
    img: '/Cremation Benches/SD-032_FINAL_George_Gallery-removebg-preview.png',
    svg: <svg width="44" height="44" viewBox="0 0 44 44" fill="none"><rect x="6" y="22" width="32" height="10" stroke="#b8922a" strokeWidth="1.2" fill="none"/><rect x="10" y="32" width="8" height="10" stroke="#b8922a" strokeWidth="1" fill="none"/><rect x="26" y="32" width="8" height="10" stroke="#b8922a" strokeWidth="1" fill="none"/><rect x="16" y="12" width="12" height="10" stroke="rgba(184,146,42,0.5)" strokeWidth="0.8" fill="rgba(184,146,42,0.04)"/><line x1="4" y1="42" x2="40" y2="42" stroke="rgba(184,146,42,0.3)" strokeWidth="0.75"/></svg>,
  },
  {
    title: 'Cemetery Restoration',
    subtitle: 'Restoring Dignity to Weathered Memorials',
    desc: 'Professional restoration of existing mausoleums, tombstones, and granite memorials. We bring weathered, damaged, or neglected monuments back to their original beauty — honoring the past.',
    steps: ['Structural damage assessment', 'Deep cleaning & treatment', 'Crack repair & repointing', 'Surface polishing & sealing', 'Final documentation & photos'],
    img: '/Estates/Blake-Mausoleum.jpg',
    svg: <svg width="44" height="44" viewBox="0 0 44 44" fill="none"><path d="M22 5L4 16V40H40V16L22 5Z" stroke="#b8922a" strokeWidth="1.2" fill="none"/><rect x="15" y="26" width="14" height="14" stroke="#b8922a" strokeWidth="1" fill="none"/><path d="M15 26C15 19 29 19 29 26" stroke="#b8922a" strokeWidth="1" fill="none"/><circle cx="22" cy="5" r="2.5" fill="#b8922a"/><path d="M30 12L36 18" stroke="#b8922a" strokeWidth="1.2" strokeLinecap="round"/><path d="M30 18L36 12" stroke="#b8922a" strokeWidth="1.2" strokeLinecap="round"/></svg>,
  },
];

export default function ServicesPage() {
  return (
    <div style={{ background: '#faf8f4', paddingTop: '80px' }}>
      {/* Hero */}
      <section style={{ position: 'relative', height: '360px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Image
          src="/Estates/Elite_WalkIn_Gallery.jpg"
          alt="Our services" fill style={{ objectFit: 'cover', objectPosition: 'center 30%' }} quality={85}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,8,5,0.62)' }}/>
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', justifyContent: 'center', marginBottom: '18px' }}>
            <div style={{ width: '36px', height: '1px', background: '#b8922a' }}/>
            <span style={{ fontFamily: 'Cinzel, serif', fontSize: '0.58rem', letterSpacing: '0.4em', color: '#d4aa4a' }}>WHAT WE DO</span>
            <div style={{ width: '36px', height: '1px', background: '#b8922a' }}/>
          </div>
          <h1 style={{ fontFamily: 'Cinzel, serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#faf8f4' }}>Our Services</h1>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', color: 'rgba(244,240,232,0.8)', marginTop: '14px' }}>
            Comprehensive memorial services delivered with expertise and compassion
          </p>
        </div>
      </section>

      {/* Services — alternating layout */}
      <section className="section-pad" style={{ padding: '80px 56px' }}>
        <div style={{ maxWidth: '1150px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0' }}>
          {services.map((s, i) => (
            <div key={i} style={{
              display: 'grid',
              gridTemplateColumns: i % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
              gap: '0',
              marginBottom: '80px',
              background: '#fff',
              border: '1px solid rgba(184,146,42,0.1)',
              overflow: 'hidden',
            }} className="grid-2">
              {/* Image — left on even, right on odd */}
              {i % 2 === 0 && (
                <div style={{ position: 'relative', minHeight: '420px', overflow: 'hidden' }}>
                  <Image src={s.img} alt={s.title} fill style={{ objectFit: 'cover' }} quality={80}/>
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(10,8,5,0.15), transparent)' }}/>
                </div>
              )}

              {/* Content */}
              <div style={{ padding: '52px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ marginBottom: '20px' }}>{s.svg}</div>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '0.95rem', color: '#b8922a', marginBottom: '10px' }}>{s.subtitle}</div>
                <h2 style={{ fontSize: 'clamp(1.4rem, 2vw, 1.8rem)', lineHeight: 1.25, color: '#2c2820', marginBottom: '16px' }}>{s.title}</h2>
                <p style={{ fontSize: '0.9rem', color: '#7a7268', lineHeight: 1.8, marginBottom: '28px' }}>{s.desc}</p>

                {/* Steps */}
                <div style={{ marginBottom: '32px' }}>
                  <div style={{ fontFamily: 'Cinzel, serif', fontSize: '0.6rem', letterSpacing: '0.2em', color: '#b8922a', marginBottom: '14px' }}>OUR PROCESS</div>
                  {s.steps.map((step, si) => (
                    <div key={si} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '10px' }}>
                      <div style={{
                        minWidth: '22px', height: '22px',
                        border: '1px solid rgba(184,146,42,0.4)',
                        background: 'rgba(184,146,42,0.05)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontFamily: 'Cinzel, serif', fontSize: '0.58rem', color: '#b8922a', flexShrink: 0,
                      }}>{si + 1}</div>
                      <span style={{ fontSize: '0.83rem', color: '#4a4540', paddingTop: '3px', lineHeight: 1.5 }}>{step}</span>
                    </div>
                  ))}
                </div>

                <Link href="/contact" className="btn-outline" style={{ alignSelf: 'flex-start', fontSize: '0.63rem' }}>
                  Get Started
                </Link>
              </div>

              {/* Image — right on odd */}
              {i % 2 !== 0 && (
                <div style={{ position: 'relative', minHeight: '420px', overflow: 'hidden' }}>
                  <Image src={s.img} alt={s.title} fill style={{ objectFit: 'cover' }} quality={80}/>
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to left, rgba(10,8,5,0.15), transparent)' }}/>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#2c2820', padding: '72px 56px', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2rem)', color: '#faf8f4', marginBottom: '14px' }}>Ready to Get Started?</h2>
        <p style={{ color: '#7a7268', maxWidth: '440px', margin: '0 auto 36px', fontSize: '0.95rem' }}>
          Contact our team for a free consultation. We&apos;ll assess your needs and provide a detailed proposal.
        </p>
        <Link href="/contact" className="btn-gold">Book a Consultation</Link>
      </section>
    </div>
  );
}
