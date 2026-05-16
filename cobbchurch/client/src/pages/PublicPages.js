import React from 'react';
import { Link } from 'react-router-dom';
import { FiShield, FiAlertTriangle, FiArrowRight } from 'react-icons/fi';

export const Resources = () => (
  <div>
    <section className="page-hero">
      <div className="container">
        <h1>Resource Directory</h1>
        <p>Connecting churches with resources, support, and opportunities to serve together.</p>
      </div>
    </section>
    <section className="section">
      <div className="container-sm text-center">
        <span className="section-label">Shared Resources. Shared Impact.</span>
        <h2 className="section-title">Shared Resources. Shared Impact.</h2>
        <div className="divider divider-center"></div>
        <p style={{color:'var(--text-light)',lineHeight:1.8,marginBottom:'24px'}}>
          Churches often have resources another ministry may need. Cobb Church Network helps churches connect around food support, counseling, volunteers, transportation, youth programs, family support, community outreach, prayer support, emergency assistance, and facilities.
        </p>
        <div style={{background:'var(--navy)',borderRadius:'12px',padding:'40px',color:'var(--white)',marginTop:'40px'}}>
          <FiShield size={36} style={{color:'var(--gold)',marginBottom:'16px'}} />
          <h3 style={{marginBottom:'12px'}}>Access Requires Network Membership</h3>
          <p style={{color:'rgba(255,255,255,0.75)',marginBottom:'24px'}}>The full Resource Directory is available exclusively to approved Cobb Church Network members. Join the network to access and share resources.</p>
          <Link to="/request-access" className="btn btn-primary">Request Access</Link>
        </div>
      </div>
    </section>

    <section className="section bg-off-white">
      <div className="container">
        <div className="grid-3">
          {['Food Support','Counseling','Volunteers','Transportation','Youth Programs','Family Support','Community Outreach','Prayer Support','Emergency Assistance'].map((cat, i) => (
            <div key={i} style={{background:'var(--white)',borderRadius:'10px',padding:'20px 24px',boxShadow:'var(--shadow)',display:'flex',alignItems:'center',gap:'12px'}}>
              <div style={{width:'8px',height:'8px',borderRadius:'50%',background:'var(--gold)',flexShrink:0}}></div>
              <span style={{color:'var(--navy)',fontWeight:600,fontSize:'0.9rem'}}>{cat}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export const CrisisResponse = () => (
  <div>
    <section className="page-hero">
      <div className="container">
        <h1>Crisis Response Network</h1>
        <p>Helping churches respond together during emergencies and urgent community needs.</p>
      </div>
    </section>
    <section className="section">
      <div className="container-sm text-center">
        <span className="section-label">Faster Response. Stronger Support.</span>
        <h2 className="section-title">Faster Response. Stronger Support.</h2>
        <div className="divider divider-center"></div>
        <p style={{color:'var(--text-light)',lineHeight:1.8,marginBottom:'16px'}}>
          When crisis impacts families, schools, churches, or neighborhoods, response matters.
          Cobb Church Network helps churches communicate quickly, coordinate support, and work together during urgent situations.
        </p>
      </div>
    </section>

    <section className="section bg-off-white" style={{paddingTop:0}}>
      <div className="container">
        <div className="grid-3">
          {[
            {label:'Community Emergencies'},{label:'Family Crises'},{label:'Housing Needs'},
            {label:'Food Shortages'},{label:'Weather Emergencies'},{label:'Church Support Needs'},{label:'Prayer Response'}
          ].map((item, i) => (
            <div key={i} style={{background:'var(--white)',borderRadius:'10px',padding:'20px 24px',boxShadow:'var(--shadow)',display:'flex',alignItems:'center',gap:'12px',borderLeft:'4px solid var(--gold)'}}>
              <FiAlertTriangle style={{color:'var(--gold)',flexShrink:0}} />
              <span style={{color:'var(--navy)',fontWeight:600,fontSize:'0.9rem'}}>{item.label}</span>
            </div>
          ))}
        </div>

        <div style={{background:'var(--navy)',borderRadius:'12px',padding:'40px',color:'var(--white)',marginTop:'40px',textAlign:'center'}}>
          <FiAlertTriangle size={36} style={{color:'#ef4444',marginBottom:'16px'}} />
          <h3 style={{marginBottom:'12px'}}>Active Crisis Alerts — Members Only</h3>
          <p style={{color:'rgba(255,255,255,0.75)',marginBottom:'24px'}}>Approved churches can view active alerts, available resources, and coordinated response opportunities. Join the network to access the crisis response system.</p>
          <Link to="/request-access" className="btn btn-primary">Request Access <FiArrowRight /></Link>
        </div>
      </div>
    </section>
  </div>
);

export const StoryDetail = () => (
  <div>
    <section className="page-hero">
      <div className="container">
        <h1>Pastor Story</h1>
      </div>
    </section>
    <section className="section">
      <div className="container-sm text-center">
        <p><Link to="/pastor-stories" style={{color:'var(--gold)'}}>← Back to Stories</Link></p>
      </div>
    </section>
  </div>
);

export const NotFound = () => (
  <div style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',background:'var(--off-white)',textAlign:'center',padding:'40px'}}>
    <div>
      <h1 style={{fontSize:'8rem',color:'var(--gold)',fontFamily:'Montserrat',fontWeight:900,lineHeight:1}}>404</h1>
      <h2 style={{color:'var(--navy)',marginBottom:'16px'}}>Page Not Found</h2>
      <p style={{color:'var(--text-light)',marginBottom:'32px'}}>The page you're looking for doesn't exist.</p>
      <Link to="/" className="btn btn-primary btn-lg">Back to Home</Link>
    </div>
  </div>
);

export default Resources;
