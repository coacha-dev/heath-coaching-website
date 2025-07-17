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
            Value-Centred Selling Workshop
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform sales performance through human-centred methods focused on relationship building and value creation.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16" style={{
        background: 'linear-gradient(to bottom, rgba(219, 234, 254, 0.5) 0%, rgba(219, 234, 254, 0.4) 30%, rgba(239, 246, 255, 0.3) 60%, white 90%)'
      }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:border-[#0081ea] transition-colors mb-8">
            <p className="text-gray-700 leading-relaxed text-lg mb-8">
              Move beyond traditional sales tactics to a relationship-based approach that creates genuine value for clients while driving sustainable revenue growth. This workshop teaches the psychology of ethical influence and authentic relationship building in sales contexts.
            </p>
          </div>

          {/* What You'll Learn */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:border-[#0081ea] transition-colors mb-8">
            <h3 className="text-2xl font-bold mb-6 text-[#0081ea]">
              What You'll Learn
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#0081ea] mr-3">•</span>
                <span>Human-centred sales methodology and frameworks</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0081ea] mr-3">•</span>
                <span>Relationship building techniques that create lasting partnerships</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0081ea] mr-3">•</span>
                <span>Value creation strategies that benefit both parties</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0081ea] mr-3">•</span>
                <span>Ethical influence and persuasion psychology</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0081ea] mr-3">•</span>
                <span>Sustainable revenue growth through authentic connections</span>
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
                <span>Sales professionals seeking to elevate their approach</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0081ea] mr-3">•</span>
                <span>Business development managers and executives</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0081ea] mr-3">•</span>
                <span>Entrepreneurs building client relationships</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0081ea] mr-3">•</span>
                <span>Service providers transitioning to consultative selling</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0081ea] mr-3">•</span>
                <span>Sales teams focused on long-term client success</span>
              </li>
            </ul>
          </div>

          {/* Workshop Format */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:border-[#0081ea] transition-colors mb-8">
            <h3 className="text-2xl font-bold mb-6 text-[#0081ea]">
              Workshop Format
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#0081ea] mr-3">•</span>
                <span>Full-day intensive workshop</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0081ea] mr-3">•</span>
                <span>Role-playing and practical exercises</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0081ea] mr-3">•</span>
                <span>Real client scenario practice</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0081ea] mr-3">•</span>
                <span>Personalized sales strategy development</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0081ea] mr-3">•</span>
                <span>Follow-up coaching and resources</span>
              </li>
            </ul>
          </div>

          <div className="text-center pt-8">
            <Button
              onClick={() => setIsContactOpen(true)}
              className="heath-gradient-button px-8 py-3 text-lg font-medium rounded-md"
            >
              Contact for booking
            </Button>
          </div>
        </div>
      </section>

      <ContactDialog open={isContactOpen} onOpenChange={setIsContactOpen} />
    </>
  );
}