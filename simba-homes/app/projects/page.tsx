'use client';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    id: '001', category: 'Custom Home', title: 'Modern Craftsman Estate',
    location: 'Langley, BC', year: '2024',
    specs: ['4 Bed / 3 Bath', '3,200 sq ft', 'Custom Build', '2-5-10 Warranty'],
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=80',
    desc: 'A stunning custom craftsman-style home built to the client\'s exact specifications. Features open-plan living, a chef\'s kitchen, and a master suite with mountain views.',
  },
  {
    id: '002', category: 'Land Development', title: 'Valley View Subdivision',
    location: 'Surrey, BC', year: '2023',
    specs: ['12 Lots', '2.4 Acres', 'Full Services', 'All Permits'],
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=80',
    desc: 'Full land development project converting 2.4 acres of raw land into 12 fully serviced, permit-ready lots for residential construction.',
  },
  {
    id: '003', category: 'Spec Home', title: 'The Aria Collection',
    location: 'Abbotsford, BC', year: '2024',
    specs: ['5 Bed / 4 Bath', '4,100 sq ft', 'Spec Build', 'Move-In Ready'],
    img: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=700&q=80',
    desc: 'Premium spec home featuring contemporary architecture, luxury finishes throughout, and an entertainer\'s backyard. Sold within weeks of completion.',
  },
  {
    id: '004', category: 'Renovation', title: 'Heritage Home Restoration',
    location: 'Chilliwack, BC', year: '2023',
    specs: ['Full Renovation', '2,600 sq ft', 'Heritage', '8 Months'],
    img: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=700&q=80',
    desc: 'Complete gut renovation of a heritage home, preserving original character while adding modern functionality, updated electrical, plumbing, and a new kitchen.',
  },
  {
    id: '005', category: 'Subdivision', title: 'Maple Ridge Lots',
    location: 'Maple Ridge, BC', year: '2024',
    specs: ['8 Lots', '1.8 Acres', 'All Approved', 'Serviced'],
    img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=700&q=80',
    desc: 'Successfully subdivided 1.8 acres into 8 individual lots with full BC Land Title Office approval, strata documentation, and municipal approvals completed.',
  },
  {
    id: '006', category: 'Custom Home', title: 'Contemporary Farmhouse',
    location: 'Mission, BC', year: '2024',
    specs: ['6 Bed / 5 Bath', '5,200 sq ft', 'Luxury Custom', 'Smart Home'],
    img: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=700&q=80',
    desc: 'A large-scale luxury custom home combining contemporary farmhouse aesthetics with smart home technology, a gym, theatre room, and triple garage.',
  },
];

const categories = ['All', 'Custom Home', 'Spec Home', 'Land Development', 'Subdivision', 'Renovation'];

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', height: '420px', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <Image src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1400&q=80" alt="Our Projects" fill style={{ objectFit: 'cover' }} unoptimized />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(30,37,51,0.9)' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: '#D01C2A' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1200px', margin: '0 auto', padding: '0 48px', width: '100%' }}>
          <div className="section-label" style={{ marginBottom: '12px' }}>Our Work</div>
          <h1 style={{ fontSize: 'clamp(40px, 6vw, 72px)', color: '#fff' }}>FEATURED PROJECTS</h1>
          <p style={{ color: '#718096', fontSize: '16px', marginTop: '12px', maxWidth: '500px' }}>A selection of custom homes, subdivisions and renovations built across British Columbia.</p>
          <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
            <Link href="/" style={{ fontSize: '13px', color: '#718096' }}>Home</Link>
            <span style={{ color: '#4A5568' }}>/</span>
            <span style={{ fontSize: '13px', color: '#D01C2A' }}>Projects</span>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ background: '#D01C2A', padding: '32px 48px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '24px' }}>
          {[['100+', 'Homes Built'], ['5+', 'Years Active'], ['BC Wide', 'Service Area'], ['2-5-10', 'Warranty on All New Homes']].map(([n, l]) => (
            <div key={l} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '32px', fontWeight: 800, color: '#fff', lineHeight: 1 }}>{n}</div>
              <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.75)', letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: '4px' }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects grid */}
      <section style={{ background: '#1E2533', padding: '96px 48px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {projects.map(p => (
              <div key={p.id} style={{ background: '#252D3D', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)', transition: 'border-color 0.3s' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(208,28,42,0.4)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)'}
              >
                {/* Image */}
                <div style={{ position: 'relative', aspectRatio: '16/10', overflow: 'hidden' }}>
                  <Image src={p.img} alt={p.title} fill style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }} unoptimized />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(37,45,61,0.8) 0%, transparent 60%)' }} />
                  <div style={{ position: 'absolute', top: '14px', left: '14px', background: '#D01C2A', padding: '4px 12px', fontFamily: 'Barlow Condensed, sans-serif', fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#fff' }}>{p.category}</div>
                  <div style={{ position: 'absolute', top: '14px', right: '14px', fontFamily: 'Barlow Condensed, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em' }}>{p.year}</div>
                </div>
                {/* Info */}
                <div style={{ padding: '24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                    <h3 style={{ fontSize: '20px', color: '#fff', flex: 1 }}>{p.title}</h3>
                    <span style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '10px', color: '#4A5568', letterSpacing: '0.1em', marginLeft: '8px' }}>{p.id}</span>
                  </div>
                  <p style={{ fontSize: '12px', color: '#D01C2A', fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>{p.location}</p>
                  <p style={{ fontSize: '13px', color: '#718096', lineHeight: 1.6, marginBottom: '16px' }}>{p.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {p.specs.map(s => (
                      <span key={s} style={{ fontSize: '10px', padding: '4px 8px', background: '#1E2533', color: '#718096', border: '1px solid rgba(255,255,255,0.06)', fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.06em' }}>{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#D01C2A', padding: '72px 48px', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', color: '#fff', marginBottom: '16px' }}>START YOUR PROJECT TODAY</h2>
        <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '32px', fontSize: '16px' }}>Ready to add your project to our portfolio? Contact Parminder for a consultation.</p>
        <Link href="/contact" style={{ background: '#fff', color: '#D01C2A', padding: '14px 40px', fontFamily: 'Barlow Condensed, sans-serif', fontSize: '14px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', display: 'inline-block' }}>Get Free Quote</Link>
      </section>

      <style>{`
        @media (max-width: 900px) {
          section > div[style*="repeat(3"] { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 600px) {
          section { padding-left: 20px !important; padding-right: 20px !important; }
          section > div[style*="repeat(3"], section > div[style*="repeat(2"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
