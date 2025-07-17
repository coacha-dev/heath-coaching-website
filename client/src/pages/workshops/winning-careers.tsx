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
            Winning Careers Workshop
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Intensive workshop providing tools and insights to build high-performing professionals and accelerate career growth.
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
              This comprehensive workshop is designed for professionals who want to unlock their full potential and accelerate their career trajectory. Through evidence-based techniques and practical tools, participants will gain clarity on their optimal career path and develop the skills needed for sustained success.
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
                <span>Identify your core strengths and leverage them for career advancement</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0081ea] mr-3">•</span>
                <span>Develop a strategic career plan aligned with your values and goals</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0081ea] mr-3">•</span>
                <span>Build high-performance habits that drive professional success</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0081ea] mr-3">•</span>
                <span>Master the psychology of career growth and workplace excellence</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0081ea] mr-3">•</span>
                <span>Create actionable development plans for immediate implementation</span>
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
                <span>Mid to senior-level professionals seeking career acceleration</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0081ea] mr-3">•</span>
                <span>High-potential employees preparing for leadership roles</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0081ea] mr-3">•</span>
                <span>Career changers looking to optimize their transition</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0081ea] mr-3">•</span>
                <span>Teams focused on professional development and growth</span>
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
                <span>Full-day intensive session</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0081ea] mr-3">•</span>
                <span>Interactive exercises and assessments</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0081ea] mr-3">•</span>
                <span>Personalized action planning</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0081ea] mr-3">•</span>
                <span>Follow-up resources and materials</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0081ea] mr-3">•</span>
                <span>Small group format for personalized attention</span>
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