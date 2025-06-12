import { Link } from "wouter";
import coacheLogo from "@assets/Coacha Logo LATEST_1749609249362.png";

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Tagline */}
          <div className="md:col-span-2">
            <img 
              src={coacheLogo} 
              alt="Coacha"
              className="h-8 w-auto mb-4"
            />
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
                <Link href="/contact">
                  <span className="hover:text-[hsl(var(--dark-text))] transition-colors duration-200 cursor-pointer">
                    Contact
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/team">
                  <span className="hover:text-[hsl(var(--dark-text))] transition-colors duration-200 cursor-pointer">
                    Our Team
                  </span>
                </Link>
              </li>
              <li>
                <a 
                  href="https://heathcoaching.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[hsl(var(--dark-text))] transition-colors duration-200"
                >
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
            <Link href="/privacy-policy">
              <span className="text-[hsl(var(--medium-text))] text-sm hover:text-[hsl(var(--dark-text))] transition-colors duration-200 cursor-pointer">
                Privacy Policy
              </span>
            </Link>
            <Link href="/terms-of-service">
              <span className="text-[hsl(var(--medium-text))] text-sm hover:text-[hsl(var(--dark-text))] transition-colors duration-200 cursor-pointer">
                Terms of Service
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
