import { createContext, ReactNode, RefObject, useRef, useState } from 'react'

type TimelineContextProps = {
  isOpen: boolean
  innerRef: RefObject<HTMLDivElement>
  toggleTimelineVisibility: () => void
}

type TimelineProviderProps = {
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

// eslint-disable-next-line react-refresh/only-export-components
export const TimelineContext = createContext({} as TimelineContextProps)

export function TimelineProvider({ children }: TimelineProviderProps) {
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

  function toggleTimelineVisibility() {
    if (isOpen) {
      animateOnClose()
    } else {
      animateOnOpen()
    }
  }

  return (
    <TimelineContext.Provider value={{ isOpen, innerRef, toggleTimelineVisibility }}>
      {children}
    </TimelineContext.Provider>
  )
}
