import TestimonialCard from "@/components/testimonial-card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Leadership() {
  const testimonials = [
    {
      quote: "The Triple Intelligence Leadership workshop gave our managers a comprehensive framework for effective leadership.",
      name: "David Rodriguez",
      title: "VP of Operations",
      company: "Manufacturing Corp"
    },
    {
      quote: "Luke's leadership assessment revealed insights that fundamentally changed how I approach team management.",
      name: "Emma Thompson",
      title: "Team Lead",
      company: "Consulting Group"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#faf8f5] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[hsl(var(--dark-text))] leading-tight mb-6">
              <span className="colored-underline-purple">Leadership</span>
            </h1>
            <p className="text-lg md:text-xl text-[hsl(var(--medium-text))] mb-8 max-w-3xl mx-auto">
              Develop exceptional leadership capabilities with our science-backed approach.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg border-t-4 border-[hsl(var(--coacha-purple))] p-8">
              <h3 className="text-2xl font-bold text-[hsl(var(--dark-text))] mb-4">
                Triple Intelligence Leadership Workshop
              </h3>
              <p className="text-[hsl(var(--medium-text))] mb-6">
                Develop balanced leadership skills across rational, emotional, and social domains.
              </p>
              <Button className="w-full coacha-button">
                Learn More
              </Button>
            </div>

            <div className="bg-white rounded-lg shadow-lg border-t-4 border-[hsl(var(--coacha-purple))] p-8">
              <h3 className="text-2xl font-bold text-[hsl(var(--dark-text))] mb-4">
                Triple Intelligence Leadership Assessment
              </h3>
              <p className="text-[hsl(var(--medium-text))] mb-6">
                Gain insights into your leadership profile across three critical intelligence domains.
              </p>
              <Button className="w-full coacha-button">
                Learn More
              </Button>
            </div>

            <div className="bg-white rounded-lg shadow-lg border-t-4 border-[hsl(var(--coacha-purple))] p-8">
              <h3 className="text-2xl font-bold text-[hsl(var(--dark-text))] mb-4">
                LeaderCoacha Newsletter
              </h3>
              <p className="text-[hsl(var(--medium-text))] mb-6">
                Receive the latest research and insights to enhance your leadership effectiveness.
              </p>
              <Button className="w-full coacha-button">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#f6f2ed] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(var(--dark-text))] mb-4">
              What our clients say about our Leadership services
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
                size="lg"
                className="coacha-button"
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
