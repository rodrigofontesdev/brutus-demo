import styled from 'styled-components'
import ReactSelect from 'react-select'

export const SelectStyle = styled(ReactSelect)`
  .selectControl__control {
    width: 100%;
    height: 38px;
    background-color: ${(props) => props.theme['blue-400']};
    color: ${(props) => props.theme['blue-50']};
    font: ${(props) => props.theme['input-sm']};
    border: none;
    border-radius: 0.5rem;
    box-shadow: ${(props) => props.theme['shadow-inner']};
    padding: 0.625rem;
    margin-bottom: 0.5rem;
    transition: none;

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

    .selectControl__indicator-separator {
      display: none;
    }

    .selectControl__indicator {
      color: ${(props) => props.theme['blue-50']};
      padding: 0;
      margin-left: 0.3125rem;
      cursor: pointer;
      transition: filter 400ms;

      &:hover {
        filter: brightness(90%);
      }
    }

    .selectControl__clear-indicator {
      color: ${(props) => props.theme['red-400']};
      padding-top: 1px;
    }

    &:hover,
    &:focus,
    &.selectControl__control--is-focused {
      outline: ${(props) => props.theme['outline']} !important;
    }
  }

  .selectControl__control--is-disabled {
    background: ${(props) => props.theme['blue-800']};
    cursor: default;
  }

  .selectControl__menu {
    background-color: ${(props) => props.theme['blue-400']};
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    margin-top: -0.25rem;
    overflow: hidden;

    .selectControl__menu-list {
      padding: 0;
      scrollbar-width: thin;
      scrollbar-color: rgb(0 0 0 / 55%) ${(props) => props.theme['blue-400']};

      .selectControl__option {
        font: ${(props) => props.theme['input-sm']};
        padding: 0.625rem;

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
        font: ${(props) => props.theme['input-sm']};
      }
    }
  }
`
