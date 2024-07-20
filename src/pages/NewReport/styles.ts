import styled from 'styled-components'

export const FilterByPeriod = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 3.125rem;
  margin-bottom: 1.5625rem;

  > div {
    min-width: 20rem;
    flex-direction: row;
    align-items: flex-end;
    column-gap: 0.5rem;

    > :first-child,
    > :last-child {
      width: 9.375rem;
      flex-grow: 1;
    }
  }
`

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1.5625rem;
  margin-bottom: 3.125rem;
`
