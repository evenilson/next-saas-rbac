import { z } from 'zod'

export const billingSubjetc = z.tuple([
  z.union([z.literal('manage'), z.literal('get'), z.literal('export')]),
  z.literal('Billing'),
])

export type BillingSubjetc = z.infer<typeof billingSubjetc>
