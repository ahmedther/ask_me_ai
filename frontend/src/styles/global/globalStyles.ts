import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 *, *::before, *::after {
    box-sizing: border-box;
    transition: all 300ms ease-out;
  }

  body, h1, h2, h3, h4, p, figure, blockquote, dl, dd {
    margin: 0;
    padding: 0;
  }

  ul, ol {
    margin: 0;
  }

  html:focus-within {
    scroll-behavior: smooth;
  }

  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    font-family: 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  }

 
  img, picture {
    max-width: 100%;
    display: block;
  }

  input, button, textarea, select {
    font: inherit;
  }

  a {
  color: inherit;
}

    /* a:hover {
    text-decoration: none;
    }

    a:focus {
    outline: none;
    text-decoration: none;
    }

    a:active {
    text-decoration: none;
    }

    a:visited {
    color: inherit;
    } */


`;

export default GlobalStyles;
