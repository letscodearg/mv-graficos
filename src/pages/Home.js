import "../styles/Home.css";
import imgHome from "../assets/home/imgHome.jpg";
import iso from '../assets/calidad/iso.jpg';
import fsc from '../assets/calidad/fsc.png';
import { Carousel } from "../components/Carousel";
import trespatitos from "../assets/clients/trespatitos.png";
import crysf from "../assets/clients/crysf.png";
import starbucks from "../assets/clients/starbucks.png";
import quaker from "../assets/clients/quaker.png";
import burgerking from "../assets/clients/burgerking.png";
import quickfood from "../assets/clients/quickfood.png";
import celusal from "../assets/clients/celusal.png";
import {Link} from "react-router-dom";

function Home() {
  return (
    <main className="df wp rw jcc aic home">
      <section className="df rw wp jca aic d-jcb d-ais" id="banner">
        <figure className="imgHome">
          <img src={imgHome} alt="MV Gráficos" />
        </figure>
        <article className="text d-df d-rw d-wp d-jcb d-aic">
          <section className="df cl d-df d-rw d-wp d-jcb d-aic bannerText">
            <Link to="/nosotros">CALIDAD Y SERVICIO EN ESTUCHES DE CARTULINA Y MICROCORRUGADO</Link>
{/*             <article className="df rw wp jce ais">
                <img src={iso} alt="iso9001" id="iso"/>
                <img src={fsc} alt="fsc" id="fsc"/>
            </article> */}
          </section>
        </article>
      </section>
      <Carousel
        slides={[trespatitos, crysf, starbucks, quaker, burgerking, quickfood, celusal]}
        velocity={1000}
        interval={2000}
        height={"5rem"}
      />
    </main>
  );
}

export default Home;
