import styled from 'styled-components'

export const Card = styled.article`
  width: 100%;
  position: relative;
  display: grid;
  grid-template-rows: repeat(2, auto);
  background-color: ${(props) => props.theme['blue-700']};
  border-radius: 0.5rem;
  box-shadow: ${(props) => props.theme.shadow};
`

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgb(0 0 0 / 8%);
  border-radius: 0.5rem;
`

export const Title = styled.div`
  position: relative;
  padding: 3.125rem;

  h3 {
    color: ${(props) => props.theme['blue-400']};
    font: ${(props) => props.theme.title};
    text-align: center;
    margin-bottom: 0.25rem;
  }

  p {
    color: ${(props) => props.theme['blue-50']};
    font: ${(props) => props.theme.text};
    text-align: center;
  }
`

export const Actions = styled.div`
  height: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  position: relative;
  column-gap: 1px;

  :first-child {
    border-bottom-left-radius: 0.5rem;
  }

  :last-child {
    border-bottom-right-radius: 0.5rem;
  }

  a,
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(0 0 0 / 20%);
    color: ${(props) => props.theme['blue-50']};
    transition: background 400ms;

    &:hover {
      background-color: ${(props) => props.theme['blue-400']};
      color: ${(props) => props.theme['blue-50']};
    }
  }
`
