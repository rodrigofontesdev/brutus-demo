import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  position: relative;
`

export const InputStyle = styled.input`
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

export const Prefix = styled.span`
  position: absolute;
  top: 50%;
  left: 0;
  background-color: ${(props) => props.theme['blue-400']};
  color: ${(props) => props.theme['blue-50']};
  font: ${(props) => props.theme.input};
  padding: 0 0.625rem 0 1.25rem;
  border-right: 2px solid rgb(246 249 251 / 15%);
  transform: translateY(-50%);
  z-index: 1;
  pointer-events: none;

  @media (max-width: 640px) {
    font: ${(props) => props.theme['input-sm']};
  }

  & + ${InputStyle} {
    padding-left: 4.375rem;

    @media (max-width: 640px) {
      padding-left: 4.125rem;
    }
  }
`
