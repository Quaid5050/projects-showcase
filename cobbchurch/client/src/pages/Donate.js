import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiHeart, FiCheck } from 'react-icons/fi';

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
  const [selected, setSelected] = useState(100);
  const [custom, setCustom] = useState('');

  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <h1>Support the Mission</h1>
          <p>Help strengthen churches, build partnerships, and increase community impact throughout Cobb County.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'60px',alignItems:'start'}}>
            <div>
              <span className="section-label">Why Give</span>
              <h2 className="section-title">Why Your Support Matters</h2>
              <div className="divider"></div>
              <p style={{color:'var(--text-light)',lineHeight:1.8,marginBottom:'24px'}}>
                Your support helps make this network possible. Together, we can help churches serve more effectively and strengthen our community.
              </p>
              <p style={{color:'var(--navy)',fontWeight:600,marginBottom:'16px'}}>Donations help fund:</p>
              <div style={{display:'flex',flexDirection:'column',gap:'12px'}}>
                {impacts.map((item, i) => (
                  <div key={i} style={{display:'flex',alignItems:'center',gap:'12px',background:'var(--off-white)',padding:'12px 16px',borderRadius:'8px'}}>
                    <span style={{fontSize:'1.2rem'}}>{item.icon}</span>
                    <span style={{color:'var(--text-light)',fontSize:'0.9rem'}}>{item.label}</span>
                  </div>
                ))}
              </div>

              <div style={{marginTop:'36px',padding:'24px',background:'var(--navy)',borderRadius:'12px',color:'var(--white)'}}>
                <h3 style={{color:'var(--gold)',marginBottom:'10px'}}>Partner With the Vision</h3>
                <p style={{color:'rgba(255,255,255,0.75)',fontSize:'0.9rem',lineHeight:1.7}}>
                  Become a consistent partner in this movement by making a recurring donation. Your ongoing support helps us plan for the future and serve more churches.
                </p>
              </div>
            </div>

            <div className="card card-body" style={{padding:'40px'}}>
              <h3 style={{color:'var(--navy)',marginBottom:'8px'}}>Make a Donation</h3>
              <p style={{color:'var(--text-light)',marginBottom:'28px',fontSize:'0.9rem'}}>Choose a donation amount or enter a custom amount below.</p>

              <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'10px',marginBottom:'20px'}}>
                {amounts.map(a => (
                  <button
                    key={a}
                    onClick={() => { setSelected(a); setCustom(''); }}
                    className={`btn ${selected === a && !custom ? 'btn-primary' : 'btn-outline'}`}
                    style={{justifyContent:'center'}}
                  >
                    ${a}
                  </button>
                ))}
              </div>

              <div className="form-group">
                <label className="form-label">Custom Amount</label>
                <div style={{position:'relative'}}>
                  <span style={{position:'absolute',left:'14px',top:'50%',transform:'translateY(-50%)',color:'var(--gray)',fontWeight:600}}>$</span>
                  <input
                    type="number" className="form-input" style={{paddingLeft:'32px'}}
                    placeholder="Enter amount"
                    value={custom}
                    onChange={e => { setCustom(e.target.value); setSelected(null); }}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Frequency</label>
                <select className="form-select">
                  <option>One-time donation</option>
                  <option>Monthly</option>
                  <option>Quarterly</option>
                  <option>Annually</option>
                </select>
              </div>

              <div style={{background:'var(--off-white)',borderRadius:'8px',padding:'16px',marginBottom:'20px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <span style={{color:'var(--text-light)',fontSize:'0.9rem'}}>Donation Amount:</span>
                <span style={{color:'var(--navy)',fontWeight:800,fontSize:'1.4rem',fontFamily:'Montserrat'}}>
                  ${custom || selected || 0}
                </span>
              </div>

              <div style={{background:'#dbeafe',borderRadius:'8px',padding:'14px',marginBottom:'20px',fontSize:'0.85rem',color:'#1e40af',display:'flex',alignItems:'center',gap:'8px'}}>
                <FiCheck />
                Payment processing coming soon. Contact us to donate via check or bank transfer.
              </div>

              <button className="btn btn-primary btn-lg" style={{width:'100%',justifyContent:'center'}}>
                <FiHeart /> Donate Today
              </button>
              <p style={{textAlign:'center',marginTop:'12px',fontSize:'0.78rem',color:'var(--gray)'}}>
                Cobb Church Network is a ministry initiative. Please consult your tax advisor regarding deductibility.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
