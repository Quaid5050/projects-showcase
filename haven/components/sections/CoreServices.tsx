"use client";

// Marquee strip showing all Haven Customs services
const items = [
  "Ceramic Tint","PPF","Tail Lights","Ceramic Coating","Dashcams",
  "CarPlay","Ambient Lights","Wheel Lights","Starlights","Tire Services",
  "Tint","Car Protection","Custom Upgrades",
];

export default function CoreServices() {
  const doubled = [...items, ...items];
  return (
    <div style={{background:"#e8001d",padding:"14px 0",overflow:"hidden",borderTop:"1px solid rgba(255,255,255,0.15)",borderBottom:"1px solid rgba(255,255,255,0.15)"}}>
      <div style={{display:"flex",animation:"marquee 22s linear infinite",width:"max-content"}} className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} style={{fontFamily:"'Orbitron',sans-serif",fontSize:"10px",letterSpacing:"4px",textTransform:"uppercase",color:"#fff",padding:"0 32px",whiteSpace:"nowrap",display:"inline-flex",alignItems:"center",gap:"16px"}}>
            {item}<span style={{opacity:.5}}>//</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
    </div>
  );
}
