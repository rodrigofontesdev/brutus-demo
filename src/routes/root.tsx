import { createBrowserRouter } from 'react-router-dom'
import { EditReport } from '../pages/EditReport'
import { NewReport } from '../pages/NewReport'
import { NotFound } from '../pages/NotFound'
import { Confirm } from '../pages/auth/Confirm'
import { ExpiredLink } from '../pages/auth/ExpiredLink'
import { InvalidLink } from '../pages/auth/InvalidLink'
import { SignIn } from '../pages/auth/SignIn'
import { SignUp } from '../pages/auth/SignUp'
import { AuthTemplate } from '../templates/AuthTemplate'
import { PanelTemplate } from '../templates/PanelTemplate'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthTemplate />,
    id: 'auth',
    children: [
      { index: true, element: <SignIn />, id: 'auth.index' },
      { path: '/sign-in', element: <SignIn />, id: 'auth.sign-in' },
      { path: '/sign-in/invalid-link', element: <InvalidLink />, id: 'auth.invalid-link' },
      { path: '/sign-in/expired-link', element: <ExpiredLink />, id: 'auth.expired-link' },
      { path: '/sign-up', element: <SignUp />, id: 'auth.sign-up' },
      { path: '/sign-up/confirm', element: <Confirm />, id: 'auth.confirm' }
    ]
  },
  {
    path: '/report',
    element: <PanelTemplate />,
    id: 'report',
    children: [
      { index: true, element: <NewReport />, id: 'report.new' },
      { path: '/report/:reportId/edit', element: <EditReport />, id: 'report.edit' }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
])
