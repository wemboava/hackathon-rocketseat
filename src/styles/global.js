import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato:400,700&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px 'Lato', sans-serif
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button: {
    cursor: pointer;
  }
`;
