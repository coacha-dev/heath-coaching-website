export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(var(--dark-text))] mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-[hsl(var(--medium-text))]">
              Last updated: June 12, 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-[hsl(var(--dark-text))] mb-4">1. Information We Collect</h2>
                <p className="text-[hsl(var(--medium-text))] mb-4">
                  We collect information you provide directly to us, such as when you contact us, request information about our services, or participate in our training programs. This may include:
                </p>
                <ul className="list-disc pl-6 text-[hsl(var(--medium-text))] space-y-2">
                  <li>Name and contact information (email, phone number)</li>
                  <li>Company or organization details</li>
                  <li>Professional background and training interests</li>
                  <li>Communication preferences</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[hsl(var(--dark-text))] mb-4">2. How We Use Your Information</h2>
                <p className="text-[hsl(var(--medium-text))] mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 text-[hsl(var(--medium-text))] space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send you information about our programs and services</li>
                  <li>Customize training content to your needs</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[hsl(var(--dark-text))] mb-4">3. Information Sharing</h2>
                <p className="text-[hsl(var(--medium-text))] mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share information with:
                </p>
                <ul className="list-disc pl-6 text-[hsl(var(--medium-text))] space-y-2">
                  <li>Service providers who assist us in operating our business</li>
                  <li>Professional advisors (lawyers, accountants, etc.)</li>
                  <li>Authorities when required by law</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[hsl(var(--dark-text))] mb-4">4. Data Security</h2>
                <p className="text-[hsl(var(--medium-text))]">
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[hsl(var(--dark-text))] mb-4">5. Your Rights</h2>
                <p className="text-[hsl(var(--medium-text))] mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 text-[hsl(var(--medium-text))] space-y-2">
                  <li>Access and update your personal information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt out of marketing communications</li>
                  <li>Lodge a complaint with relevant authorities</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[hsl(var(--dark-text))] mb-4">6. Contact Us</h2>
                <p className="text-[hsl(var(--medium-text))]">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-[#faf8f5] rounded-lg">
                  <p className="text-[hsl(var(--medium-text))]">
                    <strong>Coacha</strong><br />
                    Email: luke@coacha.co<br />
                    Phone: +61 417 588 346
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}