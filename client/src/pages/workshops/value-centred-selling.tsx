import { useState } from "react";
import { Button } from "@/components/ui/button";
import ContactDialog from "@/components/contact-dialog";

export default function ValueCentredSellingWorkshop() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16" style={{
        background: 'linear-gradient(to bottom, white 0%, rgba(239, 246, 255, 0.3) 40%, rgba(219, 234, 254, 0.4) 70%, rgba(219, 234, 254, 0.5) 100%)'
      }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Accelerate how salespeople win sales and enjoy their work.
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16" style={{
        background: 'linear-gradient(to bottom, rgba(219, 234, 254, 0.5) 0%, rgba(219, 234, 254, 0.4) 30%, rgba(239, 246, 255, 0.3) 60%, white 90%)'
      }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:border-[#dc0725] transition-colors mb-8">
            <p className="text-gray-700 leading-relaxed text-lg mb-8">
              This half-day workshop helps salespeople sell more by being value-centred.  It focuses on the big 3 drivers of selling success: winning mindset, contact energy, and dollar-productive behaviours.  We share practical techniques that can immediately be used.
            </p>
            <div className="space-y-6 text-gray-700">
              <div>
                <h4 className="font-bold text-[#dc0725] mb-2">1.  WINNING MINDSET</h4>
                <p>Knowing the value we create is authentic and powerful.  We discuss the value we want to give and receive each client meeting, knowing what motivates us to sell, having annual SMART goals, and having ambitious weekly process goals.</p>
              </div>
              <div>
                <h4 className="font-bold text-[#dc0725] mb-2">2.  CONTACT ENERGY</h4>
                <p>The energy we bring to selling unlocks value.  We discuss bringing positive energy to client conversations, overcoming the different forms of contact reluctance, and quickly rebounding from prospects saying 'no'.</p>
              </div>
              <div>
                <h4 className="font-bold text-[#dc0725] mb-2">3.  DOLLAR PRODUCTIVE BEHAVIOURS</h4>
                <p>Regular valuable actions compound sales success.  We discuss optimising sales team meetings, daily activity plans, matching value to the stage of the buying cycle, language for closing sales, and being confident and skilful negotiating price and terms.</p>
              </div>
            </div>
          </div>

          {/* Includes */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:border-[#dc0725] transition-colors mb-8">
            <h3 className="text-2xl font-bold mb-6 text-[#dc0725]">
              INCLUDES:
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