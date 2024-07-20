import * as Dialog from '@radix-ui/react-dialog'
import styled from 'styled-components'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  z-index: 9998;
  background-color: rgb(0 0 0 / 75%);
  backdrop-filter: blur(3px);
`

export const Content = styled.div`
  width: 40rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  background-color: ${(props) => props.theme['blue-700']};
  border-radius: 0.5rem;
`

export const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5625rem;
  border-bottom: 1px solid rgb(80 107 241 / 15%);
`

export const Title = styled(Dialog.Title)`
  color: ${(props) => props.theme['blue-400']};
  font: ${(props) => props.theme['title-sm']};
`

export const Close = styled(Dialog.Close)`
  all: unset;
  color: ${(props) => props.theme['red-400']};
  cursor: pointer;
  transition: filter 400ms;

  &:hover {
    filter: brightness(80%);
  }

  &:focus {
    outline: 2px solid ${(props) => props.theme['blue-400']};
  }
`

export const Body = styled.div`
  padding: 1.5625rem;
`
