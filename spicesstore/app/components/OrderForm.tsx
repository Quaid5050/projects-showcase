"use client";
import { useState } from "react";
import { spices } from "../data/spices";

interface Item { spiceId: string; quantity: number; }

export default function OrderForm({ preselectedId }: { preselectedId?: string }) {
  const [items, setItems] = useState<Item[]>([{ spiceId: preselectedId||"", quantity: 1 }]);
  const [form, setForm] = useState({ name:"", email:"", phone:"", address:"", notes:"" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const addItem = () => setItems(p=>[...p,{spiceId:"",quantity:1}]);
  const removeItem = (i:number) => setItems(p=>p.filter((_,x)=>x!==i));
  const updateItem = (i:number, k:keyof Item, v:string|number) => setItems(p=>{const u=[...p];u[i]={...u[i],[k]:v};return u;});

  const subtotal = items.reduce((s,it)=>{const sp=spices.find(x=>x.id===it.spiceId);return s+(sp?sp.price*it.quantity:0);},0);
  const disc15 = subtotal>=100; const discAmt = disc15 ? subtotal*0.15 : 0; const total = subtotal-discAmt;

  const handleSubmit = async (e:React.FormEvent) => {
    e.preventDefault(); setError("");
    const valid = items.filter(i=>i.spiceId&&i.quantity>0);
    if(!valid.length){setError("Please select at least one spice.");return;}
    setLoading(true);
    try {
      const r = await fetch("/api/order",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...form,items:valid,subtotal,discount:discAmt,total})});
      if(r.ok) setSubmitted(true);
      else setError("Something went wrong. Please call us at +1 437 243 7862");
    } catch {setError("Network error. Please call +1 437 243 7862");}
    setLoading(false);
  };

  if(submitted) return (
    <div className="order-box"><div className="success-box">
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" style={{margin:"0 auto",display:"block"}}>
        <circle cx="32" cy="32" r="31" fill="#6B7C5C" opacity="0.12"/>
        <path d="M18 32l10 10 18-18" stroke="#6B7C5C" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <h3 className="success-title">Order Received!</h3>
      <p className="success-desc">Thank you, <strong>{form.name}</strong>! We will confirm via email at <strong>{form.email}</strong> within 24 hours.</p>
      {disc15&&<div style={{marginTop:"1rem",background:"rgba(232,160,32,0.1)",borderRadius:"10px",padding:"0.65rem 1rem"}}>
        <p style={{color:"#C4622D",fontSize:"0.875rem",fontWeight:700}}>15% discount applied! You saved ${discAmt.toFixed(2)}</p>
      </div>}
      <p style={{marginTop:"1.25rem",fontSize:"0.78rem",color:"rgba(44,24,16,0.4)"}}>Questions? <a href="tel:+14372437862" style={{color:"#E8A020"}}>+1 437 243 7862</a></p>
    </div></div>
  );

  return (
    <div className="order-box">
      <div className="order-box-head"><h3>Place Your Order</h3><p>We confirm via email within 24 hours</p></div>
      <form onSubmit={handleSubmit} className="order-box-body">
        <div>
          <span className="form-label">Your Details</span>
          <div className="form-row-2" style={{marginBottom:"0.6rem"}}>
            <input required className="form-input" type="text" placeholder="Full name *" value={form.name} onChange={e=>setForm(p=>({...p,name:e.target.value}))}/>
            <input required className="form-input" type="email" placeholder="Email *" value={form.email} onChange={e=>setForm(p=>({...p,email:e.target.value}))}/>
          </div>
          <div className="form-row-2">
            <input className="form-input" type="tel" placeholder="Phone" value={form.phone} onChange={e=>setForm(p=>({...p,phone:e.target.value}))}/>
            <input required className="form-input" type="text" placeholder="Delivery address *" value={form.address} onChange={e=>setForm(p=>({...p,address:e.target.value}))}/>
          </div>
        </div>
        <div>
          <span className="form-label">Select Spices</span>
          {items.map((item,i)=>(
            <div key={i} className="spice-row">
              <select className="form-input" style={{flex:1}} value={item.spiceId} onChange={e=>updateItem(i,"spiceId",e.target.value)}>
                <option value="">— Select a spice —</option>
                {spices.map(s=><option key={s.id} value={s.id}>{s.name} ({s.weight}) — ${s.price}</option>)}
              </select>
              <input className="form-input spice-qty" type="number" min={1} max={20} value={item.quantity} onChange={e=>updateItem(i,"quantity",parseInt(e.target.value)||1)}/>
              {items.length>1&&<button type="button" className="remove-btn" onClick={()=>removeItem(i)}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M15 9l-6 6M9 9l6 6"/></svg>
              </button>}
            </div>
          ))}
          <button type="button" className="add-spice-btn" onClick={addItem}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></svg>
            Add another spice
          </button>
        </div>
        <textarea className="form-input" rows={2} placeholder="Special instructions or notes?" value={form.notes} onChange={e=>setForm(p=>({...p,notes:e.target.value}))}/>
        {subtotal>0&&<div className="order-summary">
          <div className="order-sum-row"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
          {disc15&&<div className="order-sum-row order-sum-discount"><span>15% discount (orders over $100)</span><span>-${discAmt.toFixed(2)}</span></div>}
          <div className="order-sum-total"><span>Total</span><span>${total.toFixed(2)}</span></div>
          {subtotal>=80&&subtotal<100&&<p style={{color:"#C4622D",fontSize:"0.78rem",marginTop:"0.4rem",fontWeight:600}}>Add ${(100-subtotal).toFixed(2)} more for 15% off!</p>}
        </div>}
        <div className="order-note">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E8A020" strokeWidth="2" style={{flexShrink:0,marginTop:"2px"}}><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
          <p>We will confirm your order via email within 24 hours with payment details. No payment required now.</p>
        </div>
        {error&&<p className="error-msg">{error}</p>}
        <button type="submit" className="btn-submit" disabled={loading}>{loading?"Sending Order...":"Send Order Request"}</button>
      </form>
    </div>
  );
}
