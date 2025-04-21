import { EditReport } from '@pages/EditReport'
import { NewReport } from '@pages/NewReport'
import { NotFound } from '@pages/NotFound'
import { ConfirmAccount } from '@pages/auth/ConfirmAccount'
import { ExpiredLink } from '@pages/auth/ExpiredLink'
import { InvalidLink } from '@pages/auth/InvalidLink'
import { SignIn } from '@pages/auth/SignIn'
import { SignUp } from '@pages/auth/SignUp'
import { AuthTemplate } from '@templates/AuthTemplate'
import { DashboardTemplate } from '@templates/DashboardTemplate'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthTemplate />,
    id: 'auth',
    children: [
      { path: '/entrar', element: <SignIn />, id: 'auth.sign-in' },
      { path: '/cadastrar', element: <SignUp />, id: 'auth.sign-up' },
      { path: '/cadastrar/confirmar', element: <ConfirmAccount />, id: 'auth.confirm-account' },
      { path: '/link-invalido', element: <InvalidLink />, id: 'auth.invalid-link' },
      { path: '/link-expirado', element: <ExpiredLink />, id: 'auth.expired-link' },
    ],
  },
  {
    path: '/',
    element: <DashboardTemplate />,
    id: 'dashboard',
    children: [
      { index: true, element: <NewReport />, id: 'report.new' },
      { path: '/relatorio/:id/editar', element: <EditReport />, id: 'report.edit' },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
