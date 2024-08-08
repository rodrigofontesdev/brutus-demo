import styled from 'styled-components'

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 3.75rem;
  align-items: center;
  gap: ${({ theme }) => theme.space[4]};
  margin-bottom: ${({ theme }) => theme.space[5]};

  @media (min-width: ${({ theme }) => theme.screen.md}) {
    margin-bottom: ${({ theme }) => theme.space[10]};
  }
`
