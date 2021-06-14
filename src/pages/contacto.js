import * as React from "react"
import Layout from "../components/layouts/main-layout"
import Seo from "../components/seo"
import ContactForm from "../components/ContactForm"
// import {clients} from "../data/clientsData"
import contactBg from "../images/contactbg.png"
import WhatsAppWidget from "react-whatsapp-widget"
// import 'react-whatsapp-widget/dist/index.css'

function ContactoPage() {
  return (
    <Layout>
      <Seo title="Contacto" />
      <div className="navSpacer" />
      <div className="simpleSection">
        <div
          className="contactWrapper"
          style={{
            backgroundImage: `url(${contactBg})`,
          }}
        >
          <div className="contactData">
            <div className="contactMap">
              <iframe
                className="mapDesktop"
                title="Alpha Technologies Map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7979.615389616588!2d-78.479404!3d-0.132232!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d5855ec83d3ce1%3A0x9b470ac3cb9f0ca2!2sAraujo%20%26%20Jose%20Maria%20Batodano%2C%20Quito%20170138!5e0!3m2!1ses-419!2sec!4v1622132408089!5m2!1ses-419!2sec"
                width="500"
                height="350"
                style={{ border: "0", borderRadius: "12px" }}
                loading="lazy"
              />
            </div>
            <div className="contactInfo">
              <h1>Contáctanos</h1>
              <p>
                ALPHATECHNOLOGIES es una empresa de consultoría e implementación
                de soluciones tecnológicas orientadas a la Cyberseguridad.
                Participamos del desarrollo tecnológico de organizaciones
                privadas y estatales a través de nuestro compromiso con la
                calidad de servicio.
              </p>

              <div className="iconsGridContact">
                <div className="iconRowContact">
                  <div>
                    <i className=" bx bx-envelope" />
                  </div>
                  <div>
                    <a href="mailto:contacto@alphaside.com">
                      contacto@alphaside.com
                    </a>
                  </div>
                </div>
                <div className="iconRowContact">
                  <div>
                    <i className=" bx bxs-phone" />
                  </div>
                  <div>
                    <a href="tel:+593 2 281 4291">(+593) 2 281 4291</a>
                    <br />
                    <a href="tel:+593 2 328 1146">(+593) 2 328 1146</a>
                  </div>
                </div>
                <div className="iconRowContact">
                  <div>
                    <i className=" bx bxs-map-pin" />
                  </div>
                  <div>
                    Gabriel Araujo E6-136 <br /> y José María Batodano.
                    <br />
                    <small>Quito – Ecuador</small>
                  </div>
                </div>
                <div className="iconRowContact">
                  <div>
                    <i className=" bx bxs-calendar-check" />
                  </div>
                  <div>
                    Lun – Vie : 9h00 - 18h00
                    <br />
                  </div>
                </div>
              </div>
            </div>
            <iframe
              className="mapMobile"
              title="Alpha Technologies Map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7979.615389616588!2d-78.479404!3d-0.132232!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d5855ec83d3ce1%3A0x9b470ac3cb9f0ca2!2sAraujo%20%26%20Jose%20Maria%20Batodano%2C%20Quito%20170138!5e0!3m2!1ses-419!2sec!4v1622132408089!5m2!1ses-419!2sec"
              width="100%"
              height="350"
              style={{ border: "0", borderRadius: "12px", margin: "2rem auto" }}
              loading="lazy"
            />
          </div>
          <ContactForm />
        </div>

        {/* <div className="clientsShow">
          {clients.map((item, index) => {
            return (
              <div className="clientLogo" key={index}>
                <img src={item.path} alt={item.name} />
              </div>
            )
          })}
        </div> */}
      </div>
      <WhatsAppWidget
        style={{
          positio: "fixed !important",
        }}
        phoneNumber="+593980950129"
        textReplyTime="Responderemos cuanto antes"
        message="¡Hola! 👋🏼 Cuéntamos cómo podemos ayudarte..."
        companyName="Alpha Technologies"
        sendButton="Enviar"
      />
      <div className="navSpacer" />
    </Layout>
  )
}

export default ContactoPage
