import React from "react"
import Layout from "../../components/layouts/main-layout"
import Seo from "../../components/seo"
// import atFirewall from "../../images/products/ATFirewall.svg"
import atFirewall from "../../images/ATFirewall-pkg.png"

function atfirewall() {
  return (
    <Layout>
      <Seo title="AT Firewall" />
      <section className="atProductHero">
        <div className="heroWrapper">
          <div className="atProductInfo blackText">
            <h1>Evita los ataques externos.</h1>
            <p className="blackText">
              Brindamos una solución integral de seguridad perimetral. Bajo el
              análisis de nuestros expertos, aplicarán políticas correctas para la
              prevención de ataques a sus sistemas.
            </p>
          </div>
          <div className="atProductImage">
            <img src={atFirewall} alt="At Firewall" />
          </div>
        </div>
      </section>

      <section className="simpleSection" id="animateUp">
        <div className="sectionWrapper">
          <div className="sectionContent">
            <div className="navSpacer"/>
            <h1 className="titleUnderLine">
              Soluciones para cada Endpoint 
            </h1>
            {/* <div className="sectionImg">
              <img src={Globalsign} alt="Globalsign Logo" />
            </div> */}
            <p className="mt-4">
            El mayor nivel de cifrado y recursos de valor agregado para asegurar tu sitio web, aplicación o tienda online.
            Estarás protegidos y al día con las necesidades actuales de confianza. Clientes y visitantes sabrán que la navegación en tu sitio es segura y que los detalles de pago e informaciones personales están protegidos y fuertemente encriptados.
            </p>
          </div>
          
        </div>
      </section>
    </Layout>
  )
}

export default atfirewall
