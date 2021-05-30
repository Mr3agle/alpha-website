import React from 'react'
import Layout from '../../components/layouts/main-layout'
import Seo from '../../components/seo'
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
            Envía correos a grandes bases de datos sin caer en listas negras.Arquitectura de envío de correo masivo con capacidad de más de <b>UN MILLÓN</b> de correos diarios.
            </p>
          </div>
          <div className="atProductImage">
            <img src={atMailing} alt="At Mailing" />
          </div>
        </div>
      </section>
            <div className="simpleSection">
                <div className="sectionWrapper">
                    <h1>Esta es la página del AT Mailing</h1>
                </div>
            </div>
        </Layout>
    )
}

export default atmailing