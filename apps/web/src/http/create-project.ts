import { api } from './api-client'

interface ProjectRequest {
  org: string
  name: string
  description: string
}

type ProjectResponse = void

export async function project({
  org,
  name,
  description,
}: ProjectRequest): Promise<ProjectResponse> {
  await api.post(`organizations/${org}/projects`, {
    json: {
      name,
      description,
    },
  })
}
