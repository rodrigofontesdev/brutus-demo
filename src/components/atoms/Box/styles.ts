import styled from 'styled-components'

export const BoxStyle = styled.div`
  position: relative;
  background-color: ${(props) => props.theme['blue-700']};
  border-radius: 0.5rem;
  box-shadow: ${(props) => props.theme.shadow};
`
