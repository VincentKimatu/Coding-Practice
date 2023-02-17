import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
  font-family: 'Poppins', sans-serif; // 700

  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');
  font-family: 'Open Sans', sans-serif; // 400, 600, 700

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
  }

`;

export default GlobalStyle;
