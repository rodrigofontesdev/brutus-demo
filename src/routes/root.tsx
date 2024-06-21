import { createBrowserRouter } from 'react-router-dom'
import { SignIn } from '../pages/auth/SignIn'
import { AuthTemplate } from '../templates/AuthTemplate'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthTemplate />,
    children: [
      { index: true, element: <SignIn /> },
      { path: '/sign-in', element: <SignIn /> },
    ],
  },
])
