/* import './App.css'; */
import {Routes,Route} from 'react-router-dom';
import Layout from './components/Layout';
import About from './components/About';
import Products from './components/Products';
import Equipos from './components/Equipos';
import Calidad from './components/Calidad';
import Clientes from './components/Clientes';
import Contacto from './components/Contacto';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="nosotros" exact="true" element={<About/>} />
        <Route path="lineas" exact="true" element={<Products/>} />
        <Route path="equipamiento" exact="true" element={<Equipos/>} />
        <Route path="calidad" exact="true" element={<Calidad/>} />
        <Route path="clientes" exact="true" element={<Clientes/>} />
        <Route path="contacto" exact="true" element={<Contacto/>} />
      </Route>
    </Routes>
  );
}

export default App;
