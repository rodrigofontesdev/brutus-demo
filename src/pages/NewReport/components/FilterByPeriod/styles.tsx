import styled from 'styled-components'

export const FilterByPeriodStyle = styled.div`
  display: grid;
  margin-top: ${({ theme }) => theme.space[5]};
  margin-bottom: ${({ theme }) => theme.space[5]};

  > div {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    align-items: end;
    column-gap: ${({ theme }) => theme.space[2]};

    > label {
      grid-column: 1 / -1;
    }
  }

  @media (min-width: ${({ theme }) => theme.screen.md}) {
    > div {
      width: 21.875rem;
    }
  }

  @media (min-width: ${({ theme }) => theme.screen.lg}) {
    justify-content: end;
    margin-top: ${({ theme }) => theme.space[20]};
  }
`
