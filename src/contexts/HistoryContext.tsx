import { createContext, ReactNode, RefObject, useRef, useState } from 'react'

type HistoryContextProps = {
  isOpen: boolean
  innerRef: RefObject<HTMLDivElement>
  toggleHistoryVisibility: () => void
}

type HistoryProviderProps = {
  children: ReactNode
}

const bottomToUp = [
  {
    transform: 'translateY(100%)',
  },
  {
    transform: 'translateY(0%)',
  },
]

export const HistoryContext = createContext({} as HistoryContextProps)

export function HistoryProvider({ children }: HistoryProviderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const innerRef = useRef<HTMLDivElement>(null)

  async function animateOnOpen() {
    if (innerRef.current) {
      const animation = innerRef.current.animate(bottomToUp, {
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
      const animation = innerRef.current.animate(bottomToUp, {
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

  function toggleHistoryVisibility() {
    if (isOpen) {
      animateOnClose()
    } else {
      animateOnOpen()
    }
  }

  return (
    <HistoryContext.Provider value={{ isOpen, innerRef, toggleHistoryVisibility }}>
      {children}
    </HistoryContext.Provider>
  )
}
