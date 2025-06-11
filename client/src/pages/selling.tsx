import TestimonialCard from "@/components/testimonial-card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Selling() {
  const testimonials = [
    {
      quote: "The Value-Centred Selling approach completely transformed our sales team's performance and client relationships.",
      name: "Jennifer Park",
      title: "Sales Director",
      company: "Enterprise Solutions"
    },
    {
      quote: "Luke's selling methodology helped us focus on creating authentic value rather than just closing deals.",
      name: "Robert Kim",
      title: "Account Manager",
      company: "Business Services Ltd"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[hsl(var(--cream))] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[hsl(var(--dark-text))] leading-tight mb-6">
              <span className="colored-underline-red">Selling</span>
            </h1>
            <p className="text-lg md:text-xl text-[hsl(var(--medium-text))] mb-8 max-w-3xl mx-auto">
              Transform sales performance through human-centered methods.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg border-t-4 border-[hsl(var(--coacha-red))] p-8">
              <h3 className="text-2xl font-bold text-[hsl(var(--dark-text))] mb-4">
                Value-Centred Selling Workshop
              </h3>
              <p className="text-[hsl(var(--medium-text))] mb-6">
                Equip your sales team with a modern approach that prioritizes authentic value creation over traditional selling techniques.
              </p>
              <Button className="w-full bg-[hsl(var(--dark-text))] text-white hover:bg-gray-800">
                Learn More
              </Button>
            </div>

            <div className="bg-white rounded-lg shadow-lg border-t-4 border-[hsl(var(--coacha-red))] p-8">
              <h3 className="text-2xl font-bold text-[hsl(var(--dark-text))] mb-4">
                Value-Centred Selling Assessment
              </h3>
              <p className="text-[hsl(var(--medium-text))] mb-6">
                Understand your sales team's natural selling styles, strengths, and development areas with our comprehensive assessment.
              </p>
              <Button className="w-full bg-[hsl(var(--dark-text))] text-white hover:bg-gray-800">
                Learn More
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
              What our clients say about our Selling services
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
