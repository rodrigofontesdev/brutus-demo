import styled from 'styled-components'

export const ConfirmReportRemovalStyle = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.space[5]};

  > p {
    font-size: ${({ theme }) => theme.font.sm};
    line-height: ${({ theme }) => theme.line.lg};
  }
`

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  column-gap: ${({ theme }) => theme.space[5]};
`
