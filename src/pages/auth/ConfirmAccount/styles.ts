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
`

export const Heading = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: ${({ theme }) => theme.space[5]};
  margin-bottom: ${({ theme }) => theme.space[10]};

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
`

export const ConfirmForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 3.75rem;
  grid-template-rows: 1fr auto;
  column-gap: ${({ theme }) => theme.space[4]};
  row-gap: ${({ theme }) => theme.space[5]};

  button {
    align-self: flex-end;
  }

  p {
    font-size: ${({ theme }) => theme.font.xs};
    color: ${({ theme }) => theme.blue[50]};
    grid-column: 1 / -1;
  }
`
