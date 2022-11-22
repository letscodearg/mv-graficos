import { useState } from "react";
import "../styles/Equipos.css";
import cortadora from "../assets/equipos/cortadora.jpeg";
import impresion from "../assets/equipos/impresion.jpeg";
import pegadora from "../assets/equipos/pegadora.jpeg";
import troquelado from "../assets/equipos/troquelado.jpeg";
import BoxHover from "../components/BoxHover";

function Equipos() {
  const [active, setActive] = useState("equipos");

  return (
    <main className="main df wp rw jcc aic d-cl equipos">
      <section className="main d-df d-rw d-wp d-jcb d-ais">
        <h1>Equipamiento</h1>
        <section className="df cl jcc aic d-rw d-wp d-jcc" >
        <article className="df cl jcc aic d-rw d-wp d-jcc" id="equipos-galery">
          <BoxHover
            src={cortadora}
            text="Cortadora de bobinas y guillotina"
            altText="Cortadora de bobinas y guillotina"
            onClick={() => setActive("cortadora")}
            show={active === "cortadora" ? true : false}
          />
          <BoxHover
            src={impresion}
            text="Impresoras offset planas de 6 colores más barniz en línea"
            altText="Impresoras offset planas de 6 colores más barniz en línea"
          />
          <BoxHover
            src={troquelado}
            text="Troqueladoras con descartonado y separación de poses en tercera estación"
            altText="texto para cuadro"
          />
          <BoxHover
            src={pegadora}
            text="Pegadoras automáticas para estuches de fondo armado, pegado lateral y 4 o 6 ángulos."
            altText="Pegadoras automáticas para estuches de fondo armado, pegado lateral y 4 o 6 ángulos."
          />
          <BoxHover
            src={pegadora}
            text="Horno para aplicación de Laca UV"
            altText="texto para cuadro"
          />
        </article>
        </section>

      </section>
    </main>
  );
}

export default Equipos;
