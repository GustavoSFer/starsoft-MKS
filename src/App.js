import { BrowserRouter } from 'react-router-dom';
import Routers from './Routes';
import './App.css';
import Rodape from './Components/Rodape';

function App() {
  return (
    <BrowserRouter>
     
      <Routers />
      <Rodape />
  </BrowserRouter>
  );
}

export default App;
