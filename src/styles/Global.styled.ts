import { createGlobalStyle } from "styled-components";
import { theme } from "styles/Theme";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    font-family: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.2;
  }

  ul {
    list-style: none;
  }
  
  a {
    text-decoration: none;
    cursor: pointer;
  }
  
  button {
    border: unset;
    background-color: unset;
  }
  
  section {
    padding: 80px 0;
  }
  
  section:first-of-type,
  section:nth-of-type(even) {
    background-color: ${theme.colors.primary};
  }
  
  section:nth-of-type(2n+3){
    background-color: ${theme.colors.secondary};
  }
  
  p {
    font-size: 18px;
    font-weight: 400;
  }
`
