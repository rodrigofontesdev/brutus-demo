import styled from 'styled-components'

export const HistoryStyle = styled.aside`
  width: 100%;
  height: 100vh;
  height: 100svh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: ${({ theme }) => theme.blue[700]};
  transform: translateY(100%);
  overflow-y: auto;
  scrollbar-width: none;

  @media (min-width: ${({ theme }) => theme.screen.md}) {
    width: 18.75rem;
    transform: translate(0, 0);
  }

  @media (min-width: ${({ theme }) => theme.screen.lg}) {
    width: 20rem;
  }
`

export const HistoryInner = styled.div`
  max-width: 25rem;
  display: grid;
  row-gap: ${({ theme }) => theme.space[5]};
  margin-left: auto;
  margin-right: auto;
`

export const FilterByYear = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 101;
  background-color: ${({ theme }) => theme.blue[700]};
  padding-top: ${({ theme }) => theme.space[5]};
  padding-left: ${({ theme }) => theme.space[5]};
  padding-right: ${({ theme }) => theme.space[5]};

  @media (min-width: ${({ theme }) => theme.screen.md}) {
    padding-top: ${({ theme }) => theme.space[10]};
  }
`

export const ScrollableArea = styled.div`
  display: grid;
  row-gap: ${({ theme }) => theme.space[5]};
  padding-left: ${({ theme }) => theme.space[5]};
  padding-right: ${({ theme }) => theme.space[5]};
  padding-bottom: ${({ theme }) => theme.space[30]};

  @media (min-width: ${({ theme }) => theme.screen.md}) {
    padding-bottom: ${({ theme }) => theme.space[10]};
  }
`

export const ReportsByYear = styled.div`
  display: grid;
  row-gap: ${({ theme }) => theme.space[5]};
`
