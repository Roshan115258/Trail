# Several Sustain - Electronics Development Platform

## Overview

Several Sustain is a professional electronics development and dairy technology company website built as a full-stack web application. The platform showcases the company's services including PCB design, hardware development, firmware programming, and specialized dairy technology solutions (milk analyzers and DPU/AMCU systems). The application features a modern, responsive design with contact forms, newsletter subscriptions, service pages, and case studies to attract and engage potential clients.

## Recent Changes

### Navigation Restructuring (September 30, 2025)
- **Menu Organization**: Reorganized main navigation into hierarchical structure:
  - "Design Service" dropdown: PCB Design, Web Design
  - "Development Service" dropdown: Firmware Development, Hardware Development, App Development
  - Removed "Case Studies" from main navigation per user requirements
  
- **Routing Structure**: Implemented hierarchical routes for better organization:
  - Design services: `/services/design/pcb-design`, `/services/design/web-design`
  - Development services: `/services/development/firmware`, `/services/development/hardware`, `/services/development/app-development`
  - Solutions: `/solutions/milk-analyzer`, `/solutions/dpu-amcu-systems`
  
- **Backward Compatibility**: Added redirect routes for all old service URLs to prevent 404 errors:
  - `/services/pcb-design` → PCBDesign component
  - `/services/hardware-development` → HardwareDevelopment component
  - `/services/firmware-programming` → FirmwareProgramming component
  - `/services/app-development` → AppDevelopment component

- **New Pages**: Created WebDesign service page (`client/src/pages/services/WebDesign.tsx`) following established glassmorphism design patterns

- **Updated Components**:
  - Header: New dropdown menu structure for desktop and mobile navigation
  - Footer: Updated service links to new hierarchical routes and added Web Design
  - Home: Updated all service card links to point to new route structure

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- **Framework:** React 18 with TypeScript
- **Routing:** Wouter (lightweight client-side routing)
- **UI Components:** Shadcn/ui (Radix UI primitives with Tailwind CSS)
- **Styling:** Tailwind CSS with custom design system
- **State Management:** TanStack Query (React Query) for server state
- **Form Handling:** React Hook Form with Zod validation
- **Build Tool:** Vite

**Design System:**
- Custom glassmorphism design with CSS variables for theming
- Consistent color palette (primary green #15803d, secondary amber)
- Responsive breakpoints following mobile-first approach
- Inter font family for typography
- Reusable UI components from Shadcn/ui library

**Key Features:**
- SEO-optimized pages with meta tags and Open Graph support
- Google Analytics integration for tracking
- Responsive navigation with mobile menu
- Animated components with Tailwind animations
- Accessibility-first component design

### Backend Architecture

**Technology Stack:**
- **Runtime:** Node.js with Express.js
- **Language:** TypeScript with ES modules
- **ORM:** Drizzle ORM
- **Database:** PostgreSQL (via Neon serverless driver)
- **Session Management:** Configured for connect-pg-simple
- **Validation:** Zod schemas shared between client and server

**API Design:**
- RESTful endpoints under `/api/*` prefix
- Contact form submission: `POST /api/contact`
- Newsletter subscription: `POST /api/newsletter`
- JSON request/response format
- Centralized error handling with validation feedback

**Development vs Production:**
- Development: Vite middleware integration for HMR
- Production: Serves static built files from `dist/public`
- Environment-based configuration via NODE_ENV

### Data Storage Solutions

**Database Schema (PostgreSQL):**

1. **Users Table:** Authentication foundation
   - UUID primary key with auto-generation
   - Username and password fields
   - Unique constraint on username

2. **Contacts Table:** Lead capture and inquiry tracking
   - UUID primary key
   - Contact information (name, email, company)
   - Service selection and message
   - Consent tracking for GDPR compliance
   - Timestamp for creation tracking

3. **Newsletter Subscriptions Table:** Email marketing
   - UUID primary key
   - Unique email constraint
   - Creation timestamp

**Storage Strategy:**
- In-memory storage (MemStorage) for development/testing
- Designed for PostgreSQL production deployment via Drizzle ORM
- Migration support through Drizzle Kit (config in drizzle.config.ts)
- Shared schema types between client and server for type safety

### External Dependencies

**Third-Party Services:**

1. **Google Analytics:** User behavior tracking and conversion monitoring
   - Configured via VITE_GA_MEASUREMENT_ID environment variable
   - Page view tracking for SPA navigation
   - Custom event tracking capabilities

2. **Neon Database:** Serverless PostgreSQL hosting
   - Accessed via @neondatabase/serverless package
   - Connection pooling and edge compatibility
   - Configured through DATABASE_URL environment variable

**Key Libraries:**

1. **UI/UX:**
   - Radix UI: Unstyled, accessible component primitives
   - Lucide React: Icon system
   - Embla Carousel: Touch-enabled carousels
   - Vaul: Drawer/sheet components

2. **Forms & Validation:**
   - React Hook Form: Form state management
   - Zod: Runtime type validation
   - @hookform/resolvers: Integration layer

3. **Development Tools:**
   - Replit-specific plugins for development environment
   - Runtime error overlay for debugging
   - Source map support for production debugging

**Build & Deployment:**
- Vite for frontend bundling and optimization
- esbuild for backend compilation
- Path aliases configured for clean imports (@/, @shared/, @assets/)
- PostCSS with Tailwind and Autoprefixer
- Static asset serving with proper caching headers

**Environment Configuration:**
- DATABASE_URL: PostgreSQL connection string (required)
- VITE_GA_MEASUREMENT_ID: Google Analytics tracking ID (optional)
- NODE_ENV: Environment mode (development/production)