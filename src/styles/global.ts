import { createGlobalStyle } from 'styled-components'

import montserrat from '../assets/fonts/montserrat.ttf'

export const GlobalStyle = createGlobalStyle`
   @font-face {
    font-family: 'Montserrat';
    src: url(${montserrat});
    font-weight: 600 700;
    font-style: normal;
    font-display: fallback;
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
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
    display: block;
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

  a:focus {
    outline: 2px solid ${(props) => props.theme['blue-400']}
  }

  li {
    list-style-position: inside;
  }
`
