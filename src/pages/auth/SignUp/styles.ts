import styled from 'styled-components'

export const Container = styled.div`
  max-width: 42.5rem;
  margin-right: auto;
  margin-left: auto;
  padding-top: ${({ theme }) => theme.space[20]};
  padding-bottom: ${({ theme }) => theme.space[20]};
`

export const Heading = styled.header`
  display: grid;
  gap: ${({ theme }) => theme.space[5]};
  text-align: center;
  padding-left: ${({ theme }) => theme.space[15]};
  padding-right: ${({ theme }) => theme.space[15]};
  margin-bottom: ${({ theme }) => theme.space[20]};

  h1 {
    font-size: ${({ theme }) => theme.font['2xl']};
    text-transform: uppercase;
  }

  p {
    font-size: ${({ theme }) => theme.font.sm};
    line-height: ${({ theme }) => theme.line.lg};
  }

  @media (min-width: ${({ theme }) => theme.screen.md}) {
    margin-bottom: ${({ theme }) => theme.space[10]};

    h1 {
      font-size: ${({ theme }) => theme.font['3xl']};
    }

    p {
      font-size: ${({ theme }) => theme.font.md};
      line-height: ${({ theme }) => theme.line.xl};
    }
  }
`

export const FormStep = styled.form`
  display: grid;
  grid-template-columns: 1fr 3.75rem;
  align-items: center;
  column-gap: ${({ theme }) => theme.space[4]};
  margin-bottom: ${({ theme }) => theme.space[10]};
`

export const Account = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.space[2]};

  a {
    font-size: ${({ theme }) => theme.font.sm};
    line-height: ${({ theme }) => theme.line.lg};
  }
`
