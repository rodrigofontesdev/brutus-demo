import styled from 'styled-components'

export const CompleteProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 1.5625rem;

  p {
    color: ${(props) => props.theme['blue-50']};
    font: ${(props) => props.theme['text-sm']};
  }

  button {
    margin-left: auto;
  }
`
