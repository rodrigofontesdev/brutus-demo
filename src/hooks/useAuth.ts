import { authService } from '@services/AuthService'
import { queryClient } from '@services/react-query'
import { queryOptions } from '@tanstack/react-query'

export const getAuthenticatedUserOptions = queryOptions({
  queryKey: ['me'],
  queryFn: authService.getAuthenticatedUser,
  refetchOnMount: false,
  refetchOnReconnect: false,
  refetchOnWindowFocus: false,
  retry(failureCount, error) {
    let canRetry

    switch (error.response?.data.type) {
      case 'AUTHENTICATION_ERROR':
      case 'AUTHORIZATION_ERROR':
        canRetry = false
        break
      default:
        canRetry = failureCount < 3
    }

    return canRetry
  },
})

export function useAuth() {
  const authenticatedUser = queryClient.getQueryData(getAuthenticatedUserOptions.queryKey)
  const isAuthenticated = authenticatedUser !== undefined

  return {
    isAuthenticated,
    authenticatedUser,
  }
}
