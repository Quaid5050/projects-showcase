'use client';
import PageHero from '../components/PageHero';
import Link from 'next/link';


const services = [
  {
    title: 'Equipment Manufacturing',
    tagline: 'Built from the ground up for champions.',
    desc: 'Custom-designed racks, cages, and training systems manufactured from commercial-grade steel. From single orders to full facility builds, every piece is precision-crafted.',
    features: ['Commercial-grade A36 steel', 'Powder coat finish options', 'Custom sizing available', 'Rated to 1,500+ lbs'],
    img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
  },
  {
    title: 'Fitness Training Programs',
    tagline: 'Programs that produce real results.',
    desc: 'World-class training courses led by certified coaches with backgrounds in professional athletics, physical therapy, and strength science.',
    features: ['Beginner to advanced levels', 'Strength & conditioning focus', 'Online + in-person options', 'Personalized programming'],
    img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80',
  },
  {
    title: 'Elite Athletic Coaching',
    tagline: 'One-on-one excellence.',
    desc: 'Private coaching with our expert trainers. Optimize your form, programming, and mindset — whether preparing for competition or chasing personal bests.',
    features: ['1-on-1 coaching sessions', 'Video form analysis', 'Competition prep protocols', 'Nutrition guidance'],
    img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
  },
  {
    title: 'Corporate Fitness Solutions',
    tagline: 'Equip your entire organization.',
    desc: 'Complete gym setup packages for businesses, hotels, and sports organizations — equipment, layout design, installation, and staff training.',
    features: ['Full facility layout design', 'Bulk equipment supply', 'Installation included', 'Staff training programs'],
    img: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&q=80',
  },
  {
    title: 'Custom Equipment Design',
    tagline: 'Your vision. Our engineering.',
    desc: 'Have a specific idea or unique space? Our design team engineers a custom solution tailored exactly to your requirements.',
    features: ['CAD design & consultation', 'Prototype & testing', 'Any size or configuration', 'Branded finish options'],
    img: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&q=80',
  },
  {
    title: 'Maintenance & Support',
    tagline: 'We\'re with you for the long haul.',
    desc: 'Scheduled maintenance plans, parts replacement, and a responsive service team. Your investment is protected by our commitment to excellence.',
    features: ['Annual maintenance plans', 'Priority parts replacement', 'Remote & on-site support', 'Extended warranty options'],
    img: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80',
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero title="OUR" highlight="SERVICES"
        subtitle="We provide world-class fitness training and equipment. Contact us for pricing tailored to your needs."
        breadcrumb="Services" bg="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1600&q=80" />

      <section style={{ padding: '96px 0', background: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 80 }}>
            {services.map((s, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center', direction: i % 2 === 1 ? 'rtl' : 'ltr' }} className="service-row">
                <div style={{ overflow: 'hidden', direction: 'ltr' }}>
                  <img src={s.img} alt={s.title} style={{ width: '100%', height: 400, objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ direction: 'ltr' }}>
                  <div className="section-label"><span>{s.tagline}</span></div>
                  <h2 className="font-display" style={{ fontSize: 'clamp(32px,4vw,52px)', color: '#111', lineHeight: 1, marginBottom: 16 }}>{s.title}</h2>
                  <p style={{ fontSize: 16, color: '#6b7280', lineHeight: 1.8, marginBottom: 28 }}>{s.desc}</p>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 36 }}>
                    {s.features.map(f => (
                      <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                        <span style={{ fontSize: 14, color: '#374151', fontWeight: 500 }}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="btn-red">Get a Quote</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '64px 0', background: '#111' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}>
          <div>
            <div className="font-display" style={{ color: '#fff', fontSize: 36, lineHeight: 1 }}>PRICING IS CONTACT-BASED</div>
            <p style={{ color: '#6b7280', marginTop: 8, fontSize: 15 }}>Every project is unique. Contact us and we'll build a quote around your exact needs.</p>
          </div>
          <Link href="/contact" className="btn-red">Contact for Pricing</Link>
        </div>
      </section>

      <style>{`@media(max-width:900px){.service-row{grid-template-columns:1fr!important;direction:ltr!important;gap:32px!important}}`}</style>
    </>
  );
}
