import React from 'react';
import Variables from './Variables';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';

import Hero from './containers/Hero/Hero';
import Metric from './containers/Metric/Metric';
import CardSection from './containers/CardSection/CardSection';
import Footer from './containers/Footer/Footer';

function App() {
  return (
    <ThemeProvider theme={Variables}>
      <>
        <GlobalStyle />
        <Hero />
        <Metric />
        <CardSection />
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
