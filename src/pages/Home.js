import "../styles/Home.css";
import imgHome from "../assets/home/imgHome.jpg";
import { Carousel } from "../components/Carousel";
import trespatitos from "../assets/clients/trespatitos.png";
import crysf from "../assets/clients/crysf.png";
import starbucks from "../assets/clients/starbucks.png";
import quaker from "../assets/clients/quaker.png";
import burgerking from "../assets/clients/burgerking.png";
import quickfood from "../assets/clients/quickfood.png";
import celusal from "../assets/clients/celusal.png";
import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
function Home() {
  return (
    <main className="df wp rw jcc aic home">
      <CallToAction image={imgHome} link="/nosotros" text="conocé más">
        <h2>La mejor calidad y servicio</h2>
        <p>En estuches de cartulina y microcorrugado</p>
      </CallToAction>
      <Carousel
        slides={[
          trespatitos,
          crysf,
          starbucks,
          quaker,
          burgerking,
          quickfood,
          celusal,
        ]}
        velocity={1000}
        interval={2000}
        height={"5rem"}
      />
    </main>
  );
}

export default Home;
