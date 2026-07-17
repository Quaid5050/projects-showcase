"use client";
import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { spices, categories } from "../data/spices";
import SpiceCard from "../components/SpiceCard";
import OrderForm from "../components/OrderForm";

function ShopContent() {
  const params = useSearchParams();
  const pre = params.get("order") || undefined;
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");

  const filtered = spices.filter(s=>{
    const mc = cat==="All"||s.category===cat;
    const mq = s.name.toLowerCase().includes(q.toLowerCase())||s.hindiName.toLowerCase().includes(q.toLowerCase());
    return mc&&mq;
  });

  return (
    <div className="container" style={{paddingTop:"3.5rem",paddingBottom:"4rem"}}>
      <div style={{marginBottom:"2.5rem"}}>
        <span className="sec-label">All Products</span>
        <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:"2.5rem",color:"#2C1810",margin:"0.4rem 0 0.3rem"}}>Our Spice Collection</h1>
        <p style={{color:"rgba(44,24,16,0.5)",fontSize:"0.9rem"}}>20 authentic Indian spices — pure, fresh, and ready to ship.</p>
      </div>

      <div className="shop-layout">
        <div>
          <div className="filter-bar">
            <input className="search-input" type="text" placeholder="Search spices..." value={q} onChange={e=>setQ(e.target.value)}/>
            {categories.map(c=>(
              <button key={c} className={`filter-btn${cat===c?" active":""}`} onClick={()=>setCat(c)}>{c}</button>
            ))}
          </div>
          <div className="cards-grid" style={{marginTop:0}}>
            {filtered.map(s=><SpiceCard key={s.id} spice={s}/>)}
          </div>
          {!filtered.length&&<p style={{textAlign:"center",padding:"4rem",color:"rgba(44,24,16,0.35)",fontFamily:"'Playfair Display',serif",fontSize:"1.2rem"}}>No spices found.</p>}
        </div>
        <div>
          <div style={{position:"sticky",top:"84px"}}>
            <OrderForm preselectedId={pre}/>
            <div className="sidebar-note">Orders over <strong>$100</strong> get <strong>15% off</strong> automatically applied.</div>
            <div className="sidebar-phone">
              <p>Prefer to order by phone?</p>
              <a href="tel:+14372437862">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.0 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                +1 437 243 7862
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ShopPage() {
  return <Suspense fallback={<div style={{minHeight:"60vh",display:"flex",alignItems:"center",justifyContent:"center",color:"rgba(44,24,16,0.4)"}}>Loading...</div>}><ShopContent/></Suspense>;
}
