import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './Global.style';
import theme from './variable';

import Header from './containers/Header/Header';
import Body from './containers/Body/Body';
import CTA from './containers/CTA/CTA';
import Footer from './containers/Footer/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header />
        <Body />
        <CTA />
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
