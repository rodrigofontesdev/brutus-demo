import styled from 'styled-components'

export const Container = styled.main`
  max-width: calc(61.25rem + 3.125rem);
  min-height: calc(100vh - 9.0625rem);
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  gap: ${({ theme }) => theme.space[10]};
  padding-top: ${({ theme }) => theme.space[10]};
  padding-bottom: ${({ theme }) => theme.space[10]};
  padding-left: ${({ theme }) => theme.space[5]};
  padding-right: ${({ theme }) => theme.space[5]};
  margin-left: auto;
  margin-right: auto;
`

export const IllustrationColumn = styled.div`
  display: flex;
  justify-content: center;
`

export const MessageColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[5]};

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.space[5]};

    h1 {
      font-size: ${({ theme }) => theme.font['3xl']};
      text-align: center;
    }

    p {
      font-size: ${({ theme }) => theme.font.md};
      line-height: ${({ theme }) => theme.line.xl};
      text-align: center;
    }
  }

  a {
    margin-left: auto;
    margin-right: auto;
  }
`
