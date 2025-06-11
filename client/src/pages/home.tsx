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
      title: "Managing Director",
      company: "Fidelity International"
    },
    {
      quote: "Luke has been a tremendous help in my career - he is a very good listener and his advice is always sensible and to the point.",
      name: "Nicholas Scarf",
      title: "Managing Director",
      company: "Newedge Singapore"
    },
    {
      quote: "GoGet Carshare would be nowhere without the support of Luke Heath, especially during a particularly challenging period.",
      name: "Nic Lowe",
      title: "Founder",
      company: "GoGet Carshare"
    },
    {
      quote: "A considerate listener and mentor, always available to provide guidance and support.",
      name: "Lisa Boyd",
      title: "Fund Operations"
    }
  ];

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
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(var(--dark-text))] mb-4">
              What our clients say
            </h2>
          </div>

          {/* Desktop Grid Layout */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>

          {/* Mobile Horizontal Scroll */}
          <div className="lg:hidden">
            <div className="testimonial-scroll flex gap-6 overflow-x-auto pb-4 mb-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>

          <div className="text-center">
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
