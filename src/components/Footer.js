import {Link} from 'react-router-dom'
import '../styles/Footer.css';
import letscode from '../assets/letscode.svg';
import iso from '../assets/calidad/iso.jpg';
import fsc from '../assets/calidad/fsc.png';

function Footer() {
  return (
    <footer className="df cl" id="footer">
        <section className="df rw wp jca ais">
            <article className="df cl wp">
                <h2>Secciones</h2>
                <Link to="/nosotros" className="link">Nosotros</Link>
                <Link to="/lineas" className="link">Líneas de Productos</Link>
                <Link to="/equipamiento" className="link">Equipamiento</Link>
                <Link to="/calidad" className="link">Política de Calidad</Link>
                <Link to="/clientes" className="link">Nuestros Clientes</Link>
                <Link to="/contacto" className="link">Contacto</Link>
            </article>
            <article className="df cl wp jcc aic">
                <h2>Contacto</h2>
                    <a href="mailto:info@mv-graficos.com.ar">info@mv-graficos.com.ar</a>
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
                <section className="df rw wp jce aic" id="calidad">
                    <img src={iso} alt="iso9001" id="iso"/>
                    <img src={fsc} alt="fsc" id="fsc"/>
                </section>
            </article>

        </section>
        <section className="df rw wp jca aic" id="copyright">
            <p>© Copyright 2022 – MV Gráficos</p>
            <a href="http://letscode.com.ar"><img src={letscode} alt="Lets Code"/></a>
        </section>
    </footer>
  );
}

export default Footer;