import logo1 from "@assets/Coacha Logo Slider Icons-01_1749611089711.png";
import logo2 from "@assets/Coacha Logo Slider Icons-02_1749611089711.png";
import logo3 from "@assets/Coacha Logo Slider Icons-03_1749611089711.png";
import logo4 from "@assets/Coacha Logo Slider Icons-04_1749611089711.png";
import logo5 from "@assets/Coacha Logo Slider Icons-05_1749611089711.png";
import logo6 from "@assets/Coacha Logo Slider Icons-06_1749611089711.png";
import logo7 from "@assets/Coacha Logo Slider Icons-07_1749611089710.png";
import logo8 from "@assets/Coacha Logo Slider Icons-08_1749611089710.png";
import logo9 from "@assets/Coacha Logo Slider Icons-09_1749611089710.png";
import logo10 from "@assets/Coacha Logo Slider Icons-10_1749611089710.png";
import logo11 from "@assets/Coacha Logo Slider Icons-11_1749611089709.png";
import logo12 from "@assets/Coacha Logo Slider Icons-12_1749611089709.png";
import logo13 from "@assets/Coacha Logo Slider Icons-13_1749611089709.png";
import logo14 from "@assets/Coacha Logo Slider Icons-14_1749611089709.png";
import logo15 from "@assets/Coacha Logo Slider Icons-15_1749611089708.png";
import logo16 from "@assets/Coacha Logo Slider Icons-16_1749611089708.png";
import logo17 from "@assets/Coacha Logo Slider Icons-17_1749611089708.png";

const logos = [
  { src: logo1, alt: "Company 1" },
  { src: logo2, alt: "Company 2" },
  { src: logo3, alt: "Company 3" },
  { src: logo4, alt: "Company 4" },
  { src: logo5, alt: "Company 5" },
  { src: logo6, alt: "Company 6" },
  { src: logo7, alt: "Company 7" },
  { src: logo8, alt: "Company 8" },
  { src: logo9, alt: "Company 9" },
  { src: logo10, alt: "Company 10" },
  { src: logo11, alt: "Company 11" },
  { src: logo12, alt: "Company 12" },
  { src: logo13, alt: "Company 13" },
  { src: logo14, alt: "Company 14" },
  { src: logo15, alt: "Company 15" },
  { src: logo16, alt: "Company 16" },
  { src: logo17, alt: "Company 17" },
];

export default function LogoScroller() {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-sm font-medium text-[hsl(var(--light-text))] tracking-wider uppercase">
            Trusted by Leading Companies
          </p>
        </div>
        
        {/* Logo scroller container with fade masks */}
        <div className="relative">
          {/* Left fade mask */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#faf8f5] to-transparent z-10"></div>
          
          {/* Right fade mask */}
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#faf8f5] to-transparent z-10"></div>
          
          {/* Scrolling logos container */}
          <div className="logo-scroll-container">
            <div className="logo-scroll-track">
              {/* First set of logos */}
              {logos.map((logo, index) => (
                <div key={`first-${index}`} className="logo-item">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="logo-image"
                  />
                </div>
              ))}
              {/* Second set for seamless loop */}
              {logos.map((logo, index) => (
                <div key={`second-${index}`} className="logo-item">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="logo-image"
                  />
                </div>
              ))}
              {/* Third set for extra smooth loop */}
              {logos.map((logo, index) => (
                <div key={`third-${index}`} className="logo-item">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="logo-image"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}