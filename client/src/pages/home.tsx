import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/service-card";
import TestimonialCard from "@/components/testimonial-card";
import LogoScroller from "@/components/logo-scroller";
import { Link } from "wouter";
import { useState } from "react";
import ContactDialog from "@/components/contact-dialog";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const testimonials = [
    {
      quote: "I am happy to highly recommend Luke as an Executive Coach, as Luke has a flair for the psychology of corporations as well as adaptive style, to suit many leaders' individual needs.",
      name: "Alva Devoy",
      title: "Managing Director, Fidelity International"
    },
    {
      quote: "Luke has been a tremendous help in my career. He is a very good listener and his advice is always sensible and to the point.",
      name: "Nicholas Scarf",
      title: "Managing Director and Country Head, Newedge Singapore"
    },
    {
      quote: "GoGet Carshare would be nowhere without the support of Luke Heath. A few years ago, during a particularly challenging period, Luke convinced me to stick at it and continue the business.",
      name: "Nic Lowe",
      title: "Founder, GoGet Carshare"
    },
    {
      quote: "A considered intellectual, patient listener and passionate coach and mentor. Always generous with time, ideas and positive energy.",
      name: "Lisa Boyd",
      title: "Fund Operations Senior Manager, Janus Henderson"
    },
    {
      quote: "Luke is a rare breed, whippet smart, full of empathy and insight. He understands the complexities within organisations and their inextricable connection to the people that lead them.",
      name: "Brooke Lloyd",
      title: "Director, Cox Architecture"
    },
    {
      quote: "Very few, if any coaches have the intellect and conceptual understanding that Luke Heath has.",
      name: "Daniel Wise",
      title: "Global Head of Property, Orica"
    },
    {
      quote: "Luke was knowledgeable, engaging, and quick to understand our business. Possessing an exceptional business acumen and an in-depth knowledge of human psychology.",
      name: "Scott Spain",
      title: "Director, Private Wealth Management, JB Were"
    },
    {
      quote: "Luke did a superb job facilitating our strategy retreat and guiding a consensus outcome. We highly recommended Luke's services.",
      name: "Chris Millman",
      title: "Director & Managing Partner, Cox Architecture"
    },
    {
      quote: "Luke Heath is a most professional executive coach on both national and international levels. He has an outstanding intellect, emotional intelligence, and well-honed commercial acumen.",
      name: "Nancy Kazdan",
      title: "CEO, Kazdan Group"
    },
    {
      quote: "Luke Heath has been a trusted adviser to me and my business interests for fifteen years. He has the great ability to quickly get to the heart of an issue.",
      name: "Ajit Wijesinghe",
      title: "Entrepreneur"
    },
    {
      quote: "I have over twenty years financial markets' experience and have completed many sales and management courses. The best aspects barely match the quality and insight that Luke Heath provides.",
      name: "Andrew Hardman",
      title: "Director, Corporate Sales, Westpac"
    },
    {
      quote: "Luke is my favourite person in the market to speak to, he is highly intelligent yet accessible and a genuine listener, very rare qualities.",
      name: "Rhett Dinsdale",
      title: "Proprietary Trader, Credit Suisse"
    },
    {
      quote: "Luke has coached me in an executive capacity over a period of 6 years. I have found Luke to be dynamic, pragmatic, empathetic and professional.",
      name: "Justin Williams",
      title: "Head of Trader Development, Genesis Trading"
    },
    {
      quote: "Luke has provided me with invaluable advice which has not only helped me to succeed but has also improved my health, well-being, and overall happiness.",
      name: "Joe Jin",
      title: "Vice President, PIMCO"
    },
    {
      quote: "Luke Heath's coaching expertise is unparalleled. His strategic guidance and deep understanding of both business and psychology fronts have been paramount in my career advancement.",
      name: "Danail Stanev",
      title: "Chief Risk Officer, Koa Capital"
    }
  ];

  // Split testimonials into two rows
  const row1Testimonials = testimonials.slice(0, 8);
  const row2Testimonials = testimonials.slice(8, 15);

  return (
    <>
      {/* Hero and Logo Scroller - Full Height Above Fold */}
      <section className="bg-gradient-to-br from-[hsl(var(--heath-gradient-start))] to-[hsl(var(--heath-gradient-end))] min-h-screen flex flex-col">
        {/* Main Hero Content - Centered with proper spacing */}
        <div className="flex-1 flex items-center justify-center" style={{ paddingTop: '7.5rem' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[hsl(var(--dark-text))] leading-tight mb-8">
                Transform your career with{" "}
                <span className="colored-underline-blue">one-to-one coaching</span>
              </h1>
              <p className="text-lg md:text-xl text-[hsl(var(--medium-text))] max-w-3xl mx-auto mb-8">
                HeathCoaching provides personalized executive coaching to help leaders and professionals reach their full potential.{" "}
                <button 
                  onClick={() => {
                    document.getElementById('about-section')?.scrollIntoView({ 
                      behavior: 'smooth' 
                    });
                  }}
                  className="inline-flex items-center text-[hsl(var(--medium-text))] hover:text-[hsl(var(--dark-text))] cursor-pointer transition-colors duration-200"
                >
                  <span>Learn more about our approach</span>
                  <div className="ml-1 animate-bounce translate-y-1">
                    <svg 
                      className="w-4 h-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={1.5} 
                        d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                      />
                    </svg>
                  </div>
                </button>
              </p>
            </div>
          </div>
        </div>

        {/* Logo Scroller at Bottom */}
        <div className="py-4 mb-10" style={{ transform: 'translateY(-16px)' }}>
          <div className="w-full">
            <LogoScroller />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about-section" className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(var(--dark-text))] mb-6">
                Personalized Executive Coaching
              </h2>
              <p className="text-lg text-[hsl(var(--medium-text))] mb-6">
                With over 20 years of experience in executive coaching, Luke Heath provides tailored one-to-one coaching sessions designed to unlock your leadership potential and accelerate your career growth.
              </p>
              <p className="text-lg text-[hsl(var(--medium-text))] mb-8">
                Whether you're looking to enhance your leadership skills, navigate career transitions, or improve your professional relationships, our coaching approach combines psychological insights with practical business acumen.
              </p>
              <Button
                onClick={() => setIsContactOpen(true)}
                className="heath-button text-lg px-8 py-3"
              >
                Book a Consultation
              </Button>
            </div>
            <div className="bg-gradient-to-br from-[hsl(var(--heath-light-blue))] to-[hsl(var(--heath-gradient-end))] rounded-lg p-8">
              <h3 className="text-2xl font-bold text-[hsl(var(--dark-text))] mb-6">
                What to Expect
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-[hsl(var(--heath-blue))] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-[hsl(var(--dark-text))]">Customized coaching plans tailored to your specific goals</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-[hsl(var(--heath-blue))] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-[hsl(var(--dark-text))]">Regular sessions with actionable insights and feedback</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-[hsl(var(--heath-blue))] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-[hsl(var(--dark-text))]">Confidential environment for honest self-reflection</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-[hsl(var(--heath-blue))] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-[hsl(var(--dark-text))]">Ongoing support throughout your professional journey</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-16 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(var(--dark-text))] mb-4">
              What our clients say
            </h2>
          </div>

          {/* Two Row Auto-Scrolling Layout */}
          <div className="space-y-8 relative">
            {/* Left fade mask */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            
            {/* Right fade mask */}
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

            {/* Row 1 - Left to Right */}
            <div className="testimonial-row-container">
              <div className="testimonial-row testimonial-row-lr">
                {[...row1Testimonials, ...row1Testimonials].map((testimonial, index) => (
                  <div key={`row1-${index}`} className="testimonial-card-auto bg-gradient-to-br from-[hsl(var(--heath-light-blue))] to-[hsl(var(--heath-gradient-end))] rounded-lg border border-gray-200 shadow-sm p-5 mx-4 flex-shrink-0">
                    <blockquote className="text-sm text-[hsl(var(--dark-text))] mb-3 italic leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <p className="font-semibold text-[hsl(var(--dark-text))] text-sm">{testimonial.name}</p>
                      <p className="text-[hsl(var(--medium-text))] text-xs">{testimonial.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2 - Right to Left */}
            <div className="testimonial-row-container">
              <div className="testimonial-row testimonial-row-rl">
                {[...row2Testimonials, ...row2Testimonials].map((testimonial, index) => (
                  <div key={`row2-${index}`} className="testimonial-card-auto bg-gradient-to-br from-[hsl(var(--heath-light-blue))] to-[hsl(var(--heath-gradient-end))] rounded-lg border border-gray-200 shadow-sm p-5 mx-4 flex-shrink-0">
                    <blockquote className="text-sm text-[hsl(var(--dark-text))] mb-3 italic leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <p className="font-semibold text-[hsl(var(--dark-text))] text-sm">{testimonial.name}</p>
                      <p className="text-[hsl(var(--medium-text))] text-xs">{testimonial.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link href="/testimonials">
              <Button
                size="lg"
                className="heath-button"
              >
                See all testimonials
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <ContactDialog open={isContactOpen} onOpenChange={setIsContactOpen} />
    </>
  );
}
