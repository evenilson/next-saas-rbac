import { z } from 'zod'

export const inviteSubjetc = z.tuple([
  z.union([
    z.literal('manage'),
    z.literal('create'),
    z.literal('get'),
    z.literal('update'),
    z.literal('delete'),
  ]),
  z.literal('Invite'),
])

export type InviteSubjetc = z.infer<typeof inviteSubjetc>
