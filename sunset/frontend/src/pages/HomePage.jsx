import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BookingForm from '../components/BookingForm';
import ScrollToTop from '../components/ScrollToTop';

// Real property photos (from /public/images/) + quality Unsplash fills
const IMGS = {
  // Hero slideshow — best shots first
  hero1:    '/images/property-gate.jpg',
  hero2:    'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1800&q=85',
  hero3:    '/images/property-exterior-day.jpg',
  hero4:    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1800&q=85',

  // About section
  about:    '/images/property-building.jpg',
  aboutAcc: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&q=80',

  // Amenity cards — mix real + Unsplash
  pool:     'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80',
  bedroom:  'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
  dining:   'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80',
  terrace:  '/images/property-night.jpg',

  // Gallery grid — real property photos take centre stage
  gal1:     '/images/property-gate.jpg',
  gal2:     '/images/property-exterior-day.jpg',
  gal3:     '/images/property-building.jpg',
  gal4:     '/images/property-night.jpg',
  gal5:     '/images/property-entrance.jpg',
  gal6:     '/images/property-veranda.jpg',
  gal7:     '/images/property-exterior2.jpg',

  // Why-us collage
  col1:     '/images/property-entrance2.jpg',
  col2:     '/images/property-sitting.jpg',
  col3:     '/images/property-corridor.jpg',

  // Parallax quote section
  sunset:   'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1800&q=80',
};

const amenityCards = [
  { img: IMGS.pool,    label: 'Private Pool',     desc: 'Infinity pool for your exclusive use' },
  { img: IMGS.bedroom, label: 'Luxury Bedrooms',  desc: 'Plush beds & premium Egyptian cotton' },
  { img: IMGS.dining,  label: 'Gourmet Kitchen',  desc: 'Fully equipped for private chef experiences' },
  { img: IMGS.terrace, label: 'Gated & Secure',   desc: 'Private gated compound, 24/7 security' },
];

const gallery = [
  { img: IMGS.gal1, wide: true,  tall: false, cap: 'Gated entrance' },
  { img: IMGS.gal2, wide: false, tall: true,  cap: 'Property exterior' },
  { img: IMGS.gal3, wide: false, tall: false, cap: 'The villa' },
  { img: IMGS.gal4, wide: false, tall: false, cap: 'Evening ambiance' },
  { img: IMGS.gal5, wide: true,  tall: false, cap: 'Welcome entrance' },
  { img: IMGS.gal6, wide: false, tall: false, cap: 'Verandah seating' },
  { img: IMGS.gal7, wide: false, tall: false, cap: 'Exterior view' },
];

const testimonials = [
  { av:'EJ', name:'Emily & James T.', origin:'New York, USA',
    text:'Absolutely breathtaking. Woke up every morning to that golden Jamaican sunrise. Sunset Retreat is exactly what a luxury escape should feel like — pure paradise.' },
  { av:'SL', name:'Sophie Laurent',   origin:'Paris, France',
    text:'The villa exceeded every expectation. The atmosphere, the comfort, the location — we did not want to leave. Already planning our return to Jamaica!' },
  { av:'MK', name:'Marcus & Kezia B.',origin:'London, UK',
    text:'From arrival to departure we were treated like royalty. The attention to detail is extraordinary. Jamaica through Sunset Retreat is unforgettable.' },
];

function useReveal() {
  const [vis, setVis] = useState({});
  const refs = useRef({});
  useEffect(() => {
    const obs = new IntersectionObserver(es => {
      es.forEach(e => { if (e.isIntersecting) setVis(v => ({ ...v, [e.target.dataset.key]: true })); });
    }, { threshold: 0.1 });
    Object.values(refs.current).forEach(r => r && obs.observe(r));
    return () => obs.disconnect();
  }, []);
  const setRef = key => el => { if (el) refs.current[key] = el; };
  const anim = (key, delay = 0) => ({
    opacity: vis[key] ? 1 : 0,
    transform: vis[key] ? 'translateY(0)' : 'translateY(32px)',
    transition: `opacity .85s ease ${delay}s, transform .85s ease ${delay}s`,
  });
  return { setRef, anim };
}

function CIcon({ name }) {
  const p = { width:18, height:18, fill:'none', stroke:'#C9933A', strokeWidth:'1.8', viewBox:'0 0 24 24' };
  if (name==='phone') return <svg {...p}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
  if (name==='mail')  return <svg {...p}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>;
  return <svg {...p}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>;
}

export default function HomePage() {
  const { setRef, anim } = useReveal();
  const [heroIdx, setHeroIdx] = useState(0);
  const heroImgs = [IMGS.hero1, IMGS.hero2, IMGS.hero3, IMGS.hero4];

  useEffect(() => {
    const t = setInterval(() => setHeroIdx(i => (i + 1) % heroImgs.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <Navbar />
      <ScrollToTop />

      {/* ── HERO ── */}
      <section style={{ position:'relative', height:'100vh', minHeight:680, overflow:'hidden' }}>
        {heroImgs.map((src, i) => (
          <div key={i} style={{
            position:'absolute', inset:0,
            backgroundImage:`url(${src})`,
            backgroundSize:'cover', backgroundPosition:'center',
            opacity: heroIdx===i ? 1 : 0,
            transition:'opacity 1.6s ease',
          }}/>
        ))}
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom,rgba(10,18,35,.6) 0%,rgba(10,18,35,.25) 45%,rgba(10,18,35,.78) 100%)', zIndex:1 }}/>

        <div className="container" style={{ position:'relative', zIndex:2, height:'100%', display:'flex', alignItems:'center' }}>
          <div style={{ maxWidth:700, animation:'fadeUp 1s ease .25s both' }}>
            <p style={{ fontFamily:"'Jost',sans-serif", fontSize:11, letterSpacing:'.4em', textTransform:'uppercase', color:'#C9933A', marginBottom:18 }}>
              Luxury Vacation Rental · Ocho Rios, Jamaica
            </p>
            <h1 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(52px,7vw,96px)', fontWeight:600, color:'#FFFFFF', lineHeight:1.08, marginBottom:22, textShadow:'0 2px 12px rgba(0,0,0,.7),0 4px 40px rgba(0,0,0,.5)' }}>
              Where Every Sunset<br /><em style={{ color:'#E8B96A', fontStyle:'italic' }}>Tells a Story</em>
            </h1>
            <p style={{ fontSize:17, color:'rgba(255,255,255,.78)', maxWidth:480, marginBottom:40, lineHeight:1.85, fontWeight:300 }}>
              119 Riviera Blvd, Ocho Rios, Jamaica — your private gated villa awaits.
            </p>
            <div style={{ display:'flex', gap:14, flexWrap:'wrap', alignItems:'center' }}>
              <Link to="/contact" className="btn-primary" style={{ padding:'15px 38px', fontSize:12, letterSpacing:'.12em' }}>
                Book Your Stay
                <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <Link to="/about" className="btn-outline" style={{ padding:'15px 38px', fontSize:12, letterSpacing:'.12em' }}>
                Explore Villa
              </Link>
              {/* Booking platform links */}
              <div style={{ display:'flex', gap:10, marginLeft:4 }}>
                <a href="https://www.airbnb.com/rooms/51519181" target="_blank" rel="noreferrer"
                  style={{ display:'flex', alignItems:'center', gap:6, background:'rgba(255,255,255,.12)', border:'1px solid rgba(255,255,255,.3)', color:'#FFFFFF', padding:'10px 16px', fontSize:11, letterSpacing:'.08em', textDecoration:'none', backdropFilter:'blur(4px)', transition:'all .3s' }}
                  onMouseEnter={e=>e.currentTarget.style.background='rgba(255,90,58,.85)'}
                  onMouseLeave={e=>e.currentTarget.style.background='rgba(255,255,255,.12)'}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z"/></svg>
                  Airbnb
                </a>
                <a href="https://www.vrbo.com/4984182" target="_blank" rel="noreferrer"
                  style={{ display:'flex', alignItems:'center', gap:6, background:'rgba(255,255,255,.12)', border:'1px solid rgba(255,255,255,.3)', color:'#FFFFFF', padding:'10px 16px', fontSize:11, letterSpacing:'.08em', textDecoration:'none', backdropFilter:'blur(4px)', transition:'all .3s' }}
                  onMouseEnter={e=>e.currentTarget.style.background='rgba(0,115,230,.85)'}
                  onMouseLeave={e=>e.currentTarget.style.background='rgba(255,255,255,.12)'}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
                  VRBO
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Slide dots */}
        <div style={{ position:'absolute', bottom:36, left:'50%', transform:'translateX(-50%)', zIndex:3, display:'flex', gap:8 }}>
          {heroImgs.map((_,i) => (
            <button key={i} onClick={() => setHeroIdx(i)} style={{ width:heroIdx===i?28:8, height:8, background:heroIdx===i?'#C9933A':'rgba(255,255,255,.4)', border:'none', cursor:'pointer', borderRadius:4, transition:'all .4s', padding:0 }}/>
          ))}
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <section style={{ background:'#1A2744', padding:'22px 0', borderBottom:'1px solid rgba(201,147,58,.15)' }}>
        <div className="container">
          <div style={{ display:'flex', justifyContent:'space-around', flexWrap:'wrap', gap:20 }}>
            {[['100+','Happy Guests'],['5★','Average Rating'],['119','Riviera Blvd'],['24/7','Guest Support'],['Gated','Private Villa']].map(([n,l]) => (
              <div key={l} style={{ textAlign:'center' }}>
                <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:28, color:'#C9933A', fontWeight:500, lineHeight:1 }}>{n}</div>
                <div style={{ fontSize:10, letterSpacing:'.18em', color:'rgba(255,255,255,.4)', textTransform:'uppercase', marginTop:4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="section-pad" style={{ background:'#FAF7F2' }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:72, alignItems:'center' }}>
            <div ref={setRef('ab')} data-key="ab" style={anim('ab')}>
              <p className="section-label">Welcome to Paradise</p>
              <div className="gold-line left"/>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(34px,4vw,54px)', color:'#1A2744', fontWeight:400, lineHeight:1.15, margin:'18px 0 22px' }}>
                A Private Sanctuary<br />in <em style={{ color:'#C9933A' }}>Ocho Rios, Jamaica</em>
              </h2>
              <p style={{ color:'#555', fontSize:16, lineHeight:1.95, marginBottom:18 }}>
                Sunset Retreat JA is a beautifully gated private villa at 119 Riviera Blvd, Ocho Rios. Blending Caribbean warmth with world-class comfort, it is the ideal escape for couples, families, and groups.
              </p>
              <p style={{ color:'#555', fontSize:16, lineHeight:1.95, marginBottom:34 }}>
                Minutes from world-famous attractions — Dunn's River Falls, Blue Hole, pristine beaches — yet completely private and serene once you step through our golden gates.
              </p>
              <div style={{ display:'flex', gap:24, marginBottom:34, flexWrap:'wrap' }}>
                {[['Gated Villa','Exclusively yours'],['Ocho Rios','Prime location'],['Full Amenities','Nothing missing']].map(([t,s]) => (
                  <div key={t} style={{ borderLeft:'2px solid #C9933A', paddingLeft:12 }}>
                    <div style={{ fontSize:13, fontWeight:500, color:'#1A2744' }}>{t}</div>
                    <div style={{ fontSize:12, color:'#C9933A' }}>{s}</div>
                  </div>
                ))}
              </div>
              {/* Platform links */}
              <div style={{ display:'flex', gap:10, marginBottom:28, flexWrap:'wrap' }}>
                {[
                  { label:'Book on Airbnb',href:'https://www.airbnb.com/rooms/51519181',bg:'#FF5A3B' },
                  { label:'Book on VRBO', href:'https://www.vrbo.com/4984182',           bg:'#0073E6' },
                ].map(p => (
                  <a key={p.label} href={p.href} target="_blank" rel="noreferrer"
                    style={{ background:p.bg, color:'#FFFFFF', padding:'10px 20px', fontSize:11, letterSpacing:'.1em', textTransform:'uppercase', fontFamily:"'Jost',sans-serif", textDecoration:'none', display:'inline-flex', alignItems:'center', gap:6, transition:'opacity .3s' }}
                    onMouseEnter={e=>e.currentTarget.style.opacity='.8'}
                    onMouseLeave={e=>e.currentTarget.style.opacity='1'}
                  >{p.label}</a>
                ))}
              </div>
              <Link to="/about" className="btn-primary" style={{ background:'#1A2744', fontSize:12 }}>
                Discover More
                <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>

            <div ref={setRef('abImg')} data-key="abImg" style={{ ...anim('abImg',.18), position:'relative' }}>
              <div style={{ paddingBottom:'115%', overflow:'hidden', position:'relative' }}>
                <img src={IMGS.about} alt="Sunset Retreat JA property" loading="lazy"
                  style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', objectPosition:'center top' }}/>
                <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top,rgba(26,39,68,.35) 0%,transparent 60%)' }}/>
              </div>
              <div style={{ position:'absolute', bottom:-20, left:-20, background:'#C9933A', padding:'18px 22px', zIndex:2 }}>
                <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:32, color:'#FFFFFF', lineHeight:1, fontWeight:600 }}>5★</div>
                <div style={{ fontSize:10, color:'rgba(255,255,255,.85)', letterSpacing:'.15em', textTransform:'uppercase', marginTop:2 }}>Guest Rating</div>
              </div>
              <div style={{ position:'absolute', top:-20, right:-20, width:130, height:130, overflow:'hidden', border:'4px solid #FAF7F2', zIndex:2 }}>
                <img src={IMGS.aboutAcc} alt="Room" loading="lazy" style={{ width:'100%', height:'100%', objectFit:'cover' }}/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AMENITY CARDS ── */}
      <section className="section-pad" style={{ background:'#FFFFFF' }}>
        <div className="container">
          <div ref={setRef('amen')} data-key="amen" style={{ ...anim('amen'), textAlign:'center', marginBottom:52 }}>
            <p className="section-label">Villa Highlights</p>
            <div className="gold-line"/>
            <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(30px,4vw,48px)', color:'#1A2744', margin:'16px 0' }}>
              Crafted for <em style={{ color:'#C9933A' }}>Pure Indulgence</em>
            </h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))', gap:18 }}>
            {amenityCards.map((a,i) => (
              <div key={a.label} ref={setRef(`ac${i}`)} data-key={`ac${i}`}
                style={{ ...anim(`ac${i}`,i*.1), position:'relative', overflow:'hidden', cursor:'default' }}
                onMouseEnter={e=>e.currentTarget.querySelector('img').style.transform='scale(1.08)'}
                onMouseLeave={e=>e.currentTarget.querySelector('img').style.transform='scale(1)'}
              >
                <div style={{ paddingBottom:'100%', position:'relative', overflow:'hidden' }}>
                  <img src={a.img} alt={a.label} loading="lazy"
                    style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', transition:'transform .6s ease' }}/>
                  <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top,rgba(10,18,35,.85) 0%,rgba(10,18,35,.08) 55%)' }}/>
                  <div style={{ position:'absolute', bottom:0, left:0, right:0, padding:'22px 20px' }}>
                    <div style={{ width:26, height:2, background:'#C9933A', marginBottom:9 }}/>
                    <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:22, color:'#FFFFFF', fontWeight:400 }}>{a.label}</div>
                    <div style={{ fontSize:12, color:'rgba(255,255,255,.6)', marginTop:4 }}>{a.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARALLAX QUOTE ── */}
      <section style={{ position:'relative', height:440, overflow:'hidden' }}>
        <img src={IMGS.sunset} alt="Jamaica sunset" loading="lazy"
          style={{ width:'100%', height:'115%', objectFit:'cover', objectPosition:'center 60%', marginTop:'-7.5%' }}/>
        <div style={{ position:'absolute', inset:0, background:'rgba(10,18,35,.55)' }}/>
        <div className="container" style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', textAlign:'center', zIndex:2 }}>
          <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(26px,5vw,58px)', color:'#FFFFFF', fontWeight:300, lineHeight:1.35, textShadow:'0 2px 20px rgba(0,0,0,.4)' }}>
            "Every moment here becomes<br /><em style={{ color:'#E8B96A' }}>a memory for life"</em>
          </p>
          <div style={{ width:56, height:1, background:'#C9933A', margin:'22px auto' }}/>
          <p style={{ fontSize:12, letterSpacing:'.28em', color:'rgba(255,255,255,.6)', textTransform:'uppercase' }}>119 Riviera Blvd · Ocho Rios · Jamaica</p>
        </div>
      </section>

      {/* ── PACKAGES ── */}
      <section className="section-pad" style={{ background:'#FAF7F2' }}>
        <div className="container">
          <div ref={setRef('pkg')} data-key="pkg" style={{ ...anim('pkg'), textAlign:'center', marginBottom:52 }}>
            <p className="section-label">Stay Packages</p>
            <div className="gold-line"/>
            <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(30px,4vw,48px)', color:'#1A2744', margin:'16px 0' }}>
              Choose Your <em style={{ color:'#C9933A' }}>Perfect Stay</em>
            </h2>
            <p style={{ color:'#777', fontSize:15, maxWidth:500, margin:'0 auto' }}>Every package includes exclusive use of the entire villa — yours and yours alone.</p>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:22 }}>
            {[
              { name:'Weekend Escape',  dur:'2 nights', price:'From $350', badge:null,           dark:false,
                feats:['Private Villa Access','Welcome Drinks','Pool Access','Free WiFi','Airport Transfer'] },
              { name:'Luxury Retreat',  dur:'5 nights', price:'From $780', badge:'Most Popular', dark:true,
                feats:['Private Villa Access','Daily Breakfast','Pool & Beach Access','Sunset Cruise','Personal Concierge','Airport Transfer'] },
              { name:'Honeymoon Bliss', dur:'7 nights', price:'From $1,200',badge:'Special Offer',dark:false,
                feats:['Premium Villa Suite','Romantic Setup','Couples Spa','Private Chef Dinner','Sunset Cruise','All Transfers'] },
            ].map((pkg,i) => (
              <div key={pkg.name} ref={setRef(`pk${i}`)} data-key={`pk${i}`}
                style={{ ...anim(`pk${i}`,i*.13), background:pkg.dark?'#1A2744':'#FFFFFF', border:pkg.dark?'2px solid #C9933A':'1px solid #E0D5C8', padding:'36px 28px', position:'relative', overflow:'hidden', transition:'transform .3s,box-shadow .3s' }}
                onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-6px)'; e.currentTarget.style.boxShadow='0 16px 48px rgba(0,0,0,.12)'; }}
                onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow=''; }}
              >
                {pkg.badge && <div style={{ position:'absolute', top:20, right:-30, background:'#C9933A', color:'#fff', fontSize:9, letterSpacing:'.1em', textTransform:'uppercase', padding:'5px 44px', transform:'rotate(45deg)', transformOrigin:'right center' }}>{pkg.badge}</div>}
                <p style={{ fontSize:10, letterSpacing:'.2em', textTransform:'uppercase', color:'#C9933A', marginBottom:8 }}>{pkg.dur}</p>
                <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:28, color:pkg.dark?'#FFFFFF':'#1A2744', fontWeight:400, marginBottom:6 }}>{pkg.name}</h3>
                <div style={{ fontSize:24, color:'#C9933A', fontFamily:"'Cormorant Garamond',serif", marginBottom:22 }}>{pkg.price}</div>
                <div style={{ borderTop:`1px solid ${pkg.dark?'rgba(255,255,255,.1)':'#E0D5C8'}`, paddingTop:18, marginBottom:24 }}>
                  {pkg.feats.map(f => (
                    <div key={f} style={{ display:'flex', alignItems:'center', gap:10, marginBottom:10 }}>
                      <svg width="12" height="12" fill="none" stroke="#C9933A" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20,6 9,17 4,12"/></svg>
                      <span style={{ fontSize:13, color:pkg.dark?'rgba(255,255,255,.7)':'#555' }}>{f}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact" style={{ display:'block', textAlign:'center', padding:'12px', background:pkg.dark?'#C9933A':'transparent', border:`1px solid #C9933A`, color:pkg.dark?'#FFFFFF':'#C9933A', fontFamily:"'Jost',sans-serif", fontSize:11, letterSpacing:'.12em', textTransform:'uppercase', transition:'all .3s' }}
                  onMouseEnter={e=>{ if(!pkg.dark){e.currentTarget.style.background='#C9933A';e.currentTarget.style.color='#fff';} }}
                  onMouseLeave={e=>{ if(!pkg.dark){e.currentTarget.style.background='transparent';e.currentTarget.style.color='#C9933A';} }}
                >Book This Package</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REAL PROPERTY GALLERY ── */}
      <section className="section-pad" style={{ background:'#1A2744' }}>
        <div className="container">
          <div ref={setRef('gal')} data-key="gal" style={{ ...anim('gal'), textAlign:'center', marginBottom:48 }}>
            <p className="section-label" style={{ color:'#C9933A' }}>Photo Gallery</p>
            <div className="gold-line"/>
            <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(30px,4vw,48px)', color:'#FFFFFF', margin:'16px 0' }}>
              See Your <em>Paradise</em>
            </h2>
            <p style={{ fontSize:14, color:'rgba(255,255,255,.45)', marginTop:8 }}>Real photos of Sunset Retreat JA · Ocho Rios, Jamaica</p>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gridAutoRows:'200px', gap:8 }}>
            {gallery.map((g,i) => (
              <div key={i} ref={setRef(`gi${i}`)} data-key={`gi${i}`}
                style={{ ...anim(`gi${i}`,i*.07), gridColumn:g.wide?'span 2':'span 1', gridRow:g.tall?'span 2':'span 1', overflow:'hidden', position:'relative', cursor:'pointer' }}
                onMouseEnter={e=>{ e.currentTarget.querySelector('img').style.transform='scale(1.08)'; e.currentTarget.querySelector('.cap').style.opacity='1'; }}
                onMouseLeave={e=>{ e.currentTarget.querySelector('img').style.transform='scale(1)'; e.currentTarget.querySelector('.cap').style.opacity='0'; }}
              >
                <img src={g.img} alt={g.cap} loading="lazy" style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'center', transition:'transform .6s ease' }}/>
                <div className="cap" style={{ position:'absolute', inset:0, background:'rgba(10,18,35,.52)', display:'flex', alignItems:'flex-end', padding:16, opacity:0, transition:'opacity .35s' }}>
                  <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:16, color:'#FFFFFF', fontStyle:'italic' }}>{g.cap}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Book on platforms CTA inside gallery section */}
          <div style={{ marginTop:40, display:'flex', justifyContent:'center', gap:16, flexWrap:'wrap' }}>
            <a href="https://www.airbnb.com/rooms/51519181" target="_blank" rel="noreferrer"
              style={{ display:'inline-flex', alignItems:'center', gap:8, background:'#FF5A3B', color:'#FFFFFF', padding:'14px 28px', fontFamily:"'Jost',sans-serif", fontSize:12, letterSpacing:'.12em', textTransform:'uppercase', textDecoration:'none', transition:'opacity .3s' }}
              onMouseEnter={e=>e.currentTarget.style.opacity='.85'}
              onMouseLeave={e=>e.currentTarget.style.opacity='1'}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z"/></svg>
              Book on Airbnb
            </a>
            <a href="https://www.vrbo.com/4984182" target="_blank" rel="noreferrer"
              style={{ display:'inline-flex', alignItems:'center', gap:8, background:'#0073E6', color:'#FFFFFF', padding:'14px 28px', fontFamily:"'Jost',sans-serif", fontSize:12, letterSpacing:'.12em', textTransform:'uppercase', textDecoration:'none', transition:'opacity .3s' }}
              onMouseEnter={e=>e.currentTarget.style.opacity='.85'}
              onMouseLeave={e=>e.currentTarget.style.opacity='1'}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
              Book on VRBO
            </a>
            <a href="https://www.vrbo.com/5128961" target="_blank" rel="noreferrer"
              style={{ display:'inline-flex', alignItems:'center', gap:8, background:'rgba(255,255,255,.08)', border:'1px solid rgba(255,255,255,.2)', color:'#FFFFFF', padding:'14px 28px', fontFamily:"'Jost',sans-serif", fontSize:12, letterSpacing:'.12em', textTransform:'uppercase', textDecoration:'none', transition:'all .3s' }}
              onMouseEnter={e=>{ e.currentTarget.style.background='rgba(255,255,255,.15)'; }}
              onMouseLeave={e=>{ e.currentTarget.style.background='rgba(255,255,255,.08)'; }}
            >VRBO Listing 2</a>
            <a href="https://www.vrbo.com/5128991" target="_blank" rel="noreferrer"
              style={{ display:'inline-flex', alignItems:'center', gap:8, background:'rgba(255,255,255,.08)', border:'1px solid rgba(255,255,255,.2)', color:'#FFFFFF', padding:'14px 28px', fontFamily:"'Jost',sans-serif", fontSize:12, letterSpacing:'.12em', textTransform:'uppercase', textDecoration:'none', transition:'all .3s' }}
              onMouseEnter={e=>{ e.currentTarget.style.background='rgba(255,255,255,.15)'; }}
              onMouseLeave={e=>{ e.currentTarget.style.background='rgba(255,255,255,.08)'; }}
            >VRBO Listing 3</a>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="section-pad" style={{ background:'#FFFFFF' }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:72, alignItems:'center' }}>
            <div ref={setRef('wi')} data-key="wi" style={{ ...anim('wi'), position:'relative' }}>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10 }}>
                <div style={{ paddingBottom:'130%', position:'relative', overflow:'hidden' }}>
                  <img src={IMGS.col1} alt="Property entrance" loading="lazy" style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover' }}/>
                </div>
                <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
                  <div style={{ flex:1, position:'relative', overflow:'hidden' }}>
                    <img src={IMGS.col2} alt="Sitting area" loading="lazy" style={{ width:'100%', height:'100%', objectFit:'cover', position:'absolute', inset:0 }}/>
                  </div>
                  <div style={{ flex:1, position:'relative', overflow:'hidden' }}>
                    <img src={IMGS.col3} alt="Corridor" loading="lazy" style={{ width:'100%', height:'100%', objectFit:'cover', position:'absolute', inset:0 }}/>
                  </div>
                </div>
              </div>
              <div style={{ position:'absolute', bottom:-16, right:-16, background:'#1A2744', padding:'20px 24px', zIndex:2 }}>
                <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:11, color:'#C9933A', letterSpacing:'.15em', textTransform:'uppercase' }}>Est.</div>
                <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:28, color:'#FFFFFF', lineHeight:1 }}>2018</div>
              </div>
            </div>

            <div ref={setRef('wt')} data-key="wt" style={anim('wt',.2)}>
              <p className="section-label">The Experience</p>
              <div className="gold-line left"/>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(32px,4vw,50px)', color:'#1A2744', margin:'18px 0 24px', fontWeight:400 }}>
                Why Guests Choose<br /><em style={{ color:'#C9933A' }}>Sunset Retreat</em>
              </h2>
              {[
                { t:'Authentic Luxury',   d:'Premium furnishings and warm Jamaican hospitality in every corner of the villa.' },
                { t:'Total Privacy',      d:'Fully gated compound — the entire villa is exclusively yours, no sharing.' },
                { t:'Prime Ocho Rios Location', d:'Minutes from Dunn\'s River Falls, Blue Hole, beaches, and top restaurants.' },
                { t:'Warm Hospitality',   d:'Our team is available around the clock to ensure every expectation is exceeded.' },
              ].map(({ t, d }) => (
                <div key={t} style={{ display:'flex', gap:16, marginBottom:22 }}>
                  <div style={{ width:40, height:40, background:'rgba(201,147,58,.1)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                    <svg width="16" height="16" fill="none" stroke="#C9933A" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20,6 9,17 4,12"/></svg>
                  </div>
                  <div>
                    <p style={{ fontWeight:500, color:'#1A2744', fontSize:15, marginBottom:4 }}>{t}</p>
                    <p style={{ fontSize:14, color:'#666', lineHeight:1.75 }}>{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section-pad" style={{ background:'#0E1729', overflow:'hidden', position:'relative' }}>
        <div style={{ position:'absolute', top:-100, right:-100, width:450, height:450, borderRadius:'50%', background:'rgba(201,147,58,.04)', pointerEvents:'none' }}/>
        <div className="container">
          <div ref={setRef('tes')} data-key="tes" style={{ ...anim('tes'), textAlign:'center', marginBottom:52 }}>
            <p className="section-label" style={{ color:'#C9933A' }}>Guest Stories</p>
            <div className="gold-line"/>
            <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(30px,4vw,48px)', color:'#FFFFFF', margin:'16px 0' }}>
              Words from Our <em>Guests</em>
            </h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:20 }}>
            {testimonials.map((t,i) => (
              <div key={t.name} ref={setRef(`te${i}`)} data-key={`te${i}`}
                style={{ ...anim(`te${i}`,i*.14), background:'rgba(255,255,255,.04)', border:'1px solid rgba(201,147,58,.18)', padding:'36px 28px', transition:'border-color .3s' }}
                onMouseEnter={e=>e.currentTarget.style.borderColor='rgba(201,147,58,.5)'}
                onMouseLeave={e=>e.currentTarget.style.borderColor='rgba(201,147,58,.18)'}
              >
                <div style={{ display:'flex', gap:2, marginBottom:18 }}>
                  {Array(5).fill(0).map((_,si)=><svg key={si} width="13" height="13" viewBox="0 0 24 24" fill="#C9933A"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>)}
                </div>
                <svg width="22" height="16" viewBox="0 0 24 18" fill="rgba(201,147,58,.25)" style={{ marginBottom:14 }}>
                  <path d="M0 18V10.8C0 7.6.9 5 2.7 3S7.2 0 10.8 0v2.4C9 2.4 7.6 3 6.6 4.2S5.4 6.8 5.4 8.4H9V18H0zm13.2 0V10.8c0-3.2.9-5.8 2.7-7.8S20.4 0 24 0v2.4c-1.8 0-3.2.6-4.2 1.8s-1.5 2.8-1.5 4.2H22.2V18H13.2z"/>
                </svg>
                <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:18, color:'rgba(255,255,255,.82)', lineHeight:1.78, fontStyle:'italic', marginBottom:24 }}>{t.text}</p>
                <div style={{ borderTop:'1px solid rgba(201,147,58,.18)', paddingTop:16, display:'flex', alignItems:'center', gap:12 }}>
                  <div style={{ width:40, height:40, borderRadius:'50%', background:'rgba(201,147,58,.2)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:12, color:'#C9933A', fontWeight:600 }}>{t.av}</div>
                  <div>
                    <p style={{ fontSize:13, color:'#FFFFFF', fontWeight:500 }}>{t.name}</p>
                    <p style={{ fontSize:11, color:'#C9933A', marginTop:1 }}>{t.origin}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOKING FORM ── */}
      <section className="section-pad" style={{ background:'#1A2744' }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:80, alignItems:'start' }}>
            <div ref={setRef('bk')} data-key="bk" style={anim('bk')}>
              <p className="section-label" style={{ color:'#C9933A' }}>Reservations</p>
              <div className="gold-line left"/>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(30px,4vw,46px)', color:'#FFFFFF', margin:'18px 0 18px', fontWeight:400 }}>
                Begin Your<br /><em style={{ color:'#E8B96A' }}>Journey</em>
              </h2>
              <p style={{ color:'rgba(255,255,255,.5)', fontSize:15, lineHeight:1.85, marginBottom:36 }}>
                Fill out the form and we will get back to you within 24 hours. You can also book directly on Airbnb or VRBO.
              </p>
              <div style={{ display:'flex', flexDirection:'column', gap:18 }}>
                {[{n:'phone',l:'Call / WhatsApp',v:'+1 876 268 9319',h:'tel:+18762689319'},{n:'mail',l:'Email',v:'sunsetretreatja@gmail.com',h:'mailto:sunsetretreatja@gmail.com'},{n:'map',l:'Address',v:'119 Riviera Blvd, Ocho Rios, Jamaica',h:null}].map(({ n,l,v,h }) => (
                  <div key={l} style={{ display:'flex', alignItems:'center', gap:14 }}>
                    <div style={{ width:44,height:44,border:'1px solid rgba(201,147,58,.3)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0 }}>
                      <CIcon name={n}/>
                    </div>
                    <div>
                      <p style={{ fontSize:9,letterSpacing:'.2em',textTransform:'uppercase',color:'#C9933A',marginBottom:3 }}>{l}</p>
                      {h ? <a href={h} style={{ fontSize:14,color:'rgba(255,255,255,.7)',transition:'color .3s' }} onMouseEnter={e=>e.target.style.color='#C9933A'} onMouseLeave={e=>e.target.style.color='rgba(255,255,255,.7)'}>{v}</a>
                         : <p style={{ fontSize:14,color:'rgba(255,255,255,.7)' }}>{v}</p>}
                    </div>
                  </div>
                ))}
              </div>
              {/* Platform links in form section */}
              <div style={{ marginTop:28, padding:'18px 20px', background:'rgba(255,255,255,.05)', border:'1px solid rgba(201,147,58,.2)' }}>
                <p style={{ fontSize:10, letterSpacing:'.15em', color:'#C9933A', textTransform:'uppercase', marginBottom:12 }}>Book Directly Online</p>
                <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
                  <a href="https://www.airbnb.com/rooms/51519181" target="_blank" rel="noreferrer"
                    style={{ flex:1, minWidth:100, textAlign:'center', background:'#FF5A3B', color:'#FFFFFF', padding:'10px 12px', fontSize:11, textDecoration:'none', fontFamily:"'Jost',sans-serif", letterSpacing:'.08em', textTransform:'uppercase' }}>
                    Airbnb
                  </a>
                  <a href="https://www.vrbo.com/4984182" target="_blank" rel="noreferrer"
                    style={{ flex:1, minWidth:100, textAlign:'center', background:'#0073E6', color:'#FFFFFF', padding:'10px 12px', fontSize:11, textDecoration:'none', fontFamily:"'Jost',sans-serif", letterSpacing:'.08em', textTransform:'uppercase' }}>
                    VRBO
                  </a>
                </div>
              </div>
            </div>
            <div ref={setRef('bkf')} data-key="bkf" style={anim('bkf',.2)}>
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── MAP ── */}
      <section style={{ height:420, position:'relative' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3788.5!2d-77.1051!3d18.4041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8edafdf5c8f6b4e7%3A0x1!2s119+Riviera+Blvd%2C+Ocho+Rios%2C+Jamaica!5e0!3m2!1sen!2s!4v1716000000000"
          style={{ width:'100%', height:'100%', border:0, filter:'grayscale(20%) contrast(1.05)' }}
          allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Sunset Retreat JA Location"
        />
        <div style={{ position:'absolute', top:28, left:28, background:'#1A2744', padding:'16px 20px', borderLeft:'3px solid #C9933A', zIndex:2 }}>
          <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:18, color:'#FFFFFF' }}>Sunset Retreat JA</p>
          <p style={{ fontSize:12, color:'rgba(255,255,255,.55)', marginTop:4 }}>119 Riviera Blvd, Ocho Rios, Jamaica</p>
        </div>
      </section>

      <Footer />
      <style>{`
        @keyframes fadeUp{from{opacity:0;transform:translateY(40px)}to{opacity:1;transform:translateY(0)}}
        @media(max-width:600px){
          div[style*="repeat(4,1fr)"]{grid-template-columns:1fr 1fr!important}
        }
      `}</style>
    </>
  );
}
