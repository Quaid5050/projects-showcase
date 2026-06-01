import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { sendLead } from '../utils/emailService';

export default function LeadPopup({ onClose, notify }) {
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({ fname: '', lname: '', email: '', phone: '', service: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 4000);
    return () => clearTimeout(t);
  }, []);

  const close = () => { setVisible(false); setTimeout(onClose, 400); };

  const change = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async () => {
    if (!form.fname || !form.email || !form.phone) {
      notify('Please fill in required fields');
      return;
    }
    setLoading(true);
    try {
      await sendLead({ name: `${form.fname} ${form.lname}`, email: form.email, phone: form.phone, service: form.service });
      notify('Discount unlocked! Taking you to booking...');
      close();
      // Pre-fill booking via sessionStorage
      sessionStorage.setItem('prefill', JSON.stringify(form));
      setTimeout(() => navigate('/booking'), 900);
    } catch {
      notify('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed', inset: 0, background: 'rgba(10,22,40,0.88)',
      zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center',
      backdropFilter: 'blur(8px)', padding: '16px',
      animation: 'fadeIn 0.35s ease',
    }}>
      <style>{`@keyframes fadeIn{from{opacity:0}to{opacity:1}} @keyframes slideUp{from{transform:translateY(24px);opacity:0}to{transform:translateY(0);opacity:1}}`}</style>
      <div style={{
        background: '#fff', width: '100%', maxWidth: 520, borderRadius: 6,
        overflow: 'hidden', maxHeight: '90vh', overflowY: 'auto',
        animation: 'slideUp 0.4s 0.05s both',
      }}>
        {/* Header */}
        <div style={{ background: 'var(--navy)', padding: '36px 40px 28px', position: 'relative' }}>
          <button onClick={close} style={{
            position: 'absolute', top: 14, right: 14, background: 'rgba(255,255,255,0.12)',
            border: 'none', color: '#fff', width: 30, height: 30, borderRadius: '50%',
            cursor: 'pointer', fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>×</button>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 26, fontWeight: 700, color: '#fff', marginBottom: 8 }}>
            Get 10% Off Your First Notarization
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>
            Register your details and unlock an exclusive discount — applied to your first booking.
          </p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--gold)', padding: '8px 16px', borderRadius: 100, marginTop: 16 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" strokeWidth="2.5">
              <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
              <line x1="7" y1="7" x2="7.01" y2="7"/>
            </svg>
            <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--navy)' }}>10% Discount Unlocked On Submit</span>
          </div>
        </div>

        {/* Form */}
        <div style={{ padding: '28px 40px 36px' }}>
          <div className="form-row">
            <div className="form-group">
              <label>First Name *</label>
              <input name="fname" value={form.fname} onChange={change} placeholder="John"/>
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input name="lname" value={form.lname} onChange={change} placeholder="Smith"/>
            </div>
          </div>
          <div className="form-group">
            <label>Email Address *</label>
            <input name="email" type="email" value={form.email} onChange={change} placeholder="john@email.com"/>
          </div>
          <div className="form-group">
            <label>Phone Number *</label>
            <input name="phone" type="tel" value={form.phone} onChange={change} placeholder="+1 (416) 000-0000"/>
          </div>
          <div className="form-group">
            <label>Service Needed</label>
            <select name="service" value={form.service} onChange={change}>
              <option value="">Select a service...</option>
              <option>Affidavit</option>
              <option>Statutory Declaration</option>
              <option>Consent Letter for Minor Travel</option>
              <option>Power of Attorney</option>
              <option>Real Estate Documents</option>
              <option>Sworn Statement</option>
              <option>Not Sure</option>
            </select>
          </div>
          <button className="btn-primary" onClick={submit} disabled={loading}
            style={{ width: '100%', justifyContent: 'center', marginBottom: 12, opacity: loading ? 0.7 : 1 }}>
            {loading ? 'Sending...' : 'Claim My 10% Discount & Book'}
          </button>
          <p style={{ textAlign: 'center', fontSize: 12, color: '#aaa', cursor: 'pointer' }} onClick={close}>
            No thanks, I'll pay full price
          </p>
        </div>
      </div>
    </div>
  );
}
