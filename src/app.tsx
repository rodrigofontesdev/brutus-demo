import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'
import { ThemeProvider } from 'styled-components'
import { router } from './routes/root'
import { GlobalStyle } from './static/styles/global'
import { defaultTheme } from './static/styles/default-theme'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <RouterProvider router={router} />
      <Toaster position="top-right" />
    </ThemeProvider>
  )
}
