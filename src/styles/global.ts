import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-size: calc(8px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
  }

  html,body{
    height:100%;
    min-height:100%; 
    width: 100%;
    min-width: 100%;
    background-color:  #7D938A;
  }

  #root {
    height:100%;
    min-height:100%; 
    width: 100%;
    min-width: 100%;
    overflow: hidden;
  }

  * {
    margin: 0px;
    padding: 0px;
    font-family: "Source Sans Pro", sans-serif;
  }
`;

export default GlobalStyle;
