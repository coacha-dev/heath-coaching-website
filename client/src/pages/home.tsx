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
      {/* Hero Section - Adjusted height for better content visibility */}
      <section className="h-[85vh] flex flex-col" style={{
        background: 'linear-gradient(to bottom, white 0%, rgba(239, 246, 255, 0.3) 40%, rgba(219, 234, 254, 0.4) 70%, rgba(219, 234, 254, 0.5) 100%)'
      }}>
        <div className="flex-1 flex justify-center pt-32 pb-6">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Luke Heath helps leaders and their teams{" "}
              <span style={{ 
                background: 'linear-gradient(90deg, #0081ea 0%, #40a3f7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>excel</span>.
            </h1>
            <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto">
              He has coached and trained executives in global organisations for more than 20 years to perform at their best.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={() => {
                  const element = document.getElementById('services-section');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-black hover:bg-gray-800 text-white px-8 py-3 text-lg font-medium rounded-md"
              >
                Our Services
              </Button>
              <Button
                onClick={() => setIsContactOpen(true)}
                className="bg-transparent hover:bg-gray-50 text-black border-2 border-gray-300 hover:border-gray-400 px-8 py-3 text-lg font-medium rounded-md"
              >
                Contact Us →
              </Button>
            </div>
          </div>
        </div>
        
        {/* Logo Scroller at bottom of viewport - inherits gradient */}
        <div className="w-full pt-24" style={{ paddingBottom: '200px' }}>
          <LogoScroller />
        </div>
      </section>

      {/* Our Services Section - Continues gradient flow */}
      <section id="services-section" className="pb-20" style={{
        paddingTop: '200px',
        background: 'linear-gradient(to bottom, rgba(219, 234, 254, 0.5) 0%, rgba(219, 234, 254, 0.4) 30%, rgba(239, 246, 255, 0.3) 60%, white 90%)'
      }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              HeathCoaching delivers workshops that elevate{" "}
              <span style={{textDecoration: 'underline', textDecorationColor: '#7030a0', textDecorationThickness: '4px', textUnderlineOffset: '6px'}}>Leadership</span>,{" "}
              <span style={{textDecoration: 'underline', textDecorationColor: '#dc0725', textDecorationThickness: '4px', textUnderlineOffset: '6px'}}>Sales</span>,{" "}and{" "}
              <span style={{textDecoration: 'underline', textDecorationColor: '#0081ea', textDecorationThickness: '4px', textUnderlineOffset: '6px'}}>Productivity</span>.
            </h2>
          </div>

          {/* Workshops Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-6 mb-20">
            {/* Triple Intelligence Leadership Workshop */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:border-[#7030a0] transition-colors">
              <h3 className="text-2xl font-bold mb-4 text-[#7030a0]">
                Triple Intelligence Leadership Workshop
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Advance the 3 domains of outstanding leadership: rational, emotional, and social intelligence.
              </p>
              <Link href="/workshops/triple-intelligence">
                <Button className="bg-[#7030a0] hover:bg-[#5a2480] text-white w-full">
                  Learn More →
                </Button>
              </Link>
            </div>

            {/* Value-Centred Selling Workshop */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:border-[#dc0725] transition-colors">
              <h3 className="text-2xl font-bold mb-4 text-[#dc0725]">
                Value-Centred Selling Workshop
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Accelerate sales by a winning mindset, contact energy, and dollar-productive behaviours. Add value at every stage of the client buying cycle.
              </p>
              <Link href="/workshops/value-centred-selling">
                <Button className="bg-[#dc0725] hover:bg-[#b8051f] text-white w-full">
                  Learn More →
                </Button>
              </Link>
            </div>

            {/* Winning Careers Workshop */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:border-[#0081ea] transition-colors">
              <h3 className="text-2xl font-bold mb-4 text-[#0081ea]">
                Winning Careers Workshop
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Optimise the 5 personality factors that drive career success. Build productivity, engagement, and enjoyment across your workforce.
              </p>
              <Link href="/workshops/winning-careers">
                <Button className="bg-[#0081ea] hover:bg-[#0066bb] text-white w-full">
                  Learn More →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* One-to-One Coaching Section */}
      <section className="py-20" style={{
        background: 'linear-gradient(to bottom, white 0%, rgba(239, 246, 255, 0.3) 30%, rgba(219, 234, 254, 0.4) 60%, white 90%)'
      }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              One-to-One Coaching
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              High-value coaching for executives.
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Luke has coached C-level leaders since 2002 in more than 40 countries. His coaching is grounded in psychology and commercial experience.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:border-[#0081ea] transition-colors max-w-2xl">
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                Coaching leaders to bring out the best in themselves and their teams.
              </p>
              <div className="text-center">
                <Link href="/one-to-one-coaching">
                  <Button className="heath-gradient-button px-8 py-3">
                    Learn More →
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Continues gradient flow */}
      <section className="py-16 lg:py-24 overflow-hidden" style={{
        background: 'linear-gradient(to bottom, white 0%, rgba(239, 246, 255, 0.3) 25%, rgba(219, 234, 254, 0.4) 50%, rgba(239, 246, 255, 0.3) 75%, white 100%)'
      }}>
        <div className="text-center mb-16 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(var(--dark-text))] mb-4">
            What our clients say
          </h2>
        </div>

        {/* Two Row Auto-Scrolling Layout - Full width */}
        <div className="space-y-8 relative w-full">
          {/* Left fade mask - matches background */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          
          {/* Right fade mask - matches background */}
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

            {/* Row 1 - Left to Right */}
            <div className="testimonial-row-container">
              <div className="testimonial-row testimonial-row-lr">
                {[...row1Testimonials, ...row1Testimonials].map((testimonial, index) => (
                  <div key={`row1-${index}`} className="testimonial-card-auto bg-white rounded-lg border border-gray-200 shadow-sm p-5 mx-4 flex-shrink-0">
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
                  <div key={`row2-${index}`} className="testimonial-card-auto bg-white rounded-lg border border-gray-200 shadow-sm p-5 mx-4 flex-shrink-0">
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

        <div className="text-center mt-16 px-4 sm:px-6 lg:px-8">
          <Link href="/testimonials">
            <Button
              size="lg"
              className="heath-gradient-button px-8 py-3 text-lg font-medium rounded-md"
            >
              See all testimonials
            </Button>
          </Link>
        </div>
      </section>

      <ContactDialog open={isContactOpen} onOpenChange={setIsContactOpen} />
    </>
  );
}
