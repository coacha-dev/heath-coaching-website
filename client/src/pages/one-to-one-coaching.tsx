import { useState } from "react";
import { Button } from "@/components/ui/button";
import ContactDialog from "@/components/contact-dialog";

export default function OneToOneCoaching() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16" style={{
        background: 'linear-gradient(to bottom, white 0%, rgba(239, 246, 255, 0.3) 40%, rgba(219, 234, 254, 0.4) 70%, rgba(219, 234, 254, 0.5) 100%)'
      }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            High-value coaching for executives.
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Luke has coached C-level leaders since 2002 in more than 40 countries. His coaching is grounded in psychology and commercial experience. Clients can expect:
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16" style={{
        background: 'linear-gradient(to bottom, rgba(219, 234, 254, 0.5) 0%, rgba(219, 234, 254, 0.4) 30%, rgba(239, 246, 255, 0.3) 60%, white 90%)'
      }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:border-[#0081ea] transition-colors">
            <h3 className="text-2xl font-bold mb-4 text-[#0081ea]">
              Challenge and Support
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Coachees are helped to achieve significant goals.  Sessions can be challenging but are always supportive.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:border-[#0081ea] transition-colors">
            <h3 className="text-2xl font-bold mb-4 text-[#0081ea]">
              Commercial Insights
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Luke has founded multiple businesses and been a fund manager and investment banker. He shares emerging business themes facing other leaders.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:border-[#0081ea] transition-colors">
            <h3 className="text-2xl font-bold mb-4 text-[#0081ea]">
              Behavioural Science
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Evidence-based coaching facilitates sustained change.  Leaders can learn coaching techniques to apply with their teams.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:border-[#0081ea] transition-colors">
            <h3 className="text-2xl font-bold mb-4 text-[#0081ea]">
              Bespoke Resources
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Coachees have access to proprietary psychological assessments on leadership, teams, sales, energy, and personality.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:border-[#0081ea] transition-colors">
            <h3 className="text-2xl font-bold mb-4 text-[#0081ea]">
              Useful Feedback
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Luke can gather insightful feedback from key stakeholders to guide the thinking and actions of coachees.
            </p>
          </div>

          <div className="text-center pt-8">
            <Button
              onClick={() => setIsContactOpen(true)}
              className="heath-gradient-button px-8 py-3 text-lg font-medium rounded-md"
            >
              Contact Us →
            </Button>
          </div>
        </div>
      </section>

      <ContactDialog open={isContactOpen} onOpenChange={setIsContactOpen} />
    </>
  );
}