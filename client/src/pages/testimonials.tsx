import { Link } from "wouter";
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
    "NAB", "Nissan", "Nomura", "Orbis", "Pallion", "Platinum Asset Management"
  ];

  const clientTestimonials = [
    {
      quote: "Luke is a tremendous person, moreover, a brilliant executive coach with an innate ability to listen. He strikes the balance between a curious mind, with a systematic questioning model, and a capacity to distil a lot of information into tangible, digestible concepts which help inform a go forward approach. I leave every discussion with energy, a consolidation of thinking, and a confidence that I have been able to use Luke as a sounding board levering his own perspectives and unique experience. It's is a remarkable skill he has. Further, I have often used Luke to help form and facilitate our strategic offsites. He is adept at teasing out discussion that cuts to the heart of the conversation. Luke has the wherewithal to challenge in a conciliatory manner. I could not recommend Luke any more highly.",
      name: "Jason Ciccolallo",
      title: "Managing Director, Orbis Investments"
    },
    {
      quote: "Luke was recommended to me several years ago, and we had some invaluable one to one sessions. He brought a combination of industry understanding, personal compassion and empathy, and a blend of academic and practical insights and frameworks. Luke listens intently and went deep in pointing me towards discovering better solutions. In the last year, Platinum engaged him to facilitate a range of conversations within our corporate, some challenging, but ultimately, deeply rewarding and actionable.",
      name: "Douglas Isles",
      title: "Head of Investment, Platinum Investment Management"
    },
    {
      quote: "I am happy to highly recommend Luke as an Executive Coach, as Luke has a flair for the psychology of corporations as well as adaptive style, to suit many leaders' individual needs.",
      name: "Alva Devoy",
      title: "Managing Director, Fidelity International"
    },
    {
      quote: "Luke has been a tremendous help in my career. He is a very good listener and his advice is always sensible and to the point. He has steered me to play to my strengths and has helped me improve my weaknesses. His insight into how to deal with difficult situations has proven to be unparalleled. I always come away from a discussion with Luke feeling like I have improved myself.",
      name: "Nicholas Scarf",
      title: "Managing Director and Country Head, Newedge Singapore"
    },
    {
      quote: "GoGet Carshare would be nowhere without the support of Luke Heath. A few years ago, during a particularly challenging period, Luke convinced me to stick at it and continue the business. This considered and dispassionate advice from someone who has experienced similar challenges was the difference between success and failure for us. Thanks again Luke!",
      name: "Nic Lowe",
      title: "Founder, GoGet Carshare"
    },
    {
      quote: "A considered intellectual, patient listener and passionate coach and mentor. Always generous with time, ideas and positive energy, and uncompromising in pursuit of excellent outcomes. I count myself privileged to benefit from Luke's wisdom and experience in shaping my career.",
      name: "Lisa Boyd",
      title: "Fund Operations Senior Manager, Janus Henderson"
    },
    {
      quote: "Luke is a rare breed, whippet smart, full of empathy and insight. He understands the complexities within organisations and their inextricable connection to the people that lead them. Luke has provided me with an understanding of my own skills and strengths and the ability to understand others. He is an incredibly talented coach.",
      name: "Brooke Lloyd",
      title: "Director, Cox Architecture"
    },
    {
      quote: "Very few, if any coaches have the intellect and conceptual understanding (of people, business and overall working environments) that Luke Heath has.",
      name: "Daniel Wise",
      title: "Global Head of Property, Orica"
    },
    {
      quote: "I arranged for Luke to host a cross divisional coaching session to motivate a group of 50 company employees via VC across 3 locations. This session was a phenomenal success due to Luke's clear and strategic thinking on converting the brief. The session showcased Luke's unique ability to listen intently and engage an audience across a diverse range of personalities, roles and ranks.",
      name: "Chelsea Wise",
      title: "Director, Private Banking, Credit Suisse"
    },
    {
      quote: "Luke was knowledgeable, engaging, and quick to understand our business. Possessing an exceptional business acumen and an in-depth knowledge of human psychology, Luke was able to offer insightful and innovative ideas to create deeper client relationships, expand our referral networks and engage new prospective clients. It was time well spent and I would highly recommend Luke for those looking to grow their business.",
      name: "Scott Spain",
      title: "Director, Private Wealth Management, JB Were"
    },
    {
      quote: "Luke facilitated a few short, sharp sessions over a couple week period which helped us get clear on what our fellow senior leaders in the business were doing well along with areas of improvement for each to work on. What we didn't bargain for thought was the new level of respect and appreciation we all gained for each other as a result of his process. We have grown professionally and are now communicating with each other in a way that we previously didn't know was possible.",
      name: "Drew Mansur",
      title: "Co-Founder, TileCloud"
    },
    {
      quote: "Luke did a superb job facilitating our strategy retreat and guiding a consensus outcome. There is no way we would have had the success we did without his advice and skill. We highly recommended Luke's services.",
      name: "Chris Millman and Ian Smith",
      title: "Director & Chair; Director & Managing Partner, Cox Architecture"
    },
    {
      quote: "I have had the pleasure of working with Luke Heath for the past 12 months. Since our first session I have learnt about myself and grown incredibly as an adviser. Luke has a unique ability of being able to guide and subtly encourage me to achieve far beyond my expectations. A proven performer with enormous insight to business, I would and do recommend his services to those who wish to succeed.",
      name: "Hamish Church",
      title: "Partner, Crestone Wealth Management"
    },
    {
      quote: "Luke Heath is a most professional executive coach on both national and international levels. He has an outstanding intellect, emotional intelligence, and well-honed commercial acumen. He has provided my clients the highest level of coaching and he is the 'coaches' coach'. I seriously recommend him for his ability to deliver unsurpassed value time and time again to executives and their organisations.",
      name: "Nancy Kazdan",
      title: "CEO, Kazdan Group"
    },
    {
      quote: "Luke Heath has been a trusted adviser to me and my business interests for fifteen years. He has the great ability to quickly get to the heart of an issue.",
      name: "Ajit Wijesinghe",
      title: "Entrepreneur"
    },
    {
      quote: "At a critical point in my career, Luke Heath helped me to move on to the next level. His professional expertise and individualised approach were instrumental in getting me to where I am in a highly competitive field of my profession.",
      name: "Rex Chan",
      title: "Urologist"
    },
    {
      quote: "I have over twenty years financial markets' experience and have completed many sales and management courses. The best aspects of all those courses barely match the quality and insight that Luke Heath provides.",
      name: "Andrew Hardman",
      title: "Director, Corporate Sales, Westpac"
    },
    {
      quote: "Luke Heath has been a valuable resource in identifying core developmental issues and personal growth opportunities. His willingness to listen and ability to clearly dissect an issue helped me develop better working relationships, increased productivity, and retain my focus on both firm and personal goals.",
      name: "Beau Dixon",
      title: "Investment Banker, Investec"
    },
    {
      quote: "Luke is my favourite person in the market to speak to, he is highly intelligent yet accessible and a genuine listener, very rare qualities. I've been fortunate enough to have Luke's input on several career decisions and I can honestly say that his logical processes and attention to detail have been invaluable.",
      name: "Rhett Dinsdale",
      title: "Proprietary Trader, Credit Suisse"
    },
    {
      quote: "Luke Heath has advised me in senior banking roles across India, Indonesia, and Australia for 20 years. He is at the forefront of critical thinking across psychology and business and has the rare ability to translate theoretical knowledge to practical solutions for complex problems.",
      name: "Nicholas Evans",
      title: "Director, Private Wealth Management, JB Were"
    },
    {
      quote: "I have called on Luke over the years for career advice, mentoring and coaching. His straight-forward demeanour, coupled with his vast industry knowledge, has provided me much needed clarity and direction. He will remain a confidant to me throughout my career and I hold him in extremely high regard.",
      name: "Al Fullerton",
      title: "Venture Capitalist"
    },
    {
      quote: "Luke is the rock star of career coaches.",
      name: "Adam De Michiel",
      title: "Listed Derivatives Sales"
    },
    {
      quote: "Luke has coached me in an executive capacity over a period of 6 years. I have found Luke to be dynamic, pragmatic, empathetic and professional. I highly recommend Luke for anyone wishing to further their coaching skill set, whilst also getting the added benefit of personal growth.",
      name: "Justin Williams",
      title: "Head of Trader Development, Genesis Trading"
    },
    {
      quote: "Luke provided outplacement coaching to 35 of our people from Managing Directors to Junior Accountants. Feedback on Luke is consistently excellent.",
      name: "Diana Lollato",
      title: "Managing Director, Lloyds International"
    },
    {
      quote: "I have had the pleasure of engaging with Luke personally and professionally for more than 30 years. I don't think there has ever been a meeting with Luke where I have not learned something useful. An enduring relationship I value extremely highly.",
      name: "Toby Lawson",
      title: "Chief Country Officer and CEO, Societe Generale India"
    },
    {
      quote: "Luke has provided me with invaluable advice which has not only helped me to succeed but has also improved my health, well-being, and overall happiness. He is exceptionally professional and caring by nature.",
      name: "Joe Jin",
      title: "Vice President, PIMCO"
    },
    {
      quote: "Luke has the insight to steer you through the complex and the trivial. He quickly focuses you on tangible realisable goals, whilst assisting you to appreciate the truly insurmountable.",
      name: "Peter Monford",
      title: "Manager, Australian Tax Office"
    },
    {
      quote: "Luke Heath's coaching expertise is unparalleled. His strategic guidance and deep understanding of both business and psychology fronts have been paramount in my career advancement. I highly recommend Luke for anyone seeking to excel in leadership roles.",
      name: "Danail Stanev",
      title: "Chief Risk Officer, Koa Capital"
    },
    {
      quote: "Few people approach their work with the ethics, professionalism, passion, and dedication that Luke did with me. I couldn't have asked for more.",
      name: "Antony Selby",
      title: "Financial Planner"
    },
    {
      quote: "Luke's insight, strategic advice and tactical direction was critical in preparing me to navigate a challenging selection process. What I found even more valuable was his ability to incrementally increase my confidence in the value of my experience, performance and decision-making.",
      name: "William Brown",
      title: "CFO, RedR"
    },
    {
      quote: "I found Luke Heath extremely discrete and professional to deal with, while maintaining genuine concern for the people that he was supporting. The outplacement reviews were all extremely positive both for Luke and also for GTS in providing this service.",
      name: "Murray Chatfield",
      title: "COO, GTS (Goldman Sachs JBWere fund)"
    }
  ];

  return (
    <div className="min-h-screen" style={{
      background: 'linear-gradient(to bottom, white 0%, rgba(239, 246, 255, 0.2) 30%, rgba(219, 234, 254, 0.3) 70%, white 100%)'
    }}>
      {/* Hero Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(var(--dark-text))] mb-6">
              Client Testimonials
            </h1>
            <p className="text-lg md:text-xl text-[hsl(var(--medium-text))] mb-8">
              Heath Coaching has worked with companies across the globe, including:
            </p>
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap justify-center gap-1 md:gap-2 text-xs md:text-sm">
                {companies.map((company, index) => (
                  <span key={index} className="inline-block bg-white border border-gray-200 hover:border-[#0081ea] px-2 md:px-3 py-1 rounded shadow-md hover:shadow-lg transition-all duration-200 text-gray-700 hover:text-[#0081ea]">
                    {company}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials */}
      <section className="pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[hsl(var(--dark-text))] mb-4">
              See what our clients say about working with Heath Coaching
            </h2>
          </div>

          <div className="space-y-4 md:space-y-6">
            {clientTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-3 md:p-4 shadow-md hover:shadow-lg border border-gray-200 hover:border-[#0081ea] transition-all duration-200">
                <blockquote className="text-sm md:text-base text-[hsl(var(--dark-text))] mb-2 md:mb-3 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <p className="font-semibold text-[hsl(var(--dark-text))] text-xs md:text-sm">{testimonial.name}</p>
                  <p className="text-[hsl(var(--medium-text))] text-xs md:text-xs">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-[hsl(var(--dark-text))] mb-4">
            Ready to join our clients?
          </h3>
          <p className="text-lg text-[hsl(var(--medium-text))] mb-8">
            Contact us to discuss how Heath Coaching can help your team develop the skills needed for success.
          </p>
          <Link href="/contact">
            <button className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-transparent hover:text-black border-2 border-black transition-all duration-200 group">
              Contact Us Today <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">→</span>
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
