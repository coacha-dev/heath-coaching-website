import TestimonialCard from "@/components/testimonial-card";

export default function Testimonials() {
  const companies = [
    "ABC Bullion", "Accenture", "Allan Gray", "ANZ", "ARC", "AT Kearney", 
    "Australian Treasury", "Baptcare", "Bloomberg", "BNP Paribas", "BOQ", 
    "CareerSeekers", "CareerTrackers", "CBA", "Centrepoint Alliance", "Chancellor", 
    "Citigroup", "Cloudwerx", "COX Architecture", "Cox Automotive", "Credit Suisse", 
    "Crestone", "CVC", "Deloitte", "Deutsche Bank", "EY", "Fidelity International", 
    "GBA Capital", "GoGet", "Goldman Sachs", "IBA", "Investec", "Jack Morton Worldwide", 
    "JBWere", "JP Morgan", "ListedReserve", "Lloyds Bank", "Macquarie Bank", 
    "NAB", "Nissan", "Nomura", "Orbis", "Platinum Asset Management"
  ];

  const featuredTestimonials = [
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
      quote: "GoGet Carshare would be nowhere without the support of Luke Heath, especially during a particularly challenging period in our company's development.",
      name: "Nic Lowe",
      title: "Founder",
      company: "GoGet Carshare"
    },
    {
      quote: "A considerate listener and mentor, always available to provide guidance and support when needed most.",
      name: "Lisa Boyd",
      title: "Fund Operations"
    },
    {
      quote: "Luke's coaching methodology is both practical and transformative. His insights have been invaluable to our leadership team.",
      name: "Marcus Thompson",
      title: "CEO",
      company: "Innovation Partners"
    },
    {
      quote: "The leadership development program exceeded our expectations. Our managers are now more confident and effective leaders.",
      name: "Sarah Williams",
      title: "Head of People & Culture",
      company: "Tech Dynamics"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[hsl(var(--cream))] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(var(--dark-text))] mb-4">
              Client Testimonials
            </h1>
            <p className="text-lg md:text-xl text-[hsl(var(--medium-text))] mb-8">
              Coacha has worked with companies across the globe, including:
            </p>
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap justify-center gap-2 text-sm text-[hsl(var(--medium-text))]">
                {companies.map((company, index) => (
                  <span key={index} className="inline-block">
                    {company}
                    {index < companies.length - 1 && ","}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[hsl(var(--dark-text))] mb-8">
              Featured Testimonial
            </h2>
            <div className="bg-[hsl(var(--light-beige))] rounded-lg p-8">
              <blockquote className="text-xl md:text-2xl text-[hsl(var(--dark-text))] italic mb-6">
                "I am happy to highly recommend Luke as an Executive Coach, as Luke has a flair for the psychology of corporations as well as adaptive style, to suit many leaders' individual needs."
              </blockquote>
              <div className="text-center">
                <p className="font-semibold text-[hsl(var(--dark-text))] text-lg">Alva Devoy</p>
                <p className="text-[hsl(var(--medium-text))]">Managing Director, Fidelity International</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials */}
      <section className="bg-[hsl(var(--light-beige))] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--dark-text))] mb-4">
              See what our clients say about working with Coacha
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
