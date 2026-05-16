import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import api from '../utils/api';
import './Contact.css';
const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post('/contact', form);
      setSent(true);
      toast.success('Message sent! We\'ll be in touch soon.');
    } catch { toast.error('Failed to send message. Please try again.'); }
    finally { setLoading(false); }
  };

  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We'd love to connect with you.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div>
              <h2 className="section-title">Get in Touch</h2>
              <div className="divider"></div>
              {[
                { icon: <FiMail />, title: 'General Questions', desc: 'For questions about the network, pastor gatherings, or partnerships, contact our team.', info: 'info@cobbchurchnetwork.org' },
                { icon: <FiPhone />, title: 'Church Applications', desc: 'Need help with the Request Access process? We\'re here to help.', info: 'Apply at our Request Access page' },
                { icon: <FiMapPin />, title: 'Partnership Opportunities', desc: 'Interested in collaborating or supporting the vision? Reach out today.', info: 'Cobb County, Georgia' },
              ].map((item, i) => (
                <div key={i} style={{display:'flex',gap:'16px',marginBottom:'28px'}}>
                  <div className="icon-box" style={{flexShrink:0,width:'48px',height:'48px'}}>{item.icon}</div>
                  <div>
                    <h3 style={{color:'var(--navy)',marginBottom:'6px',fontSize:'1rem'}}>{item.title}</h3>
                    <p style={{color:'var(--text-light)',fontSize:'0.88rem',marginBottom:'4px'}}>{item.desc}</p>
                    <p style={{color:'var(--gold)',fontSize:'0.88rem',fontWeight:600}}>{item.info}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="card card-body" style={{padding:'40px'}}>
              {sent ? (
                <div className="text-center" style={{padding:'40px 0'}}>
                  <div style={{width:'64px',height:'64px',borderRadius:'50%',background:'var(--gold)',color:'var(--white)',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 20px',fontSize:'1.5rem'}}>✓</div>
                  <h3 style={{color:'var(--navy)',marginBottom:'10px'}}>Message Sent!</h3>
                  <p style={{color:'var(--text-light)'}}>Thank you for reaching out. We'll be in touch soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 style={{color:'var(--navy)',marginBottom:'24px'}}>Send Us a Message</h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Your Name *</label>
                      <input className="form-input" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Pastor John Smith" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email Address *</label>
                      <input type="email" className="form-input" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="pastor@church.org" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Subject</label>
                    <input className="form-input" value={form.subject} onChange={e => setForm({...form, subject: e.target.value})} placeholder="General Inquiry" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Message *</label>
                    <textarea className="form-textarea" required rows={5} value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder="How can we help you?" />
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg" disabled={loading} style={{width:'100%',justifyContent:'center'}}>
                    <FiSend /> {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
