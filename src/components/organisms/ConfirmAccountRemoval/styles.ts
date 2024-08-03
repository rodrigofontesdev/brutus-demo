import styled from 'styled-components'

export const ConfirmAccountRemovalStyle = styled.div`
  > p {
    font-size: ${({ theme }) => theme.font.sm};
    line-height: ${({ theme }) => theme.line.lg};
    margin-bottom: ${({ theme }) => theme.space[5]};
  }
`

export const ConfirmRemovalForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.space[5]};
`

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  column-gap: ${({ theme }) => theme.space[5]};
`
