import { Button } from "@/components/ui/button";
import { useState } from "react";
import ContactDialog from "@/components/contact-dialog";

export default function WinningCareers() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#faf8f5] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[hsl(var(--dark-text))] mb-8">
              <span className="colored-underline-blue">Winning Careers</span>
            </h1>
            <p className="text-lg md:text-xl text-[hsl(var(--medium-text))] max-w-3xl mx-auto mb-12">
              Workshops, tools & insights to build high-performing professionals who drive organizational success through strategic career development and enhanced professional capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            
            {/* Winning Careers Workshop */}
            <div id="workshop" className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-3xl font-bold text-[hsl(var(--dark-text))] mb-6">
                Winning Careers Workshop
              </h3>
              <p className="text-lg text-[hsl(var(--medium-text))] mb-6">
                Intensive workshop covering strategic career planning, goal setting, professional networking, 
                and advancement strategies. Participants learn evidence-based approaches to career development, 
                personal branding, and professional positioning within their industry.
              </p>
              <p className="text-[hsl(var(--medium-text))]">
                <strong>Duration:</strong> 2-day intensive workshop with follow-up sessions. Includes workbook, templates, 
                and ongoing access to career development resources.
              </p>
            </div>

            {/* Winning Careers Assessment */}
            <div id="assessment" className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-3xl font-bold text-[hsl(var(--dark-text))] mb-6">
                Winning Careers Personality Assessment
              </h3>
              <p className="text-lg text-[hsl(var(--medium-text))] mb-6">
                Comprehensive personality and career aptitude assessment that identifies individual strengths, 
                preferred work styles, and optimal career paths. Includes detailed reporting on communication 
                preferences, leadership potential, and professional development recommendations.
              </p>
              <p className="text-[hsl(var(--medium-text))]">
                <strong>Details:</strong> Scientifically validated assessment with personalized 20-page report, one-on-one debrief session, 
                and customized development plan.
              </p>
            </div>

            {/* CareerCoacha Newsletter */}
            <div id="newsletter" className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-3xl font-bold text-[hsl(var(--dark-text))] mb-6">
                CareerCoacha Newsletter
              </h3>
              <p className="text-lg text-[hsl(var(--medium-text))] mb-6">
                Monthly newsletter featuring career insights, industry trends, professional development tips, 
                and exclusive content from career experts. Includes case studies, interview strategies, 
                and actionable advice for career advancement.
              </p>
              <p className="text-[hsl(var(--medium-text))]">
                <strong>Subscription:</strong> Free monthly publication delivered digitally. Includes premium content, downloadable resources, 
                and early access to workshop announcements.
              </p>
            </div>

          </div>

          <div className="text-center mt-16">
            <Button
              size="lg"
              className="coacha-button"
              onClick={() => setIsContactOpen(true)}
            >
              Contact Us About Winning Careers
            </Button>
          </div>
        </div>
      </section>

      <ContactDialog open={isContactOpen} onOpenChange={setIsContactOpen} />
    </>
  );
}