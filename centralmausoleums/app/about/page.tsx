import Link from 'next/link';
import Image from 'next/image';

const values = [
  {
    svg: <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><path d="M18 4L32 12V24L18 32L4 24V12L18 4Z" stroke="#b8922a" strokeWidth="1.2" fill="none"/><path d="M18 10L21 16H28L22 20L24 27L18 23L12 27L14 20L8 16H15L18 10Z" stroke="rgba(184,146,42,0.5)" strokeWidth="0.8" fill="none"/></svg>,
    title: 'Excellence',
    desc: 'We hold ourselves to the highest standards of craftsmanship in every detail, every structure, every time.',
  },
  {
    svg: <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><circle cx="18" cy="18" r="14" stroke="#b8922a" strokeWidth="1.2" fill="none"/><path d="M18 10V19L23 24" stroke="#b8922a" strokeWidth="1.5" strokeLinecap="round"/><circle cx="18" cy="18" r="2" fill="#b8922a"/></svg>,
    title: 'Integrity',
    desc: 'We operate with transparency, honesty, and respect — from pricing to final delivery, always.',
  },
  {
    svg: <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><path d="M18 6C12 6 6 11 6 18C6 27 18 32 18 32C18 32 30 27 30 18C30 11 24 6 18 6Z" stroke="#b8922a" strokeWidth="1.2" fill="none"/><circle cx="18" cy="18" r="4" stroke="#b8922a" strokeWidth="0.8" fill="rgba(184,146,42,0.1)"/></svg>,
    title: 'Compassion',
    desc: 'We serve families during profound moments with sensitivity, patience, and heartfelt care.',
  },
  {
    svg: <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><rect x="5" y="5" width="26" height="26" stroke="#b8922a" strokeWidth="1.2" fill="none"/><path d="M5 18H31M18 5V31" stroke="rgba(184,146,42,0.4)" strokeWidth="0.8"/><rect x="11" y="11" width="14" height="14" stroke="rgba(184,146,42,0.3)" strokeWidth="0.6" fill="none"/></svg>,
    title: 'Precision',
    desc: 'Every measurement, joint, and finish is executed with meticulous attention to architectural precision.',
  },
];



export default function AboutPage() {
  return (
    <div style={{ background: '#faf8f4', paddingTop: '80px' }}>
      {/* Hero */}
      <section style={{ position: 'relative', height: '380px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Image
          src="/Estates/Sovereign_WalkIn_Gallery.jpg"
          alt="About Central Mausoleums" fill style={{ objectFit: 'cover', objectPosition: 'center 35%' }} quality={85}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,8,5,0.60)' }}/>
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', justifyContent: 'center', marginBottom: '18px' }}>
            <div style={{ width: '36px', height: '1px', background: '#b8922a' }}/>
            <span style={{ fontFamily: 'Cinzel, serif', fontSize: '0.58rem', letterSpacing: '0.4em', color: '#d4aa4a' }}>OUR STORY</span>
            <div style={{ width: '36px', height: '1px', background: '#b8922a' }}/>
          </div>
          <h1 style={{ fontFamily: 'Cinzel, serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#faf8f4' }}>About Us</h1>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', color: 'rgba(244,240,232,0.8)', marginTop: '14px' }}>
            A legacy of craftsmanship, built on dignity, quality, and dedication
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section-pad" style={{ padding: '96px 56px', background: '#fff' }}>
        <div style={{ maxWidth: '1150px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }} className="grid-2">
          <div style={{ position: 'relative', height: '540px', overflow: 'hidden' }}>
            <Image
              src="/about.png"
              alt="Mausoleum craftsmanship" fill style={{ objectFit: 'cover' }} quality={85}
            />
            <div style={{ position: 'absolute', top: '20px', left: '20px', right: '-14px', bottom: '-14px', border: '1.5px solid rgba(184,146,42,0.3)', zIndex: -1 }}/>
            <div style={{
              position: 'absolute', bottom: '28px', right: '28px',
              background: 'rgba(44,40,32,0.9)', backdropFilter: 'blur(8px)',
              padding: '18px 24px', border: '1px solid rgba(184,146,42,0.3)',
            }}>
              <div style={{ fontFamily: 'Cinzel, serif', fontSize: '1.5rem', color: '#d4aa4a', lineHeight: 1 }}>500+</div>
              <div style={{ fontSize: '0.65rem', color: '#a09890', letterSpacing: '0.1em', marginTop: '4px' }}>STRUCTURES BUILT</div>
            </div>
          </div>

          <div>
            <div className="section-label"><span>Who We Are</span></div>
            <h2 style={{ fontSize: 'clamp(1.7rem, 2.5vw, 2.3rem)', lineHeight: 1.25, marginBottom: '24px' }}>
              Dedicated to Honoring Lives Through Lasting Stone
            </h2>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', color: '#4a4540', lineHeight: 1.85, marginBottom: '20px' }}>
              Central Mausoleums & Granite was founded on a singular belief: that every life deserves a memorial worthy of its meaning. We bring that belief to every structure we create.
            </p>
            <p style={{ fontSize: '0.9rem', color: '#7a7268', lineHeight: 1.85, marginBottom: '20px' }}>
              With decades of experience, our master craftsmen work with the finest granite to build mausoleums, columbariums, and memorial structures that endure through generations. We serve families, cemeteries, funeral homes, and religious institutions across the country.
            </p>
            <p style={{ fontSize: '0.9rem', color: '#7a7268', lineHeight: 1.85, marginBottom: '36px' }}>
              From initial design consultation through final installation, we remain your trusted partner — bringing compassion, expertise, and excellence to one of life&apos;s most meaningful decisions.
            </p>
            <Link href="/contact" className="btn-gold">Start a Conversation</Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad" style={{ padding: '96px 56px', background: '#faf8f4' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}><div className="section-label"><span>Our Core Values</span></div></div>
            <h2 style={{ fontSize: 'clamp(1.7rem, 2.5vw, 2.2rem)' }}>What Drives Us</h2>
            <div style={{ width: '52px', height: '2px', background: 'linear-gradient(90deg,#b8922a,#d4aa4a)', margin: '16px auto 0' }}/>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }} className="grid-4">
            {values.map((v, i) => (
              <div key={i} style={{
                background: '#fff',
                border: '1px solid rgba(184,146,42,0.12)',
                padding: '36px 24px',
                textAlign: 'center',
                transition: 'all 0.3s',
              }}
                onMouseEnter={undefined}
              >
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>{v.svg}</div>
                <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '0.82rem', letterSpacing: '0.1em', marginBottom: '12px' }}>{v.title}</h3>
                <p style={{ fontSize: '0.85rem', color: '#7a7268', lineHeight: 1.75 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORK SHOWCASE — image mosaic from all client folders ── */}
      <section style={{ background: '#2c2820', padding: 'clamp(60px,8vw,96px) clamp(20px,5vw,56px)' }}>
        <style>{`
          .about-mosaic {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            grid-template-rows: 260px 260px;
            gap: 6px;
            max-width: 1300px;
            margin: 0 auto;
          }
          .mosaic-wide { grid-column: span 2; }
          .mosaic-tall { grid-row: span 2; }
          .mosaic-item {
            position: relative;
            overflow: hidden;
            background: #1a1710;
          }
          .mosaic-item img { transition: transform 0.55s ease !important; }
          .mosaic-item:hover img { transform: scale(1.07) !important; }
          @media (max-width: 960px) {
            .about-mosaic {
              grid-template-columns: repeat(3, 1fr) !important;
              grid-template-rows: auto !important;
            }
            .mosaic-wide { grid-column: span 1 !important; }
            .mosaic-tall { grid-row: span 1 !important; }
            .mosaic-item { height: 200px !important; }
          }
          @media (max-width: 560px) {
            .about-mosaic { grid-template-columns: repeat(2, 1fr) !important; }
            .mosaic-item { height: 160px !important; }
          }
        `}</style>

        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', justifyContent: 'center', marginBottom: '16px' }}>
              <div style={{ width: '40px', height: '1px', background: 'rgba(184,146,42,0.4)' }}/>
              <span style={{ fontFamily: 'Cinzel, serif', fontSize: '0.58rem', letterSpacing: '0.4em', color: '#d4aa4a' }}>OUR WORK</span>
              <div style={{ width: '40px', height: '1px', background: 'rgba(184,146,42,0.4)' }}/>
            </div>
            <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', color: '#faf8f4', letterSpacing: '0.04em' }}>
              Built with Pride. Standing for Eternity.
            </h2>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1rem,2vw,1.1rem)', color: '#7a7268', marginTop: '10px' }}>
              A glimpse of the structures we have crafted for families across the country.
            </p>
          </div>

          <div className="about-mosaic">
            {/* Row 1 */}
            <div className="mosaic-item mosaic-wide">
              <Image src="/Estates/Tribute_WalkIn_Gallery.jpg" alt="Estate mausoleum" fill style={{ objectFit: 'cover' }} quality={80} sizes="40vw"/>
            </div>
            <div className="mosaic-item">
              <Image src="/Double Mausoleums/DOUBLE-CRYPT-STERWALD-WITH-PLAIN-COLUMNS-1024x738.jpg" alt="Double mausoleum" fill style={{ objectFit: 'cover' }} quality={80} sizes="20vw"/>
            </div>
            <div className="mosaic-item mosaic-tall">
              <Image src="/Community Columberian/SD-792_Trellis_Gallery.jpg" alt="Community columbarium" fill style={{ objectFit: 'cover' }} quality={80} sizes="20vw"/>
            </div>
            <div className="mosaic-item">
              <Image src="/Family And Companion Columberia/sd-701_final.png" alt="Family columbarium" fill style={{ objectFit: 'cover' }} quality={80} sizes="20vw"/>
            </div>
            {/* Row 2 */}
            <div className="mosaic-item">
              <Image src="/Cremation Benches/SD-032_FINAL_George_Gallery-removebg-preview.png" alt="Cremation bench" fill style={{ objectFit: 'cover' }} quality={80} sizes="20vw"/>
            </div>
            <div className="mosaic-item mosaic-wide">
              <Image src="/Estates/Birthright_WalkIn_Gallery.jpg" alt="Birthright estate" fill style={{ objectFit: 'cover' }} quality={80} sizes="40vw"/>
            </div>
            <div className="mosaic-item">
              <Image src="/Four Mausoleum/Parker_WalkUp_Gallery.jpg" alt="Four crypt mausoleum" fill style={{ objectFit: 'cover' }} quality={80} sizes="20vw"/>
            </div>
            <div className="mosaic-item">
              <Image src="/Family And Companion Columberia/cremation_jpgs8.jpg" alt="Companion columbarium" fill style={{ objectFit: 'cover' }} quality={80} sizes="20vw"/>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/products" className="btn-gold">View All Products</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#2c2820', padding: '72px 56px', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2rem)', color: '#faf8f4', marginBottom: '14px' }}>Ready to Begin?</h2>
        <p style={{ color: '#7a7268', marginBottom: '36px', maxWidth: '440px', margin: '0 auto 36px' }}>
          Reach out to our team today. We&apos;ll help you create a memorial that truly honors the life of your loved one.
        </p>
        <Link href="/contact" className="btn-gold">Contact Us Today</Link>
      </section>
    </div>
  );
}
