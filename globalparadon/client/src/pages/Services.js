import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/* ─── SHARED SVG ICONS ─── */
const ArrowRight = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>);
const CheckIcon = ({ size = 12, color = '#0B1F3A' }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>);
const StarSVG = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="#C9A84C" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>);
const ShieldSVG = () => (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>);
const PhoneSVG = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91A16 16 0 0 0 15 16.91l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>);
const DocSVG = () => (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>);
const PassSVG = () => (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="18" rx="2"/><circle cx="12" cy="11" r="3"/><path d="M2 8h20M2 16h4m12 0h4"/></svg>);
const PlaneSVG = () => (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21 4 19 4s-2 1-3.5 2.5L9 8 1 6.2l5.3-5.3c1-.9 2.5-.8 3.3 0L21.7 12.3c.8.8.9 2.3 0 3.3L17.8 19.2z"/></svg>);
const ClockSVG = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>);
const UserSVG = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>);
const MapSVG = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg>);
const AwardSVG = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>);

/* ─── SHARED COMPONENTS ─── */
function PageHero({ eyebrow, title, subtitle, bg }) {
  return (
    <div style={{ background: bg || 'linear-gradient(135deg,#0B1F3A,#1a3a5c)', paddingTop: 70, paddingBottom: 64, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 60% 50%, rgba(201,168,76,0.07) 0%, transparent 60%)' }} />
      <div className="container" style={{ textAlign: 'center', position: 'relative' }}>
        <div style={{ display: 'inline-block', background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.3)', color: '#E8C46A', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '2.5px', textTransform: 'uppercase', padding: '6px 16px', borderRadius: 20, marginBottom: '1.2rem' }}>{eyebrow}</div>
        <h1 style={{ fontFamily: 'Playfair Display,serif', fontSize: '2.8rem', color: '#fff', marginBottom: '1rem', lineHeight: 1.15 }}>{title}</h1>
        {subtitle && <p style={{ color: 'rgba(255,255,255,0.68)', maxWidth: 560, margin: '0 auto', fontSize: '1rem', lineHeight: 1.75 }}>{subtitle}</p>}
      </div>
    </div>
  );
}

function CheckList({ items, color = '#C9A84C' }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      {items.map((item, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
          <div style={{ width: 22, height: 22, background: color, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
            <CheckIcon size={11} color="#0B1F3A" />
          </div>
          <span style={{ fontSize: '0.92rem', color: '#374151', lineHeight: 1.65 }}>{item}</span>
        </div>
      ))}
    </div>
  );
}

function CtaBanner() {
  return (
    <div style={{ background: 'linear-gradient(135deg,#0B1F3A,#1a3a5c)', padding: '64px 0', textAlign: 'center', borderTop: '3px solid #C9A84C' }}>
      <div className="container">
        <h2 style={{ fontFamily: 'Playfair Display,serif', fontSize: '2.3rem', color: '#fff', marginBottom: '0.8rem' }}>Ready to Take the First Step?</h2>
        <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '2rem', maxWidth: 480, margin: '0 auto 2rem', fontSize: '1rem' }}>Book your free consultation today. No obligation, 100% confidential.</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/apply" style={{ background: '#C9A84C', color: '#0B1F3A', padding: '14px 30px', borderRadius: 4, fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>Apply Now — It's Free <ArrowRight /></Link>
          <a href="tel:18772266612" style={{ background: 'transparent', color: '#fff', padding: '14px 28px', borderRadius: 4, fontWeight: 600, fontSize: '0.9rem', border: '1.5px solid rgba(255,255,255,0.35)', display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}><PhoneSVG /> 1-877-226-6612</a>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════
   SERVICES PAGE
══════════════════════════════════════ */
export function Services() {
  return (
    <>
      <PageHero eyebrow="Our Services" title="Expert Help for Every Barrier a Criminal Record Creates" subtitle="Three specialized services designed to clear your path — whether you need to seal your record, cross the US border, or join the NEXUS program." />

      {/* Service 1: Canadian Pardon */}
    <section className="section" id="canadian-pardon">
  <div className="container">

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '3rem',
        alignItems: 'center'
      }}
    >

      {/* LEFT SIDE */}
      <div>

        {/* HEADER */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: '1.5rem' }}>
          
          <div
            style={{
              width: 60,
              height: 60,
              background: '#EFF6FF',
              borderRadius: 12,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <DocSVG />
          </div>

          <div>
            <div
              style={{
                fontSize: '0.68rem',
                fontWeight: 700,
                color: '#C9A84C',
                textTransform: 'uppercase',
                letterSpacing: '2px'
              }}
            >
              Service 01
            </div>

            <h2
              style={{
                fontFamily: 'Playfair Display,serif',
                fontSize: '1.8rem',
                color: '#0B1F3A',
                lineHeight: 1.2
              }}
            >
              Canadian Pardon / Record Suspension
            </h2>
          </div>
        </div>

        {/* TEXT */}
        <p style={{ color: '#6b7280', lineHeight: 1.8, marginBottom: '1rem', fontSize: '0.95rem' }}>
          A Record Suspension allows convicted individuals to have their criminal record separated from public checks.
        </p>

        <p style={{ color: '#6b7280', lineHeight: 1.8, marginBottom: '1.8rem', fontSize: '0.95rem' }}>
          Once granted, employers, landlords, and border agents can no longer see your record in standard screenings.
        </p>

        {/* CHECKLIST */}
        <CheckList
          items={[
            'Eligibility assessment included at no charge',
            'All required forms prepared by specialists',
            'RCMP fingerprint coordination and submission',
            'Police record retrieval from all jurisdictions',
            'Complete application package submission',
            'Full progress tracking until decision',
            'Post-approval documentation support'
          ]}
        />

        {/* CTA */}
        <div
          style={{
            marginTop: '2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap'
          }}
        >
          <Link
            to="/apply"
            style={{
              background: '#C9A84C',
              color: '#0B1F3A',
              padding: '13px 26px',
              borderRadius: 4,
              fontWeight: 700,
              fontSize: '0.875rem',
              textTransform: 'uppercase',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              textDecoration: 'none'
            }}
          >
            Apply for a Pardon <ArrowRight />
          </Link>

          <div
            style={{
              fontFamily: 'Playfair Display,serif',
              fontSize: '1.5rem',
              fontWeight: 700,
              color: '#0B1F3A'
            }}
          >
            From <span style={{ color: '#C9A84C' }}>$395</span>
          </div>
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div>

        <img
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=700&q=80"
          alt="Canadian Pardon Application"
          style={{
            width: '100%',
            borderRadius: 10,
            boxShadow: '0 16px 48px rgba(0,0,0,0.12)',
            marginBottom: '1.5rem'
          }}
        />

        <div
          style={{
            background: '#F7F6F2',
            borderRadius: 10,
            padding: '1.5rem'
          }}
        >
          <h4
            style={{
              fontFamily: 'Playfair Display,serif',
              fontSize: '1rem',
              color: '#0B1F3A',
              marginBottom: '1rem'
            }}
          >
            Eligibility Requirements
          </h4>

          {[
            ['Waiting Period', '5 or 10 years after completion'],
            ['All Conditions', 'All fines and sentences completed'],
            ['No New Offences', 'Clean record during waiting period'],
            ['Good Conduct', 'Law-abiding behaviour proven']
          ].map(([label, val]) => (
            <div
              key={label}
              style={{
                display: 'flex',
                gap: 10,
                marginBottom: 10,
                fontSize: '0.86rem'
              }}
            >
              <CheckIcon size={14} color="#C9A84C" />
              <div>
                <strong style={{ color: '#0B1F3A' }}>{label}:</strong>{' '}
                <span style={{ color: '#6b7280' }}>{val}</span>
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  </div>
</section>

      <div style={{ background: '#e5eaf0', height: 1, maxWidth: 1200, margin: '0 auto 0' }} />

      {/* Service 2: US Entry Waiver */}
    {/* Service 2: US Entry Waiver */}
<section className="section section-alt" id="us-entry-waiver">
  <div className="container">

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '3rem',
        alignItems: 'center'
      }}
    >

      {/* LEFT SIDE */}
      <div>

        <img
          src="https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=700&q=80"
          alt="US Entry Waiver"
          style={{
            width: '100%',
            borderRadius: 10,
            boxShadow: '0 16px 48px rgba(0,0,0,0.12)',
            marginBottom: '1.5rem'
          }}
        />

        <div
          style={{
            background: '#fff',
            borderRadius: 10,
            padding: '1.5rem',
            border: '1.5px solid #C9A84C'
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: 10,
              alignItems: 'center',
              marginBottom: '0.5rem',
              flexWrap: 'wrap'
            }}
          >
            <AwardSVG />

            <h4
              style={{
                fontFamily: 'Playfair Display,serif',
                fontSize: '1rem',
                color: '#0B1F3A',
                margin: 0
              }}
            >
              Did You Know?
            </h4>
          </div>

          <p
            style={{
              fontSize: '0.87rem',
              color: '#6b7280',
              lineHeight: 1.7,
              margin: 0
            }}
          >
            Over 1 million Canadians are estimated to be inadmissible to the United States due to a criminal record. A US Entry Waiver is the only legal way to restore your right to enter.
          </p>
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div>

        {/* HEADER */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            marginBottom: '1.5rem',
            flexWrap: 'wrap'
          }}
        >

          <div
            style={{
              width: 60,
              height: 60,
              background: '#FFFBEB',
              borderRadius: 12,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}
          >
            <PassSVG />
          </div>

          <div>
            <div
              style={{
                fontSize: '0.68rem',
                fontWeight: 700,
                color: '#C9A84C',
                textTransform: 'uppercase',
                letterSpacing: '2px'
              }}
            >
              Service 02
            </div>

            <h2
              style={{
                fontFamily: 'Playfair Display,serif',
                fontSize: '1.8rem',
                color: '#0B1F3A',
                lineHeight: 1.2,
                margin: 0
              }}
            >
              US Entry Waiver (Form I-192)
            </h2>
          </div>

        </div>

        {/* TEXT */}
        <p
          style={{
            color: '#6b7280',
            lineHeight: 1.8,
            marginBottom: '1rem',
            fontSize: '0.95rem'
          }}
        >
          If you've been refused entry into the United States because of a criminal record, a US Entry Waiver allows you to legally enter despite inadmissibility.
        </p>

        <p
          style={{
            color: '#6b7280',
            lineHeight: 1.8,
            marginBottom: '1.8rem',
            fontSize: '0.95rem'
          }}
        >
          Waivers are valid for 1 to 5 years and can be renewed. Our specialists have handled thousands of complex applications successfully.
        </p>

        {/* CHECKLIST */}
        <CheckList
          items={[
            'Full I-192 application preparation and review',
            'Criminal rehabilitation strategy',
            'Supporting documentation preparation',
            'USCIS response assistance',
            'Renewal support',
            'Multi-year validity applications'
          ]}
        />

        {/* CTA */}
        <div
          style={{
            marginTop: '2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap'
          }}
        >

          <Link
            to="/apply"
            style={{
              background: '#C9A84C',
              color: '#0B1F3A',
              padding: '13px 26px',
              borderRadius: 4,
              fontWeight: 700,
              fontSize: '0.875rem',
              textTransform: 'uppercase',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              textDecoration: 'none'
            }}
          >
            Get a US Waiver <ArrowRight />
          </Link>

          <div
            style={{
              fontFamily: 'Playfair Display,serif',
              fontSize: '1.5rem',
              fontWeight: 700,
              color: '#0B1F3A'
            }}
          >
            From <span style={{ color: '#C9A84C' }}>$1,495</span>
          </div>

        </div>

      </div>

    </div>

  </div>
</section>

      {/* Service 3: NEXUS */}
     <section className="section"  id="nexus-application">
  <div className="container">

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '3rem',
        alignItems: 'center'
      }}
    >

      {/* LEFT SIDE */}
      <div>

        {/* HEADER */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            marginBottom: '1.5rem',
            flexWrap: 'wrap'
          }}
        >

          <div
            style={{
              width: 60,
              height: 60,
              background: '#F0FDF4',
              borderRadius: 12,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}
          >
            <PlaneSVG />
          </div>

          <div>
            <div
              style={{
                fontSize: '0.68rem',
                fontWeight: 700,
                color: '#C9A84C',
                textTransform: 'uppercase',
                letterSpacing: '2px'
              }}
            >
              Service 03
            </div>

            <h2
              style={{
                fontFamily: 'Playfair Display,serif',
                fontSize: '1.8rem',
                color: '#0B1F3A',
                lineHeight: 1.2,
                margin: 0
              }}
            >
              NEXUS Application
            </h2>
          </div>

        </div>

        {/* TEXT */}
        <p
          style={{
            color: '#6b7280',
            lineHeight: 1.8,
            marginBottom: '1rem',
            fontSize: '0.95rem'
          }}
        >
          The NEXUS program allows trusted travellers to cross the Canada-US border faster using dedicated lanes and airport kiosks.
        </p>

        <p
          style={{
            color: '#6b7280',
            lineHeight: 1.8,
            marginBottom: '1.8rem',
            fontSize: '0.95rem'
          }}
        >
          If you have a criminal history that could affect approval, Global Pardon & Waivers manages the complete process from review to interview preparation.
        </p>

        {/* CHECKLIST */}
        <CheckList
          items={[
            'Full NEXUS application preparation',
            'Criminal history review and strategy',
            'Interview preparation and coaching',
            'Document organization and submission',
            'Complication handling for past charges',
            'Follow-up until final card delivery'
          ]}
        />

        {/* CTA */}
        <div
          style={{
            marginTop: '2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap'
          }}
        >

          <Link
            to="/apply"
            style={{
              background: '#C9A84C',
              color: '#0B1F3A',
              padding: '13px 26px',
              borderRadius: 4,
              fontWeight: 700,
              fontSize: '0.875rem',
              textTransform: 'uppercase',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              textDecoration: 'none'
            }}
          >
            Apply for NEXUS <ArrowRight />
          </Link>

          <div
            style={{
              fontFamily: 'Playfair Display,serif',
              fontSize: '1.5rem',
              fontWeight: 700,
              color: '#0B1F3A'
            }}
          >
            From <span style={{ color: '#C9A84C' }}>$295</span>
          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div>

        <img
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=700&q=80"
          alt="NEXUS Application"
          style={{
            width: '100%',
            borderRadius: 10,
            boxShadow: '0 16px 48px rgba(0,0,0,0.12)',
            marginBottom: '1.5rem'
          }}
        />

        {/* BENEFITS GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1rem'
          }}
        >

          {[
            ['Dedicated Lanes', 'Skip long customs queues at major crossings'],
            ['Airport Kiosks', 'Use automated processing at airports'],
            ['Sea Travel', 'Expedited entry at marine ports'],
            ['Member ID', 'Accepted as WHTI compliant ID']
          ].map(([t, d]) => (

            <div
              key={t}
              style={{
                background: '#F7F6F2',
                borderRadius: 8,
                padding: '1rem'
              }}
            >

              <div
                style={{
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  color: '#0B1F3A',
                  marginBottom: 4
                }}
              >
                {t}
              </div>

              <div
                style={{
                  fontSize: '0.8rem',
                  color: '#6b7280',
                  lineHeight: 1.6
                }}
              >
                {d}
              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

  </div>
</section>

      {/* Comparison Table */}
 <section className="section section-alt">
  <div className="container">

    <div className="section-header">
      <div className="section-eyebrow">Quick Comparison</div>

      <h2 className="section-title">
        Which Service Do You Need?
      </h2>

      <p className="section-sub">
        Not sure where to start? This comparison will help — or book a free consultation and we'll guide you.
      </p>
    </div>

    {/* TABLE WRAPPER */}
    <div
      style={{
        overflowX: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: 10
      }}
    >

      <table
        style={{
          width: '100%',
          minWidth: 700,
          borderCollapse: 'collapse',
          background: '#fff',
          borderRadius: 10,
          overflow: 'hidden',
          boxShadow: '0 2px 16px rgba(0,0,0,0.07)'
        }}
      >

        {/* TABLE HEAD */}
        <thead>
          <tr style={{ background: '#0B1F3A' }}>

            {[
              '',
              'Canadian Pardon',
              'US Entry Waiver',
              'NEXUS Card'
            ].map(h => (

              <th
                key={h}
                style={{
                  padding: '1rem 1.2rem',
                  textAlign: 'left',
                  color:
                    h === ''
                      ? 'transparent'
                      : h.includes('Waiver')
                      ? '#E8C46A'
                      : '#fff',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  letterSpacing: '0.3px',
                  whiteSpace: 'nowrap'
                }}
              >
                {h}
              </th>

            ))}

          </tr>
        </thead>

      {/* TABLE BODY */}
<tbody>

  {[
    [
      'Goal',
      'Seal Canadian criminal record',
      'Enter the United States',
      'Fast border crossing'
    ],
    [
      'Who needs it',
      'Anyone with a Canadian conviction',
      'Canadians denied US entry',
      'Frequent Canada-US travelers'
    ],
    [
      'Processing Time',
      '6–18 months',
      '6–12 months',
      '3–6 months'
    ],
    [
      'Validity',
      'Permanent (unless revoked)',
      '1–5 years (renewable)',
      '5 years (renewable)'
    ],
    [
      'Support Includes',
      'Document preparation & guidance',
      'Application strategy & case support',
      'Application assistance & interview guidance'
    ],
    [
      'Service Type',
      'Personalized case support',
      'Customized waiver assistance',
      'Professional application support'
    ]
  ].map(([label, ...vals], i) => (

    <tr
      key={label}
      style={{
        background: i % 2 === 0 ? '#fff' : '#F7F6F2'
      }}
    >

              {/* LABEL COLUMN */}
              <td
                style={{
                  padding: '0.9rem 1.2rem',
                  fontWeight: 700,
                  fontSize: '0.87rem',
                  color: '#374151',
                  borderRight: '1px solid #e5eaf0',
                  whiteSpace: 'nowrap'
                }}
              >
                {label}
              </td>

              {/* DATA COLUMNS */}
              {vals.map((v, vi) => (

                <td
                  key={vi}
                  style={{
                    padding: '0.9rem 1.2rem',
                    fontSize: '0.87rem',
                    color: '#6b7280',
                    borderRight:
                      vi < 2
                        ? '1px solid #e5eaf0'
                        : 'none',
                    minWidth: 180
                  }}
                >
                  {v}
                </td>

              ))}

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  </div>
</section>

      <CtaBanner />
    </>
  );
}

/* ══════════════════════════════════════
   HOW IT WORKS PAGE
══════════════════════════════════════ */
export function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Free Consultation',
      img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80',
      desc: "Your journey begins with a no-obligation call with one of our certified specialists. We'll review your criminal history, identify which services apply, confirm your eligibility, and give you a clear picture of the timeline and costs involved — all at zero cost to you.",
      points: [
        'Review of your full criminal history',
        'Eligibility confirmation',
        'Clear pricing with no surprises',
        'Timeline and process explained',
        'All your questions answered',
      ],
    },
    {
      num: '02',
      title: 'Document Collection',
      img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80',
      desc: 'This is where the heavy lifting starts — and where most DIY applicants make costly mistakes. We coordinate everything: fingerprinting appointments, police certificate requests from all relevant jurisdictions, court records retrieval, and supporting documents required by the relevant authority.',
      points: [
        'Fingerprinting coordination',
        'Police certificate requests (all provinces)',
        'Court record retrieval',
        'Supporting document checklist',
        'Secure document storage',
      ],
    },
    {
      num: '03',
      title: 'Application Preparation',
      img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80',
      desc: 'Our specialists prepare your complete application package — every form filled correctly, every document organized in the exact format required. For US waivers, we also craft a compelling personal statement and rehabilitation evidence that significantly improves approval odds.',
      points: [
        'All government forms completed',
        'Personal statement drafted (US Waiver)',
        'Supporting evidence organized',
        'Quality review by senior specialist',
        'Application submitted to correct authority',
      ],
    },
    {
      num: '04',
      title: 'Tracking & Updates',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
      desc: 'Once submitted, we monitor your application and keep you informed every step of the way. If the government requests additional information or documentation, we handle the response immediately to avoid any delays in your processing time.',
      points: [
        'Regular status updates',
        'Immediate response to government queries',
        'Processing timeline monitoring',
        'Escalation if delays occur',
        'You will never be left wondering',
      ],
    },
    {
      num: '05',
      title: 'Approval & Beyond',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
      desc: 'When your application is approved, we guide you through the next steps — what your pardon or waiver means, how to use it, and what to do if you are ever questioned at the border. For US waivers, we also manage your renewal well before expiry so you are never caught without coverage.',
      points: [
        'Approval confirmation and documentation',
        'Guidance on using your pardon/waiver',
        'Border crossing tips and advice',
        'Renewal reminders before expiry',
        'Lifetime client support',
      ],
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Our Process"
        title="How We Take You from Application to Approval"
        subtitle="Five clear steps from your first call to your approved pardon or waiver. No surprises, no guesswork — just results."
      />

      {/* PROCESS STEPS */}
      <section className="section">
        <div className="container">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`hiw-grid ${i % 2 !== 0 ? 'reverse' : ''}`}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '4rem',
                alignItems: 'center',
                marginBottom: '5rem',
              }}
            >
              {/* IMAGE */}
              <div
                style={{
                  position: 'relative',
                  order: i % 2 !== 0 ? 2 : 1,
                }}
              >
                <img
                  src={step.img}
                  alt={step.title}
                  style={{
                    width: '100%',
                    borderRadius: 10,
                    boxShadow: '0 16px 48px rgba(0,0,0,0.12)',
                  }}
                />

                <div
                  style={{
                    position: 'absolute',
                    top: '-1rem',
                    left: '-1rem',
                    width: 56,
                    height: 56,
                    background: '#C9A84C',
                    borderRadius: 10,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'Playfair Display,serif',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: '#0B1F3A',
                    boxShadow: '0 4px 16px rgba(201,168,76,0.4)',
                  }}
                >
                  {step.num}
                </div>
              </div>

              {/* CONTENT */}
              <div
                style={{
                  order: i % 2 !== 0 ? 1 : 2,
                }}
              >
                <h2
                  style={{
                    fontFamily: 'Playfair Display,serif',
                    fontSize: '2rem',
                    color: '#0B1F3A',
                    marginBottom: '1rem',
                    lineHeight: 1.2,
                  }}
                >
                  Step {step.num}: {step.title}
                </h2>

                <p
                  style={{
                    color: '#6b7280',
                    lineHeight: 1.8,
                    marginBottom: '1.5rem',
                    fontSize: '0.95rem',
                  }}
                >
                  {step.desc}
                </p>

                <CheckList items={step.points} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">Timeline</div>

            <h2 className="section-title">
              How Long Does It Take?
            </h2>

            <p className="section-sub">
              Processing times vary by service and individual circumstances.
              Here's what to expect.
            </p>
          </div>

          <div
            className="timeline-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3,1fr)',
              gap: '2rem',
            }}
          >
            {[
              {
                icon: <DocSVG />,
                title: 'Canadian Pardon',
                timeline: '6–18 Months',
                phases: [
                  ['Consultation & Documents', '2–4 weeks'],
                  ['RCMP Fingerprinting', '3–6 weeks'],
                  ['Application Submission', '1 week'],
                  ['Parole Board Processing', '4–12 months'],
                ],
              },
              {
                icon: <PassSVG />,
                title: 'US Entry Waiver',
                timeline: '6–12 Months',
                featured: true,
                phases: [
                  ['Consultation & Documents', '3–6 weeks'],
                  ['Application Preparation', '2–3 weeks'],
                  ['USCIS Processing', '4–8 months'],
                  ['Approval & Card Issued', '2–4 weeks'],
                ],
              },
              {
                icon: <PlaneSVG />,
                title: 'NEXUS Card',
                timeline: '3–6 Months',
                phases: [
                  ['Application Submission', '1–2 weeks'],
                  ['CBP/CBSA Review', '4–8 weeks'],
                  ['Interview Scheduled', '6–12 weeks'],
                  ['Card Delivered', '2–3 weeks'],
                ],
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  background: card.featured ? '#0B1F3A' : '#fff',
                  border: `1.5px solid ${
                    card.featured ? '#C9A84C' : '#e5eaf0'
                  }`,
                  borderRadius: 10,
                  padding: '2rem',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.07)',
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    background: card.featured
                      ? 'rgba(201,168,76,0.15)'
                      : '#F7F6F2',
                    borderRadius: 10,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem',
                  }}
                >
                  {card.icon}
                </div>

                <h3
                  style={{
                    fontFamily: 'Playfair Display,serif',
                    fontSize: '1.2rem',
                    color: card.featured ? '#fff' : '#0B1F3A',
                    marginBottom: 4,
                  }}
                >
                  {card.title}
                </h3>

                <div
                  style={{
                    fontFamily: 'Playfair Display,serif',
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: '#C9A84C',
                    marginBottom: '1.5rem',
                  }}
                >
                  {card.timeline}
                </div>

                {card.phases.map(([phase, time]) => (
                  <div
                    key={phase}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: '8px 0',
                      borderBottom: `1px solid ${
                        card.featured
                          ? 'rgba(255,255,255,0.08)'
                          : '#f0f0f0'
                      }`,
                      fontSize: '0.84rem',
                    }}
                  >
                    <span
                      style={{
                        color: card.featured
                          ? 'rgba(255,255,255,0.7)'
                          : '#6b7280',
                      }}
                    >
                      {phase}
                    </span>

                    <span
                      style={{
                        fontWeight: 600,
                        color: card.featured
                          ? '#E8C46A'
                          : '#0B1F3A',
                      }}
                    >
                      {time}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {

          .hiw-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }

          .hiw-grid.reverse > div:first-child {
            order: 1 !important;
          }

          .hiw-grid.reverse > div:last-child {
            order: 2 !important;
          }

          .timeline-grid {
            grid-template-columns: 1fr !important;
          }

        }
      `}</style>

      <CtaBanner />
    </>
  );
}

/* ══════════════════════════════════════
   ABOUT PAGE
══════════════════════════════════════ */
export function About() {
  return (
    <>
      <PageHero
        eyebrow="About Global Pardon & Waiver"
        title="Canada's Most Trusted Pardon & Waiver Specialists"
        subtitle="Since 2010, we've helped over 5,000 Canadians clear their records and reclaim their freedom. Here's our story."
      />

     {/* MISSION */}
<section className="section">
  <div className="container">
    <div
      className="about-mission-grid"
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        alignItems: 'center',
      }}
    >
      {/* LEFT */}
      <div>
        <div className="section-eyebrow">
          Our Mission
        </div>

        <h2
          style={{
            fontFamily: 'Playfair Display,serif',
            fontSize: '2.2rem',
            color: '#0B1F3A',
            lineHeight: 1.2,
            marginBottom: '1.2rem',
          }}
        >
          Helping You Move Forward With Confidence
        </h2>

        <p
          style={{
            color: '#6b7280',
            lineHeight: 1.8,
            marginBottom: '1.2rem',
            fontSize: '0.96rem',
          }}
        >
          At Global Pardon & Waiver Services, our mission
          is to help individuals overcome past obstacles and
          create new opportunities for a better future.
          We believe that one mistake should not define a
          person's entire life or limit their ability to
          travel, work, and move forward with confidence.
        </p>

        <p
          style={{
            color: '#6b7280',
            lineHeight: 1.8,
            marginBottom: '1.2rem',
            fontSize: '0.96rem',
          }}
        >
          With years of experience and a dedicated team of
          professionals, we provide trusted guidance for
          record suspensions, US entry waivers, and related
          services. We understand that every case is unique,
          which is why we support our clients through every
          step of the process with care, professionalism,
          and attention to detail.
        </p>

        <p
          style={{
            color: '#6b7280',
            lineHeight: 1.8,
            fontSize: '0.96rem',
          }}
        >
          Our goal is simple — to make the process less
          stressful, provide reliable support, and help
          people regain peace of mind while opening the
          door to new possibilities and a brighter future.
        </p>
      </div>

            {/* RIGHT */}
            <div
              style={{
                position: 'relative',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=700&q=80"
                alt="Global Pardon team"
                style={{
                  width: '100%',
                  borderRadius: 10,
                  boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
                }}
              />

              <div
                style={{
                  position: 'absolute',
                  bottom: '-1.5rem',
                  right: '-1.5rem',
                  background: '#C9A84C',
                  color: '#0B1F3A',
                  padding: '1.4rem 1.8rem',
                  borderRadius: 8,
                  boxShadow:
                    '0 10px 30px rgba(201,168,76,0.35)',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    fontFamily:
                      'Playfair Display,serif',
                    fontSize: '2rem',
                    fontWeight: 700,
                    lineHeight: 1,
                  }}
                >
                  5,000+
                </div>

                <div
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '1.5px',
                    marginTop: 4,
                  }}
                >
                  Cases Cleared
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section
        style={{
          background: '#0B1F3A',
          padding: '60px 0',
        }}
      >
        <div className="container">
          <div
            className="about-stats-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4,1fr)',
              gap: '2rem',
              textAlign: 'center',
            }}
          >
            {[
              [
                '5,000+',
                'Clients Served',
                'Since 2010',
              ],
              [
                '98%',
                'Approval Rate',
                'Industry-leading',
              ],
              [
                '16+',
                'Years Experience',
                'Established 2010',
              ],
              [
                '3',
                'Core Services',
                'Pardon, Waiver, NEXUS',
              ],
            ].map(([num, label, sub]) => (
              <div key={label}>
                <div
                  style={{
                    fontFamily:
                      'Playfair Display,serif',
                    fontSize: '2.4rem',
                    fontWeight: 700,
                    color: '#E8C46A',
                  }}
                >
                  {num}
                </div>

                <div
                  style={{
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    color: '#fff',
                    margin: '6px 0 4px',
                  }}
                >
                  {label}
                </div>

                <div
                  style={{
                    fontSize: '0.76rem',
                    color: 'rgba(255,255,255,0.45)',
                    textTransform: 'uppercase',
                    letterSpacing: 1,
                  }}
                >
                  {sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">
              Our Values
            </div>

            <h2 className="section-title">
              What Sets Global Pardon & Waivers
            </h2>

            <p className="section-sub">
              We hold ourselves to a higher standard —
              because our clients deserve nothing less.
            </p>
          </div>

          <div
            className="about-values-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3,1fr)',
              gap: '2rem',
            }}
          >
            {[
              {
                icon: <ShieldSVG />,
                title: 'Absolute Confidentiality',
                desc:
                  "Every case is treated with the highest level of privacy. Your information is encrypted, never shared, and handled in full compliance with Canada's PIPEDA privacy legislation.",
              },
              {
                icon: <AwardSVG />,
                title: 'Certified Expertise',
                desc:
                  "Our specialists are fully certified and regularly updated on all Parole Board of Canada and USCIS regulations. We don't guess — we know exactly what each authority requires.",
              },
              {
                icon: <UserSVG />,
                title: 'Client-First Approach',
                desc:
                  "You're not a file number to us. You'll have a dedicated specialist who knows your case, answers your calls, and keeps you informed throughout the entire process.",
              },
              {
                icon: <MapSVG />,
                title: 'National Coverage',
                desc:
                  'We serve clients across all ten provinces and three territories. No matter where you are in Canada, our specialists can handle your application remotely or in person.',
              },
              {
                icon: <ClockSVG />,
                title: 'Fast, Efficient Process',
                desc:
                  'Our streamlined process minimizes delays and errors. We prepare bulletproof applications the first time, which means fewer back-and-forths and faster approvals.',
              },
              {
                icon: <PhoneSVG />,
                title: 'Transparent Pricing',
                desc:
                  "No hidden fees. No surprise charges. Our pricing is always fully disclosed upfront, and government fees are clearly separated. You know exactly what you're paying for.",
              },
            ].map((v) => (
              <div
                key={v.title}
                style={{
                  background: '#fff',
                  borderRadius: 10,
                  padding: '2rem',
                  border: '1px solid #e5eaf0',
                  boxShadow:
                    '0 2px 12px rgba(0,0,0,0.04)',
                }}
              >
                <div
                  style={{
                    width: 50,
                    height: 50,
                    background:
                      'rgba(11,31,58,0.06)',
                    borderRadius: 10,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.2rem',
                    color: '#0B1F3A',
                  }}
                >
                  {v.icon}
                </div>

                <h4
                  style={{
                    fontFamily:
                      'Playfair Display,serif',
                    fontSize: '1.1rem',
                    color: '#0B1F3A',
                    marginBottom: '0.7rem',
                  }}
                >
                  {v.title}
                </h4>

                <p
                  style={{
                    fontSize: '0.88rem',
                    color: '#6b7280',
                    lineHeight: 1.75,
                  }}
                >
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

     

      {/* RESPONSIVE */}
      <style>{`
        @media (max-width: 900px) {

          .about-mission-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }

          .about-stats-grid {
            grid-template-columns: repeat(2,1fr) !important;
            gap: 2rem !important;
          }

          .about-values-grid {
            grid-template-columns: 1fr !important;
          }

          .about-team-grid {
            grid-template-columns: repeat(2,1fr) !important;
          }

        }

        @media (max-width: 600px) {

          .about-stats-grid {
            grid-template-columns: 1fr !important;
          }

          .about-team-grid {
            grid-template-columns: 1fr !important;
          }

        }
      `}</style>

      <CtaBanner />
    </>
  );
}

/* ══════════════════════════════════════
   SERVICES PAGE
══════════════════════════════════════ */
export function Pricing() {
  return (
    <>
      <PageHero
        eyebrow="Professional Support"
        title="Tailored Solutions For Every Situation"
        subtitle="Every case is unique. Our team provides personalized guidance and support based on your specific needs and circumstances."
      />

      {/* SERVICES */}
      <section className="section">
        <div className="container">
          <div className="pricing-grid">
            {[
              {
                icon: <DocSVG />,
                title: 'Canadian Pardon',
                sub: 'Record Suspension Support',
                custom:
                  'Personalized assistance based on your case',
                features: [
                  'Eligibility assessment',
                  'All paperwork prepared',
                  'Police record retrieval',
                  'RCMP fingerprint coordination',
                  'Application submission',
                  'Full status tracking',
                  'Post-approval guidance',
                ],
                note:
                  'Support tailored to your eligibility and application requirements.',
              },
              {
                icon: <PassSVG />,
                title: 'US Entry Waiver',
                sub: 'Form I-192 Application Support',
                custom:
                  'Customized solutions for complex cases',
                features: [
                  'Full I-192 application',
                  'Personal rehabilitation statement',
                  'Supporting documentation',
                  'Criminal rehabilitation strategy',
                  'Response to USCIS queries',
                  'Renewal support included',
                  'Multi-year validity guidance',
                ],
                featured: true,
                note:
                  'Complete support from preparation to submission.',
              },
              {
                icon: <PlaneSVG />,
                title: 'NEXUS Application',
                sub: 'Trusted Traveller Program',
                custom:
                  'Professional application assistance',
                features: [
                  'Application preparation',
                  'Criminal history review',
                  'Interview coaching',
                  'Document organization',
                  'Complication handling',
                  'Approval follow-up',
                  'Card delivery tracking',
                ],
                note:
                  'Guidance designed to simplify the entire process.',
              },
            ].map((p) => (
              <div
                key={p.title}
                style={{
                  background: p.featured ? '#0B1F3A' : '#fff',
                  border: `1.5px solid ${
                    p.featured ? '#C9A84C' : '#dde4ed'
                  }`,
                  borderRadius: 12,
                  padding: '2rem',
                  transform: p.featured ? 'scale(1.02)' : 'none',
                  position: 'relative',
                  boxShadow: p.featured
                    ? '0 16px 48px rgba(11,31,58,0.2)'
                    : '0 2px 12px rgba(0,0,0,0.05)',
                  transition: '0.3s ease',
                }}
              >
                {p.featured && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-14px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: '#C9A84C',
                      color: '#0B1F3A',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      padding: '4px 16px',
                      borderRadius: 20,
                      whiteSpace: 'nowrap',
                      letterSpacing: 1,
                      textTransform: 'uppercase',
                    }}
                  >
                    Most Requested
                  </div>
                )}

                <div
                  style={{
                    width: 56,
                    height: 56,
                    background: p.featured
                      ? 'rgba(201,168,76,0.12)'
                      : '#F7F6F2',
                    borderRadius: 12,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem',
                  }}
                >
                  {p.icon}
                </div>

                <h3
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '1.5rem',
                    color: p.featured ? '#fff' : '#0B1F3A',
                    marginBottom: 4,
                  }}
                >
                  {p.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.85rem',
                    color: p.featured
                      ? 'rgba(255,255,255,0.55)'
                      : '#9ca3af',
                    marginBottom: '1.2rem',
                    paddingBottom: '1.2rem',
                    borderBottom: `1px solid ${
                      p.featured
                        ? 'rgba(255,255,255,0.1)'
                        : '#e5eaf0'
                    }`,
                  }}
                >
                  {p.sub}
                </p>

                <div
                  style={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    lineHeight: 1.6,
                    color: p.featured ? '#E8C46A' : '#0B1F3A',
                    marginBottom: '1.5rem',
                  }}
                >
                  {p.custom}
                </div>

                {p.features.map((f) => (
                  <div
                    key={f}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      marginBottom: 10,
                      fontSize: '0.9rem',
                      color: p.featured
                        ? 'rgba(255,255,255,0.82)'
                        : '#6b7280',
                    }}
                  >
                    <span
                      style={{
                        color: '#C9A84C',
                        fontWeight: 700,
                        fontSize: '1rem',
                      }}
                    >
                      ✓
                    </span>
                    {f}
                  </div>
                ))}

                {p.note && (
                  <p
                    style={{
                      fontSize: '0.8rem',
                      color: p.featured
                        ? 'rgba(255,255,255,0.45)'
                        : '#9ca3af',
                      marginTop: '1rem',
                      paddingTop: '1rem',
                      borderTop: `1px solid ${
                        p.featured
                          ? 'rgba(255,255,255,0.08)'
                          : '#e5eaf0'
                      }`,
                      lineHeight: 1.7,
                    }}
                  >
                    {p.note}
                  </p>
                )}

                <Link
                  to="/apply"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    marginTop: '1.5rem',
                    padding: '14px',
                    borderRadius: 6,
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    textTransform: 'uppercase',
                    letterSpacing: 1,
                    textDecoration: 'none',
                    background: p.featured ? '#C9A84C' : '#0B1F3A',
                    color: p.featured ? '#0B1F3A' : '#fff',
                  }}
                >
                  Get Free Assessment
                </Link>
              </div>
            ))}
          </div>

          <p
            style={{
              textAlign: 'center',
              marginTop: '2.5rem',
              fontSize: '0.92rem',
              color: '#9ca3af',
            }}
          >
            Need help choosing the right service?{' '}
            <Link
              to="/apply"
              style={{ color: '#0B1F3A', fontWeight: 700 }}
            >
              Speak with our team today.
            </Link>
          </p>
        </div>
      </section>

    

      {/* Payment & FAQ */}
      <section className="section section-alt">
        <div className="container">
          <div className="payment-grid">
            <div>
              <div className="section-eyebrow">
                Payment Options
              </div>

              <h2
                style={{
                  fontFamily: 'Playfair Display,serif',
                  fontSize: '2rem',
                  color: '#0B1F3A',
                  marginBottom: '1.2rem',
                  lineHeight: 1.2,
                }}
              >
                Flexible Payment Plans Available
              </h2>

              <p
                style={{
                  color: '#6b7280',
                  lineHeight: 1.8,
                  marginBottom: '1.5rem',
                  fontSize: '0.95rem',
                }}
              >
                We understand that the cost of clearing your
                record can be a barrier. That's why we offer
                flexible payment options to make our services
                accessible to every Canadian who needs them.
              </p>

              <CheckList
                items={[
                  'All major credit cards accepted',
                  'Interac e-Transfer',
                  'Payment plans available on request',
                  'No interest financing options',
                  'Secure online payment portal',
                  'Receipt provided for all payments',
                ]}
              />
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80"
                alt="Transparent pricing"
                style={{
                  width: '100%',
                  borderRadius: 10,
                  boxShadow:
                    '0 12px 40px rgba(0,0,0,0.1)',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .pricing-grid{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:2rem;
          align-items:start;
        }

        .payment-grid{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:4rem;
          align-items:center;
        }

        @media(max-width:992px){
          .pricing-grid{
            grid-template-columns:1fr;
          }

          .payment-grid{
            grid-template-columns:1fr;
            gap:2rem;
          }
        }
      `}</style>

      <CtaBanner />
    </>
  );
}

/* ══════════════════════════════════════
   TESTIMONIALS PAGE
══════════════════════════════════════ */
export function Testimonials() {
  const reviews = [
    {
      initials: 'SM',
      name: 'Sarah M.',
      type: 'US Entry Waiver',
      location: 'Toronto, ON',
      rating: 5,
      text: "I was denied entry to the US twice because of a DUI from 12 years ago. I thought that door was permanently closed. Global Pardon got my waiver approved in just over 5 months. I've since been to the US for work three times with zero issues. I cannot thank them enough.",
    },
    {
      initials: 'JT',
      name: 'James T.',
      type: 'Canadian Pardon',
      location: 'Vancouver, BC',
      rating: 5,
      text: "I had a drug charge from when I was 23. I'm 38 now and it was still blocking me from getting a security clearance at work. Global Pardon walked me through every single step. My pardon was approved and I got the promotion I'd been waiting for. Life-changing.",
    },
    {
      initials: 'DL',
      name: 'David L.',
      type: 'NEXUS Application',
      location: 'Calgary, AB',
      rating: 5,
      text: 'My NEXUS application had complications from an assault charge from years ago that I thought would disqualify me. The Global Pardon team knew exactly what documentation to include and how to frame the case. Approved on the first try.',
    },
    {
      initials: 'MC',
      name: 'Maria C.',
      type: 'Canadian Pardon',
      location: 'Ottawa, ON',
      rating: 5,
      text: "After 10 years with a record hanging over me, Global Pardon cleared it in about 8 months. Now I can finally volunteer at my kids' school and apply for the jobs I actually want. The team was compassionate, professional, and kept me informed throughout.",
    },
    {
      initials: 'RK',
      name: 'Robert K.',
      type: 'US Entry Waiver',
      location: 'Winnipeg, MB',
      rating: 5,
      text: "My employer needed me to travel to the US regularly. GlobalPardon handled my waiver with complete professionalism and got it done faster than I expected. I've now renewed it twice through them. Always smooth, always responsive.",
    },
    {
      initials: 'PS',
      name: 'Priya S.',
      type: 'Canadian Pardon',
      location: 'Mississauga, ON',
      rating: 5,
      text: "I was nervous about the whole process and didn't know where to start. The team at Global Pardon made it easy — clear communication, no surprises, and they handled everything. Can't thank them enough for giving me my life back.",
    },
    {
      initials: 'BN',
      name: 'Brian N.',
      type: 'US Entry Waiver',
      location: 'Halifax, NS',
      rating: 5,
      text: 'Had a fraud charge from 15 years ago. USCIS denied me twice before I found Global Pardon. They rebuilt my entire application, wrote a compelling personal statement, and it was approved. They know exactly what these agencies want to see.',
    },
    {
      initials: 'AL',
      name: 'Angela L.',
      type: 'NEXUS Application',
      location: 'Edmonton, AB',
      rating: 5,
      text: "I travel for work constantly and the border wait times were destroying my schedule. Global Pardon got me my NEXUS card despite a minor offence from my past. Now I'm through the border in under 10 minutes. Best investment I've made.",
    },
    {
      initials: 'TM',
      name: 'Thomas M.',
      type: 'Canadian Pardon',
      location: 'Montreal, QC',
      rating: 5,
      text: 'Bilingual service was important to me. They handled everything in French without any issues. The specialist assigned to my case was knowledgeable and responsive. My pardon came through in 7 months. Highly recommended.',
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Client Stories"
        title="Real Results for Real Canadians"
        subtitle="Over 5,000 people have trusted Global Pardon with their most sensitive cases. These are their stories."
      />

      {/* Stats */}
      <div
        style={{
          background: '#F7F6F2',
          padding: '40px 0',
          borderBottom: '1px solid #e5eaf0',
        }}
      >
        <div className="container">
          <div className="testimonial-stats">
            {[
              ['★ 4.9/5', '200+ Google Reviews'],
              ['98%', 'Client Satisfaction'],
              ['5,000+', 'Cases Completed'],
              ['A+', 'BBB Rating'],
            ].map(([val, label]) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontFamily: 'Playfair Display,serif',
                    fontSize: '2rem',
                    fontWeight: 700,
                    color: '#0B1F3A',
                  }}
                >
                  {val}
                </div>

                <div
                  style={{
                    fontSize: '0.8rem',
                    color: '#9ca3af',
                    marginTop: 3,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="testimonial-grid">
            {reviews.map((r) => (
              <div
                key={r.name}
                style={{
                  background: '#fff',
                  border: '1px solid #e5eaf0',
                  borderRadius: 10,
                  padding: '2rem',
                  position: 'relative',
                  boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '1.2rem',
                    right: '1.5rem',
                    fontFamily: 'Georgia,serif',
                    fontSize: '3.5rem',
                    color: '#f5dfa0',
                    lineHeight: 1,
                    userSelect: 'none',
                  }}
                >
                  "
                </div>

                <div
                  style={{
                    display: 'flex',
                    gap: 2,
                    marginBottom: '0.9rem',
                  }}
                >
                  {[...Array(r.rating)].map((_, i) => (
                    <StarSVG key={i} />
                  ))}
                </div>

                <p
                  style={{
                    fontSize: '0.91rem',
                    color: '#4b5563',
                    lineHeight: 1.8,
                    fontStyle: 'italic',
                    marginBottom: '1.5rem',
                  }}
                >
                  "{r.text}"
                </p>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    paddingTop: '1rem',
                    borderTop: '1px solid #f0f0f0',
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: '50%',
                      background: '#0B1F3A',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      color: '#E8C46A',
                      flexShrink: 0,
                    }}
                  >
                    {r.initials}
                  </div>

                  <div>
                    <div
                      style={{
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        color: '#0B1F3A',
                      }}
                    >
                      {r.name}
                    </div>

                    <div
                      style={{
                        fontSize: '0.74rem',
                        color: '#C9A84C',
                        fontWeight: 600,
                        marginTop: 1,
                      }}
                    >
                      {r.type}
                    </div>

                    <div
                      style={{
                        fontSize: '0.72rem',
                        color: '#9ca3af',
                        marginTop: 1,
                      }}
                    >
                      {r.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .testimonial-stats{
          display:flex;
          justify-content:center;
          gap:4rem;
          flex-wrap:wrap;
        }

        .testimonial-grid{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:1.5rem;
        }

        @media(max-width:992px){
          .testimonial-grid{
            grid-template-columns:1fr 1fr;
          }
        }

        @media(max-width:768px){
          .testimonial-grid{
            grid-template-columns:1fr;
          }

          .testimonial-stats{
            gap:2rem;
          }
        }
      `}</style>

      <CtaBanner />
    </>
  );
}

/* ══════════════════════════════════════
   FAQ PAGE
══════════════════════════════════════ */
export function FAQ() {
  const [open, setOpen] = useState(null);

  const categories = [
    {
      title: 'Canadian Pardons & Record Suspensions',
      items: [
        ['Am I eligible for a Canadian Pardon?', "If you've completed your sentence (including all fines, probation, and parole) and served the required waiting period — 5 years for summary offences, 10 years for indictable offences — you may be eligible. The best way to confirm is through our free eligibility assessment, which takes about 15 minutes."],
        ['What does a Record Suspension actually do?', "A Record Suspension instructs the RCMP to keep your criminal record separate from other criminal records. Employers, landlords, and routine background checks will no longer see your conviction. Your record isn't deleted, but it's effectively hidden from standard searches."],
        ['Are there any offences that cant be pardoned?', "Yes. Schedule 1 sexual offences involving minors, and convictions with 3 or more indictable offences each carrying a 2-year sentence, are not eligible. Our specialists will assess your specific history during the free consultation."],
        ['How long does the pardon process take?', "For summary offences: typically 6–12 months. For indictable offences: 12–18 months. Processing times depend on the Parole Board of Canada's current workload and the complexity of your file."],
        ['Can my record be seen after a pardon is granted?', "In rare cases, such as a new criminal offence or certain government employment roles, a sealed record can be accessed. For the vast majority of everyday situations — employment, travel, housing — the record will not appear."],
      ]
    },
    {
      title: 'US Entry Waivers',
      items: [
        ['What is a US Entry Waiver?', "A US Entry Waiver (Form I-192) is an official document issued by US Customs and Border Protection (CBP) that grants a Canadian with a criminal record permission to enter the United States despite being otherwise inadmissible. Without it, you can be turned away at any point of entry."],
        ['How long does a US Entry Waiver take?', "Processing typically takes 6–12 months from the date of submission, depending on your individual history and current USCIS processing times. Waivers are usually granted for 1 to 5 years and must be renewed before expiry."],
        ['Do I need a waiver for every type of entry to the US?', "Yes. A waiver covers land, air, and sea entry. Once approved, you can enter the US through any point of entry within the waiver's validity period. Always carry your waiver document when crossing."],
        ['What offences make me inadmissible to the US?', "Any criminal conviction — including DUI, assault, drug possession, theft, and fraud — can make you inadmissible. Even offences that are considered minor in Canada can trigger inadmissibility under US law. If in doubt, contact us for a free assessment."],
        ['Can I get a waiver if I have been denied entry before?', "Yes. A previous denial does not permanently close the door. In fact, many of our most successful applications are for clients who were previously denied on their own. Our specialists know exactly how to address prior denials in the application."],
      ]
    },
    {
      title: 'NEXUS Applications',
      items: [
        ['What is the NEXUS program?', "NEXUS is a joint Canada-US Trusted Traveller program that allows pre-approved, low-risk travellers to cross the border faster using dedicated lanes, automated kiosks at airports, and expedited processing at marine ports. The card is valid for 5 years."],
        ['Can I get NEXUS with a criminal record?', "It depends on the nature of your record. Minor or older offences may not be disqualifying. However, the application process is strict and any undisclosed history can lead to denial. Global Pardon & Waivers reviews your history upfront and advises on the best approach."],
        ['What happens at the NEXUS interview?', "You'll be interviewed separately by Canadian Border Services Agency (CBSA) and US Customs and Border Protection (CBP) officers. They ask about your travel history, criminal background, and reasons for applying. We prepare you thoroughly so there are no surprises."],
      ]
    },
    {
      title: 'Working With Global Pardon',
      items: [
        ['Do I need a lawyer?', "No. Lawyers are not required for pardon or waiver applications. Global Pardon's certified specialists handle thousands of these applications and consistently achieve exceptional approval rates at a fraction of legal costs."],
        ['Is my information kept confidential?', "Absolutely. We operate under strict privacy policies in full compliance with Canada's PIPEDA privacy legislation. All documents are encrypted in transit and storage, and your information is never shared with third parties."],
        ['What if my application is rejected?', "While rare with Global Pardon's preparation (98% approval rate), rejections do happen. We analyze the decision, identify the grounds, and work with you on a reapplication strategy. Many clients who were rejected elsewhere have been approved through Global Pardon."],
        ['Do you serve clients outside Ontario?', "Yes. We serve clients across all provinces and territories in Canada. Our process is fully remote — we handle everything electronically and by mail, so your location doesn't matter."],
      ]
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about pardons, US waivers, and NEXUS — answered clearly and honestly."
      />

      <section className="section">
        <div className="container faq-container">
          {categories.map((cat, ci) => (
            <div key={cat.title} style={{ marginBottom: '3rem' }}>
              <h2
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.4rem',
                  color: '#0B1F3A',
                  marginBottom: '1.5rem',
                  paddingBottom: '0.7rem',
                  borderBottom: '2px solid #C9A84C',
                  display: 'inline-block',
                }}
              >
                {cat.title}
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {cat.items.map(([q, a], i) => {
                  const key = `${ci}-${i}`;

                  return (
                    <div
                      key={key}
                      style={{
                        background: '#fff',
                        border: `1.5px solid ${open === key ? '#C9A84C' : '#e5eaf0'}`,
                        borderRadius: 10,
                        overflow: 'hidden',
                        transition: '0.3s ease',
                        boxShadow:
                          open === key
                            ? '0 10px 30px rgba(201,168,76,0.12)'
                            : '0 2px 10px rgba(0,0,0,0.04)',
                      }}
                    >
                      <button
                        onClick={() => setOpen(open === key ? null : key)}
                        style={{
                          width: '100%',
                          background: 'transparent',
                          border: 'none',
                          padding: '1.3rem 1.4rem',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          gap: '1rem',
                          cursor: 'pointer',
                          textAlign: 'left',
                        }}
                      >
                        <span
                          style={{
                            fontSize: '0.95rem',
                            fontWeight: 700,
                            color: '#0B1F3A',
                            lineHeight: 1.6,
                          }}
                        >
                          {q}
                        </span>

                        <span
                          style={{
                            minWidth: 30,
                            width: 30,
                            height: 30,
                            borderRadius: '50%',
                            background: open === key ? '#C9A84C' : '#F3F4F6',
                            color: open === key ? '#0B1F3A' : '#6b7280',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.3rem',
                            fontWeight: 300,
                            transition: '0.3s ease',
                            transform: open === key ? 'rotate(45deg)' : 'rotate(0deg)',
                            flexShrink: 0,
                          }}
                        >
                          +
                        </span>
                      </button>

                      {open === key && (
                        <div
                          style={{
                            padding: '0 1.4rem 1.4rem',
                            fontSize: '0.92rem',
                            color: '#6b7280',
                            lineHeight: 1.85,
                          }}
                        >
                          {a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* CTA */}
          <div
            style={{
              marginTop: '4rem',
              background: '#0B1F3A',
              borderRadius: 14,
              padding: '3rem 2rem',
              textAlign: 'center',
              boxShadow: '0 20px 50px rgba(11,31,58,0.18)',
            }}
          >
            <h3
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '2rem',
                color: '#fff',
                marginBottom: '1rem',
              }}
            >
              Still Have Questions?
            </h3>

            <p
              style={{
                color: 'rgba(255,255,255,0.7)',
                fontSize: '0.95rem',
                lineHeight: 1.8,
                maxWidth: 600,
                margin: '0 auto 2rem',
              }}
            >
              Our specialists answer calls and emails every business day. Book a free consultation and get answers specific to your case.
            </p>

            <div
              style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Link
                to="/apply"
                style={{
                  background: '#C9A84C',
                  color: '#0B1F3A',
                  padding: '14px 28px',
                  borderRadius: 6,
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                Book Free Consultation <ArrowRight />
              </Link>

              <a
                href="tel:18772266612"
                style={{
                  border: '1.5px solid rgba(255,255,255,0.25)',
                  color: '#fff',
                  padding: '14px 26px',
                  borderRadius: 6,
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                <PhoneSVG />
                1-877-226-6612
              </a>
            </div>
          </div>
        </div>

        <style>{`
          .faq-container{
            max-width:900px;
            margin:0 auto;
          }

          @media(max-width:768px){
            .faq-container{
              padding:0 1rem;
            }
          }
        `}</style>
      </section>

      <CtaBanner />
    </>
  
  );
}
