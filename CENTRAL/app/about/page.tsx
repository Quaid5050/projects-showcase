import Link from 'next/link';

export default function AboutPage() {
  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero */}
      <section style={{
        padding: '100px 48px 80px',
        background: 'linear-gradient(160deg, #0f0d0a 0%, #0a0a0a 100%)',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.03 }}>
          <svg width="100%" height="100%" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="grid2" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#c9a84c" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid2)"/>
          </svg>
        </div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'center', marginBottom: '20px' }}>
            <div style={{ width: '40px', height: '1px', background: 'rgba(201,168,76,0.5)' }}></div>
            <span style={{ fontFamily: 'Cinzel, serif', fontSize: '0.6rem', letterSpacing: '0.3em', color: '#c9a84c' }}>OUR STORY</span>
            <div style={{ width: '40px', height: '1px', background: 'rgba(201,168,76,0.5)' }}></div>
          </div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', color: '#f0e8d8', marginBottom: '24px' }}>About Us</h1>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', color: '#d4c9b0', maxWidth: '600px', margin: '0 auto' }}>
            A legacy of craftsmanship, built on dignity, quality, and unwavering dedication to honoring lives.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section style={{ padding: '80px 48px', background: '#0a0a0a' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div>
            {/* SVG illustration of craftsman/memorial */}
            <svg width="100%" height="380" viewBox="0 0 480 380" fill="none">
              {/* Background subtle grid */}
              <defs>
                <pattern id="smallgrid" width="30" height="30" patternUnits="userSpaceOnUse">
                  <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(201,168,76,0.06)" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="480" height="380" fill="url(#smallgrid)"/>
              {/* Memorial structure */}
              <path d="M240 30L80 110V340H400V110L240 30Z" stroke="rgba(201,168,76,0.6)" strokeWidth="1.5" fill="rgba(201,168,76,0.02)"/>
              <path d="M240 30L80 110" stroke="#c9a84c" strokeWidth="2"/>
              <path d="M240 30L400 110" stroke="#c9a84c" strokeWidth="2"/>
              {/* Columns */}
              {[120, 160, 200, 280, 320, 360].map((x, i) => (
                <rect key={i} x={x} y="170" width="10" height="170" stroke="rgba(201,168,76,0.4)" strokeWidth="0.75" fill="rgba(201,168,76,0.02)"/>
              ))}
              {/* Entablature */}
              <rect x="90" y="110" width="300" height="25" stroke="rgba(201,168,76,0.5)" strokeWidth="1" fill="rgba(201,168,76,0.03)"/>
              <rect x="95" y="115" width="290" height="6" stroke="rgba(201,168,76,0.3)" strokeWidth="0.5" fill="none"/>
              {/* Capital details */}
              {[117, 157, 197, 277, 317, 357].map((x, i) => (
                <rect key={i} x={x} y="163" width="16" height="8" stroke="rgba(201,168,76,0.35)" strokeWidth="0.5" fill="none"/>
              ))}
              {/* Door */}
              <rect x="205" y="250" width="70" height="90" stroke="#c9a84c" strokeWidth="1.2" fill="rgba(0,0,0,0.6)"/>
              <path d="M205 250C205 222 275 222 275 250" stroke="#c9a84c" strokeWidth="1.2" fill="none"/>
              {/* Door handle */}
              <circle cx="265" cy="296" r="3" stroke="#c9a84c" strokeWidth="0.75" fill="rgba(201,168,76,0.3)"/>
              {/* Steps */}
              <rect x="90" y="338" width="300" height="8" stroke="rgba(201,168,76,0.4)" strokeWidth="0.75" fill="rgba(201,168,76,0.02)"/>
              <rect x="80" y="344" width="320" height="8" stroke="rgba(201,168,76,0.4)" strokeWidth="0.75" fill="rgba(201,168,76,0.02)"/>
              <rect x="70" y="350" width="340" height="8" stroke="rgba(201,168,76,0.4)" strokeWidth="0.75" fill="rgba(201,168,76,0.02)"/>
              {/* Apex */}
              <circle cx="240" cy="30" r="6" stroke="#c9a84c" strokeWidth="1.2" fill="rgba(201,168,76,0.15)"/>
              <circle cx="240" cy="30" r="2.5" fill="#c9a84c"/>
              {/* Ground line */}
              <line x1="40" y1="362" x2="440" y2="362" stroke="rgba(201,168,76,0.3)" strokeWidth="0.75"/>
              {/* Decorative corner flourishes */}
              <path d="M40 362L40 340M40 362L60 362" stroke="rgba(201,168,76,0.25)" strokeWidth="0.75"/>
              <path d="M440 362L440 340M440 362L420 362" stroke="rgba(201,168,76,0.25)" strokeWidth="0.75"/>
            </svg>
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <div style={{ width: '30px', height: '1px', background: '#c9a84c' }}></div>
              <span style={{ fontFamily: 'Cinzel, serif', fontSize: '0.6rem', letterSpacing: '0.3em', color: '#c9a84c' }}>WHO WE ARE</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', color: '#f0e8d8', lineHeight: '1.3', marginBottom: '24px' }}>
              Dedicated to Honoring Lives Through Lasting Stone
            </h2>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', color: '#d4c9b0', lineHeight: '1.8', marginBottom: '20px' }}>
              Central Mausoleums & Granite was founded on a singular belief: that every life deserves a memorial worthy of its meaning. We bring that belief to every structure we create.
            </p>
            <p style={{ color: '#8a7f72', fontSize: '0.9rem', lineHeight: '1.8', marginBottom: '20px' }}>
              With decades of experience, our master craftsmen work with the finest granite to build mausoleums, columbariums, and memorial structures that endure through generations. We serve families, cemeteries, funeral homes, and religious institutions across the country.
            </p>
            <p style={{ color: '#8a7f72', fontSize: '0.9rem', lineHeight: '1.8' }}>
              From initial design consultation through final installation, we remain your trusted partner — bringing compassion, expertise, and excellence to one of life&apos;s most meaningful decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '80px 48px', background: '#0d0b09' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', color: '#f0e8d8', marginBottom: '12px' }}>Our Core Values</h2>
            <div style={{ width: '60px', height: '1px', background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)', margin: '0 auto' }}></div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '32px' }}>
            {[
              {
                svg: <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M20 4L36 14V26L20 36L4 26V14L20 4Z" stroke="#c9a84c" strokeWidth="1" fill="none"/><path d="M20 12L24 18H30L25 22L27 29L20 25L13 29L15 22L10 18H16L20 12Z" stroke="rgba(201,168,76,0.5)" strokeWidth="0.75" fill="none"/></svg>,
                title: 'Excellence',
                desc: 'We hold ourselves to the highest standards of craftsmanship in every detail, every structure, every time.'
              },
              {
                svg: <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="16" stroke="#c9a84c" strokeWidth="1" fill="none"/><path d="M20 10V20L26 26" stroke="#c9a84c" strokeWidth="1.5"/><circle cx="20" cy="20" r="2" fill="#c9a84c"/></svg>,
                title: 'Integrity',
                desc: 'We operate with transparency, honesty, and respect — from pricing to delivery, always.'
              },
              {
                svg: <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M20 6C14 6 8 11 8 18C8 27 20 34 20 34C20 34 32 27 32 18C32 11 26 6 20 6Z" stroke="#c9a84c" strokeWidth="1" fill="none"/><circle cx="20" cy="18" r="4" stroke="#c9a84c" strokeWidth="0.75" fill="rgba(201,168,76,0.1)"/></svg>,
                title: 'Compassion',
                desc: 'We serve families during profound moments with sensitivity, patience, and heartfelt care.'
              },
              {
                svg: <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="6" y="6" width="28" height="28" stroke="#c9a84c" strokeWidth="1" fill="none"/><path d="M6 20H34M20 6V34" stroke="rgba(201,168,76,0.4)" strokeWidth="0.75"/><rect x="12" y="12" width="16" height="16" stroke="rgba(201,168,76,0.3)" strokeWidth="0.5" fill="none"/></svg>,
                title: 'Precision',
                desc: 'Every measurement, joint, and finish is executed with meticulous attention to architectural precision.'
              },
            ].map((v, i) => (
              <div key={i} style={{
                padding: '40px 28px',
                background: 'linear-gradient(145deg, #1a1814, #120e09)',
                border: '1px solid rgba(201,168,76,0.12)',
                textAlign: 'center',
              }}>
                <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>{v.svg}</div>
                <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '0.85rem', letterSpacing: '0.1em', color: '#f0e8d8', marginBottom: '12px' }}>{v.title}</h3>
                <p style={{ color: '#8a7f72', fontSize: '0.875rem', lineHeight: '1.7' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 48px', background: '#0a0a0a', textAlign: 'center', borderTop: '1px solid rgba(201,168,76,0.1)' }}>
        <h2 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2rem)', color: '#f0e8d8', marginBottom: '20px' }}>Ready to Begin?</h2>
        <p style={{ color: '#8a7f72', marginBottom: '36px', maxWidth: '450px', margin: '0 auto 36px' }}>
          Reach out to our team today and let us help you create a memorial that truly honors the life of your loved one.
        </p>
        <Link href="/contact" className="btn-gold" style={{ textDecoration: 'none' }}>Contact Us</Link>
      </section>
    </div>
  );
}
