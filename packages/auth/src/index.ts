import { AbilityBuilder, createMongoAbility } from '@casl/ability'
import type { CreateAbility, MongoAbility } from '@casl/ability'
import type { User } from './models/user'
import { permissions } from './permissions'
import { userSubjetc } from './subjects/user'
import { projectSubjetc } from './subjects/project'
import z from 'zod'
import { organizationSubjetc } from './subjects/organization'
import { inviteSubjetc } from './subjects/invite'
import { billingSubjetc } from './subjects/billing'

export * from './models/organization'
export * from './models/project'
export * from './models/user'
export * from './roles'

const appAbilitiesSchema = z.union([
  projectSubjetc,
  userSubjetc,
  organizationSubjetc,
  inviteSubjetc,
  billingSubjetc,

  z.tuple([z.literal('manage'), z.literal('all')]),
])

type AppAbilities = z.infer<typeof appAbilitiesSchema>

export type AppAbility = MongoAbility<AppAbilities>
export const createAppAbility = createMongoAbility as CreateAbility<AppAbility>

export function defineAbilityFor(user: User) {
  const builder = new AbilityBuilder(createAppAbility)

  if (typeof permissions[user.role] !== 'function') {
    throw new Error(`Permissions for role ${user.role} not found`)
  }

  permissions[user.role](user, builder)

  const ability = builder.build({
    detectSubjectType(subject) {
      return subject.__typename
    },
  })

  ability.can = ability.can.bind(ability)
  ability.cannot = ability.cannot.bind(ability)

  return ability
}
