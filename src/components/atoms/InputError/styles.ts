import styled from 'styled-components'

export const InputErrorStyle = styled.div`
  min-height: 1.125rem;
  color: ${({ theme }) => theme.red[400]};
  font-size: ${({ theme }) => theme.font.sm};
`
