'use client'
import { useState } from 'react'

export default function ContactPage() {
  const [date, setDate] = useState('')
  const today = new Date().toISOString().split('T')[0]
  const isToday = date === today

  const fStyle: React.CSSProperties = {
    width:'100%',background:'#1a1a1a',border:'1px solid #2a2a2a',
    color:'#fff',padding:'10px 13px',fontSize:13,outline:'none',
    fontFamily:'Outfit,sans-serif',borderRadius:2,transition:'border-color 0.2s',
  }

  const methods = [
    {icon:'💬',label:'WhatsApp',val:'+1 (250) 986-8284',note:'Fastest response',href:'https://wa.me/12509868284',col:'#25D366',ext:true},
    {icon:'✉️',label:'Text',val:'+1 (250) 986-8284',note:'Include location, date & time',href:'sms:+12509868284',col:'#aaa',ext:false},
    {icon:'📞',label:'Call',val:'+1 (250) 986-8284',note:'Text or email preferred',href:'tel:+12509868284',col:'var(--gold)',ext:false},
    {icon:'📧',label:'Email',val:'1cab.victoria@gmail.com',note:'For longer enquiries',href:'mailto:1cab.victoria@gmail.com',col:'#ff9999',ext:false},
  ]

  return (
    <>
    <style>{`
      .contact-layout { display:grid; grid-template-columns:1fr 1fr; gap:clamp(24px,4vw,40px); align-items:start; }
      .form-2col { display:grid; grid-template-columns:1fr 1fr; gap:12px; }

      @media(max-width:860px){
        .contact-layout { grid-template-columns:1fr; }
      }
      @media(max-width:480px){
        .form-2col { grid-template-columns:1fr; }
      }
    `}</style>

    {/* Hero */}
    <section style={{paddingTop:'clamp(90px,14vw,140px)',paddingBottom:'clamp(32px,5vw,48px)',background:'linear-gradient(180deg,#0f0f0f 0%,#0a0a0a 100%)',borderBottom:'1px solid #1a1a1a',position:'relative',overflow:'hidden'}}>
      <div style={{position:'absolute',top:0,right:0,width:'50%',height:'100%',background:'radial-gradient(circle at top right,rgba(245,166,35,0.04) 0%,transparent 60%)',pointerEvents:'none'}} />
      <div className="wrap">
        <div className="gold-bar" />
        <p style={{fontSize:10,fontWeight:700,letterSpacing:'0.14em',textTransform:'uppercase',color:'var(--gold)',marginBottom:6}}>Get in touch</p>
        <h1 className="font-display" style={{fontSize:'clamp(2.5rem,8vw,6rem)',lineHeight:0.88,marginBottom:10}}>CONTACT<br /><span style={{color:'var(--gold)'}}>JAY</span></h1>
        <p style={{color:'rgba(255,255,255,0.38)',maxWidth:420,lineHeight:1.8,fontSize:'clamp(12px,1.8vw,15px)'}}>For pricing, availability, or to book. Jay responds personally — usually within minutes.</p>
      </div>
    </section>

    <section style={{background:'#0a0a0a',padding:'clamp(32px,5vw,56px) 0 clamp(48px,7vw,80px)'}}>
      <div className="wrap">
        <div className="contact-layout">

          {/* Contact methods */}
          <div>
            <p style={{fontSize:10,fontWeight:700,letterSpacing:'0.1em',textTransform:'uppercase',color:'var(--gold)',marginBottom:14}}>Reach Jay directly</p>
            {methods.map(m=>(
              <a key={m.label} href={m.href}
                target={m.ext ? '_blank' : undefined}
                rel={m.ext ? 'noreferrer' : undefined}
                style={{display:'flex',alignItems:'center',gap:12,padding:'13px 15px',background:'rgba(255,255,255,0.02)',border:'1px solid #1a1a1a',marginBottom:7,textDecoration:'none',transition:'border-color 0.2s',borderRadius:2}}
                onMouseEnter={e=>(e.currentTarget.style.borderColor='rgba(245,166,35,0.3)')}
                onMouseLeave={e=>(e.currentTarget.style.borderColor='#1a1a1a')}
              >
                <div style={{fontSize:20,flexShrink:0}}>{m.icon}</div>
                <div style={{flex:1,minWidth:0}}>
                  <div style={{fontSize:9,color:'#444',letterSpacing:'0.06em',textTransform:'uppercase',marginBottom:2}}>{m.label}</div>
                  <div style={{fontSize:'clamp(12px,2vw,14px)',fontWeight:700,color:'#ccc',wordBreak:'break-all'}}>{m.val}</div>
                </div>
                <div style={{fontSize:10,color:'#444',textAlign:'right',flexShrink:0,maxWidth:80,lineHeight:1.4}}>{m.note}</div>
              </a>
            ))}

            {/* Google review */}
            <div style={{marginTop:20,background:'rgba(66,133,244,0.05)',border:'1px solid rgba(66,133,244,0.18)',padding:'18px',borderRadius:2}}>
              <p style={{fontSize:10,fontWeight:700,letterSpacing:'0.1em',textTransform:'uppercase',color:'#4285F4',marginBottom:7}}>⭐ Google Review</p>
              <p style={{fontSize:'clamp(11px,1.5vw,12px)',color:'rgba(255,255,255,0.3)',lineHeight:1.7,marginBottom:14}}>Had a great experience? Help other travellers find 1Cab Victoria.</p>
              <a href="https://www.google.com/maps/search/1cab+victoria" target="_blank" rel="noreferrer" className="btn-secondary" style={{fontSize:11,padding:'9px 18px'}}>Open Google Maps ↗</a>
            </div>
          </div>

          {/* Booking form */}
          <div>
            <p style={{fontSize:10,fontWeight:700,letterSpacing:'0.1em',textTransform:'uppercase',color:'var(--gold)',marginBottom:14}}>Send a booking enquiry</p>
            <div style={{background:'#0f0f0f',border:'1px solid #1a1a1a',padding:'clamp(18px,3vw,28px)',borderRadius:2}}>

              <div className="form-2col" style={{marginBottom:12}}>
                {[{l:'Your name',t:'text',p:'Full name'},{l:'Phone / WhatsApp',t:'tel',p:'+1 (250) 000-0000'}].map(f=>(
                  <div key={f.l}>
                    <label style={{display:'block',fontSize:9,color:'#555',letterSpacing:'0.06em',textTransform:'uppercase',marginBottom:5}}>{f.l}</label>
                    <input type={f.t} placeholder={f.p} style={fStyle}
                      onFocus={e=>(e.currentTarget.style.borderColor='rgba(245,166,35,0.5)')}
                      onBlur={e=>(e.currentTarget.style.borderColor='#2a2a2a')}
                    />
                  </div>
                ))}
              </div>

              <div style={{marginBottom:12}}>
                <label style={{display:'block',fontSize:9,color:'#555',letterSpacing:'0.06em',textTransform:'uppercase',marginBottom:5}}>Service needed</label>
                <select style={fStyle}>
                  {['Airport / Ferry Transfer','City Tour','Outstation Trip','Designated Driver','U-Haul Driver','Limousine / Special Event','Other'].map(o=><option key={o}>{o}</option>)}
                </select>
              </div>

              <div style={{marginBottom:12}}>
                <label style={{display:'block',fontSize:9,color:'#555',letterSpacing:'0.06em',textTransform:'uppercase',marginBottom:5}}>Date of travel</label>
                <input type="date" value={date} min={today} onChange={e=>setDate(e.target.value)} style={fStyle}
                  onFocus={e=>(e.currentTarget.style.borderColor='rgba(245,166,35,0.5)')}
                  onBlur={e=>(e.currentTarget.style.borderColor='#2a2a2a')}
                />
              </div>

              {/* Same-day alert */}
              {isToday && (
                <div style={{background:'rgba(245,166,35,0.07)',border:'1px solid rgba(245,166,35,0.25)',borderRadius:2,padding:'13px 15px',marginBottom:12}}>
                  <p style={{fontSize:11,fontWeight:700,color:'var(--gold)',marginBottom:5}}>⚡ Same-day booking!</p>
                  <p style={{fontSize:'clamp(11px,1.5vw,12px)',color:'rgba(255,255,255,0.38)',lineHeight:1.6,marginBottom:9}}>For today's rides, contact Jay directly for fastest response:</p>
                  <div style={{display:'flex',gap:7,flexWrap:'wrap'}}>
                    <a href="https://wa.me/12509868284" style={{fontSize:10,fontWeight:700,padding:'6px 12px',background:'#25D366',color:'#fff',textDecoration:'none',borderRadius:2,letterSpacing:'0.05em',textTransform:'uppercase'}}>WhatsApp</a>
                    <a href="sms:+12509868284" style={{fontSize:10,fontWeight:700,padding:'6px 12px',background:'#1a1a1a',color:'#ccc',border:'1px solid #333',textDecoration:'none',borderRadius:2,letterSpacing:'0.05em',textTransform:'uppercase'}}>Text</a>
                    <a href="tel:+12509868284" style={{fontSize:10,fontWeight:700,padding:'6px 12px',background:'var(--gold)',color:'#000',textDecoration:'none',borderRadius:2,letterSpacing:'0.05em',textTransform:'uppercase'}}>📞 Call</a>
                  </div>
                </div>
              )}

              <div style={{marginBottom:18}}>
                <label style={{display:'block',fontSize:9,color:'#555',letterSpacing:'0.06em',textTransform:'uppercase',marginBottom:5}}>Message (optional)</label>
                <textarea placeholder="Pickup location, number of passengers, any special requirements..." rows={3}
                  style={{...fStyle,resize:'vertical'}}
                  onFocus={e=>(e.currentTarget.style.borderColor='rgba(245,166,35,0.5)')}
                  onBlur={e=>(e.currentTarget.style.borderColor='#2a2a2a')}
                />
              </div>

              <a href="https://wa.me/12509868284" className="btn-primary" style={{display:'block',textAlign:'center',width:'100%',padding:'13px'}}>Send via WhatsApp</a>
              <p style={{textAlign:'center',fontSize:10,color:'#333',marginTop:8}}>No payment required · Jay will confirm and quote pricing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
