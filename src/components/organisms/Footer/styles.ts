import styled from 'styled-components'

export const MainFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: ${({ theme }) => theme.space[5]};
  row-gap: ${({ theme }) => theme.space[2]};
  padding-top: ${({ theme }) => theme.space[3]};
  padding-bottom: ${({ theme }) => theme.space[3]};
  padding-left: ${({ theme }) => theme.space[5]};
  padding-right: ${({ theme }) => theme.space[5]};

  > p,
  a {
    font-size: ${({ theme }) => theme.font.xs};
    line-height: ${({ theme }) => theme.line.xl};
    text-align: center;
  }

  @media (min-width: 30rem) {
    flex-direction: row;
  }
`
