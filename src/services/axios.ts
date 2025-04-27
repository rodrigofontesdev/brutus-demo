import axios from 'axios'
import { authService } from './AuthService'

const { VITE_API_URL } = import.meta.env

export const api = axios.create({
  baseURL: `${VITE_API_URL}/api/v1`,
  withCredentials: true,
  withXSRFToken: true,
  headers: {
    Accept: 'application/json',
  },
})

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { status, config } = error.response

    if (status === 419) {
      await authService.getCsrfToken()

      return api(config)
    }

    return Promise.reject(error)
  }
)
