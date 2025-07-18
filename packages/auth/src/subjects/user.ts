import { z } from 'zod'

export const userSubjetc = z.tuple([
  z.union([
    z.literal('manage'),
    z.literal('get'),
    z.literal('update'),
    z.literal('delete'),
  ]),
  z.literal('User'),
])

export type UserSubjetc = z.infer<typeof userSubjetc>
