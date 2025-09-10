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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[#7030a0]">Triple Intelligence Leadership</span> <span className="text-black">Workshop</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">
            Transform how leaders make decisions, manage emotions, and optimise team dynamics to win.
          </h2>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16" style={{
        background: 'linear-gradient(to bottom, rgba(219, 234, 254, 0.5) 0%, rgba(219, 234, 254, 0.4) 30%, rgba(239, 246, 255, 0.3) 60%, white 90%)'
      }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:border-[#7030a0] transition-colors mb-8 text-center">
            <p className="text-gray-700 leading-relaxed text-lg mb-8">
              This 1-day workshop helps leaders bring out the best in themselves and colleagues. It focuses on the big 3 drivers of excellent leadership: rational, emotional, and social intelligence. We share practical techniques that can immediately be used.
            </p>
          </div>

          {/* Three Intelligence Boxes */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:border-[#7030a0] transition-colors">
              <h4 className="font-bold text-[#7030a0] mb-4 text-xl text-center">Rational Intelligence</h4>
              <p className="text-gray-700 leading-relaxed">
                Excellent decision-making requires a reliable process. We discuss how to prioritise deep thinking, generate innovative ideas, form strategy, chair productive meetings, and identify employees who are likely to be high performers.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:border-[#7030a0] transition-colors">
              <h4 className="font-bold text-[#7030a0] mb-4 text-xl text-center">Emotional Intelligence</h4>
              <p className="text-gray-700 leading-relaxed">
                A crucial leadership role is to be a mood manager. We discuss how to enhance trust, cultivate empathy and generosity, display resilience, understand the motivations of a broad range of personalities, and manage underperforming colleagues.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:border-[#7030a0] transition-colors">
              <h4 className="font-bold text-[#7030a0] mb-4 text-xl text-center">Social Intelligence</h4>
              <p className="text-gray-700 leading-relaxed">
                Advanced social intelligence distinguishes the best leaders. We discuss how to champion a winning culture, deliver significant change projects, defend the team's energy and time, connect colleagues to networks, and embrace the mandate to lead.
              </p>
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