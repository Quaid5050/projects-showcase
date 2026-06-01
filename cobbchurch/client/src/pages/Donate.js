import React, { useState } from 'react';
import { FiHeart, FiCreditCard, FiDollarSign, FiMail } from 'react-icons/fi';
import './Donate.css';

const amounts = [25, 50, 100, 250, 500, 1000];

const impacts = [
  { icon: '💻', label: 'Technology & platform development' },
  { icon: '🤝', label: 'Pastor gatherings and events' },
  { icon: '🌍', label: 'Community collaboration efforts' },
  { icon: '🚨', label: 'Crisis response coordination' },
  { icon: '⛪', label: 'Church support initiatives' },
  { icon: '📡', label: 'Communication systems' },
];

const Donate = () => {
  const [selected, setSelected]   = useState(100);
  const [custom, setCustom]       = useState('');
  const [method, setMethod]       = useState('card');
  const [frequency, setFrequency] = useState('one-time');

  const finalAmount = custom || selected || 0;

  const paypalLabel = 'Donate $' + finalAmount + ' via PayPal';
  const cardLabel   = 'Donate $' + finalAmount + ' — Coming Soon';

  return (
    <div>

      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <h1>Support the Mission</h1>
          <p>Help strengthen churches, build partnerships, and increase community impact throughout Cobb County.</p>
        </div>
      </section>

      {/* MAIN */}
      <section className="section">
        <div className="container">
          <div className="donate-layout">

            {/* LEFT */}
            <div className="donate-left">
              <span className="section-label">Why Give</span>
              <h2 className="section-title">Why Your Support Matters</h2>
              <div className="divider" />
              <p style={{ color: 'var(--text-light)', lineHeight: 1.8, marginBottom: '24px' }}>
                Your support helps make this network possible. Together, we can help churches
                serve more effectively and strengthen our community.
              </p>
              <p style={{ color: 'var(--navy)', fontWeight: 600, marginBottom: '16px' }}>Donations help fund:</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {impacts.map((item, i) => (
                  <div key={i} className="impact-item">
                    <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>
                    <span style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="partner-box">
                <h3 style={{ color: 'var(--gold)', marginBottom: '10px' }}>Partner With the Vision</h3>
                <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  Become a consistent partner in this movement by making a recurring donation.
                  Your ongoing support helps us plan for the future and serve more churches.
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <div className="donate-form-card">

              <h3 className="donate-form-title">Make a Donation</h3>
              <p className="donate-form-sub">Choose an amount, frequency, and payment method below.</p>

              {/* Amount buttons */}
              <div className="amount-grid">
                {amounts.map(a => (
                  <button
                    key={a}
                    onClick={() => { setSelected(a); setCustom(''); }}
                    className={'btn ' + (selected === a && !custom ? 'btn-primary' : 'btn-outline')}
                    style={{ justifyContent: 'center' }}
                  >
                    {'$' + a}
                  </button>
                ))}
              </div>

              {/* Custom amount */}
              <div className="form-group">
                <label className="form-label">Custom Amount</label>
                <div style={{ position: 'relative' }}>
                  <span className="currency-prefix">$</span>
                  <input
                    type="number"
                    className="form-input"
                    style={{ paddingLeft: '32px' }}
                    placeholder="Enter amount"
                    value={custom}
                    onChange={e => { setCustom(e.target.value); setSelected(null); }}
                  />
                </div>
              </div>

              {/* Frequency */}
              <div className="form-group">
                <label className="form-label">Frequency</label>
                <select
                  className="form-select"
                  value={frequency}
                  onChange={e => setFrequency(e.target.value)}
                >
                  <option value="one-time">One-time donation</option>
                  <option value="monthly">Monthly</option>
                  <option value="quarterly">Quarterly</option>
                  <option value="annually">Annually</option>
                </select>
              </div>

              {/* Amount display */}
              <div className="amount-display">
                <span>Donation Amount:</span>
                <span className="amount-value">{'$' + finalAmount}</span>
              </div>

              {/* Payment Method Tabs */}
              <div className="method-label">Select Payment Method</div>
              <div className="method-tabs">
                <button
                  className={'method-tab ' + (method === 'card' ? 'active' : '')}
                  onClick={() => setMethod('card')}
                >
                  <FiCreditCard /> Card
                </button>
                <button
                  className={'method-tab ' + (method === 'paypal' ? 'active' : '')}
                  onClick={() => setMethod('paypal')}
                >
                  PayPal
                </button>
                <button
                  className={'method-tab ' + (method === 'ach' ? 'active' : '')}
                  onClick={() => setMethod('ach')}
                >
                  <FiDollarSign /> Bank / ACH
                </button>
                <button
                  className={'method-tab ' + (method === 'check' ? 'active' : '')}
                  onClick={() => setMethod('check')}
                >
                  <FiMail /> Check
                </button>
              </div>

              {/* CARD */}
              {method === 'card' && (
                <div className="method-panel">
                  <div className="method-notice info">
                    <FiCreditCard />
                    <div>
                      <strong>Debit / Credit Card</strong>
                      <p>Card payments coming soon. Please use PayPal or another method.</p>
                    </div>
                  </div>
                  <button className="btn btn-primary btn-lg donate-btn" disabled>
                    {cardLabel}
                  </button>
                </div>
              )}

              {/* PAYPAL */}
              {method === 'paypal' && (
                <div className="method-panel">
                  <div className="method-notice info">
                    <span style={{ fontSize: '1.4rem' }}>💳</span>
                    <div>
                      <strong>PayPal</strong>
                      <p>You will be redirected to PayPal to complete your donation securely.</p>
                    </div>
                  </div>
                  <a
                    href="https://www.paypal.com/donate/?hosted_button_id=JKHEF75SXWMV8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-lg donate-btn"
                  >
                    {paypalLabel}
                  </a>
                </div>
              )}

              {/* ACH */}
              {method === 'ach' && (
                <div className="method-panel">
                  <div className="bank-info-box">
                    <p><strong>Bank Transfer Details</strong></p>
                    <p>Payable To: <strong>Cobb Church Network</strong></p>
                    <p>Contact <a href="mailto:info@cobbchurchnetwork.org">info@cobbchurchnetwork.org</a> for routing and account details.</p>
                  </div>
                </div>
              )}

              {/* CHECK */}
              {method === 'check' && (
                <div className="method-panel">
                  <div className="check-box">
                    <h4>Give by Check</h4>
                    <p>Please make checks payable to:</p>
                    <p className="check-name">Cobb Church Network</p>
                    <p>Mail to:</p>
                    <p className="check-address">
                      Cobb Church Network<br />
                      info@cobbchurchnetwork.org<br />
                      Cobb County, Georgia
                    </p>
                    <p className="check-note">
                      Please include your name and email on the memo line so we can send you a receipt.
                    </p>
                  </div>
                </div>
              )}

              <p className="donate-disclaimer">
                Cobb Church Network is a ministry initiative. Please consult your tax
                advisor regarding deductibility.
              </p>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Donate;