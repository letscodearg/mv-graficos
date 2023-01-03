import "../styles/Contacto.css";
import { useNavigate } from "react-router-dom";
import Iframe from "react-iframe";
import axios from "axios";
import { Formik, Form } from "formik";
//import Swal from "sweetalert2";

function Contacto() {
  let fields = {};
  fields.email = "";
  fields.name = "";
  fields.phone = "";
  fields.msg = "";
  const validation = (values) => {
    let errors = {};
    let emailRegx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    let numberRegx = /^([^0-9]*)$/;
    if (!values.email) {
      errors.email = "El email es obligario";
    } else if (!emailRegx.test(values.email)) {
      errors.email = "El email no tiene formato valido";
    }

    if (!values.name) {
      errors.name = "El nombre es obligatorio";
    } else if (!numberRegx.test(values.name)) {
      errors.name = "El nombre no puede contener numeros";
    } else if (values.name.length < 2) {
      errors.name = "El nombre debe tener al menos 2 caracteres";
    }

    if (!values.phone) {
      errors.phone = "El telefono es obligatorio";
    } else if (numberRegx.test(values.phone)) {
      errors.phone = "El telefono no puede contener letras";
    } else if (values.phone.length < 8) {
      errors.phone = "El telefono debe tener al menos 8 caracteres";
    }

    if (!values.msg) {
      errors.msg = "Debes dejar un mensaje";
    } else if (values.msg.length < 8) {
      errors.msg = "El mensaje debe tener al menos 8 caracteres";
    }
    return errors;
  };
  const navigate = useNavigate();
  const submit = async (values, { setSubmitting, resetForm }) => {
    try {
      let endpoint = `${process.env.PUBLIC_URL}/contacto.php`;
      await axios.post(endpoint, values);
      navigate("/");
      setSubmitting(false);
      resetForm();
    } catch (error) {
      console.error(error);
      setSubmitting(false);
    }
  };

  return (
    <main className="df cl jcc aic contacto">
      <section className="main d-df d-rw d-wp d-jcb d-ais">
        <h1>Contacto</h1>
        <Formik initialValues={fields} validate={validation} onSubmit={submit}>
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form className="df cl jcc aic" onSubmit={handleSubmit}>
              <fieldset className="df jcb wp">
                <label htmlFor="name">Nombre</label>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                {errors.name && touched.name && (
                  <span className="error">{errors.name}</span>
                )}
              </fieldset>
              <fieldset className="df jcb wp">
                <label htmlFor="phone">Teléfono</label>
                <input
                  type="phone"
                  name="phone"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                />
                {errors.phone && touched.phone && (
                  <span className="error">{errors.phone}</span>
                )}
              </fieldset>
              <fieldset className="df jcb wp">
                <label htmlFor="email">Mail</label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email && (
                  <span className="error">{errors.email}</span>
                )}
              </fieldset>
              <fieldset className="df jcb wp">
                <label htmlFor="msg">Mensaje</label>
                <textarea
                  name="msg"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.msg}
                />
                {errors.msg && touched.msg && (
                  <span className="error">{errors.msg}</span>
                )}
              </fieldset>
              <button type="submit" disabled={isSubmitting}>
                <i className="fa-solid fa-paper-plane"></i> Enviar
              </button>
            </form>
          )}
        </Formik>
      </section>
      <section className="df wp rw jcc aic d-aist">
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
            <a href="mailto:info@mv-graficos.com.ar">info@mv-graficos.com.ar</a>
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
