import styled from 'styled-components'

export const HistoryStyle = styled.aside`
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 1.5625rem;
  overflow-y: auto;
  scrollbar-width: none;
`

export const FilterByYear = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;
  background-color: ${(props) => props.theme['blue-700']};
  padding: 3.125rem 1.5625rem 0;
`

export const ScrollableArea = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.5625rem;
  padding: 0 1.5625rem 3.125rem;
`

export const ReportsByYear = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  margin-bottom: 1.5625rem;
`
