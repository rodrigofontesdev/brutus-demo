import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { buttonVariants } from '.'

export const ButtonLinkStyle = styled(Link)<{ $variant: buttonVariants }>`
  width: 3.75rem;
  height: 3.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.blue[50]};
  border-radius: ${({ theme }) => theme.radii.full};
  box-shadow: ${({ theme }) => theme.shadow.inner.md};
  transition: filter ${({ theme }) => theme.duration.normal};

  ${({ $variant, theme }) => {
    switch ($variant) {
      case 'success':
        return css`
          background-color: ${theme.green[400]};
        `
      case 'error':
        return css`
          background-color: ${theme.red[400]};
        `
      default:
        return css`
          background-color: ${theme.blue[400]};
        `
    }
  }}

  &:not(:disabled):focus {
    ${({ $variant, theme }) => {
      switch ($variant) {
        case 'success':
          return css`
            background-color: ${theme.green[400]};
            outline: ${theme.outline.green.alpha[30]};
          `
        case 'error':
          return css`
            background-color: ${theme.red[400]};
            outline: ${theme.outline.red.alpha[30]};
          `
        default:
          return css`
            background-color: ${theme.blue[400]};
            outline: ${theme.outline.blue.alpha[30]};
          `
      }
    }}
  }

  &:hover {
    color: ${({ theme }) => theme.blue[50]};
    filter: brightness(80%);
  }

  &:disabled {
    filter: brightness(50%);
    cursor: default;
  }
`
