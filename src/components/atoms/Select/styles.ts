import styled, { css } from 'styled-components'
import { ComboBoxVariants } from '.'

export const ComboBoxStyle = styled.div<{ $variant: ComboBoxVariants }>`
  .selectControl__control {
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
    background-color: ${(props) => props.theme['blue-400']};
    color: ${(props) => props.theme['blue-50']};
    border: none;
    border-radius: 0.5rem;
    box-shadow: ${(props) => props.theme['shadow-inner']};
    transition: none;

    &.selectControl__control--is-focused {
      outline: ${(props) => props.theme['outline']} !important;
    }

    &.selectControl__control--is-disabled {
      background: ${(props) => props.theme['blue-800']};
      cursor: default;
    }

    .selectControl__value-container {
      padding: 0;

      .selectControl__placeholder,
      .selectControl__single-value,
      .selectControl__input-container {
        color: ${(props) => props.theme['blue-50']};
        padding: 0;
        margin: 0;
      }

      .selectControl__placeholder {
        color: ${(props) => props.theme['blue-50']};
      }
    }

    .selectControl__indicators {
      align-items: flex-start;

      .selectControl__indicator-separator {
        display: none;
      }

      .selectControl__indicator {
        color: ${(props) => props.theme['blue-50']};
        font-size: ${(props) => (props.$variant === 'normal' ? '1rem' : '1.25rem')};
        padding: 0;
        margin-left: 0.75rem;
        cursor: pointer;
        transition: filter 400ms;

        &:hover {
          filter: brightness(80%);
        }
      }

      .selectControl__clear-indicator {
        color: ${(props) => props.theme['red-400']};
        padding-top: 1px;
      }
    }
  }

  .selectControl__menu {
    background-color: ${(props) => props.theme['blue-400']};
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    margin-top: 4px;
    overflow: hidden;

    .selectControl__menu-list {
      padding: 0;
      scrollbar-width: thin;
      scrollbar-color: rgb(0 0 0 / 35%) ${(props) => props.theme['blue-400']};

      .selectControl__option {
        font: ${(props) =>
          props.$variant === 'normal' ? props.theme['input-sm'] : props.theme.input};
        padding: ${(props) => (props.$variant === 'normal' ? '0.625rem' : '0.875rem 1.25rem')};

        &:hover {
          background: linear-gradient(0deg, rgb(0 0 0 / 25%) 0%, rgb(0 0 0 / 25%) 100%),
            ${(props) => props.theme['blue-400']};
        }
      }

      .selectControl__option--is-focused,
      .selectControl__option--is-selected {
        background: linear-gradient(0deg, rgb(0 0 0 / 25%) 0%, rgb(0 0 0 / 25%) 100%),
          ${(props) => props.theme['blue-400']};
      }

      .selectControl__menu-notice {
        color: ${(props) => props.theme['blue-50']};
        font: ${(props) =>
          props.$variant === 'normal' ? props.theme['input-sm'] : props.theme.input};
      }
    }
  }
`
