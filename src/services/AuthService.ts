import { User } from '@models/User'
import { api } from './axios'

type SignUpBody = {
  cnpj: string
  fullName: string
  mobilePhone: string
  email: string
}

type SignInBody = {
  cnpj: string
}

type AuthenticateBody = {
  token: string
  redirect?: string
}

type AuthenticateResponse = {
  message: string
  redirect: string
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

  async signIn({ cnpj }: SignInBody) {
    return await api.post('/sign-in', {
      cnpj,
    })
  }

  async authenticate({ token, redirect }: AuthenticateBody) {
    return await api.post<AuthenticateResponse>('/authenticate', {
      token,
      redirect,
    })
  }

  async getAuthenticatedUser() {
    return await api.get<User>('/me')
  }
}

export const authService = new AuthService()
