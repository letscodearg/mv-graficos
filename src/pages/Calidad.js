import '../styles/Calidad.css';
import iso from '../assets/calidad/iso.jpg';
import fsc from '../assets/calidad/fsc.png';

function Calidad() {
  return (
    <main className="df wp rw jcc aic calidad"> 
      <section className="main d-df d-rw d-wp d-jcb d-ais">
        <h1>Política de Calidad</h1>
        <article className="article">
          <p>
            Nuestro propósito como empresa dedicada a la comercialización de impresos gráficos es lograr la satisfacción de los 
            requisitos implícitos y explícitos de nuestros clientes, proveedores, colaboradores y demás partes interesadas pertinentes,
            mediante un compromiso personal y profesional de todos los que integramos MV Gráficos S.A.
          </p>
          <p>
            Para ello hemos desarrollado un modelo de trabajo,  de acuerdo a las necesidades y características propias, brindando un servicio 
            de excelencia con un enfoque de sostenibilidad en toda nuestra actividad basándose en el liderazgo, compromiso y provisión de los 
            recursos necesarios para el cumplimiento de los objetivos del sistema de calidad, inocuidad y cadena de custodia:
          </p>
          <ul>
            <li>Fomentando las competencias a través de la capacitación, la concientización, la evaluación y el reconocimiento del equipo de trabajo.</li>
            <li>Sosteniendo un ambiente de trabajo que favorezca el compromiso y la participación de todo el personal.</li>
            <li>Generando relaciones confiables con las partes interesadas a través de mecanismos de comunicación apropiados.</li>
            <li>Previniendo y controlando los riesgos de seguridad y salud ocupacional: evitando el trabajo peligroso, el trabajo infantil, el trabajo forzoso, los castigos, las condiciones de servidumbre, la discriminación, la retención de los salarios y/o documentación del trabajador.</li>
            <li>Previendo la contaminación y dar prioridad a la reducción de los puntos de generación de contaminación para garantizar la inocuidad de los productos, la optimización del uso de materias primas e insumos, los recursos y la maquinaria empleada.</li>
          </ul>
        </article>
      </section>
      <section className="df rw wp jcc aic">
          <p className="alignCenter calidadBox">
            <b>MV Gráficos S.A.</b> <br/>
            ha decidido alinearse y cumplir con los requisitos aplicables de las Normas ISO 9001:2015 
            de Sistemas Gestion de la Calidad, FSC de Cadena de Custodia y FSSC 22000:2018 de Sistemas de gestion de la inocuidad 
            de los alimentos. Con el fin de cumplir con este compromiso y con el proceso de la mejora continua.
          </p>
      </section>
          <figure className="df jcc">
            <img src={iso} alt="iso9001" id="iso"/>
          </figure>
          <figure className="df jcc">
            <img src={fsc} alt="fsc" id="fsc"/>
          </figure>
    </main>
  );
}

export default Calidad;