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
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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

  li {
    list-style-position: inside;
  }
`
