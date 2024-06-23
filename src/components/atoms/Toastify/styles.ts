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
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 1.5625rem;
  border-radius: 0.5rem;
  box-shadow: ${(props) => props.theme.shadow};

  ${(props) => {
    switch (props.$type) {
      case 'success':
        return css`
          background-color: ${(props) => props.theme['green-400']};
        `
      case 'error':
        return css`
          background-color: ${(props) => props.theme['red-400']};
        `
      default:
        return css`
          background-color: ${(props) => props.theme['blue-400']};
        `
    }
  }}
`

export const Message = styled.p`
  color: ${(props) => props.theme['blue-50']};
  font: ${(props) => props.theme['text-sm']};
`

export const TimerBar = styled.span<{ $duration: number }>`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 6px;
  display: block;
  background-color: rgb(0 0 0 / 30%);
  border-top-left-radius: 0;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  animation: ${shrink} ${(props) => props.$duration}ms linear;
`
