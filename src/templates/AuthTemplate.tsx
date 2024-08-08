import { Outlet } from 'react-router-dom'
import { Footer } from '../components/organisms/Footer'
import { Header } from '../components/organisms/Header'
import { AuthContainer, AuthGrid } from './styles'

export function AuthTemplate() {
  return (
    <AuthGrid>
      <Header />

      <AuthContainer>
        <Outlet />
      </AuthContainer>

      <Footer />
    </AuthGrid>
  )
}
