import styled, { css } from 'styled-components'
import { ComboBoxVariants } from './ComboBox'

export const ComboBoxStyle = styled.div<{ $variant: ComboBoxVariants }>`
  .selectControl__control {
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
    min-height: auto;
    background-color: ${({ theme }) => theme.blue[400]};
    color: ${({ theme }) => theme.blue[50]};
    border: none;
    border-radius: ${({ theme }) => theme.radii.md};
    box-shadow: ${({ theme }) => theme.shadow.inner.md};
    transition: none;

    &.selectControl__control--is-focused {
      outline: ${({ theme }) => theme.outline.blue.alpha[30]} !important;
    }

    &.selectControl__control--is-disabled {
      background: ${({ theme }) => theme.blue[800]};
      cursor: default;
    }

    .selectControl__value-container {
      padding: 0;

      .selectControl__placeholder,
      .selectControl__single-value,
      .selectControl__input-container {
        color: ${({ theme }) => theme.blue[50]};
        padding: 0;
        margin: 0;
      }

      .selectControl__placeholder {
        color: ${({ theme }) => theme.blue[50]};
      }
    }

    .selectControl__indicators {
      align-items: center;

      .selectControl__indicator-separator {
        display: none;
      }

      .selectControl__indicator {
        color: ${({ theme }) => theme.blue[50]};
        font-size: ${({ $variant, theme }) =>
          $variant === 'large' ? theme.font.xl : theme.font.md};
        padding: 0;
        margin-left: ${({ theme }) => theme.space[3]};
        cursor: pointer;
        transition: filter ${({ theme }) => theme.duration.normal};

        &:hover {
          filter: brightness(80%);
        }
      }

      .selectControl__clear-indicator {
        color: ${({ theme }) => theme.red[400]};
        padding-top: 1px;
      }
    }
  }

  .selectControl__menu {
    background-color: ${({ theme }) => theme.blue[400]};
    margin-top: ${({ theme }) => theme.space[1]};
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    overflow: hidden;

    .selectControl__menu-list {
      padding: 0;
      scrollbar-width: thin;
      scrollbar-color: ${({ theme }) => `${theme.black.alpha[50]} ${theme.blue[400]}`};

      .selectControl__option {
        font-size: ${({ $variant, theme }) =>
          $variant === 'large' ? theme.font.md : theme.font.sm};
        padding: ${({ $variant, theme }) =>
          $variant === 'large' ? `${theme.space[3]} ${theme.space[4]}` : theme.space[2]};

        &:hover {
          background: linear-gradient(
              0deg,
              ${({ theme }) => theme.black.alpha[25]} 0%,
              ${({ theme }) => theme.black.alpha[25]} 100%
            ),
            ${({ theme }) => theme.blue[400]};
        }
      }

      .selectControl__option--is-focused,
      .selectControl__option--is-selected {
        background: linear-gradient(
            0deg,
            ${({ theme }) => theme.black.alpha[25]} 0%,
            ${({ theme }) => theme.black.alpha[25]} 100%
          ),
          ${({ theme }) => theme.blue[400]};
      }

      .selectControl__menu-notice {
        color: ${({ theme }) => theme.blue[50]};
        font-size: ${({ $variant, theme }) =>
          $variant === 'large' ? theme.font.md : theme.font.sm};
      }
    }
  }
`
