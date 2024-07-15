import styled from 'styled-components'

export const LabelStyle = styled.label<{ $variant?: 'normal' | 'large' }>`
  color: ${(props) => props.theme['blue-50']};
  font: ${(props) =>
    !props.$variant || props.$variant === 'normal'
      ? props.theme['input-sm']
      : props.theme['input']};

  & > :first-child {
    margin-top: 0.5rem;
  }
`
