# Next.js SaaS RBAC

A modern, full-stack SaaS application built with Next.js, featuring Role-Based Access Control (RBAC), organization management, and project collaboration capabilities.

## 🌟 Features

- **🔐 Authentication & Authorization**
  - Email/password authentication
  - GitHub OAuth integration
  - Role-based access control (RBAC)
  - JWT token management

- **🏢 Organization Management**
  - Multi-tenant organization support
  - Member invitation system
  - Role-based permissions (Admin, Member, Billing)
  - Organization settings and billing

- **📁 Project Management**
  - Create and manage projects within organizations
  - Project-specific permissions
  - Basic project collaboration tools

- **🎨 Modern UI/UX**
  - Clean design with shadcn/ui components
  - Dark/light theme support
  - Accessible components built on Radix UI and Tailwind CSS

- **⚡ Performance**
  - Next.js 15 with App Router
  - Turbo for monorepo management
  - Optimized builds and caching

## 🏗️ Architecture

This project follows a monorepo structure with the following components:

- **`apps/web`** - Next.js frontend application
- **`apps/api`** - Fastify backend API
- **`packages/auth`** - Shared authentication and RBAC logic
- **`packages/env`** - Environment configuration

## 🚀 Quick Start

### Prerequisites

- Node.js 18 or higher
- pnpm 9.0.0 or higher
- PostgreSQL database

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd next-saas-rbac
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env
   ```

   Configure the following variables in your `.env` file:

   ```env
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/saas_rbac"

   # JWT
   JWT_SECRET="your-jwt-secret"

   # GitHub OAuth
   GITHUB_CLIENT_ID="your-github-client-id"
   GITHUB_CLIENT_SECRET="your-github-client-secret"

   # NextAuth
   NEXTAUTH_SECRET="your-nextauth-secret"
   NEXTAUTH_URL="http://localhost:3000"
   ```

4. **Set up the database**

   ```bash
   cd apps/api
   pnpm db:migrate
   pnpm db:seed
   ```

5. **Start the development servers**
   ```bash
   # From the root directory
   pnpm dev
   ```

This will start both the API server (port 3333) and the web application (port 3000).

## 📚 Documentation

- [API Documentation](./apps/api/README.md) - Backend API documentation
- [Web Application Documentation](./apps/web/README.md) - Frontend application documentation

## 🌐 Live Applications

- **Frontend**: [https://next-saas-rbac-web-two-lilac.vercel.app/](https://next-saas-rbac-web-two-lilac.vercel.app/)
- **API**: [https://next-saas-rbac-eu5k.onrender.com](https://next-saas-rbac-eu5k.onrender.com)
- **API Documentation**: [https://next-saas-rbac-eu5k.onrender.com/docs](https://next-saas-rbac-eu5k.onrender.com/docs)

## 🛠️ Tech Stack

### Frontend

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **shadcn/ui** - UI component library built on Radix UI and Tailwind CSS
- **React Query** - Data fetching and caching
- **NextAuth.js** - Authentication library

### Backend

- **Fastify** - Fast and low overhead web framework
- **Prisma** - Database ORM
- **PostgreSQL** - Primary database
- **JWT** - JSON Web Tokens for authentication
- **Zod** - Schema validation

### Development Tools

- **Turbo** - Monorepo build system
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **pnpm** - Package manager

## 📁 Project Structure

```
next-saas-rbac/
├── apps/
│   ├── api/                 # Fastify backend API
│   │   ├── src/
│   │   │   ├── http/        # HTTP server and routes
│   │   │   ├── lib/         # Shared libraries
│   │   │   └── utils/       # Utility functions
│   │   └── prisma/          # Database schema and migrations
│   └── web/                 # Next.js frontend
│       ├── src/
│       │   ├── app/         # App Router pages
│       │   ├── components/  # React components
│       │   ├── hooks/       # Custom React hooks
│       │   └── http/        # API client functions
├── packages/
│   ├── auth/                # Shared authentication logic
│   └── env/                 # Environment configuration
└── config/                  # Shared configuration files
```

## 🔧 Available Scripts

### Root Level

- `pnpm dev` - Start development servers
- `pnpm build` - Build all applications
- `pnpm lint` - Lint all packages
- `pnpm format` - Format code with Prettier
- `pnpm check-types` - Type check all packages

### API (`apps/api`)

- `pnpm dev` - Start development server
- `pnpm db:migrate` - Run database migrations
- `pnpm db:studio` - Open Prisma Studio
- `pnpm build` - Build for production
- `pnpm start` - Start production server

### Web (`apps/web`)

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide React](https://lucide.dev/)
- Built on [Radix UI](https://www.radix-ui.com/) and [Tailwind CSS](https://tailwindcss.com/)
