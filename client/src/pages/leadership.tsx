import { Button } from "@/components/ui/button";
import { useState } from "react";
import ContactDialog from "@/components/contact-dialog";

export default function Leadership() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#faf8f5] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[hsl(var(--dark-text))] mb-8">
              <span className="colored-underline-purple">Triple Intelligence Leadership</span>
            </h1>
            <p className="text-lg md:text-xl text-[hsl(var(--medium-text))] max-w-3xl mx-auto mb-12">
              Grow exceptional leaders with science-backed development that integrates cognitive, emotional, and social intelligence for transformational leadership impact.
            </p>
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Triple Intelligence Leadership Workshop */}
            <div className="text-center">
              <div className="bg-[#7030a0] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[hsl(var(--dark-text))] mb-4">Triple Intelligence Leadership Workshop</h3>
              <p className="text-[hsl(var(--medium-text))] mb-6">
                Comprehensive leadership development program that builds cognitive intelligence (analytical thinking), 
                emotional intelligence (self-awareness and empathy), and social intelligence (relationship management 
                and influence). Participants develop integrated leadership capabilities for complex organizational challenges.
              </p>
              <p className="text-[hsl(var(--medium-text))] text-sm">
                3-day intensive program with ongoing coaching sessions. Includes 360-degree feedback, leadership toolkit, 
                and access to exclusive leadership resources and peer network.
              </p>
            </div>

            {/* Triple Intelligence Leadership Assessment */}
            <div className="text-center">
              <div className="bg-[#7030a0] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[hsl(var(--dark-text))] mb-4">Triple Intelligence Leadership Assessment</h3>
              <p className="text-[hsl(var(--medium-text))] mb-6">
                Multi-dimensional leadership assessment measuring cognitive processing, emotional regulation, 
                and social effectiveness. Provides detailed insights into leadership strengths, blind spots, 
                and development priorities across all three intelligence domains.
              </p>
              <p className="text-[hsl(var(--medium-text))] text-sm">
                Comprehensive assessment with detailed 30-page leadership profile, benchmarking against high-performing 
                leaders, and personalized development roadmap with coaching recommendations.
              </p>
            </div>

            {/* LeaderCoacha Newsletter */}
            <div className="text-center">
              <div className="bg-[#7030a0] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[hsl(var(--dark-text))] mb-4">LeaderCoacha Newsletter</h3>
              <p className="text-[hsl(var(--medium-text))] mb-6">
                Monthly leadership insights featuring research-backed strategies, case studies from successful leaders, 
                and practical tools for developing triple intelligence capabilities. Includes exclusive interviews 
                with thought leaders and access to leadership assessment tools.
              </p>
              <p className="text-[hsl(var(--medium-text))] text-sm">
                Premium monthly publication with leadership frameworks, diagnostic tools, and early access 
                to leadership development programs and executive coaching opportunities.
              </p>
            </div>

          </div>

          <div className="text-center mt-16">
            <Button
              size="lg"
              className="coacha-button"
              onClick={() => setIsContactOpen(true)}
            >
              Contact Us About Triple Intelligence Leadership
            </Button>
          </div>
        </div>
      </section>

      <ContactDialog open={isContactOpen} onOpenChange={setIsContactOpen} />
    </>
  );
}