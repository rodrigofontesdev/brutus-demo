import styled from 'styled-components'

export const LabelStyle = styled.label<{ $variant?: 'normal' | 'large' }>`
  color: ${({ theme }) => theme.blue[50]};
  font-size: ${({ $variant, theme }) => ($variant === 'large' ? theme.font.md : theme.font.sm)};

  & > :first-child {
    margin-top: ${({ theme }) => theme.space[2]};
  }
`
