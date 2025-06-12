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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Winning Careers Workshop */}
            <div className="text-center">
              <div className="bg-[#0081ea] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[hsl(var(--dark-text))] mb-4">Winning Careers Workshop</h3>
              <p className="text-[hsl(var(--medium-text))] mb-6">
                Intensive workshop covering strategic career planning, goal setting, professional networking, 
                and advancement strategies. Participants learn evidence-based approaches to career development, 
                personal branding, and professional positioning within their industry.
              </p>
              <p className="text-[hsl(var(--medium-text))] text-sm">
                Duration: 2-day intensive workshop with follow-up sessions. Includes workbook, templates, 
                and ongoing access to career development resources.
              </p>
            </div>

            {/* Winning Careers Assessment */}
            <div className="text-center">
              <div className="bg-[#0081ea] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[hsl(var(--dark-text))] mb-4">Winning Careers Personality Assessment</h3>
              <p className="text-[hsl(var(--medium-text))] mb-6">
                Comprehensive personality and career aptitude assessment that identifies individual strengths, 
                preferred work styles, and optimal career paths. Includes detailed reporting on communication 
                preferences, leadership potential, and professional development recommendations.
              </p>
              <p className="text-[hsl(var(--medium-text))] text-sm">
                Scientifically validated assessment with personalized 20-page report, one-on-one debrief session, 
                and customized development plan.
              </p>
            </div>

            {/* CareerCoacha Newsletter */}
            <div className="text-center">
              <div className="bg-[#0081ea] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[hsl(var(--dark-text))] mb-4">CareerCoacha Newsletter</h3>
              <p className="text-[hsl(var(--medium-text))] mb-6">
                Monthly newsletter featuring career insights, industry trends, professional development tips, 
                and exclusive content from career experts. Includes case studies, interview strategies, 
                and actionable advice for career advancement.
              </p>
              <p className="text-[hsl(var(--medium-text))] text-sm">
                Free monthly publication delivered digitally. Includes premium content, downloadable resources, 
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