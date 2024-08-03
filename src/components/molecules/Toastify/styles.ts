import styled, { css, keyframes } from 'styled-components'
import { ToastifyTypes } from '.'

const shrink = keyframes`
  from {
    width: 100%;
  } to {
    width: 0%;
  }
`

export const ToastifyStyle = styled.div<{ $type: ToastifyTypes }>`
  min-width: 356px; // sonner default width
  position: relative;
  overflow: hidden;
  padding: ${({ theme }) => theme.space[5]};
  border-radius: ${({ theme }) => theme.radii.md};
  box-shadow: ${({ theme }) => theme.shadow.outer.md};

  ${(props) => {
    switch (props.$type) {
      case 'success':
        return css`
          background-color: ${({ theme }) => theme.green[400]};
        `
      case 'error':
        return css`
          background-color: ${({ theme }) => theme.red[400]};
        `
      default:
        return css`
          background-color: ${({ theme }) => theme.blue[400]};
        `
    }
  }}
`

export const Message = styled.p`
  color: ${({ theme }) => theme.blue[50]};
  font-size: ${({ theme }) => theme.font.sm};
  line-height: ${({ theme }) => theme.line.lg};
`

export const TimerBar = styled.span<{ $duration: number }>`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 5px;
  display: block;
  background-color: ${({ theme }) => theme.black.alpha[25]};
  border-radius: ${({ theme }) => theme.radii.md};
  border-top-left-radius: 0;
  animation: ${shrink} ${({ $duration }) => $duration}ms linear;
`
