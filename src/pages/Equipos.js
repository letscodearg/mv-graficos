import "../styles/Equipos.css";
import equipo1 from "../assets/equipos/equipo1.jpeg";
import BoxHover from "../components/BoxHover";

function Equipos() {
  return (
    <main className="main df wp rw jcc aic d-cl equipos">
      <section className="main d-df d-rw d-wp d-jcb d-ais">
        <h1>Equipamiento</h1>
        <section className="df cl jcc aic d-rw d-wp d-jca">
          <BoxHover src={equipo1} text="cortadora de bobinas y gillotina" />
          <BoxHover src={equipo1} text="cortadora de bobinas y gillotina" />
        </section>
      </section>

    </main>
  );
}

export default Equipos;
