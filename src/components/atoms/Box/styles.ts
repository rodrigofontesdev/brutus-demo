import styled from 'styled-components'

export const BoxStyle = styled.div`
  width: 100%;
  position: relative;
  background-color: ${({ theme }) => theme.black.alpha[15]};
  border-radius: ${({ theme }) => theme.radii.md};
  box-shadow: ${({ theme }) => theme.shadow.outer.md};
`
