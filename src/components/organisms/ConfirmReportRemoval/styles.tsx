import styled from 'styled-components'

export const ConfirmReportRemovalStyle = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.5625rem;

  > p {
    font: ${(props) => props.theme['text-sm']};
  }
`

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 1.5625rem;
`
