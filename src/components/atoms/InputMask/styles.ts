import styled, { css } from 'styled-components'
import { InputMaskVariants } from '.'

export const InputStyle = styled.input<{ $variant: InputMaskVariants }>`
  ${({ $variant, theme }) => {
    switch ($variant) {
      case 'large':
        return css`
          font-size: ${theme.font.md};
          padding: ${theme.space[4]};
        `
      default:
        return css`
          font-size: ${theme.font.sm};
          padding: ${theme.space[2]};
        `
    }
  }}

  width: 100%;
  background-color: transparent;
  color: ${({ theme }) => theme.blue[50]};
  font-family: ${({ theme }) => theme.font.primary};
  font-weight: ${({ theme }) => theme.font.semibold};
  border-top-right-radius: inherit;
  border-bottom-right-radius: inherit;

  &::placeholder {
    color: ${({ theme }) => theme.blue[50]};
  }

  &:read-only {
    cursor: default;
  }

  &:not(:disabled):focus {
    outline: none;
  }
`

export const Prefix = styled.span<{ $variant: InputMaskVariants }>`
  ${({ $variant, theme }) => {
    switch ($variant) {
      case 'large':
        return css`
          font-size: ${theme.font.md};
          padding: 0 ${theme.space[4]};
        `
      default:
        return css`
          font-size: ${theme.font.sm};
          padding: 0 ${theme.space[2]};
        `
    }
  }}

  color: ${({ theme }) => theme.blue[50]};
  border-right: 2px solid rgb(255 255 255 / 5%);
  pointer-events: none;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  background-color: ${({ theme }) => theme.blue[400]};
  border-radius: ${({ theme }) => theme.radii.md};
  box-shadow: ${({ theme }) => theme.shadow.inner.md};

  &:has(${InputStyle}:read-only) {
    background-color: ${({ theme }) => theme.blue[800]};
  }

  &:has(${InputStyle}:focus) {
    outline: ${({ theme }) => theme.outline.blue.alpha[30]};
  }
`
