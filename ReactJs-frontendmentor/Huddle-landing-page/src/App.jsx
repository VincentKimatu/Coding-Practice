import { ThemeProvider } from 'styled-components';
import Header from './container/Header/Header';
import CardSection from './container/Card/CardSection';
import Footer from './container/Footer/Footer';
import GlobalStyle from './Global.style';
import theme from './Styles/variables';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header />
        <CardSection />
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
