import styled from 'styled-components'

export const CompleteProfileForm = styled.form`
  display: grid;
  row-gap: ${({ theme }) => theme.space[5]};

  p {
    font-size: ${({ theme }) => theme.font.sm};
    line-height: ${({ theme }) => theme.line.xl};
  }

  button {
    justify-self: end;
  }
`
