import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    background-color: ${(props) => props.theme['base-800']};
    color: ${(props) => props.theme['base-300']};

    -webkit-font-smoothing: antialiased;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['base-400']};
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
