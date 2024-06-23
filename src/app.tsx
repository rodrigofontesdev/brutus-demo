import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'
import { ThemeProvider } from 'styled-components'
import { router } from './routes/root'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <RouterProvider router={router} />
      <GlobalStyle />
      <Toaster
        richColors
        position="top-right"
        theme="light"
        toastOptions={{
          style: {
            padding: 16,
            borderWidth: 1,
          },
        }}
      />
    </ThemeProvider>
  )
}
