import styled from 'styled-components'

export const LabelStyle = styled.label<{ $variant?: 'normal' | 'large' }>`
  position: relative;
  color: ${({ theme }) => theme.blue[50]};
  font-size: ${({ $variant, theme }) => ($variant === 'large' ? theme.font.md : theme.font.sm)};

  & > :first-child {
    margin-top: ${({ theme }) => theme.space[2]};
  }

  & > :first-child:has(input[type='radio']),
  & > :first-child:has(input[type='checkbox']) {
    margin-top: 0;
  }

  &:has(input[type='radio']),
  &:has(input[type='checkbox']) {
    line-height: ${({ $variant }) => ($variant === 'large' ? 1.5 : 1.25)};
    padding-left: ${({ $variant, theme }) =>
      $variant === 'large' ? theme.space[8] : theme.space[6]};
  }
`
