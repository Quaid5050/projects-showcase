'use client';
import PageHero from '../components/PageHero';
import Link from 'next/link';

const values = [
  { n: '01', title: 'Innovation First', desc: 'We push the boundaries of fitness equipment design — always engineering for the next generation of athletes.' },
  { n: '02', title: 'Built to Last', desc: 'Commercial-grade steel, precision welds, and rigorous QA testing. Every rack is built to outlast decades of heavy use.' },
  { n: '03', title: 'Athlete-Centered', desc: 'Every decision starts with one question: will this make the athlete better?' },
  { n: '04', title: 'Integrity Always', desc: 'We stand behind every product we ship. If anything falls short, we make it right — no questions asked.' },
];

const timeline = [
  { year: '2010', text: 'Fast Track Rack LLC founded by Scott Thacker & Claude Groulx' },
  { year: '2013', text: 'First commercial gym installation — 12-rack system for Midwest fitness chain' },
  { year: '2016', text: 'Expanded into custom design services & corporate fitness solutions' },
  { year: '2019', text: 'Launched elite coaching & training programs nationwide' },
  { year: '2022', text: 'Reached 500+ satisfied clients across North America' },
  { year: '2026', text: 'Launched e-commerce platform for direct product sales' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero title="WHO WE" highlight="ARE"
        subtitle="Built on the belief that elite athletes deserve elite equipment — custom-engineered, precision-built, and designed to last."
        breadcrumb="About" bg="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80" />

      {/* Mission */}
      <section style={{ padding: '96px 0', background: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="about-mission-grid">
            <div style={{ position: 'relative' }}>
              <div style={{ overflow: 'hidden', aspectRatio: '4/5' }}>
                <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=900&q=85" alt="Manufacturing"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ position: 'absolute', bottom: -24, right: -24, background: '#DC2626', padding: '20px 28px', boxShadow: '0 16px 48px rgba(220,38,38,0.35)' }}>
                <div className="font-display" style={{ color: '#fff', fontSize: 52, lineHeight: 1 }}>15+</div>
                <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: 4 }}>Years of Excellence</div>
              </div>
              <div style={{ position: 'absolute', top: -16, left: -16, right: 16, bottom: -16, border: '2px solid #e5e7eb', zIndex: -1 }} />
            </div>
            <div>
              <div className="section-label"><span>Our Mission</span></div>
              <h2 className="font-display" style={{ fontSize: 'clamp(40px,5vw,64px)', color: '#111', lineHeight: 1, marginBottom: 24 }}>
                ENGINEERING<br /><span style={{ color: '#DC2626' }}>EXCELLENCE</span>
              </h2>
              <p style={{ fontSize: 17, color: '#4b5563', lineHeight: 1.8, marginBottom: 16 }}>
                Fast Track Rack LLC was founded with a singular mission: to create fitness equipment that performs as hard as the athletes who use it.
              </p>
              <p style={{ fontSize: 15, color: '#6b7280', lineHeight: 1.8, marginBottom: 36 }}>
                Our founders Scott Thacker and Claude Groulx brought together decades of experience in fitness, manufacturing, and design. What started as a passion project has grown into a trusted name for commercial gyms, sports organizations, and elite training facilities across North America.
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 24px', marginBottom: 40 }}>
                {['Commercial-grade A36 steel', 'Custom designs welcome', '500+ successful installs', 'Full warranty on all builds', 'Made in the USA', 'After-sales support'].map(f => (
                  <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                    <span style={{ fontSize: 14, color: '#374151', fontWeight: 500 }}>{f}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-red">Start a Project</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '96px 0', background: '#f9fafb' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="section-label" style={{ justifyContent: 'center' }}><span>What Drives Us</span></div>
            <h2 className="font-display" style={{ fontSize: 'clamp(40px,6vw,68px)', color: '#111', lineHeight: 1 }}>
              OUR <span style={{ color: '#DC2626' }}>VALUES</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 4 }} className="values-grid">
            {values.map(v => (
              <div key={v.n} style={{ background: '#fff', padding: '40px 28px', borderTop: '3px solid #DC2626' }}>
                <div className="font-display" style={{ fontSize: 56, color: '#f3f4f6', lineHeight: 1, marginBottom: 16 }}>{v.n}</div>
                <h3 className="font-display" style={{ fontSize: 22, color: '#111', marginBottom: 12 }}>{v.title}</h3>
                <p style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.75 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: '96px 0', background: '#111' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div className="section-label" style={{ justifyContent: 'center' }}><span style={{ color: '#DC2626' }}>Our Journey</span></div>
            <h2 className="font-display" style={{ fontSize: 'clamp(40px,6vw,68px)', color: '#fff', lineHeight: 1 }}>
              OUR <span style={{ color: '#DC2626' }}>STORY</span>
            </h2>
          </div>
          <div style={{ position: 'relative' }} className="timeline-wrap">
            <div className="timeline-line" style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 1, background: 'rgba(255,255,255,0.08)', transform: 'translateX(-50%)' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              {timeline.map((m, i) => (
                <div key={i} className="timeline-row" style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
                  <div className="timeline-col" style={{ flex: 1, textAlign: 'right', paddingRight: 32 }}>
                    {i % 2 === 0 && <div className="timeline-card" style={{ background: '#1a1a1a', padding: '16px 20px', display: 'inline-block', maxWidth: 280 }}>
                      <p style={{ color: '#d1d5db', fontSize: 14, lineHeight: 1.6 }}>{m.text}</p>
                    </div>}
                  </div>
                  <div className="timeline-badge" style={{ width: 56, height: 56, background: '#DC2626', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, zIndex: 1 }}>
                    <span className="font-display" style={{ color: '#fff', fontSize: 13 }}>{m.year}</span>
                  </div>
                  <div className="timeline-col" style={{ flex: 1, paddingLeft: 32 }}>
                    {i % 2 === 1 && <div className="timeline-card" style={{ background: '#1a1a1a', padding: '16px 20px', display: 'inline-block', maxWidth: 280 }}>
                      <p style={{ color: '#d1d5db', fontSize: 14, lineHeight: 1.6 }}>{m.text}</p>
                    </div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 0', background: '#DC2626' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <h2 className="font-display" style={{ color: '#fff', fontSize: 'clamp(36px,5vw,60px)', marginBottom: 12 }}>READY TO BUILD?</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 17, marginBottom: 32, maxWidth: 480, margin: '0 auto 32px' }}>Let's talk about your facility, your goals, and how we can engineer the perfect solution.</p>
          <Link href="/contact" className="btn-white">Contact Us Today</Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) { .about-mission-grid { grid-template-columns: 1fr !important; gap: 56px !important; } }
        @media (max-width: 1100px) { .values-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 768px) { .values-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 640px) {
          .timeline-line { left: 27px !important; }
          .timeline-row { align-items: center !important; }
          .timeline-badge { order: -1; }
          .timeline-col { text-align: left !important; padding-left: 20px !important; padding-right: 0 !important; }
          .timeline-col:empty { display: none !important; }
          .timeline-card { max-width: 100% !important; display: block !important; }
        }
      `}</style>
    </>
  );
}
