import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = { title: 'About Us' };

const values = [
  { title: 'Quality Craftsmanship', desc: 'Every nail, beam, and finish held to the highest standard. We never cut corners — your home is built to last generations.' },
  { title: 'Transparent Process', desc: 'No surprises. You are informed at every stage from permits to possession. Clear pricing, consistent communication.' },
  { title: 'Client First', desc: 'Your vision drives every decision. We listen, adapt, and deliver homes that exceed expectations every time.' },
  { title: 'Warranty Protected', desc: "Every new home registered under BC's mandatory 2-5-10 warranty through WBI and BC Housing for complete peace of mind." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', height: '420px', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <Image src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=80" alt="About Simba Homes" fill style={{ objectFit: 'cover' }} unoptimized />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(30,37,51,0.88)' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: '#D01C2A' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1200px', margin: '0 auto', padding: '0 48px', width: '100%' }}>
          <div className="section-label" style={{ marginBottom: '12px' }}>Who We Are</div>
          <h1 style={{ fontSize: 'clamp(40px, 6vw, 72px)', color: '#fff', maxWidth: '600px' }}>ABOUT SIMBA HOMES LTD</h1>
          <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
            <Link href="/" style={{ fontSize: '13px', color: '#718096' }}>Home</Link>
            <span style={{ color: '#4A5568' }}>/</span>
            <span style={{ fontSize: '13px', color: '#D01C2A' }}>About</span>
          </div>
        </div>
      </section>

      {/* Story */}
      <section style={{ background: '#1E2533', padding: '96px 48px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div>
            <div className="section-label" style={{ marginBottom: '12px' }}>Our Story</div>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', color: '#fff', marginBottom: '24px' }}>BUILDING BC COMMUNITIES ONE HOME AT A TIME</h2>
            <p style={{ fontSize: '15px', color: '#718096', lineHeight: 1.8, marginBottom: '20px' }}>
              Simba Homes Ltd was founded with a clear mission: to deliver exceptional homes across British Columbia with integrity, precision, and pride. Based in BC, we have built a strong reputation as a trusted residential builder serving families and investors throughout the province.
            </p>
            <p style={{ fontSize: '15px', color: '#718096', lineHeight: 1.8, marginBottom: '32px' }}>
              From our first custom home to large-scale land subdivisions, every project is approached with the same commitment to quality. We manage everything — site selection, permits, construction, trades, and final handover — so you can focus on what matters.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {[['100+', 'Homes Completed'], ['BC', 'Licensed Builder'], ['2-5-10', 'Year Warranty'], ['100%', 'Client Satisfaction']].map(([n, l]) => (
                <div key={l} style={{ padding: '20px', background: '#252D3D', borderLeft: '3px solid #D01C2A' }}>
                  <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '28px', fontWeight: 800, color: '#D01C2A' }}>{n}</div>
                  <div style={{ fontSize: '11px', color: '#718096', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: '4px', fontFamily: 'Barlow Condensed, sans-serif' }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden' }}>
              <Image src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=80" alt="Custom home" fill style={{ objectFit: 'cover' }} unoptimized />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(208,28,42,0.1) 0%, transparent 50%)' }} />
            </div>
            <div style={{ position: 'absolute', bottom: '-20px', left: '-20px', background: '#D01C2A', padding: '20px 28px' }}>
              <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '14px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#fff', lineHeight: 1.4 }}>BC LICENSED<br />&amp; INSURED</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ background: '#252D3D', padding: '96px 48px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div className="section-label" style={{ marginBottom: '12px' }}>What We Stand For</div>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', color: '#fff' }}>OUR CORE VALUES</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2px' }}>
            {values.map((v, i) => (
              <div key={i} style={{ background: '#1E2533', padding: '40px 28px', borderTop: '3px solid #D01C2A', position: 'relative', overflow: 'hidden' }}>
                <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '80px', fontWeight: 800, color: 'rgba(208,28,42,0.07)', position: 'absolute', top: '-10px', right: '8px', lineHeight: 1 }}>0{i+1}</div>
                <h3 style={{ fontSize: '18px', color: '#fff', marginBottom: '14px', position: 'relative' }}>{v.title}</h3>
                <p style={{ fontSize: '13px', color: '#718096', lineHeight: 1.7, position: 'relative' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     

      {/* CTA */}
      <section style={{ background: '#D01C2A', padding: '72px 48px', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', color: '#fff', marginBottom: '16px' }}>READY TO BUILD WITH US?</h2>
        <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '32px', fontSize: '16px' }}>Contact our team for a free project consultation today.</p>
        <Link href="/contact" style={{ background: '#fff', color: '#D01C2A', padding: '14px 40px', fontFamily: 'Barlow Condensed, sans-serif', fontSize: '14px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', display: 'inline-block' }}>Get In Touch</Link>
      </section>

      <style>{`
        @media (max-width: 900px) {
          section > div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
          section > div > div[style*="grid-template-columns: repeat(4"] { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 600px) { section { padding-left: 20px !important; padding-right: 20px !important; } }
      `}</style>
    </>
  );
}
