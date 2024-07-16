import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Dialog from '@radix-ui/react-dialog'
import { ReactNode } from 'react'
import { Body, Close, Content, Heading, Overlay, Title } from './styles'

type ModalProps = {
  title: string
  children: ReactNode
  disableCloseButton?: boolean
  disableOutsideClick?: boolean
}

export function Modal({ title, disableCloseButton, disableOutsideClick, children }: ModalProps) {
  return (
    <Dialog.Portal>
      <Overlay />
      <Dialog.Content
        aria-describedby={undefined}
        asChild
        onPointerDownOutside={disableOutsideClick ? (e) => e.preventDefault() : undefined}
        onEscapeKeyDown={disableOutsideClick ? (e) => e.preventDefault() : undefined}
      >
        <Content>
          <Heading>
            <Title asChild>
              <h3>{title}</h3>
            </Title>
            {!disableCloseButton && (
              <Close>
                <FontAwesomeIcon icon={faXmark} fontSize={26} />
              </Close>
            )}
          </Heading>

          <Body>{children}</Body>
        </Content>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
