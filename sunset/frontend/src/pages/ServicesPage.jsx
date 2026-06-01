import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import api from '../api';

const IMGS = {
  hero:     '/images/property-gate.jpg',
  villa:    '/images/property-exterior-day.jpg',
  pool:     'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=700&q=80',
  ocean:    'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=700&q=80',
  transfer: '/images/property-building.jpg',
  chef:     'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=80',
  cruise:   'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=700&q=80',
};

const services = [
  { img: IMGS.villa,    title:'Luxury Villa Rental',   desc:'Fully furnished private villa with premium amenities, modern kitchen, spacious bedrooms, and stunning outdoor spaces.',    feats:['3+ Bedrooms','Full Kitchen','Living & Dining','Private Garden'] },
  { img: IMGS.pool,     title:'Private Pool',           desc:'Dive into your own private pool surrounded by tropical landscaping, perfect for sunrise laps or sunset lounging.',        feats:['Temperature Controlled','Sun Loungers','Pool Bar Area','Evening Lighting'] },
  { img: IMGS.ocean,    title:'Ocean View Experience',  desc:'Wake up to panoramic views of the Caribbean Sea from your bedroom, living room, and private terrace.',                   feats:['Panoramic Views','Private Terrace','Sunset Watching','Binoculars Provided'] },
  { img: IMGS.transfer, title:'Airport Transfers',      desc:'Seamless arrival and departure transfers in comfortable, air-conditioned vehicles with professional drivers.',           feats:['Airport Pickup','Door to Door','AC Vehicle','Professional Driver'] },
  { img: IMGS.chef,     title:'Personal Chef (Optional)',desc:'Indulge in authentic Jamaican cuisine prepared by a private chef using fresh local ingredients and traditional recipes.',feats:['Local Cuisine','Fresh Ingredients','Customisable Menu','Special Diets Catered'] },
  { img: IMGS.cruise,   title:'Sunset Cruise',          desc:'Glide across the Caribbean Sea on a private sunset cruise — the perfect romantic or group adventure.',                   feats:['2-Hour Cruise','Drinks Included','Snorkelling Stop','Sunset Views'] },
];

export default function ServicesPage() {
  const [packages, setPackages] = useState([]);
  useEffect(() => { api.get('/api/packages').then(r => setPackages(r.data)).catch(() => {}); }, []);

  return (
    <>
      <Navbar />
      <ScrollToTop />

      {/* Hero */}
      <section style={{ position:'relative', height:520, overflow:'hidden' }}>
        <img src={IMGS.hero} alt="Luxury villa" style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'center 60%' }}/>
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom,rgba(10,18,35,.6) 0%,rgba(10,18,35,.4) 55%,rgba(10,18,35,.72) 100%)' }}/>
        <div className="container" style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', zIndex:2 }}>
          <div style={{ animation:'fadeUp .9s ease .2s both' }}>
            <p className="section-label" style={{ color:'#C9933A' }}>What We Offer</p>
            <h1 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(44px,6vw,80px)', color:'#FFFFFF', fontWeight:300, margin:'14px 0 16px' }}>Our Services</h1>
            <p style={{ fontSize:16, color:'rgba(255,255,255,.65)', maxWidth:500 }}>Everything you need for the perfect Jamaican escape — curated, premium, and personalised.</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-pad" style={{ background:'#FAF7F2' }}>
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:56 }}>
            <p className="section-label">Villa Services</p>
            <div className="gold-line"/>
            <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(30px,4vw,46px)', color:'#1A2744', margin:'16px 0' }}>
              Every Detail <em style={{ color:'#C9933A' }}>Taken Care Of</em>
            </h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:24 }}>
            {services.map(s => (
              <div key={s.title} style={{ background:'#FFFFFF', border:'1px solid #E8DDD0', overflow:'hidden', transition:'all .3s' }}
                onMouseEnter={e=>{ e.currentTarget.style.borderColor='#C9933A'; e.currentTarget.style.transform='translateY(-4px)'; e.currentTarget.style.boxShadow='0 12px 40px rgba(0,0,0,.1)'; }}
                onMouseLeave={e=>{ e.currentTarget.style.borderColor='#E8DDD0'; e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow=''; }}
              >
                <div style={{ height:210, overflow:'hidden', position:'relative' }}>
                  <img src={s.img} alt={s.title} loading="lazy" style={{ width:'100%', height:'100%', objectFit:'cover', transition:'transform .6s ease' }}
                    onMouseEnter={e=>e.style.transform='scale(1.06)'}
                    onMouseLeave={e=>e.style.transform='scale(1)'}
                  />
                  <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top,rgba(10,18,35,.4) 0%,transparent 50%)' }}/>
                </div>
                <div style={{ padding:'28px 28px 32px' }}>
                  <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:26, color:'#1A2744', marginBottom:10, fontWeight:400 }}>{s.title}</h3>
                  <p style={{ fontSize:14, color:'#666', lineHeight:1.85, marginBottom:18 }}>{s.desc}</p>
                  <div style={{ borderTop:'1px solid #F0EBE0', paddingTop:16 }}>
                    {s.feats.map(f => (
                      <div key={f} style={{ display:'flex', alignItems:'center', gap:8, marginBottom:8 }}>
                        <svg width="11" height="11" fill="none" stroke="#C9933A" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20,6 9,17 4,12"/></svg>
                        <span style={{ fontSize:13, color:'#555' }}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic packages */}
      {packages.length > 0 && (
        <section className="section-pad" style={{ background:'#1A2744' }}>
          <div className="container">
            <div style={{ textAlign:'center', marginBottom:52 }}>
              <p className="section-label" style={{ color:'#C9933A' }}>Special Packages</p>
              <div className="gold-line"/>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(30px,4vw,46px)', color:'#FFFFFF', margin:'16px 0' }}>Current Offers</h2>
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:22 }}>
              {packages.map(p => (
                <div key={p._id} style={{ background:'rgba(255,255,255,.05)', border:'1px solid rgba(201,147,58,.3)', padding:'32px 24px', transition:'border-color .3s' }}
                  onMouseEnter={e=>e.currentTarget.style.borderColor='rgba(201,147,58,.7)'}
                  onMouseLeave={e=>e.currentTarget.style.borderColor='rgba(201,147,58,.3)'}
                >
                  {p.offerBadge && <span style={{ background:'#C9933A', color:'#FFFFFF', fontSize:9, padding:'3px 10px', letterSpacing:'.1em', textTransform:'uppercase', display:'inline-block', marginBottom:12 }}>{p.offerBadge}</span>}
                  <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:26, color:'#FFFFFF', marginBottom:6, fontWeight:400 }}>{p.name}</h3>
                  <div style={{ fontSize:22, color:'#C9933A', fontFamily:"'Cormorant Garamond',serif", marginBottom:14 }}>From ${p.price}</div>
                  <p style={{ fontSize:14, color:'rgba(255,255,255,.55)', lineHeight:1.8, marginBottom:22 }}>{p.description}</p>
                  <Link to="/contact" className="btn-primary" style={{ fontSize:11, display:'block', textAlign:'center' }}>Enquire Now</Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section style={{ background:'linear-gradient(135deg,#C9933A,#E8B96A)', padding:'88px 0', textAlign:'center' }}>
        <div className="container">
          <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(32px,5vw,54px)', color:'#FFFFFF', fontWeight:300, marginBottom:14 }}>Ready to Book?</h2>
          <p style={{ fontSize:16, color:'rgba(255,255,255,.85)', marginBottom:36 }}>Contact us today and let us tailor the perfect Jamaican experience for you.</p>
          <Link to="/contact" style={{ display:'inline-block', background:'#1A2744', color:'#FFFFFF', padding:'15px 40px', fontFamily:"'Jost',sans-serif", fontSize:12, letterSpacing:'.15em', textTransform:'uppercase' }}>Get In Touch</Link>
        </div>
      </section>

      <Footer />
      <style>{`@keyframes fadeUp{from{opacity:0;transform:translateY(35px)}to{opacity:1;transform:translateY(0)}}`}</style>
    </>
  );
}