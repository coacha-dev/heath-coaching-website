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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);

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

                <Link href="/contact">
                  <span className="nav-item relative px-3 py-2 text-sm font-medium text-black transition-colors duration-200">
                    One-to-One Coaching
                    <span className="nav-underline"></span>
                  </span>
                </Link>
              </div>
            </div>

            {/* Contact Button */}
            <div className="hidden md:block">
              <Button
                onClick={() => setIsContactOpen(true)}
                className="bg-black text-white border-2 border-black hover:bg-transparent hover:text-black transition-all duration-200 text-sm font-medium px-4 py-2"
              >
                Contact Us
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

      {/* Full-width Services Dropdown - Desktop Only */}
      <div 
        className={`hidden md:block bg-white border-b border-gray-100 transition-all duration-300 ${
          isServicesHovered ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
        onMouseEnter={() => setIsServicesHovered(true)}
        onMouseLeave={() => setIsServicesHovered(false)}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-3 gap-8">
            {/* Winning Careers */}
            <div className="space-y-3">
              <Link href="/winning-careers" className="font-playfair text-lg font-semibold text-black hover:text-[#0081ea] transition-colors block flex items-center justify-between group">
                <span>Winning Careers</span>
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
              <div className="h-0.5 bg-[#0081ea] mb-4"></div>
              <p className="text-sm text-gray-600 mb-4 italic">Build high-performing professionals with tools & insights</p>
              <div className="space-y-2 text-sm">
                <Link href="/winning-careers#workshop" className="text-gray-700 hover:text-[#0081ea] block transition-colors duration-200 flex items-center">
                  <span className="text-gray-400 mr-2">›</span>
                  Winning Careers Workshop
                </Link>
                <Link href="/winning-careers#assessment" className="text-gray-700 hover:text-[#0081ea] block transition-colors duration-200 flex items-center">
                  <span className="text-gray-400 mr-2">›</span>
                  Winning Careers Personality Assessment
                </Link>
                <Link href="/winning-careers#newsletter" className="text-gray-700 hover:text-[#0081ea] block transition-colors duration-200 flex items-center">
                  <span className="text-gray-400 mr-2">›</span>
                  CareerCoacha Newsletter
                </Link>
              </div>
            </div>

            {/* Leadership */}
            <div className="space-y-3">
              <Link href="/leadership" className="font-playfair text-lg font-semibold text-black hover:text-[#7030a0] transition-colors block flex items-center justify-between group">
                <span>Leadership</span>
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
              <div className="h-0.5 bg-[#7030a0] mb-4"></div>
              <p className="text-sm text-gray-600 mb-4 italic">Grow exceptional leaders with science-backed development</p>
              <div className="space-y-2 text-sm">
                <Link href="/leadership#workshop" className="text-gray-700 hover:text-[#7030a0] block transition-colors duration-200 flex items-center">
                  <span className="text-gray-400 mr-2">›</span>
                  Triple Intelligence Leadership Workshop
                </Link>
                <Link href="/leadership#assessment" className="text-gray-700 hover:text-[#7030a0] block transition-colors duration-200 flex items-center">
                  <span className="text-gray-400 mr-2">›</span>
                  Triple Intelligence Leadership Assessment
                </Link>
                <Link href="/leadership#newsletter" className="text-gray-700 hover:text-[#7030a0] block transition-colors duration-200 flex items-center">
                  <span className="text-gray-400 mr-2">›</span>
                  LeaderCoacha Newsletter
                </Link>
              </div>
            </div>

            {/* Selling */}
            <div className="space-y-3">
              <Link href="/selling" className="font-playfair text-lg font-semibold text-black hover:text-[#dc0725] transition-colors block flex items-center justify-between group">
                <span>Selling</span>
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
              <div className="h-0.5 bg-[#dc0725] mb-4"></div>
              <p className="text-sm text-gray-600 mb-4 italic">Transform sales performance through human-centred methods</p>
              <div className="space-y-2 text-sm">
                <Link href="/selling#workshop" className="text-gray-700 hover:text-[#dc0725] block transition-colors duration-200 flex items-center">
                  <span className="text-gray-400 mr-2">›</span>
                  Value-Centred Selling Workshop
                </Link>
                <Link href="/selling#assessment" className="text-gray-700 hover:text-[#dc0725] block transition-colors duration-200 flex items-center">
                  <span className="text-gray-400 mr-2">›</span>
                  Value-Centred Selling Assessment
                </Link>
                <Link href="/selling#newsletter" className="text-gray-700 hover:text-[#dc0725] block transition-colors duration-200 flex items-center">
                  <span className="text-gray-400 mr-2">›</span>
                  SalesCoacha Newsletter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-4 py-3 space-y-2">
            {/* Services Section */}
            <div className="space-y-2">
              <div className="text-base font-semibold text-black py-1">
                Services
              </div>
              
              {/* Winning Careers */}
              <Link href="/winning-careers" onClick={() => setIsMobileMenuOpen(false)}>
                <span className="block text-sm font-medium text-gray-700 hover:text-[#0081ea] active:text-[#0081ea] py-2 pl-4 flex items-center justify-between">
                  Winning Careers
                  <span className="text-gray-400">›</span>
                </span>
              </Link>
              
              {/* Leadership */}
              <Link href="/leadership" onClick={() => setIsMobileMenuOpen(false)}>
                <span className="block text-sm font-medium text-gray-700 hover:text-[#7030a0] active:text-[#7030a0] py-2 pl-4 flex items-center justify-between">
                  Triple Intelligence Leadership
                  <span className="text-gray-400">›</span>
                </span>
              </Link>
              
              {/* Selling */}
              <Link href="/selling" onClick={() => setIsMobileMenuOpen(false)}>
                <span className="block text-sm font-medium text-gray-700 hover:text-[#dc0725] active:text-[#dc0725] py-2 pl-4 flex items-center justify-between">
                  Value-Centred Selling
                  <span className="text-gray-400">›</span>
                </span>
              </Link>
            </div>

            {/* Other Navigation Items */}
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

            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="block text-base font-medium text-gray-700 hover:text-black py-2">
                One-to-One Coaching
              </span>
            </Link>

            <div className="pt-2">
              <Button
                onClick={() => {
                  setIsContactOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="w-full bg-black text-white border-2 border-black hover:bg-transparent hover:text-black transition-all duration-200"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      )}

      <ContactDialog open={isContactOpen} onOpenChange={setIsContactOpen} />
    </div>
  );
}