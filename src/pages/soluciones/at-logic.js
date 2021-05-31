import React from 'react'
import Layout from '../../components/layouts/main-layout'
import Seo from '../../components/seo'
// import atLogic from "../../images/ATLogic-pkg.png"
import atLogic from "../../images/ATLogic-pkg1.png"

function atlogic() {
    return (
        <Layout>
            <Seo title="AT Logic" />
            <section className="atProductHero">
        <div className="heroWrapper">
          <div className="atProductInfo blackText">
            <h1>Balanceo de carga hecho fácil.</h1>
            <p className="blackText">
            La solución óptima par el balanceo de carga. Una arquitectura de cluster que cumple con las funciones deseadas: balanceo de carga, alto rendimiento y alta disponibilidad.
            </p>
          </div>
          <div className="atProductImage">
            <img src={atLogic} alt="At Logic" />
          </div>
        </div>
      </section>
            <div className="simpleSection">
                <div className="sectionWrapper">
                    <h1>Esta es la página del AT Logic</h1>
                </div>
            </div>
        </Layout>
    )
}

export default atlogic