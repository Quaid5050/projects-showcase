import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Our Services' };

const services = [
  {
    num: '01', title: 'Custom & Spec Homes',
    short: 'Tailored homes engineered to your vision — or premium spec homes ready for immediate possession.',
    desc: 'Whether you have a specific vision for your dream home or are looking for a move-in-ready spec home, Simba Homes delivers exceptional results. Our custom homes are designed around your lifestyle, budget, and preferences with milestone-driven timelines and no surprise change orders.',
    features: ['Fully custom floor plans', 'Premium finish packages', 'Energy Step Code compliance', 'Milestone-driven scheduling', 'Permit & inspection management', 'Move-in ready spec options'],
    img: '/img1.png',
  },
  {
    num: '02', title: 'Laneway Homes & Backyard Studios',
    short: 'Maximize your lot with a laneway home or backyard studio — rental income or multi-generational living.',
    desc: 'Laneway homes and backyard studios are one of the fastest-growing housing solutions in Lower Mainland British Columbia. We manage the full process — from zoning audit and design to permit approval and construction — so you can start earning rental income or housing family without the headache.',
    features: ['Zoning & feasibility audit', 'BC multiplex regulation compliance', 'Laneway home design & build', 'Backyard studio construction', 'Rental income optimization', 'Full permit management'],
    img: '/img2.jpeg',
  },
  {
    num: '03', title: 'Multiplexes & Home Additions',
    short: 'Capitalize on BC\'s new multiplex regulations — we build duplexes, triplexes, and fourplexes across Lower Mainland British Columbia.',
    desc: 'With BC\'s new multiplex zoning rules allowing up to 4 units on most single-family lots, now is the time to maximize your property\'s value. We specialize in multiplex design and construction that meets municipal requirements while maximizing unit count and rental yield.',
    features: ['Duplex, triplex & fourplex builds', 'BC multiplex zoning compliance', 'Home addition design & permits', 'Secondary suite integration', 'Density maximization strategy', 'Rental income planning'],
    img: 'ser.jpeg',
  },
  {
    num: '04', title: 'Land Development & Subdivision',
    short: 'Transforming raw land into shovel-ready serviced lots — feasibility to final approval handled.',
    desc: 'Our land development team handles the full lifecycle of transforming raw parcels into buildable, serviced lots. From initial site analysis and feasibility studies to municipal approvals and infrastructure installation, we maximize your land\'s potential while navigating BC\'s complex regulatory environment.',
    features: ['Site analysis & feasibility', 'Environmental assessments', 'Subdivision & strata creation', 'BC Land Title coordination', 'Utility installation', 'Municipal plan approvals'],
    img: '/img3.png',
  },
  {
    num: '05', title: 'Renovation & Remodels',
    short: 'Breathe new life into your home — kitchens, bathrooms, full-home renovations and structural additions.',
    desc: 'Our renovation team transforms tired spaces into stunning, functional homes. From complete gut renovations to targeted kitchen and bathroom remodels, we blend quality workmanship with modern design. All renovation work is permit-managed and code-compliant from day one.',
    features: ['Kitchen & bathroom remodels', 'Full home renovations', 'Structural additions', 'Heritage home restoration', 'Permit management', 'Energy-efficient upgrades'],
    img: '/img4.png',
  },
  {
    num: '06', title: 'Design & Permitting',
    short: 'We speak "City Hall" so you don\'t have to — full design, permitting, and zoning services.',
    desc: 'One of the biggest risks in custom home building is Permitting Limbo — where projects stall for months due to paperwork errors or zoning misunderstandings. At Simba Homes, we treat permitting as a dedicated phase. We prepare meticulous application packages that anticipate the city\'s questions before they ask them.',
    features: ['Pre-design zoning audit', 'BC Building Code compliance', 'Energy Step Code modeling', 'City Hall liaison & submission', 'Variance negotiation', 'Fast-track permit strategy'],
    img: '/per.jpeg',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', height: '420px', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <Image src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1400&q=80" alt="Simba Homes Services" fill style={{ objectFit: 'cover' }} unoptimized />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(30,37,51,0.88)' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: '#D01C2A' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1200px', margin: '0 auto', padding: '0 48px', width: '100%' }}>
          <div className="section-label" style={{ marginBottom: '12px' }}>What We Build</div>
          <h1 style={{ fontSize: 'clamp(40px, 6vw, 72px)', color: '#fff' }}>OUR SERVICES</h1>
          <p style={{ color: '#718096', fontSize: '16px', marginTop: '12px', maxWidth: '560px' }}>
            From custom homes and laneway suites to multiplexes and full land development — specialized residential construction across Lower Mainland British Columbia.
          </p>
          <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
            <Link href="/" style={{ fontSize: '13px', color: '#718096' }}>Home</Link>
            <span style={{ color: '#4A5568' }}>/</span>
            <span style={{ fontSize: '13px', color: '#D01C2A' }}>Services</span>
          </div>
        </div>
      </section>

      {/* Services */}
      {services.map((svc, i) => (
        <section key={i} style={{ background: i % 2 === 0 ? '#1E2533' : '#252D3D', padding: '88px 48px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '72px', alignItems: 'center', direction: i % 2 !== 0 ? 'rtl' : 'ltr' }}>
            <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden', direction: 'ltr' }}>
              <Image src={svc.img} alt={svc.title} fill style={{ objectFit: 'cover' }} unoptimized />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(208,28,42,0.12) 0%, transparent 50%)' }} />
              <div style={{ position: 'absolute', top: '20px', left: '20px', background: '#D01C2A', padding: '6px 14px', fontFamily: 'Barlow Condensed, sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#fff' }}>{svc.num}</div>
            </div>
            <div style={{ direction: 'ltr' }}>
              <div className="section-label" style={{ marginBottom: '10px' }}>Service {svc.num}</div>
              <h2 style={{ fontSize: 'clamp(26px, 3vw, 40px)', color: '#fff', marginBottom: '16px' }}>{svc.title.toUpperCase()}</h2>
              <p style={{ fontSize: '15px', color: '#CBD5E0', lineHeight: 1.7, marginBottom: '16px' }}>{svc.short}</p>
              <p style={{ fontSize: '14px', color: '#718096', lineHeight: 1.8, marginBottom: '28px' }}>{svc.desc}</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '28px' }}>
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
        <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '32px', fontSize: '16px' }}>Contact Parminder for a free consultation and we will guide you to the right solution for your project.</p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact" style={{ background: '#fff', color: '#D01C2A', padding: '14px 40px', fontFamily: 'Barlow Condensed, sans-serif', fontSize: '14px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', display: 'inline-block' }}>Get Free Quote</Link>
          <a href="tel:+17787077325" style={{ background: 'transparent', color: '#fff', padding: '14px 40px', fontFamily: 'Barlow Condensed, sans-serif', fontSize: '14px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', display: 'inline-block', border: '2px solid rgba(255,255,255,0.4)' }}>+1 778 707 7325</a>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          section > div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; direction: ltr !important; }
          section > div > div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) { section { padding-left: 20px !important; padding-right: 20px !important; } }
      `}</style>
    </>
  );
}
