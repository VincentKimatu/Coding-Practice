import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './Variables';
import GlobalStyle from './GlobalStyle';

import Hero from './containers/Hero/Hero';
import Metric from './containers/Metric/Metric';
import CardSection from './containers/CardSection/CardSection';
import CTA from './containers/CTA/CTA';
import Footer from './containers/Footer/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Hero />
        <Metric />
        <CardSection />
        <CTA />
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
