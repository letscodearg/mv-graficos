import {Link} from 'react-router-dom'
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="df cl" id="footer">
        <section className="df rw wp jca ais">
            <article className="df cl wp">
                <h2>Secciones</h2>
                <Link to="/lineas" className="link">Nosotros</Link>
                <Link to="/equipamiento" className="link">Líneas de Productos</Link>
                <Link to="/calidad" className="link">Equipamiento</Link>
                <Link to="/clientes" className="link">Política de Calidad</Link>
                <Link to="/contacto" className="link">Nuestros Clientes</Link>
                <Link to="/lineas" className="link">Contacto</Link>
            </article>
            <article className="df cl wp jcc aic">
                <h2>Contacto</h2>
                    <Link className="link">info@mv-graficos.com.ar</Link>
                    <p>011-4844-6713 / 0330</p>
                    <p>Lacroze 5833, Billinghurst <br/> Provincia de Buenos Aires, Argentina</p>
            </article>
            <article className="df cl wp">
                <h2>Redes Sociales</h2>
                <a
                rel="noreferrer"
                href="https://www.linkedin.com/company/mv-graficos/about/?viewAsMember=true"
                target="_blank"
                >
                <i className="fa-brands fa-linkedin" />
                </a>
            </article>
        </section>
        <section className="df rw wp jca aic" id="copyright">
            <p>© Copyright 2022 – MV Gráficos</p>
            <a href="http://letscode.com.ar">Lets Code</a>
        </section>
    </footer>
  );
}

export default Footer;