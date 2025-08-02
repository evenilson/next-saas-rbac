# API Backend

A high-performance REST API built with Fastify, featuring authentication, role-based access control, and comprehensive organization management.

## 🚀 Quick Start

### Prerequisites

- Node.js 18 or higher
- PostgreSQL database
- pnpm package manager

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
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/saas_rbac"
   
   # JWT
   JWT_SECRET="your-super-secret-jwt-key"
   
   # GitHub OAuth
   GITHUB_CLIENT_ID="your-github-client-id"
   GITHUB_CLIENT_SECRET="your-github-client-secret"
   
   # Server
   PORT=3333
   HOST="0.0.0.0"
   ```

3. **Set up the database**
   ```bash
   # Run migrations
   pnpm db:migrate
   
   # Seed the database (optional)
   pnpm db:seed
   ```

4. **Start development server**
   ```bash
   pnpm dev
   ```

The API will be available at `http://localhost:3333`

## 📚 API Documentation

Once the server is running, you can access the interactive API documentation at:
- **Swagger UI**: `http://localhost:3333/documentation`
- **OpenAPI JSON**: `http://localhost:3333/documentation/json`

### Production API Documentation

The live API documentation is available at:
- **API Documentation**: [https://next-saas-rbac-eu5k.onrender.com/docs](https://next-saas-rbac-eu5k.onrender.com/docs)

## 🏗️ Architecture

### Tech Stack

- **Fastify** - High-performance web framework
- **Prisma** - Database ORM with type safety
- **PostgreSQL** - Primary database
- **JWT** - Authentication tokens
- **Zod** - Schema validation
- **bcryptjs** - Password hashing
- **Swagger** - API documentation

### Project Structure

```
src/
├── http/
│   ├── server.ts              # Main server setup
│   ├── error-handler.ts       # Global error handling
│   ├── middlewares/
│   │   └── auth.ts           # Authentication middleware
│   └── routes/
│       ├── auth/             # Authentication routes
│       ├── orgs/             # Organization routes
│       ├── projects/         # Project routes
│       ├── members/          # Member management routes
│       ├── invites/          # Invitation routes
│       └── billing/          # Billing routes
├── lib/
│   └── prisma.ts            # Prisma client setup
└── utils/
    ├── create-slug.ts       # Slug generation utility
    └── get-user-permissions.ts # Permission checking
```

## 🔐 Authentication

The API supports multiple authentication methods:

### 1. Email/Password Authentication

```http
POST /auth/sign-up
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword"
}
```

```http
POST /auth/sign-in
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securepassword"
}
```

### 2. GitHub OAuth

```http
POST /auth/github
Content-Type: application/json

{
  "code": "github_oauth_code"
}
```

### 3. JWT Token Usage

Include the JWT token in the Authorization header:

```http
Authorization: Bearer <your-jwt-token>
```

## 🏢 Organization Management

### Create Organization

```http
POST /orgs
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "My Company",
  "domain": "mycompany.com"
}
```

### Get Organizations

```http
GET /orgs
Authorization: Bearer <token>
```

### Update Organization

```http
PUT /orgs/:slug
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Updated Company Name",
  "domain": "updated.com"
}
```

## 👥 Member Management

### Get Members

```http
GET /orgs/:slug/members
Authorization: Bearer <token>
```

### Update Member Role

```http
PUT /orgs/:slug/members/:memberId
Authorization: Bearer <token>
Content-Type: application/json

{
  "role": "ADMIN"
}
```

### Remove Member

```http
DELETE /orgs/:slug/members/:memberId
Authorization: Bearer <token>
```

## 📧 Invitation System

### Create Invite

```http
POST /orgs/:slug/invites
Authorization: Bearer <token>
Content-Type: application/json

{
  "email": "newmember@example.com",
  "role": "MEMBER"
}
```

### Get Invites

```http
GET /orgs/:slug/invites
Authorization: Bearer <token>
```

### Accept Invite

```http
POST /invites/:id/accept
Authorization: Bearer <token>
```

### Reject Invite

```http
POST /invites/:id/reject
Authorization: Bearer <token>
```

## 📁 Project Management

### Create Project

```http
POST /orgs/:slug/projects
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "My Project",
  "description": "Project description"
}
```

### Get Projects

```http
GET /orgs/:slug/projects
Authorization: Bearer <token>
```

### Update Project

```http
PUT /orgs/:slug/projects/:projectSlug
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Updated Project Name",
  "description": "Updated description"
}
```

## 🔐 Role-Based Access Control

The API implements a comprehensive RBAC system with the following roles:

### Roles

- **ADMIN** - Full access to organization and all resources
- **MEMBER** - Standard access to projects and basic organization features
- **BILLING** - Access to billing information and payment management

### Permissions

Each role has specific permissions:

- **ADMIN**: Can manage members, invites, projects, and organization settings
- **MEMBER**: Can view and contribute to projects, view organization info
- **BILLING**: Can view and manage billing information

## 🗄️ Database Schema

### Core Models

- **User** - User accounts and authentication
- **Organization** - Multi-tenant organizations
- **Member** - Organization membership with roles
- **Project** - Projects within organizations
- **Invite** - Organization invitations
- **Token** - Password recovery tokens
- **Account** - OAuth provider accounts

### Relationships

- Users can belong to multiple organizations
- Organizations have one owner and multiple members
- Projects belong to organizations
- Invites are linked to organizations and users

## 🔧 Development

### Available Scripts

- `pnpm dev` - Start development server with hot reload
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm db:migrate` - Run database migrations
- `pnpm db:studio` - Open Prisma Studio
- `pnpm lint` - Lint code
- `pnpm lint:check` - Check linting without fixing

### Database Management

```bash
# Create a new migration
pnpm db:migrate

# Reset database (development only)
pnpm db:reset

# Open Prisma Studio
pnpm db:studio

# Seed database
pnpm db:seed
```

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | PostgreSQL connection string | Yes |
| `JWT_SECRET` | Secret for JWT token signing | Yes |
| `GITHUB_CLIENT_ID` | GitHub OAuth client ID | No |
| `GITHUB_CLIENT_SECRET` | GitHub OAuth client secret | No |
| `PORT` | Server port (default: 3333) | No |
| `HOST` | Server host (default: 0.0.0.0) | No |

## 🚀 Deployment

### Production Build

```bash
# Install dependencies
pnpm install --frozen-lockfile

# Build the application
pnpm build

# Start the server
pnpm start
```

### Environment Setup

Make sure to set the following environment variables in production:

- `DATABASE_URL` - Production PostgreSQL URL
- `JWT_SECRET` - Strong, unique secret for JWT signing
- `NODE_ENV=production`

### Docker Deployment

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

EXPOSE 3333

CMD ["pnpm", "start"]
```

## 📊 Monitoring

The API includes basic monitoring capabilities:

- Request/response logging
- Error tracking
- Health check endpoint at `/health`

## 🔒 Security

### Security Features

- JWT token authentication
- Password hashing with bcrypt
- CORS protection
- Input validation with Zod
- SQL injection protection via Prisma

### Best Practices

- Always validate input data
- Use HTTPS in production
- Implement proper error handling
- Log security events
- Regular dependency updates

 