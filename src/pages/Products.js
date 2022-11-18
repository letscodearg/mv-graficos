import '../styles/Products.css';
import { Carousel } from "../components/Carousel";
import celusal from "../assets/clients/celusal.png";
import crysf from "../assets/clients/crysf.png";
import maped from "../assets/clients/maped.png";
import quaker from "../assets/clients/quaker.png";
import burgerking from "../assets/clients/burgerking.png"

function Products() {
  return (
    <main className="df wp rw jcc aic"> 
      <section className="main d-df d-rw d-wp d-jcb d-ais">
        <h1>Líneas de Productos</h1>
        <article className="article">
            <p>Todos los productos se realizan con un alto estándar de calidad y con una alta capacidad de respuesta ante las necesidades de nuestros clientes.</p>
            <p>Realizamos estuches en cartulina Duplex o Triplex en cualquier gramaje y formato, tanto de fondo automático, fondo americano o pegado lateral.</p>
            <p>También realizamos estuches de mayor tamaño realizados en microcorrugado.</p>
        </article>
      </section>
      <Carousel
        slides={[celusal, crysf, maped, quaker, burgerking]}
        velocity={1000}
        interval={5000}
        height={"10rem"}
      />
    </main>
  );
}

export default Products;