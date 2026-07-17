import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Home Warranty' };

const coverage = [
  { years: '2', title: 'Materials & Labour', color: '#D01C2A', items: ['Defects in materials & workmanship', 'Water penetration through building envelope', 'Defects in electrical, plumbing & HVAC', 'Violations of BC Building Code'] },
  { years: '5', title: 'Building Envelope', color: '#4A5568', items: ['Water penetration into building envelope', 'Window and door sealing defects', 'Exterior cladding and flashing issues', 'Drainage and moisture management'] },
  { years: '10', title: 'Structural Defects', color: '#2F3A52', items: ['Major structural defects in load-bearing elements', 'Foundation issues and settling', 'Structural framing defects', 'Beam and column integrity'] },
];

export default function WarrantyPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', height: '420px', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <Image src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1400&q=80" alt="Home Warranty" fill style={{ objectFit: 'cover' }} unoptimized />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(30,37,51,0.9)' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: '#D01C2A' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1200px', margin: '0 auto', padding: '0 48px', width: '100%' }}>
          <div className="section-label" style={{ marginBottom: '12px' }}>Protection You Can Trust</div>
          <h1 style={{ fontSize: 'clamp(40px, 6vw, 72px)', color: '#fff' }}>HOME WARRANTY COVERAGE</h1>
          <p style={{ color: '#718096', fontSize: '16px', marginTop: '12px', maxWidth: '560px' }}>
            Every Simba Homes property is registered with WBI and BC Housing under BC's mandatory 2-5-10 year new home warranty program.
          </p>
          <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
            <Link href="/" style={{ fontSize: '13px', color: '#718096' }}>Home</Link>
            <span style={{ color: '#4A5568' }}>/</span>
            <span style={{ fontSize: '13px', color: '#D01C2A' }}>Warranty</span>
          </div>
        </div>
      </section>

      {/* 2-5-10 Coverage */}
      <section style={{ background: '#1E2533', padding: '96px 48px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div className="section-label" style={{ marginBottom: '12px' }}>Mandatory BC Coverage</div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 52px)', color: '#fff', marginBottom: '16px' }}>THE 2-5-10 YEAR WARRANTY</h2>
            <p style={{ color: '#718096', fontSize: '15px', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7 }}>
              BC's Home Protection Act requires all new homes to be covered by a tiered warranty. Here is exactly what is covered.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4px' }}>
            {coverage.map((c, i) => (
              <div key={i} style={{ background: '#252D3D', padding: '48px 36px', borderTop: `4px solid ${c.color}` }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '12px' }}>
                  <span style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '80px', fontWeight: 800, color: c.color, lineHeight: 1 }}>{c.years}</span>
                  <span style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '20px', color: '#718096', textTransform: 'uppercase', letterSpacing: '0.1em' }}>YEARS</span>
                </div>
                <h3 style={{ fontSize: '20px', color: '#fff', marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{c.title}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {c.items.map(item => (
                    <div key={item} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <div style={{ width: '6px', height: '6px', background: c.color, flexShrink: 0, marginTop: '7px' }} />
                      <span style={{ fontSize: '13px', color: '#CBD5E0', lineHeight: 1.5 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#252D3D', padding: '96px 48px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="section-label" style={{ marginBottom: '12px' }}>Common Questions</div>
          <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', color: '#fff', marginBottom: '48px' }}>WARRANTY FAQ</h2>
          {[
            { q: 'Is the warranty transferable if I sell my home?', a: 'Yes. The 2-5-10 warranty is tied to the property, not the original buyer. Coverage transfers to the new owner automatically — a major selling advantage.' },
            { q: 'How do I verify Simba Homes is a registered builder?', a: 'You can verify our BC Housing registration directly on the BC Housing website under the Licensed Residential Builder lookup.' },
            { q: 'What happens if I find a defect after I move in?', a: 'Contact us immediately. We will coordinate with WBI or BC Housing to ensure the defect is properly addressed. Document everything with photos and dates.' },
            { q: 'Does the warranty cover renovations?', a: 'The 2-5-10 warranty applies to new home construction. Renovation work is covered under separate contractor warranties.' },
          ].map((faq, i) => (
            <div key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '28px', marginBottom: '28px' }}>
              <h4 style={{ fontSize: '18px', color: '#fff', marginBottom: '10px', fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600, letterSpacing: '0.01em' }}>{faq.q}</h4>
              <p style={{ fontSize: '14px', color: '#718096', lineHeight: 1.7 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#D01C2A', padding: '72px 48px', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', color: '#fff', marginBottom: '16px' }}>QUESTIONS ABOUT YOUR WARRANTY?</h2>
        <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '32px', fontSize: '16px' }}>Our team is happy to walk you through your coverage in detail.</p>
        <Link href="/contact" style={{ background: '#fff', color: '#D01C2A', padding: '14px 40px', fontFamily: 'Barlow Condensed, sans-serif', fontSize: '14px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', display: 'inline-block' }}>Contact Us</Link>
      </section>

      <style>{`
        @media (max-width: 900px) {
          section > div > div[style*="repeat(3"] { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) { section { padding-left: 20px !important; padding-right: 20px !important; } }
      `}</style>
    </>
  );
}