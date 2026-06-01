import { useEffect, useState } from 'react';
import api from '../api';
import toast from 'react-hot-toast';

const emptyForm = { name:'', description:'', price:'', duration:'', features:[''], isActive:true, isSpecialOffer:false, offerBadge:'' };

export default function AdminPackages() {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [form, setForm] = useState(emptyForm);

  const fetchPackages = async () => {
    try {
      const res = await api.get('/api/packages');
      setPackages(res.data);
    } catch { toast.error('Failed to load packages'); }
    finally { setLoading(false); }
  };

  useEffect(() => { fetchPackages(); }, []);

  const openNew = () => { setEditItem(null); setForm(emptyForm); setShowModal(true); };
  const openEdit = (p) => {
    setEditItem(p);
    setForm({ name:p.name, description:p.description||'', price:p.price||'', duration:p.duration||'', features:p.features.length ? p.features : [''], isActive:p.isActive, isSpecialOffer:p.isSpecialOffer, offerBadge:p.offerBadge||'' });
    setShowModal(true);
  };

  const save = async (e) => {
    e.preventDefault();
    const payload = { ...form, features: form.features.filter(f => f.trim()) };
    try {
      if (editItem) {
        await api.patch(`/api/packages/${editItem._id}`, payload);
        toast.success('Package updated');
      } else {
        await api.post('/api/packages', payload);
        toast.success('Package created');
      }
      setShowModal(false);
      fetchPackages();
    } catch { toast.error('Save failed'); }
  };

  const remove = async (id) => {
    if (!window.confirm('Delete this package?')) return;
    try {
      await api.delete(`/api/packages/${id}`);
      toast.success('Package deleted');
      fetchPackages();
    } catch { toast.error('Delete failed'); }
  };

  const addFeature = () => setForm({ ...form, features: [...form.features, ''] });
  const updateFeature = (i, val) => { const f = [...form.features]; f[i] = val; setForm({ ...form, features: f }); };
  const removeFeature = (i) => setForm({ ...form, features: form.features.filter((_,idx) => idx !== i) });

  const inputStyle = { width:'100%', padding:'10px 14px', border:'1px solid #E0D8CE', fontSize:13, fontFamily:"'Jost',sans-serif", outline:'none' };
  const labelStyle = { display:'block', fontSize:10, letterSpacing:'0.15em', textTransform:'uppercase', color:'#C9933A', marginBottom:6 };

  return (
    <div>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:28 }}>
        <div>
          <h1 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:34, color:'#1A2744', fontWeight:400 }}>Packages & Offers</h1>
          <p style={{ fontSize:13, color:'#999', marginTop:4 }}>Manage what guests see on the website</p>
        </div>
        <button onClick={openNew} style={{ background:'#C9933A', border:'none', color:'#FFFFFF', padding:'10px 22px', fontSize:12, letterSpacing:'0.1em', textTransform:'uppercase', cursor:'pointer', fontFamily:"'Jost',sans-serif", display:'flex', alignItems:'center', gap:6 }}>
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Add Package
        </button>
      </div>

      {loading
        ? <div style={{ padding:60, textAlign:'center', color:'#C9933A', fontSize:16 }}>Loading...</div>
        : packages.length === 0
        ? <div style={{ background:'#FFFFFF', border:'1px solid #EDE8E0', padding:60, textAlign:'center', color:'#999' }}>
            <svg width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24" style={{ margin:'0 auto 16px', display:'block', opacity:0.3 }}><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>
            <p style={{ fontSize:14 }}>No packages yet.</p>
            <button onClick={openNew} style={{ marginTop:16, background:'#C9933A', border:'none', color:'#FFFFFF', padding:'10px 22px', fontSize:12, cursor:'pointer', fontFamily:"'Jost',sans-serif" }}>Create First Package</button>
          </div>
        : <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(280px, 1fr))', gap:20 }}>
            {packages.map(pkg => (
              <div key={pkg._id} style={{ background:'#FFFFFF', border:'1px solid #EDE8E0', padding:'28px 24px', position:'relative', opacity: pkg.isActive ? 1 : 0.5 }}>
                {pkg.isSpecialOffer && pkg.offerBadge && (
                  <span style={{ background:'#C9933A', color:'#FFFFFF', fontSize:9, padding:'3px 10px', letterSpacing:'0.1em', textTransform:'uppercase', position:'absolute', top:0, right:0 }}>{pkg.offerBadge}</span>
                )}
                <p style={{ fontSize:10, letterSpacing:'0.2em', color:'#C9933A', textTransform:'uppercase', marginBottom:6 }}>{pkg.duration}</p>
                <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:24, color:'#1A2744', marginBottom:4, fontWeight:400 }}>{pkg.name}</h3>
                <p style={{ fontSize:20, color:'#C9933A', fontFamily:"'Cormorant Garamond',serif", marginBottom:12 }}>From ${pkg.price}</p>
                <p style={{ fontSize:13, color:'#666', lineHeight:1.7, marginBottom:16 }}>{pkg.description}</p>
                <div style={{ marginBottom:16 }}>
                  {(pkg.features || []).map((f,i) => (
                    <div key={i} style={{ display:'flex', alignItems:'center', gap:6, marginBottom:6 }}>
                      <svg width="11" height="11" fill="none" stroke="#C9933A" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20,6 9,17 4,12"/></svg>
                      <span style={{ fontSize:12, color:'#555' }}>{f}</span>
                    </div>
                  ))}
                </div>
                <div style={{ borderTop:'1px solid #F0EBE0', paddingTop:14, display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                  <span style={{ fontSize:11, padding:'3px 10px', borderRadius:20, background: pkg.isActive ? '#EAF3DE' : '#F1EFE8', color: pkg.isActive ? '#27500A' : '#444' }}>
                    {pkg.isActive ? 'Active' : 'Inactive'}
                  </span>
                  <div style={{ display:'flex', gap:8 }}>
                    <button onClick={() => openEdit(pkg)} style={{ background:'none', border:'1px solid #DDD', padding:'5px 12px', fontSize:11, cursor:'pointer', color:'#555', fontFamily:"'Jost',sans-serif" }}>Edit</button>
                    <button onClick={() => remove(pkg._id)} style={{ background:'none', border:'1px solid #FFCCCC', padding:'5px 12px', fontSize:11, cursor:'pointer', color:'#E24B4A', fontFamily:"'Jost',sans-serif" }}>Delete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
      }

      {/* Modal */}
      {showModal && (
        <div style={{ position:'fixed', inset:0, background:'rgba(0,0,0,0.5)', zIndex:1000, display:'flex', alignItems:'center', justifyContent:'center', padding:20 }}>
          <div style={{ background:'#FFFFFF', width:'100%', maxWidth:560, maxHeight:'92vh', overflow:'auto', padding:'32px 36px' }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:24 }}>
              <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:26, color:'#1A2744', fontWeight:400 }}>{editItem ? 'Edit Package' : 'New Package'}</h3>
              <button onClick={() => setShowModal(false)} style={{ background:'none', border:'none', cursor:'pointer', color:'#999', fontSize:24 }}>×</button>
            </div>
            <form onSubmit={save}>
              <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
                <div>
                  <label style={labelStyle}>Package Name</label>
                  <input required value={form.name} onChange={e => setForm({...form,name:e.target.value})} placeholder="e.g. Luxury Retreat" style={inputStyle} />
                </div>
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16 }}>
                  <div>
                    <label style={labelStyle}>Price (USD)</label>
                    <input type="number" required value={form.price} onChange={e => setForm({...form,price:e.target.value})} placeholder="0" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Duration</label>
                    <input value={form.duration} onChange={e => setForm({...form,duration:e.target.value})} placeholder="e.g. 5 nights" style={inputStyle} />
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Description</label>
                  <textarea value={form.description} onChange={e => setForm({...form,description:e.target.value})} rows={3} style={{ ...inputStyle, resize:'vertical' }} />
                </div>

                {/* Features */}
                <div>
                  <label style={labelStyle}>Features Included</label>
                  {form.features.map((f, i) => (
                    <div key={i} style={{ display:'flex', gap:8, marginBottom:8 }}>
                      <input value={f} onChange={e => updateFeature(i, e.target.value)} placeholder={`Feature ${i+1}`} style={{ ...inputStyle, flex:1, marginBottom:0 }} />
                      <button type="button" onClick={() => removeFeature(i)} style={{ background:'none', border:'1px solid #FFCCCC', color:'#E24B4A', padding:'0 10px', cursor:'pointer', fontSize:16 }}>×</button>
                    </div>
                  ))}
                  <button type="button" onClick={addFeature} style={{ background:'none', border:'1px dashed #C9933A', color:'#C9933A', padding:'7px 14px', fontSize:12, cursor:'pointer', fontFamily:"'Jost',sans-serif", marginTop:4 }}>
                    + Add Feature
                  </button>
                </div>

                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16 }}>
                  <div style={{ display:'flex', alignItems:'center', gap:10 }}>
                    <input type="checkbox" id="active" checked={form.isActive} onChange={e => setForm({...form,isActive:e.target.checked})} />
                    <label htmlFor="active" style={{ fontSize:13, color:'#555', cursor:'pointer' }}>Show on website</label>
                  </div>
                  <div style={{ display:'flex', alignItems:'center', gap:10 }}>
                    <input type="checkbox" id="offer" checked={form.isSpecialOffer} onChange={e => setForm({...form,isSpecialOffer:e.target.checked})} />
                    <label htmlFor="offer" style={{ fontSize:13, color:'#555', cursor:'pointer' }}>Special offer</label>
                  </div>
                </div>

                {form.isSpecialOffer && (
                  <div>
                    <label style={labelStyle}>Offer Badge Text</label>
                    <input value={form.offerBadge} onChange={e => setForm({...form,offerBadge:e.target.value})} placeholder="e.g. Limited Time" style={inputStyle} />
                  </div>
                )}
              </div>

              <div style={{ display:'flex', gap:10, justifyContent:'flex-end', marginTop:24 }}>
                <button type="button" onClick={() => setShowModal(false)} style={{ background:'none', border:'1px solid #DDD', padding:'10px 22px', fontSize:12, cursor:'pointer', fontFamily:"'Jost',sans-serif" }}>Cancel</button>
                <button type="submit" style={{ background:'#C9933A', border:'none', color:'#FFFFFF', padding:'10px 22px', fontSize:12, letterSpacing:'0.1em', textTransform:'uppercase', cursor:'pointer', fontFamily:"'Jost',sans-serif" }}>Save Package</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
