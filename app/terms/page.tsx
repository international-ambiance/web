import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | IA Token',
  description: 'Terms of Service for IA Token community website and services.',
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-background py-24 px-6 sm:px-8">
      <article className="max-w-3xl mx-auto prose prose-invert prose-purple">
        <h1 className="text-4xl font-black text-foreground mb-2">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last modified: December 10, 2025</p>

        <div className="space-y-8 text-muted-foreground">
          <section>
            <p>
              These Terms of Service (the &ldquo;Agreement&rdquo;) explain the terms and conditions by which you may access and use the products and services provided by IA Community (&ldquo;IA,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). This includes our website located at iatoken.org (the &ldquo;Site&rdquo;) and any related services (collectively, the &ldquo;Services&rdquo;).
            </p>
            <p>
              By accessing or using any of our Services, you signify that you have read, understand, and agree to be bound by this Agreement in its entirety. If you do not agree, you are not authorized to access or use our Services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">1. Important Disclaimers</h2>

            <h3 className="text-xl font-semibold text-foreground mt-6">1.1 Not an Investment</h3>
            <p>
              IA TOKEN IS A COMMUNITY MEMBERSHIP TOKEN. IT IS NOT AN INVESTMENT. THERE IS NO EXPECTATION OF PROFIT OR FINANCIAL RETURN. YOU SHOULD ASSUME THAT ANY FUNDS USED TO ACQUIRE IA TOKENS MAY BE LOST ENTIRELY.
            </p>
            <p>
              We make no promises, guarantees, or representations regarding the value, utility, or future performance of IA tokens. The token exists solely for community membership and governance participation purposes.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6">1.2 No Promises or Guarantees</h3>
            <p>
              We make absolutely no promises regarding:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Token value or price</li>
              <li>Future utility or features</li>
              <li>Partnerships or collaborations</li>
              <li>Access to events, festivals, or experiences</li>
              <li>Returns of any kind</li>
              <li>The continued operation of any services</li>
              <li>Any roadmap items or planned features</li>
            </ul>
            <p>
              Any roadmap, plans, or aspirational statements on our Site or in our materials are purely hypothetical and subject to change or cancellation at any time without notice.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6">1.3 Not Financial Advice</h3>
            <p>
              Nothing on our Site or in our communications constitutes financial, investment, legal, or tax advice. We are not financial advisors. You should consult with qualified professionals before making any decisions related to digital assets.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">2. Eligibility</h2>
            <p>
              To access or use our Services, you must be at least the age of majority in your jurisdiction (e.g., 18 years old in the United States) and have the legal capacity to enter into this Agreement.
            </p>
            <p>
              You represent that you are not:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Subject to economic or trade sanctions administered by any governmental authority</li>
              <li>On any list of prohibited or restricted parties</li>
              <li>A citizen or resident of a jurisdiction where use of our Services would be illegal</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">3. The IA Token</h2>

            <h3 className="text-xl font-semibold text-foreground mt-6">3.1 Community Token</h3>
            <p>
              IA is a community membership token deployed on blockchain networks. It is designed solely for community participation and governance. We do not control the blockchain networks on which IA operates.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6">3.2 No Control Over Blockchain</h3>
            <p>
              Blockchain transactions are irreversible. We have no ability to reverse, cancel, or modify any blockchain transaction. We are not responsible for any errors, including sending tokens to incorrect addresses.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6">3.3 Self-Custody</h3>
            <p>
              You are solely responsible for the security of your wallet and private keys. We never have custody or control of your tokens. If you lose access to your wallet, we cannot recover your tokens.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">4. Assumption of Risk</h2>
            <p>
              BY USING OUR SERVICES OR ACQUIRING IA TOKENS, YOU ACKNOWLEDGE AND ACCEPT THE FOLLOWING RISKS:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Digital asset markets are highly volatile and speculative</li>
              <li>You may lose all value associated with your tokens</li>
              <li>Smart contracts may contain bugs or vulnerabilities</li>
              <li>Regulatory changes may affect the legality or utility of tokens</li>
              <li>The project may fail or be abandoned</li>
              <li>There is no guarantee of any utility, access, or benefits</li>
              <li>Third-party services (exchanges, wallets, bridges) may fail</li>
            </ul>
            <p>
              YOU ASSUME FULL RESPONSIBILITY FOR ALL RISKS ASSOCIATED WITH USING OUR SERVICES AND HOLDING IA TOKENS.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">5. Prohibited Activities</h2>
            <p>
              You agree not to engage in:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Any illegal activity</li>
              <li>Market manipulation</li>
              <li>Fraud or misrepresentation</li>
              <li>Intellectual property infringement</li>
              <li>Attempting to interfere with or compromise our Services</li>
              <li>Using our Services in any jurisdiction where prohibited</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">6. No Warranties</h2>
            <p>
              OUR SERVICES ARE PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p>
              We do not warrant that our Services will be uninterrupted, error-free, or secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">7. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, IA COMMUNITY AND ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR TOKENS, ARISING FROM YOUR USE OF OUR SERVICES.
            </p>
            <p>
              IN NO EVENT SHALL OUR TOTAL LIABILITY EXCEED ONE HUNDRED U.S. DOLLARS ($100.00 USD).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">8. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless IA Community and its affiliates from any claims, damages, or expenses arising from your use of our Services or violation of this Agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">9. Modifications</h2>
            <p>
              We may modify this Agreement at any time. Changes are effective upon posting. Your continued use of our Services constitutes acceptance of the modified terms.
            </p>
            <p>
              We may also modify, suspend, or discontinue any aspect of our Services at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">10. Governing Law</h2>
            <p>
              This Agreement shall be governed by the laws of the State of Delaware, United States, without regard to conflict of law principles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">11. Dispute Resolution</h2>
            <p>
              Any disputes arising from this Agreement or your use of our Services shall be resolved through binding arbitration. You waive any right to participate in class action lawsuits or class-wide arbitration.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">12. Severability</h2>
            <p>
              If any provision of this Agreement is found to be unenforceable, the remaining provisions shall continue in effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">13. Contact</h2>
            <p>
              For questions about these Terms, please reach out through our community channels.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
