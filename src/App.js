import { BrowserRouter } from 'react-router-dom';
import Routers from './Routes';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routers />
      <Footer />
  </BrowserRouter>
  );
}

export default App;
