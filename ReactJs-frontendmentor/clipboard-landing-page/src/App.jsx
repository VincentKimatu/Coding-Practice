import React from 'react';
import GlobalStyle from './Globals.style';
import { ThemeProvider } from 'styled-components';
import theme from './Variables';

import Header from './container/header/Header';
import Snippets from './container/snippets/Snippets';
import Clipboard from './container/clipboard/Clipboard';
import Workflow from './container/workflow/Workflow';
import Brands from './container/brands/Brands';
import OS from './container/os/OS';
import Footer from './container/footer/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header />
        <Snippets />
        <Clipboard />
        <Workflow />
        <Brands />
        <OS />
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
