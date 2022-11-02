import '../styles/Contacto.css';
import {Link} from "react-router-dom";
import Iframe from 'react-iframe'

function Contacto() {
  return (
    <main className="df cl jcc aic"> 
      <section className="main d-df d-rw d-wp d-jcb d-ais">
        <h1>Contacto</h1>
        <form action="/php/contacto" method="post" className="df cl jcc aic">
          <fieldset className="df jcb">
            <label for="name">Nombre</label>
            <input type="text" name="name" />
          </fieldset>
          <fieldset className="df jcb">
            <label for="phone">Teléfono</label>
            <input type="phone" name="phone" />
          </fieldset>
          <fieldset className="df jcb">
            <label for="email">E-Mail</label>
            <input type="email" name="email" />
          </fieldset>
          <fieldset className="df jcb">
            <label for="msg">Mensaje</label>
            <textarea name="msg" />
          </fieldset>
          <button type="submit">Enviar</button>
        </form>
      </section>
      <section className="d-df d-wp d-rw d-jcc d-aist">
        <article className="df wp rw jcc aic box">
        <Iframe 
          url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.90824512346!2d-58.569135349560135!3d-34.581188163716746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb9cff3da93bd%3A0xc77d984147ab8032!2sLacroze%205833%2C%20Billinghurst%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1667411822434!5m2!1ses!2sar"
          width="640px"
          height="320px"
          id=""
          className=""
          display="block"
          position="relative"
        />
        </article>
        <article className="df wp rw jcc aic box">
          <section className="df cl wp jcc aic">
              <article className="df rw wp jcc aic">
                  <i className="fa-solid fa-envelope"></i>
                  <Link className="link">info@mv-graficos.com.ar</Link>
              </article>
              <article className="df rw wp jcc aic">
                  <i className="fa-solid fa-phone"></i>
                  <p className="link">011-4844-6713 / 0330</p>
              </article>
              <article className="df cl wp jcc aic">
                  <i className="fa-solid fa-location-dot"></i>
                  <p>Lacroze 5833, Billinghurst <br/> Provincia de Buenos Aires, Argentina</p>
              </article>
              <a className="link" href="https://www.linkedin.com/company/mv-graficos/about/?viewAsMember=true" target="_blank"><i class="fa-brands fa-linkedin"/></a>
          </section>
        </article>
      </section>
    </main>
  );
}

export default Contacto;