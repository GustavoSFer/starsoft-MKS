import { BrowserRouter } from 'react-router-dom';
import Routers from './Routes';
import './App.css';
import Header from './Components/Header';
import Rodape from './Components/Rodape';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routers />
      <Rodape />
  </BrowserRouter>
  );
}

export default App;
