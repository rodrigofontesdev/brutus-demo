import styled from 'styled-components'

export const HistoryStyle = styled.aside`
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.space[5]};
  overflow-y: auto;
  scrollbar-width: none;
`

export const FilterByYear = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;
  background-color: ${({ theme }) => theme.blue[700]};
  padding-top: ${({ theme }) => theme.space[10]};
  padding-left: ${({ theme }) => theme.space[5]};
  padding-right: ${({ theme }) => theme.space[5]};
`

export const ScrollableArea = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.space[5]};
  padding-bottom: ${({ theme }) => theme.space[10]};
  padding-left: ${({ theme }) => theme.space[5]};
  padding-right: ${({ theme }) => theme.space[5]};
`

export const ReportsByYear = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.space[5]};
  margin-bottom: ${({ theme }) => theme.space[5]};
`
