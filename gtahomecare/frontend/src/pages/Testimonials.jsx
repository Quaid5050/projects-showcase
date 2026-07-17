import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import api from '../utils/api';

const testimonials=[
  {name:'Margaret T.',loc:'North York',service:'Home Care',text:'The team at GTA Homecare has been an absolute blessing. My mother receives exceptional care every single day. Their professionalism and compassion are unmatched.'},
  {name:'James R.',loc:'Etobicoke',service:'Companion Care',text:'We tried several agencies before finding GTA Homecare. The difference is night and day. Reliable, caring, and they truly treat family members as their own.'},
  {name:'Priya S.',loc:'Scarborough',service:'24-Hour Care',text:'The 24-hour care for my father gave our entire family peace of mind. The caregiver is patient, skilled, and genuinely cares about his wellbeing.'},
  {name:'Linda M.',loc:'Mississauga',service:'Respite Care',text:'As a full-time caregiver for my husband, I was burning out. GTA Homecare stepped in with professional respite support that gave me real rest.'},
  {name:'David C.',loc:'Toronto',service:'Personal Care',text:'The personal care team handled everything with incredible sensitivity and professionalism. My mother has dignity and independence restored to her routine.'},
  {name:'Sarah K.',loc:'North York',service:'Senior Care',text:'From the first call to the daily care — every interaction has been professional, warm, and thorough. Five stars without hesitation.'},
];

export default function Testimonials() {
  const [approved, setApproved] = useState([]);
  const [form, setForm] = useState({ name: '', location: '', rating: 5, text: '' });
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    api.get('/testimonials').then(res => setApproved(res.data)).catch(() => {});
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true); setMessage(null);
    try {
      const res = await api.post('/testimonials', form);
      setMessage({ type: 'success', text: res.data.message });
      setForm({ name: '', location: '', rating: 5, text: '' });
    } catch (err) {
      setMessage({ type: 'error', text: err.response?.data?.message || 'Something went wrong' });
    } finally {
      setSubmitting(false);
    }
  };

  const allTestimonials = [
    ...approved.map(t => ({ name: t.name, loc: t.location, service: 'Client Review', text: t.text, rating: t.rating })),
    ...testimonials,
  ];

  return (
    <>
      <div className="page-hero">
        <img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1400&q=80" alt="Testimonials"/>
        <div className="page-hero-overlay"/>
        <div className="page-hero-content">
          <span className="section-tag" style={{color:'var(--gold-light)'}}>What Families Say</span>
          <h1 style={{fontFamily:'Baloo 2,sans-serif',fontSize:'clamp(2rem,4vw,3rem)',color:'white'}}>Testimonials</h1>
        </div>
      </div>
      <section style={{background:'var(--red-dark)',padding:'3rem 0'}}>
        <div className="container">
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(150px,1fr))',gap:'2rem',textAlign:'center',color:'white'}}>
            {[['500+','Families Served'],['10+','Years Experience'],['24/7','Available'],['100%','Satisfaction Goal']].map(([n,l])=>(
              <div key={l}>
                <div style={{fontFamily:'Baloo 2,sans-serif',fontSize:'2.5rem',fontWeight:700}}>{n}</div>
                <div style={{fontFamily:'Poppins,sans-serif',fontSize:'0.75rem',opacity:0.8,textTransform:'uppercase',letterSpacing:'0.1em',marginTop:4}}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{padding:'5rem 0',background:'var(--cream)'}}>
        <div className="container">
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:'1.5rem'}}>
            {allTestimonials.map((t,i)=>(
              <div key={i} style={{background:'white',borderRadius:12,padding:'2rem',boxShadow:'0 2px 15px rgba(0,0,0,0.07)',display:'flex',flexDirection:'column'}}>
                <div style={{display:'flex',gap:3,marginBottom:'1rem'}}>{[...Array(t.rating||5)].map((_,i)=><Star key={i} size={15} fill="var(--gold)" color="var(--gold)"/>)}</div>
                <p style={{fontFamily:'Poppins,sans-serif',fontSize:'0.9rem',color:'var(--text-mid)',lineHeight:1.8,fontStyle:'italic',flex:1,marginBottom:'1.5rem'}}>"{t.text}"</p>
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',paddingTop:'1rem',borderTop:'1px solid var(--border)'}}>
                  <div style={{display:'flex',alignItems:'center',gap:10}}>
                    <div style={{width:38,height:38,borderRadius:'50%',background:'var(--red)',color:'white',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'Poppins,sans-serif',fontWeight:700}}>{t.name[0]}</div>
                    <div>
                      <div style={{fontFamily:'Poppins,sans-serif',fontWeight:700,fontSize:'0.875rem',color:'var(--text-dark)'}}>{t.name}</div>
                      <div style={{fontFamily:'Poppins,sans-serif',fontSize:'0.75rem',color:'var(--text-light)'}}>{t.loc}</div>
                    </div>
                  </div>
                  <span style={{fontSize:'0.7rem',background:'#FEF0F0',color:'var(--red)',padding:'3px 10px',borderRadius:20,fontFamily:'Poppins,sans-serif',fontWeight:700,textTransform:'uppercase',letterSpacing:'0.05em'}}>{t.service}</span>
                </div>
              </div>
            ))}
          </div>
          <div style={{textAlign:'center',marginTop:'3rem'}}>
            <Link to="/booking" className="btn-primary">Book Your Free Assessment</Link>
          </div>
        </div>
      </section>

      {/* LEAVE A REVIEW */}
      <section style={{padding:'5rem 0',background:'white'}}>
        <div className="container" style={{maxWidth:600}}>
          <div style={{textAlign:'center',marginBottom:'2.5rem'}}>
            <span className="section-tag">Share Your Experience</span>
            <h2 style={{fontFamily:'Baloo 2,sans-serif',fontSize:'clamp(1.8rem,3vw,2.5rem)',color:'var(--text-dark)',marginBottom:'1rem'}}>Leave a Review</h2>
            <div className="divider-gold center"/>
            <p style={{fontFamily:'Poppins,sans-serif',color:'var(--text-mid)',fontSize:'0.9rem',marginTop:'1rem'}}>Your review will appear here once approved by our team.</p>
          </div>
          <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',gap:'1.25rem'}}>
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:'1.25rem'}}>
              <div>
                <label>Your Name</label>
                <input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Jane Doe" />
              </div>
              <div>
                <label>Location</label>
                <input required value={form.location} onChange={e=>setForm({...form,location:e.target.value})} placeholder="North York" />
              </div>
            </div>
            <div>
              <label>Rating</label>
              <div style={{display:'flex',gap:6}}>
                {[1,2,3,4,5].map(n=>(
                  <button key={n} type="button" onClick={()=>setForm({...form,rating:n})} style={{background:'none',border:'none',cursor:'pointer',padding:2}}>
                    <Star size={26} fill={n<=form.rating?'var(--gold)':'none'} color="var(--gold)" />
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label>Your Review</label>
              <textarea required value={form.text} onChange={e=>setForm({...form,text:e.target.value})} placeholder="Tell us about your experience with GTA Homecare Services..." />
            </div>
            {message && (
              <div style={{background:message.type==='success'?'#D1FAE5':'#FEE2E2',color:message.type==='success'?'#065F46':'#991B1B',padding:'0.75rem 1rem',borderRadius:6,fontSize:'0.875rem',fontFamily:'Poppins,sans-serif'}}>{message.text}</div>
            )}
            <button type="submit" disabled={submitting} className="btn-primary" style={{justifyContent:'center'}}>
              {submitting?'Submitting...':'Submit Review'}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
