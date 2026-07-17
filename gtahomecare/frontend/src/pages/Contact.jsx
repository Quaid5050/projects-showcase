import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
import api from '../utils/api';

export default function ContactPage() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault(); setLoading(true);
    try { await api.post('/contacts', form); setSent(true); } catch { } finally { setLoading(false); }
  };

  return (
    <>
      <div className="page-hero">
        <img src="/img4.jpg" alt="Contact" />
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <span className="section-tag" style={{ color: 'var(--gold-light)' }}>Get in Touch</span>
          <h1 style={{ fontFamily: 'Baloo 2,sans-serif', fontSize: 'clamp(2rem,4vw,3rem)', color: 'white' }}>Contact Us</h1>
        </div>
      </div>

      <section style={{ padding: '4rem 0', background: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '3rem' }}>
            {/* Info */}
            <div>
              <span className="section-tag">Reach Out</span>
              <h2 style={{ fontFamily: 'Baloo 2,sans-serif', fontSize: '2rem', color: 'var(--text-dark)', marginBottom: '1rem' }}>Let's Chat</h2>
              <div className="divider-gold" />
              <p style={{ fontFamily: 'Poppins,sans-serif', color: 'var(--text-mid)', lineHeight: 1.85, margin: '1.25rem 0 2rem', fontSize: '0.95rem' }}>
                Whether you have a question about our services, want to schedule a free assessment, or need guidance on care options — our team is ready to help.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { icon: <MapPin size={18} color="var(--red)" />, label: 'Address', val: '2231 Jane St, Toronto, ON M3M 1A5' },
                  { icon: <Phone size={18} color="var(--red)" />, label: 'Phone', val: '+1 416 910 0223', href: 'tel:+14169100223' },
                  { icon: <Mail size={18} color="var(--red)" />, label: 'Email', val: 'gtahomecaree@gmail.com', href: 'mailto:gtahomecaree@gmail.com' },
                  { icon: <Clock size={18} color="var(--red)" />, label: 'Hours', val: 'Available 24/7' },
                ].map(item => (
                  <div key={item.label} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', padding: '1rem', background: 'var(--cream)', borderRadius: 8 }}>
                    <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#FEF0F0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{item.icon}</div>
                    <div>
                      <div style={{ fontFamily: 'Poppins,sans-serif', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-light)', marginBottom: 3 }}>{item.label}</div>
                      {item.href
                        ? <a href={item.href} style={{ fontFamily: 'Poppins,sans-serif', fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-dark)', textDecoration: 'none' }}>{item.val}</a>
                        : <span style={{ fontFamily: 'Poppins,sans-serif', fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-dark)' }}>{item.val}</span>
                      }
                    </div>
                  </div>
                ))}
                <a href="https://www.facebook.com/gtahomecaree/" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--red)', textDecoration: 'none', fontFamily: 'Poppins,sans-serif', fontSize: '0.875rem', fontWeight: 700 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  Follow on Facebook
                </a>
              </div>
            </div>

            {/* Form */}
            <div style={{ background: 'var(--cream)', borderRadius: 12, padding: '2rem' }}>
              {sent ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                  <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#D1FAE5', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                    <CheckCircle size={32} color="#065F46" />
                  </div>
                  <h3 style={{ fontFamily: 'Baloo 2,sans-serif', fontSize: '1.5rem', color: 'var(--text-dark)', marginBottom: '0.5rem' }}>Message Received</h3>
                  <p style={{ fontFamily: 'Poppins,sans-serif', color: 'var(--text-mid)', fontSize: '0.875rem' }}>Our team will be in contact with you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 style={{ fontFamily: 'Baloo 2,sans-serif', fontSize: '1.4rem', color: 'var(--text-dark)', marginBottom: '1.5rem' }}>Send a Message</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                    <div><label>First Name</label><input required value={form.firstName} onChange={e => setForm({...form, firstName: e.target.value})} placeholder="Jane" /></div>
                    <div><label>Last Name</label><input required value={form.lastName} onChange={e => setForm({...form, lastName: e.target.value})} placeholder="Smith" /></div>
                  </div>
                  <div style={{ marginBottom: '1rem' }}><label>Email</label><input type="email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="jane@email.com" /></div>
                  <div style={{ marginBottom: '1rem' }}><label>Phone</label><input type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} placeholder="+1 647 000 0000" /></div>
                  <div style={{ marginBottom: '1.5rem' }}><label>Message</label><textarea required rows={5} value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder="How can we help you?" /></div>
                  <button type="submit" disabled={loading} className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
