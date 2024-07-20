import styled from 'styled-components'

export const Card = styled.article`
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 3.125rem;
  position: relative;
  padding: 3.125rem 1.5625rem;
`

export const InfoButton = styled.button`
  all: unset;
  position: absolute;
  top: 0.9375rem;
  right: 0.9375rem;
  color: ${(props) => props.theme['blue-50']};
  cursor: pointer;
  transition: filter 400ms;

  &:hover > svg {
    filter: brightness(80%);
  }

  &:focus {
    outline: 2px solid ${(props) => props.theme['blue-400']};
  }
`

export const CardHeader = styled.header`
  h2 {
    color: ${(props) => props.theme['blue-400']};
    font: ${(props) => props.theme['title-sm']};
  }

  p {
    color: ${(props) => props.theme['blue-50']};
    font: ${(props) => props.theme['text-xs']};
  }
`

export const CardBody = styled.header`
  display: flex;
  flex-direction: column;
  row-gap: 1.5625rem;
`

export const CardFooter = styled.header`
  p {
    color: ${(props) => props.theme['blue-50']};
    font: ${(props) => props.theme['title-xs']};
  }

  span {
    color: ${(props) => props.theme['blue-50']};
    font: ${(props) => props.theme.title};
  }
`
