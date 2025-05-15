import styled from 'styled-components'

export const FormStep = styled.form`
  p {
    font-size: ${({ theme }) => theme.font.sm};
    line-height: ${({ theme }) => theme.line.xl};
    margin-bottom: ${({ theme }) => theme.space[5]};
  }

  button {
    justify-self: end;
  }
`

export const HalfRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space[5]};
  margin-bottom: ${({ theme }) => theme.space[5]};

  & > div {
    flex-basis: max(14.375rem, calc(50% - 0.78125rem));
    flex-grow: 1;
  }
`

export const FullRow = styled.div`
  margin-bottom: ${({ theme }) => theme.space[5]};
`
