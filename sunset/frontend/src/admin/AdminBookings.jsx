import { useEffect, useState } from 'react';
import api from '../api';
import toast from 'react-hot-toast';

const statusStyle = {
  pending:   { bg: '#FAEEDA', color: '#633806' },
  confirmed: { bg: '#EAF3DE', color: '#27500A' },
  cancelled: { bg: '#FCEBEB', color: '#A32D2D' },
  completed: { bg: '#E6F1FB', color: '#0C447C' },
};

export default function AdminBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [form, setForm] = useState({ name:'', email:'', phone:'', checkin:'', checkout:'', guests:2, package:'', totalPrice:'', status:'pending', notes:'' });

  const fetchBookings = async () => {
    try {
      const res = await api.get('/api/bookings');
      setBookings(res.data);
    } catch { toast.error('Failed to load bookings'); }
    finally { setLoading(false); }
  };

  useEffect(() => { fetchBookings(); }, []);

  const openNew = () => { setEditItem(null); setForm({ name:'',email:'',phone:'',checkin:'',checkout:'',guests:2,package:'',totalPrice:'',status:'pending',notes:'' }); setShowModal(true); };
  const openEdit = (b) => { setEditItem(b); setForm({ name:b.name,email:b.email,phone:b.phone||'',checkin:b.checkin?b.checkin.slice(0,10):'',checkout:b.checkout?b.checkout.slice(0,10):'',guests:b.guests,package:b.package||'',totalPrice:b.totalPrice||'',status:b.status,notes:b.notes||'' }); setShowModal(true); };

  const save = async (e) => {
    e.preventDefault();
    try {
      if (editItem) {
        await api.patch(`/api/bookings/${editItem._id}`, form);
        toast.success('Booking updated');
      } else {
        await api.post('/api/bookings', form);
        toast.success('Booking created');
      }
      setShowModal(false);
      fetchBookings();
    } catch { toast.error('Save failed'); }
  };

  const remove = async (id) => {
    if (!window.confirm('Delete this booking?')) return;
    try {
      await api.delete(`/api/bookings/${id}`);
      toast.success('Booking deleted');
      fetchBookings();
    } catch { toast.error('Delete failed'); }
  };

  const inputStyle = { width:'100%', padding:'10px 14px', border:'1px solid #E0D8CE', fontSize:13, fontFamily:"'Jost',sans-serif", outline:'none', marginBottom:0 };
  const labelStyle = { display:'block', fontSize:10, letterSpacing:'0.15em', textTransform:'uppercase', color:'#C9933A', marginBottom:6 };

  const nights = (b) => {
    if (!b.checkin || !b.checkout) return 0;
    return Math.round((new Date(b.checkout) - new Date(b.checkin)) / 86400000);
  };

  return (
    <div>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:28 }}>
        <div>
          <h1 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:34, color:'#1A2744', fontWeight:400 }}>Bookings</h1>
          <p style={{ fontSize:13, color:'#999', marginTop:4 }}>Manage all villa reservations</p>
        </div>
        <button onClick={openNew} style={{ background:'#C9933A', border:'none', color:'#FFFFFF', padding:'10px 22px', fontSize:12, letterSpacing:'0.1em', textTransform:'uppercase', cursor:'pointer', fontFamily:"'Jost',sans-serif", display:'flex', alignItems:'center', gap:6 }}>
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          New Booking
        </button>
      </div>

      {/* Table */}
      <div style={{ background:'#FFFFFF', border:'1px solid #EDE8E0', overflow:'auto' }}>
        <table style={{ width:'100%', borderCollapse:'collapse', fontFamily:"'Jost',sans-serif", fontSize:13 }}>
          <thead>
            <tr style={{ background:'#FAF7F2', borderBottom:'1px solid #EDE8E0' }}>
              {['Guest','Contact','Stay Dates','Nights','Package','Price','Status','Actions'].map(h => (
                <th key={h} style={{ padding:'12px 20px', textAlign:'left', fontSize:10, letterSpacing:'0.15em', textTransform:'uppercase', color:'#999', fontWeight:500 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {loading
              ? <tr><td colSpan={8} style={{ padding:40, textAlign:'center', color:'#C9933A' }}>Loading...</td></tr>
              : bookings.length === 0
              ? <tr><td colSpan={8} style={{ padding:40, textAlign:'center', color:'#999' }}>No bookings yet. Click "New Booking" to add one.</td></tr>
              : bookings.map(b => {
                const { bg, color } = statusStyle[b.status] || statusStyle.pending;
                return (
                  <tr key={b._id} style={{ borderBottom:'1px solid #F5F0E8' }} onMouseEnter={e => e.currentTarget.style.background='#FDFAF6'} onMouseLeave={e => e.currentTarget.style.background='#FFFFFF'}>
                    <td style={{ padding:'14px 20px' }}>
                      <p style={{ fontWeight:500, color:'#1A2744' }}>{b.name}</p>
                    </td>
                    <td style={{ padding:'14px 20px', color:'#666' }}>
                      <p>{b.email}</p>
                      {b.phone && <p style={{ fontSize:11, color:'#AAA' }}>{b.phone}</p>}
                    </td>
                    <td style={{ padding:'14px 20px', color:'#555' }}>
                      <p>{b.checkin ? new Date(b.checkin).toLocaleDateString('en-GB',{day:'numeric',month:'short'}) : '—'}</p>
                      <p style={{ fontSize:11, color:'#AAA' }}>→ {b.checkout ? new Date(b.checkout).toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'}) : '—'}</p>
                    </td>
                    <td style={{ padding:'14px 20px', color:'#555' }}>{nights(b)} nts</td>
                    <td style={{ padding:'14px 20px', color:'#555' }}>{b.package || '—'}</td>
                    <td style={{ padding:'14px 20px', fontWeight:500, color:'#1A2744' }}>{b.totalPrice ? `$${b.totalPrice}` : '—'}</td>
                    <td style={{ padding:'14px 20px' }}>
                      <span style={{ background:bg, color, fontSize:11, fontWeight:500, padding:'3px 10px', borderRadius:20, textTransform:'capitalize' }}>{b.status}</span>
                    </td>
                    <td style={{ padding:'14px 20px' }}>
                      <div style={{ display:'flex', gap:6 }}>
                        <button onClick={() => openEdit(b)} style={{ background:'none', border:'1px solid #DDD', padding:'5px 12px', fontSize:11, cursor:'pointer', color:'#555', fontFamily:"'Jost',sans-serif" }}>Edit</button>
                        <button onClick={() => remove(b._id)} style={{ background:'none', border:'1px solid #FFCCCC', padding:'5px 12px', fontSize:11, cursor:'pointer', color:'#E24B4A', fontFamily:"'Jost',sans-serif" }}>Del</button>
                      </div>
                    </td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div style={{ position:'fixed', inset:0, background:'rgba(0,0,0,0.5)', zIndex:1000, display:'flex', alignItems:'center', justifyContent:'center', padding:20 }}>
          <div style={{ background:'#FFFFFF', width:'100%', maxWidth:560, maxHeight:'90vh', overflow:'auto', padding:'32px 36px' }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:24 }}>
              <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:26, color:'#1A2744', fontWeight:400 }}>{editItem ? 'Edit Booking' : 'New Booking'}</h3>
              <button onClick={() => setShowModal(false)} style={{ background:'none', border:'none', cursor:'pointer', color:'#999', fontSize:20 }}>×</button>
            </div>
            <form onSubmit={save}>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16, marginBottom:16 }}>
                {[['name','Guest Name','text',true],['email','Email','email',true],['phone','Phone','text',false],['guests','Guests','number',false]].map(([n,l,t,r]) => (
                  <div key={n}>
                    <label style={labelStyle}>{l}</label>
                    <input name={n} type={t} value={form[n]} onChange={e => setForm({...form,[n]:e.target.value})} required={r} min={n==='guests'?1:undefined} max={n==='guests'?20:undefined} style={inputStyle} />
                  </div>
                ))}
                <div>
                  <label style={labelStyle}>Check-in</label>
                  <input type="date" value={form.checkin} onChange={e => setForm({...form,checkin:e.target.value})} style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Check-out</label>
                  <input type="date" value={form.checkout} onChange={e => setForm({...form,checkout:e.target.value})} style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Package</label>
                  <input value={form.package} onChange={e => setForm({...form,package:e.target.value})} placeholder="e.g. Luxury Retreat" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Total Price ($)</label>
                  <input type="number" value={form.totalPrice} onChange={e => setForm({...form,totalPrice:e.target.value})} placeholder="0" style={inputStyle} />
                </div>
                <div style={{ gridColumn:'1/-1' }}>
                  <label style={labelStyle}>Status</label>
                  <select value={form.status} onChange={e => setForm({...form,status:e.target.value})} style={inputStyle}>
                    {['pending','confirmed','cancelled','completed'].map(s => <option key={s} value={s} style={{ textTransform:'capitalize' }}>{s}</option>)}
                  </select>
                </div>
                <div style={{ gridColumn:'1/-1' }}>
                  <label style={labelStyle}>Notes</label>
                  <textarea value={form.notes} onChange={e => setForm({...form,notes:e.target.value})} rows={3} style={{ ...inputStyle, resize:'vertical' }} />
                </div>
              </div>
              <div style={{ display:'flex', gap:10, justifyContent:'flex-end' }}>
                <button type="button" onClick={() => setShowModal(false)} style={{ background:'none', border:'1px solid #DDD', padding:'10px 22px', fontSize:12, cursor:'pointer', fontFamily:"'Jost',sans-serif" }}>Cancel</button>
                <button type="submit" style={{ background:'#C9933A', border:'none', color:'#FFFFFF', padding:'10px 22px', fontSize:12, letterSpacing:'0.1em', textTransform:'uppercase', cursor:'pointer', fontFamily:"'Jost',sans-serif" }}>Save Booking</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
