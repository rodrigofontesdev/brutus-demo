import styled from 'styled-components'

type DrawerProps = {
  $priority: number
  $width: number
}

export const DrawerStyle = styled.section<DrawerProps>`
  position: fixed;
  top: 0;
  right: 0;
  transform: translateX(100%);
  z-index: ${(props) => props.$priority};
  width: ${(props) => props.$width}px;
  height: 100vh;
  background-color: ${(props) => props.theme['blue-700']};
  padding: 4.6875rem 1.5625rem 3.125rem;
  box-shadow: -4px 0 4px 0 rgb(0 0 0 / 10%);
  overflow-y: auto;
  scrollbar-width: none;
`

export const CloseButton = styled.button`
  all: unset;
  position: absolute;
  top: 1.5625rem;
  right: 1.5625rem;
  cursor: pointer;
  transition: filter 400ms;

  &:hover {
    filter: brightness(80%);
  }

  &:focus {
    outline: 2px solid ${(props) => props.theme['blue-400']};
  }

  > svg {
    color: ${(props) => props.theme['red-400']};
  }
`
