import { useState } from "react";
import { Button } from "@/components/ui/button";
import ContactDialog from "@/components/contact-dialog";

export default function WinningCareersWorkshop() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16" style={{
        background: 'linear-gradient(to bottom, white 0%, rgba(239, 246, 255, 0.3) 40%, rgba(219, 234, 254, 0.4) 70%, rgba(219, 234, 254, 0.5) 100%)'
      }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Help every professional unlock their full potential.
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
              This workshop develops the five personality characteristics that add extraordinary value to organisations and careers:
            </p>
            <div className="space-y-4 text-gray-700">
              <div><strong className="text-[#0081ea]">Growth Mindset</strong></div>
              <div><strong className="text-[#0081ea]">Conscientiousness</strong></div>
              <div><strong className="text-[#0081ea]">Energy</strong></div>
              <div><strong className="text-[#0081ea]">Generosity</strong></div>
              <div><strong className="text-[#0081ea]">Emotional Agility</strong></div>
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
                <span>Identify and leverage their core strengths</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0081ea] mr-3">•</span>
                <span>Build high-performance habits that sustain success</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0081ea] mr-3">•</span>
                <span>Manage energy, resilience, and time for maximum productivity</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0081ea] mr-3">•</span>
                <span>Align their career trajectory with organisational value</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0081ea] mr-3">•</span>
                <span>Create actionable development plans</span>
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
                <span>Full-day or half-day workshop</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0081ea] mr-3">•</span>
                <span>Interactive exercises and personalised assessments</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0081ea] mr-3">•</span>
                <span>Developmental resources from foundation to masterclass level</span>
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
                <span>Mid–senior professionals building career momentum</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0081ea] mr-3">•</span>
                <span>High-potential employees preparing for leadership</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0081ea] mr-3">•</span>
                <span>Teams focused on engagement, productivity, and retention</span>
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