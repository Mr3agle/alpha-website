import React, { useState } from "react";
import './contact.scss'

const ContactForm = () => {
  const [status, setStatus] = useState("Enviar");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Enviando...");
    const { name, email, phone, subject, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      subject: subject.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:8000/contacto", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <div class="contactForm">
    <h1>
     ¿Cómo podemos ayudarte?
    </h1>
    <small>Los campos marcados<span>*</span> son obligatorios. </small>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <input type="text" id="name" placeholder="Nombre" required />
          <label htmlFor="name">Nombre <span>*</span></label>
        </div>
        <div className="field">
          <input type="email" id="email" placeholder="Email" required />
          <label htmlFor="email">Email <span>*</span></label>
        </div>
        <div className="field">
          <input type="tel" id="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Teléfono" required />
          <label htmlFor="phone">Teléfono</label>
        </div>
        <div className="field">
          <input type="text" id="subject" placeholder="Asunto" required />
          <label htmlFor="subject">Asunto</label>
        </div>
        <div className="field">
          <textarea id="message" placeholder="Mensaje..." required />
          <label htmlFor="message">Mensaje <span>*</span></label>
        </div>

        
        <button type="submit">{status}</button>
      </form>
    </div>
  );
};

export default ContactForm;