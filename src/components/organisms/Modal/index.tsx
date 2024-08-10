import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Dialog from '@radix-ui/react-dialog'
import { ReactNode } from 'react'
import { Box } from '../../atoms/Box'
import { Body, Close, Content, Heading, Overlay, Title } from './styles'

type ModalProps = {
  title: string
  children: ReactNode
  hideCloseButton?: boolean
  disableOutsideClick?: boolean
}

export function Modal({
  title,
  children,
  hideCloseButton = false,
  disableOutsideClick = false,
}: ModalProps) {
  return (
    <Dialog.Portal>
      <Overlay>
        <Dialog.Content
          aria-describedby={undefined}
          onPointerDownOutside={disableOutsideClick ? (e) => e.preventDefault() : undefined}
          onEscapeKeyDown={disableOutsideClick ? (e) => e.preventDefault() : undefined}
          asChild
        >
          <Content>
            <Box>
              <Heading>
                <Title asChild>
                  <h3>{title}</h3>
                </Title>

                {!hideCloseButton && (
                  <Close>
                    <FontAwesomeIcon icon={faXmark} fontSize="1.75rem" />
                  </Close>
                )}
              </Heading>

              <Body>{children}</Body>
            </Box>
          </Content>
        </Dialog.Content>
      </Overlay>
    </Dialog.Portal>
  )
}
