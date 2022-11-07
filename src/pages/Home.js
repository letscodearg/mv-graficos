import "../styles/Home.css";
import { Link } from "react-router-dom";
import imgHome from "../assets/home/imgHome.jpg";
import { Carousel } from "../components/Carousel";
import celusal from "../assets/clients/celusal.png";
import crysf from "../assets/clients/crysf.png";
import maped from "../assets/clients/maped.png";
import quaker from "../assets/clients/quaker.png";
import burgerking from "../assets/clients/burgerking.png"

function Home() {
  return (
    <main className="df wp rw jcc aic home">
      <section className="df rw wp jca aic d-jcb d-ais" id="banner">
        <figure>
          <img src={imgHome} alt="MV Gráficos" />
        </figure>
        <article className="text d-df d-rw d-wp d-jcb d-aic">
          <h2>UNA FRASE BUENA PARA EL HOME QUE LLAME LA ATENCIÓN</h2>
          <section className="df cl d-df d-rw d-wp d-jca d-aic">
            <Link to="/calidad">Políticas de Calidad</Link>
            <Link to="/contacto">Contactanos</Link>
          </section>
        </article>
      </section>
      <Carousel
        slides={[celusal, crysf, maped, quaker, burgerking]}
        velocity={1000}
        interval={5000}
        height={"5rem"}
      />
    </main>
  );
}

export default Home;
