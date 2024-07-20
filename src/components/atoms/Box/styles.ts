import styled from 'styled-components'

export const BoxStyle = styled.div`
  position: relative;
  background-color: rgb(0 0 0 / 12%);
  border-radius: 0.5rem;
  box-shadow: ${(props) => props.theme.shadow};
`
