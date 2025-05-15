import { Footer } from '@components/organisms/Footer'
import { Header } from '@components/organisms/Header'
import { useAuth } from '@hooks/useAuth'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContainer, AuthGrid } from './styles'

export function AuthTemplate() {
  const { isAuthenticated } = useAuth()

  return isAuthenticated ? (
    <Navigate
      to="/"
      replace
    />
  ) : (
    <AuthGrid>
      <Header />

      <AuthContainer>
        <Outlet />
      </AuthContainer>

      <Footer />
    </AuthGrid>
  )
}
