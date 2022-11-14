import "../styles/Contacto.css";
import { Link, redirect } from "react-router-dom";
import Iframe from "react-iframe";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function Contacto() {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    msg: "",
  });
  const [validation, setValidation] = useState(false);

  const changeValues = (event) =>
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));

  const sendForm = async (e) => {
    e.preventDefault();
    try {
      // Recorremos cada una de los values
      for (const key in values) {
        if (Object.hasOwnProperty.call(values, key)) {
          const value = values[key];
          if (value.length > 0) {
            setValidation(true);
          } else {
            setValidation(false);
          }
        }
      }
      // Si paso todas las validaciones
      if (validation === true) {
        let req = await axios({
          method: "post",
          url: "http://localhost/mv-graficos/src/php/contacto.php",
          headers: { "content-type": "application/json" },
          data: values,
        });
        let res = await req.data;
        if (res.response) {
          Swal.fire({
            titleText: "Gracias!",
            text: "Te responderemos a la brevedad",
            icon: "success",
          });
          return redirect("/");
        } else {
          Swal.fire({
            titleText: "Error!",
            text: "No pudimos enviar el correo",
            icon: "error",
          });
        }
      } else {
        Swal.fire({
          titleText: "Error!",
          text: "Por favor completa todos los campos",
          icon: "error",
        });
      }
    } catch (error) {
      console.log(new Error(error));
    }
  };

  return (
    <main className="df cl jcc aic contacto">
      <section className="main d-df d-rw d-wp d-jcb d-ais">
        <h1>Contacto</h1>
        <form className="df cl jcc aic" onSubmit={sendForm}>
          <fieldset className="df jcb">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={changeValues}
            />
          </fieldset>
          <fieldset className="df jcb">
            <label htmlFor="phone">Teléfono</label>
            <input
              type="phone"
              name="phone"
              value={values.phone}
              onChange={changeValues}
            />
          </fieldset>
          <fieldset className="df jcb">
            <label htmlFor="email">E-Mail</label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={changeValues}
            />
          </fieldset>
          <fieldset className="df jcb">
            <label htmlFor="msg">Mensaje</label>
            <textarea name="msg" value={values.msg} onChange={changeValues} />
          </fieldset>
          <button type="submit"><i class="fa-solid fa-paper-plane"></i>  Enviar</button>
        </form>
      </section>
      <section className="d-df d-wp d-rw d-jcc d-aist">
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
        <article className="df wp rw jcc aic box">
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
            <p>
              Lacroze 5833, Billinghurst <br /> Provincia de Buenos Aires,
              Argentina
            </p>
          </section>
          <section className="df jcc aic">
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/company/mv-graficos/about/?viewAsMember=true"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin" />
            </a>
          </section>
        </article>
      </section>
    </main>
  );
}

export default Contacto;
