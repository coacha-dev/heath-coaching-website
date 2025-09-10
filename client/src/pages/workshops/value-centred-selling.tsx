import { useState } from "react";
import { Button } from "@/components/ui/button";
import ContactDialog from "@/components/contact-dialog";

export default function ValueCentredSellingWorkshop() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16" style={{
        background: 'linear-gradient(to bottom, white 0%, rgba(220, 7, 37, 0.1) 40%, rgba(220, 7, 37, 0.15) 70%, rgba(220, 7, 37, 0.2) 100%)'
      }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{
            textDecoration: 'underline',
            textDecorationColor: '#dc0725',
            textDecorationThickness: '4px',
            textUnderlineOffset: '8px'
          }}>
            Value-Centred Selling Workshop
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Accelerate how salespeople win sales and enjoy their work.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16" style={{
        background: 'linear-gradient(to bottom, rgba(220, 7, 37, 0.2) 0%, rgba(220, 7, 37, 0.15) 30%, rgba(220, 7, 37, 0.1) 60%, white 90%)'
      }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:border-[#dc0725] transition-colors mb-8 text-center">
            <p className="text-gray-700 leading-relaxed text-lg mb-8">
              This half-day workshop helps salespeople sell more by being value-centred. It focuses on the big 3 drivers of selling success: winning mindset, contact energy, and dollar-productive behaviours. We share practical techniques that can immediately be used.
            </p>
          </div>

          {/* Three Sales Drivers Boxes */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:border-[#dc0725] transition-colors">
              <h4 className="font-bold text-[#dc0725] mb-4 text-xl text-center">1. Winning Mindset</h4>
              <p className="text-gray-700 leading-relaxed">
                Knowing the value we create is authentic and powerful. We discuss the value we want to give and receive each client meeting, knowing what motivates us to sell, having annual SMART goals, and having ambitious weekly process goals.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:border-[#dc0725] transition-colors">
              <h4 className="font-bold text-[#dc0725] mb-4 text-xl text-center">2. Contact Energy</h4>
              <p className="text-gray-700 leading-relaxed">
                The energy we bring to selling unlocks value. We discuss bringing positive energy to client conversations, overcoming the different forms of contact reluctance, and quickly rebounding from prospects saying 'no'.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:border-[#dc0725] transition-colors">
              <h4 className="font-bold text-[#dc0725] mb-4 text-xl text-center">3. Dollar Productive Behaviours</h4>
              <p className="text-gray-700 leading-relaxed">
                Regular valuable actions compound sales success. We discuss optimising sales team meetings, daily activity plans, matching value to the stage of the buying cycle, language for closing sales, and being confident and skilful negotiating price and terms.
              </p>
            </div>
          </div>

          {/* Includes */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:border-[#dc0725] transition-colors mb-8">
            <h3 className="text-2xl font-bold mb-6 text-[#dc0725]">
              Includes:
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#dc0725] mr-3">•</span>
                <span>Face-to-face delivery of the Value-Centred Selling Workshop.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#dc0725] mr-3">•</span>
                <span>Value-Centred Selling Assessment and comprehensive resources.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#dc0725] mr-3">•</span>
                <span>12-months of SalesCoacha newsletters.</span>
              </li>
            </ul>
          </div>

          <div className="text-center pt-8">
            <Button
              onClick={() => setIsContactOpen(true)}
              className="bg-[#dc0725] hover:bg-[#b8051f] text-white px-8 py-3 text-lg font-medium rounded-md"
            >
              Contact Us →
            </Button>
          </div>
        </div>
      </section>

      <ContactDialog open={isContactOpen} onOpenChange={setIsContactOpen} />
    </>
  );
}