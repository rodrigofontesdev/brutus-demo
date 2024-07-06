import styled from 'styled-components'

export const AuthContainer = styled.main`
  min-height: calc(100vh - 200px); // minus header and footer height
  padding: 0 1.5625rem;
`

export const PanelGrid = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 21.875rem 1fr 12.5rem;
`

export const PanelContainer = styled.div`
  max-width: 73.125rem;
  background-color: rgb(0 0 0 / 16%);
  padding: 0 6.25rem 3.125rem;
`
