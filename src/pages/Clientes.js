import '../styles/Clientes.css';
import celusal from '../assets/clients/celusal.png';
import crysf from '../assets/clients/crysf.png';
import maped from '../assets/clients/maped.png';
import quaker from '../assets/clients/quaker.png';
import burgerking from "../assets/clients/burgerking.png"

function Clientes() {
  return (
    <main className="df wp rw jcc aic clients"> 
      <section className="main d-df d-rw d-wp d-jcb d-ais">
        <h1>Nuestros Clientes</h1>
      </section>
      <section className="df rw wp jca aic clientsBox">
          <img src={celusal}  alt="logo" />
          <img src={crysf}  alt="logo" />
          <img src={maped}  alt="logo" />
          <img src={quaker}  alt="logo" />
          <img src={burgerking}  alt="logo" />
          <img src={crysf}  alt="logo" />
          <img src={maped}  alt="logo" />
          <img src={quaker}  alt="logo" />
          <img src={celusal}  alt="logo" />
          <img src={crysf}  alt="logo" />
          <img src={maped}  alt="logo" />
          <img src={quaker}  alt="logo" />
      </section>
    </main>
  );
}

export default Clientes;