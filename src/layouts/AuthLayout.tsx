import { Outlet } from 'react-router-dom'
import { AuthHeader } from '../components/AuthHeader'

export function AuthLayout() {
  return (
    <>
      <AuthHeader />
      <Outlet />
    </>
  )
}
