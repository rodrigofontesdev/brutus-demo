import { User } from '@models/User'
import { api } from './axios'

type SignUpBody = {
  cnpj: string
  fullName: string
  mobilePhone: string
  email: string
}

class AuthService {
  async signUp({ cnpj, fullName, mobilePhone, email }: SignUpBody) {
    return await api.post<User>('/sign-up', {
      cnpj,
      email,
      full_name: fullName,
      mobile_phone: mobilePhone,
    })
  }
}

export const authService = new AuthService()
