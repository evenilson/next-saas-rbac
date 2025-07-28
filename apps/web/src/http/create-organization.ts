import { api } from './api-client'

interface OrganizationRequest {
  name: string
  domain: string | null
  shouldAttachUserByDomain: boolean
}

type OrganizationResponse = void

export async function organization({
  name,
  domain,
  shouldAttachUserByDomain,
}: OrganizationRequest): Promise<OrganizationResponse> {
  await api.post('organizations', {
    json: {
      name,
      domain,
      shouldAttachUserByDomain,
    },
  })
}
