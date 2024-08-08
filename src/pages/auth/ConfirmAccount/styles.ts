import styled from 'styled-components'

export const Container = styled.div`
  max-width: 50rem;
  margin-right: auto;
  margin-left: auto;
  padding-top: ${({ theme }) => theme.space[10]};
  padding-bottom: ${({ theme }) => theme.space[10]};

  @media (min-width: ${({ theme }) => theme.screen.md}) {
    padding-top: ${({ theme }) => theme.space[20]};
    padding-bottom: ${({ theme }) => theme.space[20]};
  }
`

export const Card = styled.section`
  padding-top: ${({ theme }) => theme.space[10]};
  padding-bottom: ${({ theme }) => theme.space[10]};
  padding-left: ${({ theme }) => theme.space[5]};
  padding-right: ${({ theme }) => theme.space[5]};

  @media (min-width: ${({ theme }) => theme.screen.md}) {
    padding: ${({ theme }) => theme.space[10]};
  }
`

export const Heading = styled.header`
  display: grid;
  row-gap: ${({ theme }) => theme.space[5]};
  margin-bottom: ${({ theme }) => theme.space[10]};

  h1 {
    color: ${({ theme }) => theme.blue[400]};
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
    h1 {
      font-size: ${({ theme }) => theme.font['5xl']};
    }

    p {
      font-size: ${({ theme }) => theme.font.md};
    }
  }
`

export const ConfirmForm = styled.form`
  display: grid;
  gap: ${({ theme }) => theme.space[4]};

  > button {
    justify-self: center;
  }

  > p {
    grid-column: 1 / -1;
    color: ${({ theme }) => theme.blue[50]};
    font-size: ${({ theme }) => theme.font.xs};
    line-height: ${({ theme }) => theme.line.xl};
    text-align: center;
  }

  @media (min-width: ${({ theme }) => theme.screen.md}) {
    grid-template-columns: 1fr 3.75rem;
    row-gap: ${({ theme }) => theme.space[5]};

    > button {
      align-self: end;
    }

    > p {
      text-align: left;
    }
  }
`
