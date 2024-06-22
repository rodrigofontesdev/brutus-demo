import styled from 'styled-components'

export const LabelStyle = styled.label`
  font: ${(props) => props.theme['input']};
  color: ${(props) => props.theme['blue-50']};

  @media (max-width: 640px) {
    font: ${(props) => props.theme['input-sm']};
  }
`
