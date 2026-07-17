import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../utils/api';

export default function Gallery() {
  const [imgs, setImgs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/gallery')
      .then(res => setImgs(res.data.map((img, i) => ({ src: img.url, alt: img.alt, span: i % 5 === 0 ? '2' : undefined }))))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <div className="page-hero">
        <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1400&q=80" alt="Gallery" />
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <span className="section-tag" style={{color:'var(--gold-light)'}}>Our Work</span>
          <h1 style={{fontFamily:'Baloo 2,sans-serif',fontSize:'clamp(2rem,4vw,3rem)',color:'white'}}>Gallery</h1>
        </div>
      </div>
      <section style={{padding:'5rem 0',background:'var(--cream)'}}>
        <div className="container">
          <div style={{textAlign:'center',marginBottom:'3.5rem'}}>
            <span className="section-tag">Moments of Care</span>
            <h2 style={{fontFamily:'Baloo 2,sans-serif',fontSize:'2.5rem',color:'var(--text-dark)',marginBottom:'1rem'}}>Care & Compassion in Action</h2>
            <div className="divider-gold center"/>
          </div>
          {loading ? (
            <p style={{textAlign:'center',fontFamily:'Poppins,sans-serif',color:'var(--text-mid)'}}>Loading...</p>
          ) : imgs.length === 0 ? (
            <p style={{textAlign:'center',fontFamily:'Poppins,sans-serif',color:'var(--text-mid)'}}>No images yet. Check back soon.</p>
          ) : (
            <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'1rem'}}>
              {imgs.map((img,i)=>(
                <div key={i} style={{gridColumn:img.span?`span ${img.span}`:'span 1',borderRadius:10,overflow:'hidden',aspectRatio:img.span?'16/7':'4/3'}}>
                  <img src={img.src} alt={img.alt} style={{width:'100%',height:'100%',objectFit:'cover',transition:'transform 0.4s'}}
                    onMouseEnter={e=>e.target.style.transform='scale(1.05)'}
                    onMouseLeave={e=>e.target.style.transform='scale(1)'}/>
                </div>
              ))}
            </div>
          )}
          <div style={{textAlign:'center',marginTop:'3rem'}}>
            <Link to="/booking" className="btn-primary">Book Your Free Assessment</Link>
          </div>
        </div>
      </section>
      <style>{`@media(max-width:640px){section div[style*="grid-template-columns: repeat(3"]{grid-template-columns:1fr!important;} div[style*="gridColumn"]{grid-column:span 1!important;}}`}</style>
    </>
  );
}
