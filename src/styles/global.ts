import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

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
    font-family: 'Roboto', sans-serif;
  }

  .MuiTypography-h6 {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 99px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #bbb;
  }
`;

export default GlobalStyle;
