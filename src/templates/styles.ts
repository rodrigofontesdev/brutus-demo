import styled from 'styled-components'

export const AuthGrid = styled.div`
  height: 100vh;
  height: 100svh;
  display: grid;
  grid-template-rows: min-content 1fr min-content;
`

export const AuthContainer = styled.main`
  display: grid;
  align-items: center;
  padding-left: ${({ theme }) => theme.space[5]};
  padding-right: ${({ theme }) => theme.space[5]};
`

export const DashboardGrid = styled.div`
  height: 100vh;
  height: 100svh;
`

export const DashboardApp = styled.div`
  min-height: 100%;

  @media (min-width: ${({ theme }) => theme.screen.md}) {
    background-color: ${({ theme }) => theme.black.alpha[15]};
  }
`

export const DashboardContainer = styled.div`
  @media (min-width: ${({ theme }) => theme.screen.md}) {
    margin-left: 18.75rem;
  }

  @media (min-width: ${({ theme }) => theme.screen.lg}) {
    margin-left: 20rem;
    margin-right: 11.25rem;
  }
`

export const DashboardInner = styled.div`
  max-width: 75rem;
  margin-left: auto;
  margin-right: auto;
`
