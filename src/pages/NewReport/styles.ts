import styled from 'styled-components'

export const FilterByPeriod = styled.div`
  display: grid;
  justify-content: end;
  margin-top: ${({ theme }) => theme.space[10]};
  margin-bottom: ${({ theme }) => theme.space[5]};

  > div {
    width: 20rem;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    align-items: end;
    column-gap: ${({ theme }) => theme.space[2]};
  }
`

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  column-gap: ${({ theme }) => theme.space[5]};
  margin-bottom: ${({ theme }) => theme.space[10]};
`
