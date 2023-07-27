import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;

    background-color: ${(props) => props.theme['bg-base']};
    color: ${(props) => props.theme['base-600']};
    -webkit-font-smoothing: antialiased;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, input, textarea, button {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
  }

  button {
    cursor: pointer;
    border: none;
  }
`
