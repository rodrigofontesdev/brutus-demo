import styled from 'styled-components'

type DrawerProps = {
  $priority: number
  $width: number
}

export const DrawerStyle = styled.div<DrawerProps>`
  position: fixed;
  top: 0;
  right: 0;
  transform: translateX(100%);
  z-index: ${({ $priority }) => $priority};
  width: 100%;
  height: 100vh;
  height: 100svh;
  background-color: ${({ theme }) => theme.blue[700]};
  padding-top: ${({ theme }) => theme.space[15]};
  padding-bottom: ${({ theme }) => theme.space[30]};
  padding-left: ${({ theme }) => theme.space[5]};
  padding-right: ${({ theme }) => theme.space[5]};
  box-shadow: -4px 0 4px 0 ${({ theme }) => theme.black.alpha[10]};
  overflow-y: auto;
  scrollbar-width: none;

  @media (min-width: ${({ theme }) => theme.screen.md}) {
    width: ${({ $width }) => $width / 16}rem;
    padding-bottom: ${({ theme }) => theme.space[10]};
  }
`

export const CloseButton = styled.button`
  all: unset;
  position: absolute;
  top: ${({ theme }) => theme.space[5]};
  right: ${({ theme }) => theme.space[5]};
  cursor: pointer;
  transition: filter ${({ theme }) => theme.duration.normal};

  &:hover {
    filter: brightness(80%);
  }

  &:focus {
    outline: ${({ theme }) => theme.outline.blue[400]};
  }

  > svg {
    color: ${({ theme }) => theme.red[400]};
  }
`
