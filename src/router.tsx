import { EditReport } from '@pages/EditReport'
import { NewReport } from '@pages/NewReport'
import { NotFound } from '@pages/NotFound'
import { ConfirmAccount } from '@pages/auth/ConfirmAccount'
import { AuthenticationError } from '@pages/error/AuthenticationError'
import { SignIn } from '@pages/auth/SignIn'
import { SignUp } from '@pages/auth/SignUp'
import { authService } from '@services/AuthService'
import { AuthTemplate } from '@templates/AuthTemplate'
import { DashboardTemplate } from '@templates/DashboardTemplate'
import { createBrowserRouter, redirect } from 'react-router-dom'
import { ScreenLoading } from '@components/molecules/ScreenLoading'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthTemplate />,
    id: 'auth',
    children: [
      { path: '/entrar', element: <SignIn />, id: 'auth.sign-in' },
      { path: '/cadastrar', element: <SignUp />, id: 'auth.sign-up' },
      { path: '/cadastrar/confirmar', element: <ConfirmAccount />, id: 'auth.confirm-account' },
      {
        path: '/authenticate/:token',
        element: null,
        hydrateFallbackElement: <ScreenLoading message="Validando link de autenticação..." />,
        errorElement: <AuthenticationError />,
        id: 'auth.authenticate',
        loader: async ({ params }) => {
          await authService.authenticate({
            token: params.token ?? '',
          })

          return redirect('/')
        },
      },
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
