import styled from 'styled-components'

export const Cards = styled.div`
  display: grid;
  column-gap: 0.78125rem;
  grid-template-columns: 0.78125rem repeat(3, calc(100% - 1.5625rem * 2)) 0.78125rem;
  padding-bottom: ${({ theme }) => theme.space[5]};
  overflow-x: scroll;
  scrollbar-width: none;

  &::before,
  &::after {
    content: '';
  }

  @media (min-width: ${({ theme }) => theme.screen.md}) {
    padding-bottom: ${({ theme }) => theme.space[10]};
  }

  @media (min-width: 64rem) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    padding-left: ${({ theme }) => theme.space[5]};
    padding-right: ${({ theme }) => theme.space[5]};

    &::before,
    &::after {
      display: none;
    }
  }

  @media (min-width: ${({ theme }) => theme.screen.lg}) {
    column-gap: ${({ theme }) => theme.space[4]};
  }
`

export const Main = styled.main`
  display: grid;
  grid-template-columns: 1.5625rem 1fr 1.5625rem;
  padding-bottom: ${({ theme }) => theme.space[25]};

  > div,
  > section,
  > article {
    grid-column: 2 / -2;
  }

  ${Cards} {
    grid-column: 1 / -1;
  }

  @media (min-width: ${({ theme }) => theme.screen.md}) {
    padding-bottom: ${({ theme }) => theme.space[10]};
  }
`

export const TotalWrapper = styled.div`
  width: 100%;
  max-width: 40rem;
  margin-left: auto;
`
