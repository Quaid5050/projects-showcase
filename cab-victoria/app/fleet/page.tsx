'use client'
import Image from 'next/image'
import Link from 'next/link'

const fleet = [
  {name:'Wheelchair Accessible Van',cap:'Up to 4 + wheelchair',img:'/services/wheelchair-van.jpg',note:'Rear ramp access, secured tie-downs, extra headroom. No mobility need is too much.',tags:['Rear ramp','Tie-downs','Inclusive'],ideal:'All mobility needs · Medical · Airport'},
  {name:'20-Passenger Bus',cap:'Up to 20',img:'/vehicles/bus-20pax.jpg',note:'The largest vehicle. Perfect for corporate events, sports teams, large tour groups.',tags:['20 seats','Events','Large tours'],ideal:'Corporate · Sports · Big weddings'},
  {name:'Stretch Limousine',cap:'Up to 8',img:'/vehicles/limo-8pax.webp',note:'Premium interior, drinks console, privacy screen. For extraordinary moments.',tags:['Luxury','Weddings','Events'],ideal:'Weddings · Proms · Celebrations'},
  {name:'Electric Cars',cap:'1–3 passengers',img:'/vehicles/electric-car.jpg',note:'Zero emissions, silent, ultra-modern. Perfect for eco-conscious travellers.',tags:['Zero emissions','Silent','Modern'],ideal:'Solo/couple · Airport · City'},
  {name:'Red Passenger Van',cap:'Up to 6',img:'/vehicles/red-van-6pax.jpg',note:'Spacious and comfortable for families. Ample luggage space for 8 bags.',tags:['Family','Luggage','Groups'],ideal:'Families · Small groups · Airport'},
  {name:'High Roof Transit Van',cap:'Up to 14',img:'/vehicles/14pes.jpg',note:'Maximum headroom and luggage capacity. Best for airport groups with lots of bags.',tags:['High headroom','14 seats','Luggage'],ideal:'Airport groups · Equipment'},
  {name:'Town Car',cap:'1–4 passengers',img:'/vehicles/Towncar.jpg',note:'Executive sedan with premium interior. The choice for business and VIP travel.',tags:['Executive','VIP','Business'],ideal:'Business travel · VIP transfers'},
]

export default function FleetPage() {
  return (
    <>
    <style>{`
      .fleet-pop  { display:grid; grid-template-columns:repeat(3,1fr); gap:12px; }
      .fleet-rest { display:grid; grid-template-columns:repeat(4,1fr); gap:12px; margin-top:12px; }
      .cmp-row    { display:grid; grid-template-columns:1fr 110px 1fr; padding:13px 18px; border-bottom:1px solid #141414; align-items:center; transition:background 0.2s; }
      .cmp-row:last-child { border-bottom:none; }
      .cmp-row:hover { background:#0f0f0f; }
      .cmp-ideal  { text-align:right; font-size:11px; color:#555; }

      @media(max-width:1024px){
        .fleet-pop  { grid-template-columns:1fr 1fr; }
        .fleet-rest { grid-template-columns:1fr 1fr; }
      }
      @media(max-width:640px){
        .fleet-pop  { grid-template-columns:1fr; }
        .fleet-rest { grid-template-columns:1fr; }
        .cmp-ideal  { display:none; }
        .cmp-row    { grid-template-columns:1fr 90px; }
      }
    `}</style>

    {/* Hero */}
    <section style={{height:'clamp(240px,40vw,460px)',position:'relative',display:'flex',alignItems:'flex-end',paddingBottom:40,overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0}}>
        <Image src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1600&q=85" alt="Premium fleet" fill style={{objectFit:'cover',objectPosition:'center 60%'}} unoptimized priority />
        <div style={{position:'absolute',inset:0,background:'linear-gradient(0deg,rgba(0,0,0,0.94) 0%,rgba(0,0,0,0.35) 55%,rgba(0,0,0,0.1) 100%)'}} />
      </div>
      <div className="wrap page-hero" style={{position:'relative',zIndex:1,width:'100%'}}>
        <div className="gold-bar" />
        <p style={{fontSize:10,fontWeight:700,letterSpacing:'0.14em',textTransform:'uppercase',color:'var(--gold)',marginBottom:6}}>1 to 20 passengers</p>
        <h1 className="font-display" style={{fontSize:'clamp(2.5rem,8vw,7rem)',lineHeight:0.88}}>OUR<br /><span style={{color:'var(--gold)'}}>FLEET</span></h1>
        <p style={{color:'rgba(255,255,255,0.4)',maxWidth:460,lineHeight:1.8,marginTop:10,fontSize:'clamp(12px,1.8vw,15px)'}}>Seven vehicle types for every occasion. Well-maintained, clean, and driven personally by Jay.</p>
      </div>
    </section>

    {/* Fleet */}
    <section style={{background:'#0a0a0a',padding:'clamp(36px,5vw,56px) 0'}}>
      <div className="wrap">
        <div className="fleet-pop">
          {fleet.slice(0,3).map(f=>(
            <div key={f.name} style={{background:'#0f0f0f',border:'1px solid #1a1a1a',overflow:'hidden',transition:'border-color 0.3s'}}
              onMouseEnter={e=>(e.currentTarget.style.borderColor='rgba(245,166,35,0.3)')}
              onMouseLeave={e=>(e.currentTarget.style.borderColor='#1a1a1a')}
            >
              <div style={{position:'relative',height:'clamp(180px,20vw,250px)'}}>
                <Image src={f.img} alt={f.name} fill style={{objectFit:'cover',transition:'transform 0.5s'}} unoptimized
                  onMouseEnter={e=>e.currentTarget.style.transform='scale(1.03)'}
                  onMouseLeave={e=>e.currentTarget.style.transform='scale(1)'}
                />
              </div>
              <div style={{padding:'clamp(12px,2vw,20px)'}}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'start',gap:8,marginBottom:7}}>
                  <h3 className="font-display" style={{fontSize:'clamp(1.1rem,2vw,1.5rem)',lineHeight:1,color:'#e8e8e8'}}>{f.name}</h3>
                  <span style={{fontSize:9,fontWeight:700,color:'var(--gold)',background:'rgba(245,166,35,0.1)',border:'1px solid rgba(245,166,35,0.2)',padding:'3px 9px',borderRadius:2,whiteSpace:'nowrap',flexShrink:0}}>{f.cap}</span>
                </div>
                <p style={{fontSize:'clamp(11px,1.4vw,12px)',color:'rgba(255,255,255,0.35)',lineHeight:1.7,marginBottom:7}}>{f.note}</p>
                <p style={{fontSize:10,color:'#333',marginBottom:9}}>Ideal: <span style={{color:'#555'}}>{f.ideal}</span></p>
                <div style={{display:'flex',gap:5,flexWrap:'wrap'}}>
                  {f.tags.map(t=><span key={t} style={{fontSize:8,fontWeight:700,letterSpacing:'0.06em',textTransform:'uppercase',padding:'2px 7px',background:'#1a1a1a',color:'#555',border:'1px solid #222'}}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="fleet-rest">
          {fleet.slice(3).map(f=>(
            <div key={f.name} style={{background:'#0f0f0f',border:'1px solid #1a1a1a',overflow:'hidden',transition:'border-color 0.3s'}}
              onMouseEnter={e=>(e.currentTarget.style.borderColor='rgba(245,166,35,0.22)')}
              onMouseLeave={e=>(e.currentTarget.style.borderColor='#1a1a1a')}
            >
              <div style={{position:'relative',height:'clamp(180px,20vw,250px)'}}>
                <Image src={f.img} alt={f.name} fill style={{objectFit:'cover',transition:'transform 0.4s'}} unoptimized
                  onMouseEnter={e=>e.currentTarget.style.transform='scale(1.03)'}
                  onMouseLeave={e=>e.currentTarget.style.transform='scale(1)'}
                />
              </div>
              <div style={{padding:'clamp(12px,2vw,20px)'}}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'start',gap:8,marginBottom:7}}>
                  <h3 className="font-display" style={{fontSize:'clamp(1.1rem,2vw,1.5rem)',lineHeight:1,color:'#e0e0e0'}}>{f.name}</h3>
                  <span style={{fontSize:9,fontWeight:700,color:'var(--gold)',background:'rgba(245,166,35,0.1)',border:'1px solid rgba(245,166,35,0.2)',padding:'3px 9px',borderRadius:2,whiteSpace:'nowrap',flexShrink:0}}>{f.cap}</span>
                </div>
                <p style={{fontSize:'clamp(11px,1.4vw,12px)',color:'rgba(255,255,255,0.35)',lineHeight:1.7,marginBottom:7}}>{f.note}</p>
                <p style={{fontSize:10,color:'#333',marginBottom:9}}>Ideal: <span style={{color:'#555'}}>{f.ideal}</span></p>
                <div style={{display:'flex',gap:5,flexWrap:'wrap'}}>
                  {f.tags.map(t=><span key={t} style={{fontSize:8,fontWeight:700,letterSpacing:'0.06em',textTransform:'uppercase',padding:'2px 7px',background:'#1a1a1a',color:'#555',border:'1px solid #222'}}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Quick comparison */}
    <section style={{background:'#080808',padding:'clamp(36px,5vw,56px) 0',borderTop:'1px solid #1a1a1a'}}>
      <div className="wrap" style={{maxWidth:820}}>
        <h2 className="font-display" style={{fontSize:'clamp(1.5rem,3vw,2.5rem)',marginBottom:20,textAlign:'center'}}>QUICK COMPARISON</h2>
        <div style={{border:'1px solid #1a1a1a',overflow:'hidden'}}>
          {fleet.map(f=>(
            <div key={f.name} className="cmp-row">
              <div style={{fontSize:'clamp(12px,1.5vw,13px)',fontWeight:500,color:'#ccc'}}>{f.name}</div>
              <div style={{fontSize:'clamp(11px,1.3vw,12px)',color:'var(--gold)',textAlign:'center',fontWeight:700}}>{f.cap}</div>
              <div className="cmp-ideal">{f.ideal}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section style={{padding:'clamp(40px,6vw,60px) 24px',textAlign:'center',background:'#0a0a0a',borderTop:'1px solid #1a1a1a'}}>
      <h2 className="font-display" style={{fontSize:'clamp(1.8rem,5vw,3.5rem)',marginBottom:10}}>NOT SURE WHICH?</h2>
      <p style={{color:'rgba(255,255,255,0.3)',marginBottom:24,fontSize:'clamp(12px,1.8vw,13px)'}}>Tell Jay your group size and destination — he'll recommend the right vehicle instantly.</p>
      <div style={{display:'flex',gap:10,justifyContent:'center',flexWrap:'wrap'}}>
        <a href="https://wa.me/12509868284?text=Hi Jay, I need help choosing the right vehicle." className="btn-primary">Ask Jay on WhatsApp</a>
        <a href="sms:+12509868284" className="btn-secondary">💬 Text</a>
        <a href="mailto:1cab.victoria@gmail.com" className="btn-secondary">✉ Email</a>
        <a href="tel:+12509868284" className="btn-secondary">📞 Call</a>
      </div>
    </section>
    </>
  )
}