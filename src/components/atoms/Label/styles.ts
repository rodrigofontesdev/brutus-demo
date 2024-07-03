import styled from 'styled-components'

export const LabelStyle = styled.label<{ $size?: 'normal' | 'large' }>`
  color: ${(props) => props.theme['blue-50']};
  font: ${(props) =>
    !props.$size || props.$size === 'normal' ? props.theme['input-sm'] : props.theme['input']};

  @media (max-width: 640px) {
    font: ${(props) =>
      !props.$size || props.$size === 'normal' ? props.theme['input-xs'] : props.theme['input-sm']};
  }
`
