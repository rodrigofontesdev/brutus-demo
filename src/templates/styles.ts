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
  display: grid;
  grid-template-columns: 21.875rem 1fr 12.5rem;
`

export const DashboardApp = styled.div`
  background-color: ${({ theme }) => theme.black.alpha[15]};
  padding-left: ${({ theme }) => theme.space[5]};
  padding-right: ${({ theme }) => theme.space[5]};
`

export const DashboardContainer = styled.div`
  max-width: 73.125rem;
  margin-right: auto;
  margin-left: auto;
`
