export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(var(--dark-text))] mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-[hsl(var(--medium-text))]">
              Last updated: June 12, 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-[hsl(var(--dark-text))] mb-4">1. Acceptance of Terms</h2>
                <p className="text-[hsl(var(--medium-text))]">
                  By accessing and using Coacha's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[hsl(var(--dark-text))] mb-4">2. Services Provided</h2>
                <p className="text-[hsl(var(--medium-text))] mb-4">
                  Coacha provides professional training and coaching services including:
                </p>
                <ul className="list-disc pl-6 text-[hsl(var(--medium-text))] space-y-2">
                  <li>Leadership development programs</li>
                  <li>Career coaching and development</li>
                  <li>Sales training and workshops</li>
                  <li>Executive coaching services</li>
                  <li>Organizational consulting</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[hsl(var(--dark-text))] mb-4">3. Client Responsibilities</h2>
                <p className="text-[hsl(var(--medium-text))] mb-4">
                  As a client, you agree to:
                </p>
                <ul className="list-disc pl-6 text-[hsl(var(--medium-text))] space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Participate actively in training sessions</li>
                  <li>Respect confidentiality of other participants</li>
                  <li>Pay fees according to agreed terms</li>
                  <li>Provide timely notice for cancellations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[hsl(var(--dark-text))] mb-4">4. Intellectual Property</h2>
                <p className="text-[hsl(var(--medium-text))]">
                  All content, materials, and intellectual property provided by Coacha remain the exclusive property of Coacha. Clients may not reproduce, distribute, or commercially use our materials without written permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[hsl(var(--dark-text))] mb-4">5. Confidentiality</h2>
                <p className="text-[hsl(var(--medium-text))]">
                  Coacha maintains strict confidentiality regarding all client information and coaching conversations. Clients also agree to maintain confidentiality regarding other participants and proprietary methodologies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[hsl(var(--dark-text))] mb-4">6. Cancellation and Refunds</h2>
                <p className="text-[hsl(var(--medium-text))] mb-4">
                  Cancellation policies vary by service type:
                </p>
                <ul className="list-disc pl-6 text-[hsl(var(--medium-text))] space-y-2">
                  <li>Individual coaching: 24 hours notice required</li>
                  <li>Group workshops: 48 hours notice required</li>
                  <li>Corporate programs: Terms specified in contract</li>
                  <li>Refunds considered on case-by-case basis</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[hsl(var(--dark-text))] mb-4">7. Limitation of Liability</h2>
                <p className="text-[hsl(var(--medium-text))]">
                  Coacha's liability is limited to the fees paid for services. We are not liable for indirect, incidental, or consequential damages. Our coaching and training services are professional development tools and do not guarantee specific outcomes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[hsl(var(--dark-text))] mb-4">8. Governing Law</h2>
                <p className="text-[hsl(var(--medium-text))]">
                  These terms are governed by Australian law. Any disputes will be resolved through appropriate Australian courts or alternative dispute resolution mechanisms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[hsl(var(--dark-text))] mb-4">9. Contact Information</h2>
                <p className="text-[hsl(var(--medium-text))]">
                  For questions about these Terms of Service, contact us at:
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