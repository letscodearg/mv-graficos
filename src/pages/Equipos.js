import {useState} from 'react';
import "../styles/Equipos.css";
import equipo1 from "../assets/equipos/equipo1.jpeg";
import equipo2 from "../assets/equipos/equipo2.jpeg";
import equipo3 from "../assets/equipos/equipo3.jpeg";
import BoxHover from "../components/BoxHover";

function Equipos() {

  return (
    <main className="main df wp rw jcc aic d-cl equipos">
      <section className="main d-df d-rw d-wp d-jcb d-ais">
        <h1>Equipamiento</h1>
        <article className="df cl jcc aic d-rw d-wp d-jcc">
          <BoxHover src={equipo1} text="Cortadora de bobinas y guillotina" altText="texto para cuadro" />
          <BoxHover src={equipo2} text="Impresoras offset planas de 6 colores más barniz en línea" altText="texto para cuadro"/>
          <BoxHover src={equipo3} text="Troqueladoras con descartonado y separación de poses en tercera estación" altText="texto para cuadro"/>
          <BoxHover src={equipo1} text="Pegadoras automáticas para estuches de fondo armado, pegado lateral y 4 o 6 ángulos." altText="texto para cuadro"/>
          <BoxHover src={equipo1} text="Horno para aplicación de Laca UV" altText="texto para cuadro"/>
        </article>
      </section>

    </main>
  );
}

export default Equipos;
