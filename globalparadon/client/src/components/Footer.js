import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <div style={{ background: '#C9A84C', height: 3 }}></div>

      <footer style={{ background: '#080f1e', color: 'rgba(255,255,255,0.65)', paddingTop: 50 }}>
        
        {/* GRID */}
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '0 2rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '2rem',
            paddingBottom: '2.5rem'
          }}
        >
          {/* Column 1 */}
          <div>
            <div style={{ color: '#fff', fontFamily: 'Playfair Display,serif', fontSize: '1.1rem', fontWeight: 700, marginBottom: 10 }}>
              Global Pardon  Pardons & Waivers
            </div>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.5)' }}>
             Helping Canadians move forward with confidence since 2010. Trusted by over 5,000 clients across the country.
            </p>
            <div style={{ marginTop: 14, fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)' }}>
              📞 1877 226-6612 &nbsp;|&nbsp; 647 699-8141
            </div>
          </div>

         {/* Column 2 */}
<div>
  <h4
    style={{
      color: '#fff',
      fontSize: '0.78rem',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '2px',
      marginBottom: 14
    }}
  >
    Services
  </h4>

  {[
    { name: 'Canadian Pardon', id: 'canadian-pardon' },
    { name: 'US Entry Waiver', id: 'us-entry-waiver' },
    { name: 'NEXUS Application', id: 'nexus-application' },
  ].map((s) => (
    <a
      key={s.name}
      href={`/services#${s.id}`}
      style={{
        display: 'block',
        color: 'rgba(255,255,255,0.5)',
        fontSize: '0.85rem',
        marginBottom: 8,
        textDecoration: 'none'
      }}
    >
      {s.name}
    </a>
  ))}
</div>

          {/* Column 3 */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: 14 }}>
              Company
            </h4>
            {[
              ['About Us', '/about'],
              ['Reviews', '/testimonials'],
              ['FAQ', '/faq'],
              ['Contact', '/apply']
            ].map(([l, p]) => (
              <Link
                key={p}
                to={p}
                style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', marginBottom: 8 }}
              >
                {l}
              </Link>
            ))}
          </div>

          {/* Column 4 */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: 14 }}>
              Contact
            </h4>
            <p style={{ fontSize: '0.82rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.5)' }}>
              77 City Centre Dr<br />
              Mississauga, ON L5B 1M2<br /><br />
              info@globalpardon.com<br />
              Monday - Friday: 9:00 AM - 5:00 PM<br/>
              Saturday - Sunday: Closed
            </p>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.08)',
            padding: '1.2rem 2rem',
            maxWidth: 1200,
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '10px',
            fontSize: '0.78rem',
            color: 'rgba(255,255,255,0.35)'
          }}
        >
          <span>© 2026 Global Pardons &  Waivers. All rights reserved.</span>
          <span>Mississauga, Ontario, Canada</span>
        </div>
      </footer>
    </>
  );
}