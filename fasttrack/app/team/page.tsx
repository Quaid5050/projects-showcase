'use client';
import PageHero from '../components/PageHero';
import Link from 'next/link';


const founders = [
  {
    name: 'Scott Thacker',
    role: 'Co-Founder & CEO',
    tag: 'Business Strategy & Vision',
    bio: 'With over 15 years in the fitness industry, Scott bridges the gap between athletic performance and innovative manufacturing. His background as a competitive strength athlete drives his relentless pursuit of quality.',
    quote: '"Every piece of equipment we build should make the athlete feel like they can break their own record."',
    img: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=700&q=85',
    stats: [['15+', 'Years in Fitness'], ['300+', 'Client Builds'], ['5x', 'Competition Titles']],
  },
  {
    name: 'Claude Groulx',
    role: 'Co-Founder & Head of Design',
    tag: 'Engineering & Product Design',
    bio: 'Claude brings mechanical engineering rigor and aesthetic sensibility to every product. A former Division I strength coach, he understands what athletes need and engineers it to exceed expectations.',
    quote: '"Good equipment doesn\'t just work — it inspires confidence the moment you step under the bar."',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&q=85',
    stats: [['12+', 'Years Engineering'], ['50+', 'Custom Designs'], ['100%', 'Build Quality']],
  },
];

const staff = [
  { name: 'Marcus Reid', role: 'Head Strength Coach', img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=500&q=80' },
  { name: 'Jordan Ellis', role: 'Conditioning Specialist', img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=500&q=80' },
  { name: 'Taylor Brooks', role: 'Nutrition & Recovery', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&q=80' },
  { name: 'Devon Clarke', role: 'Corporate Fitness Lead', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80' },
];

const socialLinks = [
  <svg key="ig" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
  <svg key="fb" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
];

export default function TeamPage() {
  return (
    <>
      <PageHero title="MEET THE" highlight="TEAM"
        subtitle="Built by athletes, engineered by experts. The people behind Fast Track Rack are as dedicated as the equipment they build."
        breadcrumb="Team" bg="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=1600&q=80" />

      {/* Founders */}
      <section style={{ padding: '96px 0', background: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div className="section-label" style={{ justifyContent: 'center' }}><span>The Founders</span></div>
            <h2 className="font-display" style={{ fontSize: 'clamp(40px,6vw,68px)', color: '#111', lineHeight: 1 }}>
              WHO BUILT <span style={{ color: '#DC2626' }}>THIS</span>
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 80 }}>
            {founders.map((f, i) => (
              <div key={f.name} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }} className="founder-row">
                <div style={{ position: 'relative', order: i % 2 === 0 ? 0 : 1 }}>
                  <div style={{ overflow: 'hidden', height: 520 }}>
                    <img src={f.img} alt={f.name} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(30%)', display: 'block', transition: 'filter 0.5s' }}
                      onMouseEnter={e => (e.currentTarget.style.filter = 'grayscale(0%)')}
                      onMouseLeave={e => (e.currentTarget.style.filter = 'grayscale(30%)')} />
                  </div>
                  <div style={{ position: 'absolute', bottom: -16, right: i % 2 === 0 ? -16 : 'auto', left: i % 2 === 1 ? -16 : 'auto', background: '#DC2626', padding: '12px 20px' }}>
                    <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#fff' }}>{f.tag}</span>
                  </div>
                </div>
                <div style={{ order: i % 2 === 0 ? 1 : 0 }}>
                  <div className="section-label"><span>{f.role}</span></div>
                  <h2 className="font-display" style={{ fontSize: 'clamp(36px,5vw,60px)', color: '#111', lineHeight: 1, marginBottom: 20 }}>{f.name}</h2>
                  <p style={{ fontSize: 16, color: '#4b5563', lineHeight: 1.8, marginBottom: 20 }}>{f.bio}</p>
                  <blockquote style={{ borderLeft: '4px solid #DC2626', paddingLeft: 20, marginBottom: 32 }}>
                    <p style={{ color: '#6b7280', fontStyle: 'italic', lineHeight: 1.7, fontSize: 15 }}>{f.quote}</p>
                  </blockquote>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, paddingTop: 24, borderTop: '1px solid #e5e7eb', marginBottom: 28 }}>
                    {f.stats.map(([n, l]) => (
                      <div key={l}>
                        <div className="font-display" style={{ fontSize: 36, color: '#DC2626', lineHeight: 1 }}>{n}</div>
                        <div style={{ fontSize: 11, color: '#9ca3af', letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: 4 }}>{l}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: 'flex', gap: 10 }}>
                    {socialLinks.map((icon, j) => (
                      <a key={j} href="#"
                        style={{ width: 38, height: 38, border: '2px solid #e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9ca3af', textDecoration: 'none', transition: 'all 0.2s' }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#DC2626'; (e.currentTarget as HTMLElement).style.borderColor = '#DC2626'; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#9ca3af'; (e.currentTarget as HTMLElement).style.borderColor = '#e5e7eb'; }}
                      >{icon}</a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Staff */}
      <section style={{ padding: '96px 0', background: '#f9fafb' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="section-label" style={{ justifyContent: 'center' }}><span>The Crew</span></div>
            <h2 className="font-display" style={{ fontSize: 'clamp(40px,6vw,68px)', color: '#111', lineHeight: 1 }}>
              COACHING <span style={{ color: '#DC2626' }}>STAFF</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 4 }} className="staff-grid">
            {staff.map(s => (
              <div key={s.name} style={{ background: '#fff', overflow: 'hidden' }} className="card-lift">
                <div style={{ height: 280, overflow: 'hidden' }}>
                  <img src={s.img} alt={s.name} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(50%)', transition: 'filter 0.4s, transform 0.4s', display: 'block' }}
                    onMouseEnter={e => { e.currentTarget.style.filter = 'grayscale(0%)'; e.currentTarget.style.transform = 'scale(1.05)'; }}
                    onMouseLeave={e => { e.currentTarget.style.filter = 'grayscale(50%)'; e.currentTarget.style.transform = 'scale(1)'; }} />
                </div>
                <div style={{ padding: '20px 24px', borderTop: '3px solid #DC2626' }}>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#DC2626', marginBottom: 4 }}>{s.role}</div>
                  <h3 className="font-display" style={{ fontSize: 20, color: '#111' }}>{s.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#111' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <h2 className="font-display" style={{ color: '#fff', fontSize: 'clamp(36px,5vw,60px)', marginBottom: 12 }}>
            TRAIN WITH THE <span style={{ color: '#DC2626' }}>BEST</span>
          </h2>
          <p style={{ color: '#6b7280', marginBottom: 32, fontSize: 16 }}>Ready to elevate your performance or equip your facility? Let's connect.</p>
          <Link href="/contact" className="btn-red">Get In Touch</Link>
        </div>
      </section>

      <style>{`
        @media(max-width:900px){.founder-row{grid-template-columns:1fr!important;gap:40px!important} .founder-row > div{order:unset!important}}
        @media(max-width:768px){.staff-grid{grid-template-columns:1fr 1fr!important}}
        @media(max-width:480px){.staff-grid{grid-template-columns:1fr!important}}
      `}</style>
    </>
  );
}
