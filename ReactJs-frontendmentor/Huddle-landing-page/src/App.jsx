import { ThemeProvider } from 'styled-components';
import Header from './container/Header/Header';
import Card from './container/Card/Card';
import Footer from './container/Footer/Footer';
import GlobalStyle from './Global.style';
import theme from './Styles/variables';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header />
        <Card />
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
