import React, { useState } from "react"
import "./contact.scss"
import axios from "axios"
import ReCAPTCHA from "react-google-recaptcha"
import { navigate } from "gatsby"

const ContactForm = () => {
  const recaptcha = React.useRef(null)

  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  })

  let captchaKey = null
  let captchaValid = true

  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    })
    if (ok) {
      navigate("/eventos/gracias")
      form.reset()
    }
  }

  const isRobotCheck = () => {
    captchaKey = recaptcha.current.getValue()
    document.getElementById("captchaResponse").value = captchaKey
    console.log(captchaKey)
    captchaValid = true
  }

  const handleSubmit = e => {
    e.preventDefault()

    const form = e.target
    setServerState({
      submitting: true,
    })

    if (captchaKey) {
      axios({
        method: "POST",
        url: "https://getform.io/f/5d1bf561-ef89-489c-98eb-52765277279f",
        data: new FormData(form),
      })
        .then(result => {
          handleServerResponse(true, "Enviado correctamente", form)
        })
        .catch(result => {
          handleServerResponse(false, result.response.data.error, form)
        })
    } else {
      setServerState({
        submitting: false,
      })
      captchaValid = false
      captchaKey = null
    }
  }

  return (
    <div className="contactForm">
      <h1>¿Cómo podemos ayudarte?</h1>
      <small>
        Los campos marcados con <span>*</span> son obligatorios.{" "}
      </small>
      <form
        name="Alpha Contact Form"
        id="contactoAlpha"
        method="POST"
        onSubmit={handleSubmit}
      >
        <div className="field">
          <input
            type="text"
            id="name"
            placeholder="Nombre"
            name="Nombre"
            required
          />
          <label htmlFor="name">
            Nombre <span>*</span>
          </label>
        </div>
        <div className="field">
          <input
            type="email"
            id="email"
            placeholder="Email"
            name="Email"
            required
          />
          <label htmlFor="email">
            Email <span>*</span>
          </label>
        </div>
        <div className="field">
          <input
            type="tel"
            id="phone"
            placeholder="Teléfono"
            name="Teléfono"
            required
          />
          <label htmlFor="phone">Teléfono</label>
        </div>
        <div className="field">
          <input
            type="text"
            id="subject"
            placeholder="Asunto"
            name="Asunto"
            required
          />
          <label htmlFor="subject">Asunto</label>
        </div>
        <div className="field">
          <textarea
            id="message"
            placeholder="Mensaje..."
            name="mensaje"
            required
          />
          <label htmlFor="message">
            Mensaje <span>*</span>
          </label>
        </div>
        <div className="recaptcha">
          <ReCAPTCHA
            ref={recaptcha}
            sitekey="6LfKxvgaAAAAACSe-rBsFQzkx93OEP4I0ovZYNSU"
            onChange={isRobotCheck}
          />
          {!captchaValid &&
            <small className="errorMessage">No se validó el reCaptcha</small>
          }
        </div>
        <input type="hidden" id="captchaResponse" name="recaptchaKey" />
        <button type="submit">
          {serverState.submitting ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </div>
  )
}

export default ContactForm
