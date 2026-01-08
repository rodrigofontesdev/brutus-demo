import '@tanstack/react-query'
import { AxiosError } from 'axios'

type ApiErrorType =
  | 'API_ERROR'
  | 'AUTHENTICATION_ERROR'
  | 'AUTHORIZATION_ERROR'
  | 'AUTHENTICATION_ERROR'
  | 'INVALID_REQUEST_ERROR'
  | 'UNSUPPORTED_METHOD_ERROR'
  | 'NOT_FOUND_ERROR'
  | 'RATE_LIMIT_ERROR'

type ApiError = {
  type: ApiErrorType
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
