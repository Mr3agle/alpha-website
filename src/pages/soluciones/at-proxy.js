import React from 'react'
import Layout from '../../components/layouts/main-layout'
import Seo from '../../components/seo'
import atProxy from "../../images/ATProxy-pkg.png"


function atproxy() {
    return (
        <Layout>
            <Seo title="AT Proxy" />
            <section className="atProductHero">
        <div className="heroWrapper">
          <div className="atProductInfo blackText">
            <h1>Toma el control total de la navegación.</h1>
            <p className="blackText">
            AT Proxy es una solución corporativa para administrar los recursos de navegación junto con un filtro de contenido inteligente, se integra a las necesidades de toda corporación.
            </p>
          </div>
          <div className="atProductImage">
            <img src={atProxy} alt="At Firewall" />
          </div>
        </div>
      </section>
            <div className="simpleSection">
                <div className="sectionWrapper">
                    <h1>Esta es la página del AT Proxy</h1>
                </div>
            </div>
        </Layout>
    )
}

export default atproxy