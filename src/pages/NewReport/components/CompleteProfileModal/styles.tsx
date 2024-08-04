import styled from 'styled-components'

export const CompleteProfileForm = styled.form`
  display: grid;
  row-gap: ${({ theme }) => theme.space[5]};

  p {
    color: ${({ theme }) => theme.blue[50]};
    font-size: ${({ theme }) => theme.font.sm};
    line-height: ${({ theme }) => theme.line.lg};
  }

  button {
    margin-left: auto;
  }
`
