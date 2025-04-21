import { defaultTheme } from '@static/styles/default-theme'
import { GlobalStyle } from '@static/styles/global'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'
import { ThemeProvider } from 'styled-components'
import { router } from './router'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <RouterProvider router={router} />
      <Toaster position="top-right" />
    </ThemeProvider>
  </React.StrictMode>
)
