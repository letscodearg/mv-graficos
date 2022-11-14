import '../styles/Clientes.css';
import trespatitos from "../assets/clients/trespatitos.png";
import crysf from "../assets/clients/crysf.png";
import starbucks from "../assets/clients/starbucks.png";
import quaker from "../assets/clients/quaker.png";
import burgerking from "../assets/clients/burgerking.png";
import quickfood from "../assets/clients/quickfood.png";
import maped from "../assets/clients/maped.png";
import celusal from "../assets/clients/celusal.png";
import antex from "../assets/clients/antex.png";
import compañiaamericana from "../assets/clients/compañiaamericana.png";
import santamaria from "../assets/clients/santamaria.png";
import simplot from "../assets/clients/simplot.png";
import todoenvase from "../assets/clients/todoenvase.png";
import mccain from "../assets/clients/mccain.png";
import bonafide from "../assets/clients/bonafide.png";
import necho from "../assets/clients/necho.png";

function Clientes() {
  return (
    <main className="df wp rw jcc aic clients"> 
      <section className="main d-df d-rw d-wp d-jcb d-ais">
        <h1>Nuestros Clientes</h1>
      </section>
      <section className="df rw wp jca aic clientsBox">
          <img src={santamaria}  alt="logo" />
          <img src={trespatitos}  alt="logo" />
          <img src={antex}  alt="logo" />
          <img src={quaker}  alt="logo" />
          <img src={burgerking}  alt="logo" />
          <img src={starbucks}  alt="logo" />
          <img src={crysf}  alt="logo" />
          <img src={maped}  alt="logo" />
          <img src={quickfood}  alt="logo" />
          <img src={todoenvase}  alt="logo" />
          <img src={simplot}  alt="logo" />
          <img src={compañiaamericana}  alt="logo" />
          <img src={celusal}  alt="logo" />
          <img src={mccain}  alt="logo" />
          <img src={bonafide}  alt="logo" />
          <img src={necho}  alt="logo" />
      </section>
    </main>
  );
}

export default Clientes;