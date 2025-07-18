import { z } from 'zod'
import { projectSchema } from '../models/project'

export const projectSubjetc = z.tuple([
  z.union([
    z.literal('manage'),
    z.literal('get'),
    z.literal('create'),
    z.literal('update'),
    z.literal('delete'),
  ]),
  z.union([z.literal('Project'), projectSchema]),
])

export type ProjectSubjetc = z.infer<typeof projectSubjetc>
