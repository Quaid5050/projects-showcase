"use client";
import Link from "next/link";
const brands=[
  {name:"3M",color:"#e8001d",font:"'Orbitron',sans-serif",size:"22px"},
  {name:"XPEL",color:"#f5a623",font:"'Orbitron',sans-serif",size:"18px"},
  {name:"BlackVue",color:"#4a9eff",font:"'Rajdhani',sans-serif",size:"24px"},
  {name:"MICHELIN",color:"#003189",font:"Georgia,serif",size:"18px"},
  {name:"Thinkware",color:"#2c9e4a",font:"'Rajdhani',sans-serif",size:"22px"},
  {name:"Pirelli",color:"#f5a623",font:"'Times New Roman',serif",size:"28px"},
  {name:"BRIDGESTONE",color:"#e8001d",font:"sans-serif",size:"15px"},
  {name:"Viofo",color:"#4a9eff",font:"'Rajdhani',sans-serif",size:"24px"},
];
export default function BrandsStrip(){
  return(
    <section style={{background:"#0d0d0d",borderTop:"1px solid rgba(255,255,255,0.05)",borderBottom:"1px solid rgba(255,255,255,0.05)",padding:"0"}}>
      <div style={{display:"grid",gridTemplateColumns:"repeat(8,1fr)",borderLeft:"1px solid rgba(255,255,255,0.05)"}} className="brands-grid">
        {brands.map(b=>(
          <Link key={b.name} href="/brands" data-hover style={{padding:"40px 12px",borderRight:"1px solid rgba(255,255,255,0.05)",display:"flex",alignItems:"center",justifyContent:"center",filter:"grayscale(1) brightness(0.35)",transition:"all .45s",textDecoration:"none"}}
          onMouseEnter={e=>{e.currentTarget.style.filter="grayscale(0) brightness(1)";e.currentTarget.style.background="rgba(255,255,255,0.03)"}}
          onMouseLeave={e=>{e.currentTarget.style.filter="grayscale(1) brightness(0.35)";e.currentTarget.style.background="transparent"}}>
            <span style={{fontFamily:b.font,fontSize:b.size,fontWeight:"bold",letterSpacing:"1px",color:b.color,textAlign:"center"}}>{b.name}</span>
          </Link>
        ))}
      </div>
      <style>{`@media(max-width:900px){.brands-grid{grid-template-columns:repeat(4,1fr)!important}}@media(max-width:560px){.brands-grid{grid-template-columns:repeat(2,1fr)!important}}`}</style>
    </section>
  );
}