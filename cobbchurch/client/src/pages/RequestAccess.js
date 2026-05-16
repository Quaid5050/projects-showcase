import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiCheck, FiUsers, FiPackage, FiShield, FiCalendar, FiBookOpen, FiGrid } from 'react-icons/fi';
import { toast } from 'react-toastify';
import api from '../utils/api';
import './RequestAccess.css';

const features = [
  { icon: <FiUsers />, title: 'Church Directory', desc: 'Connect with pastors and churches throughout Cobb County.' },
  { icon: <FiPackage />, title: 'Resource Directory', desc: 'Find churches offering support, services, and ministry resources.' },
  { icon: <FiShield />, title: 'Crisis Response', desc: 'Respond together during emergencies and urgent community needs.' },
  { icon: <FiCalendar />, title: 'Events & Gatherings', desc: 'Stay informed about pastor gatherings, trainings, and community events.' },
  { icon: <FiBookOpen />, title: 'Pastor Stories', desc: 'Hear real stories of unity, partnership, and impact.' },
  { icon: <FiGrid />, title: 'Private Dashboard', desc: 'Manage your church profile, resources, needs, and communication.' },
];

const steps = [
  { step: '01', title: 'Churches Join the Network', desc: 'Pastors and church leaders apply for access to the private network.' },
  { step: '02', title: 'Churches Share Resources', desc: 'Churches can list resources, ministries, services, and support they offer.' },
  { step: '03', title: 'Churches Submit Needs', desc: 'Churches can request help, support, volunteers, supplies, prayer, or partnerships.' },
  { step: '04', title: 'Churches Respond Together', desc: 'When needs arise or crisis hits, churches can communicate and respond together.' },
];

const RequestAccess = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    pastorName: '', churchName: '', email: '', password: '', confirmPassword: '',
    churchAddress: '', city: 'Marietta', state: 'GA', zip: '', phone: '',
    website: '', denomination: '', congregationSize: '', applicationMessage: ''
  });

  const sizes = ['1-50', '51-100', '101-250', '251-500', '500+'];

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    setLoading(true);
    try {
      await api.post('/auth/register', form);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      toast.error(err.response?.data?.message || 'Submission failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="request-success">
        <div className="success-card">
          <div className="success-icon"><FiCheck size={40} /></div>
          <h1>Thank You</h1>
          <div className="divider divider-center"></div>
          <p>Your request has been submitted successfully.</p>
          <p>Our team will review your application and follow up soon.</p>
          <p>Thank you for your interest in helping strengthen churches and community throughout Cobb County.</p>
          <Link to="/" className="btn btn-primary" style={{marginTop:'24px'}}>Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="request-access">
      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <h1>Request Access</h1>
          <p>Apply to join the Cobb Church Network private pastor collaboration platform.</p>
        </div>
      </section>

      {/* WHO CAN JOIN */}
      <section className="section bg-off-white">
        <div className="container-sm text-center">
          <span className="section-label">Who Can Join?</span>
          <h2 className="section-title">Built for Pastors & Ministry Leaders</h2>
          <div className="divider divider-center"></div>
          <p className="section-subtitle">
            Cobb Church Network is designed for pastors, ministry leaders, and approved church representatives throughout Cobb County.
            Once approved, churches receive access to the private network, church directory, resource system, and collaboration tools.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section">
        <div className="container text-center">
          <span className="section-label">How It Works</span>
          <h2 className="section-title">Four Simple Steps</h2>
          <div className="divider divider-center"></div>
          <div className="grid-4" style={{marginTop:'48px'}}>
            {steps.map((s, i) => (
              <div key={i} className="step-card">
                <div className="step-number">{s.step}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section bg-off-white">
        <div className="container text-center">
          <span className="section-label">What You'll Have Access To</span>
          <h2 className="section-title">Everything Your Church Needs</h2>
          <div className="divider divider-center"></div>
          <div className="grid-3" style={{marginTop:'48px'}}>
            {features.map((f, i) => (
              <div key={i} className="feature-card">
                <div className="icon-box">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section className="section">
        <div className="container-sm">
          <div className="text-center" style={{marginBottom:'48px'}}>
            <span className="section-label">Apply Today</span>
            <h2 className="section-title">Complete Your Application</h2>
            <div className="divider divider-center"></div>
            <p className="section-subtitle">Complete the form below and our team will review your request. Once approved, you will receive login information and access to the private network.</p>
          </div>

          <form className="application-form" onSubmit={handleSubmit}>
            <div className="form-section-title">Personal Information</div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Pastor Name *</label>
                <input name="pastorName" className="form-input" required value={form.pastorName} onChange={handleChange} placeholder="Pastor John Smith" />
              </div>
              <div className="form-group">
                <label className="form-label">Church Name *</label>
                <input name="churchName" className="form-input" required value={form.churchName} onChange={handleChange} placeholder="Grace Community Church" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Email Address *</label>
                <input type="email" name="email" className="form-input" required value={form.email} onChange={handleChange} placeholder="pastor@yourchurch.org" />
              </div>
              <div className="form-group">
                <label className="form-label">Phone</label>
                <input name="phone" className="form-input" value={form.phone} onChange={handleChange} placeholder="(770) 555-0100" />
              </div>
            </div>

            <div className="form-section-title">Create Password</div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Password *</label>
                <input type="password" name="password" className="form-input" required minLength="6" value={form.password} onChange={handleChange} placeholder="Min. 6 characters" />
              </div>
              <div className="form-group">
                <label className="form-label">Confirm Password *</label>
                <input type="password" name="confirmPassword" className="form-input" required value={form.confirmPassword} onChange={handleChange} placeholder="Confirm password" />
              </div>
            </div>

            <div className="form-section-title">Church Information</div>
            <div className="form-group">
              <label className="form-label">Church Address</label>
              <input name="churchAddress" className="form-input" value={form.churchAddress} onChange={handleChange} placeholder="123 Main Street" />
            </div>
            <div className="form-row" style={{gridTemplateColumns:'2fr 1fr 1fr'}}>
              <div className="form-group">
                <label className="form-label">City</label>
                <input name="city" className="form-input" value={form.city} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label className="form-label">State</label>
                <input name="state" className="form-input" value={form.state} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label className="form-label">ZIP</label>
                <input name="zip" className="form-input" value={form.zip} onChange={handleChange} />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Denomination</label>
                <input name="denomination" className="form-input" value={form.denomination} onChange={handleChange} placeholder="Baptist, Non-denominational, etc." />
              </div>
              <div className="form-group">
                <label className="form-label">Congregation Size</label>
                <select name="congregationSize" className="form-select" value={form.congregationSize} onChange={handleChange}>
                  <option value="">Select size</option>
                  {sizes.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Church Website</label>
              <input name="website" className="form-input" value={form.website} onChange={handleChange} placeholder="https://yourchurch.org" />
            </div>
            <div className="form-group">
              <label className="form-label">Why do you want to join Cobb Church Network?</label>
              <textarea name="applicationMessage" className="form-textarea" rows="4" value={form.applicationMessage} onChange={handleChange} placeholder="Tell us about your church and how you hope to be part of this network..." />
            </div>

            <button type="submit" className="btn btn-primary btn-lg" disabled={loading} style={{width:'100%',justifyContent:'center'}}>
              {loading ? 'Submitting...' : 'Submit Application'}
            </button>
            <p style={{textAlign:'center',marginTop:'16px',fontSize:'0.85rem',color:'var(--gray)'}}>
              Already a member? <Link to="/login" style={{color:'var(--gold)'}}>Login here</Link>
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default RequestAccess;
