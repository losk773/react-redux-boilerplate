import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html, body {
    height: 100%;
  }
  body, ul {
    padding: 0;
    margin: 0;
  }
  ul {
    list-style: none;
  }
  #root {
    height: 100%;
  }
`;
