import styled from 'styled-components'

export const Container = styled.div`
  width: min(42.5rem, 100%);
  padding-top: ${({ theme }) => theme.space[10]};
  padding-bottom: ${({ theme }) => theme.space[10]};
  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${({ theme }) => theme.screen.md}) {
    padding-top: ${({ theme }) => theme.space[20]};
    padding-bottom: ${({ theme }) => theme.space[20]};
  }
`

export const Heading = styled.header`
  display: grid;
  gap: ${({ theme }) => theme.space[5]};
  margin-bottom: ${({ theme }) => theme.space[10]};

  h1 {
    font-size: ${({ theme }) => theme.font['3xl']};
    text-transform: uppercase;
    text-align: center;
  }

  p {
    font-size: ${({ theme }) => theme.font.sm};
    line-height: ${({ theme }) => theme.line.xl};
    text-align: center;
  }

  @media (min-width: ${({ theme }) => theme.screen.md}) {
    margin-bottom: ${({ theme }) => theme.space[20]};

    h1 {
      font-size: ${({ theme }) => theme.font['5xl']};
    }

    p {
      font-size: ${({ theme }) => theme.font.md};
    }
  }
`

export const CreateAccount = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.space[2]};

  a {
    font-size: ${({ theme }) => theme.font.sm};
    line-height: ${({ theme }) => theme.line.xl};
  }
`
