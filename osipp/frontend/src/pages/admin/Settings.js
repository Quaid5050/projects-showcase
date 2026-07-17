import { useState, useEffect } from 'react';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL || '/api';

export default function Settings() {
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    axios.get(`${API}/settings`).then(r => setSettings(r.data.data)).catch(console.error).finally(() => setLoading(false));
  }, []);

  const upd = (k, v) => setSettings(p => ({ ...p, [k]: v }));
  const updHours = (k, v) => setSettings(p => ({ ...p, deliveryHours: { ...p.deliveryHours, [k]: v } }));

  const save = async () => {
    setSaving(true); setSaved(false);
    try {
      const res = await axios.put(`${API}/settings`, settings);
      setSettings(res.data.data);
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
    } catch { alert('Failed to save'); }
    setSaving(false);
  };

  if (loading) return <div style={{ textAlign: 'center', padding: 80 }}><div className="spinner" /></div>;
  if (!settings) return <div className="empty">Failed to load settings</div>;

  return (
    <>
      <div className="adm-topbar">
        <div className="adm-page-title">Settings</div>
        {saved && <span style={{ color: 'var(--green)', fontWeight: 600, fontSize: 14 }}>Settings saved!</span>}
      </div>

      <div style={{ maxWidth: 600 }}>
        <div className="adm-table-wrap" style={{ padding: 28, marginBottom: 24 }}>
          <div style={{ fontFamily: 'var(--font-d)', fontSize: 18, fontWeight: 800, marginBottom: 20 }}>Business Information</div>
          <div className="form-group"><label className="form-label">Business Name</label><input className="form-input" value={settings.businessName} onChange={e => upd('businessName', e.target.value)} /></div>
          <div className="form-row">
            <div className="form-group"><label className="form-label">Phone</label><input className="form-input" value={settings.phone} onChange={e => upd('phone', e.target.value)} /></div>
            <div className="form-group"><label className="form-label">WhatsApp</label><input className="form-input" value={settings.whatsapp} onChange={e => upd('whatsapp', e.target.value)} /></div>
          </div>
          <div className="form-group"><label className="form-label">Email</label><input className="form-input" value={settings.email} onChange={e => upd('email', e.target.value)} /></div>
          <div className="form-group"><label className="form-label">Instagram</label><input className="form-input" value={settings.instagram} onChange={e => upd('instagram', e.target.value)} /></div>
          <div className="form-group"><label className="form-label">Address</label><input className="form-input" value={settings.address} onChange={e => upd('address', e.target.value)} /></div>
        </div>

        <div className="adm-table-wrap" style={{ padding: 28, marginBottom: 24 }}>
          <div style={{ fontFamily: 'var(--font-d)', fontSize: 18, fontWeight: 800, marginBottom: 20 }}>Delivery Settings</div>
          <div className="form-group"><label className="form-label">Delivery Radius</label><input className="form-input" value={settings.deliveryRadius} onChange={e => upd('deliveryRadius', e.target.value)} /></div>
          <div className="form-row">
            <div className="form-group"><label className="form-label">Minimum Order ($)</label><input className="form-input" type="number" value={settings.minOrder} onChange={e => upd('minOrder', parseFloat(e.target.value))} /></div>
            <div className="form-group"><label className="form-label">Free Delivery Threshold ($)</label><input className="form-input" type="number" value={settings.freeDeliveryThreshold} onChange={e => upd('freeDeliveryThreshold', parseFloat(e.target.value))} /></div>
          </div>
          <div className="form-group"><label className="form-label">Delivery Fee ($)</label><input className="form-input" type="number" step="0.01" value={settings.deliveryFee} onChange={e => upd('deliveryFee', parseFloat(e.target.value))} /></div>
        </div>

        <div className="adm-table-wrap" style={{ padding: 28, marginBottom: 24 }}>
          <div style={{ fontFamily: 'var(--font-d)', fontSize: 18, fontWeight: 800, marginBottom: 20 }}>Delivery Hours</div>
          <div className="form-group"><label className="form-label">Mon - Thu</label><input className="form-input" value={settings.deliveryHours?.monThu || ''} onChange={e => updHours('monThu', e.target.value)} /></div>
          <div className="form-group"><label className="form-label">Fri - Sat</label><input className="form-input" value={settings.deliveryHours?.friSat || ''} onChange={e => updHours('friSat', e.target.value)} /></div>
          <div className="form-group"><label className="form-label">Sunday</label><input className="form-input" value={settings.deliveryHours?.sunday || ''} onChange={e => updHours('sunday', e.target.value)} /></div>
        </div>

        <button className="adm-btn adm-btn-gold" style={{ padding: '14px 32px', fontSize: 15 }} onClick={save} disabled={saving}>
          {saving ? 'Saving...' : 'Save Settings'}
        </button>
      </div>
    </>
  );
}
