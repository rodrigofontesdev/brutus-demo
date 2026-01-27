import { useLayoutEffect, useRef, useState } from 'react'
import { defaultTheme } from '../static/styles/default-theme'
import { useViewport } from './useViewport'

const bottomToUp = [
  {
    transform: 'translateY(100%)',
  },
  {
    transform: 'translateY(0%)',
  },
]

export function useHistory() {
  const innerRef = useRef<HTMLDivElement>(null)
  const viewport = useViewport()
  const [isOpen, setIsOpen] = useState(() => {
    return viewport.checkViewport('mobile') ? false : true
  })

  async function onOpenAnimation() {
    if (innerRef.current) {
      const animation = innerRef.current.animate(bottomToUp, {
        duration: 400,
        fill: 'forwards',
        easing: 'ease',
      })

      await animation.finished.then(() => {
        animation.commitStyles()
        animation.cancel()
      })
    }

    setIsOpen(true)
  }

  async function onCloseAnimation() {
    if (innerRef.current) {
      const animation = innerRef.current.animate(bottomToUp, {
        duration: 400,
        fill: 'forwards',
        easing: 'ease',
        direction: 'reverse',
      })

      await animation.finished.then(() => {
        animation.commitStyles()
        animation.cancel()
      })
    }

    setIsOpen(false)
  }

  function toggleVisibility() {
    if (isOpen) {
      onCloseAnimation()
      return
    }

    onOpenAnimation()
  }

  useLayoutEffect(() => {
    function onResize() {
      const isTabletOrUp = window.matchMedia(`(min-width: ${defaultTheme.screen.md})`).matches

      if (isTabletOrUp) {
        innerRef.current?.style.removeProperty('transform')
        setIsOpen(true)
        return
      }

      setIsOpen(false)
    }

    window.addEventListener('resize', onResize)

    return () => window.removeEventListener('resize', onResize)
  }, [])

  return {
    innerRef,
    isOpen,
    toggleVisibility,
  }
}
