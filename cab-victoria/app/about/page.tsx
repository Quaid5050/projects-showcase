'use client'
import Image from 'next/image'

const Tick = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2.5" style={{flexShrink:0,marginTop:3}}><polyline points="20 6 9 17 4 12"/></svg>
const Star = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="var(--gold)"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>

export default function AboutPage() {
  return (
    <>
    <style>{`
      .about-story  { display:grid; grid-template-columns:1fr 1fr; gap:clamp(24px,5vw,56px); align-items:center; }
      .about-mosaic { display:grid; grid-template-columns:1fr 1fr; grid-template-rows:auto auto; gap:3px; }
      .about-stats  { display:grid; grid-template-columns:repeat(4,1fr); gap:3px; margin-bottom:clamp(24px,4vw,40px); }
      .about-vals   { display:grid; grid-template-columns:1fr 1fr; gap:3px; }
      .about-bottom { display:grid; grid-template-columns:1fr 1fr; gap:clamp(24px,5vw,48px); align-items:start; }
      .area-grid    { display:grid; grid-template-columns:1fr 1fr; gap:10px; }

      @media(max-width:900px){
        .about-story  { grid-template-columns:1fr; }
        .about-bottom { grid-template-columns:1fr; }
        .about-stats  { grid-template-columns:1fr 1fr; }
        /* mosaic: show as a row of 3 on tablet */
        .about-mosaic { grid-template-columns:repeat(3,1fr); grid-template-rows:auto; }
        .about-mosaic > div:first-child { grid-row:unset; min-height:150px !important; }
      }
      @media(max-width:640px){
        .about-vals  { grid-template-columns:1fr; }
        .area-grid   { grid-template-columns:1fr; }
        .about-mosaic { grid-template-columns:1fr 1fr; }
        .about-mosaic > div:first-child { grid-column:span 2; min-height:160px !important; }
      }
      @media(max-width:420px){
        .about-stats { grid-template-columns:1fr 1fr; }
      }
    `}</style>

    {/* Hero */}
    <section style={{height:'clamp(240px,40vw,460px)',position:'relative',display:'flex',alignItems:'flex-end',paddingBottom:40,overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0}}>
        <Image src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1600&q=85" alt="Jay" fill style={{objectFit:'cover',objectPosition:'center 40%'}} unoptimized priority />
        <div style={{position:'absolute',inset:0,background:'linear-gradient(0deg,rgba(0,0,0,0.96) 0%,rgba(0,0,0,0.4) 50%,rgba(0,0,0,0.1) 100%)'}} />
      </div>
      <div className="wrap page-hero" style={{position:'relative',zIndex:1,width:'100%'}}>
        <div className="gold-bar" />
        <p style={{fontSize:10,fontWeight:700,letterSpacing:'0.14em',textTransform:'uppercase',color:'var(--gold)',marginBottom:6}}>The person behind the wheel</p>
        <h1 className="font-display" style={{fontSize:'clamp(2.5rem,8vw,7rem)',lineHeight:0.88}}>ABOUT<br /><span style={{color:'var(--gold)'}}>JAY</span></h1>
        <p style={{color:'rgba(255,255,255,0.4)',maxWidth:420,lineHeight:1.8,marginTop:10,fontSize:'clamp(12px,1.8vw,15px)'}}>Personal, professional, and passionate about showing you the best of Victoria, BC.</p>
      </div>
    </section>

    {/* Story */}
    <section style={{background:'#0a0a0a',padding:'clamp(40px,6vw,72px) 0'}}>
      <div className="wrap">
        <div className="about-story">
          <div>
            <div className="gold-bar" />
            <h2 className="font-display" style={{fontSize:'clamp(1.8rem,3vw,2.8rem)',lineHeight:0.95,marginBottom:6}}>JAYDEEP MOHAN</h2>
            <p style={{fontSize:11,color:'var(--gold)',letterSpacing:'0.08em',textTransform:'uppercase',marginBottom:22}}>Personal Driver · Victoria, BC</p>
            <p style={{fontSize:'clamp(13px,1.8vw,14px)',color:'rgba(255,255,255,0.45)',lineHeight:1.9,marginBottom:14}}>Hi, I'm Jay — a dedicated personal driver based in Victoria, BC. I built 1Cab Victoria on a simple belief: every ride should feel safe, comfortable, and personal.</p>
            <p style={{fontSize:'clamp(13px,1.8vw,14px)',color:'rgba(255,255,255,0.45)',lineHeight:1.9,marginBottom:14}}>Whether you need a quick airport run, a stretch limousine for your wedding, a wheelchair-accessible vehicle, or a guided city tour — I handle it all with the same professionalism and care.</p>
            <p style={{fontSize:'clamp(13px,1.8vw,14px)',color:'rgba(255,255,255,0.45)',lineHeight:1.9,marginBottom:26}}>Victoria is a city I know deeply, and I love sharing it with visitors. The tours I run aren't just rides — they're experiences tailored to what you want to see.</p>
            <div style={{display:'flex',gap:10,flexWrap:'wrap'}}>
              <a href="https://wa.me/12509868284" className="btn-primary">Book with Jay</a>
              <a href="https://www.google.com/maps/search/1cab+victoria" target="_blank" rel="noreferrer" className="btn-secondary">Leave a Review</a>
            </div>
          </div>

          {/* Photo mosaic */}
          <div className="about-mosaic">
            <div style={{position:'relative',overflow:'hidden',gridRow:'span 2',minHeight:'clamp(180px,26vw,300px)'}}>
              <Image src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&q=80" alt="On the road" fill style={{objectFit:'cover',filter:'brightness(0.72)'}} unoptimized />
              <div style={{position:'absolute',inset:0,background:'linear-gradient(0deg,rgba(0,0,0,0.65) 0%,transparent 50%)'}} />
              <div style={{position:'absolute',bottom:12,left:12}}>
                <div style={{fontSize:12,fontWeight:700,color:'#fff'}}>On the road</div>
                <div style={{fontSize:9,color:'var(--gold)',fontWeight:700,letterSpacing:'0.06em',textTransform:'uppercase'}}>Victoria · BC</div>
              </div>
            </div>
            <div style={{position:'relative',overflow:'hidden',minHeight:'clamp(85px,10vw,145px)'}}>
              <Image src="https://images.unsplash.com/photo-1688713866885-4cb1310b4939?q=80" alt="Inner Harbour" fill style={{objectFit:'cover',filter:'brightness(0.62)'}} unoptimized />
              <div style={{position:'absolute',inset:0,background:'rgba(0,0,0,0.38)'}} />
              <div style={{position:'absolute',bottom:8,left:9,fontSize:10,color:'rgba(255,255,255,0.65)'}}>Inner Harbour</div>
            </div>
            <div style={{position:'relative',overflow:'hidden',minHeight:'clamp(85px,10vw,145px)'}}>
              <Image src="https://images.unsplash.com/photo-1558449709-9215b1ec91de?q=80" alt="Butchart Gardens" fill style={{objectFit:'cover',filter:'brightness(0.62)'}} unoptimized />
              <div style={{position:'absolute',inset:0,background:'rgba(0,0,0,0.38)'}} />
              <div style={{position:'absolute',bottom:8,left:9,fontSize:10,color:'rgba(255,255,255,0.65)'}}>Butchart Gardens</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Stats + Values */}
    <section style={{background:'#080808',padding:'clamp(40px,6vw,72px) 0',borderTop:'1px solid #1a1a1a'}}>
      <div className="wrap">
        <div className="about-stats">
          {[['7+','Vehicle types'],['1–20','Per trip'],['24/7','Available'],['100%','Personal']].map(([n,l])=>(
            <div key={l} style={{background:'#111',border:'1px solid #1a1a1a',padding:'clamp(16px,2.5vw,28px)',textAlign:'center'}}>
              <div className="font-display" style={{fontSize:'clamp(1.8rem,4vw,3rem)',color:'var(--gold)',lineHeight:1,marginBottom:4}}>{n}</div>
              <div style={{fontSize:'clamp(9px,1.2vw,10px)',color:'#444',lineHeight:1.5}}>{l}</div>
            </div>
          ))}
        </div>

        <div className="about-vals">
          {[
            {t:"On-time, every time",d:"Flights tracked in real time. Routes planned ahead. Jay arrives early — always.",img:"https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=75"},
            {t:"Personal, not corporate",d:"You deal directly with Jay. No call centres, no dispatchers. Text him, he texts back.",img:"https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=75"},
            {t:"All mobility needs",d:"Wheelchair accessible vehicle available for every service. No passenger left behind.",img:"https://images.unsplash.com/photo-1604357209793-fca5dca89f97?w=600&q=75"},
            {t:"Assured service",d:"That line on the business card is a promise. Whatever it takes — Jay shows up.",img:"https://images.unsplash.com/photo-1519999482648-25049ddd37b1?w=600&q=75"},
          ].map(v=>(
            <div key={v.t} style={{position:'relative',height:'clamp(130px,16vw,210px)',overflow:'hidden',display:'flex',alignItems:'flex-end'}}>
              <Image src={v.img} alt={v.t} fill style={{objectFit:'cover',filter:'brightness(0.25)'}} unoptimized />
              <div style={{position:'absolute',inset:0,background:'linear-gradient(0deg,rgba(0,0,0,0.92) 0%,transparent 60%)'}} />
              <div style={{position:'relative',zIndex:1,padding:'clamp(12px,2.5vw,22px)'}}>
                <div style={{display:'flex',gap:9,alignItems:'flex-start',marginBottom:5}}>
                  <Tick />
                  <h3 className="font-display" style={{fontSize:'clamp(1rem,1.8vw,1.3rem)',lineHeight:1,color:'#e8e8e8'}}>{v.t}</h3>
                </div>
                <p style={{fontSize:'clamp(10px,1.3vw,12px)',color:'rgba(255,255,255,0.35)',lineHeight:1.7,paddingLeft:22}}>{v.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Service area + Quote */}
    <section style={{background:'#0a0a0a',padding:'clamp(40px,6vw,72px) 0',borderTop:'1px solid #1a1a1a'}}>
      <div className="wrap">
        <div className="about-bottom">
          <div>
            <div className="gold-bar" />
            <h3 className="font-display" style={{fontSize:'clamp(1.8rem,3vw,2.5rem)',marginBottom:20}}>SERVICE AREA</h3>
            <div className="area-grid">
              {['Victoria Intl Airport (YYJ)','BC Ferries — Swartz Bay','Greater Victoria area','Saanich & Oak Bay','Langford & Colwood','Sidney & Peninsula','All BC outstation routes','Anywhere you need to go'].map(a=>(
                <div key={a} style={{display:'flex',gap:9,alignItems:'flex-start',fontSize:'clamp(12px,1.5vw,13px)',color:'rgba(255,255,255,0.36)',lineHeight:1.5}}>
                  <div style={{width:5,height:5,borderRadius:'50%',background:'var(--gold)',flexShrink:0,marginTop:6}} />{a}
                </div>
              ))}
            </div>
          </div>

          <div style={{background:'rgba(245,166,35,0.04)',border:'1px solid rgba(245,166,35,0.14)',padding:'clamp(20px,3.5vw,40px)',display:'flex',flexDirection:'column',gap:14}}>
            <div style={{fontSize:50,color:'rgba(245,166,35,0.16)',fontFamily:'serif',lineHeight:0.8}}>"</div>
            <blockquote className="font-display" style={{fontSize:'clamp(1.2rem,2.2vw,1.8rem)',lineHeight:1.2,color:'#e0e0e0'}}>"ASSURED SERVICE AT ALL TIMES"</blockquote>
            <div style={{width:36,height:1,background:'var(--gold)'}} />
            <p style={{fontSize:10,color:'rgba(255,255,255,0.22)',letterSpacing:'0.1em',textTransform:'uppercase'}}>Jaydeep Mohan · 1Cab Victoria</p>
            <div style={{display:'flex',gap:3}}>{[1,2,3,4,5].map(i=><Star key={i} />)}</div>
            <a href="https://www.google.com/maps/search/1cab+victoria" target="_blank" rel="noreferrer" className="btn-secondary" style={{fontSize:11,padding:'10px 18px',width:'fit-content'}}>Leave a Google Review</a>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
