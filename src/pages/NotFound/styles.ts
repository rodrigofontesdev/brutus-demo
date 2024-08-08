import styled from 'styled-components'

export const PageGrid = styled.div`
  height: 100vh;
  height: 100svh;
  display: grid;
  grid-template-rows: min-content 1fr min-content;
`

export const Container = styled.main`
  width: min(calc(61.25rem + ${({ theme }) => theme.space[10]}), 100%);
  display: grid;
  grid-auto-rows: min-content;
  align-items: center;
  row-gap: ${({ theme }) => theme.space[10]};
  padding-top: ${({ theme }) => theme.space[10]};
  padding-bottom: ${({ theme }) => theme.space[10]};
  padding-left: ${({ theme }) => theme.space[5]};
  padding-right: ${({ theme }) => theme.space[5]};
  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${({ theme }) => theme.screen.md}) {
    grid-template-columns: 50% 50%;
    grid-auto-rows: 1fr;
  }
`

export const IllustrationColumn = styled.div`
  display: grid;
  justify-content: center;

  img {
    width: 20rem;
  }

  @media (min-width: ${({ theme }) => theme.screen.md}) {
    justify-content: start;
  }
`

export const MessageColumn = styled.div`
  display: grid;
  row-gap: ${({ theme }) => theme.space[5]};

  a {
    justify-self: center;
  }
`

export const Heading = styled.header`
  display: grid;
  gap: ${({ theme }) => theme.space[5]};

  h1 {
    font-size: ${({ theme }) => theme.font['2xl']};
    text-align: center;
  }

  p {
    max-width: 23.75rem;
    justify-self: center;
    font-size: ${({ theme }) => theme.font.sm};
    line-height: ${({ theme }) => theme.line.xl};
    text-align: center;
  }

  @media (min-width: ${({ theme }) => theme.screen.md}) {
    h1 {
      font-size: ${({ theme }) => theme.font['4xl']};
    }

    p {
      font-size: ${({ theme }) => theme.font.md};
    }
  }

  @media (min-width: ${({ theme }) => theme.screen.lg}) {
    h1 {
      font-size: ${({ theme }) => theme.font['5xl']};
    }
  }
`
