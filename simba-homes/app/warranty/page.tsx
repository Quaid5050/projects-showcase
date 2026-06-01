import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Home Warranty' };

const coverageItems = [
  {
    years: '2', title: 'Materials & Labour',
    items: ['Defects in materials & workmanship', 'Water penetration through building envelope', 'Defects in electrical, plumbing & HVAC', 'Violations of BC Building Code'],
  },
  {
    years: '5', title: 'Building Envelope',
    items: ['Water penetration into building envelope', 'Window and door sealing defects', 'Exterior cladding and flashing issues', 'Drainage and moisture management'],
  },
  {
    years: '10', title: 'Structural Defects',
    items: ['Major structural defects in load-bearing elements', 'Foundation issues and settling', 'Structural framing defects', 'Beam and column integrity'],
  },
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
          <p style={{ color: '#718096', fontSize: '16px', marginTop: '12px', maxWidth: '540px' }}>Every Simba Homes property is registered with WBI and BC Housing under the mandatory 2-5-10 year warranty program.</p>
          <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
            <Link href="/" style={{ fontSize: '13px', color: '#718096' }}>Home</Link>
            <span style={{ color: '#4A5568' }}>/</span>
            <span style={{ fontSize: '13px', color: '#D01C2A' }}>Warranty</span>
          </div>
        </div>
      </section>

      {/* WBI + BC Housing Intro */}
      <section style={{ background: '#252D3D', padding: '96px 48px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', marginBottom: '72px' }}>
            {/* WBI */}
            <div style={{ background: '#1E2533', padding: '48px', borderTop: '4px solid #D01C2A', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'relative', height: '200px', marginBottom: '32px', overflow: 'hidden' }}>
                <Image src="https://images.unsplash.com/photo-1448630360428-65456885c650?w=600&q=80" alt="WBI Warranty" fill style={{ objectFit: 'cover', borderRadius: '2px' }} unoptimized />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(30,37,51,0.6)' }} />
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '42px', fontWeight: 800, color: '#fff', letterSpacing: '0.04em', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>WBI</div>
                  <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.8)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Home Warranty</div>
                </div>
              </div>
              <h3 style={{ fontSize: '24px', color: '#fff', marginBottom: '12px' }}>WBI HOME WARRANTY</h3>
              <p style={{ fontSize: '14px', color: '#718096', lineHeight: 1.8 }}>
                WBI (Warranty Backed Insurance) is one of Canada's leading new home warranty providers. Every Simba Homes property is fully registered with WBI, providing comprehensive coverage and backed insurance protection for homeowners.
              </p>
            </div>

            {/* BC Housing */}
            <div style={{ background: '#1E2533', padding: '48px', borderTop: '4px solid #4A5568', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'relative', height: '200px', marginBottom: '32px', overflow: 'hidden' }}>
                <Image src="https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&q=80" alt="BC Housing" fill style={{ objectFit: 'cover', borderRadius: '2px' }} unoptimized />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(30,37,51,0.6)' }} />
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '32px', fontWeight: 800, color: '#fff', letterSpacing: '0.04em', textShadow: '0 2px 8px rgba(0,0,0,0.5)', textTransform: 'uppercase' }}>BC Housing</div>
                  <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.8)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Registered Builder</div>
                </div>
              </div>
              <h3 style={{ fontSize: '24px', color: '#fff', marginBottom: '12px' }}>BC HOUSING REGISTERED</h3>
              <p style={{ fontSize: '14px', color: '#718096', lineHeight: 1.8 }}>
                As a BC Housing licensed residential builder, Simba Homes meets all provincial standards and regulations. Our registration means every home we build is properly protected under BC&apos;s mandatory new home warranty legislation.
              </p>
            </div>
          </div>

          {/* Why it matters */}
          <div style={{ background: '#1E2533', padding: '48px', borderLeft: '4px solid #D01C2A' }}>
            <h3 style={{ fontSize: '26px', color: '#fff', marginBottom: '16px' }}>WHY DOES WARRANTY MATTER?</h3>
            <p style={{ fontSize: '14px', color: '#718096', lineHeight: 1.8, maxWidth: '800px' }}>
              In British Columbia, all new homes must be covered by a mandatory 2-5-10 year home warranty. This protects you as a homeowner from defects and structural issues that may arise after you move in. Choosing a registered builder like Simba Homes ensures you are fully covered — and your investment is protected.
            </p>
          </div>
        </div>
      </section>

      {/* 2-5-10 Breakdown */}
      <section style={{ background: '#1E2533', padding: '96px 48px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div className="section-label" style={{ marginBottom: '12px' }}>Mandatory BC Coverage</div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 52px)', color: '#fff', marginBottom: '16px' }}>THE 2-5-10 YEAR WARRANTY</h2>
            <p style={{ color: '#718096', fontSize: '15px', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
              BC&apos;s Home Protection Act requires all new homes to be covered by a tiered 2-5-10 warranty. Here is exactly what is covered.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4px' }}>
            {coverageItems.map((c, i) => (
              <div key={i} style={{ background: '#252D3D', padding: '48px 36px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: i === 0 ? '#D01C2A' : i === 1 ? '#4A5568' : '#2F3A52' }} />
                {/* Big year number */}
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '12px' }}>
                  <span style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '80px', fontWeight: 800, color: i === 0 ? '#D01C2A' : '#4A5568', lineHeight: 1 }}>{c.years}</span>
                  <span style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '20px', color: '#718096', textTransform: 'uppercase', letterSpacing: '0.1em' }}>YEAR{c.years !== '1' ? 'S' : ''}</span>
                </div>
                <h3 style={{ fontSize: '20px', color: '#fff', marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{c.title}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {c.items.map(item => (
                    <div key={item} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <div style={{ width: '6px', height: '6px', background: i === 0 ? '#D01C2A' : '#4A5568', flexShrink: 0, marginTop: '7px' }} />
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
            { q: 'Is the warranty transferable if I sell my home?', a: 'Yes. The 2-5-10 warranty is tied to the property, not the original buyer. If you sell your home within the warranty period, the coverage transfers to the new owner automatically.' },
            { q: 'What happens if I find a defect after I move in?', a: 'Contact us immediately. We will assess the defect and coordinate with WBI or BC Housing to ensure it is addressed properly. Most claims are resolved quickly once reported.' },
            { q: 'Does the warranty cover renovations?', a: 'The 2-5-10 warranty applies to new home construction. Renovation work may be covered under separate contractor warranties. Ask us about the specific coverage on your renovation project.' },
            { q: 'How do I make a warranty claim?', a: 'Contact Simba Homes directly or file a claim through WBI or BC Housing. We will assist you through the process. Keep documentation of any defects including photos and dates.' },
          ].map((faq, i) => (
            <div key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '28px', marginBottom: '28px' }}>
              <h4 style={{ fontSize: '18px', color: '#fff', marginBottom: '10px', textTransform: 'none', letterSpacing: '0.01em', fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600 }}>{faq.q}</h4>
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
          section > div > div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
          section > div > div[style*="grid-template-columns: repeat(3"] { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) { section { padding-left: 20px !important; padding-right: 20px !important; } }
      `}</style>
    </>
  );
}
