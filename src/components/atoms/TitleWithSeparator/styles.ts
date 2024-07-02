import styled from 'styled-components'

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 1.5625rem;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${(props) => props.theme['blue-400']};
    font: ${(props) => props.theme['title-xs']};
  }
`

export const Separator = styled.span`
  width: 100%;
  height: 2px;
  display: inline-block;
  background-color: ${(props) => props.theme['blue-400']};
  opacity: 15%;
  border-radius: 0.125rem;
`
