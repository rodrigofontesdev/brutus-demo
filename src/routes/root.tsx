import { createBrowserRouter } from 'react-router-dom'
import { Confirm } from '../pages/auth/Confirm'
import { SignIn } from '../pages/auth/SignIn'
import { SignUp } from '../pages/auth/SignUp'
import { AuthTemplate } from '../templates/AuthTemplate'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthTemplate />,
    children: [
      { index: true, element: <SignIn /> },
      { path: '/sign-in', element: <SignIn /> },
      { path: '/sign-up', element: <SignUp /> },
      { path: '/sign-up/confirm', element: <Confirm /> },
    ],
  },
])
