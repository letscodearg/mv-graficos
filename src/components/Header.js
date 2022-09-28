import logo from '../assets/logo.png';
import Nav from './Nav';
import {Link} from 'react-router-dom'
import '../styles/Header.css';

function Header() {

    const menu = document.querySelector(".menu");
    const closeIcon= document.querySelector(".close");
    const menuIcon = document.querySelector(".open");
    
    function toggleMenu() {
      if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
      } else {
        menu.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
      }
    }


  return (
    <header>
        <section id="mobile" className="df rw wp jca aic">
            <Link to='/' id="logo">
                <img src={logo}  alt="logo" />
            </Link>
            <button className="hamburger" onClick={toggleMenu} >
                <i className="fas fa-times close" ></i>
                <i className="fas fa-bars cl-dorado bg-rosa open"></i>
            </button>
            <Nav links={
                [
                    {url: "/nosotros", title: "Nosotros"},
                    {url: "/lineas", title: "Líneas de Productos"},
                    {url: "/equipamiento", title: "Equipamiento"},
                    {url: "/calidad", title: "Gestión de Calidad"},
                    {url: "/clientes", title: "Nuestros Clientes"},
                    {url: "/contacto", title: "Contacto"}
                ]
                }/>
        </section>
        <section id="desktop">
            <Link to='/' id="logo">
                <img src={logo}  alt="logo" />
            </Link>
            <Nav links={
                [
                    {url: "/nosotros", title: "Nosotros"},
                    {url: "/lineas", title: "Líneas de Productos"},
                    {url: "/equipamiento", title: "Equipamiento"},
                    {url: "/calidad", title: "Gestión de Calidad"},
                    {url: "/clientes", title: "Nuestros Clientes"},
                    {url: "/contacto", title: "Contacto"}
                ]}/>
        </section>
    </header>
  );
}

export default Header;
