import React from "react"
import Layout from "../../components/layouts/main-layout"
import Seo from "../../components/seo"
import atMailing from "../../images/ATMailing-pkg.png"

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
      <section className="simpleSection" id="animateUp">
        <div className="sectionWrapper">
          <div className="sectionContent">
            <div className="navSpacer productSpacer" />
            <h1 className="titleUnderLine">
              La herramienta ideal para tu negocio
            </h1>
            <p className="mt-4">
              Envía correos electrónicos sin miedo de caer en listas negras.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default atmailing
