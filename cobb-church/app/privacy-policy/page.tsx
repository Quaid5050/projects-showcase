'use client';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-dark-blue mb-8">
          Privacy Policy
        </h1>
        
        <div className="prose prose-lg max-w-none text-medium-gray space-y-6">
          <p>
            Last Updated: April 27, 2026
          </p>

          <section>
            <h2 className="text-2xl font-display font-semibold text-dark-blue mb-4">1. Introduction</h2>
            <p>
              The Cobb Church Network (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates the cobbchurchnetwork.org website (the &quot;Service&quot;).
            </p>
            <p>
              This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-dark-blue mb-4">2. Information Collection and Use</h2>
            <p>
              We collect several different types of information for various purposes to provide and improve our Service to you.
            </p>
            
            <h3 className="text-xl font-semibold text-dark-blue mt-6 mb-2">Types of Data Collected:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Personal Data: Name, email address, phone number, church affiliation, postal address</li>
              <li>Usage Data: Browser type, IP address, pages visited, time spent on pages</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-dark-blue mb-4">3. Use of Data</h2>
            <p>
              The Cobb Church Network uses the collected data for various purposes:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>To provide and maintain our Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To allow you to participate in interactive features</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information for improvement</li>
              <li>To monitor the usage of our Service</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-dark-blue mb-4">4. Security of Data</h2>
            <p>
              The security of your data is important to us, but remember that no method of transmission over the Internet is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-dark-blue mb-4">5. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p>
              Email: info@cobbchurchnetwork.org<br/>
              Phone: (678) 777-1234
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
