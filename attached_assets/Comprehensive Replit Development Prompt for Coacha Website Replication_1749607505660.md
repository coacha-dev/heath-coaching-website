# Comprehensive Replit Development Prompt for Coacha Website Replication

## Project Overview

You are tasked with creating an exact replica of the Coacha website currently hosted at https://coacha-website.lovable.app/. This is a professional business coaching and training website that must be replicated with pixel-perfect accuracy, maintaining all design elements, content, functionality, and responsive behavior.

## Technical Requirements

### Framework and Technology Stack
- **Frontend Framework**: React.js with modern hooks and functional components
- **Styling**: CSS Modules or Styled Components for component-level styling
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox
- **Build Tool**: Vite or Create React App for development and build process
- **Deployment**: Optimized for production deployment on Replit

### Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design from 320px to 1920px+ screen widths

## Complete Site Structure

### Page Architecture
The website consists of the following pages and sections:

1. **Homepage** (`/`)
   - Hero section with main value proposition
   - Trust indicators (company logos)
   - Services overview (3-column grid)
   - Client testimonials (4-card layout)
   - Footer with navigation and legal links

2. **Service Pages**
   - Winning Careers (`/winning-careers`)
   - Leadership (`/leadership`) 
   - Selling (`/selling`)

3. **Additional Pages**
   - Our Team (`/team`)
   - Testimonials (`/testimonials`)
   - Contact functionality (modal or page)

4. **Navigation Elements**
   - Services dropdown menu with sub-services
   - External link to One-to-One Coaching

## Detailed Design Specifications

### Color Palette
Implement the exact color scheme with these specific hex values:

**Brand Category Colors:**
- Winning Careers: `#0081ea` (Blue)
- Leadership: `#7030a0` (Purple)
- Selling: `#dc0725` (Red)

**Background Colors:**
- Hero Section: `#faf8f5` (Warm cream)
- Services Section: `#f6f2ed` (Light beige)
- Testimonials Section: `#ffffff` (White)
- Footer: `#f9fafb` (Light gray)

**Text Colors:**
- Primary Text: `hsl(222.2, 84%, 4.9%)` (Dark gray)
- Secondary Text: `hsl(215.4, 16.3%, 46.9%)` (Medium gray)
- Muted Text: `hsl(215, 20.2%, 65.1%)` (Light gray)

### Typography System
Implement the following font hierarchy:

**Font Families:**
- Primary (Body): `'Public Sans', 'Inter', sans-serif`
- Headings: `'Axiforma', 'Playfair Display', serif`

**Font Weights:**
- Light: 300
- Regular: 400
- Medium: 500
- Semi-bold: 600
- Bold: 700

**Typography Hierarchy:**
- Main headlines: Large serif font (48px+ desktop, 32px+ mobile)
- Section titles: Medium serif font (36px desktop, 28px mobile)
- Service titles: Medium serif font (24px desktop, 20px mobile)
- Body text: Sans-serif, 16px desktop, 14px mobile
- Navigation: Sans-serif, medium weight

### Layout and Spacing
Implement consistent spacing using a systematic approach:

**Border Radius:**
- Default: `0.5rem` (8px)
- Medium: `calc(0.5rem - 2px)` (6px)
- Small: `calc(0.5rem - 4px)` (4px)

**Grid Systems:**
- Homepage services: 3-column grid (desktop), 1-column (mobile)
- Service pages: 3-column grid (2-column for Selling page)
- Testimonials: 4-column horizontal (desktop), 1-column scroll (mobile)
- Team: Single column with large cards

**Container Specifications:**
- Maximum width: 1200px
- Horizontal padding: 2rem desktop, 1rem mobile
- Vertical section spacing: 4rem desktop, 3rem mobile

## Component Specifications

### Navigation Bar
Create a responsive navigation component with:

**Desktop Layout:**
- Logo positioned left with proper branding
- Horizontal menu items: Services (dropdown), Testimonials, Our Team, One-to-One Coaching
- Primary CTA button "Contact Us" with dark background
- Services dropdown with 3-column layout matching service colors

**Mobile Layout:**
- Maintain horizontal layout (no hamburger menu)
- Compress menu items appropriately
- Ensure touch-friendly sizing (minimum 44px touch targets)

**Services Dropdown Structure:**
```
Winning Careers (Blue theme)
├── Winning Careers Workshop
├── Winning Careers Personality Assessment
└── CareerCoacha Newsletter

Leadership (Purple theme)
├── Triple Intelligence Leadership Workshop
├── Triple Intelligence Leadership Assessment
└── LeaderCoacha Newsletter

Selling (Red theme)
├── Value-Centred Selling Workshop
└── Value-Centred Selling Assessment
```

### Button Components
Implement multiple button variants:

**Primary CTA (Contact Us):**
- Background: Dark gray/black
- Text: White
- Border radius: 0.5rem
- Padding: 12px 24px
- Hover: Subtle shadow and color shift

**Secondary CTA (Explore Services):**
- Background: Transparent
- Border: 2px solid dark
- Text: Dark
- Same sizing as primary

**Service Learn More Buttons:**
- Background: Dark
- Text: White
- Colored accent bar at bottom (theme-specific)
- Hover effects with color transitions

### Service Cards
Create reusable service card components with:

**Card Structure:**
- White background with subtle shadow
- Colored top border (2-3px, theme-specific)
- Rounded corners (0.5rem)
- Internal padding: 2rem
- Hover: Subtle lift effect

**Content Layout:**
- Theme-colored icon (top)
- Service title (serif font)
- Description text (sans-serif)
- CTA button (bottom)

**Icon Specifications:**
- Style: Simple line icons
- Size: 48px x 48px
- Colors: Match theme colors
- Types: Briefcase (Winning Careers), Lightbulb (Leadership), Dollar sign (Selling)

### Testimonial Components
Implement testimonial cards with:

**Card Design:**
- White background
- Subtle shadow
- Rounded corners
- Padding: 1.5rem

**Content Structure:**
- Quote text (italic)
- Client name (bold)
- Client title and company (muted color)

**Layout Behavior:**
- Desktop: 4-column grid
- Mobile: Single column with horizontal scroll

## Complete Content Implementation

### Homepage Content

#### Hero Section
```
Main Headline: "We build the skills that drive progress, influence and revenue."
- Apply colored underlines: "progress" (blue), "influence" (purple), "revenue" (red)

Subheadline: "Coacha delivers practical, premium training for the people driving your organisation forward."

CTA Buttons: "Explore Services" | "Contact Us"
```

#### Trust Section
```
Header: "TRUSTED BY LEADING COMPANIES"
Company Logos: Bloomberg, Goldman Sachs, Nissan, Deloitte, Platinum Asset Management, J.P.Morgan, COX, Citi, Orbis, ANZ
```

#### Services Section
```
Section Title: "Our Services"
Section Subtitle: "Comprehensive solutions to enhance individual and organizational performance"

Service 1 - Winning Careers:
Title: "Winning Careers"
Description: "Workshops, tools & insights to build high-performing professionals"
CTA: "Learn More"

Service 2 - Leadership:
Title: "Leadership"  
Description: "Grow exceptional leaders with science-backed development"
CTA: "Learn More"

Service 3 - Selling:
Title: "Selling"
Description: "Transform your sales performance through human-centred methods"
CTA: "Learn More"
```

#### Testimonials Section
```
Section Title: "What our clients say"

Testimonial 1:
Quote: "I am happy to highly recommend Luke as an Executive Coach, as Luke has a flair for the psychology of corporations..."
Name: "Alva Devoy"
Title: "Managing Director, Fidelity International"

Testimonial 2:
Quote: "Luke has been a tremendous help in my career -he is a very good listener and his advice is always sensible and to the..."
Name: "Nicholas Scarf"
Title: "Managing Director, Newedge Singapore"

Testimonial 3:
Quote: "GoGet Carshare would be nowhere without the support of Luke Heath, especially during a particularly..."
Name: "Nic Lowe"
Title: "Founder, GoGet Carshare"

Testimonial 4:
Quote: "A considerate listener and mentor, al..."
Name: "Lisa Boyd"
Title: "Fund Operations"

CTA: "See all testimonials"
```

#### Footer
```
Logo: Coacha
Tagline: "Unlock performance through leadership, culture & capability"

Services Column:
- Winning Careers
- Leadership
- Selling

Company Column:
- Testimonials
- Contact
- One-to-One Coaching

Copyright: "© 2025 Coacha. All rights reserved."
Legal Links: Privacy Policy | Terms of Service
```

### Service Pages Content

#### Winning Careers Page (`/winning-careers`)
```
Page Title: "Winning Careers"
Subtitle: "Equip your team with the tools, insights, and strategies they need to thrive in today's competitive landscape."

Service 1 - Winning Careers Workshop:
Description: "Empower your employees to take control of their career trajectory and maximize their impact."

Service 2 - Winning Careers Personality Assessment:
Description: "Provide valuable insights into your team's natural tendencies, strengths, and work preferences."

Service 3 - CareerCoacha Newsletter:
Description: "Stay ahead of the curve with our curated insights on career development and professional growth."

Testimonials Title: "What our clients say about our Winning Careers services"
```

#### Leadership Page (`/leadership`)
```
Page Title: "Leadership"
Subtitle: "Develop exceptional leadership capabilities with our science-backed approach."

Service 1 - Triple Intelligence Leadership Workshop:
Description: "Develop balanced leadership skills across rational, emotional, and social domains."

Service 2 - Triple Intelligence Leadership Assessment:
Description: "Gain insights into your leadership profile across three critical intelligence domains."

Service 3 - LeaderCoacha Newsletter:
Description: "Receive the latest research and insights to enhance your leadership effectiveness."

Testimonials Title: "What our clients say about our Leadership services"
```

#### Selling Page (`/selling`)
```
Page Title: "Selling"
Subtitle: "Transform sales performance through human-centered methods."

Service 1 - Value-Centred Selling Workshop:
Description: "Equip your sales team with a modern approach that prioritizes authentic value creation over traditional selling techniques."

Service 2 - Value-Centred Selling Assessment:
Description: "Understand your sales team's natural selling styles, strengths, and development areas with our comprehensive assessment."

Testimonials Title: "What our clients say about our Selling services"
```

### Our Team Page (`/team`)
```
Page Title: "Our Team"
Subtitle: "Meet the founders behind Coacha's mission to build skills that drive progress, influence, and revenue."

Team Member 1 - Luke Heath:
Title: "Managing Director, Executive Coach & Trainer"
Bio: "Luke Heath was an investment banker and portfolio manager for 10 years with Schroders and Societe Generale. Since 2002, he has founded and run human resources consulting businesses. Luke has advised boards and senior leadership teams on strategy, financing, and people and culture. He continues to enjoy coaching and training leaders and their teams across the globe."
Personal Note: "Luke enjoys being in the surf, SCUBA diving, and going hiking with old Schroders' mates."
Qualifications:
- Master of HRM and Coaching (Sydney University)
- Company Directors Diploma and FAICD
- Bachelor of Arts (Melbourne University)
- Member of Institute of Coaching (Harvard / McLean)
- Mental Health First Aid Certificate

Team Member 2 - Josh Heath:
Title: "Product Director"
Bio: "Josh has worked for a decade in e-commerce, digital asset management, and digital media. He completed business degrees but found his passion in the creative and technical aspects of digital product development..."
```

### Testimonials Page (`/testimonials`)
```
Page Title: "Client Testimonials"
Subtitle: "Coacha has worked with companies across the globe, including:"

Client Companies:
ABC Bullion, Accenture, Allan Gray, ANZ, ARC, AT Kearney, Australian Treasury, Baptcare, Bloomberg, BNP Paribas, BOQ, CareerSeekers, CareerTrackers, CBA, Centrepoint Alliance, Chancellor, Citigroup, Cloudwerx, COX Architecture, Cox Automotive, Credit Suisse, Crestone, CVC, Deloitte, Deutsche Bank, EY, Fidelity International, GBA Capital, GoGet, Goldman Sachs, IBA, Investec, Jack Morton Worldwide, JBWere, JP Morgan, ListedReserve, Lloyds Bank, Macquarie Bank, NAB, Nissan, Nomura, NSW Parliamentary Services, Orbis, Orica, Pallion, PAYCE, Platinum Investment Management, Principal Global Investors, Queensland Treasury Corporation, RMG, Societe Generale, South Sydney RLFC, UBS, Westpac, Whiddon, Wood Group

Testimonials Section Title: "See what our clients say about working with Coacha"

Featured Testimonial:
Name: "Alva Devoy"
Title: "Managing Director, Fidelity International"
Quote: "I am happy to highly recommend Luke as an Executive Coach, as Luke has a flair for the psychology of corporations as well as adaptive style, to suit many leaders' individual needs."
```

## Responsive Design Implementation

### Mobile-First Approach
Implement responsive design with these breakpoints:

**Breakpoint System:**
- Mobile: 320px - 767px
- Tablet: 768px - 1023px  
- Desktop: 1024px+

**Mobile Adaptations:**
- Navigation: Maintain horizontal layout, compress items
- Hero: Stack buttons vertically on very small screens
- Services: Convert 3-column to 1-column
- Testimonials: Horizontal scroll or single column
- Company logos: Maintain horizontal scroll
- Typography: Scale down appropriately

**Touch Optimization:**
- Minimum touch target: 44px x 44px
- Adequate spacing between interactive elements
- Hover states adapted for touch devices

## Functionality Requirements

### Navigation Behavior
- Smooth scrolling to sections
- Active state indication
- Dropdown menu with proper hover/click behavior
- External link handling for "One-to-One Coaching"

### Interactive Elements
- Button hover effects with smooth transitions
- Card hover effects (subtle lift/shadow)
- Form handling for contact functionality
- Smooth page transitions

### Performance Optimization
- Lazy loading for images
- Optimized asset delivery
- Minimal JavaScript bundle size
- Fast loading times

## Development Guidelines

### Code Structure
```
src/
├── components/
│   ├── Navigation/
│   ├── Hero/
│   ├── ServiceCard/
│   ├── TestimonialCard/
│   ├── TeamCard/
│   ├── Button/
│   └── Footer/
├── pages/
│   ├── Home/
│   ├── WinningCareers/
│   ├── Leadership/
│   ├── Selling/
│   ├── Team/
│   └── Testimonials/
├── styles/
│   ├── globals.css
│   ├── variables.css
│   └── components/
├── assets/
│   ├── images/
│   └── icons/
└── utils/
```

### CSS Architecture
- Use CSS custom properties for colors and spacing
- Implement consistent naming conventions
- Create reusable utility classes
- Maintain component-scoped styles

### Accessibility Requirements
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation support
- ARIA labels where appropriate
- Color contrast compliance (WCAG AA)

## Quality Assurance

### Testing Requirements
- Cross-browser compatibility testing
- Mobile device testing
- Performance testing
- Accessibility testing
- Visual regression testing against original site

### Validation Checklist
- [ ] Pixel-perfect match to original design
- [ ] All content accurately replicated
- [ ] Responsive behavior matches original
- [ ] All interactive elements functional
- [ ] Performance optimized
- [ ] Accessibility compliant
- [ ] Cross-browser compatible

## Deployment Considerations

### Production Optimization
- Minified CSS and JavaScript
- Optimized images (WebP format where supported)
- Gzip compression
- CDN integration for assets
- SEO optimization (meta tags, structured data)

### Replit-Specific Requirements
- Configure for Replit hosting environment
- Ensure proper build scripts
- Optimize for Replit's deployment pipeline
- Test thoroughly in Replit environment

This comprehensive specification provides everything needed to create an exact replica of the Coacha website. Pay careful attention to the design details, content accuracy, and responsive behavior to ensure a pixel-perfect recreation that maintains the professional quality and user experience of the original site.

