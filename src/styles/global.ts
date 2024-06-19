import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme['blue-700']};
    color: ${(props) => props.theme['blue-50']};
    font-family: ${(props) => props.theme['font-montserrat']};
    font-weight: 600;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button {
    cursor: pointer;
  }

  a {
    color: ${(props) => props.theme['blue-50']};
    text-decoration: none;
    transition: color 400ms;
  }

  a:hover {
    color: ${(props) => props.theme['blue-400']};
  }
`
