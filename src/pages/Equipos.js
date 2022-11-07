import '../styles/Equipos.css';
import equipo1 from '../assets/equipos/equipo1.jpeg';

function Equipos() {
  return (
    <main className="df wp rw jcc aic d-cl equipos"> 
      <section className="main d-df d-rw d-wp d-jcb d-ais">
        <h1>Equipamiento</h1>
        <article className="df cl jcc aic">
          <section className="df cl jcc aic imgBox">
            <img src={equipo1}  alt="logo" />
            <p>Cortadora de bobinas y guillotina</p>
          </section>
          <img src={equipo1}  alt="logo" />
          <img src={equipo1}  alt="logo" />
          <img src={equipo1}  alt="logo" />
          <img src={equipo1}  alt="logo" />
        </article>
      </section>
      <section className="d-df d-wp d-rw d-jcc d-aic">
        <article className="df wp rw jcc aic box">
          
        </article>
        <article className="df wp rw jcc aic box">
          
        </article>
      </section>
    </main>
  );
}

export default Equipos;