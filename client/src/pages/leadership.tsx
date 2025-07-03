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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            
            {/* Triple Intelligence Leadership Workshop */}
            <div id="workshop" className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 border-l-4 border-l-[#7030a0] hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-3xl font-bold text-[hsl(var(--dark-text))] mb-6">
                Triple Intelligence Leadership Workshop
              </h3>
              <p className="text-lg text-[hsl(var(--medium-text))] mb-6">
                Comprehensive leadership development program that builds cognitive intelligence (analytical thinking), 
                emotional intelligence (self-awareness and empathy), and social intelligence (relationship management 
                and influence). Participants develop integrated leadership capabilities for complex organizational challenges.
              </p>
              <p className="text-[hsl(var(--medium-text))]">
                <strong>Duration:</strong> 3-day intensive program with ongoing coaching sessions. Includes 360-degree feedback, leadership toolkit, 
                and access to exclusive leadership resources and peer network.
              </p>
            </div>

            {/* Triple Intelligence Leadership Assessment */}
            <div id="assessment" className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 border-l-4 border-l-[#7030a0] hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-3xl font-bold text-[hsl(var(--dark-text))] mb-6">
                Triple Intelligence Leadership Assessment
              </h3>
              <p className="text-lg text-[hsl(var(--medium-text))] mb-6">
                Multi-dimensional leadership assessment measuring cognitive processing, emotional regulation, 
                and social effectiveness. Provides detailed insights into leadership strengths, blind spots, 
                and development priorities across all three intelligence domains.
              </p>
              <p className="text-[hsl(var(--medium-text))]">
                <strong>Details:</strong> Comprehensive assessment with detailed 30-page leadership profile, benchmarking against high-performing 
                leaders, and personalized development roadmap with coaching recommendations.
              </p>
            </div>

            {/* LeaderCoacha Newsletter */}
            <div id="newsletter" className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 border-l-4 border-l-[#7030a0] hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-3xl font-bold text-[hsl(var(--dark-text))] mb-6">
                LeaderCoacha Newsletter
              </h3>
              <p className="text-lg text-[hsl(var(--medium-text))] mb-6">
                Monthly leadership insights featuring research-backed strategies, case studies from successful leaders, 
                and practical tools for developing triple intelligence capabilities. Includes exclusive interviews 
                with thought leaders and access to leadership assessment tools.
              </p>
              <p className="text-[hsl(var(--medium-text))]">
                <strong>Subscription:</strong> Premium monthly publication with leadership frameworks, diagnostic tools, and early access 
                to leadership development programs and executive coaching opportunities.
              </p>
            </div>

          </div>

          <div className="text-center mt-16">
            <Button
              size="lg"
              className="heath-gradient-button px-8 py-3 text-lg font-medium rounded-md"
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