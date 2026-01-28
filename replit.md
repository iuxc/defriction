# Defriction Design Portfolio

## Overview

Defriction Design is a high-performance portfolio website showcasing digital strategy and UX design work. The site features a dark-themed, high-contrast aesthetic ("Vibrant Utility") with case studies, an interactive Monash University prototype, and a contact system. Built as a full-stack React application with Express backend, it serves as both a portfolio showcase and a demonstration of complex UI/UX capabilities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS v4 with custom design tokens defined in `client/src/index.css`
- **UI Components**: shadcn/ui (New York style) with Radix UI primitives
- **Animations**: Framer Motion for page transitions and micro-interactions
- **State Management**: TanStack React Query for server state
- **Build Tool**: Vite with custom plugins for SEO meta images

### Design System
The site uses a strict "Vibrant Utility" color palette:
- Volt Lime (#D4FF00) - Primary actions
- Deep Basalt (#0B0F19) - Dark backgrounds
- Ion Cyan (#00E0FF) - Links and tech markers
- Electric Violet (#7C3AED) - Secondary/data elements
- Flux Orange (#FF5500) - Alerts and hover states
- Vapor White (#F9FAFB) - Reading text

Typography uses Space Grotesk (headlines), DM Sans (body), and Space Mono (code/data).

### Backend Architecture
- **Runtime**: Node.js with Express 5
- **Language**: TypeScript with ESM modules
- **Development**: tsx for TypeScript execution
- **Production Build**: esbuild bundles server code to CommonJS

### Nested Application Pattern
The Monash prototype lives as a separate React application inside `/client/src/monash-app/` with its own:
- Routing (mounted at `/monash/prototype/*`)
- Theme context and styling (`monash-app/index.css`)
- Light-mode design system (separate from main dark portfolio)

This allows showcasing a complete prototype within the portfolio without style conflicts.

### Authentication
- Simple password protection using localStorage (password: "defriction")
- No user accounts or session management currently implemented
- Database schema exists for users table but is not actively used

### Data Layer
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: Located in `shared/schema.ts`
- **Migrations**: Managed via drizzle-kit (`db:push` command)
- Currently minimal schema - users table only

## External Dependencies

### Email Service
- **Resend**: Used for contact form submissions
- Integration in `server/resend.ts` uses Replit Connectors for credentials
- Emails sent to brian@defriction.design

### Database
- **PostgreSQL**: Required via `DATABASE_URL` environment variable
- Uses `connect-pg-simple` for session storage capability
- Drizzle ORM handles schema and queries

### Fonts
- Google Fonts loaded via CDN (DM Sans, Space Grotesk, Space Mono)
- Monash prototype uses separate font stack (Domine, Inter, Roboto Mono)

### Development Tools
- Replit-specific Vite plugins for error overlay, cartographer, and dev banner
- Custom `vite-plugin-meta-images` for OpenGraph image URL handling

### Key NPM Packages
- `@tanstack/react-query` - Server state management
- `framer-motion` - Animations
- `wouter` - Client-side routing
- `react-hook-form` - Form handling
- `zod` - Schema validation
- Full shadcn/ui component library via Radix primitives