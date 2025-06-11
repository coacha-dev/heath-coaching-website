import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Tagline */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-[hsl(var(--dark-text))] mb-4">
              Coacha
            </div>
            <p className="text-[hsl(var(--medium-text))] mb-6 max-w-md">
              Unlock performance through leadership, culture & capability
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-[hsl(var(--dark-text))] mb-4">Services</h4>
            <ul className="space-y-2 text-[hsl(var(--medium-text))]">
              <li>
                <Link href="/winning-careers">
                  <span className="hover:text-[hsl(var(--dark-text))] transition-colors duration-200 cursor-pointer">
                    Winning Careers
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/leadership">
                  <span className="hover:text-[hsl(var(--dark-text))] transition-colors duration-200 cursor-pointer">
                    Leadership
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/selling">
                  <span className="hover:text-[hsl(var(--dark-text))] transition-colors duration-200 cursor-pointer">
                    Selling
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-[hsl(var(--dark-text))] mb-4">Company</h4>
            <ul className="space-y-2 text-[hsl(var(--medium-text))]">
              <li>
                <Link href="/testimonials">
                  <span className="hover:text-[hsl(var(--dark-text))] transition-colors duration-200 cursor-pointer">
                    Testimonials
                  </span>
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-[hsl(var(--dark-text))] transition-colors duration-200">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[hsl(var(--dark-text))] transition-colors duration-200">
                  One-to-One Coaching
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[hsl(var(--medium-text))] text-sm">
            © 2025 Coacha. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-[hsl(var(--medium-text))] text-sm hover:text-[hsl(var(--dark-text))] transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-[hsl(var(--medium-text))] text-sm hover:text-[hsl(var(--dark-text))] transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
