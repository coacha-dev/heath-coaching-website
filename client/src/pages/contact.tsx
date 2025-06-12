import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(var(--dark-text))] mb-4">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-[hsl(var(--medium-text))]">
              Ready to build the skills that drive progress, influence and revenue? Get in touch with our team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Luke Heath */}
            <div className="bg-[#faf8f5] rounded-lg p-8">
              <h3 className="text-2xl font-bold text-[hsl(var(--dark-text))] mb-2">
                Luke Heath
              </h3>
              <p className="text-[hsl(var(--coacha-blue))] font-medium mb-6">
                Managing Director, Executive Coach & Trainer
              </p>
              
              <div className="space-y-4">
                <a 
                  href="mailto:luke@coacha.co" 
                  className="flex items-center text-[hsl(var(--medium-text))] hover:text-[hsl(var(--dark-text))] transition-colors"
                >
                  <Mail className="w-5 h-5 mr-3 text-[hsl(var(--coacha-blue))]" />
                  luke@coacha.co
                </a>
                <a 
                  href="tel:+61417588346" 
                  className="flex items-center text-[hsl(var(--medium-text))] hover:text-[hsl(var(--dark-text))] transition-colors"
                >
                  <Phone className="w-5 h-5 mr-3 text-[hsl(var(--coacha-blue))]" />
                  +61 417 588 346
                </a>
              </div>
            </div>

            {/* Josh Heath */}
            <div className="bg-[#faf8f5] rounded-lg p-8">
              <h3 className="text-2xl font-bold text-[hsl(var(--dark-text))] mb-2">
                Josh Heath
              </h3>
              <p className="text-[hsl(var(--coacha-purple))] font-medium mb-6">
                Product Director
              </p>
              
              <div className="space-y-4">
                <a 
                  href="mailto:josh@coacha.co" 
                  className="flex items-center text-[hsl(var(--medium-text))] hover:text-[hsl(var(--dark-text))] transition-colors"
                >
                  <Mail className="w-5 h-5 mr-3 text-[hsl(var(--coacha-purple))]" />
                  josh@coacha.co
                </a>
                <a 
                  href="tel:+61423391445" 
                  className="flex items-center text-[hsl(var(--medium-text))] hover:text-[hsl(var(--dark-text))] transition-colors"
                >
                  <Phone className="w-5 h-5 mr-3 text-[hsl(var(--coacha-purple))]" />
                  +61 423 391 445
                </a>
              </div>
            </div>
          </div>

          {/* General Information */}
          <div className="mt-16 text-center">
            <div className="bg-[#f6f2ed] rounded-lg p-8">
              <h3 className="text-xl font-bold text-[hsl(var(--dark-text))] mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-[hsl(var(--medium-text))] mb-6">
                Contact our team to discuss how Coacha can help your organization develop the skills needed for success.
              </p>
              <p className="text-sm text-[hsl(var(--light-text))]">
                We work with organizations across Australia and internationally to deliver practical, premium training solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}