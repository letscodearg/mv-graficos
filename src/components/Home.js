import '../styles/Home.css';
import {Link} from "react-router-dom";
import imgHome from '../assets/home/imgHome.jpg';
import CarouselHome from './CarouselHome'


function Home() {
 
  return (
    <main className="df wp rw jcc aic home"> 
      <section className="df rw wp jca aic d-jcb d-ais">
          <figure>
              <img src={imgHome} alt="MV Gráficos" />
          </figure>
          <article className="text d-df d-rw d-wp d-jcb d-aic">
            <h2>UNA FRASE BUENA PARA EL HOME QUE LLAME LA ATENCIÓN</h2>
            <section className="df cl d-df d-rw d-wp d-jca d-aic">
              <Link to="/calidad">
                Políticas de Calidad
              </Link>
              <Link to="/contacto">
                Contactanos
              </Link>
            </section>
          </article>
      </section>
      <section className="carousel df rw wp jcc aic">
        <CarouselHome/>
      </section>
    </main>
  );
}

export default Home;