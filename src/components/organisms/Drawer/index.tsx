import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Fragment, ReactElement, useEffect } from 'react'
import { useDrawer } from '../../../hooks/useDrawer'
import { CloseButton, DrawerStyle } from './styles'

type DrawerProps = {
  children: ReactElement
  priority?: number
  width?: number
}

export function Drawer({ children, priority = 450, width = 360 }: DrawerProps) {
  const { isOpen, innerRef, animateOnClose, animateOnOpen } = useDrawer()

  useEffect(() => {
    if (isOpen) {
      animateOnOpen()
    }
  }, [isOpen, animateOnOpen])

  return isOpen ? (
    <DrawerStyle
      $priority={priority}
      $width={width}
      ref={innerRef}
    >
      <CloseButton
        aria-label="Fechar menu"
        onClick={animateOnClose}
      >
        <FontAwesomeIcon
          icon={faXmark}
          fontSize="1.75rem"
        />
      </CloseButton>

      {children}
    </DrawerStyle>
  ) : (
    <Fragment />
  )
}
