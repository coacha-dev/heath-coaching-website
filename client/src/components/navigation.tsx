import { Link, useLocation } from "wouter";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ContactDialog from "./contact-dialog";

export default function Navigation() {
  const [location] = useLocation();
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location === path;

  return (
    <>
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <div className="text-2xl font-bold text-[hsl(var(--dark-text))] cursor-pointer">
                  Coacha
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {/* Services Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="text-[hsl(var(--medium-text))] hover:text-[hsl(var(--dark-text))] px-3 py-2 text-sm font-medium flex items-center transition-colors duration-200">
                      Services
                      <ChevronDown className="ml-1 h-3 w-3" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-96 p-6">
                    <div className="grid grid-cols-1 gap-6">
                      {/* Winning Careers */}
                      <div className="border-l-4 border-[hsl(var(--coacha-blue))] pl-4">
                        <h3 className="font-semibold text-[hsl(var(--coacha-blue))] mb-2">
                          Winning Careers
                        </h3>
                        <div className="space-y-1 text-sm">
                          <DropdownMenuItem asChild>
                            <Link href="/winning-careers" className="text-[hsl(var(--medium-text))] hover:text-[hsl(var(--dark-text))] block">
                              Winning Careers Workshop
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href="/winning-careers" className="text-[hsl(var(--medium-text))] hover:text-[hsl(var(--dark-text))] block">
                              Winning Careers Personality Assessment
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href="/winning-careers" className="text-[hsl(var(--medium-text))] hover:text-[hsl(var(--dark-text))] block">
                              CareerCoacha Newsletter
                            </Link>
                          </DropdownMenuItem>
                        </div>
                      </div>

                      {/* Leadership */}
                      <div className="border-l-4 border-[hsl(var(--coacha-purple))] pl-4">
                        <h3 className="font-semibold text-[hsl(var(--coacha-purple))] mb-2">
                          Leadership
                        </h3>
                        <div className="space-y-1 text-sm">
                          <DropdownMenuItem asChild>
                            <Link href="/leadership" className="text-[hsl(var(--medium-text))] hover:text-[hsl(var(--dark-text))] block">
                              Triple Intelligence Leadership Workshop
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href="/leadership" className="text-[hsl(var(--medium-text))] hover:text-[hsl(var(--dark-text))] block">
                              Triple Intelligence Leadership Assessment
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href="/leadership" className="text-[hsl(var(--medium-text))] hover:text-[hsl(var(--dark-text))] block">
                              LeaderCoacha Newsletter
                            </Link>
                          </DropdownMenuItem>
                        </div>
                      </div>

                      {/* Selling */}
                      <div className="border-l-4 border-[hsl(var(--coacha-red))] pl-4">
                        <h3 className="font-semibold text-[hsl(var(--coacha-red))] mb-2">
                          Selling
                        </h3>
                        <div className="space-y-1 text-sm">
                          <DropdownMenuItem asChild>
                            <Link href="/selling" className="text-[hsl(var(--medium-text))] hover:text-[hsl(var(--dark-text))] block">
                              Value-Centred Selling Workshop
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href="/selling" className="text-[hsl(var(--medium-text))] hover:text-[hsl(var(--dark-text))] block">
                              Value-Centred Selling Assessment
                            </Link>
                          </DropdownMenuItem>
                        </div>
                      </div>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>

                <Link href="/testimonials">
                  <span className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive("/testimonials")
                      ? "text-[hsl(var(--dark-text))]"
                      : "text-[hsl(var(--medium-text))] hover:text-[hsl(var(--dark-text))]"
                  }`}>
                    Testimonials
                  </span>
                </Link>

                <Link href="/team">
                  <span className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive("/team")
                      ? "text-[hsl(var(--dark-text))]"
                      : "text-[hsl(var(--medium-text))] hover:text-[hsl(var(--dark-text))]"
                  }`}>
                    Our Team
                  </span>
                </Link>

                <a
                  href="#"
                  className="text-[hsl(var(--medium-text))] hover:text-[hsl(var(--dark-text))] px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  One-to-One Coaching
                </a>
              </div>
            </div>

            {/* Contact Button */}
            <div className="hidden md:block">
              <Button
                onClick={() => setIsContactOpen(true)}
                className="bg-[hsl(var(--dark-text))] text-white hover:bg-gray-800 transition-colors duration-200"
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
                  <span className="block px-3 py-2 text-sm font-medium text-[hsl(var(--medium-text))] hover:text-[hsl(var(--dark-text))]">
                    Testimonials
                  </span>
                </Link>
                <Link href="/team">
                  <span className="block px-3 py-2 text-sm font-medium text-[hsl(var(--medium-text))] hover:text-[hsl(var(--dark-text))]">
                    Our Team
                  </span>
                </Link>
                <a href="#" className="block px-3 py-2 text-sm font-medium text-[hsl(var(--medium-text))] hover:text-[hsl(var(--dark-text))]">
                  One-to-One Coaching
                </a>
                <Button
                  onClick={() => setIsContactOpen(true)}
                  className="w-full mt-4 bg-[hsl(var(--dark-text))] text-white hover:bg-gray-800"
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
