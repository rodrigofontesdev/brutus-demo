import styled, { css } from 'styled-components'
import { buttonVariants } from '.'

export const ButtonStyle = styled.button<{ $variant: buttonVariants }>`
  width: 3.75rem;
  height: 3.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme['blue-50']};
  font-size: 2.5rem;
  border-radius: 100%;
  box-shadow: ${(props) => props.theme['shadow-inner']};
  transition: filter 400ms;

  @media (max-width: 640px) {
    width: 3.125rem;
    height: 3.125rem;
    font-size: 2rem;
  }

  ${(props) => {
    switch (props.$variant) {
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

  &:hover {
    filter: brightness(80%);
  }

  &:disabled {
    filter: brightness(50%);
  }
`
