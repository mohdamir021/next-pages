export interface Task {
  id: number
  uuid: string
  user_id?: number
  name: string
  description: string
  status: string
  created_at: string
  updated_at: string
  user?: User
}

export interface User {
  id: number
  name: string
  email: string
  email_verified_at: any
  created_at: string
  updated_at: string
}