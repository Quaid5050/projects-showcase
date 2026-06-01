import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BookingForm from '../components/BookingForm';
import ScrollToTop from '../components/ScrollToTop';

const HeroImg = '/images/property-night.jpg';

function CIcon({ name }) {
  const p = { width:20, height:20, fill:'none', stroke:'#C9933A', strokeWidth:'1.8', viewBox:'0 0 24 24' };
  if (name==='phone') return <svg {...p}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
  if (name==='mail')  return <svg {...p}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>;
  return <svg {...p}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>;
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <ScrollToTop />

      {/* Hero */}
      <section style={{ position:'relative', height:520, overflow:'hidden' }}>
        <img src={HeroImg} alt="Ocean terrace" style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'center 40%' }}/>
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom,rgba(10,18,35,.6) 0%,rgba(10,18,35,.4) 55%,rgba(10,18,35,.72) 100%)' }}/>
        <div className="container" style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', zIndex:2 }}>
          <div style={{ animation:'fadeUp .9s ease .2s both' }}>
            <p className="section-label" style={{ color:'#C9933A' }}>Get In Touch</p>
            <h1 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(44px,6vw,80px)', color:'#FFFFFF', fontWeight:300, margin:'14px 0 16px' }}>Book Your Stay</h1>
            <p style={{ fontSize:16, color:'rgba(255,255,255,.65)', maxWidth:500 }}>We typically respond within 24 hours with availability and personalised details.</p>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="section-pad" style={{ background:'#1A2744' }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:80 }}>
            {/* Info */}
            <div>
              <p className="section-label" style={{ color:'#C9933A' }}>Contact Details</p>
              <div className="gold-line left"/>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(28px,4vw,42px)', color:'#FFFFFF', margin:'16px 0 30px', fontWeight:400 }}>
                We'd Love to<br /><em>Hear From You</em>
              </h2>
              {[
                { n:'phone', l:'Phone / WhatsApp', v:'+1 876 268 9319',          h:'tel:+18762689319' },
                { n:'mail',  l:'Email',             v:'sunsetretreatja@gmail.com',h:'mailto:sunsetretreatja@gmail.com' },
                { n:'map',   l:'Location',           v:'119 Riviera Blvd, Ocho Rios, Jamaica',       h:null },
              ].map(item => (
                <div key={item.l} style={{ display:'flex', gap:16, marginBottom:26 }}>
                  <div style={{ width:48,height:48,border:'1px solid rgba(201,147,58,.4)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0 }}>
                    <CIcon name={item.n}/>
                  </div>
                  <div>
                    <p style={{ fontSize:10,letterSpacing:'.2em',textTransform:'uppercase',color:'#C9933A',marginBottom:5 }}>{item.l}</p>
                    {item.h ? <a href={item.h} style={{ fontSize:15,color:'rgba(255,255,255,.78)',transition:'color .3s' }} onMouseEnter={e=>e.target.style.color='#C9933A'} onMouseLeave={e=>e.target.style.color='rgba(255,255,255,.78)'}>{item.v}</a>
                            : <p style={{ fontSize:15,color:'rgba(255,255,255,.78)' }}>{item.v}</p>}
                  </div>
                </div>
              ))}

              <div style={{ marginTop:40, padding:'26px 22px', background:'rgba(201,147,58,.08)', border:'1px solid rgba(201,147,58,.22)' }}>
                <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:20, color:'#FFFFFF', marginBottom:8 }}>Available Hours</p>
                <p style={{ fontSize:13, color:'rgba(255,255,255,.5)', lineHeight:1.9 }}>Monday – Sunday<br />8:00 AM – 9:00 PM (Jamaica Time)<br /><span style={{ color:'#C9933A' }}>WhatsApp messages replied 24/7</span></p>
              </div>

              {/* Mini gallery */}
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:6, marginTop:32 }}>
                {[
                  'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&q=70',
                  'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&q=70',
                  'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=400&q=70',
                  'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=400&q=70',
                ].map((src,i) => (
                  <div key={i} style={{ height:110, overflow:'hidden' }}>
                    <img src={src} alt="villa" loading="lazy" style={{ width:'100%',height:'100%',objectFit:'cover',transition:'transform .5s' }}
                      onMouseEnter={e=>e.style.transform='scale(1.06)'}
                      onMouseLeave={e=>e.style.transform='scale(1)'}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div>
              <p className="section-label" style={{ color:'#C9933A' }}>Make a Reservation</p>
              <div className="gold-line left"/>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(28px,4vw,42px)', color:'#FFFFFF', margin:'16px 0 30px', fontWeight:400 }}>Send an Inquiry</h2>
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section style={{ height:460, position:'relative' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d484772.35944!2d-77.5!3d18.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ed9612ecf2a7a01%3A0xd44ac90be5a9b5d3!2sJamaica!5e0!3m2!1sen!2s!4v1716000000000"
          style={{ width:'100%',height:'100%',border:0,filter:'sepia(15%) contrast(1.08)' }}
          allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Location"
        />
        <div style={{ position:'absolute', top:28, left:28, background:'#1A2744', padding:'16px 20px', borderLeft:'3px solid #C9933A', zIndex:2 }}>
          <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:18, color:'#FFFFFF' }}>Sunset Retreat JA</p>
          <p style={{ fontSize:12, color:'rgba(255,255,255,.55)', marginTop:4 }}>119 Riviera Blvd, Ocho Rios, Jamaica</p>
        </div>
      </section>

      <Footer />
      <style>{`@keyframes fadeUp{from{opacity:0;transform:translateY(35px)}to{opacity:1;transform:translateY(0)}}`}</style>
    </>
  );
}