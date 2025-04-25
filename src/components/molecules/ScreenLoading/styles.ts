import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: ${({ theme }) => theme.space[5]};
  margin-right: auto;
  margin-left: auto;
`
