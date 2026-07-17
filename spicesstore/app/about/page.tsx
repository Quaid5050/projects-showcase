import Link from "next/link";
export default function AboutPage() {
  return (
    <div className="container" style={{paddingTop:"4.5rem",paddingBottom:"5rem"}}>
      <div style={{maxWidth:"38rem",marginBottom:"4rem"}}>
        <span className="sec-label">Our Story</span>
        <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(2rem,4vw,3.2rem)",color:"#2C1810",margin:"0.5rem 0 1rem",lineHeight:1.1}}>Born from a love of real cooking</h1>
        <p style={{color:"rgba(44,24,16,0.6)",fontSize:"1.05rem",lineHeight:1.78}}>We started Spice Route because we could not find Indian spices in Canada that tasted the way they should. Everything was old, faded, or mixed with fillers. So we went back to the source.</p>
      </div>

      <div className="about-two-col" style={{marginBottom:"5rem"}}>
        {/* Illustration */}
        <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
          <svg width="340" height="320" viewBox="0 0 340 320" fill="none">
            <circle cx="170" cy="160" r="145" fill="#FFF8E8" stroke="#E8A020" strokeWidth="1.5" strokeDasharray="12 6"/>
            {/* Spice arrangement */}
            <circle cx="170" cy="160" r="95" fill="#E8A020" opacity=".08"/>
            <circle cx="170" cy="160" r="62" fill="#E8A020" opacity=".15"/>
            <circle cx="170" cy="160" r="38" fill="#E8A020" opacity=".28"/>
            <circle cx="170" cy="160" r="20" fill="#E8A020" opacity=".55"/>
            <circle cx="170" cy="160" r="10" fill="#C4622D"/>
            {/* Orbiting spice items */}
            {[0,51,102,153,204,255,306].map((a,i)=>(
              <g key={i}>
                <circle cx={170+95*Math.cos(a*Math.PI/180)} cy={160+95*Math.sin(a*Math.PI/180)} r="12" fill={["#E8A020","#C4622D","#6B7C5C","#8B6914","#E8A020","#C4622D","#8B6914"][i]} opacity=".65"/>
                <circle cx={170+95*Math.cos(a*Math.PI/180)} cy={160+95*Math.sin(a*Math.PI/180)} r="5" fill="#FDF6EC" opacity=".7"/>
              </g>
            ))}
            {/* Farm icon top */}
            <path d="M148 80 L170 55 L192 80 L188 80 L188 100 L152 100 L152 80Z" fill="#E8A020" opacity=".5"/>
            <rect x="162" y="87" width="16" height="13" rx="1" fill="#FDF6EC" opacity=".6"/>
            {/* Leaf decoration */}
            <path d="M80 180 Q68 162 76 145 Q96 152 80 180Z" fill="#7A9E6B" opacity=".55"/>
            <path d="M76 145 L80 165" stroke="#5A7A4A" strokeWidth="1.5" opacity=".5"/>
            <path d="M256 140 Q270 122 260 106 Q240 115 256 140Z" fill="#7A9E6B" opacity=".5"/>
          </svg>
        </div>

        <div>
          <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"2rem",color:"#2C1810",marginBottom:"1rem"}}>Straight from the farm</h2>
          <p style={{color:"rgba(44,24,16,0.6)",fontSize:"0.9rem",lineHeight:1.78,marginBottom:"0.9rem"}}>Every spice is sourced directly — turmeric from Tamil Nadu, cardamom from Kerala, saffron from Kashmir. We work with small-scale farmers who grow using traditional methods.</p>
          <p style={{color:"rgba(44,24,16,0.6)",fontSize:"0.9rem",lineHeight:1.78,marginBottom:"1.5rem"}}>No middlemen. No warehousing for years. Just fresh spices, packed when you order, shipped to your door.</p>
          <div className="about-stats-grid">
            {[{n:"20+",l:"Spice varieties"},{n:"100%",l:"Natural, no fillers"},{n:"24hr",l:"Order confirmation"},{n:"CA",l:"Delivered across Canada"}].map(s=>(
              <div key={s.n} className="stat-box"><div className="stat-box-n">{s.n}</div><div className="stat-box-l">{s.l}</div></div>
            ))}
          </div>
        </div>
      </div>

      {/* Values */}
      <div style={{background:"#2C1810",borderRadius:"22px",padding:"4rem 3rem"}}>
        <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"2rem",color:"#FDF6EC",textAlign:"center",marginBottom:0}}>What we stand for</h2>
        <div className="values-grid">
          {[
            {t:"Purity",d:"We never add fillers, artificial colouring, or preservatives. What is in the packet is what grows on the farm.",
              ic:<svg width="34" height="34" viewBox="0 0 34 34" fill="none"><path d="M17 4C17 4 8 11 8 19C8 23.4 12.1 27 17 27C21.9 27 26 23.4 26 19C26 11 17 4 17 4Z" fill="#E8A020" opacity=".75"/><circle cx="17" cy="19" r="5" fill="#FDF6EC"/><circle cx="17" cy="19" r="2" fill="#E8A020"/></svg>},
            {t:"Freshness",d:"We pack close to the order date, not months before. Fresh spices smell different — you will notice it immediately.",
              ic:<svg width="34" height="34" viewBox="0 0 34 34" fill="none"><circle cx="17" cy="17" r="12" stroke="#E8A020" strokeWidth="2"/><path d="M17 10v7l5 3" stroke="#E8A020" strokeWidth="2.2" strokeLinecap="round"/></svg>},
            {t:"Honesty",d:"If a spice is out of season or stock, we tell you. We would rather delay an order than send something subpar.",
              ic:<svg width="34" height="34" viewBox="0 0 34 34" fill="none"><path d="M9 17l6 6 10-10" stroke="#E8A020" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="17" cy="17" r="14" stroke="#E8A020" strokeWidth="2"/></svg>},
          ].map(v=>(
            <div key={v.t}>
              <div className="value-icon">{v.ic}</div>
              <h3 className="value-title">{v.t}</h3>
              <p className="value-desc">{v.d}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center" style={{marginTop:"4rem"}}>
        <h3 style={{fontFamily:"'Playfair Display',serif",fontSize:"1.75rem",color:"#2C1810",marginBottom:"0.75rem"}}>Want to know more?</h3>
        <p style={{color:"rgba(44,24,16,0.5)",fontSize:"0.9rem",marginBottom:"1.5rem"}}>We are always happy to talk spices — call, email, or just place an order and see for yourself.</p>
        <div style={{display:"flex",gap:"1rem",justifyContent:"center",flexWrap:"wrap"}}>
          <Link href="/shop" className="btn-dark">Shop Now</Link>
          <Link href="/contact" className="btn-outline-dark">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}
