import styled, { css } from 'styled-components'
import { InputMaskVariants } from '.'

export const InputStyle = styled.input<{ $variant: InputMaskVariants }>`
  ${(props) => {
    switch (props.$variant) {
      case 'large':
        return css`
          height: 60px;
          font: ${props.theme.input};
          padding: 1.25rem;
        `
      default:
        return css`
          height: 38px;
          font: ${props.theme['input-sm']};
          padding: 0.625rem;
        `
    }
  }}

  width: 100%;
  background-color: transparent;
  color: ${(props) => props.theme['blue-50']};
  border-top-right-radius: inherit;
  border-bottom-right-radius: inherit;

  &::placeholder {
    color: ${(props) => props.theme['blue-50']};
  }

  &:read-only {
    cursor: default;
  }

  &:not(:disabled):focus {
    outline: none;
  }
`

export const Prefix = styled.span<{ $variant: InputMaskVariants }>`
  ${(props) => {
    switch (props.$variant) {
      case 'large':
        return css`
          font: ${props.theme.input};
          padding: 0 1.25rem;
        `
      default:
        return css`
          font: ${props.theme['input-sm']};
          padding: 0 0.625rem;
        `
    }
  }}

  color: ${(props) => props.theme['blue-50']};
  border-right: 2px solid rgb(246 249 251 / 15%);
  pointer-events: none;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  background-color: ${(props) => props.theme['blue-400']};
  border-radius: 0.5rem;
  box-shadow: ${(props) => props.theme['shadow-inner']};

  &:has(${InputStyle}:read-only) {
    background-color: ${(props) => props.theme['blue-800']};
  }

  &:has(${InputStyle}:focus) {
    outline: ${(props) => props.theme['outline']};
  }
`
