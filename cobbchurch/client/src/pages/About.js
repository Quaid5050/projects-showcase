import React from 'react';
import { Link } from 'react-router-dom';
import { FiHeart, FiUsers, FiZap, FiTarget } from 'react-icons/fi';
import './About.css';

const About = () => {
  const values = [
    { icon: <FiUsers />, title: 'Unity', desc: 'We believe churches are stronger together.' },
    { icon: <FiHeart />, title: 'Collaboration', desc: 'We value partnership over competition.' },
    { icon: <FiZap />, title: 'Service', desc: 'We exist to serve churches and the community.' },
    { icon: <FiTarget />, title: 'Trust', desc: 'Healthy relationships are built through consistency and integrity.' },
  ];

  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <h1>About Cobb Church Network</h1>
          <p>Building stronger relationships between churches to create stronger impact throughout our community.</p>
        </div>
      </section>

      {/* Mission */}
      <section className="section">
        <div className="container">
          <div className="mission-vision-grid">
            <div>
              <span className="section-label">Our Mission</span>
              <h2 className="section-title">Our Mission</h2>
              <div className="divider"></div>
              <p style={{color:'var(--text-light)',lineHeight:1.8,marginBottom:'16px'}}>
                Cobb Church Network exists to help churches connect, collaborate, and respond together.
              </p>
              <p style={{color:'var(--text-light)',lineHeight:1.8,marginBottom:'16px'}}>
                We believe churches are stronger when relationships are healthy, communication is consistent, and resources are shared.
              </p>
              <p style={{color:'var(--text-light)',lineHeight:1.8}}>
                Our mission is to create practical unity among pastors and churches throughout Cobb County — helping ministries strengthen one another while serving the community together.
              </p>
            </div>
            <div>
              <span className="section-label">Our Vision</span>
              <h2 className="section-title">Our Vision</h2>
              <div className="divider"></div>
              <p style={{color:'var(--text-light)',marginBottom:'16px'}}>We envision a connected network of churches throughout Cobb County where:</p>
              <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:'10px'}}>
                {[
                  'Pastors know and support one another',
                  'Churches work together instead of separately',
                  'Resources are shared freely',
                  'Communities are served collaboratively',
                  'Crisis response becomes unified and organized',
                  'Relationships grow stronger across denominational lines'
                ].map((item, i) => (
                  <li key={i} style={{display:'flex',alignItems:'center',gap:'10px',color:'var(--text-light)'}}>
                    <span style={{width:'8px',height:'8px',borderRadius:'50%',background:'var(--gold)',flexShrink:0}}></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="section bg-navy">
        <div className="container-sm text-center">
          <span className="section-label">Why This Matters</span>
          <h2 className="section-title text-white">Why This Matters</h2>
          <div className="divider divider-center"></div>
          <p style={{color:'rgba(255,255,255,0.8)',lineHeight:1.8,marginBottom:'16px'}}>Communities are facing real challenges. Families are hurting. Students are struggling. Churches often carry heavy burdens alone.</p>
          <p style={{color:'rgba(255,255,255,0.8)',lineHeight:1.8,marginBottom:'16px'}}>No single church can meet every need by itself.</p>
          <p style={{color:'rgba(255,255,255,0.8)',lineHeight:1.8,marginBottom:'16px'}}>But together, churches can create extraordinary impact.</p>
          <p style={{color:'rgba(255,255,255,0.8)',lineHeight:1.8}}>Cobb Church Network was created to make collaboration easier, communication stronger, and response faster. We believe visible unity creates visible impact.</p>
        </div>
      </section>

      {/* Core Values */}
      <section className="section bg-off-white">
        <div className="container text-center">
          <span className="section-label">Core Values</span>
          <h2 className="section-title">What We Stand For</h2>
          <div className="divider divider-center"></div>
          <div className="grid-4" style={{marginTop:'48px'}}>
            {values.map((v, i) => (
              <div key={i} className="card card-body text-center">
                <div className="icon-box" style={{margin:'0 auto 16px'}}>{v.icon}</div>
                <h3 style={{color:'var(--navy)',marginBottom:'8px'}}>{v.title}</h3>
                <p style={{color:'var(--text-light)',fontSize:'0.88rem'}}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section text-center">
        <div className="container-sm">
          <span className="section-label">Join the Movement</span>
          <h2 className="section-title">Ready to Move Together?</h2>
          <div className="divider divider-center"></div>
          <p className="section-subtitle" style={{marginBottom:'32px'}}>
            Be part of a growing network of churches working together to strengthen Cobb County.
          </p>
          <div style={{display:'flex',gap:'16px',justifyContent:'center',flexWrap:'wrap'}}>
            <Link to="/request-access" className="btn btn-primary btn-lg">Request Access</Link>
            <Link to="/contact" className="btn btn-outline btn-lg">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
