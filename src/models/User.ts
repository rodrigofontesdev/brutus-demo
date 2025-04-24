import { MeiCategory } from './MeiCategory'

export type User = {
  id: string
  role: string
  email: string
  full_name: string
  cnpj: string
  mobile_phone: string
  city: string | null
  state: string | null
  secret_word: string | null
  opening_date: MeiCategory | null
  created_at: string
  updated_at: string
  deleted_at: string | null
}
