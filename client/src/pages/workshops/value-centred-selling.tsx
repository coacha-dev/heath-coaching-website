import { useState } from "react";
import { Button } from "@/components/ui/button";
import ContactDialog from "@/components/contact-dialog";

export default function ValueCentredSellingWorkshop() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16" style={{
        background: 'linear-gradient(to bottom, white 0%, rgba(220, 7, 37, 0.02) 40%, rgba(220, 7, 37, 0.03) 70%, rgba(220, 7, 37, 0.05) 100%)'
      }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            <span style={{
              textDecoration: 'underline',
              textDecorationColor: '#dc0725',
              textDecorationThickness: '3px',
              textUnderlineOffset: '4px'
            }} className="md:!decoration-4 md:!underline-offset-8">Value-Centred Selling</span>
            <br /><span style={{marginTop: '0.25rem', display: 'inline-block'}} className="md:!mt-2">Workshop</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Accelerate how salespeople win sales and enjoy their work.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="pt-4 pb-16" style={{
        background: 'linear-gradient(to bottom, rgba(220, 7, 37, 0.05) 0%, rgba(220, 7, 37, 0.03) 30%, rgba(220, 7, 37, 0.02) 60%, white 90%)'
      }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Content Box */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:border-[#dc0725] transition-colors mb-8">
            <p className="text-gray-700 leading-relaxed text-lg mb-8">
              This half-day workshop helps salespeople sell more by being value-centred. It focuses on the big 3 drivers of selling success: winning mindset, contact energy, and dollar-productive behaviours. We share practical techniques that can immediately be used.
            </p>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-[#dc0725] mb-4 text-xl">1. Winning Mindset</h4>
                <p className="text-gray-700 leading-relaxed">
                  Knowing the value we create is authentic and powerful. We discuss the value we want to give and receive each client meeting, knowing what motivates us to sell, having annual SMART goals, and having ambitious weekly process goals.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-[#dc0725] mb-4 text-xl">2. Contact Energy</h4>
                <p className="text-gray-700 leading-relaxed">
                  The energy we bring to selling unlocks value. We discuss bringing positive energy to client conversations, overcoming the different forms of contact reluctance, and quickly rebounding from prospects saying 'no'.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-[#dc0725] mb-4 text-xl">3. Dollar Productive Behaviours</h4>
                <p className="text-gray-700 leading-relaxed">
                  Regular valuable actions compound sales success. We discuss optimising sales team meetings, daily activity plans, matching value to the stage of the buying cycle, language for closing sales, and being confident and skilful negotiating price and terms.
                </p>
              </div>
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
              className="bg-[#dc0725] text-white px-8 py-3 text-lg font-medium rounded-md group transition-all duration-200 hover:bg-transparent hover:text-[#dc0725] border-2 border-transparent hover:border-[#dc0725]"
            >
              Contact Us <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Button>
          </div>
        </div>
      </section>

      <ContactDialog open={isContactOpen} onOpenChange={setIsContactOpen} />
    </>
  );
}