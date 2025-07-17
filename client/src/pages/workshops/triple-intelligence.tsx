import { useState } from "react";
import { Button } from "@/components/ui/button";
import ContactDialog from "@/components/contact-dialog";

export default function TripleIntelligenceWorkshop() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16" style={{
        background: 'linear-gradient(to bottom, white 0%, rgba(239, 246, 255, 0.3) 40%, rgba(219, 234, 254, 0.4) 70%, rgba(219, 234, 254, 0.5) 100%)'
      }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Triple Intelligence Leadership Workshop
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Science-backed leadership development program focusing on cognitive, emotional, and social intelligence mastery.
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
              This advanced leadership workshop integrates cutting-edge research in cognitive science, emotional intelligence, and social psychology to develop exceptional leaders. Participants will master the three critical intelligence domains that distinguish outstanding leaders from average managers.
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
                <span><strong>Cognitive Intelligence:</strong> Strategic thinking, decision-making, and problem-solving mastery</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0081ea] mr-3">•</span>
                <span><strong>Emotional Intelligence:</strong> Self-awareness, self-regulation, and emotional mastery</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0081ea] mr-3">•</span>
                <span><strong>Social Intelligence:</strong> Influence, communication, and relationship-building excellence</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0081ea] mr-3">•</span>
                <span>Integration techniques for applying all three intelligence types</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0081ea] mr-3">•</span>
                <span>Leadership presence and executive communication skills</span>
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
                <span>Senior executives and C-suite leaders</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0081ea] mr-3">•</span>
                <span>High-potential managers preparing for executive roles</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0081ea] mr-3">•</span>
                <span>Leadership teams seeking enhanced collaboration</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0081ea] mr-3">•</span>
                <span>Entrepreneurs scaling their leadership capabilities</span>
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
                <span>Two-day comprehensive program</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0081ea] mr-3">•</span>
                <span>Science-based assessments and feedback</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0081ea] mr-3">•</span>
                <span>Real-world case studies and simulations</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0081ea] mr-3">•</span>
                <span>Peer learning and group coaching</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0081ea] mr-3">•</span>
                <span>Ongoing development resources</span>
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