/* import './App.css'; */
import {Routes,Route} from 'react-router-dom';
import Layout from './components/Layout';
import About from './components/About';
import Products from './components/Products';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="nosotros" exact="true" element={<About/>} />
        <Route path="lineas" exact="true" element={<Products/>} />
      </Route>
    </Routes>
  );
}

export default App;
