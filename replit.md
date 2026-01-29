# Defriction Design Portfolio

## Overview

Defriction Design is a high-performance portfolio website showcasing digital strategy and UX design work. The site features a main portfolio with case studies (notably a Monash University admissions redesign project) and includes an embedded interactive prototype demonstrating the proposed solution. The project follows a "Vibrant Utility" design aesthetic with high-contrast, electric colors on dark backgrounds.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS v4 with custom CSS variables for brand colors
- **UI Components**: shadcn/ui component library (New York style)
- **Animations**: Framer Motion for smooth transitions and micro-interactions
- **State Management**: TanStack React Query for server state

### Application Structure
The frontend has two distinct sections:
1. **Main Portfolio** (`client/src/`) - Dark theme portfolio with hero, work grid, method section, about, and contact
2. **Monash Prototype** (`client/src/monash-app/`) - Light theme embedded prototype demonstrating the case study solution

### Backend Architecture
- **Runtime**: Node.js with Express 5
- **Build Tool**: Vite for frontend, esbuild for server bundling
- **API Pattern**: RESTful endpoints under `/api/`
- **Static Serving**: Express serves built frontend in production

### Database
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema Location**: `shared/schema.ts`
- **Migrations**: Drizzle Kit with migrations in `/migrations`
- **Current Schema**: Basic users table (id, username, password)

### Key Design Patterns
- **Monorepo Structure**: Client, server, and shared code in one repository
- **Path Aliases**: `@/` for client source, `@shared/` for shared modules
- **Type Safety**: Zod schemas with drizzle-zod for validation
- **Password Protection**: Simple client-side gate for portfolio preview access

## External Dependencies

### Email Service
- **Resend**: Email delivery for contact form submissions
- Uses Replit's connector system for credential management
- Endpoint: `POST /api/contact`

### Fonts (Google Fonts)
- Space Grotesk (display/headlines)
- DM Sans (body text)
- Space Mono (technical/data elements)
- Domine, Inter, Roboto Mono (prototype section)

### Development Tools
- Replit-specific Vite plugins for dev experience (cartographer, dev-banner, runtime-error-modal)
- Custom meta images plugin for OpenGraph tag management

### Session Storage
- connect-pg-simple available for PostgreSQL session storage
- Currently using in-memory storage for development