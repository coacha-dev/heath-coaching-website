import { useState } from "react";
import { Button } from "@/components/ui/button";
import ContactDialog from "@/components/contact-dialog";

export default function WinningCareersWorkshop() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16" style={{
        background: 'linear-gradient(to bottom, white 0%, rgba(0, 129, 234, 0.02) 40%, rgba(0, 129, 234, 0.03) 70%, rgba(0, 129, 234, 0.05) 100%)'
      }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span style={{
              textDecoration: 'underline',
              textDecorationColor: '#0081ea',
              textDecorationThickness: '4px',
              textUnderlineOffset: '8px'
            }}>Winning Careers</span>
            <br /><span style={{marginTop: '0.5rem', display: 'inline-block'}}>Workshop</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Increase productivity, engagement, and enjoyment for everyone in the organisation.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="pt-4 pb-16" style={{
        background: 'linear-gradient(to bottom, rgba(0, 129, 234, 0.05) 0%, rgba(0, 129, 234, 0.03) 30%, rgba(0, 129, 234, 0.02) 60%, white 90%)'
      }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Content Box */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:border-[#0081ea] transition-colors mb-8">
            <p className="text-gray-700 leading-relaxed text-lg mb-8">
              This half-day workshop helps participants optimise 5 personality characteristics that add extraordinary value: growth mindset, conscientiousness, energy management, generosity, and emotional agility. We share practical techniques that can immediately be used.
            </p>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-[#0081ea] mb-4 text-xl">1. Growth Mindset</h4>
                <p className="text-gray-700 leading-relaxed">
                  A growth mindset future-proofs your career. We discuss how to gain and respond to feedback and refine a 12-month learning plan.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-[#0081ea] mb-4 text-xl">2. Conscientiousness</h4>
                <p className="text-gray-700 leading-relaxed">
                  Conscientiousness predicts long-term success. We discuss how to maintain work at a high standard and help customers have an excellent psychological experience.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-[#0081ea] mb-4 text-xl">3. Energy</h4>
                <p className="text-gray-700 leading-relaxed">
                  High energy people are compelling to work with. Participants complete the Energy20 Assessment and we discuss how to be persuasive in any meeting.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-[#0081ea] mb-4 text-xl">4. Generosity</h4>
                <p className="text-gray-700 leading-relaxed">
                  Generous colleagues help teams thrive. We discuss connecting colleagues to our networks and making a positive contribution to team morale.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-[#0081ea] mb-4 text-xl">5. Emotional Agility</h4>
                <p className="text-gray-700 leading-relaxed">
                  Emotional agility equips us to deal with setbacks. We discuss fostering resilience, taking ultimate responsibility for our career success, and the virtues of buddy coaching.
                </p>
              </div>
            </div>
          </div>

          {/* Includes */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:border-[#0081ea] transition-colors mb-8">
            <h3 className="text-2xl font-bold mb-6 text-[#0081ea]">
              Includes:
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#0081ea] mr-3">•</span>
                <span>Interactive, face-to-face delivery of the Winning Careers Workshop.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0081ea] mr-3">•</span>
                <span>Winning Careers Assessment and comprehensive resources</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0081ea] mr-3">•</span>
                <span>12-months of CareerCoacha newsletters.</span>
              </li>
            </ul>
          </div>

          <div className="text-center pt-8">
            <Button
              onClick={() => setIsContactOpen(true)}
              className="bg-[#0081ea] hover:bg-[#0066bb] text-white px-8 py-3 text-lg font-medium rounded-md"
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