import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }

  html {
    scrollbar-width: thin;
    scrollbar-color:  ${({ theme }) => theme.black.alpha[50]} ${({ theme }) => theme.blue[800]};
  }

  body {
    background-color: ${({ theme }) => theme.blue[700]};
    color: ${({ theme }) => theme.blue[50]};
    font-family: ${({ theme }) => theme.font.primary};
    font-weight: ${({ theme }) => theme.font.semibold};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: ${({ theme }) => theme.font.bold};
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
    color: ${({ theme }) => theme.blue[50]};
    text-decoration: none;
    transition: color ${({ theme }) => theme.duration.normal};
  }

  a:hover {
    color: ${({ theme }) => theme.blue[400]};
  }

  a:focus {
    outline: ${({ theme }) => theme.outline.blue}
  }

  li {
    list-style-position: inside;
  }
`
