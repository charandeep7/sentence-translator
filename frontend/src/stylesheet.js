import { createGlobalStyle } from "styled-components";
import { random } from "glowing-engine";
import { color } from "./theme/color";
import { bg } from './assets/'
const GlobalStyle = createGlobalStyle`
    :root {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  
    color-scheme: light dark;
    color: #fff;
  
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }
  
  body{
    background: url(${bg}) no-repeat center fixed;
    background-size: cover;
    min-height: 100vh;
  }
  
  ::-moz-selection {
    color: red;
    background: yellow;
  }
  
  ::selection {
    color: red;
    background: yellow;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background: black;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: var(--secondary-color);
  }
`;

export default GlobalStyle;
