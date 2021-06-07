import React from "react"
import Layout from "../../components/layouts/main-layout"
import Seo from "../../components/seo"
import atMailing from "../../images/ATMailing-pkg.png"

// import emailing from "../../images/emailing-design.jpg"
// import servers from "../../images/cloud-server.jpg"
import { Link } from "gatsby"
import Lottie from '../../components/Lottie'
import emailingLaptop from '../../animations/emailing-laptop.json'

function atmailing() {
  return (
    <Layout>
      <Seo title="AT Mailing" />
      <section className="atProductHero">
        <div className="heroWrapper">
          <div className="atProductInfo blackText">
            <h1>Correos masivos sin riesgos.</h1>
            <p className="blackText">
              Envía correos a grandes bases de datos sin caer en listas negras.{" "}
              <br />
              Arquitectura de envío de correo masivo con capacidad de más de{" "}
              <b>UN MILLÓN</b> de correos diarios.
            </p>
          </div>
          <div className="atProductImage">
            <img src={atMailing} alt="At Mailing" />
          </div>
        </div>
      </section>

      <section className="simpleSection">
        <div className="sectionWRImg">
          <div className="productInfo">
            <h1>¿Qué lo hace tan especial?</h1>
            <p>
              La manera más fácil de enviar tus correos electrónicos,{" "}
              <b>sin temor </b>
              a caer en listas negras.
              <br />
              AT mailing está desarrollado de tal manera que te permite enviar
              más de 1.000000 correos <b>¡Diariamente!</b>
            </p>
          </div>
          <div className="productImage">
            {/* <img src={emailing} alt="Email Marketing" /> */}
            <Lottie src={emailingLaptop} loop={true} ></Lottie>
          </div>
        </div>
      </section>

      <section className="simpleSection mb-3">
        <section className="sectionWrapper">
          <div className="sectionContent">
            <h1>
              Con la seguridad y confianza que solo Alpha Technologies puede
              ofrecer.
            </h1>
            <p>
              Muchas compañías a nivel nacional e internacional ya lo están
              usando. 
              <br />
              Ponte en contacto con nosotros para más información.
            </p>
            <Link to="/contacto" className="primaryBtn">
              ¡Quiero saber más!
            </Link>
          </div>
        </section>
      </section>
    </Layout>
  )
}

export default atmailing
