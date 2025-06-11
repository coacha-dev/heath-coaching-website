import { User } from "lucide-react";

export default function Team() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[hsl(var(--cream))] py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(var(--dark-text))] mb-4">
              Our Team
            </h1>
            <p className="text-lg md:text-xl text-[hsl(var(--medium-text))]">
              Meet the founders behind Coacha's mission to build skills that drive progress, influence, and revenue.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Luke Heath */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <User className="h-24 w-24 text-gray-400" />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold text-[hsl(var(--dark-text))] mb-2">
                    Luke Heath
                  </h3>
                  <p className="text-[hsl(var(--coacha-blue))] font-medium mb-4">
                    Managing Director, Executive Coach & Trainer
                  </p>
                  <p className="text-[hsl(var(--medium-text))] mb-6">
                    Luke Heath was an investment banker and portfolio manager for 10 years with Schroders and Societe Generale. Since 2002, he has founded and run human resources consulting businesses. Luke has advised boards and senior leadership teams on strategy, financing, and people and culture. He continues to enjoy coaching and training leaders and their teams across the globe.
                  </p>
                  <p className="text-[hsl(var(--medium-text))] mb-4 italic">
                    Luke enjoys being in the surf, SCUBA diving, and going hiking with old Schroders' mates.
                  </p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-[hsl(var(--dark-text))] mb-2">Qualifications:</h4>
                    <ul className="text-sm text-[hsl(var(--medium-text))] space-y-1">
                      <li>• Master of HRM and Coaching (Sydney University)</li>
                      <li>• Company Directors Diploma and FAICD</li>
                      <li>• Bachelor of Arts (Melbourne University)</li>
                      <li>• Member of Institute of Coaching (Harvard / McLean)</li>
                      <li>• Mental Health First Aid Certificate</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Josh Heath */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <User className="h-24 w-24 text-gray-400" />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold text-[hsl(var(--dark-text))] mb-2">
                    Josh Heath
                  </h3>
                  <p className="text-[hsl(var(--coacha-purple))] font-medium mb-4">
                    Product Director
                  </p>
                  <p className="text-[hsl(var(--medium-text))] mb-6">
                    Josh has worked for a decade in e-commerce, digital asset management, and digital media. He completed business degrees but found his passion in the creative and technical aspects of digital product development. Josh brings a unique blend of business acumen and technical expertise to Coacha's digital initiatives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
