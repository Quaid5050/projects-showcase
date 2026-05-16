// Services Page
import React from 'react';
import { Link } from 'react-router-dom';
import {
  FiUsers,
  FiPackage,
  FiShield,
  FiCalendar,
  FiBookOpen,
} from 'react-icons/fi';

const services = [
  {
    icon: <FiUsers size={28} />,
    title: 'Church Collaboration',
    desc: 'Build partnerships with pastors and churches throughout Cobb County.',
  },
  {
    icon: <FiPackage size={28} />,
    title: 'Resource Sharing',
    desc: 'Access and share ministry resources, volunteers, outreach support, and community assistance.',
  },
  {
    icon: <FiShield size={28} />,
    title: 'Crisis Response Coordination',
    desc: 'Respond together during emergencies and urgent community needs.',
  },
  {
    icon: <FiCalendar size={28} />,
    title: 'Pastor Gatherings',
    desc: 'Attend networking events, prayer gatherings, trainings, and leadership discussions.',
  },
  {
    icon: <FiBookOpen size={28} />,
    title: 'Community Outreach Support',
    desc: 'Collaborate on outreach projects that strengthen families and neighborhoods.',
  },
  {
    icon: <FiUsers size={28} />,
    title: 'Private Church Network Access',
    desc: 'Approved churches receive access to the private dashboard, directory, alerts, and resource systems.',
  },
];

const Services = () => (
  <div>
    <section className="page-hero">
      <div className="container">
        <h1>Services & Ministry Support</h1>
        <p>
          Helping churches connect with practical tools, partnerships,
          and support to strengthen ministry and community impact.
        </p>
      </div>
    </section>

    <section className="section">
      <div className="container-sm text-center">
        <span className="section-label">What We Offer</span>

        <h2 className="section-title">
          Built to Strengthen the Church
        </h2>

        <div className="divider divider-center"></div>

        <p className="section-subtitle">
          Cobb Church Network exists to help churches share resources,
          serve together, and strengthen the community through collaboration.
        </p>
      </div>
    </section>

    <section
      className="section bg-off-white"
      style={{ paddingTop: 0 }}
    >
      <div className="container">
        <div className="grid-3">
          {services.map((s, i) => (
            <div
              key={i}
              className="card card-body"
              style={{
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <div
                className="icon-box"
                style={{ marginBottom: '16px' }}
              >
                {s.icon}
              </div>

              <h3
                style={{
                  color: 'var(--navy)',
                  marginBottom: '10px',
                  fontSize: '1.05rem',
                }}
              >
                {s.title}
              </h3>

              <p
                style={{
                  color: 'var(--text-light)',
                  fontSize: '0.9rem',
                  lineHeight: 1.7,
                }}
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section text-center">
      <div className="container-sm">
        <h2 className="section-title">
          Let's Strengthen Cobb County Together
        </h2>

        <div className="divider divider-center"></div>

        <div
          style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginTop: '24px',
          }}
        >
          <Link
            to="/request-access"
            className="btn btn-primary btn-lg"
          >
            Request Access
          </Link>

          <Link
            to="/contact"
            className="btn btn-outline btn-lg"
          >
            Join the Network
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default Services;