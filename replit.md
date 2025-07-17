# HeathCoaching - Executive One-to-One Coaching Platform

## Overview

HeathCoaching is a full-stack web application that provides personalized executive coaching services. The platform focuses exclusively on one-to-one coaching sessions to help leaders and professionals reach their full potential. Built with a modern tech stack, it features a responsive frontend with React and a Node.js/Express backend, designed for deployment on Replit's infrastructure.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development**: Hot reloading with tsx
- **Production**: Compiled with esbuild for optimal performance

### Data Storage Solutions
- **Database**: PostgreSQL (configured via Drizzle)
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Centralized schema definitions in `/shared/schema.ts`
- **Migrations**: Managed through drizzle-kit
- **Storage Interface**: Abstracted storage layer with in-memory fallback for development

### Database Connection
- **Provider**: Neon Database (@neondatabase/serverless)
- **Configuration**: Environment-based DATABASE_URL
- **Session Storage**: PostgreSQL-backed sessions (connect-pg-simple)

## Key Components

### Frontend Components
1. **Navigation System**: Simplified responsive navigation for coaching focus
2. **Home Page**: Hero section with one-to-one coaching focus and "What to Expect" section
3. **Testimonials**: Client testimonial display system with auto-scrolling layout
4. **Contact System**: Contact dialog and team information
5. **Logo Scroller**: Animated client logo display
6. **UI Library**: Comprehensive component system based on shadcn/ui

### Backend Components
1. **Server**: Express.js application with middleware setup
2. **Routes**: Modular route system (currently minimal, ready for expansion)
3. **Storage Layer**: Abstract storage interface with memory implementation
4. **Error Handling**: Centralized error handling middleware
5. **Development Tools**: Vite integration for development mode

### Shared Components
1. **Schema Definitions**: User management schema with Zod validation
2. **Type Definitions**: Shared TypeScript types between client and server

## Data Flow

1. **Client Requests**: React frontend makes requests to Express backend via `/api` routes
2. **Server Processing**: Express middleware handles authentication, logging, and error handling
3. **Data Persistence**: Storage interface abstracts database operations
4. **Response Handling**: TanStack Query manages client-side caching and state

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connectivity
- **drizzle-orm**: Database ORM and query builder
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Accessible UI primitives
- **wouter**: Lightweight React router

### Development Dependencies
- **vite**: Build tool and development server
- **tsx**: TypeScript execution for development
- **esbuild**: Production bundling
- **tailwindcss**: Utility-first CSS framework

## Deployment Strategy

### Replit Configuration
- **Environment**: Node.js 20, Web, PostgreSQL 16 modules
- **Development**: `npm run dev` with hot reloading
- **Production Build**: `npm run build` (Vite + esbuild)
- **Production Start**: `npm run start`
- **Port Configuration**: Internal port 5000, external port 80
- **Scaling**: Autoscale deployment target

### Build Process
1. Frontend: Vite builds React app to `dist/public`
2. Backend: esbuild bundles server code to `dist/index.js`
3. Static Assets: Served from `dist/public` in production

### Environment Requirements
- **DATABASE_URL**: PostgreSQL connection string (required)
- **NODE_ENV**: Environment mode (development/production)

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

- July 17, 2025: Major website transformation to include workshop offerings
  - **Navigation Updates**: Changed from "Testimonials, Our Team, Assessments & Training, Contact" to "Testimonials, Our Team, One-to-One Coaching, Workshops (dropdown), Contact"
  - **Homepage Transformation**: Replaced "One-To-One Coaching" section with "Our Services" section featuring 4 service boxes
  - **New Pages Created**: 
    - One-to-One Coaching dedicated page with previous homepage content
    - Winning Careers Workshop page with comprehensive details
    - Triple Intelligence Leadership Workshop page
    - Value-Centred Selling Workshop page
  - **Workshop Dropdown**: Desktop hover dropdown and mobile nested menu for 3 workshops
  - **Service Cards**: Homepage now features 4 service cards in 2x2 grid with "Learn More" buttons
  - **Preserved Content**: All existing testimonials, company logos, team information, and contact details maintained
  - **Visual Consistency**: All new pages follow existing gradient background and card styling patterns
  - **Routing**: Updated App.tsx with new route structure for workshops and coaching page

- July 2, 2025: Enhanced gradient system and visual consistency
  - Added subtle gradient backgrounds to testimonials and team pages matching home page
  - Standardized contact dialog box colors to consistent blue theme (blue-50 background)
  - Updated team page boxes with semi-transparent backgrounds (white/80) and blue borders
  - Applied HeathCoaching branding consistently across contact forms and testimonials
  - Replaced additional logo in company scroller with Deloitte logo
  - Fine-tuned home page gradient subtlety for smoother blue transitions

- June 26, 2025: Complete rebrand to HeathCoaching
  - Updated branding from Coacha to HeathCoaching
  - Implemented light blue gradient color scheme
  - Focused content on one-to-one executive coaching
  - Updated navigation to remove services dropdown
  - Changed hero section to emphasize personalized coaching
  - Added "What to Expect" section with coaching benefits
  - Updated team page with HeathCoaching contact details
  - Applied blue theme throughout testimonials and contact forms
  - Updated favicon and page title
- June 26, 2025: Initial setup