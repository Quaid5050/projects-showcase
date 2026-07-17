"use client";
import { useState } from "react";
export default function ContactPage() {
  const [form, setForm] = useState({name:"",email:"",phone:"",message:""});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e:React.FormEvent) => {
    e.preventDefault(); setLoading(true);
    try { await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(form)}); } catch {}
    setSent(true); setLoading(false);
  };

  return (
    <div className="container" style={{paddingTop:"4.5rem",paddingBottom:"5rem"}}>
      <div style={{maxWidth:"34rem",marginBottom:"3.5rem"}}>
        <span className="sec-label">Get in Touch</span>
        <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(2rem,4vw,3rem)",color:"#2C1810",margin:"0.5rem 0 0.75rem"}}>Contact Us</h1>
        <p style={{color:"rgba(44,24,16,0.52)",fontSize:"0.9rem",lineHeight:1.75}}>Questions about an order, wholesale inquiries, or just want to talk spices? We would love to hear from you.</p>
      </div>

      <div className="two-col">
        <div style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
          {[
            {t:"Phone",v:"+1 437 243 7862",s:"Mon–Sat, 9am–7pm EST",h:"tel:+14372437862",
              ic:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E8A020" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.0 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>},
            {t:"Email",v:"akshayprashar6@gmail.com",s:"We reply within 24 hours",h:"mailto:akshayprashar6@gmail.com",
              ic:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E8A020" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>},
          ].map(c=>(
            <a key={c.t} href={c.h} className="contact-card" style={{textDecoration:"none"}}>
              <div className="contact-icon-wrap">{c.ic}</div>
              <div><div className="contact-card-label">{c.t}</div><div className="contact-card-val">{c.v}</div><div className="contact-card-sub">{c.s}</div></div>
            </a>
          ))}

          {/* Decorative illustration */}
          <div style={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"1.5rem"}}>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
              <circle cx="100" cy="100" r="88" fill="#FFF8E8" stroke="#E8A020" strokeWidth="1.5" strokeDasharray="8 4"/>
              <circle cx="100" cy="100" r="60" fill="#E8A020" opacity=".1"/>
              <circle cx="100" cy="100" r="40" fill="#E8A020" opacity=".18"/>
              <circle cx="100" cy="100" r="24" fill="#E8A020" opacity=".35"/>
              <circle cx="100" cy="100" r="12" fill="#C4622D"/>
              <circle cx="100" cy="100" r="5" fill="#FDF6EC"/>
              {[0,72,144,216,288].map((a,i)=>(
                <g key={i}>
                  <circle cx={100+60*Math.cos(a*Math.PI/180)} cy={100+60*Math.sin(a*Math.PI/180)} r="9" fill="#E8A020" opacity=".55"/>
                  <circle cx={100+60*Math.cos(a*Math.PI/180)} cy={100+60*Math.sin(a*Math.PI/180)} r="3.5" fill="#FDF6EC" opacity=".6"/>
                </g>
              ))}
              {/* Phone symbol */}
              <path d="M88 82 Q88 78 92 78 L95 78 Q97 78 97 80 L97 86 Q97 88 95 88 Q92 90 88 94 Q84 98 82 101 Q80 103 82 105 L86 109 Q88 111 90 109 Q94 107 96 104 Q98 103 100 103 L106 103 Q108 103 108 105 L108 108 Q108 112 104 112 Q94 112 86 104 Q78 96 78 86 Q78 82 82 82 Z" fill="#E8A020" opacity=".45"/>
            </svg>
          </div>
        </div>

        <div>
          {sent ? (
            <div className="contact-form-wrap" style={{alignItems:"center",justifyContent:"center",minHeight:"300px",textAlign:"center"}}>
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" style={{margin:"0 auto",display:"block"}}>
                <circle cx="30" cy="30" r="29" fill="#6B7C5C" opacity=".12"/>
                <path d="M17 30l9 9 17-17" stroke="#6B7C5C" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h3 style={{fontFamily:"'Playfair Display',serif",fontSize:"1.65rem",color:"#2C1810",margin:"1rem 0 0.5rem"}}>Message sent!</h3>
              <p style={{color:"rgba(44,24,16,0.52)",fontSize:"0.9rem"}}>We will get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form-wrap">
              <div className="form-row-2">
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input required className="form-input" type="text" placeholder="Your name" value={form.name} onChange={e=>setForm(p=>({...p,name:e.target.value}))}/>
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input required className="form-input" type="email" placeholder="you@email.com" value={form.email} onChange={e=>setForm(p=>({...p,email:e.target.value}))}/>
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Phone (optional)</label>
                <input className="form-input" type="tel" placeholder="+1 437 243 7862" value={form.phone} onChange={e=>setForm(p=>({...p,phone:e.target.value}))}/>
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea required className="form-input" rows={5} placeholder="Tell us what you need..." value={form.message} onChange={e=>setForm(p=>({...p,message:e.target.value}))}/>
              </div>
              <button type="submit" className="btn-submit" disabled={loading}>{loading?"Sending...":"Send Message"}</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
