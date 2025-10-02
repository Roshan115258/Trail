# Several Sustain - Electronics Development Platform

## Overview
Several Sustain Pvt. Ltd. is an Indian engineering company specializing in Embedded Systems, IoT Product Design, Web & App Development, and Analytical Instruments. The platform offers end-to-end engineering solutions including PCB Design, Hardware Development, Firmware Development, Web Development, and App Development, showcasing specialized products like Milk Analyzers and DPU & AMCU systems. The company's vision is "Innovating for a Smarter Future: Transforming Ideas into Sustainable Solutions." The application features a modern, responsive design with e-commerce capabilities for dairy equipment, contact forms, newsletter subscriptions, service pages, and detailed case studies, aiming to provide comprehensive information and lead generation.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
**Technology Stack:**
- **Framework:** React 18 with TypeScript
- **Routing:** Wouter
- **UI Components:** Shadcn/ui (Radix UI primitives with Tailwind CSS)
- **Styling:** Tailwind CSS with custom design system
- **State Management:** TanStack Query (React Query) for server state
- **Form Handling:** React Hook Form with Zod validation
- **Build Tool:** Vite

**Design System:**
- Custom glassmorphism design with CSS variables for theming
- Consistent color palette (primary green #15803d, secondary amber)
- Responsive, mobile-first design using Inter font family.
- Reusable UI components from Shadcn/ui library.

**Key Features:**
- SEO-optimized pages with meta tags and Open Graph support.
- Google Analytics integration.
- Responsive navigation.
- Animated components with Tailwind animations.
- Accessibility-first component design.
- Client-side shopping cart with localStorage persistence and Formspree checkout integration.

### Backend Architecture
**Technology Stack:**
- **Runtime:** Node.js with Express.js (serverless via Netlify Functions)
- **Language:** JavaScript (CommonJS) for serverless functions
- **Serverless Adapter:** serverless-http for Express → Lambda conversion
- **Middleware:** CORS, express.json()
- **Validation:** Custom validation helpers (migrated from Zod)

**API Design:**
- RESTful endpoints under `/api/*` prefix
- JSON request/response format
- Centralized error handling
- Available endpoints:
  - `GET /api/health` - Health check
  - `GET /api/products` - List all products
  - `GET /api/products/:slug` - Get product by slug
  - `POST /api/contact` - Contact form submission
  - `POST /api/newsletter` - Newsletter subscription

**Deployment Architecture (Hybrid):**
- **Development:** Express server running on port 5000 via `npm run dev`
- **Production (Netlify):**
  - Static frontend served from `dist/public` via Netlify CDN
  - API routes handled by Netlify Functions (serverless Express)
  - Rewrites: `/api/*` → `/.netlify/functions/server/:splat`
  - Products data bundled with serverless function (`src/products.json`)

### Data Storage Solutions
**Database Schema (PostgreSQL):**
- **Users Table:** UUID primary key, username, password.
- **Contacts Table:** UUID primary key, contact info, service selection, message, consent, timestamp.
- **Newsletter Subscriptions Table:** UUID primary key, unique email, timestamp.
**Storage Strategy:**
- In-memory storage (MemStorage) for development/testing.
- PostgreSQL production deployment via Drizzle ORM.
- Migration support through Drizzle Kit.
- Shared schema types between client and server for type safety.

### System Design Choices
- **Hybrid Architecture:** Static frontend (JAMstack) + Serverless Express API via Netlify Functions
  - Frontend: Vite builds to `dist/public`, served by Netlify CDN
  - Backend: Express app in `src/app.js`, wrapped by `netlify/functions/server.js` using serverless-http
  - Routing: API requests (`/api/*`) rewritten to `/.netlify/functions/server/:splat`
  - SPA routing: All non-API routes serve `index.html` (status 200 rewrite)
- **Project Structure:**
  ```
  ├── src/
  │   ├── app.js              # Express API routes (serverless-ready)
  │   └── products.json       # Products data bundled with function
  ├── netlify/
  │   └── functions/
  │       └── server.js       # Serverless wrapper (serverless-http)
  ├── client/                 # React frontend (Vite build)
  ├── dist/public/            # Build output (static files)
  └── netlify.toml            # Netlify configuration
  ```
- **Sitemap & SEO:** Comprehensive `sitemap.xml` and `robots.txt` for improved crawlability, `react-helmet-async` for dynamic meta tags and structured data.
- **Navigation:** Hierarchical navigation with dropdowns for services, and redirect routes for backward compatibility.

## External Dependencies

### Third-Party Services
1.  **Google Analytics:** For user behavior tracking.
2.  **Neon Database:** Serverless PostgreSQL hosting (for backend services not deployed on Netlify directly).
3.  **Formspree:** For handling all form submissions (Contact, Newsletter, Checkout).
4.  **Netlify:** Static site hosting and deployment.

### Key Libraries
1.  **UI/UX:** Radix UI, Lucide React, Embla Carousel, Vaul.
2.  **Forms & Validation:** React Hook Form, Zod, @hookform/resolvers.
3.  **Development Tools:** Replit-specific plugins, Vite, esbuild, PostCSS.