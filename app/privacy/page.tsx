import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | IA Token',
  description: 'Privacy Policy for IA Token community website and services.',
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background py-24 px-6 sm:px-8">
      <article className="max-w-3xl mx-auto prose prose-invert prose-purple">
        <h1 className="text-4xl font-black text-foreground mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last modified: December 10, 2025</p>

        <div className="space-y-8 text-muted-foreground">
          <section>
            <p>
              This Privacy Policy describes how IA Community (&ldquo;IA,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) collects, uses, shares, and protects information in connection with your use of our website and services (collectively, the &ldquo;Services&rdquo;).
            </p>
            <p>
              By using our Services, you consent to the collection, use, and disclosure of your information as described in this Privacy Policy. If you do not agree, please do not use our Services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">1. Information We Collect</h2>

            <h3 className="text-xl font-semibold text-foreground mt-6">1.1 Information You Provide Directly</h3>
            <p>
              We may collect information you voluntarily provide, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Wallet addresses you connect to our Services</li>
              <li>Communications you send to us (emails, messages, feedback)</li>
              <li>Information you provide through community channels (Discord, Telegram, Twitter)</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-6">1.2 Information Collected Automatically</h3>
            <p>
              When you use our Services, we may automatically collect:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Device information (browser type, operating system, device type)</li>
              <li>IP address and approximate geographic location</li>
              <li>Usage data (pages visited, time spent, clicks, scrolls)</li>
              <li>Referral source (how you arrived at our site)</li>
              <li>Date and time of access</li>
              <li>Language preferences</li>
              <li>Screen resolution and viewport size</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-6">1.3 Information from Third Parties</h3>
            <p>
              We may receive information about you from third parties, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Analytics providers</li>
              <li>Public blockchain data</li>
              <li>Social media platforms (if you interact with us there)</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-6">1.4 Blockchain Information</h3>
            <p className="font-semibold">
              IMPORTANT: Blockchain transactions are permanently public.
            </p>
            <p>
              When you interact with blockchain networks, your wallet address and all transaction history are publicly visible to anyone. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Token transfers and balances</li>
              <li>Smart contract interactions</li>
              <li>Transaction timestamps and amounts</li>
              <li>Associated wallet addresses</li>
            </ul>
            <p>
              We do not control blockchain data. This information is permanent and cannot be deleted or modified by anyone.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">2. How We Use Information</h2>
            <p>
              We may use collected information for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Providing, maintaining, and improving our Services</li>
              <li>Responding to your inquiries and communications</li>
              <li>Analyzing usage patterns to improve user experience</li>
              <li>Detecting, preventing, and addressing fraud, abuse, or security issues</li>
              <li>Complying with legal obligations and enforcing our terms</li>
              <li>Protecting the rights, property, or safety of IA Community and our users</li>
              <li>Communicating with you about updates or changes to our Services</li>
              <li>For any other purpose with your consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">3. Information Sharing</h2>
            <p className="font-semibold">
              We do not sell your personal information.
            </p>
            <p>
              We may share information in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Service Providers:</strong> With third-party vendors who assist in operating our Services (hosting, analytics, security)</li>
              <li><strong>Legal Requirements:</strong> When required by law, subpoena, court order, or government request</li>
              <li><strong>Safety and Rights:</strong> To protect the safety, rights, or property of IA Community, our users, or the public</li>
              <li><strong>Business Transfers:</strong> In connection with any merger, acquisition, or sale of assets</li>
              <li><strong>Aggregated Data:</strong> We may share aggregated, anonymized data that cannot identify individuals</li>
              <li><strong>With Your Consent:</strong> With other parties when you give us permission</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">4. Cookies and Tracking Technologies</h2>

            <h3 className="text-xl font-semibold text-foreground mt-6">4.1 Types of Cookies</h3>
            <p>
              We may use the following types of cookies and similar technologies:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Essential Cookies:</strong> Required for basic site functionality</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-6">4.2 Managing Cookies</h3>
            <p>
              You can control cookies through your browser settings. You may:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Block all cookies</li>
              <li>Delete existing cookies</li>
              <li>Allow only certain cookies</li>
              <li>Set preferences for specific websites</li>
            </ul>
            <p>
              Disabling cookies may affect your ability to use certain features of our Services.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6">4.3 Do Not Track</h3>
            <p>
              Some browsers offer a &ldquo;Do Not Track&rdquo; feature. Our Services do not currently respond to Do Not Track signals. However, you can use browser settings and third-party tools to limit tracking.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">5. Third-Party Services</h2>
            <p>
              Our Services may contain links to or integrate with third-party services, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cryptocurrency exchanges and DEXs</li>
              <li>Wallet providers</li>
              <li>Blockchain explorers (e.g., Basescan)</li>
              <li>Social media platforms</li>
              <li>Analytics services</li>
            </ul>
            <p>
              These third parties have their own privacy policies. We are not responsible for their privacy practices. We encourage you to review their policies before using their services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">6. Data Security</h2>
            <p>
              We implement reasonable administrative, technical, and physical security measures to protect information. These include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Encryption of data in transit (HTTPS/TLS)</li>
              <li>Regular security assessments</li>
              <li>Access controls and authentication</li>
              <li>Secure hosting infrastructure</li>
            </ul>
            <p>
              However, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security. You use our Services at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">7. Data Retention</h2>
            <p>
              We retain information for as long as necessary to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide our Services</li>
              <li>Comply with legal obligations</li>
              <li>Resolve disputes</li>
              <li>Enforce our agreements</li>
            </ul>
            <p className="font-semibold">
              Blockchain data is permanent and cannot be deleted by anyone, including us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">8. Your Rights and Choices</h2>
            <p>
              Depending on your jurisdiction, you may have certain rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Access:</strong> Request access to your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your information</li>
              <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
              <li><strong>Opt-Out:</strong> Opt out of certain data processing activities</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent where processing is based on consent</li>
            </ul>
            <p>
              To exercise these rights, please contact us through our community channels.
            </p>
            <p className="font-semibold">
              Note: We cannot modify or delete blockchain data. These rights apply only to information we control.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">9. California Privacy Rights (CCPA)</h2>
            <p>
              If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Right to know what personal information we collect and how it is used</li>
              <li>Right to delete personal information (with certain exceptions)</li>
              <li>Right to opt out of the sale of personal information (we do not sell personal information)</li>
              <li>Right to non-discrimination for exercising your rights</li>
            </ul>
            <p>
              To submit a request, please contact us through our community channels.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">10. European Privacy Rights (GDPR)</h2>
            <p>
              If you are located in the European Economic Area (EEA), United Kingdom, or Switzerland, you have additional rights under the General Data Protection Regulation (GDPR):
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Right of access to your personal data</li>
              <li>Right to rectification of inaccurate data</li>
              <li>Right to erasure (&ldquo;right to be forgotten&rdquo;)</li>
              <li>Right to restrict processing</li>
              <li>Right to data portability</li>
              <li>Right to object to processing</li>
              <li>Rights related to automated decision-making</li>
            </ul>
            <p>
              Our legal bases for processing include: consent, performance of a contract, legitimate interests, and compliance with legal obligations.
            </p>
            <p>
              You also have the right to lodge a complaint with your local data protection authority.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">11. International Data Transfers</h2>
            <p>
              Our Services are operated from the United States. If you access our Services from outside the United States, your information may be transferred to, stored, and processed in the United States or other jurisdictions where our service providers operate.
            </p>
            <p>
              These jurisdictions may have different privacy laws than your home jurisdiction. By using our Services, you consent to such transfers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">12. Children&apos;s Privacy</h2>
            <p>
              Our Services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18.
            </p>
            <p>
              If we learn that we have collected information from a child under 18, we will take steps to delete it as soon as possible. If you believe we have collected information from a child, please contact us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">13. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. If we make material changes, we will update the &ldquo;Last modified&rdquo; date at the top of this page.
            </p>
            <p>
              We encourage you to review this policy periodically. Your continued use of our Services after any changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">14. Contact</h2>
            <p>
              For questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please reach out through our official community channels.
            </p>
          </section>

          <section className="p-6 bg-muted/20 border border-border/30 rounded-xl">
            <p className="text-sm">
              BY USING OUR SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO THIS PRIVACY POLICY.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
