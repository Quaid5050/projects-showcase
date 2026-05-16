export const metadata = {
  title: 'Terms of Service | Cobb Church Network',
  description: 'Read the terms of service for using the Cobb Church Network platform and services.',
};

export default function TermsOfServicePage() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-dark-text mb-4">
            Terms of Service
          </h1>
          <p className="text-medium-gray text-lg">
            Last updated: January 2024
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-medium-gray leading-relaxed">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-dark-text mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using the Cobb Church Network website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-dark-text mb-4">
              2. Use License
            </h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on Cobb Church Network for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Modifying or copying the materials</li>
              <li>Using the materials for any commercial purpose or for any public display</li>
              <li>Attempting to decompile or reverse engineer any software contained on the site</li>
              <li>Removing any copyright or other proprietary notations from the materials</li>
              <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-dark-text mb-4">
              3. Disclaimer
            </h2>
            <p>
              The materials on Cobb Church Network are provided on an &apos;as is&apos; basis. Cobb Church Network makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-dark-text mb-4">
              4. Limitations
            </h2>
            <p>
              In no event shall Cobb Church Network or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Cobb Church Network, even if Cobb Church Network or an authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-dark-text mb-4">
              5. Accuracy of Materials
            </h2>
            <p>
              The materials appearing on Cobb Church Network could include technical, typographical, or photographic errors. Cobb Church Network does not warrant that any of the materials on the site are accurate, complete, or current. Cobb Church Network may make changes to the materials contained on the site at any time without notice.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-dark-text mb-4">
              6. Links
            </h2>
            <p>
              Cobb Church Network has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Cobb Church Network of the site. Use of any such linked website is at the user&apos;s own risk.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-dark-text mb-4">
              7. Modifications
            </h2>
            <p>
              Cobb Church Network may revise these terms of service for the website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-bold text-dark-text mb-4">
              8. Governing Law
            </h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of Georgia, United States, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          {/* Contact */}
          <section className="mt-12 pt-8 border-t border-border-gray">
            <h2 className="text-2xl font-bold text-dark-text mb-4">
              Questions?
            </h2>
            <p>
              If you have questions about these Terms of Service, please contact us at:
            </p>
            <div className="mt-4">
              <p className="font-semibold text-dark-text">Cobb Church Network</p>
              <p>Email: info@cobbchurchnetwork.org</p>
              <p>Phone: (678) 777-1234</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
