# Web Application

A modern web application built with Next.js 15, featuring a clean UI for managing organizations, projects, and team collaboration with role-based access control.

## 🚀 Quick Start

### Prerequisites

- Node.js 18 or higher
- pnpm package manager
- API backend running (see [API README](../api/README.md))

### Installation

1. **Install dependencies**

   ```bash
   pnpm install
   ```

2. **Set up environment variables**

   ```bash
   cp .env.example .env
   ```

   Configure your `.env` file:

   ```env
   # NextAuth
   NEXTAUTH_SECRET="your-nextauth-secret"
   NEXTAUTH_URL="http://localhost:3000"

   # API
   NEXT_PUBLIC_API_URL="http://localhost:3333"

   # GitHub OAuth
   GITHUB_CLIENT_ID="your-github-client-id"
   GITHUB_CLIENT_SECRET="your-github-client-secret"
   ```

3. **Start development server**
   ```bash
   pnpm dev
   ```

The application will be available at `http://localhost:3000`

## 🌟 Features

### 🔐 Authentication

- **Email/Password Sign Up & Sign In**
- **GitHub OAuth Integration**
- **Password Recovery**
- **Secure Session Management**

### 🏢 Organization Management

- **Create and Manage Organizations**
- **Multi-tenant Architecture**
- **Organization Settings**

### 👥 Team Collaboration

- **Member Invitation System**
- **Role-based Access Control**
- **Member Management**

### 📁 Project Management

- **Create and Manage Projects**
- **Project Organization**
- **Basic Project Settings**

### 🎨 User Experience

- **Clean Design**
- **Dark/Light Theme**
- **Modern UI Components**
- **Intuitive Navigation**

## 🏗️ Architecture

### Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **shadcn/ui** - UI component library built on Radix UI and Tailwind CSS
- **React Query** - Data fetching and caching
- **NextAuth.js** - Authentication library
- **Lucide React** - Beautiful icons

### Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (app)/             # Protected app routes
│   │   ├── org/           # Organization pages
│   │   ├── create-organization/
│   │   └── layout.tsx     # App layout
│   ├── auth/              # Authentication pages
│   │   ├── sign-in/
│   │   ├── sign-up/
│   │   └── forgot-password/
│   ├── invite/            # Invitation pages
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── ui/               # Base UI components
│   ├── header.tsx        # Main header
│   ├── organization-switcher.tsx
│   └── project-switcher.tsx
├── hooks/                # Custom React hooks
├── http/                 # API client functions
├── lib/                  # Utility libraries
└── middleware.ts         # Next.js middleware
```

## 🎨 UI Components

### Design System

The application uses a comprehensive design system built with:

- **shadcn/ui** for UI components built on Radix UI and Tailwind CSS
- **Class Variance Authority** for component variants
- **Custom theme system** with dark/light mode

### Key Components

- **Header** - Main navigation with organization switcher
- **Tabs** - Organization and project navigation
- **Forms** - Consistent form components with validation
- **Modals** - Sheet-based modal system
- **Tables** - Data display components
- **Cards** - Content containers

## 🔐 Authentication Flow

### Sign Up Process

1. User fills out registration form
2. Account creation
3. Automatic sign-in

### Sign In Process

1. User enters credentials
2. JWT token generation
3. Session establishment
4. Redirect to dashboard

### OAuth Integration

- **GitHub OAuth** for seamless authentication
- **Automatic account linking**
- **Profile synchronization**

## 🏢 Organization Features

### Organization Creation

- **Simple setup wizard**
- **Domain verification**
- **Initial project creation**
- **Member invitation**

### Organization Management

- **Settings page** with organization details
- **Member management** with role assignment
- **Billing information** and subscription management
- **Organization deletion** (admin only)

### Role-Based Access

- **ADMIN** - Full organization control
- **MEMBER** - Standard access
- **BILLING** - Financial management

## 👥 Team Collaboration

### Member Invitation

- **Email-based invitations**
- **Role assignment**
- **Invitation tracking**
- **Acceptance/rejection flow**

### Member Management

- **Member list view**
- **Role updates**
- **Member removal**

## 📁 Project Management

### Project Creation

- **Simple project setup**
- **Description and metadata**
- **Organization association**

### Project Organization

- **Project listing**
- **Project settings**
- **Basic collaboration tools**

## 🎯 Key Pages

### Authentication Pages

- **Sign In** (`/auth/sign-in`) - User authentication
- **Sign Up** (`/auth/sign-up`) - Account creation
- **Forgot Password** (`/auth/forgot-password`) - Password recovery

### Dashboard Pages

- **Dashboard** (`/`) - Main application overview
- **Organizations** (`/org/[slug]`) - Organization management
- **Projects** (`/org/[slug]/(projects)`) - Project listing
- **Members** (`/org/[slug]/members`) - Team management
- **Settings** (`/org/[slug]/settings`) - Organization settings

### Project Pages

- **Project Details** (`/org/[slug]/project/[project]`) - Project overview

## 🔧 Development

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Lint code

### Development Workflow

1. **Start the API server** (see API README)
2. **Start the web application**
   ```bash
   pnpm dev
   ```
3. **Access the application** at `http://localhost:3000`

### Environment Variables

| Variable               | Description                | Required |
| ---------------------- | -------------------------- | -------- |
| `NEXTAUTH_SECRET`      | NextAuth secret key        | Yes      |
| `NEXTAUTH_URL`         | Application URL            | Yes      |
| `NEXT_PUBLIC_API_URL`  | API server URL             | Yes      |
| `GITHUB_CLIENT_ID`     | GitHub OAuth client ID     | No       |
| `GITHUB_CLIENT_SECRET` | GitHub OAuth client secret | No       |

## 🚀 Deployment

### Vercel Deployment

The application is optimized for Vercel deployment:

1. **Connect repository** to Vercel
2. **Set environment variables** in Vercel dashboard
3. **Deploy automatically** on push to main branch

### Environment Setup

Make sure to configure the following in production:

- `NEXTAUTH_SECRET` - Strong, unique secret
- `NEXTAUTH_URL` - Production URL
- `NEXT_PUBLIC_API_URL` - Production API URL
- `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET` (if using OAuth)

## 🎨 Styling

### Tailwind CSS

The application uses Tailwind CSS for styling with:

- **Custom color palette**
- **Theme system**
- **Component variants**

### Theme System

- **Light theme** - Clean, professional appearance
- **Dark theme** - Easy on the eyes
- **Automatic theme detection**
- **Theme persistence**

## 🔒 Security

### Security Features

- **CSRF protection**
- **XSS prevention**
- **Secure session management**
- **Input validation**
- **HTTPS enforcement**

### Best Practices

- **Environment variable protection**
- **Secure authentication flow**
- **Proper error handling**
- **Content Security Policy**

## 🌐 Live Application

The application is deployed and available at:
**https://next-saas-rbac-web-two-lilac.vercel.app/**

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide React](https://lucide.dev/)
- Built on [Radix UI](https://www.radix-ui.com/) and [Tailwind CSS](https://tailwindcss.com/)
