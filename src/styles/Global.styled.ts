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
    color: ${theme.colors.primaryFont}
  }

  ul {
    list-style: none;
  }
  
  a {
    text-decoration: none;
  }
  
  button {
    border: unset;
    background-color: unset;
  }
  
  section:first-of-type,
  section:nth-of-type(even) {
    background-color: ${theme.colors.primaryBg};
  }
  
  section:nth-of-type(2n+3){
    background-color: ${theme.colors.secondaryBg};
  }
`
