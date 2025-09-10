import { useState } from "react";
import { Button } from "@/components/ui/button";
import ContactDialog from "@/components/contact-dialog";

export default function TripleIntelligenceWorkshop() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16" style={{
        background: 'linear-gradient(to bottom, white 0%, rgba(112, 48, 160, 0.02) 40%, rgba(112, 48, 160, 0.03) 70%, rgba(112, 48, 160, 0.05) 100%)'
      }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span style={{
              textDecoration: 'underline',
              textDecorationColor: '#7030a0',
              textDecorationThickness: '4px',
              textUnderlineOffset: '8px'
            }}>Triple Intelligence Leadership</span>
            <br /><br />Workshop
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform how leaders make decisions, manage emotions, and optimise team dynamics to win.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="pt-4 pb-16" style={{
        background: 'linear-gradient(to bottom, rgba(112, 48, 160, 0.05) 0%, rgba(112, 48, 160, 0.03) 30%, rgba(112, 48, 160, 0.02) 60%, white 90%)'
      }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Content Box */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:border-[#7030a0] transition-colors mb-8">
            <p className="text-gray-700 leading-relaxed text-lg mb-8">
              This 1-day workshop helps leaders bring out the best in themselves and colleagues. It focuses on the big 3 drivers of excellent leadership: rational, emotional, and social intelligence. We share practical techniques that can immediately be used.
            </p>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-[#7030a0] mb-4 text-xl">1. Rational Intelligence</h4>
                <p className="text-gray-700 leading-relaxed">
                  Excellent decision-making requires a reliable process. We discuss how to prioritise deep thinking, generate innovative ideas, form strategy, chair productive meetings, and identify employees who are likely to be high performers.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-[#7030a0] mb-4 text-xl">2. Emotional Intelligence</h4>
                <p className="text-gray-700 leading-relaxed">
                  A crucial leadership role is to be a mood manager. We discuss how to enhance trust, cultivate empathy and generosity, display resilience, understand the motivations of a broad range of personalities, and manage underperforming colleagues.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-[#7030a0] mb-4 text-xl">3. Social Intelligence</h4>
                <p className="text-gray-700 leading-relaxed">
                  Advanced social intelligence distinguishes the best leaders. We discuss how to champion a winning culture, deliver significant change projects, defend the team's energy and time, connect colleagues to networks, and embrace the mandate to lead.
                </p>
              </div>
            </div>
          </div>

          {/* Includes */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:border-[#7030a0] transition-colors mb-8">
            <h3 className="text-2xl font-bold mb-6 text-[#7030a0]">
              Includes:
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#7030a0] mr-3">•</span>
                <span>Interactive, face-to-face delivery of the Triple Intelligence Leadership Workshop.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#7030a0] mr-3">•</span>
                <span>Triple Intelligence Leadership Assessment and comprehensive resources</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#7030a0] mr-3">•</span>
                <span>12-months of LeaderCoacha newsletters.</span>
              </li>
            </ul>
          </div>

          <div className="text-center pt-8">
            <Button
              onClick={() => setIsContactOpen(true)}
              className="bg-[#7030a0] hover:bg-[#5a2480] text-white px-8 py-3 text-lg font-medium rounded-md"
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