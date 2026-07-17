import React from 'react';

const CancellationPolicyPage = () => {
  const lastUpdated = 'June 2025';

  const tiers = [
    {
      label: '7+ Days Before Check-in',
      color: '#0d7c3d',
      bg: '#f0fff6',
      border: '#0d7c3d',
      refund: 'Full Refund',
      desc: 'Cancel at least 7 days before your check-in date and receive a full refund of all amounts paid, excluding the non-refundable booking fee where applicable.'
    },
    {
      label: '3–6 Days Before Check-in',
      color: '#b45309',
      bg: '#fffbeb',
      border: '#f59e0b',
      refund: '50% Refund',
      desc: 'Cancellations made between 3 and 6 days prior to check-in will receive a 50% refund of the total booking amount paid. The remaining 50% will be retained as a cancellation fee.'
    },
    {
      label: 'Less Than 3 Days / No-Show',
      color: '#b91c1c',
      bg: '#fff5f5',
      border: '#ef4444',
      refund: 'No Refund',
      desc: 'Cancellations made less than 72 hours before check-in, or failure to arrive without prior notice, will result in no refund. The full booking amount will be retained.'
    }
  ];

  const sections = [
    {
      title: 'How to Cancel',
      content: `To cancel a booking, you must notify us in writing via email at a1furnished@gmail.com. Your cancellation request must include your full name, booking reference number, and the property address.

Cancellations made verbally over the phone are not accepted unless followed by written confirmation. The cancellation is effective from the date and time the written notice is received by A1 Furnished Homes Canada.`
    },
    {
      title: 'Security Deposit',
      content: `The security deposit is separate from the rental payment and is fully refundable, provided the property is returned in the same condition as at check-in, with no damages beyond normal wear and tear.

Security deposit refunds will be processed within 7–10 business days of checkout, following a property inspection. Any deductions for damages or unpaid charges will be itemized and communicated to the guest.`
    },
    {
      title: 'Early Departure',
      content: `If you choose to depart earlier than your confirmed checkout date, no refund will be issued for unused nights unless the early departure is due to a documented emergency or property condition issue reported to us during the stay.

We encourage guests to contact us immediately if there is any issue with the property. We will make every effort to resolve concerns promptly.`
    },
    {
      title: 'Booking Modifications',
      content: `Requests to modify a booking (change of dates, property, or duration) are subject to availability and must be submitted in writing. Modifications are not guaranteed and may be treated as a cancellation and rebooking, in which case the cancellation policy above will apply to the original booking.`
    },
    {
      title: 'Cancellations by A1 Furnished Homes',
      content: `In the rare event that A1 Furnished Homes Canada must cancel your confirmed booking due to circumstances beyond our control (such as property damage, emergency maintenance, or owner withdrawal), we will notify you as soon as possible and provide:

• A full refund of all amounts paid, or
• An alternative comparable property for the same dates, at our discretion

We will not be liable for any additional costs incurred as a result of such cancellation (e.g., travel or accommodation expenses), and our liability is limited to the refund of amounts paid to us.`
    },
    {
      title: 'Force Majeure',
      content: `A1 Furnished Homes Canada shall not be held liable for cancellations or disruptions caused by events outside of our reasonable control, including but not limited to natural disasters, government-imposed travel restrictions, pandemics, or other force majeure events.

In such circumstances, we will work with guests on a case-by-case basis to find a fair resolution, which may include rebooking credits or partial refunds.`
    },
    {
      title: 'Contact Us',
      content: `For cancellation requests or any questions about this policy, please contact us:

A1 Furnished Homes Canada
Email: a1furnished@gmail.com
Phone: +1 (416) 566-1102
Hours: Monday – Sunday, 8:00 AM – 9:00 PM EST`
    }
  ];

  return (
    <div>
      <div style={{ background: 'var(--navy)', padding: '60px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ color: 'white', fontFamily: 'Montserrat', fontSize: 'clamp(26px, 4vw, 40px)', marginBottom: '12px' }}>Cancellation Policy</h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '15px' }}>Last updated: {lastUpdated}</p>
        </div>
      </div>

      <div className="container" style={{ padding: '60px 24px', maxWidth: '860px' }}>

        <p style={{ color: 'var(--gray-dark)', lineHeight: 1.9, fontSize: '16px', marginBottom: '40px', padding: '20px 24px', background: 'var(--off-white)', borderRadius: 'var(--radius)', borderLeft: '4px solid var(--red)' }}>
          We understand that plans can change. Please review our cancellation policy carefully before confirming your booking. By completing a reservation, you agree to the terms outlined below.
        </p>

        {/* Refund Tiers */}
        <h2 style={{ fontFamily: 'Montserrat', fontSize: '20px', color: 'var(--navy)', marginBottom: '24px' }}>Refund Schedule</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '48px' }}>
          {tiers.map((tier, i) => (
            <div key={i} style={{ padding: '24px', background: tier.bg, border: `1px solid ${tier.border}`, borderLeft: `5px solid ${tier.border}`, borderRadius: 'var(--radius)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px', marginBottom: '10px' }}>
                <span style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: '15px', color: tier.color }}>{tier.label}</span>
                <span style={{ background: tier.color, color: 'white', padding: '4px 14px', borderRadius: '999px', fontSize: '13px', fontFamily: 'Montserrat', fontWeight: 700 }}>{tier.refund}</span>
              </div>
              <p style={{ color: 'var(--gray-dark)', fontSize: '14px', lineHeight: 1.8, margin: 0 }}>{tier.desc}</p>
            </div>
          ))}
        </div>

        {/* Policy Sections */}
        {sections.map((section, i) => (
          <div key={i} style={{ marginBottom: '36px' }}>
            <h2 style={{ fontFamily: 'Montserrat', fontSize: '18px', color: 'var(--navy)', marginBottom: '14px', paddingBottom: '10px', borderBottom: '1px solid var(--border)' }}>
              {section.title}
            </h2>
            <p style={{ color: 'var(--gray-dark)', lineHeight: 1.9, fontSize: '15px', whiteSpace: 'pre-line' }}>
              {section.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CancellationPolicyPage;