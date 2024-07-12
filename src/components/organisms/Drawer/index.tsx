import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ReactElement, useEffect, useRef } from 'react'
import { useDrawer } from '../../../hooks/useDrawer'
import { CloseButton, DrawerStyle } from './styles'

type DrawerProps = {
  children: ReactElement
  priority?: number
  width?: number
}

const slideIn = [
  {
    transform: 'translateX(100%)',
  },
  {
    transform: 'translateX(0%)',
  },
]

export function Drawer({ children, priority, width }: DrawerProps) {
  const { open, closeDrawer } = useDrawer()
  const innerRef = useRef<HTMLDivElement>(null)

  async function openDrawer() {
    if (innerRef.current) {
      const animation = innerRef.current.animate(slideIn, {
        duration: 500,
        fill: 'forwards',
        easing: 'ease',
      })

      await animation.finished
      animation.commitStyles()
      animation.cancel()
    }
  }

  async function handleCloseDrawer() {
    if (innerRef.current) {
      const animation = innerRef.current.animate(slideIn, {
        duration: 500,
        fill: 'forwards',
        direction: 'reverse',
        easing: 'ease',
      })

      await animation.finished
      animation.commitStyles()
      animation.cancel()
      closeDrawer()
    }
  }

  useEffect(() => {
    openDrawer()
  }, [open])

  if (!open) {
    return null
  }

  return (
    <DrawerStyle $priority={priority ?? 25} $width={width ?? 360} ref={innerRef}>
      <CloseButton aria-label="Fechar menu" onClick={handleCloseDrawer}>
        <FontAwesomeIcon icon={faXmark} fontSize={32} />
      </CloseButton>

      {children}
    </DrawerStyle>
  )
}
