import { useMatches } from 'react-router-dom'

export function useRouter() {
  const routes = useMatches()

  const isRoute = (routeName: string) => {
    return routes.some((route) => route.id.startsWith(routeName))
  }

  return { isRoute }
}
