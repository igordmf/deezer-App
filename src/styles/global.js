import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #f0f0f0;
  }

  body, input, textarea, button, select, option {
    font-family: 'Open Sans', Arial, sans-serif;
    font-weight: 400;
    border: 0;
  }

  button {
    cursor: pointer;
  }
`
