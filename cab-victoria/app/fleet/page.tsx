'use client'
import Image from 'next/image'
import Link from 'next/link'

const fleet = [
  {name:'Wheelchair Accessible Van',cap:'Up to 6 + wheelchair',img:'https://images.unsplash.com/photo-1633466154054-399bf16156a2?q=80',note:'Motorised ramp, secured tie-downs, extra headroom. No mobility need is too much.',tags:['Ramp access','Tie-downs','Inclusive'],ideal:'All mobility needs · Medical · Airport',popular:true},
  {name:'20-Passenger Bus',cap:'Up to 20',img:'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=900&q=80',note:'The largest vehicle. Perfect for corporate events, sports teams, large tour groups.',tags:['20 seats','Events','Large tours'],ideal:'Corporate · Sports · Big weddings',popular:true},
  {name:'Stretch Limousine',cap:'Up to 10',img:'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?w=900&q=80',note:'Premium interior, drinks console, privacy screen. For extraordinary moments.',tags:['Luxury','Weddings','Events'],ideal:'Weddings · Proms · Celebrations',popular:true},
  {name:'Electric Cars',cap:'1–4 passengers',img:'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=900&q=80',note:'Zero emissions, silent, ultra-modern. Perfect for eco-conscious travellers.',tags:['Zero emissions','Silent','Modern'],ideal:'Solo/couple · Airport · City',popular:false},
  {name:'Passenger Vans',cap:'Up to 7',img:'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=900&q=80',note:'Spacious and comfortable for families. Ample luggage space.',tags:['Family','Luggage','Groups'],ideal:'Families · Small groups · Airport',popular:false},
  {name:'High Roof Transit Van',cap:'Up to 12',img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80',note:'Maximum headroom and luggage capacity. Best for airport groups with lots of bags.',tags:['High headroom','12 seats','Luggage'],ideal:'Airport groups · Equipment',popular:false},
  {name:'Town Car',cap:'1–4 passengers',img:'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=900&q=80',note:'Executive sedan with premium interior. The choice for business and VIP travel.',tags:['Executive','VIP','Business'],ideal:'Business travel · VIP transfers',popular:false},
]

export default function FleetPage() {
  return (
    <>
    <style>{`
      .fleet-pop  { display:grid; grid-template-columns:repeat(3,1fr); gap:3px; margin-bottom:3px; }
      .fleet-rest { display:grid; grid-template-columns:repeat(4,1fr); gap:3px; }
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
        .fleet-rest { grid-template-columns:1fr 1fr; }
        .cmp-ideal  { display:none; }
        .cmp-row    { grid-template-columns:1fr 90px; }
      }
      @media(max-width:380px){
        .fleet-rest { grid-template-columns:1fr; }
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
        <p style={{fontSize:9,fontWeight:700,letterSpacing:'0.14em',textTransform:'uppercase',color:'#333',marginBottom:8}}>Most popular</p>
        <div className="fleet-pop">
          {fleet.filter(f=>f.popular).map(f=>(
            <div key={f.name} style={{background:'#0f0f0f',border:'1px solid #1a1a1a',overflow:'hidden',transition:'border-color 0.3s'}}
              onMouseEnter={e=>(e.currentTarget.style.borderColor='rgba(245,166,35,0.3)')}
              onMouseLeave={e=>(e.currentTarget.style.borderColor='#1a1a1a')}
            >
              <div style={{position:'relative',height:'clamp(160px,18vw,230px)'}}>
                <Image src={f.img} alt={f.name} fill style={{objectFit:'cover',filter:'brightness(0.7)',transition:'all 0.5s'}} unoptimized
                  onMouseEnter={e=>{e.currentTarget.style.filter='brightness(0.88)';e.currentTarget.style.transform='scale(1.04)'}}
                  onMouseLeave={e=>{e.currentTarget.style.filter='brightness(0.7)';e.currentTarget.style.transform='scale(1)'}}
                />
                <div style={{position:'absolute',inset:0,background:'linear-gradient(0deg,rgba(0,0,0,0.7) 0%,transparent 55%)'}} />
                <span style={{position:'absolute',top:10,left:10,fontSize:8,fontWeight:700,letterSpacing:'0.08em',textTransform:'uppercase',background:'var(--gold)',color:'#000',padding:'3px 9px',borderRadius:2}}>Popular</span>
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

        <p style={{fontSize:9,fontWeight:700,letterSpacing:'0.14em',textTransform:'uppercase',color:'#333',marginBottom:8,marginTop:14}}>All vehicles</p>
        <div className="fleet-rest">
          {fleet.filter(f=>!f.popular).map(f=>(
            <div key={f.name} style={{background:'#0f0f0f',border:'1px solid #1a1a1a',overflow:'hidden',transition:'border-color 0.3s'}}
              onMouseEnter={e=>(e.currentTarget.style.borderColor='rgba(245,166,35,0.22)')}
              onMouseLeave={e=>(e.currentTarget.style.borderColor='#1a1a1a')}
            >
              <div style={{position:'relative',height:'clamp(110px,12vw,160px)'}}>
                <Image src={f.img} alt={f.name} fill style={{objectFit:'cover',filter:'brightness(0.6)',transition:'filter 0.4s'}} unoptimized
                  onMouseEnter={e=>e.currentTarget.style.filter='brightness(0.78)'}
                  onMouseLeave={e=>e.currentTarget.style.filter='brightness(0.6)'}
                />
                <div style={{position:'absolute',inset:0,background:'linear-gradient(0deg,rgba(0,0,0,0.78) 0%,transparent 50%)'}} />
              </div>
              <div style={{padding:'clamp(10px,1.5vw,15px)'}}>
                <div style={{display:'flex',justifyContent:'space-between',gap:6,marginBottom:5}}>
                  <h3 className="font-display" style={{fontSize:'clamp(0.95rem,1.8vw,1.2rem)',lineHeight:1,color:'#e0e0e0'}}>{f.name}</h3>
                  <span style={{fontSize:9,fontWeight:700,color:'var(--gold)',flexShrink:0}}>{f.cap}</span>
                </div>
                <p style={{fontSize:'clamp(10px,1.2vw,11px)',color:'rgba(255,255,255,0.3)',lineHeight:1.6}}>{f.note}</p>
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
        <a href="tel:+12509868284" className="btn-secondary">📞 Call</a>
      </div>
    </section>
    </>
  )
}
