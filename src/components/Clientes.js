import '../styles/Clientes.css';
import logo from '../assets/logo.png';

function Clientes() {
  return (
    <main className="df wp rw jcc aic"> 
      <section className="main d-df d-rw d-wp d-jcb d-ais">
        <h1>Nuestros Clientes</h1>
      </section>
      <section className="d-df d-wp d-rw d-jcc d-aic">
        <figure className="df wp rw jcc aic">
          <img src={logo}  alt="logo" />
        </figure>
      </section>
    </main>
  );
}

export default Clientes;