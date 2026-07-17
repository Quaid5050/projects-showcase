import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = { title: 'About Us' };

const simbaValues = [
  { letter: 'S', title: 'Safety & Standards', desc: 'Exceeding BC building codes on every project, every time.' },
  { letter: 'I', title: 'Integrity', desc: 'Transparent quotes and honest timelines — no hidden costs, no cut corners.' },
  { letter: 'M', title: 'Mastery', desc: 'Expert handling of zoning, permits, and BC regulatory requirements.' },
  { letter: 'B', title: 'Budget-Conscious', desc: 'Milestone-driven budgeting that respects your financial plan.' },
  { letter: 'A', title: 'Accountability', desc: 'We stand behind every home we build — backed by 2-5-10 warranty.' },
];

const process = [
  { num: '01', title: 'Feasibility Deep-Dive', desc: 'Before we draw a single line, we conduct a comprehensive analysis of your property\'s specific zoning bylaws — RS zones, setbacks, floor area ratios, and tree protection. We tell you exactly what is possible so there are no surprises later.' },
  { num: '02', title: 'Compliance-First Design', desc: 'We design your home to meet BC Building Codes and local municipal requirements the first time. By integrating energy modeling (Step Code compliance) and engineering early, we reduce the chance of the city returning plans for corrections.' },
  { num: '03', title: 'The City Liaison', desc: 'Once submitted, we become the point of contact for City Hall. We handle the technical questions, the plan checkers, and the inspectors. You don\'t have to chase down bureaucrats — we do it for you.' },
  { num: '04', title: 'Permit Secured & Build', desc: 'Once the Building Permit is issued, we are ready to break ground immediately. Because we planned the budget and schedule during the permitting phase, construction starts without delay.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', height: '420px', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <Image src="/hero.png" alt="About Simba Homes" fill style={{ objectFit: 'cover' }} unoptimized />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(30,37,51,0.88)' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: '#D01C2A' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1200px', margin: '0 auto', padding: '0 48px', width: '100%' }}>
          <div className="section-label" style={{ marginBottom: '12px' }}>Who We Are</div>
          <h1 style={{ fontSize: 'clamp(40px, 6vw, 72px)', color: '#fff' }}>ABOUT SIMBA HOMES LTD</h1>
          <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
            <Link href="/" style={{ fontSize: '13px', color: '#718096' }}>Home</Link>
            <span style={{ color: '#4A5568' }}>/</span>
            <span style={{ fontSize: '13px', color: '#D01C2A' }}>About</span>
          </div>
        </div>
      </section>

      {/* Main story — Option 1 (Building Your Future) */}
      <section style={{ background: '#1E2533', padding: '96px 48px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div>
            <div className="section-label" style={{ marginBottom: '12px' }}>Our Story</div>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', color: '#fff', marginBottom: '8px' }}>BUILDING YOUR FUTURE,</h2>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', color: '#D01C2A', marginBottom: '24px', fontStyle: 'italic' }}>SANS THE STRESS.</h2>
            <p style={{ fontSize: '15px', color: '#CBD5E0', lineHeight: 1.8, marginBottom: '20px' }}>
              At Simba Homes, we believe that building a custom home in British Columbia should be an exciting journey, not a source of anxiety. Founded on the principles of transparency and precision, we bridge the gap between your dream design and the technical realities of construction.
            </p>
            <p style={{ fontSize: '15px', color: '#718096', lineHeight: 1.8, marginBottom: '20px' }}>
              We know that BC's zoning laws are complex and the climate is demanding. That's why we don't just build — we advocate for you. From navigating municipal permits to selecting energy-efficient materials that withstand the West Coast weather, we handle the heavy lifting.
            </p>
            <p style={{ fontSize: '15px', color: '#718096', lineHeight: 1.8, marginBottom: '32px' }}>
              Our philosophy is simple: <strong style={{ color: '#CBD5E0' }}>No hidden costs, no cut corners, and no guesswork.</strong> Just a dedicated team working tirelessly to turn your blueprint into a home that lasts for generations.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {[ ['4.9★', 'Google Rating'], ['2-5-10', 'Year Warranty'], ['Lower Mainland', 'Service Area']].map(([n, l]) => (
                <div key={l} style={{ padding: '20px', background: '#252D3D', borderLeft: '3px solid #D01C2A' }}>
                  <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '26px', fontWeight: 800, color: '#D01C2A' }}>{n}</div>
                  <div style={{ fontSize: '11px', color: '#718096', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: '4px', fontFamily: 'Barlow Condensed, sans-serif' }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden' }}>
              <Image src="/img1.png" alt="Custom home by Simba Homes" fill style={{ objectFit: 'cover' }} unoptimized />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(208,28,42,0.1) 0%, transparent 50%)' }} />
            </div>
            <div style={{ position: 'absolute', bottom: '-20px', left: '-20px', background: '#D01C2A', padding: '20px 28px' }}>
              <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '14px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#fff', lineHeight: 1.4 }}>BC LICENSED<br />&amp; INSURED</div>
            </div>
          </div>
        </div>
      </section>

      {/* SIMBA Acronym Values */}
      <section style={{ background: '#252D3D', padding: '96px 48px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div className="section-label" style={{ marginBottom: '12px' }}>What We Stand For</div>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', color: '#fff', marginBottom: '12px' }}>THE SIMBA STANDARD</h2>
            <p style={{ color: '#718096', fontSize: '15px', maxWidth: '480px', margin: '0 auto' }}>Five principles that guide every decision we make — from the first permit to the final coat of paint.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {simbaValues.map((v, i) => (
              <div key={i} style={{ background: '#1E2533', padding: '28px 40px', display: 'flex', alignItems: 'center', gap: '32px', borderLeft: '4px solid #D01C2A' }}>
                <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '56px', fontWeight: 800, color: '#D01C2A', lineHeight: 1, minWidth: '48px' }}>{v.letter}</div>
                <div>
                  <h3 style={{ fontSize: '20px', color: '#fff', marginBottom: '6px' }}>{v.title}</h3>
                  <p style={{ fontSize: '14px', color: '#718096', lineHeight: 1.6 }}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section style={{ background: '#1E2533', padding: '96px 48px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '56px' }}>
            <div className="section-label" style={{ marginBottom: '12px' }}>How We Work</div>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', color: '#fff', marginBottom: '12px' }}>FROM RED TAPE TO GREEN LIGHT</h2>
            <p style={{ color: '#718096', fontSize: '15px', maxWidth: '600px', lineHeight: 1.7 }}>
              At Simba Homes, we know that waiting for city approval is the hardest part of the build. That's why we don't just submit plans and hope for the best — we manage the process proactively.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2px' }}>
            {process.map((p, i) => (
              <div key={i} style={{ background: '#252D3D', padding: '36px 28px', borderTop: '3px solid #D01C2A', position: 'relative', overflow: 'hidden' }}>
                <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '72px', fontWeight: 800, color: 'rgba(208,28,42,0.06)', position: 'absolute', top: '-8px', right: '8px', lineHeight: 1 }}>{p.num}</div>
                <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', color: '#D01C2A', marginBottom: '12px' }}>STEP {p.num}</div>
                <h3 style={{ fontSize: '17px', color: '#fff', marginBottom: '14px', position: 'relative', lineHeight: 1.2 }}>{p.title}</h3>
                <p style={{ fontSize: '13px', color: '#718096', lineHeight: 1.7, position: 'relative' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     

      {/* CTA */}
      <section style={{ background: '#D01C2A', padding: '72px 48px', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', color: '#fff', marginBottom: '12px' }}>YOUR DREAM. OUR EXPERTISE. BC'S BEST BUILD.</h2>
        <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '32px', fontSize: '16px' }}>Contact our team for a free project consultation today.</p>
        <Link href="/contact" style={{ background: '#fff', color: '#D01C2A', padding: '14px 40px', fontFamily: 'Barlow Condensed, sans-serif', fontSize: '14px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', display: 'inline-block' }}>Get In Touch</Link>
      </section>

      <style>{`
        @media (max-width: 900px) {
          section > div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
          section > div > div[style*="repeat(4"] { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 600px) {
          section { padding-left: 20px !important; padding-right: 20px !important; }
          section > div > div[style*="repeat(4"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
