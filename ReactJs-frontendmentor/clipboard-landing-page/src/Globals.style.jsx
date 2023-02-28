import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  img, picture, canvas, svg, video {
    width: 100%;
    display: block;
  }

  html {
    scroll-behavior: smooth;

    // sets 1rem to 10px
    font-size: 62.5%;
  }

  body {
    min-height: 100vh;
    font-family: 'Bai Jamjuree', sans-serif; // 400, 600
    font-size: 1.8rem;
    color: black;
  }

`;

export default GlobalStyle;
