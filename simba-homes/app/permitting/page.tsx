import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Permitting & Zoning' };

const problems = [
  {
    problem: 'Unexpected Zoning Restrictions',
    solution: 'We perform a pre-design zoning audit to confirm maximum buildable square footage and height restrictions before you fall in love with a design.',
  },
  {
    problem: 'Rejected Drawings / "Red-lines"',
    solution: 'We work with BC-registered designers and engineers to ensure our submission sets are watertight and code-compliant from Day 1.',
  },
  {
    problem: 'Energy Step Code Confusion',
    solution: "We integrate energy modeling early in the process, ensuring your home isn't just approved — it's future-proofed for comfort and savings.",
  },
  {
    problem: 'Permitting Limbo — Months of Waiting',
    solution: "We prepare meticulous application packages that anticipate the city's questions before they ask them. We don't submit and hope — we manage proactively.",
  },
];

const steps = [
  { num: '01', title: 'The Feasibility Deep-Dive', desc: "Before we draw a single line, we conduct a comprehensive analysis of your property's specific zoning bylaws — RS zones, setbacks, floor area ratios, and tree protection. We tell you exactly what is buildable so there are no surprises later." },
  { num: '02', title: 'Compliance-First Design', desc: 'We design your home to meet BC Building Codes and local municipal requirements the first time. By integrating energy modeling (Step Code compliance) and engineering early, we dramatically reduce the chance of the city returning plans for corrections.' },
  { num: '03', title: 'The City Liaison', desc: "Once submitted, we become the point of contact for City Hall. We handle the technical questions, the plan checkers, and the inspectors. You don't have to chase down bureaucrats — we do it for you." },
  { num: '04', title: 'Permit Secured & Build', desc: 'Once the Building Permit is issued, we are ready to break ground immediately. Because we planned the budget and schedule during the permitting phase, construction starts without delay.' },
];

export default function PermittingPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', height: '420px', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <Image src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=80" alt="Permitting & Zoning BC" fill style={{ objectFit: 'cover' }} unoptimized />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(30,37,51,0.92)' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: '#D01C2A' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1200px', margin: '0 auto', padding: '0 48px', width: '100%' }}>
          <div className="section-label" style={{ marginBottom: '12px' }}>Permitting & Zoning</div>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 64px)', color: '#fff', maxWidth: '700px', lineHeight: 1.05 }}>
            WE SPEAK "CITY HALL"<br />
            <span style={{ color: '#D01C2A' }}>SO YOU DON'T HAVE TO.</span>
          </h1>
          <div style={{ display: 'flex', gap: '8px', marginTop: '20px' }}>
            <Link href="/" style={{ fontSize: '13px', color: '#718096' }}>Home</Link>
            <span style={{ color: '#4A5568' }}>/</span>
            <Link href="/services" style={{ fontSize: '13px', color: '#718096' }}>Services</Link>
            <span style={{ color: '#4A5568' }}>/</span>
            <span style={{ fontSize: '13px', color: '#D01C2A' }}>Permitting</span>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section style={{ background: '#252D3D', padding: '80px 48px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '72px', alignItems: 'center' }}>
          <div>
            <div className="section-label" style={{ marginBottom: '12px' }}>The Biggest Risk In Home Building</div>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 38px)', color: '#fff', marginBottom: '24px' }}>AVOIDING PERMITTING LIMBO</h2>
            <p style={{ fontSize: '15px', color: '#CBD5E0', lineHeight: 1.8, marginBottom: '20px' }}>
              One of the biggest risks in custom home building is <strong style={{ color: '#D01C2A' }}>"Permitting Limbo"</strong> — where projects stall for months due to paperwork errors or zoning misunderstandings.
            </p>
            <p style={{ fontSize: '15px', color: '#718096', lineHeight: 1.8, marginBottom: '20px' }}>
              At Simba Homes, we treat permitting as a dedicated phase of construction. We navigate the complex web of BC zoning bylaws, from density caps to environmental restrictions.
            </p>
            <p style={{ fontSize: '15px', color: '#718096', lineHeight: 1.8, marginBottom: '32px' }}>
              Our team prepares meticulous application packages that anticipate the city's questions before they ask them. Whether it's negotiating a variance or ensuring your energy calculations are spot-on, we hustle behind the scenes to get your permit approved faster.
            </p>
            <div style={{ background: '#1E2533', padding: '20px 24px', borderLeft: '4px solid #D01C2A' }}>
              <p style={{ fontSize: '15px', color: '#fff', fontStyle: 'italic', lineHeight: 1.7 }}>
                "Your job is to dream about the layout.<br />Our job is to get the stamp of approval."
              </p>
            </div>
          </div>
          <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
            <Image src="/per.jpeg" alt="Permitting process" fill style={{ objectFit: 'cover' }} unoptimized />
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(30,37,51,0.35)' }} />
          </div>
        </div>
      </section>

      {/* 4-Step Roadmap */}
      <section style={{ background: '#1E2533', padding: '96px 48px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div className="section-label" style={{ marginBottom: '12px' }}>Our 4-Step Roadmap</div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 52px)', color: '#fff', marginBottom: '16px' }}>FROM RED TAPE TO GREEN LIGHT</h2>
            <p style={{ color: '#718096', fontSize: '15px', maxWidth: '540px', margin: '0 auto', lineHeight: 1.7 }}>
              We manage the permitting process proactively — so your build starts on time, every time.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2px' }}>
            {steps.map((s, i) => (
              <div key={i} style={{ background: '#252D3D', padding: '40px 28px', borderTop: '3px solid #D01C2A', position: 'relative', overflow: 'hidden' }}>
                <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '64px', fontWeight: 800, color: 'rgba(208,28,42,0.06)', position: 'absolute', top: '-8px', right: '8px', lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', color: '#D01C2A', marginBottom: '10px' }}>STEP {s.num}</div>
                <h3 style={{ fontSize: '17px', color: '#fff', marginBottom: '14px', lineHeight: 1.2 }}>{s.title}</h3>
                <p style={{ fontSize: '13px', color: '#718096', lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section style={{ background: '#252D3D', padding: '96px 48px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div className="section-label" style={{ marginBottom: '12px' }}>Common Bottlenecks</div>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', color: '#fff' }}>MASTERING THE MAZE</h2>
            <p style={{ color: '#718096', fontSize: '15px', marginTop: '12px' }}>How Simba Homes prevents the most common permitting delays.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {problems.map((p, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                <div style={{ padding: '28px 32px', background: '#1E2533', borderLeft: '3px solid rgba(208,28,42,0.5)', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '18px', height: '18px', flexShrink: 0, marginTop: '3px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="10" height="10" viewBox="0 0 10 10"><path d="M1 1l8 8M9 1L1 9" stroke="#D01C2A" strokeWidth="1.8" strokeLinecap="round"/></svg>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '9px', fontWeight: 700, letterSpacing: '0.2em', color: '#D01C2A', marginBottom: '6px', textTransform: 'uppercase' }}>The Problem</div>
                    <p style={{ fontSize: '14px', color: '#CBD5E0', lineHeight: 1.6 }}>{p.problem}</p>
                  </div>
                </div>
                <div style={{ padding: '28px 32px', background: '#252D3D', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '18px', height: '18px', flexShrink: 0, marginTop: '3px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="10" height="8" viewBox="0 0 10 8"><path d="M1 4l3 3L9 1" stroke="#D01C2A" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '9px', fontWeight: 700, letterSpacing: '0.2em', color: '#D01C2A', marginBottom: '6px', textTransform: 'uppercase' }}>The Simba Solution</div>
                    <p style={{ fontSize: '14px', color: '#718096', lineHeight: 1.6 }}>{p.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#D01C2A', padding: '72px 48px', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', color: '#fff', marginBottom: '16px' }}>READY TO CUT THROUGH THE RED TAPE?</h2>
        <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '32px', fontSize: '16px' }}>Let Simba Homes handle City Hall while you focus on your future home.</p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact" style={{ background: '#fff', color: '#D01C2A', padding: '14px 40px', fontFamily: 'Barlow Condensed, sans-serif', fontSize: '14px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', display: 'inline-block' }}>Start Your Project</Link>
          <a href="tel:+17787077325" style={{ background: 'transparent', color: '#fff', padding: '14px 40px', fontFamily: 'Barlow Condensed, sans-serif', fontSize: '14px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', display: 'inline-block', border: '2px solid rgba(255,255,255,0.4)' }}>+1 778 707 7325</a>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          section > div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
          section > div > div[style*="repeat(4"] { grid-template-columns: repeat(2,1fr) !important; }
          div[style*="display: grid"][style*="1fr 1fr"] { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          section { padding-left: 20px !important; padding-right: 20px !important; }
          section > div > div[style*="repeat(4"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
