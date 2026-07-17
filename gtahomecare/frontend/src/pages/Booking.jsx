import { useState } from 'react';
import { CheckCircle, Phone, Clock, Shield, ChevronRight, ChevronLeft } from 'lucide-react';
import api from '../utils/api';

const carePlanServices = [
  '1. Assist with Bathing',
  '2. Assist with Dressing',
  '3. Assist with Personal Hygiene',
  '4. Assist with Eating',
  '5. Meal Preparation',
  '6. Light Housekeeping',
  '7. Assist with Exercise and Mobility',
  '8. Medication Reminders',
  '9. Companionship & Social Engagement',
  '10. Escort to Medical Appointments',
  '11. Laundry & Linen Changes',
  '12. Grocery Shopping Assistance',
  '13. Overnight Supervision',
  '14. Fall Prevention & Safety Monitoring',
  '15. Dementia / Alzheimer\'s Care Support',
];

const serviceTypes = ['Home Care', 'North York Senior Care', 'Companion Care', 'Respite Care', '24-Hour Home Care', 'Personal Care Services'];

const steps = ['Contact Info', 'Client Info', 'Care Plan', 'Review'];

export default function BookingPage() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '', address: '', city: '', postalCode: '',
    preferredDate: '', preferredTime: '',
    clientName: '', clientAge: '', clientRelationship: '', serviceType: '',
    clientInfo: '',
    carePlanServices: carePlanServices.map(s => ({ service: s, required: false })),
    additionalNotes: '',
  });

  const set = (key, val) => setForm(f => ({ ...f, [key]: val }));
  const toggleCare = (idx) => {
    const updated = [...form.carePlanServices];
    updated[idx].required = !updated[idx].required;
    setForm(f => ({ ...f, carePlanServices: updated }));
  };

  const handleSubmit = async () => {
    setLoading(true); setError('');
    try {
      await api.post('/bookings', form);
      setSubmitted(true);
    } catch (err) {
      setError(err.response?.data?.message || 'Submission failed. Please try again.');
    } finally { setLoading(false); }
  };

  if (submitted) return (
    <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4rem 1.5rem', textAlign: 'center' }}>
      <div>
        <div style={{ width: 80, height: 80, borderRadius: '50%', background: '#D1FAE5', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
          <CheckCircle size={40} color="#065F46" />
        </div>
        <h2 style={{ fontFamily: 'Baloo 2,sans-serif', fontSize: '2rem', color: 'var(--text-dark)', marginBottom: '0.75rem' }}>Booking Request Received</h2>
        <p style={{ fontFamily: 'Poppins,sans-serif', color: 'var(--text-mid)', maxWidth: 440, margin: '0 auto', lineHeight: 1.8 }}>
          A care coordinator will contact you within 24 hours to confirm your assessment. Thank you for choosing GTA Homecare Services.
        </p>
        <div style={{ marginTop: '2rem' }}>
          <a href="tel:+14169100223" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <Phone size={15} /> Call us anytime
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Hero */}
      <div className="page-hero">
        <img src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=1400&q=80" alt="Booking" />
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <span className="section-tag" style={{ color: 'var(--gold-light)' }}>Get Started</span>
          <h1 style={{ fontFamily: 'Baloo 2,sans-serif', fontSize: 'clamp(2rem,4vw,3rem)', color: 'white' }}>Book an Appointment</h1>
        </div>
      </div>

      <section style={{ padding: '4rem 0', background: 'var(--cream)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '3rem', alignItems: 'start' }}>

            {/* Form */}
            <div style={{ background: 'white', borderRadius: 12, padding: '2.5rem', boxShadow: '0 2px 20px rgba(0,0,0,0.07)' }}>
              {/* Steps */}
              <div style={{ display: 'flex', gap: 0, marginBottom: '2.5rem' }}>
                {steps.map((s, i) => (
                  <div key={s} style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
                      <div style={{ width: 32, height: 32, borderRadius: '50%', background: i <= step ? 'var(--red)' : 'var(--border)', color: i <= step ? 'white' : 'var(--text-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Poppins,sans-serif', fontWeight: 700, fontSize: '0.8rem', marginBottom: 4, transition: 'all 0.3s' }}>
                        {i < step ? <CheckCircle size={16} /> : i + 1}
                      </div>
                      <div style={{ fontFamily: 'Poppins,sans-serif', fontSize: '0.68rem', color: i === step ? 'var(--red)' : 'var(--text-light)', fontWeight: i === step ? 700 : 400, textAlign: 'center', whiteSpace: 'nowrap' }}>{s}</div>
                    </div>
                    {i < steps.length - 1 && <div style={{ height: 2, flex: 1, background: i < step ? 'var(--red)' : 'var(--border)', marginBottom: 20, transition: 'background 0.3s' }} />}
                  </div>
                ))}
              </div>

              {/* Step 0: Contact */}
              {step === 0 && (
                <div>
                  <h3 style={{ fontFamily: 'Baloo 2,sans-serif', fontSize: '1.4rem', color: 'var(--text-dark)', marginBottom: '1.75rem' }}>Your Contact Information</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                    <div><label>First Name *</label><input value={form.firstName} onChange={e => set('firstName', e.target.value)} placeholder="Jane" /></div>
                    <div><label>Last Name *</label><input value={form.lastName} onChange={e => set('lastName', e.target.value)} placeholder="Smith" /></div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                    <div><label>Email *</label><input type="email" value={form.email} onChange={e => set('email', e.target.value)} placeholder="jane@email.com" /></div>
                    <div><label>Phone *</label><input type="tel" value={form.phone} onChange={e => set('phone', e.target.value)} placeholder="+1 647 000 0000" /></div>
                  </div>
                  <div style={{ marginBottom: '1rem' }}>
                    <label>Address</label><input value={form.address} onChange={e => set('address', e.target.value)} placeholder="Street address" />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                    <div><label>City</label><input value={form.city} onChange={e => set('city', e.target.value)} placeholder="Toronto" /></div>
                    <div><label>Postal Code</label><input value={form.postalCode} onChange={e => set('postalCode', e.target.value)} placeholder="M3M 1A5" /></div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div><label>Preferred Date</label><input type="date" value={form.preferredDate} onChange={e => set('preferredDate', e.target.value)} /></div>
                    <div><label>Preferred Time</label>
                      <select value={form.preferredTime} onChange={e => set('preferredTime', e.target.value)}>
                        <option value="">Select time</option>
                        {['Morning (8am-12pm)', 'Afternoon (12pm-4pm)', 'Evening (4pm-8pm)', 'Flexible'].map(t => <option key={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 1: Client Info */}
              {step === 1 && (
                <div>
                  <h3 style={{ fontFamily: 'Baloo 2,sans-serif', fontSize: '1.4rem', color: 'var(--text-dark)', marginBottom: '1.75rem' }}>Client Information</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                    <div><label>Client's Full Name</label><input value={form.clientName} onChange={e => set('clientName', e.target.value)} placeholder="Name of person needing care" /></div>
                    <div><label>Client's Age</label><input value={form.clientAge} onChange={e => set('clientAge', e.target.value)} placeholder="e.g. 78" /></div>
                  </div>
                  <div style={{ marginBottom: '1rem' }}>
                    <label>Your Relationship to Client</label>
                    <select value={form.clientRelationship} onChange={e => set('clientRelationship', e.target.value)}>
                      <option value="">Select relationship</option>
                      {['Self', 'Spouse / Partner', 'Son / Daughter', 'Sibling', 'Parent', 'Friend', 'Legal Guardian', 'Other'].map(r => <option key={r}>{r}</option>)}
                    </select>
                  </div>
                  <div style={{ marginBottom: '1rem' }}>
                    <label>Service Required</label>
                    <select value={form.serviceType} onChange={e => set('serviceType', e.target.value)}>
                      <option value="">Select a service</option>
                      {serviceTypes.map(s => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label>Please provide as much information as possible about the client's condition and any concerns we should be aware of *</label>
                    <textarea rows={5} value={form.clientInfo} onChange={e => set('clientInfo', e.target.value)}
                      placeholder="Diagnoses, mobility, cognition, medications, allergies, behaviour, safety concerns, family concerns, etc." />
                  </div>
                </div>
              )}

              {/* Step 2: Care Plan */}
              {step === 2 && (
                <div>
                  <h3 style={{ fontFamily: 'Baloo 2,sans-serif', fontSize: '1.4rem', color: 'var(--text-dark)', marginBottom: '0.5rem' }}>Care Plan Services</h3>
                  <p style={{ fontFamily: 'Poppins,sans-serif', fontSize: '0.875rem', color: 'var(--text-light)', marginBottom: '1.75rem' }}>Select all services required for your loved one.</p>
                  
                  {/* Table header */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', background: '#1E3A5F', color: 'white', padding: '0.75rem 1rem', borderRadius: '6px 6px 0 0', marginBottom: 0 }}>
                    <span style={{ fontFamily: 'Poppins,sans-serif', fontSize: '0.85rem', fontWeight: 700 }}>Service</span>
                    <span style={{ fontFamily: 'Poppins,sans-serif', fontSize: '0.85rem', fontWeight: 700 }}>Required</span>
                  </div>
                  <div style={{ border: '1px solid var(--border)', borderTop: 'none', borderRadius: '0 0 6px 6px', overflow: 'hidden' }}>
                    {form.carePlanServices.map((item, idx) => (
                      <div key={idx} onClick={() => toggleCare(idx)} style={{ display: 'grid', gridTemplateColumns: '1fr auto', padding: '0.875rem 1rem', alignItems: 'center', borderBottom: idx < form.carePlanServices.length - 1 ? '1px solid var(--border)' : 'none', background: item.required ? '#FEF0F0' : idx % 2 === 0 ? '#FAFAFA' : 'white', cursor: 'pointer', transition: 'background 0.15s' }}>
                        <span style={{ fontFamily: 'Poppins,sans-serif', fontSize: '0.875rem', color: 'var(--text-dark)' }}>{item.service}</span>
                        <div style={{ width: 20, height: 20, border: `2px solid ${item.required ? 'var(--red)' : 'var(--border)'}`, borderRadius: 3, background: item.required ? 'var(--red)' : 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.15s' }}>
                          {item.required && <svg width="12" height="12" viewBox="0 0 12 12"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" /></svg>}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop: '1.5rem' }}>
                    <label>Additional Notes</label>
                    <textarea rows={3} value={form.additionalNotes} onChange={e => set('additionalNotes', e.target.value)} placeholder="Any other information or special requests..." />
                  </div>
                </div>
              )}

              {/* Step 3: Review */}
              {step === 3 && (
                <div>
                  <h3 style={{ fontFamily: 'Baloo 2,sans-serif', fontSize: '1.4rem', color: 'var(--text-dark)', marginBottom: '1.75rem' }}>Review Your Booking</h3>
                  {[
                    { label: 'Contact', items: [['Name', `${form.firstName} ${form.lastName}`], ['Email', form.email], ['Phone', form.phone], ['Address', `${form.address}, ${form.city} ${form.postalCode}`], ['Preferred Date', form.preferredDate], ['Preferred Time', form.preferredTime]] },
                    { label: 'Client', items: [['Client Name', form.clientName], ['Age', form.clientAge], ['Relationship', form.clientRelationship], ['Service', form.serviceType]] },
                  ].map(section => (
                    <div key={section.label} style={{ marginBottom: '1.5rem', background: 'var(--cream)', borderRadius: 8, padding: '1.25rem' }}>
                      <h4 style={{ fontFamily: 'Poppins,sans-serif', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 700, marginBottom: '0.75rem' }}>{section.label}</h4>
                      {section.items.filter(([,v]) => v).map(([k, v]) => (
                        <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.35rem 0', borderBottom: '1px solid var(--border)', fontSize: '0.875rem', fontFamily: 'Poppins,sans-serif' }}>
                          <span style={{ color: 'var(--text-light)' }}>{k}</span>
                          <span style={{ color: 'var(--text-dark)', fontWeight: 700, textAlign: 'right', maxWidth: '60%' }}>{v}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                  <div style={{ background: 'var(--cream)', borderRadius: 8, padding: '1.25rem', marginBottom: '1.5rem' }}>
                    <h4 style={{ fontFamily: 'Poppins,sans-serif', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 700, marginBottom: '0.75rem' }}>Care Plan Services Selected</h4>
                    {form.carePlanServices.filter(s => s.required).length === 0
                      ? <p style={{ fontFamily: 'Poppins,sans-serif', fontSize: '0.875rem', color: 'var(--text-light)' }}>No services selected</p>
                      : form.carePlanServices.filter(s => s.required).map(s => (
                          <div key={s.service} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '0.3rem 0', borderBottom: '1px solid var(--border)' }}>
                            <CheckCircle size={14} color="var(--red)" />
                            <span style={{ fontFamily: 'Poppins,sans-serif', fontSize: '0.875rem', color: 'var(--text-dark)' }}>{s.service}</span>
                          </div>
                        ))
                    }
                  </div>
                  {error && <div style={{ background: '#FEE2E2', color: '#991B1B', padding: '0.75rem 1rem', borderRadius: 6, fontFamily: 'Poppins,sans-serif', fontSize: '0.875rem', marginBottom: '1rem' }}>{error}</div>}
                </div>
              )}

              {/* Navigation */}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
                {step > 0
                  ? <button onClick={() => setStep(s => s - 1)} className="btn-outline" style={{ padding: '0.75rem 1.5rem' }}>
                      <ChevronLeft size={16} /> Back
                    </button>
                  : <div />
                }
                {step < 3
                  ? <button onClick={() => setStep(s => s + 1)} className="btn-primary" style={{ padding: '0.75rem 1.75rem' }}
                      disabled={step === 0 && (!form.firstName || !form.lastName || !form.email || !form.phone)}>
                      Next <ChevronRight size={16} />
                    </button>
                  : <button onClick={handleSubmit} disabled={loading} className="btn-gold" style={{ padding: '0.75rem 2rem' }}>
                      {loading ? 'Submitting...' : 'Submit Booking'}
                    </button>
                }
              </div>
            </div>

            {/* Sidebar */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ background: 'var(--red-dark)', color: 'white', borderRadius: 10, padding: '1.5rem' }}>
                <Phone size={22} style={{ marginBottom: 10 }} />
                <h4 style={{ fontFamily: 'Baloo 2,sans-serif', fontSize: '1.15rem', marginBottom: '0.5rem' }}>Prefer to Call?</h4>
                <p style={{ fontFamily: 'Poppins,sans-serif', fontSize: '0.82rem', opacity: 0.8, marginBottom: '0.75rem', lineHeight: 1.6 }}>Available 24/7</p>
                <a href="tel:+14169100223" style={{ fontFamily: 'Baloo 2,sans-serif', fontSize: '1.4rem', color: 'white', textDecoration: 'none', display: 'block' }}>+1 416 910 0223</a>
              </div>
              {[
                { icon: <CheckCircle size={18} color="var(--red)" />, title: 'Free Assessment', desc: 'No cost, no obligation home visit.' },
                { icon: <Clock size={18} color="var(--red)" />, title: '24-Hour Response', desc: 'A coordinator contacts you within 24h.' },
                { icon: <Shield size={18} color="var(--red)" />, title: 'Confidential', desc: 'Your information stays strictly private.' },
              ].map(item => (
                <div key={item.title} style={{ background: 'white', borderRadius: 10, padding: '1.25rem', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', display: 'flex', gap: 12 }}>
                  <div style={{ flexShrink: 0, marginTop: 2 }}>{item.icon}</div>
                  <div>
                    <div style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 700, fontSize: '0.875rem', color: 'var(--text-dark)', marginBottom: 4 }}>{item.title}</div>
                    <div style={{ fontFamily: 'Poppins,sans-serif', fontSize: '0.8rem', color: 'var(--text-light)', lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <style>{`@media(max-width:768px){.container>div[style*="grid-template-columns: 1fr 300px"]{grid-template-columns:1fr !important;}}`}</style>
    </>
  );
}
