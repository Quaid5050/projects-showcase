import { useState } from 'react';
import api from '../api';
import toast from 'react-hot-toast';

export default function BookingForm({ compact = false }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', checkin: '', checkout: '', guests: '2', message: '' });
  const [loading, setLoading] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post('/api/leads', form);
      toast.success('Your inquiry has been sent! We will contact you shortly.');
      setForm({ name: '', email: '', phone: '', checkin: '', checkout: '', guests: '2', message: '' });
    } catch {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    width: '100%', padding: '12px 16px',
    background: 'rgba(255,255,255,0.08)',
    border: '1px solid rgba(201,147,58,0.3)',
    color: '#FFFFFF',
    fontFamily: "'Jost', sans-serif", fontSize: 14,
    outline: 'none', transition: 'border 0.3s',
  };
  const labelStyle = { display: 'block', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9933A', marginBottom: 6 };

  return (
    <form onSubmit={submit}>
      <div style={{ display: 'grid', gridTemplateColumns: compact ? '1fr' : '1fr 1fr', gap: 16 }}>
        <div>
          <label style={labelStyle}>Full Name</label>
          <input name="name" value={form.name} onChange={handle} required placeholder="Your name" style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Email</label>
          <input name="email" type="email" value={form.email} onChange={handle} required placeholder="your@email.com" style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Phone</label>
          <input name="phone" value={form.phone} onChange={handle} placeholder="+1 876..." style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Guests</label>
          <select name="guests" value={form.guests} onChange={handle} style={{ ...inputStyle, cursor: 'pointer' }}>
            {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n} style={{ background: '#1A2744' }}>{n} Guest{n > 1 ? 's' : ''}</option>)}
          </select>
        </div>
        <div>
          <label style={labelStyle}>Check-in</label>
          <input name="checkin" type="date" value={form.checkin} onChange={handle} style={{ ...inputStyle, colorScheme: 'dark' }} />
        </div>
        <div>
          <label style={labelStyle}>Check-out</label>
          <input name="checkout" type="date" value={form.checkout} onChange={handle} style={{ ...inputStyle, colorScheme: 'dark' }} />
        </div>
        <div style={{ gridColumn: compact ? '1' : '1 / -1' }}>
          <label style={labelStyle}>Special Requests</label>
          <textarea name="message" value={form.message} onChange={handle} rows={3} placeholder="Any special requests or questions?" style={{ ...inputStyle, resize: 'vertical' }} />
        </div>
      </div>
      <button type="submit" disabled={loading} className="btn-primary" style={{ marginTop: 20, width: '100%', justifyContent: 'center', opacity: loading ? 0.7 : 1 }}>
        {loading ? 'Sending...' : 'Send Inquiry'}
        {!loading && <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>}
      </button>
    </form>
  );
}
