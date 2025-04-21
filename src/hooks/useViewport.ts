import { useLayoutEffect, useState } from 'react'
import { defaultTheme } from '../static/styles/default-theme'

type Viewports = 'mobile' | 'tablet' | 'small-desktop' | 'desktop'

export function useViewport() {
  const [currentViewport, setCurrentViewport] = useState<Viewports>('mobile')

  function updateViewport() {
    if (window.matchMedia(`(min-width: ${defaultTheme.screen.lg})`).matches) {
      setCurrentViewport('desktop')
    } else if (window.matchMedia(`(min-width: ${1024 / 16}rem)`).matches) {
      setCurrentViewport('small-desktop')
    } else if (window.matchMedia(`(min-width: ${defaultTheme.screen.md})`).matches) {
      setCurrentViewport('tablet')
    } else {
      setCurrentViewport('mobile')
    }
  }

  function checkViewport(viewport: Viewports) {
    return currentViewport === viewport
  }

  useLayoutEffect(() => {
    updateViewport()

    window.addEventListener('resize', updateViewport)

    return () => window.removeEventListener('resize', updateViewport)
  }, [])

  return { checkViewport }
}
