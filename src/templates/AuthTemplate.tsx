import { Outlet } from 'react-router-dom'
import { Footer } from '../components/organisms/Footer'
import { Header } from '../components/organisms/Header'
import { AuthContainer } from './styles'

export function AuthTemplate() {
  return (
    <>
      <Header />

      <AuthContainer>
        <Outlet />
      </AuthContainer>

      <Footer />
    </>
  )
}
