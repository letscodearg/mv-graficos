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
import drmadaus from "../assets/clients/drmadaus.png";
import pizzazen from "../assets/clients/pizzazen.png";
import ciaber from "../assets/clients/ciaber.png";
import res from "../assets/clients/res.png";
import yolybell from "../assets/clients/yolybell.png";
import darnel from "../assets/clients/darnel.png";
import ladolce from "../assets/clients/ladolce.png";

function Clientes() {
  return (
    <main className="df wp rw jcc aic clients"> 
      <section className="main d-df d-rw d-wp d-jcb d-ais">
        <h1>Nuestros Clientes</h1>
      </section>
      <section className="df rw wp jca aic clientsBox">
          <img src={santamaria}  alt="Santa María" />
          <img src={trespatitos}  alt="Tres Patitos" />
          <img src={antex}  alt="Antex" />
          <img src={quaker}  alt="Quaker" />
          <img src={burgerking}  alt="Burger King" />
          <img src={starbucks}  alt="Starbucks" />
          <img src={crysf}  alt="CRYSF" />
          <img src={maped}  alt="Maped" />
          <img src={quickfood}  alt="Quickfood" />
          <img src={todoenvase}  alt="Todo Envase" />
          <img src={simplot}  alt="Simplot" />
          <img src={compañiaamericana}  alt="Compañia Americana" />
          <img src={celusal}  alt="Celusal" />
          <img src={mccain}  alt="MC Cain" />
          <img src={bonafide}  alt="Bonafide" />
          <img src={necho}  alt="Necho" />
          <img src={drmadaus}  alt="Dr Madaus" />
          <img src={pizzazen}  alt="Pizza Zen" />
          <img src={ciaber}  alt="Compañia Bernal" />
          <img src={res}  alt="Res" />
          <img src={yolybell}  alt="Yoly Bell" />
          <img src={darnel}  alt="La Pilarica" />
          <img src={ladolce}  alt="La Dolce" />
      </section>
    </main>
  );
}

export default Clientes;