import {Link} from 'react-router-dom'
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="df rw wp jcc ais" id="footer">
        <section className="df cl wp jcc aic">
            <h2>Links</h2>
            <Link to="/lineas" className="link">Nosotros</Link>
            <Link to="/equipamiento" className="link">Líneas de Productos</Link>
            <Link to="/calidad" className="link">Equipamiento</Link>
            <Link to="/clientes" className="link">Política de Calidad</Link>
            <Link to="/contacto" className="link">Nuestros Clientes</Link>
            <Link to="/lineas" className="link">Contacto</Link>
        </section>
        <section className="df cl wp jcc aic">
            <form action="" method="post" className="df cl wp jcc aic">
                <h2>Newsletter</h2>
                <input for="newsletter" id="newsletter"></input>
            </form>
        </section>
        <section className="df cl wp jcc aic">
            <h2>Contacto</h2>
            <article className="df rw wp jcc aic">
                <i className="fa-solid fa-envelope"></i>
                <Link className="link">info@mv-graficos.com.ar</Link>
            </article>
            <article className="df rw wp jcc aic">
                <i className="fa-solid fa-phone"></i>
                <p>011-4844-6713 / 0330</p>
            </article>
            <article className="df cl wp jcc aic">
                <i className="fa-solid fa-location-dot"></i>
                <p>Lacroze 5833, Billinghurst <br/> Provincia de Buenos Aires, Argentina</p>
            </article>
        </section>
    </footer>
  );
}

export default Footer;