import { useState } from 'react';

const SERVICES = [
  'Furniture Removal',
  'Appliance Removal',
  'Yard Waste Removal',
  'Construction Debris',
  'Property Cleanup',
  'Commercial Junk Removal',
  'Other',
];

const TYPES = ['Home', 'Rental Property', 'Business', 'Commercial Property', 'Other'];

export default function LeadForm({ preselected = '' }) {
  const [result,  setResult]  = useState('');
  const [done,    setDone]    = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending…');

    const formData = new FormData(event.target);
    formData.append('access_key', 'd5fe78b6-152f-4cfa-a8a3-01f5723211af');
    formData.append('subject',    'New Estimate Request — Junk Pro Service');
    formData.append('from_name',  'Junk Pro Service Website');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setDone(true);
      event.target.reset();
    } else {
      setResult('Something went wrong. Please call +1 754-327-2760.');
    }
  };

  if (done) return (
    <div className="lead-form">
      <div className="form-success">
        <div className="success-icon">✅</div>
        <h3>Request Received!</h3>
        <p>Thank you! Junk Pro Service will contact you shortly with your free estimate.</p>
      </div>
    </div>
  );

  return (
    <form className="lead-form" onSubmit={onSubmit} noValidate aria-label="Free estimate request">

      {/* Web3Forms honeypot — stops bots */}
      <input type="checkbox" name="botcheck" style={{ display:'none' }} tabIndex={-1} autoComplete="off" />

      <div className="form-grid-2">
        <div className="form-group">
          <label htmlFor="lf-name">Full Name *</label>
          <input id="lf-name" name="name" type="text"
            placeholder="Your full name"
            defaultValue=""
            required autoComplete="name" />
        </div>
        <div className="form-group">
          <label htmlFor="lf-phone">Phone *</label>
          <input id="lf-phone" name="phone" type="tel"
            placeholder="+1 (754) 000-0000"
            defaultValue=""
            required autoComplete="tel" />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="lf-email">Email</label>
        <input id="lf-email" name="email" type="email"
          placeholder="your@email.com"
          defaultValue=""
          autoComplete="email" />
      </div>

      <div className="form-grid-2">
        <div className="form-group">
          <label htmlFor="lf-service">Service Needed *</label>
          <select id="lf-service" name="service" defaultValue={preselected} required>
            <option value="">Select service…</option>
            {SERVICES.map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="lf-type">Property Type</label>
          <select id="lf-type" name="property_type" defaultValue="">
            <option value="">Select type…</option>
            {TYPES.map(t => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="lf-address">Pickup Address</label>
        <input id="lf-address" name="address" type="text"
          placeholder="123 Main St, City, State"
          defaultValue=""
          autoComplete="street-address" />
      </div>

      <div className="form-group">
        <label htmlFor="lf-date">Preferred Date</label>
        <input id="lf-date" name="preferred_date" type="date"
          defaultValue=""
          min={new Date().toISOString().split('T')[0]} />
      </div>

      <div className="form-group">
        <label htmlFor="lf-msg">What needs to be removed?</label>
        <textarea id="lf-msg" name="message" rows={3}
          placeholder="Describe what needs to go…"
          defaultValue="" />
      </div>

      {result && !done && (
        <p style={{ color:'#cc3300', fontSize:'var(--fs-sm)', marginBottom:'var(--space-3)', fontWeight:600 }}>
          {result}
        </p>
      )}

      <button
        type="submit"
        className="btn btn-primary btn-lg btn-glow"
        style={{ width:'100%', justifyContent:'center' }}
      >
        {result === 'Sending…' ? 'Sending…' : 'Request Free Estimate →'}
      </button>
    </form>
  );
}
