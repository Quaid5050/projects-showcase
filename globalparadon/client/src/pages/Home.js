import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';
import { toast } from 'react-toastify';
import heroBg from '../img/hero-bg.png';
const SERVICES = ['Canadian Pardon / Record Suspension', 'US Entry Waiver', 'NEXUS Application', 'Multiple Services', 'Not Sure'];

/* ── SVG Icons ── */
const ShieldIcon = () => (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>);
const CheckIcon = ({ size = 14, color = '#0B1F3A' }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>);
const ArrowRight = ({ size = 16 }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>);
const StarSVG = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="#C9A84C" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>);
const LockSVG = () => (<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>);
const PhoneSVG = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91A16 16 0 0 0 15 16.91l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>);
const ClockSVG = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>);
const AwardSVG = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>);
const UsersSVG = () => (<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>);
const TrendSVG = () => (<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>);
const DocSVG = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>);
const PassSVG = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="18" rx="2"/><circle cx="12" cy="11" r="3"/><path d="M2 8h20M2 16h4m12 0h4"/></svg>);
const PlaneSVG = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21 4 19 4s-2 1-3.5 2.5L9 8 1 6.2l5.3-5.3c1-.9 2.5-.8 3.3 0L21.7 12.3c.8.8.9 2.3 0 3.3L17.8 19.2z"/></svg>);

function FaqAccordion({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
      {items.map(([q, a], i) => (
        <div key={i} style={{ background: '#fff', border: `1.5px solid ${open === i ? '#C9A84C' : '#dde4ed'}`, borderRadius: 6, overflow: 'hidden' }}>
          <div onClick={() => setOpen(open === i ? -1 : i)} style={{ padding: '1.1rem 1.3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', fontWeight: 600, fontSize: '0.92rem', color: '#0B1F3A', gap: 12 }}>
            <span>{q}</span>
            <span style={{ flexShrink: 0, width: 24, height: 24, background: open === i ? '#C9A84C' : '#f1f5f9', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: open === i ? '#0B1F3A' : '#9ca3af', transition: 'all 0.25s', transform: open === i ? 'rotate(45deg)' : 'none', fontSize: '1.1rem', fontWeight: 300, lineHeight: 1 }}>+</span>
          </div>
          {open === i && <div style={{ padding: '0 1.3rem 1.1rem', fontSize: '0.88rem', color: '#6b7280', lineHeight: 1.75 }}>{a}</div>}
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', service: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post('/leads', { ...form, source: 'Hero Form' });
      setSubmitted(true);
      toast.success("Application received! We'll contact you within 24 hours.");
    } catch { toast.error('Something went wrong. Please try again.'); }
    setLoading(false);
  };

  const inp = { background: '#fff', border: '1.5px solid #dde4ed', color: '#0B1F3A' };

  return (
    <>
      {/* TRUST BAR */}
      <div className="mobile-hide-trust" style={{ background: '#0B1F3A', padding: '35px 0 0.65rem', borderBottom: '2px solid #C9A84C', marginTop: 0 }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
          {[[<LockSVG />, '100% Confidential'],, [<PhoneSVG />, 'Free Consultation'], [<ClockSVG />, 'Fast Processing'],].map(([icon, text]) => (
            <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 7, color: 'rgba(255,255,255,0.88)', fontSize: '0.8rem', fontWeight: 500 }}>
              <span style={{ color: '#E8C46A', display: 'flex' }}>{icon}</span>{text}
            </div>
          ))}
        </div>
      </div>

    <section 
  style={{
    minHeight: '100vh',
    backgroundImage: `
      linear-gradient(
        90deg,
        rgba(1,13,45,0.92) 0%,
        rgba(1,13,45,0.82) 35%,
        rgba(1,13,45,0.62) 58%,
        rgba(1,13,45,0.90) 100%
      ),
      url(${heroBg})
    `,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    padding: '105px 0 0'
  }}
>
  {/* DARK OVERLAY */}
  <div
    style={{
      position: 'absolute',
      inset: 0,
      background:
        'linear-gradient(to right, rgba(2,13,43,0.35), rgba(2,13,43,0.05))'
    }}
  />

  <div
    className="container"
    style={{
      position: 'relative',
      zIndex: 2,
      width: '100%'
    }}
  >
    <div className="hero-grid">

      {/* LEFT */}
      <div className="hero-left">

        {/* BADGE */}
        <div className="hero-badge">
          <ShieldIcon />
          Canada's #1 Pardon & Waiver Specialists
        </div>

        {/* TITLE */}
        <h1 className="hero-title">
          Clear Your Record.
          <br />

          <span>Cross the Border.</span>

          <br />

          Reclaim Your Life.
        </h1>

        {/* LINE */}
        <div className="hero-line">
          <span>
            <StarSVG />
          </span>
        </div>

        {/* TEXT */}
        <p className="hero-text">
          Expert guidance for Canadian Pardons, US Entry Waivers,
          and NEXUS applications. We handle the complexity —
          you focus on your future.
        </p>

        {/* BUTTONS */}
        <div className="hero-btns">

          <Link
            to="/apply"
            className="hero-btn-primary"
          >
            Get Free Consultation
            <ArrowRight />
          </Link>

          <Link
            to="/how-it-works"
            className="hero-btn-secondary"
          >
            How It Works
            <ArrowRight />
          </Link>

        </div>

      </div>

      {/* FORM */}
      <div className="hero-form-wrap">

        <div className="hero-form-card">

          <h2 className="hero-form-title">
            Free Case Evaluation
          </h2>

          <p className="hero-form-sub">
            No obligation — 100% private & secure
          </p>

          <form onSubmit={handleSubmit}>

            <div className="hero-form-grid">

              <div className="form-group">
                <label>First Name</label>

                <input
                  style={inp}
                  value={form.firstName}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      firstName: e.target.value
                    })
                  }
                  placeholder="John"
                  required
                />
              </div>

              <div className="form-group">
                <label>Last Name</label>

                <input
                  style={inp}
                  value={form.lastName}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      lastName: e.target.value
                    })
                  }
                  placeholder="Smith"
                  required
                />
              </div>

            </div>

            <div className="form-group">
              <label>Email</label>

              <input
                style={inp}
                type="email"
                value={form.email}
                onChange={(e) =>
                  setForm({
                    ...form,
                    email: e.target.value
                  })
                }
                placeholder="john@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label>Phone</label>

              <input
                style={inp}
                type="tel"
                value={form.phone}
                onChange={(e) =>
                  setForm({
                    ...form,
                    phone: e.target.value
                  })
                }
                placeholder="+1 (416) 000-0000"
              />
            </div>

            <div className="form-group">
              <label>Service Needed</label>

              <select
                style={inp}
                value={form.service}
                onChange={(e) =>
                  setForm({
                    ...form,
                    service: e.target.value
                  })
                }
              >
                <option value="">
                  Select a service...
                </option>

                {SERVICES.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="hero-submit-btn"
            >
              {loading
                ? 'Submitting...'
                : 'Submit For Free Evaluation'}
            </button>

            <p className="hero-secure">
              <LockSVG />
              Your information is secure and will never be shared.
            </p>

          </form>

        </div>
      </div>
    </div>

    {/* TRUST ROW */}
    <div className="hero-trust-row">

      

    </div>
  </div>

  <style>{`

    .hero-grid{
      display:grid;
      grid-template-columns: 1fr 540px;
      gap:2rem;
      align-items:center;
    }

    .hero-left{
      padding-left:20px;
      margin-top:-20px;
    }

    .hero-badge{
      display:inline-flex;
      align-items:center;
      gap:10px;
      border:1px solid rgba(212,166,61,0.45);
      background:rgba(212,166,61,0.06);
      padding:12px 22px;
      border-radius:999px;
      color:#D4A63D;
      font-size:0.8rem;
      font-weight:700;
      letter-spacing:1px;
      text-transform:uppercase;
      margin-bottom:2rem;
      backdrop-filter:blur(5px);
    }

    .hero-title{
      font-family:'Playfair Display', serif;
      font-size:5.5rem;
      line-height:0.95;
      color:#fff;
      font-weight:700;
      margin-bottom:1.7rem;
      max-width:760px;
      letter-spacing:-2px;
    }

    .hero-title span{
      color:#D4A63D;
    }

    .hero-line{
      width:210px;
      height:2px;
      background:#D4A63D;
      margin-bottom:1.8rem;
      position:relative;
    }

    .hero-line span{
      position:absolute;
      right:-10px;
      top:-7px;
    }

    .hero-text{
      color:rgba(255,255,255,0.82);
      font-size:1.18rem;
      line-height:1.9;
      max-width:650px;
      margin-bottom:2.6rem;
      font-weight:300;
    }

    .hero-btns{
      display:flex;
      gap:1rem;
      flex-wrap:wrap;
    }

    .hero-btn-primary{
      background:#D4A63D;
      color:#081B3A;
      padding:18px 34px;
      border-radius:8px;
      font-weight:800;
      font-size:0.92rem;
      text-transform:uppercase;
      letter-spacing:0.5px;
      display:inline-flex;
      align-items:center;
      gap:10px;
      text-decoration:none;
      box-shadow:0 10px 30px rgba(212,166,61,0.35);
    }

    .hero-btn-secondary{
      border:1.5px solid rgba(255,255,255,0.35);
      color:#fff;
      padding:18px 30px;
      border-radius:8px;
      font-weight:600;
      font-size:0.92rem;
      display:inline-flex;
      align-items:center;
      gap:10px;
      text-decoration:none;
      background:rgba(255,255,255,0.03);
      backdrop-filter:blur(4px);
    }

    .hero-form-wrap{
      position:relative;
      display:flex;
      justify-content:flex-end;
      padding-right:0;
      margin-right:-40px;
    }

    .hero-gold-line{
      position:absolute;
      left:-40px;
      top:-50px;
      width:7px;
      height:120%;
      background:#D4A63D;
      transform:rotate(13deg);
      border-radius:20px;
      z-index:1;
    }

    .hero-form-card{
      width:100%;
      max-width:500px;
      background:#fff;
      border-radius:22px;
      padding:2.6rem;
      box-shadow:0 25px 70px rgba(0,0,0,0.38);
      position:relative;
      z-index:2;
    }

    .hero-form-title{
      font-family:'Playfair Display', serif;
      color:#0B1F3A;
      font-size:3rem;
      margin-bottom:5px;
      text-align:center;
      line-height:1.1;
    }

    .hero-form-sub{
      color:#6b7280;
      text-align:center;
      font-size:1rem;
      padding-bottom:1.3rem;
      border-bottom:1px solid #e8e8e8;
      margin-bottom:1.8rem;
    }

    .hero-form-grid{
      display:grid;
      grid-template-columns:1fr 1fr;
      gap:1rem;
    }

    .form-group{
      display:flex;
      flex-direction:column;
      margin-bottom:1rem;
    }

    .form-group label{
      font-size:0.76rem;
      font-weight:800;
      color:#0B1F3A;
      margin-bottom:0.6rem;
      text-transform:uppercase;
      letter-spacing:0.6px;
    }

    .form-group input,
    .form-group select{
      height:58px;
      border-radius:8px;
      border:1.5px solid #dfe5ec;
      padding:0 16px;
      font-size:0.96rem;
      outline:none;
      transition:0.2s;
      background:#fff;
    }

    .form-group input:focus,
    .form-group select:focus{
      border-color:#D4A63D;
      box-shadow:0 0 0 3px rgba(212,166,61,0.12);
    }

    .hero-submit-btn{
      width:100%;
      background:#D4A63D;
      color:#081B3A;
      border:none;
      padding:18px;
      border-radius:8px;
      font-weight:800;
      font-size:0.92rem;
      text-transform:uppercase;
      margin-top:8px;
      cursor:pointer;
    }

    .hero-secure{
      margin-top:1rem;
      text-align:center;
      color:#9ca3af;
      font-size:0.8rem;
      display:flex;
      align-items:center;
      justify-content:center;
      gap:6px;
    }

    .hero-trust-row{
      margin-top:4rem;
      display:grid;
      grid-template-columns:repeat(3,1fr);
      border-top:1px solid rgba(255,255,255,0.12);
    }

    .trust-item{
      display:flex;
      align-items:center;
      gap:1rem;
      padding:2rem 1rem;
      border-right:1px solid rgba(255,255,255,0.08);
    }

    .trust-item:last-child{
      border-right:none;
    }

    .trust-icon{
      width:58px;
      height:58px;
      border-radius:50%;
      border:2px solid rgba(212,166,61,0.35);
      display:flex;
      align-items:center;
      justify-content:center;
      color:#D4A63D;
      flex-shrink:0;
    }

    .trust-title{
      color:#fff;
      font-weight:700;
      margin-bottom:4px;
      font-size:1rem;
    }

    .trust-desc{
      color:rgba(255,255,255,0.58);
      font-size:0.84rem;
      line-height:1.6;
    }

    @media(max-width:1100px){

      .hero-grid{
        grid-template-columns:1fr;
      }

      .hero-form-wrap{
        justify-content:flex-start;
        padding-right:0;
      }

      .hero-gold-line{
        display:none;
      }

      .hero-title{
        font-size:4rem;
      }

      .hero-trust-row{
        grid-template-columns:1fr;
      }

      .trust-item{
        border-right:none;
        border-bottom:1px solid rgba(255,255,255,0.08);
      }
    }

    @media(max-width:768px){

      .mobile-hide-trust{
        display:none !important;
      }

      section{
        min-height:auto !important;
        /* FIX: 75px = sirf navbar height, trust bar ka gap khatam */
        padding:75px 0 50px !important;
      }

      .hero-form-wrap{
        display:none;
      }

      .hero-left{
        padding-left:0;
        margin-top:0;
      }

      .hero-grid{
        gap:0;
      }

      .hero-title{
        font-size:3rem;
        line-height:1.05;
      }

      .hero-text{
        font-size:1rem;
      }

      .hero-form-grid{
        grid-template-columns:1fr;
      }

      .hero-form-card{
        padding:1.5rem;
      }

      .hero-form-title{
        font-size:2rem;
      }

      .trust-item{
        padding:1.5rem 0;
      }

      .hero-trust-row{
        display:none;
      }
    }

  `}</style>
</section>

     {/* SERVICES OVERVIEW */}
<section className="section">
  <div className="container">
    <div className="section-header">
      <div className="section-eyebrow">What We Do</div>
      <h2 className="section-title">Three Services That Change Lives</h2>
      <p className="section-sub">
        Whether you need to clear your Canadian record, enter the United States, or get a NEXUS card — we have the expertise to make it happen.
      </p>
    </div>

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '2rem'
      }}
    >
      {[
        {
          icon: <DocSVG />,
          title: 'Canadian Pardon',
          sub: 'Record Suspension',
          desc:
            'Legally seal your criminal record under the Criminal Records Act. Regain access to jobs, housing, travel, and volunteer opportunities that a record blocks today.',
          bg: '#EFF6FF'
        },
        {
          icon: <PassSVG />,
          title: 'US Entry Waiver',
          sub: 'I-192 Application',
          desc:
            'Been denied entry to the USA? Our specialists navigate the complex USCIS I-192 waiver process to restore your right to travel, work, and live in the United States.',
          bg: '#FFFBEB',
          featured: true
        },
        {
          icon: <PlaneSVG />,
          title: 'NEXUS Application',
          sub: 'Trusted Traveller',
          desc:
            'Speed through the Canada–US border with a NEXUS card. We manage your full application and navigate any criminal history that could complicate approval.',
          bg: '#F0FDF4'
        }
      ].map((s) => (
        <div
          key={s.title}
          style={{
            background: '#fff',
            border: `1.5px solid ${s.featured ? '#C9A84C' : '#e5eaf2'}`,
            borderRadius: 10,
            padding: '2rem',
            position: 'relative',
            boxShadow: s.featured
              ? '0 8px 32px rgba(201,168,76,0.12)'
              : '0 2px 12px rgba(0,0,0,0.04)',
            transition: 'transform 0.2s, box-shadow 0.2s',
            height: '100%'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.boxShadow = s.featured
              ? '0 16px 48px rgba(201,168,76,0.2)'
              : '0 10px 30px rgba(0,0,0,0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'none';
            e.currentTarget.style.boxShadow = s.featured
              ? '0 8px 32px rgba(201,168,76,0.12)'
              : '0 2px 12px rgba(0,0,0,0.04)';
          }}
        >
          {s.featured && (
            <div
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: '#C9A84C',
                color: '#0B1F3A',
                fontSize: '0.64rem',
                fontWeight: 700,
                padding: '3px 10px',
                borderRadius: 20,
                letterSpacing: 1,
                textTransform: 'uppercase'
              }}
            >
              Most Popular
            </div>
          )}

          <div
            style={{
              width: 52,
              height: 52,
              background: s.bg,
              borderRadius: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.2rem'
            }}
          >
            {s.icon}
          </div>

          <div
            style={{
              fontSize: '0.68rem',
              fontWeight: 700,
              color: '#C9A84C',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              marginBottom: 6
            }}
          >
            {s.sub}
          </div>

          <h3
            style={{
              fontFamily: 'Playfair Display,serif',
              fontSize: '1.3rem',
              color: '#0B1F3A',
              marginBottom: '0.8rem'
            }}
          >
            {s.title}
          </h3>

          <p
            style={{
              fontSize: '0.89rem',
              color: '#6b7280',
              lineHeight: 1.75,
              marginBottom: '1.4rem'
            }}
          >
            {s.desc}
          </p>

          <Link
            to="/services"
            style={{
              color: '#0B1F3A',
              fontSize: '0.875rem',
              fontWeight: 700,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              textDecoration: 'none'
            }}
          >
            Learn More <ArrowRight />
          </Link>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* WHY CHOOSE US */}
<section className="section section-alt">
  <div className="container">

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '3rem',
        alignItems: 'center'
      }}
    >
      {/* LEFT CONTENT */}
      <div>
        <div className="section-eyebrow">Why Global Pardon & Waivers</div>

        <h2
          style={{
            fontFamily: 'Playfair Display,serif',
            fontSize: '2.3rem',
            color: '#0B1F3A',
            lineHeight: 1.2,
            marginBottom: '1.1rem'
          }}
        >
          We've Helped 5,000+ Canadians Start Fresh
        </h2>

        <p
          style={{
            color: '#6b7280',
            lineHeight: 1.8,
            marginBottom: '1.8rem',
            fontSize: '0.96rem'
          }}
        >
          Since 2010, Global Pardon & Waivers has been Canada's most trusted name in record suspensions and US waivers. We aren't a law firm — we're dedicated specialists who achieve superior results at a fraction of legal costs.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
          {[
            [
              'Certified Pardon Application Specialists',
              'Fully accredited and up-to-date with all Parole Board of Canada regulations.'
            ],
            [
              'Highest Approval Rate in Canada',
              '98% of our completed applications receive full approval — industry-leading.'
            ],
            [
              'No Hidden Fees — Ever',
              'Fully transparent pricing. Government fees are always clearly separated.'
            ],
            [
              'Bilingual Service',
              'We serve clients in English and French across all provinces and territories.'
            ]
          ].map(([title, desc]) => (
            <div key={title} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div
                style={{
                  width: 24,
                  height: 24,
                  background: '#C9A84C',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: 2
                }}
              >
                <CheckIcon size={11} color="#0B1F3A" />
              </div>

              <div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: '0.92rem',
                    color: '#0B1F3A',
                    marginBottom: 3
                  }}
                >
                  {title}
                </div>

                <div
                  style={{
                    fontSize: '0.85rem',
                    color: '#6b7280',
                    lineHeight: 1.65
                  }}
                >
                  {desc}
                </div>
              </div>
            </div>
          ))}
        </div>

        <Link
          to="/about"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            marginTop: '2rem',
            background: '#0B1F3A',
            color: '#fff',
            padding: '13px 26px',
            borderRadius: 4,
            fontWeight: 700,
            fontSize: '0.875rem',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            textDecoration: 'none'
          }}
        >
          Our Story <ArrowRight />
        </Link>
      </div>

      {/* RIGHT IMAGE */}
      <div style={{ position: 'relative' }}>
        <img
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80"
          alt="Legal consultation"
          style={{
            width: '100%',
            borderRadius: 10,
            boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
            display: 'block'
          }}
        />

        {/* 98% BOX */}
        <div
          style={{
            position: 'absolute',
            bottom: '-1rem',
            left: '-1rem',
            background: '#0B1F3A',
            color: '#fff',
            padding: '1.2rem 1.6rem',
            borderRadius: 8,
            boxShadow: '0 10px 30px rgba(0,0,0,0.25)'
          }}
        >
          <div
            style={{
              fontFamily: 'Playfair Display,serif',
              fontSize: '2rem',
              fontWeight: 700,
              color: '#E8C46A',
              lineHeight: 1
            }}
          >
            98%
          </div>
          <div
            style={{
              fontSize: '0.72rem',
              color: 'rgba(255,255,255,0.65)',
              marginTop: 4,
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}
          >
            Approval Rate
          </div>
        </div>

        {/* YEARS BOX */}
        <div
          style={{
            position: 'absolute',
            top: '-1rem',
            right: '-1rem',
            background: '#C9A84C',
            color: '#0B1F3A',
            padding: '1rem 1.4rem',
            borderRadius: 8,
            boxShadow: '0 8px 24px rgba(201,168,76,0.4)',
            textAlign: 'center'
          }}
        >
          <div
            style={{
              fontFamily: 'Playfair Display,serif',
              fontSize: '1.6rem',
              fontWeight: 700,
              lineHeight: 1
            }}
          >
            16+
          </div>
          <div
            style={{
              fontSize: '0.68rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginTop: 3
            }}
          >
            Years
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  {/* HOW IT WORKS */}
<section className="section">
  <div className="container">

    <div className="section-header">
      <div className="section-eyebrow">The Process</div>
      <h2 className="section-title">Simple. Clear. Proven.</h2>
      <p className="section-sub">
        We've turned a complex government process into four straightforward steps. You handle your life — we handle the paperwork.
      </p>
    </div>

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '1.5rem',
        position: 'relative'
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 30,
          left: '10%',
          right: '10%',
          height: 2,
          background: 'linear-gradient(to right, #C9A84C, #E8C46A)',
          zIndex: 0
        }}
      />

      {[
        {
          num: '01',
          title: 'Free Consultation',
          desc: 'Speak with a specialist to review your eligibility and understand your options with zero cost or obligation.'
        },
        {
          num: '02',
          title: 'Document Collection',
          desc: 'We coordinate fingerprints, gather police records, and collect every required document on your behalf.'
        },
        {
          num: '03',
          title: 'Application Filed',
          desc: 'Our experts prepare and submit a complete, professional application to the correct government authority.'
        },
        {
          num: '04',
          title: 'Approval & Freedom',
          desc: 'Receive your pardon or waiver and move forward — travel freely, apply for any job, start completely fresh.'
        }
      ].map((step) => (
        <div
          key={step.num}
          style={{
            textAlign: 'center',
            position: 'relative',
            zIndex: 1,
            padding: '0.5rem'
          }}
        >
          <div
            style={{
              width: 60,
              height: 60,
              background: '#0B1F3A',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.3rem',
              border: '3px solid #C9A84C',
              fontFamily: 'Playfair Display,serif',
              fontSize: '1.05rem',
              fontWeight: 700,
              color: '#E8C46A'
            }}
          >
            {step.num}
          </div>

          <h4
            style={{
              fontFamily: 'Playfair Display,serif',
              fontSize: '1.05rem',
              color: '#0B1F3A',
              marginBottom: '0.6rem'
            }}
          >
            {step.title}
          </h4>

          <p
            style={{
              fontSize: '0.87rem',
              color: '#6b7280',
              lineHeight: 1.7
            }}
          >
            {step.desc}
          </p>
        </div>
      ))}
    </div>

    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
      <Link
        to="/apply"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          background: '#C9A84C',
          color: '#0B1F3A',
          padding: '14px 30px',
          borderRadius: 4,
          fontWeight: 700,
          fontSize: '0.9rem',
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
          textDecoration: 'none'
        }}
      >
        Begin My Application <ArrowRight />
      </Link>
    </div>

  </div>
</section>

      {/* TESTIMONIALS */}
<section className="section section-alt">
  <div className="container">

    <div className="section-header">
      <div className="section-eyebrow">Client Reviews</div>
      <h2 className="section-title">Real People. Real Results.</h2>
      <p className="section-sub">
        Over 5,000 Canadians have trusted Global Pardon & Waivers with their most important cases. Here's what some of them say.
      </p>
    </div>

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '1.5rem'
      }}
    >
      {[
        {
          initials: 'SM',
          name: 'Sarah M.',
          type: 'US Entry Waiver — Toronto, ON',
          text:
            "I was denied US entry twice and thought I'd never travel again. Global Pardon got my waiver approved in under 6 months. Absolute life-changers."
        },
        {
          initials: 'JT',
          name: 'James T.',
          type: 'Record Suspension — Vancouver, BC',
          text:
            'Professional, responsive, and they genuinely cared about my outcome. My pardon was approved and I finally landed the job I wanted. Worth every penny.'
        },
        {
          initials: 'DL',
          name: 'David L.',
          type: 'NEXUS Application — Calgary, AB',
          text:
            'My NEXUS had complications from an old charge. Their team knew exactly how to handle it — approved on the first try. Highly recommend.'
        }
      ].map((r) => (
        <div
          key={r.name}
          style={{
            background: '#fff',
            border: '1px solid #e5eaf0',
            borderRadius: 10,
            padding: '2rem',
            position: 'relative',
            boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
            height: '100%'
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1.2rem',
              fontFamily: 'Georgia,serif',
              fontSize: '3rem',
              color: '#f5dfa0',
              lineHeight: 1,
              userSelect: 'none'
            }}
          >
            "
          </div>

          <div style={{ display: 'flex', gap: 2, marginBottom: '0.9rem' }}>
            {[...Array(5)].map((_, i) => (
              <StarSVG key={i} />
            ))}
          </div>

          <p
            style={{
              fontSize: '0.91rem',
              color: '#4b5563',
              lineHeight: 1.8,
              fontStyle: 'italic',
              marginBottom: '1.4rem'
            }}
          >
            "{r.text}"
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div
              style={{
                width: 42,
                height: 42,
                borderRadius: '50%',
                background: '#0B1F3A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.8rem',
                fontWeight: 700,
                color: '#E8C46A',
                flexShrink: 0
              }}
            >
              {r.initials}
            </div>

            <div>
              <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#0B1F3A' }}>
                {r.name}
              </div>
              <div style={{ fontSize: '0.74rem', color: '#9ca3af', marginTop: 1 }}>
                {r.type}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '1rem',
        marginTop: '3rem',
        paddingTop: '2.5rem',
        borderTop: '1px solid #e5eaf0'
      }}
    >
      {[
        ['A+', 'BBB Rating'],
        ['★ 4.9', 'Google Reviews'],
        ['PIPEDA', 'Privacy Compliant'],
        ['SSL', '256-bit Encrypted']
      ].map(([val, label]) => (
        <div
          key={label}
          style={{
            textAlign: 'center',
            padding: '1rem',
            background: '#fff',
            borderRadius: 8,
            border: '1.5px solid #e5eaf0'
          }}
        >
          <div
            style={{
              fontFamily: 'Playfair Display,serif',
              fontSize: '1.35rem',
              fontWeight: 700,
              color: '#0B1F3A'
            }}
          >
            {val}
          </div>
          <div style={{ fontSize: '0.76rem', color: '#6b7280', marginTop: 3 }}>
            {label}
          </div>
        </div>
      ))}
    </div>

  </div>
</section>

    {/* STATS BANNER */}
<section
  style={{
    background: '#0B1F3A',
    padding: '60px 0',
    borderTop: '3px solid #C9A84C',
    borderBottom: '3px solid #C9A84C'
  }}
>
  <div className="container">

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '2rem',
        textAlign: 'center'
      }}
    >
      {[
        [<UsersSVG />, '5,000+', 'Clients Served'],
        [<AwardSVG />, '98%', 'Approval Rate'],
        [<ClockSVG />, '16+', 'Years Experience'],
        [<TrendSVG />, '3', 'Core Services']
      ].map(([icon, num, label]) => (
        <div key={label} style={{ padding: '0.5rem' }}>
          
          <div
            style={{
              color: '#C9A84C',
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '0.7rem'
            }}
          >
            {icon}
          </div>

          <div
            style={{
              fontFamily: 'Playfair Display,serif',
              fontSize: '2.3rem',
              fontWeight: 700,
              color: '#E8C46A'
            }}
          >
            {num}
          </div>

          <div
            style={{
              fontSize: '0.76rem',
              color: 'rgba(255,255,255,0.5)',
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              marginTop: 4
            }}
          >
            {label}
          </div>

        </div>
      ))}
    </div>

  </div>
</section>

    {/* WHO WE SERVE */}
<section className="section">
  <div className="container">

    <div className="section-header">
      <div className="section-eyebrow">Who We Help</div>
      <h2 className="section-title">We Serve Canadians in Every Situation</h2>
      <p className="section-sub">
        No matter the charge, no matter how long ago — we evaluate your case and find the right path forward.
      </p>
    </div>

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '1.5rem'
      }}
    >
      {[
        {
          img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80',
          title: 'Job Seekers',
          desc:
            'A criminal record blocks employment. A Record Suspension removes that barrier and opens doors that were closed to you — including government jobs and professional licences.'
        },
        {
          img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&q=80',
          title: 'Frequent Travelers',
          desc:
            'If you cross the US border regularly for work or pleasure, a waiver or NEXUS card keeps your life moving without constant complications and delays.'
        },
        {
          img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&q=80',
          title: 'Families & Parents',
          desc:
            "Volunteer at your children's school, coach sports, and participate fully in community life. A record suspension removes blocks on standard background checks."
        },
        {
          img: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=500&q=80',
          title: 'Business Professionals',
          desc:
            'US business trips, licensing requirements, and professional certifications all become achievable once your criminal record is cleared or a waiver is in place.'
        },
        {
          img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&q=80',
          title: 'First-Time Applicants',
          desc:
            'Navigating the government process alone is overwhelming. We handle every step so you never miss a detail that could delay or reject your application.'
        },
        {
          img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80',
          title: 'Previously Denied',
          desc:
            "A rejected application isn't the end. Our specialists know exactly how to build a stronger, bulletproof case for approval on reapplication."
        }
      ].map((card) => (
        <div
          key={card.title}
          style={{
            background: '#fff',
            borderRadius: 10,
            overflow: 'hidden',
            border: '1px solid #e5eaf0',
            boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.12)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'none';
            e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.05)';
          }}
        >
          <img
            src={card.img}
            alt={card.title}
            style={{ width: '100%', height: 185, objectFit: 'cover' }}
          />

          <div style={{ padding: '1.4rem' }}>
            <h4
              style={{
                fontFamily: 'Playfair Display,serif',
                fontSize: '1.1rem',
                color: '#0B1F3A',
                marginBottom: '0.6rem'
              }}
            >
              {card.title}
            </h4>

            <p
              style={{
                fontSize: '0.87rem',
                color: '#6b7280',
                lineHeight: 1.72
              }}
            >
              {card.desc}
            </p>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>

    {/* FAQ PREVIEW */}
<section className="section section-alt">
  <div className="container">

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '3rem',
        alignItems: 'start'
      }}
    >

      <div>
        <div className="section-eyebrow">Common Questions</div>

        <h2
          style={{
            fontFamily: 'Playfair Display,serif',
            fontSize: '2.1rem',
            color: '#0B1F3A',
            lineHeight: 1.2,
            marginBottom: '1rem'
          }}
        >
          You Have Questions. We Have Answers.
        </h2>

        <p
          style={{
            color: '#6b7280',
            lineHeight: 1.8,
            marginBottom: '1.8rem',
            fontSize: '0.94rem'
          }}
        >
          This process can feel overwhelming. Our specialists are ready to walk you through every step — free of charge.
        </p>

        <img
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80"
          alt="Consultation"
          style={{
            width: '100%',
            borderRadius: 10,
            boxShadow: '0 8px 30px rgba(0,0,0,0.1)'
          }}
        />
      </div>

      <div>
        <FaqAccordion
          items={[
            [
              'Am I eligible for a Canadian Pardon?',
              "If you've completed your sentence and served the waiting period (5 years for summary offences, 10 years for indictable), you may be eligible. Our free assessment confirms in minutes."
            ],
            [
              'How long does a US Entry Waiver take?',
              'Processing typically takes 6–12 months depending on your history and USCIS workload. Waivers are valid for 1–5 years and we handle renewals too.'
            ],
            [
              'Is my information kept confidential?',
              "Absolutely. We comply with Canada's PIPEDA legislation. All documents are encrypted and only shared with the relevant government authority."
            ],
            [
              'Do I need a lawyer to apply?',
              'No. Our certified specialists achieve exceptional approval rates at a fraction of legal costs. A lawyer is not required for these applications.'
            ],
            [
              "What if I've already been denied US entry?",
              "A denial is not permanent. A US Entry Waiver is specifically designed for this situation. We've helped thousands in exactly this position."
            ]
          ]}
        />

        <div style={{ marginTop: '1.5rem' }}>
          <Link
            to="/faq"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              color: '#0B1F3A',
              fontWeight: 700,
              fontSize: '0.9rem',
              textDecoration: 'none'
            }}
          >
            View All FAQs <ArrowRight />
          </Link>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* FINAL CTA */}
      <section style={{ background: 'linear-gradient(135deg,#0B1F3A,#1a3a5c)', padding: '80px 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(201,168,76,0.07) 0%, transparent 60%)' }} />
        <div className="container" style={{ position: 'relative' }}>
          <div style={{ width: 64, height: 64, background: 'rgba(201,168,76,0.12)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', border: '2px solid rgba(201,168,76,0.3)', color: '#C9A84C' }}>
            <ShieldIcon />
          </div>
          <h2 style={{ fontFamily: 'Playfair Display,serif', fontSize: '2.7rem', color: '#fff', marginBottom: '1rem' }}>Your Fresh Start Is One Call Away</h2>
          <p style={{ color: 'rgba(255,255,255,0.68)', fontSize: '1.05rem', marginBottom: '2.5rem', maxWidth: 500, margin: '0 auto 2.5rem' }}>Join 5,000+ Canadians who have cleared their record and reclaimed their freedom. Speak with a specialist today — completely free.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/apply" style={{ background: '#C9A84C', color: '#0B1F3A', padding: '15px 32px', borderRadius: 4, fontWeight: 700, fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
              Apply Now — It's Free <ArrowRight />
            </Link>
            <a href="tel:18772266612" style={{ background: 'transparent', color: '#fff', padding: '15px 32px', borderRadius: 4, fontWeight: 600, fontSize: '0.95rem', border: '1.5px solid rgba(255,255,255,0.35)', display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
              <PhoneSVG /> 1-877-226-6612
            </a>
          </div>
        </div>
      </section>
    </>
  );
}