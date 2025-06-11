import ServiceCard from "@/components/service-card";
import TestimonialCard from "@/components/testimonial-card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function WinningCareers() {
  const testimonials = [
    {
      quote: "The Winning Careers workshop transformed how our team approaches professional development. The insights were immediately actionable.",
      name: "Sarah Johnson",
      title: "HR Director",
      company: "Tech Solutions Inc"
    },
    {
      quote: "Luke's career coaching helped me identify my strengths and develop a clear path forward in my professional journey.",
      name: "Michael Chen",
      title: "Senior Manager",
      company: "Financial Services Group"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[hsl(var(--cream))] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[hsl(var(--dark-text))] leading-tight mb-6">
              <span className="colored-underline-blue">Winning Careers</span>
            </h1>
            <p className="text-lg md:text-xl text-[hsl(var(--medium-text))] mb-8 max-w-3xl mx-auto">
              Equip your team with the tools, insights, and strategies they need to thrive in today's competitive landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg border-t-4 border-[hsl(var(--coacha-blue))] p-8">
              <h3 className="text-2xl font-bold text-[hsl(var(--dark-text))] mb-4">
                Winning Careers Workshop
              </h3>
              <p className="text-[hsl(var(--medium-text))] mb-6">
                Empower your employees to take control of their career trajectory and maximize their impact.
              </p>
              <Button className="w-full coacha-button">
                Learn More
              </Button>
            </div>

            <div className="bg-white rounded-lg shadow-lg border-t-4 border-[hsl(var(--coacha-blue))] p-8">
              <h3 className="text-2xl font-bold text-[hsl(var(--dark-text))] mb-4">
                Winning Careers Personality Assessment
              </h3>
              <p className="text-[hsl(var(--medium-text))] mb-6">
                Provide valuable insights into your team's natural tendencies, strengths, and work preferences.
              </p>
              <Button className="w-full coacha-button">
                Learn More
              </Button>
            </div>

            <div className="bg-white rounded-lg shadow-lg border-t-4 border-[hsl(var(--coacha-blue))] p-8">
              <h3 className="text-2xl font-bold text-[hsl(var(--dark-text))] mb-4">
                CareerCoacha Newsletter
              </h3>
              <p className="text-[hsl(var(--medium-text))] mb-6">
                Stay ahead of the curve with our curated insights on career development and professional growth.
              </p>
              <Button className="w-full coacha-button">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[hsl(var(--light-beige))] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(var(--dark-text))] mb-4">
              What our clients say about our Winning Careers services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/testimonials">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-[hsl(var(--dark-text))] text-[hsl(var(--dark-text))] hover:bg-[hsl(var(--dark-text))] hover:text-white transition-all duration-200"
              >
                See all testimonials
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
