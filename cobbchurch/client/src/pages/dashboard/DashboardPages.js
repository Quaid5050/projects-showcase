// MyEvents - dashboard events page
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { FiCalendar, FiMapPin, FiVideo, FiCheck, FiX } from 'react-icons/fi';
import api from '../../utils/api';

export const MyEvents = () => {
  const [events, setEvents] = useState([]);
  const [myRsvps, setMyRsvps] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = require('../../context/AuthContext').useAuth();

  const fetchEvents = async () => {
    try {
      const { data } = await api.get('/events');
      setEvents(data.events);
      setMyRsvps(data.events.filter(e => e.registrations?.some(r => r.user === user?._id)).map(e => e._id));
    } catch { toast.error('Failed to load events'); }
    finally { setLoading(false); }
  };

  useEffect(() => { fetchEvents(); }, []);

  const handleRsvp = async (eventId, registered) => {
    try {
      if (registered) {
        await api.delete(`/events/${eventId}/register`);
        toast.success('Registration cancelled');
      } else {
        await api.post(`/events/${eventId}/register`);
        toast.success('Registered! Confirmation email sent.');
      }
      fetchEvents();
    } catch (err) { toast.error(err.response?.data?.message || 'Action failed'); }
  };

  return (
    <div>
      <div style={{marginBottom:'28px'}}>
        <h1 style={{fontSize:'1.6rem',color:'var(--navy)',marginBottom:'6px'}}>Events & Gatherings</h1>
        <p style={{color:'var(--text-light)'}}>Stay connected through pastor gatherings, trainings, prayer events, and community outreach opportunities.</p>
      </div>

      {loading ? <div className="spinner"></div> : events.length === 0 ? (
        <div style={{background:'var(--white)',borderRadius:'12px',padding:'60px',textAlign:'center',boxShadow:'var(--shadow)'}}>
          <FiCalendar size={40} style={{color:'var(--gray)',marginBottom:'12px'}} />
          <p style={{color:'var(--gray)'}}>No upcoming events. Check back soon.</p>
        </div>
      ) : (
        <div style={{display:'flex',flexDirection:'column',gap:'16px'}}>
          {events.map(ev => {
            const registered = myRsvps.includes(ev._id);
            return (
              <div key={ev._id} style={{background:'var(--white)',borderRadius:'12px',padding:'0',boxShadow:'var(--shadow)',display:'grid',gridTemplateColumns:'100px 1fr auto',overflow:'hidden'}}>
                <div style={{background:'var(--navy)',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',padding:'20px 12px'}}>
                  <span style={{color:'var(--gold)',fontSize:'0.7rem',fontWeight:700,textTransform:'uppercase',letterSpacing:'1px'}}>
                    {new Date(ev.date).toLocaleDateString('en-US',{month:'short'})}
                  </span>
                  <span style={{color:'var(--white)',fontSize:'2rem',fontWeight:900,lineHeight:1}}>{new Date(ev.date).getDate()}</span>
                </div>
                <div style={{padding:'20px 24px'}}>
                  <div style={{display:'flex',gap:'8px',marginBottom:'6px'}}>
                    <span className="badge badge-gold">{ev.type}</span>
                    {registered && <span className="badge badge-green">Registered</span>}
                  </div>
                  <h3 style={{color:'var(--navy)',marginBottom:'6px'}}>{ev.title}</h3>
                  <p style={{color:'var(--text-light)',fontSize:'0.88rem',marginBottom:'10px'}}>{ev.description}</p>
                  <div style={{display:'flex',gap:'16px',flexWrap:'wrap'}}>
                    <span style={{display:'flex',alignItems:'center',gap:'5px',color:'var(--gray)',fontSize:'0.8rem'}}>
                      {ev.isVirtual ? <FiVideo size={12} /> : <FiMapPin size={12} />}
                      {ev.isVirtual ? 'Virtual' : ev.location}
                    </span>
                    <span style={{color:'var(--gray)',fontSize:'0.8rem'}}>{new Date(ev.date).toLocaleTimeString('en-US',{hour:'2-digit',minute:'2-digit'})}</span>
                    {ev.capacity && <span style={{color:'var(--gray)',fontSize:'0.8rem'}}>{ev.registrations?.length || 0}/{ev.capacity} registered</span>}
                  </div>
                </div>
                <div style={{padding:'20px 24px',display:'flex',alignItems:'center'}}>
                  <button
                    onClick={() => handleRsvp(ev._id, registered)}
                    className={`btn btn-sm ${registered ? 'btn-danger' : 'btn-primary'}`}
                  >
                    {registered ? <><FiX size={13}/> Cancel</> : <><FiCheck size={13}/> RSVP</>}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export const CrisisAlerts = () => {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [responding, setResponding] = useState(null);
  const [responseText, setResponseText] = useState('');

  const fetchAlerts = async () => {
    try {
      const { data } = await api.get('/crisis');
      setAlerts(data.alerts);
    } catch { toast.error('Failed to load alerts'); }
    finally { setLoading(false); }
  };

  useEffect(() => { fetchAlerts(); }, []);

  const handleRespond = async (id) => {
    try {
      await api.post(`/crisis/${id}/respond`, { response: responseText });
      toast.success('Response submitted. Thank you for serving together!');
      setResponding(null);
      setResponseText('');
      fetchAlerts();
    } catch (err) { toast.error(err.response?.data?.message || 'Failed to respond'); }
  };

  const urgencyColor = { critical: '#ef4444', high: '#f59e0b', medium: '#3b82f6', low: '#10b981' };

  return (
    <div>
      <div style={{marginBottom:'28px'}}>
        <h1 style={{fontSize:'1.6rem',color:'var(--navy)',marginBottom:'6px'}}>Active Crisis Alerts</h1>
        <p style={{color:'var(--text-light)'}}>View active alerts, available resources, and coordinated response opportunities.</p>
      </div>

      {loading ? <div className="spinner"></div> : alerts.length === 0 ? (
        <div style={{background:'var(--white)',borderRadius:'12px',padding:'60px',textAlign:'center',boxShadow:'var(--shadow)'}}>
          <p style={{color:'var(--gray)',fontSize:'1rem'}}>✓ No active crisis alerts at this time.</p>
        </div>
      ) : (
        <div style={{display:'flex',flexDirection:'column',gap:'16px'}}>
          {alerts.map(a => (
            <div key={a._id} style={{background:'var(--white)',borderRadius:'12px',padding:'24px',boxShadow:'var(--shadow)',borderLeft:`5px solid ${urgencyColor[a.urgency]}`}}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:'12px'}}>
                <div>
                  <div style={{display:'flex',gap:'8px',marginBottom:'8px',alignItems:'center'}}>
                    <span className={`badge badge-${a.urgency==='critical'?'red':a.urgency==='high'?'yellow':'gray'}`}>{a.urgency} urgency</span>
                    <span className="badge badge-gray">{a.type}</span>
                  </div>
                  <h3 style={{color:'var(--navy)'}}>{a.title}</h3>
                </div>
                <span style={{color:'var(--gray)',fontSize:'0.78rem'}}>{new Date(a.createdAt).toLocaleDateString()}</span>
              </div>
              <p style={{color:'var(--text-light)',lineHeight:1.7,marginBottom:'16px'}}>{a.description}</p>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <span style={{color:'var(--gray)',fontSize:'0.82rem'}}>{a.respondingChurches?.length || 0} churches responding</span>
                {responding === a._id ? (
                  <div style={{display:'flex',gap:'8px',alignItems:'center'}}>
                    <input style={{border:'2px solid #e5e7eb',borderRadius:'6px',padding:'8px 12px',fontSize:'0.85rem'}} placeholder="How can your church help?" value={responseText} onChange={e => setResponseText(e.target.value)} />
                    <button className="btn btn-sm btn-primary" onClick={() => handleRespond(a._id)}>Submit</button>
                    <button className="btn btn-sm btn-navy" onClick={() => setResponding(null)}>Cancel</button>
                  </div>
                ) : (
                  <button className="btn btn-sm btn-primary" onClick={() => setResponding(a._id)}>We Can Help</button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};



export const Profile = () => {
  const { user, updateUser } = require('../../context/AuthContext').useAuth();
  const [form, setForm] = useState({ pastorName:'', churchName:'', phone:'', website:'', denomination:'', congregationSize:'', bio:'' });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) setForm({
      pastorName: user.pastorName || '',
      churchName: user.churchName || '',
      phone: user.phone || '',
      website: user.website || '',
      denomination: user.denomination || '',
      congregationSize: user.congregationSize || '',
      bio: user.bio || ''
    });
  }, [user]);

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await api.put('/auth/profile', form);
      updateUser(data.user);
      toast.success('Profile updated!');
    } catch { toast.error('Failed to update profile'); }
    finally { setLoading(false); }
  };

  return (
    <div>
      <div style={{marginBottom:'28px'}}>
        <h1 style={{fontSize:'1.6rem',color:'var(--navy)',marginBottom:'6px'}}>My Profile</h1>
        <p style={{color:'var(--text-light)'}}>Manage your church profile and contact information.</p>
      </div>
      <div style={{background:'var(--white)',borderRadius:'12px',padding:'36px',boxShadow:'var(--shadow)',maxWidth:'700px'}}>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Pastor Name</label>
              <input className="form-input" value={form.pastorName} onChange={e => setForm({...form, pastorName:e.target.value})} />
            </div>
            <div className="form-group">
              <label className="form-label">Church Name</label>
              <input className="form-input" value={form.churchName} onChange={e => setForm({...form, churchName:e.target.value})} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Phone</label>
              <input className="form-input" value={form.phone} onChange={e => setForm({...form, phone:e.target.value})} />
            </div>
            <div className="form-group">
              <label className="form-label">Website</label>
              <input className="form-input" value={form.website} onChange={e => setForm({...form, website:e.target.value})} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Denomination</label>
              <input className="form-input" value={form.denomination} onChange={e => setForm({...form, denomination:e.target.value})} />
            </div>
            <div className="form-group">
              <label className="form-label">Congregation Size</label>
              <select className="form-select" value={form.congregationSize} onChange={e => setForm({...form, congregationSize:e.target.value})}>
                <option value="">Select</option>
                {['1-50','51-100','101-250','251-500','500+'].map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Church Bio</label>
            <textarea className="form-textarea" rows={4} value={form.bio} onChange={e => setForm({...form, bio:e.target.value})} placeholder="Tell the network about your church..." />
          </div>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'16px',background:'var(--off-white)',borderRadius:'8px',marginBottom:'20px'}}>
            <div>
              <p style={{fontWeight:600,color:'var(--navy)',fontSize:'0.9rem'}}>Email Address</p>
              <p style={{color:'var(--gray)',fontSize:'0.85rem'}}>{user?.email}</p>
            </div>
            <span className={`badge badge-${user?.status==='approved'?'green':'yellow'}`}>{user?.status}</span>
          </div>
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Saving...' : 'Save Profile'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyEvents;
