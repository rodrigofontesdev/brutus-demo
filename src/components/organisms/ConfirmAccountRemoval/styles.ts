import styled from 'styled-components'

export const ConfirmAccountRemovalStyle = styled.div`
  > p {
    font: ${(props) => props.theme['text-sm']};
    margin-bottom: 1.5625rem;
  }
`

export const ConfirmRemovalForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 1.5625rem;
`

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 1.5625rem;
`
