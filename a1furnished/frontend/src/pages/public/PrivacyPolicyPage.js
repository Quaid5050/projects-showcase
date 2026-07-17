import React from 'react';

const PrivacyPolicyPage = () => {
  const lastUpdated = 'June 2025';

  const sections = [
    {
      title: '1. Information We Collect',
      content: `We collect information you provide directly to us when you:
      
• Submit an inquiry or contact form on our website
• Make a booking or reservation request
• Create an account or register as a user
• Communicate with us via phone, email, or messaging

The types of personal information we may collect include: full name, email address, phone number, mailing address, payment information (processed securely via third-party providers), identification documents where required for tenancy, and any other information you choose to provide.

We also automatically collect certain technical information when you visit our website, including IP address, browser type, pages visited, and time spent on pages.`
    },
    {
      title: '2. How We Use Your Information',
      content: `We use the information we collect to:

• Process and manage your booking or rental inquiry
• Communicate with you about your stay, including confirmation emails and updates
• Send administrative messages and respond to your inquiries
• Improve our website and services
• Comply with legal obligations
• Prevent fraud and ensure the security of our platform

We do not sell, trade, or rent your personal information to third parties for their marketing purposes.`
    },
    {
      title: '3. Information Sharing',
      content: `We may share your personal information with:

• Property managers or landlords, solely for the purpose of facilitating your booking
• Payment processors to complete financial transactions securely
• Service providers who assist us in operating our website and conducting our business (e.g., email platforms, analytics)
• Law enforcement or government authorities when required by law

All third parties we work with are required to maintain the confidentiality of your information and are prohibited from using it for any other purpose.`
    },
    {
      title: '4. Data Security',
      content: `We implement reasonable administrative, technical, and physical security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.

However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your personal data, we cannot guarantee absolute security. If you have reason to believe that your interaction with us is no longer secure, please contact us immediately.`
    },
    {
      title: '5. Cookies',
      content: `Our website may use cookies and similar tracking technologies to enhance your experience. Cookies are small data files stored on your device that help us understand how you use our site.

You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, some portions of our website may not function properly.`
    },
    {
      title: '6. Your Rights',
      content: `You have the right to:

• Access the personal information we hold about you
• Request correction of inaccurate or incomplete information
• Request deletion of your personal information, subject to legal requirements
• Withdraw consent where processing is based on consent
• Lodge a complaint with a relevant data protection authority

To exercise any of these rights, please contact us using the details provided below.`
    },
    {
      title: '7. Retention of Data',
      content: `We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, or as required by law. Booking and tenancy records may be retained for a minimum of 7 years for legal and accounting purposes.`
    },
    {
      title: '8. Third-Party Links',
      content: `Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any third-party sites you visit.`
    },
    {
      title: '9. Children\'s Privacy',
      content: `Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from minors. If you believe we have inadvertently collected such information, please contact us and we will take steps to delete it.`
    },
    {
      title: '10. Changes to This Policy',
      content: `We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on this page with an updated date. Your continued use of our website after any changes constitutes your acceptance of the updated policy.`
    },
    {
      title: '11. Contact Us',
      content: `If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at:

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
          <h1 style={{ color: 'white', fontFamily: 'Montserrat', fontSize: 'clamp(26px, 4vw, 40px)', marginBottom: '12px' }}>Privacy Policy</h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '15px' }}>Last updated: {lastUpdated}</p>
        </div>
      </div>

      <div className="container" style={{ padding: '60px 24px', maxWidth: '860px' }}>
        <p style={{ color: 'var(--gray-dark)', lineHeight: 1.9, fontSize: '16px', marginBottom: '40px', padding: '20px 24px', background: 'var(--off-white)', borderRadius: 'var(--radius)', borderLeft: '4px solid var(--red)' }}>
          A1 Furnished Homes Canada ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website or use our services.
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

export default PrivacyPolicyPage;