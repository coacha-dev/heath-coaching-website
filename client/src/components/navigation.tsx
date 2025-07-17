import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactDialog from "./contact-dialog";
import heathLogo from "@assets/Asset 1@2x_1750899479635.png";
import { scrollToAnchor } from "@/lib/scroll";

export default function Navigation() {
  const [location] = useLocation();
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  // Handle anchor navigation on page load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => scrollToAnchor(hash), 100);
    }
  }, [location]);

  return (
    <div className="sticky top-0 z-50">
      <nav className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 min-w-0">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <img 
                  src={heathLogo} 
                  alt="HeathCoaching"
                  className="h-8 w-auto cursor-pointer"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block flex-1">
              <div className="flex items-center justify-center space-x-8">
                <div className="relative group">
                  <span className="nav-item relative px-3 py-2 text-sm font-medium text-black transition-colors duration-200 cursor-pointer flex items-center">
                    Workshops
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                    <span className="nav-underline"></span>
                  </span>
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white shadow-lg rounded-md border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      <Link href="/workshops/winning-careers">
                        <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0081ea]">
                          Winning Careers
                        </span>
                      </Link>
                      <Link href="/workshops/triple-intelligence">
                        <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0081ea]">
                          Triple Intelligence Leadership
                        </span>
                      </Link>
                      <Link href="/workshops/value-centred-selling">
                        <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0081ea]">
                          Value-Centred Selling
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>

                <Link href="/one-to-one-coaching">
                  <span className="nav-item relative px-3 py-2 text-sm font-medium text-black transition-colors duration-200">
                    One-to-One Coaching
                    <span className="nav-underline"></span>
                  </span>
                </Link>

                <Link href="/testimonials">
                  <span className="nav-item relative px-3 py-2 text-sm font-medium text-black transition-colors duration-200">
                    Testimonials
                    <span className="nav-underline"></span>
                  </span>
                </Link>

                <Link href="/team">
                  <span className="nav-item relative px-3 py-2 text-sm font-medium text-black transition-colors duration-200">
                    Our Team
                    <span className="nav-underline"></span>
                  </span>
                </Link>
              </div>
            </div>

            {/* Contact Button */}
            <div className="hidden md:block">
              <Button
                onClick={() => setIsContactOpen(true)}
                className="heath-gradient-button px-4 py-2 text-sm font-medium rounded-md"
              >
                Contact
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-black focus:outline-none focus:text-black"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>



      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-4 py-3 space-y-2">
            <div className="py-2">
              <span className="block text-base font-medium text-gray-700 py-2">Workshops</span>
              <div className="pl-4 space-y-1">
                <Link href="/workshops/winning-careers" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="block text-sm text-gray-600 hover:text-black py-1">
                    Winning Careers
                  </span>
                </Link>
                <Link href="/workshops/triple-intelligence" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="block text-sm text-gray-600 hover:text-black py-1">
                    Triple Intelligence Leadership
                  </span>
                </Link>
                <Link href="/workshops/value-centred-selling" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="block text-sm text-gray-600 hover:text-black py-1">
                    Value-Centred Selling
                  </span>
                </Link>
              </div>
            </div>

            <Link href="/one-to-one-coaching" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="block text-base font-medium text-gray-700 hover:text-black py-2">
                One-to-One Coaching
              </span>
            </Link>

            <Link href="/testimonials" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="block text-base font-medium text-gray-700 hover:text-black py-2">
                Testimonials
              </span>
            </Link>

            <Link href="/team" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="block text-base font-medium text-gray-700 hover:text-black py-2">
                Our Team
              </span>
            </Link>

            <div className="pt-2">
              <Button
                onClick={() => {
                  setIsContactOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="w-full heath-gradient-button px-4 py-2 text-sm font-medium rounded-md"
              >
                Contact
              </Button>
            </div>
          </div>
        </div>
      )}

      <ContactDialog open={isContactOpen} onOpenChange={setIsContactOpen} />
    </div>
  );
}