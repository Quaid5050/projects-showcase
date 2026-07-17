import { Link } from 'react-router-dom';
import { CheckCircle, Heart, Shield, Users, Phone } from 'lucide-react';

export default function About() {
  return (
    <>
      <div className="page-hero">
        <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1400&q=80" alt="About" />
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <span className="section-tag" style={{color:'var(--gold-light)'}}>Who We Are</span>
          <h1 style={{fontFamily:'Baloo 2,sans-serif',fontSize:'clamp(2rem,4vw,3rem)',color:'white'}}>About Us</h1>
        </div>
      </div>
      <section style={{padding:'5rem 0',background:'white'}}>
        <div className="container">
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(320px,1fr))',gap:'4rem',alignItems:'center'}}>
            <div>
              <span className="section-tag">Our Mission</span>
              <h2 style={{fontFamily:'Baloo 2,sans-serif',fontSize:'clamp(1.8rem,3vw,2.5rem)',color:'var(--text-dark)',lineHeight:1.3,marginBottom:'1rem'}}>Dedicated to Exceptional Home Health Services</h2>
              <div className="divider-gold" />
              <p style={{fontFamily:'Poppins,sans-serif',color:'var(--text-mid)',lineHeight:1.85,marginTop:'1.25rem',marginBottom:'1rem',fontSize:'0.95rem'}}>At GTA Homecare Services, we are dedicated to providing exceptional home health services, including healthcare, personal support work, nanny services, and more. Our goal is to ensure the well-being and comfort of our clients through personalized care plans and compassionate support.</p>
              <p style={{fontFamily:'Poppins,sans-serif',color:'var(--text-mid)',lineHeight:1.85,marginBottom:'2rem',fontSize:'0.95rem'}}>We are committed to delivering reliable support through trained Filipino caregivers, personal support workers, and nursing professionals who understand that care is built on consistency and trust.</p>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'0.75rem'}}>
                {['Licensed & Insured','Trained Caregivers','Personalized Plans','24/7 Availability','Free Assessment','GTA Wide Coverage'].map(i=>(
                  <div key={i} style={{display:'flex',alignItems:'center',gap:8}}>
                    <CheckCircle size={15} color="var(--red)" />
                    <span style={{fontFamily:'Poppins,sans-serif',fontSize:'0.875rem',color:'var(--text-mid)'}}>{i}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{position:'relative'}}>
              <img src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=700&q=80" alt="team" style={{width:'100%',aspectRatio:'4/3',objectFit:'cover',borderRadius:12}} />
              <div style={{position:'absolute',bottom:-20,left:-20,background:'var(--gold)',color:'white',borderRadius:10,padding:'1.25rem 1.5rem',boxShadow:'0 8px 24px rgba(201,146,42,0.3)'}}>
                <div style={{fontFamily:'Baloo 2,sans-serif',fontSize:'2rem',fontWeight:700}}>500+</div>
                <div style={{fontFamily:'Poppins,sans-serif',fontSize:'0.75rem',opacity:0.9,marginTop:2}}>Families Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{padding:'5rem 0',background:'var(--cream)'}}>
        <div className="container">
          <div style={{textAlign:'center',marginBottom:'3.5rem'}}>
            <span className="section-tag">Our Values</span>
            <h2 style={{fontFamily:'Baloo 2,sans-serif',fontSize:'clamp(1.8rem,3vw,2.5rem)',color:'var(--text-dark)',marginBottom:'1rem'}}>What Drives Everything We Do</h2>
            <div className="divider-gold center" />
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))',gap:'1.5rem'}}>
            {[{icon:<Heart size={28} color="var(--red)"/>,t:'Compassion',d:'We treat every client as family. Empathy is not a policy — it is who we are.'},{icon:<Shield size={28} color="var(--red)"/>,t:'Integrity',d:'We are transparent with families, consistent in our care, and honest in every interaction.'},{icon:<Users size={28} color="var(--red)"/>,t:'Excellence',d:'We hold our caregivers and ourselves to the highest professional and ethical standards.'}].map(v=>(
              <div key={v.t} style={{textAlign:'center',padding:'2rem',background:'white',borderRadius:12,boxShadow:'0 2px 15px rgba(0,0,0,0.06)'}}>
                <div className="icon-wrap" style={{margin:'0 auto 1.25rem',background:'#FEF0F0'}}>{v.icon}</div>
                <h3 style={{fontFamily:'Baloo 2,sans-serif',fontSize:'1.2rem',color:'var(--text-dark)',marginBottom:'0.75rem'}}>{v.t}</h3>
                <p style={{fontFamily:'Poppins,sans-serif',fontSize:'0.875rem',color:'var(--text-mid)',lineHeight:1.75}}>{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{background:'var(--red-dark)',padding:'3.5rem 0'}}>
        <div className="container" style={{textAlign:'center'}}>
          <h3 style={{fontFamily:'Baloo 2,sans-serif',fontSize:'2rem',color:'white',marginBottom:'1rem'}}>Ready to Learn More?</h3>
          <p style={{fontFamily:'Poppins,sans-serif',color:'rgba(255,255,255,0.75)',marginBottom:'2rem'}}>Contact us for a free, no-obligation assessment.</p>
          <div style={{display:'flex',justifyContent:'center',gap:12,flexWrap:'wrap'}}>
            <Link to="/booking" className="btn-gold">Book Free Assessment</Link>
            <a href="tel:+14169100223" className="btn-outline-white" style={{display:'inline-flex',alignItems:'center',gap:6}}><Phone size={15}/> Call Us Now</a>
          </div>
        </div>
      </section>
    </>
  );
}
