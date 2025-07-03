import { Mail, Phone } from "lucide-react";
import lukeHeadshot from "@assets/Luke Heath Headshot_1749691418623.jpg";
import joshHeadshot from "@assets/Josh Heath Headshot_1749691421446.jpg";

export default function Team() {
  return (
    <div className="min-h-screen" style={{
      background: 'linear-gradient(to bottom, white 0%, rgba(239, 246, 255, 0.2) 30%, rgba(219, 234, 254, 0.3) 70%, white 100%)'
    }}>
      {/* Team Members Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(var(--dark-text))]">
              Our Team
            </h1>
          </div>

          <div className="space-y-12">
            {/* Luke Heath */}
            <div className="heath-gradient rounded-lg shadow-lg border border-blue-100 p-8">
              <div className="flex gap-8 mb-6">
                <div className="flex-shrink-0">
                  <img
                    src={lukeHeadshot}
                    alt="Luke Heath"
                    className="w-40 h-40 object-cover rounded-full"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Luke Heath
                  </h3>
                  <p className="text-lg text-white/90 font-medium mb-4">
                    Executive Coach & Founder
                  </p>
                  <div className="space-y-2">
                    <a href="mailto:luke@heathcoaching.com" className="flex items-center text-white hover:text-white/80 transition-colors">
                      <Mail className="w-4 h-4 mr-2 text-white" />
                      luke@heathcoaching.com
                    </a>
                    <a href="tel:+61417588346" className="flex items-center text-white hover:text-white/80 transition-colors">
                      <Phone className="w-4 h-4 mr-2 text-white" />
                      +61 417 588 346
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-white/90">
                  Luke Heath brings over 20 years of experience in executive coaching and leadership development. As a former investment banker with Schroders and Societe Generale, Luke transitioned to founding human resources consulting businesses in 2002. He specializes in one-to-one executive coaching, helping leaders unlock their potential and accelerate their career growth through personalized coaching sessions.
                </p>
                <p className="text-white/90 italic">
                  Luke enjoys being in the surf, SCUBA diving, and going hiking with old Schroders' mates.
                </p>
                <div>
                  <h4 className="font-semibold text-white mb-2">Qualifications:</h4>
                  <ul className="text-sm text-white/90 space-y-1">
                    <li>• Master of HRM and Coaching (Sydney University)</li>
                    <li>• Company Directors Diploma and FAICD</li>
                    <li>• Bachelor of Arts (Melbourne University)</li>
                    <li>• Member of Institute of Coaching (Harvard / McLean)</li>
                    <li>• Mental Health First Aid Certificate</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Josh Heath */}
            <div className="heath-gradient rounded-lg shadow-lg border border-blue-100 p-8">
              <div className="flex gap-8 mb-6">
                <div className="flex-shrink-0">
                  <img
                    src={joshHeadshot}
                    alt="Josh Heath"
                    className="w-40 h-40 object-cover rounded-full"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Josh Heath
                  </h3>
                  <p className="text-lg text-white/90 font-medium mb-4">
                    Product Director
                  </p>
                  <div className="space-y-2">
                    <a href="mailto:josh@coacha.co" className="flex items-center text-white hover:text-white/80 transition-colors">
                      <Mail className="w-4 h-4 mr-2 text-white" />
                      josh@coacha.co
                    </a>
                    <a href="tel:+61423391445" className="flex items-center text-white hover:text-white/80 transition-colors">
                      <Phone className="w-4 h-4 mr-2 text-white" />
                      +61 423 391 445
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-white/90">
                  Josh has worked for a decade in e-commerce, digital asset management, and digital media. He completed business degrees but found his passion in the creative and technical aspects of digital product development. Josh brings a unique blend of business acumen and technical expertise to HeathCoaching's digital initiatives.
                </p>
                <div>
                  <h4 className="font-semibold text-white mb-2">Qualifications:</h4>
                  <ul className="text-sm text-white/90 space-y-1">
                    <li>• Bachelor of Commerce (Sydney University)</li>
                    <li>• Bachelor of Advanced Studies (Sydney University)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
