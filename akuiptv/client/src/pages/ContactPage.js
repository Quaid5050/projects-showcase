import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { FiMessageCircle, FiMail, FiGlobe, FiCheckCircle } from 'react-icons/fi';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', whatsapp: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('/api/inquiries', form);
      setSent(true);
      toast.success('Message sent! We will contact you soon.');
    } catch { toast.error('Failed to send message.'); }
    finally { setLoading(false); }
  };

  const contactInfo = [
    { icon: <FiMessageCircle size={22} />, label: 'WhatsApp', value: 'Available 24/7', sub: 'Instant support' },
    { icon: <FiMail size={22} />, label: 'Email', value: 'support@akuiptv.com', sub: 'Reply within 2 hours' },
    { icon: <FiGlobe size={22} />, label: 'Coverage', value: 'Worldwide', sub: 'Available everywhere' }
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#070B14' }}>
      <div style={{ background: 'linear-gradient(135deg, #0D1526, #111827)', padding: '80px 24px 60px', borderBottom: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
        <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: '#06B6D4', marginBottom: 12 }}>Get in Touch</div>
        <h1 style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(32px,5vw,52px)', fontWeight: 800, marginBottom: 16 }}>Contact Us</h1>
        <p style={{ color: '#9CA3AF', fontSize: 17, maxWidth: 480, margin: '0 auto' }}>Have questions about our boxes, subscriptions, or referral program? We are here to help.</p>
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '64px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 48, alignItems: 'start' }}>
          {/* Info */}
          <div>
            <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 24, marginBottom: 24 }}>Let's Talk</h2>
            <p style={{ color: '#9CA3AF', fontSize: 15, lineHeight: 1.8, marginBottom: 36 }}>
              Whether you are interested in buying an IPTV box, joining our referral program, or need technical support — reach out and our team will assist you promptly.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {contactInfo.map((c, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: 20, background: 'linear-gradient(145deg,#111827,#1A2540)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 16 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 14, background: 'rgba(59,130,246,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#60A5FA', flexShrink: 0 }}>{c.icon}</div>
                  <div>
                    <div style={{ fontSize: 12, color: '#6B7280', fontWeight: 600, marginBottom: 2 }}>{c.label}</div>
                    <div style={{ fontWeight: 700, fontSize: 15 }}>{c.value}</div>
                    <div style={{ fontSize: 12, color: '#9CA3AF' }}>{c.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div style={{ background: 'linear-gradient(145deg,#111827,#1A2540)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 24, padding: 40 }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ marginBottom: 16, display: 'flex', justifyContent: 'center', color: '#10B981' }}><FiCheckCircle size={48} /></div>
                <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 22, marginBottom: 12 }}>Message Sent!</h3>
                <p style={{ color: '#9CA3AF', fontSize: 15 }}>We will get back to you within 2 hours.</p>
                <button onClick={() => setSent(false)} style={{ marginTop: 24, padding: '10px 24px', borderRadius: 10, background: 'rgba(59,130,246,0.15)', border: '1px solid rgba(59,130,246,0.3)', color: '#60A5FA', fontWeight: 600, cursor: 'pointer', fontSize: 14 }}>Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 20, marginBottom: 28 }}>Send a Message</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                  {[
                    { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Your name' },
                    { name: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' }
                  ].map(f => (
                    <div key={f.name}>
                      <label style={{ fontSize: 13, fontWeight: 600, color: '#9CA3AF', display: 'block', marginBottom: 8 }}>{f.label.toUpperCase()}</label>
                      <input name={f.name} type={f.type} required value={form[f.name]} onChange={handleChange} placeholder={f.placeholder}
                        style={{ width: '100%', padding: '12px 14px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10, color: '#F9FAFB', fontSize: 15, outline: 'none', boxSizing: 'border-box' }} />
                    </div>
                  ))}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                  <div>
                    <label style={{ fontSize: 13, fontWeight: 600, color: '#9CA3AF', display: 'block', marginBottom: 8 }}>WHATSAPP</label>
                    <input name="whatsapp" value={form.whatsapp} onChange={handleChange} placeholder="+1234567890" style={{ width: '100%', padding: '12px 14px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10, color: '#F9FAFB', fontSize: 15, outline: 'none', boxSizing: 'border-box' }} />
                  </div>
                  <div>
                    <label style={{ fontSize: 13, fontWeight: 600, color: '#9CA3AF', display: 'block', marginBottom: 8 }}>SUBJECT</label>
                    <select name="subject" value={form.subject} onChange={handleChange} style={{ width: '100%', padding: '12px 14px', background: '#111827', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10, color: form.subject ? '#F9FAFB' : '#6B7280', fontSize: 15, outline: 'none', boxSizing: 'border-box' }}>
                      <option value="">Select topic</option>
                      <option>Product Inquiry</option>
                      <option>Referral Program</option>
                      <option>Technical Support</option>
                      <option>Pricing & Plans</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div style={{ marginBottom: 24 }}>
                  <label style={{ fontSize: 13, fontWeight: 600, color: '#9CA3AF', display: 'block', marginBottom: 8 }}>MESSAGE</label>
                  <textarea name="message" required value={form.message} onChange={handleChange} placeholder="Tell us how we can help you..." rows={5}
                    style={{ width: '100%', padding: '12px 14px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10, color: '#F9FAFB', fontSize: 15, outline: 'none', resize: 'vertical', fontFamily: 'Inter, sans-serif', boxSizing: 'border-box' }} />
                </div>
                <button type="submit" disabled={loading} style={{ width: '100%', padding: '14px', borderRadius: 12, background: 'linear-gradient(135deg,#3B82F6,#8B5CF6)', color: '#fff', fontWeight: 700, fontSize: 16, border: 'none', cursor: 'pointer' }}>
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){div>div>div{grid-template-columns:1fr!important;}}`}</style>
    </div>
  );
}
