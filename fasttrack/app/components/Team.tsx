'use client';
import Link from 'next/link';

const team = [
  {
    name: 'Scott Thacker',
    role: 'Co-Founder & CEO',
    bio: 'Over 15 years in fitness equipment development. Scott drives the innovation and business strategy behind Fast Track Rack.',
    img: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=600&q=80',
  },
  {
    name: 'Claude Groulx',
    role: 'Co-Founder & Head of Design',
    bio: 'Engineering precision meets design excellence. Claude\'s background in mechanical engineering shapes the quality of every rack we produce.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
  },
];

export default function Team() {
  return (
    <section style={{ padding: '96px 0', background: '#111' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="section-label" style={{ justifyContent: 'center' }}><span style={{ color: '#DC2626' }}>The Founders</span></div>
          <h2 className="font-display" style={{ fontSize: 'clamp(40px, 6vw, 72px)', color: '#fff', lineHeight: 1 }}>
            OUR <span style={{ color: '#DC2626' }}>TEAM</span>
          </h2>
        </div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, maxWidth: 900, margin: '0 auto' }} className="team-grid">
          {team.map((member) => (
            <div key={member.name} style={{ background: '#1a1a1a', overflow: 'hidden' }}
              className="card-lift">
              {/* Image */}
              <div className="img-zoom" style={{ height: 300 }}>
                <img src={member.img} alt={member.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(60%)', transition: 'filter 0.5s, transform 0.5s' }}
                  onMouseEnter={e => (e.currentTarget.style.filter = 'grayscale(0%)')}
                  onMouseLeave={e => (e.currentTarget.style.filter = 'grayscale(60%)')}
                />
              </div>
              {/* Info */}
              <div style={{ padding: '28px 32px' }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#DC2626', marginBottom: 6 }}>{member.role}</div>
                <h3 className="font-display" style={{ fontSize: 28, color: '#fff', marginBottom: 12 }}>{member.name}</h3>
                <p style={{ fontSize: 14, color: '#9ca3af', lineHeight: 1.7 }}>{member.bio}</p>
                {/* Social icons */}
                <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
                  {[
                    <svg key="ig" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
                    <svg key="fb" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
                  ].map((icon, j) => (
                    <a key={j} href="#"
                      style={{ width: 36, height: 36, border: '1px solid rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9ca3af', textDecoration: 'none', transition: 'color 0.2s, border-color 0.2s' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#DC2626'; (e.currentTarget as HTMLElement).style.borderColor = '#DC2626'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#9ca3af'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.15)'; }}
                    >{icon}</a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <Link href="/team" className="btn-outline-red" style={{ borderColor: 'rgba(255,255,255,0.25)', color: '#fff' }}>Meet the Full Team</Link>
        </div>
      </div>

      <style>{`@media (max-width: 640px) { .team-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
