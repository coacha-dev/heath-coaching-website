import { useState } from "react";
import { Button } from "@/components/ui/button";
import ContactDialog from "@/components/contact-dialog";

export default function ValueCentredSellingWorkshop() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16" style={{
        background: 'linear-gradient(to bottom, white 0%, rgba(239, 246, 255, 0.3) 40%, rgba(219, 234, 254, 0.4) 70%, rgba(219, 234, 254, 0.5) 100%)'
      }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transform sales performance with a value-centred approach.
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16" style={{
        background: 'linear-gradient(to bottom, rgba(219, 234, 254, 0.5) 0%, rgba(219, 234, 254, 0.4) 30%, rgba(239, 246, 255, 0.3) 60%, white 90%)'
      }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:border-[#0081ea] transition-colors mb-8">
            <p className="text-gray-700 leading-relaxed text-lg mb-8">
              This workshop equips salespeople and teams to sell more, retain clients, and enjoy their work. It focuses on the three factors that predict high sales performance:
            </p>
            <div className="space-y-4 text-gray-700">
              <div><strong className="text-[#0081ea]">Winning Mindset</strong></div>
              <div><strong className="text-[#0081ea]">Contact Energy</strong></div>
              <div><strong className="text-[#0081ea]">Dollar-Productive Behaviours</strong></div>
            </div>
          </div>

          {/* Participants Will Learn To */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:border-[#0081ea] transition-colors mb-8">
            <h3 className="text-2xl font-bold mb-6 text-[#0081ea]">
              Participants Will Learn To:
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#0081ea] mr-3">•</span>
                <span>Add value at every stage of the buying cycle</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0081ea] mr-3">•</span>
                <span>Build authentic, long-term client relationships</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0081ea] mr-3">•</span>
                <span>Apply behavioural economics and neuroscience to sales</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0081ea] mr-3">•</span>
                <span>Manage motivation, energy, and weekly sales goals</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0081ea] mr-3">•</span>
                <span>Overcome contact reluctance and negotiate with confidence</span>
              </li>
            </ul>
          </div>

          {/* Format */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:border-[#0081ea] transition-colors mb-8">
            <h3 className="text-2xl font-bold mb-6 text-[#0081ea]">
              Format
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#0081ea] mr-3">•</span>
                <span>1-day intensive workshop</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0081ea] mr-3">•</span>
                <span>Pre-work Value-Centred Selling Survey</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0081ea] mr-3">•</span>
                <span>Tailored content based on survey results and sales leader insights</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0081ea] mr-3">•</span>
                <span>Comprehensive sales manual provided</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0081ea] mr-3">•</span>
                <span>Optional sustainment coaching for sales leaders</span>
              </li>
            </ul>
          </div>

          {/* Who Should Attend */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:border-[#0081ea] transition-colors mb-8">
            <h3 className="text-2xl font-bold mb-6 text-[#0081ea]">
              Who Should Attend
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#0081ea] mr-3">•</span>
                <span>Sales teams seeking higher performance and engagement</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0081ea] mr-3">•</span>
                <span>Business development executives</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0081ea] mr-3">•</span>
                <span>Leaders managing ambitious sales targets</span>
              </li>
            </ul>
          </div>

          <div className="text-center pt-8">
            <Button
              onClick={() => setIsContactOpen(true)}
              className="heath-gradient-button px-8 py-3 text-lg font-medium rounded-md"
            >
              Contact to Book →
            </Button>
          </div>
        </div>
      </section>

      <ContactDialog open={isContactOpen} onOpenChange={setIsContactOpen} />
    </>
  );
}