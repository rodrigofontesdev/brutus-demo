import styled from 'styled-components'

export const Container = styled.div`
  max-width: 50rem;
  margin-right: auto;
  margin-left: auto;
  padding-top: ${({ theme }) => theme.space[20]};
  padding-bottom: ${({ theme }) => theme.space[20]};
`

export const Card = styled.section`
  padding: ${({ theme }) => theme.space[10]};

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: ${({ theme }) => theme.space[5]};
    margin-bottom: ${({ theme }) => theme.space[5]};

    h1 {
      color: ${({ theme }) => theme.blue[400]};
      font-size: ${({ theme }) => theme.font['3xl']};
      text-align: center;
      text-transform: uppercase;
    }

    p {
      font-size: ${({ theme }) => theme.font.md};
      line-height: ${({ theme }) => theme.line.xl};
      text-align: center;
    }

    & + a {
      margin-top: ${({ theme }) => theme.space[5]};
      margin-left: auto;
      margin-right: auto;
    }
  }
`
