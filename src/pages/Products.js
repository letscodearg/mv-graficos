import { Carousel } from "../components/Carousel";
import trespatitos from "../assets/products/trespatitos.png";
import billiken from "../assets/products/billiken.png";
import elnoble from "../assets/products/elnoble.png";
import celusal from "../assets/products/celusal.png";
import paty from "../assets/products/paty.png";
import quaker from "../assets/products/quaker.png";
import kentucky from "../assets/products/kentucky.png";
import fritzzio from "../assets/products/fritzzio.png";
import pizzazen from "../assets/products/pizzazen.png";
import santamaria from "../assets/products/santamaria.png";
import madaus from "../assets/products/madaus.png";
import mccain from "../assets/products/mccain.png";
import nucha from "../assets/products/nucha.png";


function Products() {
  return (
    <main className="df wp rw jcc aic products"> 
      <section className="main d-df d-rw d-wp d-jcb d-ais">
        <h1>Líneas de Productos</h1>
        <article className="article">
            <p>Todos los productos se realizan con un alto estándar de calidad y con una alta capacidad de respuesta ante las necesidades de nuestros clientes.</p>
            <p>Realizamos estuches en cartulina Duplex o Triplex en cualquier gramaje y formato, tanto de fondo automático, fondo americano o pegado lateral.</p>
            <p>También realizamos estuches de mayor tamaño realizados en microcorrugado.</p>
        </article>
      </section>
      <Carousel
        slides={[trespatitos, 
          billiken, 
          elnoble, 
          celusal, 
          paty, 
          quaker, 
          kentucky, 
          fritzzio, 
          pizzazen,
          santamaria,
          madaus,
          mccain,
          nucha
        ]}
        velocity={1000}
        interval={5000}
        height={"8rem"}
        mbWidth={"650%"}
        dkWidth={"200%"}
      />
    </main>
  );
}

export default Products;