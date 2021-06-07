import React from "react"
import Layout from "../../components/layouts/main-layout"
import Seo from "../../components/seo"
// import atLogic from "../../images/ATLogic-pkg.png"
import atLogic from "../../images/ATLogic-pkg1.png"

import {Link} from 'gatsby'
import Lottie from '../../components/Lottie'
import logic from '../../animations/at-logic.json'
import logicDemo from '../../animations/cloud-hosting.json'

function atlogic() {
  return (
    <Layout>
      <Seo title="AT Logic" />
      <section className="atProductHero">
        <div className="heroWrapper">
          <div className="atProductInfo blackText">
            <h1>Balanceo de carga hecho fácil.</h1>
            <p className="blackText">
              La solución óptima par el balanceo de carga. Una arquitectura de
              cluster que cumple con las funciones deseadas: balanceo de carga,
              alto rendimiento y alta disponibilidad.
            </p>
          </div>
          <div className="atProductImage">
            <img src={atLogic} alt="At Logic" />
          </div>
        </div>
      </section>
      <section className="simpleSection">
        <div className="sectionWRImg">
          <div className="productInfo">
            <h1>¿Arquitectura de Cluster?</h1>
            <p>Para obtener un alto desempeño tecnológico, no siempre es necesario invertir en servidores robustos, sofisticados y caros. Es posible alcanzar resultados eficientes con una solución conocida como Cluster.</p>
            <p>
            Cluster es una tecnología capaz de hacer que un grupo de computadores simples trabajen en conjunto <b>como si fuera una sola máquina.</b>
            </p>
          </div>
          <div className="productImage">
            {/* <img src={hotspot}
            alt="Email Marketing" /> */}
            <Lottie src={logic} loop={true}></Lottie>
          </div>
        </div>
      </section>

      <section className="simpleSection">
        <div className="sectionWRImg">
          <div className="productInfo2">
            <h1>¿Qué hace exactamente?</h1>
            <p>
            El balance de carga funciona gracias a un algoritmo propietario que divide de la manera más equitativa posible el trabajo, para evitar los así denominados cuellos de botella y puede ser usado en:
            </p>
            <ul>
              <li>
                <i className="bx-fw bx bx-check-circle" />
                Sitios web grandes
              </li>
              <li>
                <i className="bx-fw bx bx-check-circle" />
                Sitios de Ecommerce
              </li>
              <li>
                <i className="bx-fw bx bx-check-circle" />
                Aplicaciones Web o Móviles
              </li>
              <li>
                <i className="bx-fw bx bx-check-circle" />
                Servidores para videojuegos
              </li>
              <li>
                <i className="bx-fw bx bx-check-circle" />
                Intranets
              </li>
              <li>
                <i className="bx-fw bx bx-check-circle" />
                Sistemas corporativos
              </li>
            </ul>
          </div>
          <div className="productImage">
            {/* <img src={logicDemo} alt="Hotspot Connect" /> */}
            <Lottie src={logicDemo} loop={true}></Lottie>
          </div>
        </div>
      </section>

      <section className="simpleSection mb-3">
        <section className="sectionWrapper">
          <div className="sectionContent">
            <h1>Conoce cómo lo están usando las grandes corporaciones en Ecuador.</h1>
            <div className="navSpacer"/>
            <Link to="/contacto" className="primaryBtn">
              ¡Ponte en contacto!
            </Link>
          </div>
        </section>
      </section>
    </Layout>
  )
}

export default atlogic
