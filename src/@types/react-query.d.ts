import '@tanstack/react-query'
import { AxiosError } from 'axios'

type ApiError = {
  type: string
  message: string
  path: string
  started_at: string
  errors?: string[]
}

declare module '@tanstack/react-query' {
  interface Register {
    defaultError: AxiosError<ApiError>
  }
}
