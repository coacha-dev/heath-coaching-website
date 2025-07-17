import { useState } from "react";
import { Button } from "@/components/ui/button";
import ContactDialog from "@/components/contact-dialog";

export default function OneToOneCoaching() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16" style={{
        background: 'linear-gradient(to bottom, white 0%, rgba(239, 246, 255, 0.3) 40%, rgba(219, 234, 254, 0.4) 70%, rgba(219, 234, 254, 0.5) 100%)'
      }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            One-To-One Coaching
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Luke has been coaching C-level executives and other high-value roles since 2002. In your coaching program, you can rely on:
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16" style={{
        background: 'linear-gradient(to bottom, rgba(219, 234, 254, 0.5) 0%, rgba(219, 234, 254, 0.4) 30%, rgba(239, 246, 255, 0.3) 60%, white 90%)'
      }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:border-[#0081ea] transition-colors">
            <h3 className="text-2xl font-bold mb-4 text-[#0081ea]">
              Support and Challenge
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Sessions may be challenging but you should always feel strongly supported – this includes 7-day access to help you accomplish your goals. All conversations are confidential.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:border-[#0081ea] transition-colors">
            <h3 className="text-2xl font-bold mb-4 text-[#0081ea]">
              Commercial Experience
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Insights gained coaching leaders in more than forty countries, across industries, and stage of business. Founded and run several businesses and was an investment banker and portfolio manager for ten years at Schroders and Societe Generale.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:border-[#0081ea] transition-colors">
            <h3 className="text-2xl font-bold mb-4 text-[#0081ea]">
              Behavioural Science
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Coaching techniques that are grounded in the psychology of high performance. These help sustain changes and can be applied by you as a leader-coach with your people.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:border-[#0081ea] transition-colors">
            <h3 className="text-2xl font-bold mb-4 text-[#0081ea]">
              Bespoke Resources
            </h3>
            <p className="text-gray-700 leading-relaxed">
              You will have access to proprietary surveys on leadership, self-leadership, winning teams, and sales. Each has succinct materials to help leverage strengths and enhance developmental areas.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:border-[#0081ea] transition-colors">
            <h3 className="text-2xl font-bold mb-4 text-[#0081ea]">
              Useful Feedback
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Feedback from relevant colleagues guides coaching. With your permission, Luke will converse with these stakeholders to better understand the material things you are doing well and things you could do better.
            </p>
          </div>

          <div className="text-center pt-8">
            <Button
              onClick={() => setIsContactOpen(true)}
              className="heath-gradient-button px-8 py-3 text-lg font-medium rounded-md"
            >
              Contact
            </Button>
          </div>
        </div>
      </section>

      <ContactDialog open={isContactOpen} onOpenChange={setIsContactOpen} />
    </>
  );
}