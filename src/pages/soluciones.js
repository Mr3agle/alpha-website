import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layouts/main-layout"
import Seo from "../components/seo"

import { products } from "../data/productsData"

function SolucionesPage() {
  return (
    <Layout>
      <Seo title="Soluciones y Servicios" />
      <div className="navSpacer" />
      <section id="productos" className="simpleSection mb-4">
        <div className="sectionWrapper">
          <h2 className="sectionSubTitle">
            Desarrolladas para el mañana listas para implementar hoy
          </h2>
          <h1 className="sectionTitle mb-3 titleUnderLine">
            Conoce nuestras soluciones
          </h1>
        </div>

        {products.map((item, index) => {
          return (
            <div className="cardH" key={index}>
              <div className="cardHImg">
                <img className="floating" src={item.img} alt={item.name} />
              </div>
              <div className="cardHDescription">
                <h1>{item.title}</h1>
                <p dangerouslySetInnerHTML={{__html: item.description}}>
                </p>
                <Link to={item.path}>{item.cta}</Link>
              </div>
            </div>
          )
        })}
      </section>
    </Layout>
  )
}

export default SolucionesPage
