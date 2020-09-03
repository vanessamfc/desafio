import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    
  }
  body {
    background: #fff3e0;
    -webkit-font-smoothing: antialiased;
    min-width:100%;
    max-width:100vw;
    min-height:100%;
    
    
  }

  body, input, button, textarea {
    font-family: 'Roboto', sans-serif;
    color:#424242;
  }
  #root {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    min-height:100vh;
  }
  button {
    cursor: pointer;
  } 
  `;
