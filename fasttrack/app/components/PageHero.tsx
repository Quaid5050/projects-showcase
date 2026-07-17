'use client';
import Link from 'next/link';

interface Props {
  title: string;
  highlight: string;
  subtitle?: string;
  breadcrumb: string;
  bg: string;
}

export default function PageHero({ title, highlight, subtitle, breadcrumb, bg }: Props) {
  return (
    <section style={{ position: 'relative', paddingTop: 160, paddingBottom: 100, background: '#0a0a0a', overflow: 'hidden' }}>
      {/* BG */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img src={bg} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.2 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(0,0,0,0.95) 40%, rgba(0,0,0,0.5) 100%)' }} />
      </div>
      {/* Red stripe */}
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 5, background: '#DC2626', zIndex: 2 }} />

      <div style={{ position: 'relative', zIndex: 3, maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 28 }}>
          <Link href="/" style={{ color: '#6b7280', fontSize: 12, textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Home</Link>
          <span style={{ color: '#4b5563' }}>/</span>
          <span style={{ color: '#DC2626', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 700 }}>{breadcrumb}</span>
        </div>

        <div className="section-label" style={{ marginBottom: 16 }}>
          <span>{breadcrumb}</span>
        </div>

        <h1 className="font-display" style={{ fontSize: 'clamp(56px, 9vw, 100px)', color: '#fff', lineHeight: 0.95, marginBottom: subtitle ? 24 : 0 }}>
          {title}<br /><span style={{ color: '#DC2626' }}>{highlight}</span>
        </h1>

        {subtitle && (
          <p style={{ color: '#9ca3af', fontSize: 18, maxWidth: 580, lineHeight: 1.7, fontWeight: 300 }}>{subtitle}</p>
        )}
      </div>
    </section>
  );
}
