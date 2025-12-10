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
              This Privacy Policy describes how IA Community (&ldquo;IA,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) collects, uses, and shares information in connection with your use of our website and services (collectively, the &ldquo;Services&rdquo;).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">1. Information We Collect</h2>

            <h3 className="text-xl font-semibold text-foreground mt-6">1.1 Information You Provide</h3>
            <p>
              We may collect information you voluntarily provide, such as:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Wallet addresses you connect to our Services</li>
              <li>Communications you send to us</li>
              <li>Information you provide through community channels</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-6">1.2 Automatically Collected Information</h3>
            <p>
              When you use our Services, we may automatically collect:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Device information (browser type, operating system)</li>
              <li>IP address</li>
              <li>Usage data (pages visited, time spent)</li>
              <li>Referral sources</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-6">1.3 Blockchain Information</h3>
            <p>
              Blockchain transactions are public. When you interact with blockchain networks, your wallet address and transaction history are publicly visible. We do not control this information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">2. How We Use Information</h2>
            <p>
              We may use collected information to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and improve our Services</li>
              <li>Communicate with you about our Services</li>
              <li>Analyze usage patterns</li>
              <li>Detect and prevent fraud or abuse</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">3. Information Sharing</h2>
            <p>
              We do not sell your personal information. We may share information with:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Service providers who assist in operating our Services</li>
              <li>Law enforcement when required by law</li>
              <li>Other parties with your consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">4. Third-Party Services</h2>
            <p>
              Our Services may contain links to third-party websites or integrate with third-party services (such as wallet providers, exchanges, or blockchain explorers). We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">5. Cookies and Tracking</h2>
            <p>
              We may use cookies and similar technologies to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Remember your preferences</li>
              <li>Analyze site traffic</li>
              <li>Improve user experience</li>
            </ul>
            <p>
              You can control cookies through your browser settings. Disabling cookies may affect your ability to use certain features of our Services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">6. Data Security</h2>
            <p>
              We implement reasonable security measures to protect information. However, no method of transmission over the internet or electronic storage is completely secure. We cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">7. Data Retention</h2>
            <p>
              We retain information for as long as necessary to provide our Services and comply with legal obligations. Blockchain data is permanent and cannot be deleted.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">8. Your Rights</h2>
            <p>
              Depending on your jurisdiction, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access to your information</li>
              <li>Correction of inaccurate information</li>
              <li>Deletion of your information</li>
              <li>Opt-out of certain data processing</li>
            </ul>
            <p>
              Please note that blockchain data cannot be modified or deleted due to the nature of distributed ledger technology.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">9. International Users</h2>
            <p>
              Our Services are operated from the United States. If you access our Services from outside the United States, your information may be transferred to and processed in the United States or other jurisdictions with different privacy laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">10. Children&apos;s Privacy</h2>
            <p>
              Our Services are not intended for individuals under the age of 18. We do not knowingly collect information from children. If we learn that we have collected information from a child, we will take steps to delete it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">11. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes are effective upon posting. We encourage you to review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">12. Contact</h2>
            <p>
              For questions about this Privacy Policy, please reach out through our community channels.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
