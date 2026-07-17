import React from 'react';

const TermsOfServicePage = () => {
  const lastUpdated = 'June 2025';

  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: `By accessing or using the A1 Furnished Homes Canada website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.

These terms apply to all visitors, users, and others who access or use our services, including those who submit inquiries, make bookings, or enter into rental agreements through our platform.`
    },
    {
      title: '2. Services Provided',
      content: `A1 Furnished Homes Canada provides short-term and extended-stay furnished rental accommodation across the Greater Toronto Area and select locations in Ontario, Canada. Our services include:

• Listing and marketing of furnished rental properties
• Processing of rental inquiries and booking requests
• Facilitating communication between guests and property management
• Providing customer support throughout the duration of a stay

We act as a rental management company and, in some cases, as an agent on behalf of property owners.`
    },
    {
      title: '3. Booking and Reservations',
      content: `All bookings are subject to availability and confirmation. Submitting a booking request does not guarantee a reservation. A booking is confirmed only upon receipt of written confirmation from A1 Furnished Homes Canada and receipt of any required deposit or payment.

You agree to provide accurate, current, and complete information when making a booking. Any misrepresentation may result in cancellation of your booking without refund.

Minimum stay requirements may apply depending on the property and season.`
    },
    {
      title: '4. Payment Terms',
      content: `Payment terms will be specified at the time of booking confirmation and may include:

• A security deposit (refundable, subject to property condition upon checkout)
• First and last month's rent, or a specified advance payment
• A cleaning fee where applicable

Payments are due as specified in your booking confirmation. Late payments may result in cancellation of your reservation. All pricing is listed in Canadian Dollars (CAD) unless otherwise stated.`
    },
    {
      title: '5. Guest Responsibilities',
      content: `As a guest, you agree to:

• Use the property solely for residential purposes and not for commercial, illegal, or disruptive activities
• Comply with all house rules provided at or before check-in
• Respect neighbouring residents and maintain reasonable noise levels
• Not sublet or assign the property to any other party
• Report any damages or maintenance issues promptly
• Vacate the property by the agreed checkout time

You are responsible for any damage to the property caused by you or your guests beyond normal wear and tear. Repair costs will be deducted from the security deposit and any remaining costs invoiced accordingly.`
    },
    {
      title: '6. Check-in and Check-out',
      content: `Standard check-in time is 3:00 PM and check-out time is 11:00 AM, unless otherwise agreed in writing. Early check-in or late check-out may be arranged subject to availability and may incur additional charges.

Failure to vacate by the agreed checkout time may result in additional fees equivalent to one additional night's rate.`
    },
    {
      title: '7. Limitation of Liability',
      content: `To the fullest extent permitted by applicable law, A1 Furnished Homes Canada shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services or your stay at a property.

Our total liability to you for any claim arising under these Terms shall not exceed the total amount paid by you for the booking in question.

We are not responsible for loss or theft of personal belongings during your stay. Guests are encouraged to carry appropriate travel or tenant insurance.`
    },
    {
      title: '8. Intellectual Property',
      content: `All content on this website, including text, images, logos, graphics, and design, is the property of A1 Furnished Homes Canada or its content suppliers and is protected by applicable copyright and intellectual property laws.

You may not reproduce, distribute, or create derivative works from any content on this website without our prior written consent.`
    },
    {
      title: '9. Prohibited Conduct',
      content: `You agree not to:

• Use our services for any unlawful purpose or in violation of any applicable law
• Provide false or misleading information in any booking or inquiry
• Attempt to gain unauthorized access to any part of our systems
• Engage in any conduct that could damage or impair our website or services
• Use the property for events, parties, or gatherings beyond the stated occupancy limit`
    },
    {
      title: '10. Governing Law',
      content: `These Terms of Service shall be governed by and construed in accordance with the laws of the Province of Ontario and the federal laws of Canada applicable therein. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Ontario.`
    },
    {
      title: '11. Modifications',
      content: `We reserve the right to modify these Terms of Service at any time. Updated terms will be posted on this page with a revised effective date. Your continued use of our services after any changes constitutes acceptance of the new terms.`
    },
    {
      title: '12. Contact Us',
      content: `For questions regarding these Terms of Service, please contact:

A1 Furnished Homes Canada
Email: a1furnished@gmail.com
Phone: +1 (416) 566-1102
Service Area: Greater Toronto Area, Ontario, Canada`
    }
  ];

  return (
    <div>
      <div style={{ background: 'var(--navy)', padding: '60px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ color: 'white', fontFamily: 'Montserrat', fontSize: 'clamp(26px, 4vw, 40px)', marginBottom: '12px' }}>Terms of Service</h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '15px' }}>Last updated: {lastUpdated}</p>
        </div>
      </div>

      <div className="container" style={{ padding: '60px 24px', maxWidth: '860px' }}>
        <p style={{ color: 'var(--gray-dark)', lineHeight: 1.9, fontSize: '16px', marginBottom: '40px', padding: '20px 24px', background: 'var(--off-white)', borderRadius: 'var(--radius)', borderLeft: '4px solid var(--red)' }}>
          Please read these Terms of Service carefully before using our website or booking any property through A1 Furnished Homes Canada. These terms constitute a legally binding agreement between you and A1 Furnished Homes Canada.
        </p>

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

export default TermsOfServicePage;