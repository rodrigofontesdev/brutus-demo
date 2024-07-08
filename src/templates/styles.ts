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

export const PanelCentral = styled.div`
  background-color: rgb(0 0 0 / 16%);
  padding-right: 1.5625rem;
  padding-left: 1.5625rem;
`

export const PanelContainer = styled.div`
  width: 73.125rem;
  margin-right: auto;
  margin-left: auto;
`
