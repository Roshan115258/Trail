# Several Sustain - Electronics Development Platform

## Overview

Several Sustain (Several Sustain Pvt. Ltd.) is a professional engineering company specializing in Embedded Systems, IoT Product Design, Web & App Development, and Analytical Instruments. Located in Bihar, India, the company provides end-to-end engineering solutions including PCB Design, Hardware Development, Firmware Development, Web Development, and App Development. The platform showcases specialized solutions like Milk Analyzers and DPU & AMCU systems. The application features a modern, responsive design with contact forms, newsletter subscriptions, service pages, and case studies.

**Company Information:**
- **Tagline:** Innovating for a Smarter Future: Transforming Ideas into Sustainable Solutions
- **Address:** Village Walidad, Post Balidad, P.S. Balidad Panchayat, Mahendia, Bihar – 804402, India
- **Phone:** 06202428157
- **Email:** info@severalsustain.in
- **Website:** severalsustain.in

## Recent Changes

### Product Catalog & E-Commerce Implementation (October 2, 2025)
- **E-Commerce Features**: Complete product catalog with 7 dairy equipment products
  - Client-side shopping cart with localStorage persistence
  - Cart badge, quantity management, mobile-responsive cart layout
  - Sticky Add to Cart button on product detail pages with backdrop blur
  - Formspree checkout integration (no payment processing)
  - All pricing in INR (₹) with Indian localization
- **Product Pages**: Enhanced product detail pages with tabbed interface (Features, Specifications, Benefits, Applications)
  - Colorful gradients and enhanced padding
  - Trust badges (Quality Assured, Free Shipping, Expert Support)
  - Enhanced CTA section with "Limited Time Offer" badge
- **Product Images**: Updated all 7 products with actual product photos (replacing stock placeholders)
  - High-quality PNG images for each product
  - Professional product photography showcasing actual equipment
- **Checkout Localization**: Indian-specific form placeholders (Patna, Bihar, India, +91 phone format, PIN code)
- **Currency Formatting**: Standardized ₹ symbol with .toLocaleString('en-IN') across Products, Cart, Checkout pages
- **Products**: OPINDO COMBO (₹42,000), OPINDO (₹28,500), EXPERT PRO PLUS (₹32,000), OPTEK DPU (₹15,000), Maxtron Scale (₹7,500), Ultrasonic Stirrer (₹3,000), Remote Display (₹10,000)

### Sitemap Update (October 2, 2025)
- **XML Sitemap**: Updated sitemap.xml with 21 total pages (previously 12)
  - Added /products catalog page
  - Added 7 individual product detail pages with proper slugs
  - Added /cart page
  - Updated lastmod dates to 2025-10-02 for new pages
  - Proper priority and changefreq settings maintained
  - Verified all links match active routes (no broken links)
- **Accessibility**: sitemap.xml and robots.txt accessible via HTTP

### Sitemap & SEO Optimization (October 1, 2025)
- **XML Sitemap**: Created comprehensive sitemap.xml with all service and solution pages
  - Updated domain to severalsustain.in
  - Added new hierarchical service routes (design/pcb-design, design/web-design, development/firmware, development/hardware, development/app-development)
  - Included solution pages (milk-analyzer, dpu-amcu-systems)
  - Proper priority and changefreq settings for each page type
- **robots.txt**: Updated to reference correct sitemap URL (https://severalsustain.in/sitemap.xml)

### Company Information Update & Logo Refresh (October 1, 2025)
- **Logo Refresh**: Updated to new Several Sustain logo (circular design with water droplet and green/blue sustainability theme)
- **Applied to**: Header and Footer components site-wide
- **File**: `attached_assets/WhatsApp_Image_2025-10-01_at_1.27.41_PM-removebg-preview_1759322801060.png`
- **Company Information Updates**:
  - Updated legal name to Several Sustain Pvt. Ltd.
  - New tagline: "Innovating for a Smarter Future: Transforming Ideas into Sustainable Solutions"
  - Updated mission statement across About page
  - Updated contact information (email: info@severalsustain.in, phone: 06202428157)
  - Updated address to Bihar, India location
  - Updated website domain to severalsustain.in
  - Refreshed service descriptions to emphasize IoT, Web & App Development, and Analytical Instruments
- **SEO Implementation**: Added react-helmet-async for dynamic meta tags, OG tags, and JSON-LD structured data on Home page with complete company information
- **Prompt Alignment**: Working to match comprehensive production requirements including enhanced SEO, accessibility improvements, and complete documentation

### Comprehensive Page Enhancements (September 30, 2025)

#### Home Page Enhancements
- **Stats Section**: Added animated statistics block with 4 key metrics (50+ Projects, 30+ Clients, 98% Success Rate, 5+ Years)
- **Testimonials Carousel**: Implemented auto-rotating testimonial carousel with 5-star ratings, customer quotes, and profiles
- **Case Studies Preview**: Added featured case study grid with project cards linking to detailed case studies
- **CTAs**: Mid-page CTA for services exploration and contact form section serving as conversion-focused end-page CTA

#### Service Pages - Process Timelines & FAQs
All service pages enhanced with detailed 5-step development processes, FAQ accordions, and dual CTAs:

1. **PCB Design Page**:
   - Process: Requirements Analysis → Schematic Design → PCB Layout → Prototyping → Production
   - 5 FAQs covering layer counts, turnaround time, certifications, formats, and design reviews
   - Portfolio preview section and dual CTAs (Get Free Consultation + View Portfolio)

2. **Web Design Page**:
   - Process: Discovery → Design → Development → Testing → Launch  
   - 5 FAQs covering mobile-first, timelines, CMS, SEO, and ongoing support
   - Dual CTAs (Get Free Consultation + View Our Work)

3. **Hardware Development Page**:
   - Process: Requirements & Architecture → PCB Design → Prototyping → Testing → Production
   - 5 FAQs covering microcontrollers, firmware integration, prototyping, IoT, and power optimization
   - Dual CTAs (Get Free Consultation + View Our Projects)

4. **Firmware Programming Page**:
   - Process: Requirements → Core Development → Optimization & Debugging → Testing → Deployment
   - 5 FAQs covering languages, RTOS, safety-critical apps, OTA updates, and debugging tools
   - Dual CTAs (Get Free Consultation + View Our Work)

5. **App Development Page**:
   - Process: Discovery & Planning → UI/UX Design → Development & Integration → Testing → Deployment
   - 5 FAQs covering platforms, IoT connectivity, offline functionality, security, and maintenance
   - Dual CTAs (Get Free Consultation + View App Portfolio)

#### Solution Pages - Product Comparison & Testimonials

1. **Milk Analyzer Page**:
   - **Product Tiers**: Three comparison cards (Basic $8.5K, Professional $15K, Enterprise $25K)
   - Each tier details capacity, features, warranty, and target market
   - **Testimonials**: 3 customer success stories with 5-star ratings from collection center manager, quality control head, and laboratory manager
   - **CTA Section**: Dual CTAs (Request Demo + Download Brochure)

2. **DPU/AMCU Systems Page**:
   - **System Tiers**: Three comparison cards (DPU Basic $18K, AMCU Standard $35K, AMCU Premium $55K)
   - Each tier shows capacity, features, integrations, and warranty
   - **Testimonials**: 3 success stories with 5-star ratings from dairy cooperative manager, operations director, and dairy farmer
   - **CTA Section**: Dual CTAs (Schedule Site Visit + Download Catalog)

**Enhancement Patterns Applied**:
- Consistent glassmorphism design using GlassCard components
- Interactive FAQ accordions with rotating chevron indicators
- Process timelines with icons, durations, descriptions, and deliverable tags
- 5-star testimonial ratings with customer avatars and roles
- Product comparison cards with highlighted recommended tiers
- Conversion-focused dual CTAs on all pages
- Proper test IDs for QA and testing

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