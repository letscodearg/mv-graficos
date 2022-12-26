import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Products from "./pages/Products";
import Equipos from "./pages/Equipos";
import Calidad from "./pages/Calidad";
import Clientes from "./pages/Clientes";
import Contacto from "./pages/Contacto";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index exact="true" element={<Home />} />
        <Route path="/nosotros" exact="true" element={<About />} />
        <Route path="/lineas" exact="true" element={<Products />} />
        <Route path="/equipamiento" exact="true" element={<Equipos />} />
        <Route path="/calidad" exact="true" element={<Calidad />} />
        <Route path="/clientes" exact="true" element={<Clientes />} />
        <Route path="/contacto" exact="true" element={<Contacto />} />
      </Route>
    </Routes>
  );
}

export default App;
