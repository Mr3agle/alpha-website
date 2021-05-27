import * as React from "react"
import Layout from "../components/layouts/main-layout"
import Seo from "../components/seo"
import ContactForm from "../components/ContactForm"

function ContactoPage() {
  return (
    <Layout>
      <Seo title="Contacto" />
      <div className="navSpacer" />
      <div className="simpleSection">
        <div className="contactWrapper">
          <ContactForm />
          <div className="contactData">
            <div class="contactMap">
              <iframe
                title="Alpha Technologies Map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7979.615389616588!2d-78.479404!3d-0.132232!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d5855ec83d3ce1%3A0x9b470ac3cb9f0ca2!2sAraujo%20%26%20Jose%20Maria%20Batodano%2C%20Quito%20170138!5e0!3m2!1ses-419!2sec!4v1622132408089!5m2!1ses-419!2sec"
                width="500"
                height="450"
                style={{ border: "0", borderRadius: "12px" }}
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
            <div className="contactInfo">
            <h1>Contáctanos</h1>
                <p>
                  ALPHATECHNOLOGIES es una empresa de consultoría e implementación
                  de soluciones tecnológicas orientadas a la Cyberseguridad, con
                  casi 20 años de experiencia. Participamos del desarrollo
                  tecnológico de organizaciones privadas y estatales a través de
                  nuestro compromiso con la calidad de servicio.
                </p>

              <div className="iconsGridContact">
                <div className="iconRowContact">
                  <div>
                    <i class="bx-fw bx bxs-map-pin" />
                  </div>
                  <div>
                    Gabriel Araujo E6-136 y José María Batodano. Quito – Ecuador
                  </div>
                </div>
                <div className="iconRowContact">
                  <div>
                    <i class="bx-fw bx bxs-calendar-check" />
                  </div>
                  <div>
                  Lun – Vie : 9 am to 6 pm
                  Sab – Dom : Cerrado
                  </div>
                </div>
                <div className="iconRowContact">
                  <div>
                    <i class="bx-fw bx bx-envelope" />
                  </div>
                  <div>
                  contacto@alphaside.com
                  </div>
                </div>
                <div className="iconRowContact">
                  <div>
                    <i class="bx-fw bx bxs-phone" />
                  </div>
                  <div>
                  +593 2 281 4291
                  +593 2 328 1146
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="navSpacer" />
    </Layout>
  )
}

export default ContactoPage
