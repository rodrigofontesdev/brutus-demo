import { QueryClient } from '@tanstack/react-query'

const ONE_MINUTE_IN_MILLISECONDS = 1 * 60 * 1000

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: ONE_MINUTE_IN_MILLISECONDS * 5,
      gcTime: ONE_MINUTE_IN_MILLISECONDS * 10,
    },
  },
})
