import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  position: relative;
`

export const InputStyle = styled.input<{ $variant?: 'normal' | 'large' }>`
  width: 100%;
  height: ${(props) => (!props.$variant || props.$variant === 'normal' ? '38px' : '60px')};
  background-color: ${(props) => props.theme['blue-400']};
  color: ${(props) => props.theme['blue-50']};
  font: ${(props) =>
    !props.$variant || props.$variant === 'normal'
      ? props.theme['input-sm']
      : props.theme['input']};
  padding: ${(props) => (!props.$variant || props.$variant === 'normal' ? '0.625rem' : '1.25rem')};
  box-shadow: ${(props) => props.theme['shadow-inner']};
  border-radius: 0.5rem;

  &::placeholder {
    color: ${(props) => props.theme['blue-50']};
  }

  &:not(:disabled):focus {
    outline: ${(props) => props.theme['outline']};
  }

  &:read-only {
    background: ${(props) => props.theme['blue-800']};
    cursor: default;
  }
`

export const Prefix = styled.span<{ $variant?: 'normal' | 'large' }>`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  z-index: 1;
  background-color: ${(props) => props.theme['blue-400']};
  color: ${(props) => props.theme['blue-50']};
  font: ${(props) =>
    !props.$variant || props.$variant === 'normal'
      ? props.theme['input-sm']
      : props.theme['input']};
  padding: ${(props) =>
    !props.$variant || props.$variant === 'normal'
      ? '0 0.3125rem 0 0.625rem'
      : '0 0.625rem 0 1.25rem'};
  border-right: 2px solid rgb(246 249 251 / 15%);
  pointer-events: none;

  & + ${InputStyle} {
    padding-left: ${(props) =>
      !props.$variant || props.$variant === 'normal' ? '3rem' : '4.375rem'};
  }
`
