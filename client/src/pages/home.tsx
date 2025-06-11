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

  // Split testimonials into three rows
  const row1Testimonials = testimonials.slice(0, 5);
  const row2Testimonials = testimonials.slice(5, 10);
  const row3Testimonials = testimonials.slice(10, 15);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#faf8f5] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[hsl(var(--dark-text))] leading-tight mb-6">
              We build the skills that drive{" "}
              <span className="colored-underline-blue">progress</span>,{" "}
              <span className="colored-underline-purple">influence</span> and{" "}
              <span className="colored-underline-red">revenue</span>.
            </h1>
            <p className="text-lg md:text-xl text-[hsl(var(--medium-text))] mb-8 max-w-3xl mx-auto">
              Coacha delivers practical, premium training for the people driving your organisation forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="coacha-button"
              >
                Explore Services
              </Button>
              <Button
                size="lg"
                onClick={() => setIsContactOpen(true)}
                className="coacha-button"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Scroller Section */}
      <section className="bg-[#faf8f5] py-12">
        <LogoScroller />
      </section>

      {/* Services Section */}
      <section className="bg-[#f6f2ed] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(var(--dark-text))] mb-4">
              Our Services
            </h2>
            <p className="text-lg md:text-xl text-[hsl(var(--medium-text))] max-w-3xl mx-auto">
              Comprehensive solutions to enhance individual and organizational performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Winning Careers"
              description="Workshops, tools & insights to build high-performing professionals"
              theme="blue"
              href="/winning-careers"
            />
            <ServiceCard
              title="Leadership"
              description="Grow exceptional leaders with science-backed development"
              theme="purple"
              href="/leadership"
            />
            <ServiceCard
              title="Selling"
              description="Transform your sales performance through human-centred methods"
              theme="red"
              href="/selling"
            />
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

          {/* Three Row Auto-Scrolling Layout */}
          <div className="space-y-6">
            {/* Row 1 - Left to Right */}
            <div className="testimonial-row-container">
              <div className="testimonial-row testimonial-row-lr">
                {[...row1Testimonials, ...row1Testimonials].map((testimonial, index) => (
                  <div key={`row1-${index}`} className="testimonial-card-auto bg-white rounded-lg shadow-md p-4 mx-3 flex-shrink-0">
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
                  <div key={`row2-${index}`} className="testimonial-card-auto bg-white rounded-lg shadow-md p-4 mx-3 flex-shrink-0">
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

            {/* Row 3 - Left to Right */}
            <div className="testimonial-row-container">
              <div className="testimonial-row testimonial-row-lr">
                {[...row3Testimonials, ...row3Testimonials].map((testimonial, index) => (
                  <div key={`row3-${index}`} className="testimonial-card-auto bg-white rounded-lg shadow-md p-4 mx-3 flex-shrink-0">
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
                className="coacha-button"
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
