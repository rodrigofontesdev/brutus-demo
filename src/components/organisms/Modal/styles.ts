import * as Dialog from '@radix-ui/react-dialog'
import styled from 'styled-components'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  z-index: 499;
  background-color: ${({ theme }) => theme.black.alpha[75]};
  backdrop-filter: ${({ theme }) => theme.blur.sm};
`

export const Content = styled.div`
  width: calc(100% - ${({ theme }) => theme.space[10]});
  max-height: calc(100% - ${({ theme }) => theme.space[10]});
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 500;
  background-color: ${({ theme }) => theme.blue[700]};
  border-radius: ${({ theme }) => theme.radii.md};

  @media (min-width: ${({ theme }) => theme.screen.md}) {
    width: 40rem;
  }
`

export const Heading = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]};
  padding: ${({ theme }) => theme.space[5]};
  border-bottom: 1px solid ${({ theme }) => theme.white.alpha[5]};
`

export const Title = styled(Dialog.Title)`
  color: ${({ theme }) => theme.blue[400]};
  font-size: ${({ theme }) => theme.font.lg};

  @media (min-width: ${({ theme }) => theme.screen.md}) {
    font-size: ${({ theme }) => theme.font.xl};
  }
`

export const Close = styled(Dialog.Close)`
  all: unset;
  color: ${({ theme }) => theme.red[400]};
  cursor: pointer;
  transition: filter ${({ theme }) => theme.duration.normal};

  &:hover {
    filter: brightness(80%);
  }

  &:focus {
    outline: ${({ theme }) => theme.outline.blue[400]};
  }
`

export const Body = styled.div`
  height: calc(100% - 4.6875rem); // minus header height
  padding: ${({ theme }) => theme.space[5]};
  overflow-y: auto;
`
