import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Poppins font */
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');

  /* Open Sans Font */
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  img,
  picture,
  canvas,
  svg,
  video {
    display: block;
    max-width: 100%;
  }

  html {
    // Sets 1rem to 10px
    font-size: 62.5%;

    scroll-behavior: smooth;
    /* display: flex;
    justify-content: center; */
  }

  body {
    min-height: 100vh;
    /* width: 1280px; */
  }
`;
export default GlobalStyle;
