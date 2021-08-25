import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --white: #fff;
    --white-gray: #F9F9F9;
    --white-grayer: #F6F6F6;

    --light-gray: #E8E8E8;
    --gray: #999999;
    --dark-gray: #333333;

    --black: #000;

    --pink: #FF1053;

    --yellow: #FFD05C;

    --green: #34A853;

    --purple: #6200EE;

    --blue: #2f46cf;
    --light-blue: #298AFF;

    --teal: #2AC4EA;
    --light-teal: #DDF6FC;
  }

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
