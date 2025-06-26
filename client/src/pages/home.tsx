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
      <section className="bg-white min-h-screen flex flex-col">
        {/* Main Hero Content - Centered with proper spacing */}
        <div className="flex-1 flex items-center justify-center" style={{ paddingTop: '7.5rem' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[hsl(var(--dark-text))] leading-tight mb-8">
                Luke Heath helps{" "}
                <span className="text-[hsl(var(--heath-blue))]">leaders</span>{" "}
                and their teams to{" "}
                <span className="text-[hsl(var(--heath-blue))]">excel</span>
              </h1>
              <p className="text-lg md:text-xl text-[hsl(var(--medium-text))] max-w-3xl mx-auto mb-8">
                He has coached and trained executives across the globe.
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

      {/* Coaching Section */}
      <section id="coaching-section" className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(var(--dark-text))] mb-8">
              One-To-One Coaching
            </h2>
            <p className="text-lg text-[hsl(var(--medium-text))] mb-8">
              Luke has been coaching C-level executives and other high-value roles since 2002. In your coaching program, you can rely on:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Support and Challenge */}
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h3 className="text-xl font-bold text-[hsl(var(--dark-text))] mb-4">
                Support and Challenge
              </h3>
              <p className="text-[hsl(var(--medium-text))]">
                Sessions may be challenging but you should always feel strongly supported – this includes 7-day access to help you accomplish your goals. All conversations are confidential.
              </p>
            </div>

            {/* Commercial Experience */}
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h3 className="text-xl font-bold text-[hsl(var(--dark-text))] mb-4">
                Commercial Experience
              </h3>
              <p className="text-[hsl(var(--medium-text))]">
                Insights gained coaching leaders in more than forty countries, across industries, and stage of business. Founded and run several businesses and was an investment banker and portfolio manager for ten years at Schroders and Societe Generale.
              </p>
            </div>

            {/* Behavioural Science */}
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h3 className="text-xl font-bold text-[hsl(var(--dark-text))] mb-4">
                Behavioural Science
              </h3>
              <p className="text-[hsl(var(--medium-text))]">
                Coaching techniques that are grounded in the psychology of high performance. These help sustain changes and can be applied by you as a leader-coach with your people.
              </p>
            </div>

            {/* Bespoke Resources */}
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h3 className="text-xl font-bold text-[hsl(var(--dark-text))] mb-4">
                Bespoke Resources
              </h3>
              <p className="text-[hsl(var(--medium-text))]">
                You will have access to proprietary surveys on leadership, self-leadership, winning teams, and sales. Each has succinct materials to help leverage strengths and enhance developmental areas.
              </p>
            </div>

            {/* Useful Feedback */}
            <div className="bg-white rounded-lg p-6 shadow-sm border md:col-span-2">
              <h3 className="text-xl font-bold text-[hsl(var(--dark-text))] mb-4">
                Useful Feedback
              </h3>
              <p className="text-[hsl(var(--medium-text))]">
                Feedback from relevant colleagues guides coaching. With your permission, Luke will converse with these stakeholders to better understand the material things you are doing well and things you could do better.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button
              onClick={() => setIsContactOpen(true)}
              className="heath-button text-lg px-8 py-3"
            >
              Contact
            </Button>
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
