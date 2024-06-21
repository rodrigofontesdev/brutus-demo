import { Outlet } from 'react-router-dom'
import { Footer } from '../components/organisms/Footer'
import { HeaderAuth } from '../components/organisms/HeaderAuth'
import { ContainerAuth } from './styles'

export function AuthTemplate() {
  return (
    <>
      <HeaderAuth />

      <ContainerAuth>
        <Outlet />
      </ContainerAuth>

      <Footer />
    </>
  )
}
