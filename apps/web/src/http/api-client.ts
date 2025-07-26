import { env } from '@saas/env'
import ky from 'ky'

export const api = ky.create({
  prefixUrl: env.NEXT_PUBLIC_API_URL,
  hooks: {
    beforeRequest: [
      async (request) => {
        let token: string | undefined

        if (typeof window === 'undefined') {
          // Server side: use next/headers cookies()
          const { cookies } = await import('next/headers')
          const cookieStore = await cookies()
          token = cookieStore.get('token')?.value
        } else {
          // Client side: use document.cookie
          const match = document.cookie.match(new RegExp('(^| )token=([^;]+)'))
          token = match ? match[2] : undefined
        }

        if (token) {
          request.headers.set('Authorization', `Bearer ${token}`)
        }
      },
    ],
  },
})
