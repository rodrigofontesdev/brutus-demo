import styled from 'styled-components'

export const AccountMenuStyle = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.space[10]};
`

export const AccountForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.space[5]};

  h2 {
    color: ${({ theme }) => theme.blue[400]};
    font-size: ${({ theme }) => theme.font.xl};
  }
`

export const DeleteAccount = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.space[5]};

  h2 {
    color: ${({ theme }) => theme.blue[400]};
    font-size: ${({ theme }) => theme.font.xl};
  }
`

export const DeleteAccountButton = styled.button`
  all: unset;
  width: max-content;
  color: ${({ theme }) => theme.blue[50]};
  font-size: ${({ theme }) => theme.font.sm};
  line-height: ${({ theme }) => theme.line.lg};
  cursor: pointer;
  transition: color ${({ theme }) => theme.duration.normal};

  &:hover {
    color: ${({ theme }) => theme.red[400]};
  }

  &:focus {
    outline: ${({ theme }) => theme.outline.blue[400]};
  }
`
