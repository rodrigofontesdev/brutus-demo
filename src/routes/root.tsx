import { createBrowserRouter } from 'react-router-dom'
import { AuthLayout } from '../layouts/AuthLayout'
import { SignIn } from '../pages/auth/SignIn'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { index: true, element: <SignIn /> },
      { path: '/sign-in', element: <SignIn /> },
    ],
  },
])
