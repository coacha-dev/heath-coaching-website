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
                  href="https://coacha.co" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="nav-item relative px-3 py-2 text-sm font-medium text-black transition-colors duration-200"
                >
                  Other Services
                  <span className="nav-underline"></span>
                </a>
              </div>
            </div>

            {/* Contact Button */}
            <div className="hidden md:block">
              <Button
                onClick={() => setIsContactOpen(true)}
                className="text-white px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 border-2"
                style={{ 
                  background: 'linear-gradient(90deg, #0081ea 0%, #40a3f7 100%)',
                  borderColor: 'transparent'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'white';
                  e.currentTarget.style.color = '#0081ea';
                  e.currentTarget.style.borderColor = '#0081ea';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(90deg, #0081ea 0%, #40a3f7 100%)';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.borderColor = 'transparent';
                }}
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

            <a 
              href="https://coacha.co" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-base font-medium text-gray-700 hover:text-black py-2"
            >
              Other Services
            </a>

            <div className="pt-2">
              <Button
                onClick={() => {
                  setIsContactOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-white px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 border-2"
                style={{ 
                  background: 'linear-gradient(90deg, #0081ea 0%, #40a3f7 100%)',
                  borderColor: 'transparent'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'white';
                  e.currentTarget.style.color = '#0081ea';
                  e.currentTarget.style.borderColor = '#0081ea';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(90deg, #0081ea 0%, #40a3f7 100%)';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.borderColor = 'transparent';
                }}
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