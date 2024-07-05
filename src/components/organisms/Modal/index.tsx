import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Dialog from '@radix-ui/react-dialog'
import { ReactNode } from 'react'
import { Body, Close, Content, Heading, Overlay, Title } from './styles'

type ModalProps = {
  title: string
  children: ReactNode
}

export function Modal({ title, children }: ModalProps) {
  return (
    <Dialog.Portal>
      <Overlay />
      <Dialog.Content aria-describedby={undefined} asChild>
        <Content>
          <Heading>
            <Title asChild>
              <h3>{title}</h3>
            </Title>
            <Close>
              <FontAwesomeIcon icon={faXmark} fontSize={26} />
            </Close>
          </Heading>

          <Body>{children}</Body>
        </Content>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
