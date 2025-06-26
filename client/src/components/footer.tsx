import { Link } from "wouter";
import heathLogo from "@assets/Asset 1@2x_1750899479635.png";

export default function Footer() {
  return (
    <footer className="bg-white py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Tagline */}
          <div className="md:col-span-2">
            <img 
              src={heathLogo} 
              alt="HeathCoaching"
              className="h-8 w-auto mb-4"
            />
            <p className="text-[hsl(var(--medium-text))] mb-6 max-w-md">
              Transform your career with personalized executive coaching
            </p>
          </div>

          {/* Coaching */}
          <div>
            <h4 className="font-semibold text-[hsl(var(--dark-text))] mb-4">Coaching</h4>
            <ul className="space-y-2 text-[hsl(var(--medium-text))]">
              <li>
                <span className="hover:text-[hsl(var(--dark-text))] transition-colors duration-200 cursor-pointer">
                  Executive Coaching
                </span>
              </li>
              <li>
                <span className="hover:text-[hsl(var(--dark-text))] transition-colors duration-200 cursor-pointer">
                  Leadership Development
                </span>
              </li>
              <li>
                <span className="hover:text-[hsl(var(--dark-text))] transition-colors duration-200 cursor-pointer">
                  Career Coaching
                </span>
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
                <Link href="/team">
                  <span className="hover:text-[hsl(var(--dark-text))] transition-colors duration-200 cursor-pointer">
                    Our Team
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[hsl(var(--medium-text))] text-sm">
            © 2025 HeathCoaching. All rights reserved.
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
