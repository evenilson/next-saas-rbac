'use server'

import { signInWithPassword } from '@/http/sign-in-with-password'
import { HTTPError } from 'ky'
import { cookies } from 'next/headers'
import { z } from 'zod'

const signInSchema = z.object({
  email: z.email({ message: 'Please, provide a valid e-mail address.' }),
  password: z.string().min(1, 'Please, provide your password.'),
})

export async function signInWithEmailAndPassword(data: FormData) {
  const result = signInSchema.safeParse(Object.fromEntries(data))

  if (!result.success) {
    const errors: Record<string, string[]> = {}

    for (const issue of result.error.issues) {
      const path = issue.path.join('.')

      if (!path) continue

      if (!errors[path]) {
        errors[path] = []
      }

      errors[path].push(issue.message)
    }

    return {
      success: false,
      message: null,
      errors,
    }
  }

  const { email, password } = result.data

  try {
    const { token } = await signInWithPassword({
      email,
      password,
    })

    ;(await cookies()).set('token', token, {
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    })
  } catch (error) {
    if (error instanceof HTTPError) {
      const { message } = await error.response.json()

      return { success: false, message, errors: null }
    }

    console.error(error)

    return {
      success: false,
      message: 'An unexpected error occurred. Please try again later.',
      errors: null,
    }
  }

  return { success: true, message: null, errors: null }
}
