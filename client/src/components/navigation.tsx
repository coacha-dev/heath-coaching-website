import { Link, useLocation } from "wouter";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactDialog from "./contact-dialog";
import coacheLogo from "@assets/Coacha Logo LATEST_1749609249362.png";

export default function Navigation() {
  const [location] = useLocation();
  const [isContactOpen, setIsContactOpen] = useState(false);
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
                  <div className={`absolute left-0 top-full mt-1 w-96 bg-white rounded-lg shadow-lg border border-gray-100 py-6 px-6 transition-all duration-200 ${isServicesHovered ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                    <div className="grid grid-cols-1 gap-6">
                      {/* Winning Careers */}
                      <div className="border-l-4 border-[hsl(var(--coacha-blue))] pl-4">
                        <h3 className="font-semibold text-[hsl(var(--coacha-blue))] mb-2">
                          Winning Careers
                        </h3>
                        <div className="space-y-1 text-sm">
                          <Link href="/winning-careers" className="text-gray-600 hover:text-black block py-1">
                            Winning Careers Workshop
                          </Link>
                          <Link href="/winning-careers" className="text-gray-600 hover:text-black block py-1">
                            Winning Careers Personality Assessment
                          </Link>
                          <Link href="/winning-careers" className="text-gray-600 hover:text-black block py-1">
                            CareerCoacha Newsletter
                          </Link>
                        </div>
                      </div>

                      {/* Leadership */}
                      <div className="border-l-4 border-[hsl(var(--coacha-purple))] pl-4">
                        <h3 className="font-semibold text-[hsl(var(--coacha-purple))] mb-2">
                          Leadership
                        </h3>
                        <div className="space-y-1 text-sm">
                          <Link href="/leadership" className="text-gray-600 hover:text-black block py-1">
                            Triple Intelligence Leadership Workshop
                          </Link>
                          <Link href="/leadership" className="text-gray-600 hover:text-black block py-1">
                            Triple Intelligence Leadership Assessment
                          </Link>
                          <Link href="/leadership" className="text-gray-600 hover:text-black block py-1">
                            LeaderCoacha Newsletter
                          </Link>
                        </div>
                      </div>

                      {/* Selling */}
                      <div className="border-l-4 border-[hsl(var(--coacha-red))] pl-4">
                        <h3 className="font-semibold text-[hsl(var(--coacha-red))] mb-2">
                          Selling
                        </h3>
                        <div className="space-y-1 text-sm">
                          <Link href="/selling" className="text-gray-600 hover:text-black block py-1">
                            Value-Centred Selling Workshop
                          </Link>
                          <Link href="/selling" className="text-gray-600 hover:text-black block py-1">
                            Value-Centred Selling Assessment
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
