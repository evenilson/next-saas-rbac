import { z } from 'zod'
import { organizationSchema } from '../models/organization'

export const organizationSubjetc = z.tuple([
  z.union([
    z.literal('manage'),
    z.literal('update'),
    z.literal('delete'),
    z.literal('transfer_ownership'),
  ]),
  z.union([z.literal('Organization'), organizationSchema]),
])

export type OrganizationSubjetc = z.infer<typeof organizationSubjetc>
