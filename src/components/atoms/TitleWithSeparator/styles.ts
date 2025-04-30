import styled, { css } from 'styled-components'

export const Separator = styled.div<{ $disabled: boolean }>`
  width: 100%;
  height: 2px;
  display: ${({ $disabled }) => ($disabled ? 'none' : 'block')};
  background-color: ${({ theme }) => theme.blue[400]};
  border-radius: 2px;
  opacity: 15%;
`

export const TitleContainer = styled.div<{
  $orientation: 'horizontal' | 'vertical'
  $size: number
}>`
  display: flex;
  align-items: center;

  ${({ $orientation, $size, theme }) => {
    if ($orientation === 'horizontal') {
      return css`
        column-gap: ${theme.space[5]};
      `
    }

    return css`
      flex-direction: column;
      row-gap: ${theme.space[2]};

      ${Separator} {
        width: 2px;
        height: ${$size}px;
      }
    `
  }}

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  span,
  p {
    color: ${({ theme }) => theme.blue[400]};
    font-size: ${({ theme }) => theme.font.lg};
  }
`
