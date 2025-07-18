import { defineAbilityFor, projectSchema } from '@saas/auth'

const user = defineAbilityFor({ role: 'MEMBER', id: 'user-id' })

const project = projectSchema.parse({ id: 'project-id', ownerId: 'user-id' })

console.log(user.can('get', 'Billing'))
console.log(user.can('create', 'Invite'))
console.log(user.can('delete', project))
