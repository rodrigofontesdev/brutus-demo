import styled from 'styled-components'

export const Main = styled.main`
  display: grid;
  grid-auto-columns: 100%;
  gap: ${({ theme }) => theme.space[5]};
  padding-bottom: ${({ theme }) => theme.space[40]};
  padding-left: ${({ theme }) => theme.space[5]};
  padding-right: ${({ theme }) => theme.space[5]};

  @media (min-width: ${({ theme }) => theme.screen.md}) {
    justify-content: space-between;
    padding-bottom: ${({ theme }) => theme.space[10]};
    margin-top: ${({ theme }) => theme.space[5]};
  }

  @media (min-width: 64rem) {
    grid-template-columns: 1fr 60%;
  }

  @media (min-width: ${({ theme }) => theme.screen.lg}) {
    grid-template-columns: minmax(0, 22.5rem) minmax(35%, 42.375rem);
    margin-top: ${({ theme }) => theme.space[20]};
  }
`

export const Entrepreneur = styled.section`
  @media (min-width: ${({ theme }) => theme.screen.md}) {
    display: grid;
    grid-auto-rows: max-content;
  }

  @media (min-width: ${({ theme }) => theme.screen.lg}) {
    padding-top: ${({ theme }) => theme.space[10]};
    row-gap: ${({ theme }) => theme.space[5]};
  }
`

export const ReportPeriod = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.space[3]};

  h1 {
    color: ${({ theme }) => theme.blue[50]};
    font-size: ${({ theme }) => theme.font.sm};
    line-height: ${({ theme }) => theme.line.lg};
  }

  span {
    display: block;
    color: ${({ theme }) => theme.blue[400]};
    font-size: ${({ theme }) => theme.font['2xl']};
  }

  button {
    all: unset;
    display: flex;
    align-items: center;
    font-size: ${({ theme }) => theme.font.xs};
    font-weight: ${({ theme }) => theme.font.bold};
    cursor: pointer;

    svg {
      margin-right: ${({ theme }) => theme.space[1]};
    }
  }

  @media (min-width: 64rem) {
    button {
      display: none;
    }
  }
`

export const EntrepreneurForm = styled.form<{ $isHidden: boolean }>`
  display: grid;
  grid-template-rows: ${({ $isHidden }) => ($isHidden ? '0fr' : '1fr')};
  margin-top: ${({ $isHidden, theme }) => ($isHidden ? 0 : theme.space[5])};
  margin-bottom: ${({ $isHidden, theme }) => ($isHidden ? 0 : theme.space[5])};
  transition: all ${({ theme }) => theme.duration.normal};

  @media (min-width: 64rem) {
    grid-template-rows: 1fr;
    margin-top: ${({ theme }) => theme.space[5]};
    margin-bottom: ${({ theme }) => theme.space[5]};
  }
`

export const EntrepreneurFormInner = styled.div`
  display: grid;
  row-gap: ${({ theme }) => theme.space[5]};
  overflow: hidden;

  @media (min-width: 64rem) {
    overflow: visible;
  }
`

export const Report = styled.section`
  display: grid;
  grid-auto-columns: 100%;
  row-gap: ${({ theme }) => theme.space[5]};
  padding-top: ${({ theme }) => theme.space[10]};
  padding-bottom: ${({ theme }) => theme.space[10]};
  padding-left: ${({ theme }) => theme.space[5]};
  padding-right: ${({ theme }) => theme.space[5]};

  @media (min-width: ${({ theme }) => theme.screen.lg}) {
    row-gap: ${({ theme }) => theme.space[10]};
    padding-left: ${({ theme }) => theme.space[10]};
    padding-right: ${({ theme }) => theme.space[10]};
  }
`

export const ReportHeading = styled.header`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: center;

  h2 {
    color: ${({ theme }) => theme.blue[50]};
    font-size: ${({ theme }) => theme.font['2xl']};
  }
`

export const ReportBody = styled.div`
  display: grid;
  row-gap: ${({ theme }) => theme.space[5]};
`
