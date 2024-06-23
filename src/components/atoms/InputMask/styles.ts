import { IMaskInput } from 'react-imask'
import styled from 'styled-components'

export const InputMaskStyle = styled(IMaskInput)`
  width: 100%;
  height: 60px;
  position: relative;
  background-color: ${(props) => props.theme['blue-400']};
  color: ${(props) => props.theme['blue-50']};
  font: ${(props) => props.theme['input']};
  padding: 1.25rem;
  box-shadow: ${(props) => props.theme['shadow-inner']};
  border-radius: 0.5rem;

  @media (max-width: 640px) {
    height: 50px;
    font: ${(props) => props.theme['input-sm']};
  }

  &::placeholder {
    color: ${(props) => props.theme['blue-50']};
  }

  &:not(:read-only):focus {
    outline: ${(props) => props.theme['outline']};
  }

  &:read-only {
    background: linear-gradient(0deg, rgb(255 255 255 / 20%) 0%, rgb(255 255 255 / 20%) 100%),
      ${(props) => props.theme['blue-400']};
    cursor: default;
  }
`
