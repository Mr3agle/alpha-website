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
    Contáctate con nosotros
    </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />
        </div>
        <div>
          <label htmlFor="phone">Teléfono</label>
          <input type="text" id="phone" required />
        </div>
        <div>
          <label htmlFor="subject">Asunto</label>
          <input type="text" id="subject" required />
        </div>
        <div>
          <label htmlFor="message">Mensaje</label>
          <textarea id="message" required />
        </div>
        <button type="submit">{status}</button>
      </form>
    </div>
  );
};

export default ContactForm;