import styled from 'styled-components'

export const TotalStyle = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 1.5625rem;
`

export const Heading = styled.div`
  p:first-of-type {
    color: ${(props) => props.theme['blue-400']};
    font: ${(props) => props.theme.title};
    text-transform: uppercase;
  }

  p:last-of-type {
    color: ${(props) => props.theme['blue-50']};
    font: ${(props) => props.theme['text-sm']};
  }
`

export const Amount = styled.div`
  max-width: 22.5rem;
  height: 3.75rem;
  display: flex;
  align-items: center;
  flex-grow: 1;
  position: relative;
  background-color: ${(props) => props.theme['blue-400']};
  padding: 1.25rem;
  border-radius: 0.5rem;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgb(255 255 255 / 20%);
    border-radius: 0.5rem;
    box-shadow: ${(props) => props.theme['shadow-inner']};
  }

  span {
    color: ${(props) => props.theme['blue-50']};
    font: ${(props) => props.theme['title-sm']};
    z-index: 1;
  }
`
