import '../styles/Contacto.css';
import {Link} from "react-router-dom";
import Iframe from 'react-iframe';
import { useState } from 'react';
import axios from 'axios';

function Contacto() {

  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    msg: ""
  })

  function changeValues (e) {
    setValues({
      name: e.target.name === "name" ? e.target.value : values.name,
      phone: e.target.name === "phone" ? e.target.value : values.phone,
      email: e.target.name === "email" ? e.target.value : values.email,
      msg: e.target.name === "msg" ? e.target.value : values.msg
    }) // target se refiere a la etiqueta donde esta la funcion
  }

  const [validation, setValidation] = useState(false)
  const sendForm = async (e) => {
    try {
      e.preventDefault()
      if (values.name.length < 0 && 
        values.phone.length < 0 && 
        values.email.length < 0 && 
        values.msg.length < 0) {
        setValidation(true)
      }
      if (validation === true) {
        const endpoint = "http://localhost/mv-graficos/src/php/contacto.php";
        const resp = await axios({
          method: "post",
          url: `${endpoint}`,
          headers: { 'content-type': 'application/json' },
          data: values
        })
        if (resp.data.response === true) {
          alert("mensaje enviado")
        }
      }
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <main className="df cl jcc aic"> 
      <section className="main d-df d-rw d-wp d-jcb d-ais">
        <h1>Contacto</h1>
        <form className="df cl jcc aic" onSubmit={sendForm}>
          <fieldset className="df jcb">
            <label for="name">Nombre</label>
            <input type="text" name="name" value={values.name} onChange={changeValues} />
          </fieldset>
          <fieldset className="df jcb">
            <label for="phone">Teléfono</label>
            <input type="phone" name="phone" value={values.phone} onChange={changeValues}/>
          </fieldset>
          <fieldset className="df jcb">
            <label for="email">E-Mail</label>
            <input type="email" name="email" value={values.email} onChange={changeValues}/>
          </fieldset>
          <fieldset className="df jcb">
            <label for="msg">Mensaje</label>
            <textarea name="msg" value={values.msg} onChange={changeValues}/>
          </fieldset>
          <button type="submit">Enviar</button>
        </form>
      </section>
      <section className="df wp rw jcc aic d-aist boxes">
        <article className="df wp rw jcc aic box">
          <Iframe 
            url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.90824512346!2d-58.569135349560135!3d-34.581188163716746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb9cff3da93bd%3A0xc77d984147ab8032!2sLacroze%205833%2C%20Billinghurst%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1667411822434!5m2!1ses!2sar"
            width="640px"
            height="320px"
            id=""
            className=""
            display="block"
            position="relative"
          />
        </article>
        <article className="df cl jcc aic box">
            <section className="df rw wp jcc aic">
                <i className="fa-solid fa-envelope"></i>
                <Link className="link">info@mv-graficos.com.ar</Link>
            </section>
            <section className="df rw wp jcc aic">
                <i className="fa-solid fa-phone"></i>
                <p className="link">011-4844-6713 / 0330</p>
            </section>
            <section className="df cl wp jcc aic">
                <i className="fa-solid fa-location-dot"></i>
                <p>Lacroze 5833, Billinghurst <br/> Provincia de Buenos Aires, Argentina</p>
            </section>
            <section className="df jcc aic">
              <a rel="noreferrer" href="https://www.linkedin.com/company/mv-graficos/about/?viewAsMember=true" target="_blank"><i class="fa-brands fa-linkedin"/></a>
            </section>
        </article>
      </section>
    </main>
  );
}

export default Contacto;