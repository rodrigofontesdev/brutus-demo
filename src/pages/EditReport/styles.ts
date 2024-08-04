import styled from 'styled-components'

export const MainStyle = styled.main`
  display: grid;
  grid-template-columns: 22.5rem minmax(0, 42.375rem);
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.space[10]};
`

export const Entrepreneur = styled.section`
  display: grid;
  grid-auto-rows: min-content;
  row-gap: ${({ theme }) => theme.space[5]};
  padding-top: ${({ theme }) => theme.space[10]};

  h1 {
    color: ${({ theme }) => theme.blue[50]};
    font-size: ${({ theme }) => theme.font.sm};
    line-height: ${({ theme }) => theme.line.lg};

    span {
      display: block;
      color: ${({ theme }) => theme.blue[400]};
      font-size: ${({ theme }) => theme.font['2xl']};
    }
  }
`

export const Report = styled.section`
  display: grid;
  row-gap: ${({ theme }) => theme.space[10]};
  padding: ${({ theme }) => theme.space[10]};
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
