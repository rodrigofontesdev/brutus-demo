import styled from 'styled-components'

export const AccountMenuStyle = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 3.125rem;
`

export const AccountForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 1.5625rem;

  h2 {
    font: ${(props) => props.theme['title-sm']};
    color: ${(props) => props.theme['blue-400']};
  }
`

export const DeleteAccount = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.5625rem;

  h2 {
    font: ${(props) => props.theme['title-sm']};
    color: ${(props) => props.theme['blue-400']};
  }
`

export const DeleteAccountButton = styled.button`
  all: unset;
  width: max-content;
  color: ${(props) => props.theme['blue-50']};
  font: ${(props) => props.theme['text-sm']};
  cursor: pointer;
  transition: color 400ms;

  &:hover {
    color: ${(props) => props.theme['red-400']};
  }

  &:focus {
    outline: 2px solid ${(props) => props.theme['blue-400']};
  }
`
