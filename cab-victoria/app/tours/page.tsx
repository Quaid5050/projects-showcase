'use client'
import { useState, useRef } from 'react'
import Image from 'next/image'

/* ── STOP DATA (images) ── */
const allStops: Record<string,{day:string;night:string}> = {
  'Dallas Waterfront':       {day:'/tours/dallas-road-day.jpeg',       night:'/tours/dallas-road-night.jpg'},
  'Mile 0':                  {day:'/tours/mile0-day.jpeg',             night:'/tours/mile0-night.jpeg'},
  'Terry Fox Statue':        {day:'/tours/terry-fox-day.jpg',         night:'/tours/terry-fox-day.jpg'},
  'Beacon Hill Park':        {day:'/tours/beacon-hill-day.webp',      night:'/tours/beacon-hill-night.jpg'},
  "Totem Pole — World's Tallest": {day:'/tours/totem-pole-day.jpg',   night:'/tours/totem-pole-day.jpg'},
  'Cathedral Church':        {day:'/tours/cathedral-day.jpeg',         night:'/tours/cathedral-night.jpeg'},
  'China Town':              {day:'/tours/chinatown-day.webp',        night:'/tours/chinatown-night.jpeg'},
  'Johnson Bridge':          {day:'/tours/johnson-bridge-day.webp',   night:'/tours/johnson-bridge-night.webp'},
  'Empress Hotel':           {day:'/tours/empress-day.jpg',           night:'/tours/empress-night.jpg'},
  'Parliament Building':     {day:'/tours/parliament-day.jpg',        night:'/tours/parliament-night.jpg'},
  'Confederation Garden':    {day:'/tours/confederation-garden-day.jpg', night:'/tours/confederation-garden-day.jpg'},
  "Fisherman's Wharf":       {day:'/tours/fisherman-wharf-day.jpeg',   night:'/tours/fisherman-wharf-night.jpeg'},
  'Craigdarroch Castle':     {day:'/tours/castle-day.jpeg',            night:'/tours/castle-night.jpeg'},
  'Government House':        {day:'/tours/government-house-day.jpg',  night:'/tours/government-house-day.jpg'},
  'Inner Harbour':           {day:'/tours/inner-harbour-day.webp',    night:'/tours/inner-harbour-night.jpeg'},
  'Bastion Square':          {day:'/tours/bastion-square-day.jpg',    night:'/tours/bastion-square-night.jpg'},
  'Mt. Tolmie':              {day:'/tours/mt-tolmie-day.jpeg',         night:'/tours/mt-tolmie-night.jpeg'},
  'Gorge Waterway':          {day:'/tours/gorge-waterway-day.jpeg',    night:'/tours/gorge-waterway-day.jpeg'},
  'Japanese Garden':         {day:'/tours/japanese-garden-day.jpg',   night:'/tours/japanese-garden-day.jpg'},
  'Butchart Gardens':        {day:'/tours/buut2.jpeg',          night:'/tours/butchart-night.webp'},
}

/* ── TOUR PACKAGES ── */
const tour1 = ['Dallas Waterfront','Mile 0','Terry Fox Statue','Beacon Hill Park',"Totem Pole — World's Tallest",'Cathedral Church','China Town','Johnson Bridge','Empress Hotel','Parliament Building','Confederation Garden',"Fisherman's Wharf"]
const tour2Extra = ['Craigdarroch Castle','Government House','Inner Harbour','Bastion Square']
const tour3Extra = ['Mt. Tolmie','Gorge Waterway','Japanese Garden']
const tour4 = ['Butchart Gardens','Dallas Waterfront','Mile 0','Terry Fox Statue','China Town','Johnson Bridge','Empress Hotel','Parliament Building',"Fisherman's Wharf"]
const allNames = [...new Set([...tour1,...tour2Extra,...tour3Extra,'Butchart Gardens'])]

type Pkg = { id:string; label:string; hours:string; tag:string; stops:string[]; desc:string; img:string; highlight:string }

const packages: Pkg[] = [
  {id:'1hr',label:'1',hours:'1 hour',tag:'1 hour Express Tour',stops:tour1,
   desc:'See the best of Victoria in 60 minutes. 12 iconic stops from Dallas Waterfront to Fisherman\'s Wharf.',
   img:'/tours/parliament-day.jpg',
   highlight:'12 stops · Perfect for cruise visitors'},
  {id:'2hr',label:'2',hours:'2 hours',tag:'Victoria City Highlights',stops:[...tour1,...tour2Extra],
   desc:'Everything in the Express Tour plus Craigdarroch Castle, Government House, Inner Harbour & Bastion Square.',
   img:'/tours/castle-day.jpeg',
   highlight:'16 stops · Our most popular tour'},
  {id:'3hr',label:'3',hours:'3 hours',tag:'Grand City Tour',stops:[...tour1,...tour2Extra,...tour3Extra],
   desc:'The full city experience — all 2-hour stops plus Mt. Tolmie viewpoint, Gorge Waterway & Japanese Garden.',
   img:'/tours/mt-tolmie-day.jpeg',
   highlight:'19 stops · The complete experience'},
  {id:'4hr',label:'4',hours:'4 hours',tag:'Victoria Garden Tour',stops:tour4,
   desc:'Includes the world-famous Butchart Gardens plus a selection of city highlights. A must for garden lovers.',
   img:'/tours/butchart-day.jpg',
   highlight:'9 stops · Includes Butchart Gardens'},
  {id:'full',label:'FULL',hours:'Full day',tag:'Full Day Tour',stops:allNames,
   desc:'Every stop. Every garden. Every viewpoint. The ultimate Victoria experience with no rush.',
   img:'/tours/inner-harbour-day.webp',
   highlight:'All stops · No rush · Ultimate experience'},
]

export default function ToursPage() {
  const [mode, setMode] = useState<'day'|'night'>('day')
  const [activePkg, setActivePkg] = useState<Pkg|null>(null)
  const stopsRef = useRef<HTMLDivElement>(null)

  const selectPkg = (p: Pkg) => {
    setActivePkg(p)
    setTimeout(() => stopsRef.current?.scrollIntoView({ behavior:'smooth', block:'start' }), 100)
  }

  return (
    <>
    <style>{`
      .pkg-cards { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; }
      .pkg-card { position:relative; overflow:hidden; border:2px solid #1a1a1a; border-radius:6px; cursor:pointer; transition:all 0.3s; background:#0d0d0d; }
      .pkg-card:hover { border-color:rgba(245,166,35,0.35); transform:translateY(-3px); }
      .pkg-card.active { border-color:var(--gold); }
      .pkg-card-img { position:relative; height:clamp(160px,18vw,220px); overflow:hidden; }
      .pkg-card-body { padding:clamp(14px,2.5vw,22px); }
      .pkg-card-hours { position:absolute; top:12px; left:12px; background:rgba(0,0,0,0.8); backdrop-filter:blur(8px); border:1px solid rgba(245,166,35,0.4); border-radius:4px; padding:6px 14px; z-index:2; }
      .pkg-card-hours span { font-size:clamp(1.2rem,2.5vw,1.6rem); font-weight:800; color:var(--gold); line-height:1; }
      .pkg-card-hours small { display:block; font-size:8px; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; color:rgba(245,166,35,0.7); margin-top:2px; }
      .stops-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(200px,1fr)); gap:4px; }
      .pkg-mini-nav { display:flex; gap:6px; flex-wrap:wrap; justify-content:center; }
      .pkg-mini { padding:8px 16px; background:#111; border:2px solid #222; border-radius:4px; cursor:pointer; font-size:11px; font-weight:700; letter-spacing:0.06em; text-transform:uppercase; color:#555; transition:all 0.2s; }
      .pkg-mini:hover { border-color:rgba(245,166,35,0.4); }
      .pkg-mini.active { border-color:var(--gold); color:var(--gold); background:rgba(245,166,35,0.08); }
      @media(max-width:900px){ .pkg-cards { grid-template-columns:repeat(2,1fr); } }
      @media(max-width:600px){
        .pkg-cards { grid-template-columns:1fr; max-width:400px; margin:0 auto; }
        .stops-grid { grid-template-columns:repeat(2,1fr); }
      }
    `}</style>

    {/* ── HERO ── */}
    <section style={{height:'clamp(220px,36vw,400px)',position:'relative',display:'flex',alignItems:'flex-end',paddingBottom:36,overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0}}>
        <Image src="/tours/inner-harbour-day.webp" alt="Victoria" fill style={{objectFit:'cover'}} unoptimized priority />
        <div style={{position:'absolute',inset:0,background:'linear-gradient(0deg,rgba(0,0,0,0.92) 0%,rgba(0,0,0,0.22) 60%,rgba(0,0,0,0.5) 100%)'}} />
      </div>
      <div className="wrap page-hero" style={{position:'relative',zIndex:1,width:'100%'}}>
        <div className="gold-bar" />
        <p style={{fontSize:10,fontWeight:700,letterSpacing:'0.14em',textTransform:'uppercase',color:'var(--gold)',marginBottom:6}}>Explore Victoria your way</p>
        <h1 className="font-display" style={{fontSize:'clamp(2.2rem,7vw,5.5rem)',lineHeight:0.9}}>VICTORIA<br /><span style={{color:'var(--gold)'}}>CITY TOURS</span></h1>
        <p style={{color:'rgba(255,255,255,0.4)',fontSize:'clamp(12px,1.8vw,14px)',maxWidth:480,lineHeight:1.7,marginTop:8}}>Pick a tour below to see all the stops. Every tour is fully customizable.</p>
      </div>
    </section>

    {/* ── PACKAGE CARDS ── */}
    <section style={{background:'#0a0a0a',padding:'clamp(40px,6vw,64px) 0'}}>
      <div className="wrap">
        <div style={{textAlign:'center',marginBottom:32}}>
          <div className="gold-bar" style={{margin:'0 auto 10px'}} />
          <p style={{fontSize:10,fontWeight:700,letterSpacing:'0.14em',textTransform:'uppercase',color:'var(--gold)',marginBottom:6}}>Choose your tour</p>
          <h2 className="font-display" style={{fontSize:'clamp(1.6rem,4vw,3rem)',lineHeight:0.95,marginBottom:8}}>HOW LONG WOULD YOU LIKE?</h2>
          <p style={{fontSize:'clamp(12px,1.5vw,14px)',color:'rgba(255,255,255,0.3)',maxWidth:500,margin:'0 auto'}}>Click a tour to see all the stops with day and night photos.</p>
        </div>

        <div className="pkg-cards">
          {packages.map(p => (
            <div key={p.id} className={`pkg-card${activePkg?.id===p.id?' active':''}`} onClick={()=>selectPkg(p)}>
              <div className="pkg-card-img">
                <Image src={p.img} alt={p.tag} fill style={{objectFit:'cover',transition:'transform 0.5s'}} unoptimized
                  onMouseEnter={e=>e.currentTarget.style.transform='scale(1.06)'}
                  onMouseLeave={e=>e.currentTarget.style.transform='scale(1)'}
                />
                <div style={{position:'absolute',inset:0,background:'linear-gradient(0deg,rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.05) 50%)'}} />
                <div className="pkg-card-hours">
                  <span>{p.label}</span>
                  <small>{p.id==='full' ? 'day' : p.label==='1' ? 'hour' : 'hours'}</small>
                </div>
              </div>
              <div className="pkg-card-body">
                <h3 style={{fontSize:'clamp(14px,1.8vw,17px)',fontWeight:700,color:'#e8e8e8',marginBottom:6,lineHeight:1.2}}>{p.tag}</h3>
                <p style={{fontSize:'clamp(11px,1.3vw,12px)',color:'rgba(255,255,255,0.35)',lineHeight:1.65,marginBottom:10}}>{p.desc}</p>
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:6}}>
                  <span style={{fontSize:10,color:'rgba(245,166,35,0.7)',fontWeight:600}}>{p.highlight}</span>
                  <span style={{fontSize:10,fontWeight:700,letterSpacing:'0.06em',textTransform:'uppercase',color:'var(--gold)',display:'flex',alignItems:'center',gap:4}}>
                    View Stops
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{marginTop:20,textAlign:'center'}}>
          <p style={{fontSize:'clamp(11px,1.3vw,12px)',color:'rgba(255,255,255,0.2)',lineHeight:1.7}}>
            <strong style={{color:'rgba(245,166,35,0.5)'}}>ALL TOURS are customizable</strong> — tell Jay what you want to see, and he will make it happen.
          </p>
        </div>
      </div>
    </section>

    {/* ── TOUR STOPS (shows after selecting a package) ── */}
    {activePkg && (
      <section ref={stopsRef} style={{background:'#080808',borderTop:'2px solid rgba(245,166,35,0.15)',padding:'clamp(32px,5vw,52px) 0 clamp(48px,7vw,72px)'}}>
        <div className="wrap">

          {/* Sticky sub-bar: day/night + quick switch */}
          <div style={{position:'sticky',top:60,zIndex:40,background:'rgba(8,8,8,0.97)',backdropFilter:'blur(10px)',padding:'14px 0 16px',marginBottom:20,borderBottom:'1px solid #1a1a1a'}}>
            <div style={{display:'flex',flexDirection:'column',gap:12,alignItems:'center'}}>
              {/* Day / Night toggle */}
              <div style={{display:'flex',gap:3,background:'#111',border:'1px solid #222',borderRadius:4,padding:3}}>
                {(['day','night'] as const).map(m=>(
                  <button key={m} onClick={()=>setMode(m)} style={{padding:'7px 22px',borderRadius:2,fontSize:11,fontWeight:700,letterSpacing:'0.08em',textTransform:'uppercase',border:'none',cursor:'pointer',transition:'all 0.2s',background:mode===m ? 'var(--gold)' : 'transparent',color:mode===m ? '#000' : '#555'}}>
                    {m==='day' ? '☀ Day' : '☾ Night'}
                  </button>
                ))}
              </div>
              {/* Quick switch between packages */}
              <div className="pkg-mini-nav">
                {packages.map(p=>(
                  <div key={p.id} className={`pkg-mini${activePkg.id===p.id?' active':''}`} onClick={()=>setActivePkg(p)}>
                    {p.hours}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Package title */}
          <div style={{textAlign:'center',marginBottom:20}}>
            <h2 className="font-display" style={{fontSize:'clamp(1.4rem,4vw,2.6rem)',lineHeight:1,marginBottom:6,color:'#e8e8e8'}}>
              {activePkg.tag}
            </h2>
            <p style={{fontSize:'clamp(12px,1.5vw,14px)',color:'rgba(255,255,255,0.35)',maxWidth:580,margin:'0 auto 4px',lineHeight:1.7}}>{activePkg.desc}</p>
            <p style={{fontSize:'clamp(11px,1.3vw,12px)',color:'rgba(255,255,255,0.22)'}}>{activePkg.stops.filter(n=>allStops[n]).length} stops with photos</p>
          </div>

          {/* Stops grid */}
          <div className="stops-grid">
            {activePkg.stops.map(name => {
              const imgs = allStops[name]
              if (!imgs) return null
              const src = mode === 'day' ? imgs.day : imgs.night
              return (
                <div key={name} style={{position:'relative',overflow:'hidden',height:'clamp(140px,18vw,200px)',background:'#111'}}>
                  <Image src={src} alt={name} fill style={{objectFit:'cover',transition:'transform 0.4s'}} unoptimized
                    onMouseEnter={e=>e.currentTarget.style.transform='scale(1.06)'}
                    onMouseLeave={e=>e.currentTarget.style.transform='scale(1)'}
                  />
                  <div style={{position:'absolute',inset:0,background:'linear-gradient(0deg,rgba(0,0,0,0.85) 0%,rgba(0,0,0,0.05) 55%)'}} />
                  <div style={{position:'absolute',top:6,right:6}}>
                    <span style={{fontSize:8,fontWeight:700,letterSpacing:'0.06em',textTransform:'uppercase',background:mode==='day'?'rgba(255,255,255,0.15)':'rgba(245,166,35,0.25)',color:mode==='day'?'#fff':'var(--gold)',padding:'2px 7px',borderRadius:2,backdropFilter:'blur(4px)'}}>{mode==='day'?'☀':'☾'}</span>
                  </div>
                  <div style={{position:'absolute',bottom:0,left:0,right:0,padding:'10px 12px'}}>
                    <div style={{fontSize:'clamp(11px,1.4vw,13px)',fontWeight:700,color:'#fff',lineHeight:1.3}}>{name}</div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Book button */}
          <div style={{marginTop:24,padding:'18px 20px',background:'rgba(245,166,35,0.04)',border:'1px solid rgba(245,166,35,0.15)',borderRadius:4,textAlign:'center'}}>
            <div style={{display:'flex',gap:10,justifyContent:'center',flexWrap:'wrap'}}>
              <a href={`https://wa.me/12509868284?text=Hi Jay, I'd like to book the ${activePkg.tag}. Please share pricing.`} className="btn-primary" style={{fontSize:13,padding:'12px 28px'}}>
                Book for {activePkg.hours}
              </a>
              <a href={`sms:+12509868284?body=Hi Jay, I'd like to book the ${activePkg.tag}.`} className="btn-secondary" style={{fontSize:12,padding:'10px 20px'}}>
                💬 Text
              </a>
              <a href={`mailto:1cab.victoria@gmail.com?subject=${activePkg.tag} Enquiry&body=Hi Jay, I'd like to book the ${activePkg.tag}. Please share pricing.`} className="btn-secondary" style={{fontSize:12,padding:'10px 20px'}}>
                ✉ Email
              </a>
            </div>
          </div>

          {/* Back to packages */}
          <div style={{textAlign:'center',marginTop:16}}>
            <button onClick={()=>{setActivePkg(null);window.scrollTo({top:0,behavior:'smooth'})}} style={{background:'none',border:'1px solid #2a2a2a',borderRadius:4,padding:'8px 20px',color:'#555',fontSize:11,fontWeight:700,letterSpacing:'0.06em',textTransform:'uppercase',cursor:'pointer',transition:'all 0.2s'}}
              onMouseEnter={e=>{e.currentTarget.style.borderColor='rgba(245,166,35,0.3)';e.currentTarget.style.color='var(--gold)'}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor='#2a2a2a';e.currentTarget.style.color='#555'}}
            >
              ← Back to all tours
            </button>
          </div>
        </div>
      </section>
    )}

    {/* ── CTA ── */}
    <section style={{background:'#0a0a0a',padding:'clamp(40px,6vw,60px) 24px',borderTop:'1px solid #1a1a1a',textAlign:'center'}}>
      <h2 className="font-display" style={{fontSize:'clamp(1.8rem,5vw,3.5rem)',marginBottom:10}}>READY TO EXPLORE?</h2>
      <p style={{color:'rgba(255,255,255,0.3)',marginBottom:24,fontSize:'clamp(12px,1.8vw,13px)',maxWidth:440,margin:'0 auto 24px'}}>1 to 20 passengers. Contact Jay for pricing and custom routes.</p>
      <div style={{display:'flex',gap:10,justifyContent:'center',flexWrap:'wrap'}}>
        <a href="https://wa.me/12509868284?text=Hi Jay, I'd like to book a Victoria city tour!" className="btn-primary">Book via WhatsApp</a>
        <a href="sms:+12509868284" className="btn-secondary">💬 Text</a>
        <a href="mailto:1cab.victoria@gmail.com" className="btn-secondary">✉ Email</a>
        <a href="tel:+12509868284" className="btn-secondary">📞 Call</a>
      </div>
    </section>
    </>
  )
}