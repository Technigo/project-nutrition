import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Work Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #85FFBD;
    background-image: linear-gradient(0deg, #85FFBD 0%, #FFFB7D 100%);
    color: #193546;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
}
`;


// background-color: #85FFBD;
// background-image: linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%);
