'use client'
import { useState } from 'react'

export default function ContactPage() {
  const [form, setForm] = useState({ name:'', phone:'', email:'', service:'Airport / Ferry Transfer', date:'', message:'' })
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle')
  const [errMsg, setErrMsg] = useState('')
  const today = new Date().toISOString().split('T')[0]
  const isToday = form.date === today

  const set = (k: string, v: string) => setForm(prev => ({...prev, [k]: v}))

  const handleSubmit = async () => {
    if (!form.name.trim() || !form.phone.trim()) {
      setErrMsg('Please fill in your name and phone number.')
      setStatus('error')
      return
    }
    setStatus('sending')
    setErrMsg('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name:'', phone:'', email:'', service:'Airport / Ferry Transfer', date:'', message:'' })
      } else {
        const data = await res.json()
        setErrMsg(data.error || 'Something went wrong. Please text or call Jay directly.')
        setStatus('error')
      }
    } catch {
      setErrMsg('Could not send. Please text or call Jay directly.')
      setStatus('error')
    }
  }

  const fStyle: React.CSSProperties = {
    width:'100%',background:'#1a1a1a',border:'1px solid #2a2a2a',
    color:'#fff',padding:'10px 13px',fontSize:13,outline:'none',
    fontFamily:'Outfit,sans-serif',borderRadius:2,transition:'border-color 0.2s',
  }

  const methods = [
    {icon:'💬',label:'Text',val:'+1 (250) 986-8284',note:'Quick & easy',href:'sms:+12509868284',ext:false},
    {icon:'📧',label:'Email',val:'1cab.victoria@gmail.com',note:'For longer enquiries',href:'mailto:1cab.victoria@gmail.com',ext:false},
    {icon:'💬',label:'WhatsApp',val:'+1 (250) 986-8284',note:'Also fast',href:'https://wa.me/12509868284',ext:true},
    {icon:'📞',label:'Call',val:'+1 (250) 986-8284',note:'Text or email preferred',href:'tel:+12509868284',ext:false},
  ]

  return (
    <>
    <style>{`
      .contact-layout { display:grid; grid-template-columns:1fr 1fr; gap:clamp(24px,4vw,40px); align-items:start; }
      .form-2col { display:grid; grid-template-columns:1fr 1fr; gap:12px; }
      @media(max-width:860px){ .contact-layout { grid-template-columns:1fr; } }
      @media(max-width:480px){ .form-2col { grid-template-columns:1fr; } }
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

            {/* Review section */}
            <div style={{marginTop:20,background:'rgba(66,133,244,0.05)',border:'1px solid rgba(66,133,244,0.18)',padding:'18px',borderRadius:2}}>
              <p style={{fontSize:10,fontWeight:700,letterSpacing:'0.1em',textTransform:'uppercase',color:'#4285F4',marginBottom:7}}>⭐ Leave a Review</p>
              <p style={{fontSize:'clamp(11px,1.5vw,12px)',color:'rgba(255,255,255,0.3)',lineHeight:1.7,marginBottom:14}}>Had a great experience? Help other travellers find BookaCab Victoria.</p>
              <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
                <a href="https://g.page/r/CU7QJF11gO34EBI/review" target="_blank" rel="noreferrer" className="btn-secondary" style={{fontSize:11,padding:'9px 18px'}}>⭐ Google ↗</a>
                <a href="https://www.tripadvisor.com" target="_blank" rel="noreferrer" className="btn-secondary" style={{fontSize:11,padding:'9px 18px'}}>Trip Advisor ↗</a>
                <a href="https://www.viator.com" target="_blank" rel="noreferrer" className="btn-secondary" style={{fontSize:11,padding:'9px 18px'}}>Viator ↗</a>
              </div>
            </div>
          </div>

          {/* Booking form */}
          <div id="booking-form" style={{scrollMarginTop:80}}>
            <p style={{fontSize:10,fontWeight:700,letterSpacing:'0.1em',textTransform:'uppercase',color:'var(--gold)',marginBottom:14}}>Send a booking enquiry</p>
            <div style={{background:'#0f0f0f',border:'1px solid #1a1a1a',padding:'clamp(18px,3vw,28px)',borderRadius:2}}>

              {/* Success message */}
              {status === 'sent' && (
                <div style={{background:'rgba(74,222,128,0.08)',border:'1px solid rgba(74,222,128,0.3)',borderRadius:2,padding:'16px',marginBottom:16,textAlign:'center'}}>
                  <p style={{fontSize:14,fontWeight:700,color:'#4ade80',marginBottom:4}}>✓ Enquiry sent!</p>
                  <p style={{fontSize:12,color:'rgba(255,255,255,0.4)',lineHeight:1.6}}>Jay has received your message and will reply shortly.</p>
                </div>
              )}

              {/* Error message */}
              {status === 'error' && errMsg && (
                <div style={{background:'rgba(239,68,68,0.08)',border:'1px solid rgba(239,68,68,0.3)',borderRadius:2,padding:'12px 16px',marginBottom:14}}>
                  <p style={{fontSize:12,color:'#ef4444',lineHeight:1.5}}>{errMsg}</p>
                </div>
              )}

              <div className="form-2col" style={{marginBottom:12}}>
                <div>
                  <label style={{display:'block',fontSize:9,color:'#555',letterSpacing:'0.06em',textTransform:'uppercase',marginBottom:5}}>Your name *</label>
                  <input type="text" placeholder="Full name" value={form.name} onChange={e=>set('name',e.target.value)} style={fStyle}
                    onFocus={e=>(e.currentTarget.style.borderColor='rgba(245,166,35,0.5)')}
                    onBlur={e=>(e.currentTarget.style.borderColor='#2a2a2a')}
                  />
                </div>
                <div>
                  <label style={{display:'block',fontSize:9,color:'#555',letterSpacing:'0.06em',textTransform:'uppercase',marginBottom:5}}>Phone / WhatsApp *</label>
                  <input type="tel" placeholder="+1 (250) 000-0000" value={form.phone} onChange={e=>set('phone',e.target.value)} style={fStyle}
                    onFocus={e=>(e.currentTarget.style.borderColor='rgba(245,166,35,0.5)')}
                    onBlur={e=>(e.currentTarget.style.borderColor='#2a2a2a')}
                  />
                </div>
              </div>

              <div style={{marginBottom:12}}>
                <label style={{display:'block',fontSize:9,color:'#555',letterSpacing:'0.06em',textTransform:'uppercase',marginBottom:5}}>Email address (optional)</label>
                <input type="email" placeholder="your@email.com" value={form.email} onChange={e=>set('email',e.target.value)} style={fStyle}
                  onFocus={e=>(e.currentTarget.style.borderColor='rgba(245,166,35,0.5)')}
                  onBlur={e=>(e.currentTarget.style.borderColor='#2a2a2a')}
                />
              </div>

              <div style={{marginBottom:12}}>
                <label style={{display:'block',fontSize:9,color:'#555',letterSpacing:'0.06em',textTransform:'uppercase',marginBottom:5}}>Service needed</label>
                <select value={form.service} onChange={e=>set('service',e.target.value)} style={fStyle}>
                  {['Airport / Ferry Transfer','City Tour','Outstation Trip','Cowichan Valley Wine / Cider / Spirits Tour','Malahat Skywalk & Castle Tour','Designated Driver','U-Haul Driver','Limousine / Special Event','Wheelchair Accessible Ride','Other'].map(o=><option key={o}>{o}</option>)}
                </select>
              </div>

              <div style={{marginBottom:12}}>
                <label style={{display:'block',fontSize:9,color:'#555',letterSpacing:'0.06em',textTransform:'uppercase',marginBottom:5}}>Date of travel</label>
                <input type="date" value={form.date} min={today} onChange={e=>set('date',e.target.value)} style={fStyle}
                  onFocus={e=>(e.currentTarget.style.borderColor='rgba(245,166,35,0.5)')}
                  onBlur={e=>(e.currentTarget.style.borderColor='#2a2a2a')}
                />
              </div>

              {/* Same-day alert */}
              {isToday && (
                <div style={{background:'rgba(245,166,35,0.07)',border:'1px solid rgba(245,166,35,0.25)',borderRadius:2,padding:'13px 15px',marginBottom:12}}>
                  <p style={{fontSize:11,fontWeight:700,color:'var(--gold)',marginBottom:5}}>⚡ Same-day booking!</p>
                  <p style={{fontSize:'clamp(11px,1.5vw,12px)',color:'rgba(255,255,255,0.38)',lineHeight:1.6,marginBottom:9}}>For today's rides, text or call Jay for the fastest response:</p>
                  <div style={{display:'flex',gap:7,flexWrap:'wrap'}}>
                    <a href="sms:+12509868284" style={{fontSize:10,fontWeight:700,padding:'6px 12px',background:'#1a1a1a',color:'#ccc',border:'1px solid #333',textDecoration:'none',borderRadius:2,letterSpacing:'0.05em',textTransform:'uppercase'}}>💬 Text</a>
                    <a href="tel:+12509868284" style={{fontSize:10,fontWeight:700,padding:'6px 12px',background:'var(--gold)',color:'#000',textDecoration:'none',borderRadius:2,letterSpacing:'0.05em',textTransform:'uppercase'}}>📞 Call</a>
                  </div>
                </div>
              )}

              <div style={{marginBottom:18}}>
                <label style={{display:'block',fontSize:9,color:'#555',letterSpacing:'0.06em',textTransform:'uppercase',marginBottom:5}}>Message (optional)</label>
                <textarea placeholder="Pickup location, number of passengers and bags, any special requirements..." rows={3}
                  value={form.message} onChange={e=>set('message',e.target.value)}
                  style={{...fStyle,resize:'vertical'}}
                  onFocus={e=>(e.currentTarget.style.borderColor='rgba(245,166,35,0.5)')}
                  onBlur={e=>(e.currentTarget.style.borderColor='#2a2a2a')}
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={status === 'sending'}
                className="btn-primary"
                style={{
                  display:'block',textAlign:'center',width:'100%',padding:'13px',
                  fontSize:13,fontWeight:700,letterSpacing:'0.06em',
                  cursor: status==='sending' ? 'wait' : 'pointer',
                  opacity: status==='sending' ? 0.6 : 1,
                  border:'none',
                }}
              >
                {status === 'sending' ? 'Sending...' : '✉ Send Enquiry'}
              </button>
              <p style={{textAlign:'center',fontSize:10,color:'#333',marginTop:8}}>Your enquiry goes straight to Jay's email. He will reply with pricing.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}