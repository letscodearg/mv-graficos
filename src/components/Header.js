import { useState, useContext } from "react";
import logo from "../assets/logo.svg";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import "../styles/Body.css";
import { MenuContext } from "../menu";
function Header() {
  const [menu, setMenu] = useContext(MenuContext);

  return (
    <header>
      <section id="mobile" className="df rw wp jca aic">
        <Link to="/" id="logo" className="logo df jcc">
          <img src={logo} alt="logo" />
        </Link>
        <button className="hamburger" onClick={() => setMenu(!menu)}>
          <i className={`fas ${menu ? "fa-bars open" : "fa-times close"}`}></i>
        </button>
        <Nav
          links={[
            { url: "/nosotros", title: "Nosotros" },
            { url: "/lineas", title: "Líneas de Productos" },
            { url: "/equipamiento", title: "Equipamiento" },
            { url: "/calidad", title: "Política de Calidad" },
            { url: "/clientes", title: "Nuestros Clientes" },
            { url: "/contacto", title: "Contacto" },
          ]}
          show={menu}
          call={() => setMenu(!menu)}
        />
      </section>
      <section id="desktop" className="df rw wp jca aic">
        <Link to="/" id="logo" className="df rw wp jcc aic">
          <img src={logo} alt="logo" className="logo df jcc" />
        </Link>
        <Nav
          links={[
            { url: "/nosotros", title: "Nosotros" },
            { url: "/lineas", title: "Líneas de Productos" },
            { url: "/equipamiento", title: "Equipamiento" },
            { url: "/calidad", title: "Política de Calidad" },
            { url: "/clientes", title: "Nuestros Clientes" },
            { url: "/contacto", title: "Contacto" },
          ]}
          show={!menu}
          call={() => setMenu(true)}
        />
      </section>
    </header>
  );
}

export default Header;
