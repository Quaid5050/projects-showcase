import Link from 'next/link';
import Image from 'next/image';

const products = [
  /* ── SINGLE MAUSOLEUM ── */
  {
    name: 'Single Mausoleum',
    category: 'Mausoleum',
    desc: 'An intimate and dignified resting place crafted for one with enduring granite and refined architectural detail. Perfect for individuals seeking a private above-ground memorial.',
    features: ['Premium granite construction', 'Custom engraving', 'Weather-sealed interior', 'Classical or modern design'],
    img: '/single mausoleum/SD-809.jpg',
    gallery: [
      '/single mausoleum/1_crypt_domestic[1].jpg',
      '/single mausoleum/WLS-104HR-A-India-Red.jpg',
      '/single mausoleum/single_gray_granite_gable_roof_fluted_columns-Skrmetta-HPIM0598.jpg',
      '/single mausoleum/single_crypt_import[1].jpg',
      '/single mausoleum/M-8.jpg',
      '/single mausoleum/Picture33333333333333-removebg-preview.png',
    ],
  },

  /* ── DOUBLE MAUSOLEUM ── */
  {
    name: 'Double Mausoleum',
    category: 'Mausoleum',
    desc: 'A shared monument of love and legacy designed to honor two lives with timeless elegance. Perfect for couples and life partners seeking a joint memorial.',
    features: ['Dual crypt capacity', 'Matching interior finishes', 'Joint inscription panels', 'Bronze door options'],
    img: '/Double Mausoleums/DOUBLE-CRYPT-STERWALD-WITH-PLAIN-COLUMNS-1024x738.jpg',
    gallery: [
      '/Double Mausoleums/WLS-208HR-India-Dakota.jpg',
      '/Double Mausoleums/WLS-202HR-Rose-Beta-e1775843167487.jpg',
      '/Double Mausoleums/My_Pictures0006-1024x679.jpg',
      '/Double Mausoleums/SD-803.jpg',
      '/Double Mausoleums/bailey-mausoleum_orig.jpg',
      '/Double Mausoleums/Dark_Gray_Sterwald.jpg',
    ],
  },

  /* ── FOUR CRYPT ── */
  {
    name: 'Four Crypt Mausoleum',
    category: 'Mausoleum',
    desc: 'A distinguished family structure accommodating four crypts with grand proportions and refined granite craftsmanship, ideal for immediate family memorialization.',
    features: ['Four individual crypts', 'Stacked or side-by-side layout', 'Interior ventilation', 'Family name inscription'],
    img: '/Four Mausoleum/Parker_WalkUp_Gallery.jpg',
    gallery: [
      '/Four Mausoleum/four-crypt-flat-top.jpg',
      '/Four Mausoleum/4-Crypt-Stacked-Rooftop.jpg',
      '/Four Mausoleum/PC-Products_Main-ClassicMausoleum.jpg',
      '/Four Mausoleum/Picture6.png',
      '/Four Mausoleum/59823197_1596477177152158_5303922300003811328_n.jpg',
      '/Four Mausoleum/CP-7742-2020_Legacy_Estates_Book[47].jpg',
    ],
  },

  /* ── SIX CRYPT ── */
  {
    name: 'Six Crypt Mausoleum',
    category: 'Mausoleum',
    desc: 'A grand family memorial accommodating six crypts. Stately proportions, premium granite, and architectural grandeur define this impressive structure.',
    features: ['Six individual crypts', 'Stacked layout design', 'Interior marble options', 'Custom family inscription'],
    img: '/Six crypt/6-Crypt-Stacked-Dark-Cloud-Grey.jpg',
    gallery: [
      '/Six crypt/CORAL-BLUE-STACKED-1024x752.jpg',
      '/Six crypt/CP-7742-2020_Legacy_Estates_Book[45].jpg',
      '/Six crypt/Paramount_Detail_WalkUp_Gallery.jpg',
      '/Estates/6-crypt-walk-in.jpg',
      '/Estates/6-crypt-Cramer-removebg-preview.png',
      '/Estates/39-1024x684.jpg',
    ],
  },

  /* ── ESTATE MAUSOLEUM ── */
  {
    name: 'Estate Mausoleum',
    category: 'Estate',
    desc: 'The pinnacle of memorial architecture — a grand private estate mausoleum with full interior access, seating, and capacity for an entire family legacy.',
    features: ['Walk-in interior', 'Multiple crypt levels', 'Interior seating & windows', 'Fully custom design'],
    img: '/Estates/Tribute_WalkIn_Gallery.jpg',
    gallery: [
      '/Estates/Elite_WalkIn_Gallery.jpg',
      '/Estates/Sovereign_WalkIn_Gallery.jpg',
      '/Estates/Birthright_WalkIn_Gallery.jpg',
      '/Estates/Tribute_Interior_WalkIn_Gallery.jpg',
      '/Estates/Walk-in-Mausoleum-Grey-Youngstown-OH1.jpg',
      '/Estates/Tan-brown-walk-in-Houst-TX-2.jpg',
    ],
  },

  /* ── FAMILY COLUMBARIUM ── */
  {
    name: 'Family Columbarium',
    category: 'Columbarium',
    desc: 'Beautifully designed niches for cremated remains arranged for an entire family. A graceful, space-efficient memorial honoring multiple loved ones.',
    features: ['Multiple niche configurations', 'Individual name plates', 'Sealed niche fronts', 'Photo inset options'],
    img: '/Family And Companion Columberia/sd-701_final.png',
    gallery: [
      '/Family And Companion Columberia/sd-702_final.png',
      '/Family And Companion Columberia/4-Niche-Columbarium.png',
      '/Family And Companion Columberia/cremation_jpgs3.jpg',
      '/Family And Companion Columberia/cremation_jpgs8.jpg',
      '/Family And Companion Columberia/40684956_1411156542350890_8868624286714167296_n.jpg',
      '/Family And Companion Columberia/40931005_1411156562350888_3417247178094018560_n.jpg',
    ],
  },

  /* ── COMMUNITY COLUMBARIUM ── */
  {
    name: 'Community Columbarium',
    category: 'Columbarium',
    desc: 'Large-scale columbarium structures designed for cemeteries, churches, and community organizations — accommodating hundreds of niches with elegant design.',
    features: ['High-capacity niche design', 'Modular expandable system', 'Weather-resistant granite', 'Custom engraving'],
    img: '/Community Columberian/SD-756_Edit_Gallery.jpg',
    gallery: [
      '/Community Columberian/SD-781_Render_Gallery.jpg',
      '/Community Columberian/SD-782_Gallery.jpg',
      '/Community Columberian/SD-784_Render_Gallery.jpg',
      '/Community Columberian/SD-792_Trellis_Gallery.jpg',
      '/Community Columberian/SD793_Edit_Gallery.jpg',
      '/Community Columberian/R.jpg',
    ],
  },

  /* ── CREMATION BENCH ── */
  {
    name: 'Cremation Bench',
    category: 'Cremation',
    desc: 'A serene granite bench serving as both a memorial tribute and a peaceful resting place for reflection, incorporating an urn chamber with discreet elegance.',
    features: ['Integrated urn chamber', 'Custom inscription panel', 'Multiple granite colors', 'Weather-resistant seal'],
    img: '/Cremation Benches/SD-004_FINAL_Gallery__1_-removebg-preview.png',
    gallery: [
      '/Cremation Benches/SD-003_Setup_E_Gallery__1_-removebg-preview.png',
      '/Cremation Benches/SD-005C_FINAL_Gallery-removebg-preview.png',
      '/Cremation Benches/SD-032_FINAL_George_Gallery-removebg-preview.png',
      '/Cremation Benches/DSC06264_Angel_Bronze_Edit_Gallery-removebg-preview.png',
      '/Cremation Benches/New folder (3)/Image_20260420_0001.jpg',
      '/Cremation Benches/New folder (3)/Image_20260420_0002.jpg',
    ],
  },

  /* ── CEMETERY RESTORATION ── */
  {
    name: 'Cemetery Restoration',
    category: 'Service',
    desc: 'Professional restoration of existing mausoleums, memorials, and granite structures — bringing weathered monuments back to their original dignity and beauty.',
    features: ['Structural assessment', 'Surface cleaning & sealing', 'Crack and joint repair', 'Complete refurbishment'],
    img: '/Estates/Blake-Mausoleum.jpg',
    gallery: [
      '/Estates/Reeves.jpg',
      '/Estates/db_SM-3002_20Mod1.jpg',
      '/Estates/maus2.png',
      '/Estates/maus-3.png',
      '/Estates/kosik.png',
      '/Double Mausoleums/Mausoleum-Gallery-Pics-2 (1).jpg',
    ],
  },
];

const categoryColors: Record<string, string> = {
  Mausoleum:   '#2c2820',
  Estate:      '#4a3820',
  Columbarium: '#1e3030',
  Cremation:   '#2c2030',
  Service:     '#2a2840',
};

export default function ProductsPage() {
  return (
    <div style={{ background: '#faf8f4', paddingTop: '80px' }}>

      {/* Hero */}
      <section style={{ position: 'relative', height: '380px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Image src="/Estates/Sovereign_WalkIn_Gallery.jpg" alt="Mausoleum products" fill
          style={{ objectFit: 'cover', objectPosition: 'center 40%' }} quality={90} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,8,5,0.62)' }} />
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', justifyContent: 'center', marginBottom: '18px' }}>
            <div style={{ width: '36px', height: '1px', background: '#b8922a' }} />
            <span style={{ fontFamily: 'Cinzel, serif', fontSize: '0.58rem', letterSpacing: '0.4em', color: '#d4aa4a' }}>OUR COLLECTION</span>
            <div style={{ width: '36px', height: '1px', background: '#b8922a' }} />
          </div>
          <h1 style={{ fontFamily: 'Cinzel, serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#faf8f4' }}>
            Products & Services
          </h1>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', color: 'rgba(244,240,232,0.8)', marginTop: '14px' }}>
            From intimate single mausoleums to grand community structures
          </p>
        </div>
      </section>

      <style>{`
        .products-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
        .pcard { background: #fff; border: 1px solid rgba(184,146,42,0.12); display: flex; flex-direction: column; transition: box-shadow 0.3s, transform 0.3s; overflow: hidden; }
        .pcard:hover { box-shadow: 0 12px 40px rgba(44,40,32,0.12); transform: translateY(-3px); }
        .pcard-img { position: relative; height: 260px; overflow: hidden; background: #e8e4dc; flex-shrink: 0; }
        .pcard-img img { transition: transform 0.55s ease !important; }
        .pcard:hover .pcard-img img { transform: scale(1.05) !important; }
        .thumb-strip { display: grid; grid-template-columns: repeat(6, 1fr); gap: 4px; padding: 8px 10px 4px; background: #faf8f4; }
        .thumb-cell { position: relative; height: 58px; overflow: hidden; background: #e8e4dc; cursor: pointer; }
        .thumb-cell img { transition: transform 0.4s ease !important; }
        .thumb-cell:hover img { transform: scale(1.12) !important; }
        .pcard-body { padding: 22px 24px 16px; flex: 1; display: flex; flex-direction: column; }
        .pcard-footer { padding: 14px 24px 24px; border-top: 1px solid rgba(184,146,42,0.1); margin-top: auto; }
        @media (max-width: 1024px) { .products-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 640px) { .products-grid { grid-template-columns: 1fr !important; } .pcard-img { height: 220px !important; } .thumb-strip { grid-template-columns: repeat(3, 1fr) !important; } .thumb-cell { height: 64px !important; } }
      `}</style>

      {/* Grid */}
      <section style={{ padding: 'clamp(48px,6vw,80px) clamp(20px,5vw,56px)' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          <div className="products-grid">
            {products.map((p, i) => (
              <div key={i} className="pcard">
                {/* Main image */}
                <div className="pcard-img">
                  <Image src={p.img} alt={p.name} fill
                    style={{ objectFit: 'cover' }} quality={85}
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw" />
                  <div style={{ position: 'absolute', top: '14px', left: '14px', background: categoryColors[p.category] || '#2c2820', padding: '5px 14px', fontFamily: 'Cinzel, serif', fontSize: '0.52rem', letterSpacing: '0.2em', color: '#d4aa4a', textTransform: 'uppercase' }}>
                    {p.category}
                  </div>
                </div>

                {/* Thumbnails */}
                <div className="thumb-strip">
                  {p.gallery.map((g, gi) => (
                    <div key={gi} className="thumb-cell">
                      <Image src={g} alt={`${p.name} ${gi + 2}`} fill
                        style={{ objectFit: 'cover' }} quality={60} sizes="80px" />
                    </div>
                  ))}
                </div>

                {/* Body */}
                <div className="pcard-body">
                  <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '0.95rem', letterSpacing: '0.07em', color: '#2c2820', marginBottom: '10px' }}>{p.name}</h3>
                  <p style={{ fontSize: '0.875rem', color: '#7a7268', lineHeight: 1.75, marginBottom: '16px' }}>{p.desc}</p>
                  <div>
                    {p.features.map((f, fi) => (
                      <div key={fi} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '7px' }}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <circle cx="7" cy="7" r="6" stroke="#b8922a" strokeWidth="0.8" fill="rgba(184,146,42,0.06)" />
                          <path d="M4 7L6.5 9.5L10 5" stroke="#b8922a" strokeWidth="1" strokeLinecap="round" />
                        </svg>
                        <span style={{ fontSize: '0.8rem', color: '#4a4540' }}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="pcard-footer">
                  <Link href="/contact" className="btn-outline"
                    style={{ fontSize: '0.62rem', padding: '10px 22px', display: 'inline-block' }}>
                    Request a Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#2c2820', padding: '72px clamp(20px,5vw,56px)', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2rem)', color: '#faf8f4', marginBottom: '14px' }}>Need a Custom Solution?</h2>
        <p style={{ color: '#7a7268', maxWidth: '460px', margin: '0 auto 36px', fontSize: '0.95rem' }}>
          Contact us for a personalized consultation and custom pricing based on your specific requirements.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact" className="btn-gold">Request Custom Quote</Link>
          <a href="tel:+19107344426" style={{ display: 'inline-block', background: 'transparent', color: '#faf8f4', fontFamily: 'Cinzel, serif', fontSize: '0.68rem', letterSpacing: '0.2em', padding: '13px 35px', border: '1.5px solid rgba(250,248,244,0.3)', textDecoration: 'none' }}>Call Us Directly</a>
        </div>
      </section>
    </div>
  );
}