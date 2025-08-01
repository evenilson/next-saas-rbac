import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    PORT: z.coerce.number().default(3333),
    DATABASE_URL: z.url(),

    JWT_SECRET: z.string(),

    GITHUB_OAUTH_CLIENT_ID: z.string(),
    GITHUB_OAUTH_CLIENT_SECRET: z.string(),
    GITHUB_OAUTH_REDIRECT_URI: z.url(),
  },
  client: {},
  shared: {
    NEXT_PUBLIC_API_URL: z.url(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    PORT: process.env.PORT,
    DATABASE_URL: process.env.DATABASE_URL,
    JWT_SECRET: process.env.JWT_SECRET,
    GITHUB_OAUTH_CLIENT_ID: process.env.GITHUB_OAUTH_CLIENT_ID,
    GITHUB_OAUTH_CLIENT_SECRET: process.env.GITHUB_OAUTH_CLIENT_SECRET,
    GITHUB_OAUTH_REDIRECT_URI: process.env.GITHUB_OAUTH_REDIRECT_URI,
  },
  emptyStringAsUndefined: true,
})
