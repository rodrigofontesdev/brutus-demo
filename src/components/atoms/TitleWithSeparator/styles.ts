import styled, { css } from 'styled-components'

export const Separator = styled.div<{ $disabled: boolean }>`
  width: 100%;
  height: 2px;
  display: ${(props) => (props.$disabled ? 'none' : 'block')};
  background-color: ${(props) => props.theme['blue-400']};
  opacity: 15%;
  border-radius: 0.125rem;
`

export const TitleContainer = styled.div<{
  $orientation: 'horizontal' | 'vertical'
  $size: number
}>`
  display: flex;
  align-items: center;

  ${(props) => {
    if (props.$orientation === 'horizontal') {
      return css`
        column-gap: 1.5625rem;
      `
    } else {
      return css`
        flex-direction: column;
        row-gap: 0.625rem;

        ${Separator} {
          width: 2px;
          height: ${props.$size}px;
        }
      `
    }
  }}

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  span,
  p {
    color: ${(props) => props.theme['blue-400']};
    font: ${(props) => props.theme['title-xs']};
  }
`
