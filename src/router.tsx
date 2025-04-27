import { ScreenLoading } from '@components/molecules/ScreenLoading'
import { EditReport } from '@pages/EditReport'
import { NewReport } from '@pages/NewReport'
import { NotFound } from '@pages/NotFound'
import { ConfirmAccount } from '@pages/auth/ConfirmAccount'
import { SignIn } from '@pages/auth/SignIn'
import { SignUp } from '@pages/auth/SignUp'
import { AuthenticationError } from '@pages/error/AuthenticationError'
import { authService } from '@services/AuthService'
import { queryClient } from '@services/react-query'
import { queryOptions } from '@tanstack/react-query'
import { AuthTemplate } from '@templates/AuthTemplate'
import { DashboardTemplate } from '@templates/DashboardTemplate'
import { createBrowserRouter, redirect } from 'react-router-dom'

const getAuthenticatedUser = queryOptions({
  queryKey: ['me'],
  queryFn: authService.getAuthenticatedUser,
})

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

          queryClient.prefetchQuery(getAuthenticatedUser)

          return redirect('/')
        },
      },
    ],
  },
  {
    path: '/',
    element: <DashboardTemplate />,
    hydrateFallbackElement: <ScreenLoading />,
    id: 'dashboard',
    loader: async () => {
      try {
        await queryClient.ensureQueryData(getAuthenticatedUser)
      } catch {
        return redirect('/entrar')
      }
    },
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
