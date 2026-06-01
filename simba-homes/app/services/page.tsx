import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Our Services' };

const services = [
  {
    num: '01',
    title: 'Custom & Spec Homes',
    short: 'Tailored homes built to your vision — or ready-built spec homes with premium finishes.',
    desc: 'Whether you have a specific vision for your dream home or are looking for a move-in-ready spec home, Simba Homes delivers exceptional results. Our custom homes are designed and built around your lifestyle, budget, and preferences. Our spec homes feature premium finishes, smart layouts, and modern design that stand above the rest.',
    features: ['Fully custom floor plans', 'Premium finish packages', 'Energy-efficient builds', 'Permit & inspection management', 'Trade coordination', 'Move-in ready spec options'],
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
  },
  {
    num: '02',
    title: 'Land Development',
    short: 'Transforming raw land into shovel-ready, serviced lots ready for construction.',
    desc: 'Our land development team handles the full lifecycle of transforming raw parcels into buildable, serviced lots. From initial site analysis and feasibility studies to municipal approvals and infrastructure installation, we maximize your land\'s potential while navigating BC\'s complex regulatory environment.',
    features: ['Site analysis & feasibility', 'Environmental assessments', 'Municipal approvals', 'Utility installation', 'Grading & site prep', 'Infrastructure coordination'],
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
  },
  {
    num: '03',
    title: 'Subdivision',
    short: 'Expert land subdivision — dividing parcels into individual lots with all approvals handled.',
    desc: 'Simba Homes manages the full subdivision process from start to finish. We coordinate with municipal authorities, BC Land Title Office, and surveyors to divide your land into individual lots. Our team handles strata plan creation, Approving Officer submissions, and all legal requirements so the process runs smoothly.',
    features: ['Approving Officer submissions', 'BC Land Title coordination', 'Strata plan creation', 'Survey coordination', 'Legal lot creation', 'Municipal plan approvals'],
    img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
  },
  {
    num: '04',
    title: 'Lot Services',
    short: 'Full lot preparation — grading, utility connections, and site clearing before construction begins.',
    desc: 'Before construction can begin, your lot needs to be properly prepared. Our lot services team handles everything from initial site clearing and excavation to grading, drainage, and utility connections. We ensure your lot is 100% construction-ready, saving you time and coordination headaches.',
    features: ['Site clearing & excavation', 'Grading & leveling', 'Water & sewer connections', 'Electrical service installation', 'Foundation preparation', 'Storm drainage systems'],
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
  },
  {
    num: '05',
    title: 'Renovation',
    short: 'Breathe new life into your home — kitchens, bathrooms, full-home remodels and additions.',
    desc: 'Our renovation team transforms tired spaces into stunning, functional homes that reflect your style. From complete gut renovations to targeted kitchen and bathroom remodels, we blend quality workmanship with modern design. We also handle structural work, additions, and full-home transformations.',
    features: ['Kitchen & bathroom remodels', 'Full home renovations', 'Home additions', 'Structural modifications', 'Permit management', 'Modern design packages'],
    img: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&q=80',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', height: '420px', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <Image src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1400&q=80" alt="Services" fill style={{ objectFit: 'cover' }} unoptimized />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(30,37,51,0.88)' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: '#D01C2A' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1200px', margin: '0 auto', padding: '0 48px', width: '100%' }}>
          <div className="section-label" style={{ marginBottom: '12px' }}>What We Build</div>
          <h1 style={{ fontSize: 'clamp(40px, 6vw, 72px)', color: '#fff' }}>OUR SERVICES</h1>
          <p style={{ color: '#718096', fontSize: '16px', marginTop: '12px', maxWidth: '500px' }}>From custom homes to land development — complete residential construction services across BC.</p>
          <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
            <Link href="/" style={{ fontSize: '13px', color: '#718096' }}>Home</Link>
            <span style={{ color: '#4A5568' }}>/</span>
            <span style={{ fontSize: '13px', color: '#D01C2A' }}>Services</span>
          </div>
        </div>
      </section>

      {/* Services list */}
      {services.map((svc, i) => (
        <section key={i} style={{ background: i % 2 === 0 ? '#1E2533' : '#252D3D', padding: '96px 48px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: i % 2 === 0 ? '1fr 1fr' : '1fr 1fr', gap: '72px', alignItems: 'center', direction: i % 2 !== 0 ? 'rtl' : 'ltr' }}>
            {/* Image */}
            <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden', direction: 'ltr' }}>
              <Image src={svc.img} alt={svc.title} fill style={{ objectFit: 'cover' }} unoptimized />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(208,28,42,0.12) 0%, transparent 50%)' }} />
              <div style={{ position: 'absolute', top: '20px', left: '20px', background: '#D01C2A', padding: '8px 16px', fontFamily: 'Barlow Condensed, sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#fff' }}>{svc.num}</div>
            </div>
            {/* Content */}
            <div style={{ direction: 'ltr' }}>
              <div className="section-label" style={{ marginBottom: '10px' }}>Service {svc.num}</div>
              <h2 style={{ fontSize: 'clamp(28px, 3vw, 42px)', color: '#fff', marginBottom: '16px' }}>{svc.title.toUpperCase()}</h2>
              <p style={{ fontSize: '15px', color: '#CBD5E0', lineHeight: 1.7, marginBottom: '16px', fontWeight: 400 }}>{svc.short}</p>
              <p style={{ fontSize: '14px', color: '#718096', lineHeight: 1.8, marginBottom: '32px' }}>{svc.desc}</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '32px' }}>
                {svc.features.map(f => (
                  <div key={f} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <div style={{ width: '16px', height: '16px', background: '#D01C2A', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                      <svg width="8" height="6" viewBox="0 0 8 6"><path d="M1 3l2 2L7 1" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <span style={{ fontSize: '13px', color: '#CBD5E0', lineHeight: 1.4 }}>{f}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary">Inquire About This Service</Link>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section style={{ background: '#D01C2A', padding: '72px 48px', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', color: '#fff', marginBottom: '16px' }}>NOT SURE WHERE TO START?</h2>
        <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '32px', fontSize: '16px' }}>Contact Parminder for a free consultation and we will guide you through the right service for your project.</p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact" style={{ background: '#fff', color: '#D01C2A', padding: '14px 40px', fontFamily: 'Barlow Condensed, sans-serif', fontSize: '14px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', display: 'inline-block' }}>Get Free Quote</Link>
          <a href="tel:+17787077325" style={{ background: 'transparent', color: '#fff', padding: '14px 40px', fontFamily: 'Barlow Condensed, sans-serif', fontSize: '14px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', display: 'inline-block', border: '2px solid rgba(255,255,255,0.4)' }}>+1 778 707 7325</a>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          section > div[style*="grid-template-columns"] { grid-template-columns: 1fr !important; direction: ltr !important; }
          section > div > div[style*="direction: ltr"] { direction: ltr !important; }
          section > div > div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) { section { padding-left: 20px !important; padding-right: 20px !important; } }
      `}</style>
    </>
  );
}
