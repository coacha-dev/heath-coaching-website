import { Button } from "@/components/ui/button";
import { useState } from "react";
import ContactDialog from "@/components/contact-dialog";

export default function Selling() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#faf8f5] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[hsl(var(--dark-text))] mb-8">
              <span className="colored-underline-red">Value-Centred Selling</span>
            </h1>
            <p className="text-lg md:text-xl text-[hsl(var(--medium-text))] max-w-3xl mx-auto mb-12">
              Transform your sales performance through human-centred methods that build authentic relationships, understand client needs, and deliver sustainable value propositions.
            </p>
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            
            {/* Value-Centred Selling Workshop */}
            <div id="workshop" className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 border-l-4 border-l-[#dc0725] hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-3xl font-bold text-[hsl(var(--dark-text))] mb-6">
                Value-Centred Selling Workshop
              </h3>
              <p className="text-lg text-[hsl(var(--medium-text))] mb-6">
                Comprehensive sales methodology focused on understanding client values, building trust-based relationships, 
                and creating win-win solutions. Participants learn consultative selling techniques, value proposition 
                development, and ethical persuasion strategies that drive long-term client relationships.
              </p>
              <p className="text-[hsl(var(--medium-text))]">
                <strong>Duration:</strong> 2-day intensive workshop with role-playing exercises, real client scenarios, and ongoing mentorship. 
                Includes sales toolkit, conversation frameworks, and access to value assessment resources.
              </p>
            </div>

            {/* Value-Centred Selling Assessment */}
            <div id="assessment" className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 border-l-4 border-l-[#dc0725] hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-3xl font-bold text-[hsl(var(--dark-text))] mb-6">
                Value-Centred Selling Assessment
              </h3>
              <p className="text-lg text-[hsl(var(--medium-text))] mb-6">
                Diagnostic assessment evaluating sales strengths, communication style, relationship-building capabilities, 
                and value identification skills. Provides insights into sales personality, client engagement patterns, 
                and areas for improvement in the value-centred selling approach.
              </p>
              <p className="text-[hsl(var(--medium-text))]">
                <strong>Details:</strong> Comprehensive sales assessment with detailed performance analysis, personalized coaching recommendations, 
                and benchmarking against top-performing sales professionals using value-centred methods.
              </p>
            </div>

            {/* SalesCoacha Newsletter */}
            <div id="newsletter" className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 border-l-4 border-l-[#dc0725] hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-3xl font-bold text-[hsl(var(--dark-text))] mb-6">
                SalesCoacha Newsletter
              </h3>
              <p className="text-lg text-[hsl(var(--medium-text))] mb-6">
                Monthly sales insights featuring value-centred selling strategies, client psychology research, 
                and practical techniques for building authentic client relationships. Includes case studies, 
                conversation starters, and tools for identifying and communicating value propositions.
              </p>
              <p className="text-[hsl(var(--medium-text))]">
                <strong>Subscription:</strong> Premium monthly publication with sales scripts, objection handling frameworks, and exclusive access 
                to value-centred selling resources and advanced sales development workshops.
              </p>
            </div>

          </div>

          <div className="text-center mt-16">
            <Button
              size="lg"
              className="coacha-button"
              onClick={() => setIsContactOpen(true)}
            >
              Contact Us About Value-Centred Selling
            </Button>
          </div>
        </div>
      </section>

      <ContactDialog open={isContactOpen} onOpenChange={setIsContactOpen} />
    </>
  );
}