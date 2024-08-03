import styled from 'styled-components'

export const MainFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: ${({ theme }) => theme.space[3]};
  padding-bottom: ${({ theme }) => theme.space[3]};
  padding-left: ${({ theme }) => theme.space[5]};
  padding-right: ${({ theme }) => theme.space[5]};
`

export const Links = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space[5]};
  row-gap: ${({ theme }) => theme.space[2]};

  > p,
  a {
    font-size: ${({ theme }) => theme.font.xs};
    text-align: center;
  }
`
