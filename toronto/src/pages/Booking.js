import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { sendBooking } from '../utils/emailService';
import { NotifContext } from '../App';

const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const DAYS = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
const TIMES = ['9:00 AM','9:30 AM','10:00 AM','10:30 AM','11:00 AM','11:30 AM','1:00 PM','1:30 PM','2:00 PM','2:30 PM','3:00 PM','3:30 PM','4:00 PM','4:30 PM'];
const UNAVAILABLE = [3, 7, 11]; // simulated unavailable slots

export default function Booking() {
  const notify = useContext(NotifContext);
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ fname: '', lname: '', email: '', phone: '', service: '', notes: '', virtual: false });
  const [calDate, setCalDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  // Pre-fill from popup sessionStorage
  useEffect(() => {
    const pf = sessionStorage.getItem('prefill');
    if (pf) { try { const d = JSON.parse(pf); setForm(f => ({ ...f, ...d })); sessionStorage.removeItem('prefill'); } catch {} }
  }, []);

  const change = e => {
    const { name, value, type, checked } = e.target;
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  };

  // Step 1 → 2
  const toStep2 = () => {
    if (!form.fname || !form.email || !form.phone || !form.service) { notify('Please fill in all required fields'); return; }
    setStep(2);
  };

  // Step 2 → 3
  const toStep3 = () => {
    if (!selectedDate || !selectedTime) { notify('Please select a date and time'); return; }
    setStep(3);
  };

  const submit = async () => {
    setLoading(true);
    try {
      const dateStr = selectedDate.toLocaleDateString('en-CA', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
      await sendBooking({ ...form, date: dateStr, time: selectedTime });
      setDone(true);
    } catch {
      notify('Something went wrong. Please try again or call us.');
    } finally {
      setLoading(false);
    }
  };

  // Calendar helpers
  const prevMonth = () => { const d = new Date(calDate); d.setMonth(d.getMonth() - 1); setCalDate(d); };
  const nextMonth = () => { const d = new Date(calDate); d.setMonth(d.getMonth() + 1); setCalDate(d); };

  const renderCal = () => {
    const year = calDate.getFullYear();
    const month = calDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();
    const today = new Date(); today.setHours(0,0,0,0);
    const cells = [];
    for (let i = 0; i < firstDay; i++) cells.push(<div key={'e'+i}/>);
    for (let d = 1; d <= totalDays; d++) {
      const date = new Date(year, month, d);
      const isPast = date < today;
      const isSun = date.getDay() === 0;
      const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();
      const isToday = date.toDateString() === today.toDateString();
      const disabled = isPast || isSun;
      cells.push(
        <div key={d} onClick={() => { if (!disabled) { setSelectedDate(date); setSelectedTime(null); }}}
          style={{
            aspectRatio: '1', display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 13, borderRadius: 4, cursor: disabled ? 'not-allowed' : 'pointer',
            fontWeight: 500, transition: 'all 0.15s',
            background: isSelected ? 'var(--blue)' : 'transparent',
            color: isSelected ? '#fff' : disabled ? '#ccc' : 'var(--navy)',
            border: isToday && !isSelected ? '2px solid var(--gold)' : '2px solid transparent',
          }}
          onMouseEnter={e => { if (!disabled && !isSelected) e.currentTarget.style.background = 'rgba(26,75,140,0.1)'; }}
          onMouseLeave={e => { if (!isSelected) e.currentTarget.style.background = 'transparent'; }}
        >{d}</div>
      );
    }
    return cells;
  };

  const stepDot = (n) => ({
    width: 36, height: 36, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: 13, fontWeight: 700,
    background: n < step ? 'var(--blue)' : n === step ? 'var(--gold)' : '#e0e0e0',
    color: n < step ? '#fff' : n === step ? 'var(--navy)' : '#999',
  });

  const dateStr = selectedDate ? selectedDate.toLocaleDateString('en-CA', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : '';

  return (
    <div style={{ paddingTop: 70, background: 'var(--cream)', minHeight: '100vh' }}>
      {/* Hero */}
      <div style={{ background: 'var(--navy)', padding: '72px 5% 56px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
          <span className="section-label">Schedule Your Visit</span>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(32px,5vw,52px)', fontWeight: 700, color: '#fff', marginBottom: 14 }}>Book an Appointment</h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 16, lineHeight: 1.7 }}>Same-day appointments usually available. By appointment only — please do not arrive without scheduling.</p>
        </div>
      </div>

      <div style={{ maxWidth: 820, margin: '-36px auto 80px', padding: '0 5%' }}>
        {/* Steps */}
        {!done && (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 40, gap: 0 }}>
            {[1, 2, 3].map((n, i) => (
              <React.Fragment key={n}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={stepDot(n)}>{n < step ? <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg> : n}</div>
                  <div style={{ fontSize: 10, color: '#888', marginTop: 6, letterSpacing: 1, textTransform: 'uppercase', whiteSpace: 'nowrap' }}>{['Your Info','Date & Time','Confirm'][i]}</div>
                </div>
                {i < 2 && <div style={{ width: 72, height: 2, background: step > n ? 'var(--blue)' : '#ddd', marginTop: -14, transition: 'background 0.3s' }}/>}
              </React.Fragment>
            ))}
          </div>
        )}

        <div style={{ background: '#fff', borderRadius: 6, boxShadow: 'var(--shadow)', overflow: 'hidden' }}>

          {/* ── STEP 1 ── */}
          {!done && step === 1 && (
            <div style={{ padding: '44px 48px' }} className="booking-pad">
              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 26, fontWeight: 700, color: 'var(--navy)', marginBottom: 6 }}>Your Information</h2>
              <p style={{ color: 'var(--text)', fontSize: 14, marginBottom: 24 }}>Fill in your details to unlock your 10% discount on your first booking.</p>
              <div style={{ background: 'linear-gradient(135deg,var(--gold),var(--gold-light))', color: 'var(--navy)', padding: '14px 20px', borderRadius: 4, marginBottom: 28, display: 'flex', alignItems: 'center', gap: 12 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15 }}>Unlock 10% Off Your First Visit</div>
                  <div style={{ fontSize: 13, opacity: 0.75 }}>Complete your booking to receive your exclusive discount</div>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group"><label>First Name *</label><input name="fname" value={form.fname} onChange={change} placeholder="John"/></div>
                <div className="form-group"><label>Last Name</label><input name="lname" value={form.lname} onChange={change} placeholder="Smith"/></div>
              </div>
              <div className="form-row">
                <div className="form-group"><label>Email Address *</label><input name="email" type="email" value={form.email} onChange={change} placeholder="john@email.com"/></div>
                <div className="form-group"><label>Phone Number *</label><input name="phone" type="tel" value={form.phone} onChange={change} placeholder="+1 (416) 000-0000"/></div>
              </div>
              <div className="form-group">
                <label>Service Required *</label>
                <select name="service" value={form.service} onChange={change}>
                  <option value="">Select a service...</option>
                  <option>Affidavit</option>
                  <option>Statutory Declaration</option>
                  <option>Consent Letter for Minor Travel</option>
                  <option>Power of Attorney</option>
                  <option>Real Estate Documents</option>
                  <option>Sworn Statement</option>
                  <option>Other / Not Sure</option>
                </select>
              </div>
              <div className="form-group"><label>Additional Notes</label><textarea name="notes" value={form.notes} onChange={change} placeholder="Any special requirements..."/></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 28 }}>
                <input type="checkbox" name="virtual" id="virtual" checked={form.virtual} onChange={change} style={{ width: 'auto' }}/>
                <label htmlFor="virtual" style={{ textTransform: 'none', letterSpacing: 0, fontSize: 14, fontWeight: 400, color: 'var(--text)', cursor: 'pointer' }}>I prefer a virtual commissioning appointment</label>
              </div>
              <button className="btn-primary" onClick={toStep2} style={{ width: '100%', justifyContent: 'center' }}>
                Continue — Select Date & Time
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </button>
            </div>
          )}

          {/* ── STEP 2 ── */}
          {!done && step === 2 && (
            <div style={{ padding: '44px 48px' }} className="booking-pad">
              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 26, fontWeight: 700, color: 'var(--navy)', marginBottom: 6 }}>Select Date & Time</h2>
              <p style={{ color: 'var(--text)', fontSize: 14, marginBottom: 28 }}>Choose your preferred appointment date and available time slot.</p>

              {/* Calendar */}
              <div style={{ marginBottom: 28 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
                  <button onClick={prevMonth} style={{ width: 34, height: 34, borderRadius: '50%', background: 'var(--navy)', border: 'none', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"/></svg>
                  </button>
                  <span style={{ fontFamily: "'Playfair Display',serif", fontSize: 20, fontWeight: 700, color: 'var(--navy)' }}>{MONTHS[calDate.getMonth()]} {calDate.getFullYear()}</span>
                  <button onClick={nextMonth} style={{ width: 34, height: 34, borderRadius: '50%', background: 'var(--navy)', border: 'none', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                  </button>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 4 }}>
                  {DAYS.map(d => <div key={d} style={{ textAlign: 'center', fontSize: 10, fontWeight: 700, color: 'var(--muted)', letterSpacing: 1, textTransform: 'uppercase', padding: '6px 0' }}>{d}</div>)}
                  {renderCal()}
                </div>
              </div>

              {/* Time slots */}
              {selectedDate && (
                <div>
                  <p style={{ fontSize: 12, fontWeight: 700, color: 'var(--navy)', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 12 }}>
                    Available Times — {selectedDate.toLocaleDateString('en-CA', { month: 'short', day: 'numeric' })}
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 8 }}>
                    {TIMES.map((t, i) => {
                      const unavail = UNAVAILABLE.includes(i);
                      const sel = selectedTime === t;
                      return (
                        <div key={t} onClick={() => { if (!unavail) setSelectedTime(t); }}
                          style={{
                            padding: '10px', textAlign: 'center', fontSize: 13, fontWeight: 500,
                            border: `2px solid ${sel ? 'var(--blue)' : '#e8eaf0'}`,
                            borderRadius: 4, cursor: unavail ? 'not-allowed' : 'pointer',
                            background: sel ? 'var(--blue)' : '#fff',
                            color: sel ? '#fff' : unavail ? '#ccc' : 'var(--navy)',
                            textDecoration: unavail ? 'line-through' : 'none',
                            opacity: unavail ? 0.5 : 1, transition: 'all 0.15s',
                          }}>
                          {t}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              <div style={{ display: 'flex', gap: 12, marginTop: 32 }}>
                <button className="btn-secondary" onClick={() => setStep(1)} style={{ color: 'var(--navy)', borderColor: 'rgba(10,22,40,0.2)' }}>Back</button>
                <button className="btn-primary" onClick={toStep3} style={{ flex: 1, justifyContent: 'center' }}>Review Booking</button>
              </div>
            </div>
          )}

          {/* ── STEP 3 ── */}
          {!done && step === 3 && (
            <div style={{ padding: '44px 48px' }} className="booking-pad">
              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 26, fontWeight: 700, color: 'var(--navy)', marginBottom: 6 }}>Confirm Booking</h2>
              <p style={{ color: 'var(--text)', fontSize: 14, marginBottom: 24 }}>Review your details before submitting.</p>
              <div style={{ border: '2px solid var(--gold)', borderRadius: 4, padding: '24px 28px', background: 'rgba(184,150,90,0.04)', marginBottom: 20 }}>
                {[
                  ['Name', `${form.fname} ${form.lname}`],
                  ['Email', form.email],
                  ['Phone', form.phone],
                  ['Service', form.service],
                  ['Date', dateStr],
                  ['Time', selectedTime],
                  ['Type', form.virtual ? 'Virtual Commissioning' : 'In-Person'],
                  ['Discount', 'TNO-FIRST10 — 10% Off Applied'],
                ].map(([label, val]) => (
                  <div key={label} style={{ display: 'flex', justifyContent: 'space-between', padding: '11px 0', borderBottom: '1px solid rgba(184,150,90,0.15)', flexWrap: 'wrap', gap: 8 }}>
                    <span style={{ fontSize: 13, color: 'var(--text)' }}>{label}</span>
                    <span style={{ fontSize: 13, fontWeight: 600, color: label === 'Discount' ? 'var(--gold)' : 'var(--navy)' }}>{val}</span>
                  </div>
                ))}
              </div>
              <div style={{ background: 'rgba(26,75,140,0.06)', borderRadius: 4, padding: '14px 18px', fontSize: 13, color: 'var(--text)', lineHeight: 1.6, marginBottom: 24 }}>
                <strong style={{ color: 'var(--navy)' }}>Important:</strong> This is a booking request. The notary will confirm via email. Payment is collected at your appointment.
              </div>
              <div style={{ display: 'flex', gap: 12 }}>
                <button className="btn-secondary" onClick={() => setStep(2)} style={{ color: 'var(--navy)', borderColor: 'rgba(10,22,40,0.2)' }}>Back</button>
                <button className="btn-primary" onClick={submit} disabled={loading} style={{ flex: 1, justifyContent: 'center', opacity: loading ? 0.7 : 1 }}>
                  {loading ? 'Submitting...' : 'Submit Booking Request'}
                  {!loading && <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>}
                </button>
              </div>
            </div>
          )}

          {/* ── SUCCESS ── */}
          {done && (
            <div style={{ padding: '64px 48px', textAlign: 'center' }}>
              <div style={{ width: 72, height: 72, background: 'rgba(26,75,140,0.08)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 30, fontWeight: 700, color: 'var(--navy)', marginBottom: 12 }}>Booking Request Submitted!</h3>
              <p style={{ color: 'var(--text)', fontSize: 15, lineHeight: 1.7, maxWidth: 420, margin: '0 auto 32px' }}>
                Thank you {form.fname}! Your booking request has been sent. The notary will review and confirm your appointment via email shortly.
              </p>
              <div style={{ background: 'var(--cream)', borderRadius: 4, padding: '20px 28px', display: 'inline-block', marginBottom: 36 }}>
                <p style={{ fontSize: 12, color: 'var(--text)', marginBottom: 4 }}>Your 10% Discount Code</p>
                <p style={{ fontFamily: "'Playfair Display',serif", fontSize: 26, fontWeight: 700, color: 'var(--gold)', letterSpacing: 4 }}>TNO-FIRST10</p>
                <p style={{ fontSize: 12, color: '#aaa', marginTop: 4 }}>Mention this when your booking is confirmed</p>
              </div>
              <br/>
              <Link to="/" className="btn-primary" style={{ margin: '0 auto' }}>Back to Home</Link>
            </div>
          )}
        </div>
      </div>
      <style>{`@media(max-width:600px){.booking-pad{padding:28px 20px!important;}}`}</style>
    </div>
  );
}
