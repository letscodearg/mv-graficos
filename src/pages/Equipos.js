//import "../styles/Equipos.css";
import equipo1 from "../assets/equipos/equipo1.jpeg";
import BoxHover from "../components/BoxHover";

function Equipos() {
  return (
    <main className="df wp rw jcc aic d-cl equipos">
      <h1>Equipamiento</h1>
      <section className="df cl jcc aic">
        <BoxHover src={equipo1} text="cortadora de bobinas y gillotina" />
        <BoxHover src={equipo1} text="cortadora de bobinas y gillotina" />
      </section>
    </main>
  );
}

export default Equipos;
