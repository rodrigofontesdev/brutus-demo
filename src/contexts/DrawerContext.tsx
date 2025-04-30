import { createContext, ReactNode, RefObject, useRef, useState } from 'react'

type DrawerContextProps = {
  isOpen: boolean
  innerRef: RefObject<HTMLDivElement>
  toggleVisibility: () => void
  animateOnOpen: () => void
  animateOnClose: () => void
}

type DrawerProviderProps = {
  children: ReactNode
}

const slideIn = [
  {
    transform: 'translateX(100%)',
  },
  {
    transform: 'translateX(0%)',
  },
]

// eslint-disable-next-line react-refresh/only-export-components
export const DrawerContext = createContext({} as DrawerContextProps)

export function DrawerProvider({ children }: DrawerProviderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const innerRef = useRef<HTMLDivElement>(null)

  async function animateOnOpen() {
    if (innerRef.current) {
      const animation = innerRef.current.animate(slideIn, {
        duration: 400,
        fill: 'forwards',
        easing: 'ease',
      })

      await animation.finished
      animation.commitStyles()
      animation.cancel()
    }

    setIsOpen(true)
  }

  async function animateOnClose() {
    if (innerRef.current) {
      const animation = innerRef.current.animate(slideIn, {
        duration: 400,
        fill: 'forwards',
        easing: 'ease',
        direction: 'reverse',
      })

      await animation.finished
      animation.commitStyles()
      animation.cancel()
    }

    setIsOpen(false)
  }

  function toggleVisibility() {
    if (isOpen) {
      animateOnClose()
    } else {
      animateOnOpen()
    }
  }

  return (
    <DrawerContext.Provider
      value={{ animateOnOpen, animateOnClose, innerRef, isOpen, toggleVisibility }}
    >
      {children}
    </DrawerContext.Provider>
  )
}
