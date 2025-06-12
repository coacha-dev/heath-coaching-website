import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactDialog from "./contact-dialog";
import coacheLogo from "@assets/Coacha Logo LATEST_1749609249362.png";
import { scrollToAnchor } from "@/lib/scroll";

export default function Navigation() {
  const [location] = useLocation();
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Handle anchor navigation on page load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => scrollToAnchor(hash), 100);
    }
  }, [location]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);

  const isActive = (path: string) => location === path;

  return (
    <>
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 min-w-0">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <img 
                  src={coacheLogo} 
                  alt="Coacha"
                  className="h-8 w-auto cursor-pointer"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block flex-1">
              <div className="flex items-center justify-center space-x-8">
                {/* Services Dropdown */}
                <div 
                  className="relative"
                  onMouseEnter={() => setIsServicesHovered(true)}
                  onMouseLeave={() => setIsServicesHovered(false)}
                >
                  <button className="nav-item relative text-sm font-medium text-black transition-colors duration-200 inline-flex items-center gap-1 px-3 py-2 whitespace-nowrap">
                    <span>Services</span>
                    <ChevronDown className={`h-3 w-3 flex-shrink-0 transition-transform duration-200 ${isServicesHovered ? 'rotate-180' : ''}`} />
                    <span className="nav-underline"></span>
                  </button>
                  
                  {/* Dropdown Menu */}
                  <div className={`absolute left-0 top-full mt-1 w-[800px] bg-white rounded-lg shadow-lg border border-gray-100 py-6 px-6 transition-all duration-200 ${isServicesHovered ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                    <div className="grid grid-cols-3 gap-8">
                      {/* Winning Careers */}
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 bg-[#0081ea] rounded-sm flex items-center justify-center">
                            <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <Link href="/winning-careers" className="font-semibold text-black hover:text-[#0081ea] transition-colors">
                            Winning Careers
                          </Link>
                        </div>
                        <div className="h-0.5 bg-[#0081ea] mb-4"></div>
                        <p className="text-sm text-gray-600 mb-4">Build high-performing professionals with tools & insights</p>
                        <div className="space-y-2 text-sm">
                          <Link href="/winning-careers#workshop" className="text-gray-700 hover:text-[#0081ea] block transition-colors duration-200">
                            Winning Careers Workshop
                          </Link>
                          <Link href="/winning-careers#assessment" className="text-[#0081ea] hover:text-[#0081ea] block transition-colors duration-200">
                            Winning Careers Personality Assessment
                          </Link>
                          <Link href="/winning-careers#newsletter" className="text-gray-700 hover:text-[#0081ea] block transition-colors duration-200">
                            CareerCoacha Newsletter
                          </Link>
                        </div>
                      </div>

                      {/* Leadership */}
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 bg-[#7030a0] rounded-sm flex items-center justify-center">
                            <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <Link href="/leadership" className="font-semibold text-black hover:text-[#7030a0] transition-colors">
                            Leadership
                          </Link>
                        </div>
                        <div className="h-0.5 bg-[#7030a0] mb-4"></div>
                        <p className="text-sm text-gray-600 mb-4">Grow exceptional leaders with science-backed development</p>
                        <div className="space-y-2 text-sm">
                          <Link href="/leadership#workshop" className="text-gray-700 hover:text-[#7030a0] block transition-colors duration-200">
                            Triple Intelligence Leadership Workshop
                          </Link>
                          <Link href="/leadership#assessment" className="text-gray-700 hover:text-[#7030a0] block transition-colors duration-200">
                            Triple Intelligence Leadership Assessment
                          </Link>
                          <Link href="/leadership#newsletter" className="text-gray-700 hover:text-[#7030a0] block transition-colors duration-200">
                            LeaderCoacha Newsletter
                          </Link>
                        </div>
                      </div>

                      {/* Selling */}
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 bg-[#dc0725] rounded-sm flex items-center justify-center">
                            <span className="text-white text-xs font-bold">$</span>
                          </div>
                          <Link href="/selling" className="font-semibold text-black hover:text-[#dc0725] transition-colors">
                            Selling
                          </Link>
                        </div>
                        <div className="h-0.5 bg-[#dc0725] mb-4"></div>
                        <p className="text-sm text-gray-600 mb-4">Transform sales performance through human-centred methods</p>
                        <div className="space-y-2 text-sm">
                          <Link href="/selling#workshop" className="text-gray-700 hover:text-[#dc0725] block transition-colors duration-200">
                            Value-Centred Selling Workshop
                          </Link>
                          <Link href="/selling#assessment" className="text-gray-700 hover:text-[#dc0725] block transition-colors duration-200">
                            Value-Centred Selling Assessment
                          </Link>
                          <Link href="/selling#newsletter" className="text-gray-700 hover:text-[#dc0725] block transition-colors duration-200">
                            SalesCoacha Newsletter
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

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

                <a
                  href="https://heathcoaching.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-item relative text-black px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  One-to-One Coaching
                  <span className="nav-underline"></span>
                </a>
              </div>
            </div>

            {/* Contact Button */}
            <div className="hidden md:block">
              <Button
                onClick={() => setIsContactOpen(true)}
                className="coacha-button"
              >
                Contact Us
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-100">
                {/* Services Section */}
                <div className="px-3 py-2">
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">Services</h3>
                  <div className="ml-4 space-y-1">
                    <Link href="/winning-careers">
                      <span className="block px-3 py-1 text-sm text-gray-600 hover:text-black">
                        Winning Careers
                      </span>
                    </Link>
                    <Link href="/leadership">
                      <span className="block px-3 py-1 text-sm text-gray-600 hover:text-black">
                        Triple Intelligence Leadership
                      </span>
                    </Link>
                    <Link href="/selling">
                      <span className="block px-3 py-1 text-sm text-gray-600 hover:text-black">
                        Value-Centred Selling
                      </span>
                    </Link>
                  </div>
                </div>

                <Link href="/testimonials">
                  <span className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-black">
                    Testimonials
                  </span>
                </Link>
                <Link href="/team">
                  <span className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-black">
                    Our Team
                  </span>
                </Link>
                <a 
                  href="https://heathcoaching.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-black"
                >
                  One-to-One Coaching
                </a>
                <Button
                  onClick={() => setIsContactOpen(true)}
                  className="w-full mt-4 coacha-button"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <ContactDialog open={isContactOpen} onOpenChange={setIsContactOpen} />
    </>
  );
}
