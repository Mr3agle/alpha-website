import React from "react"
import Layout from "../../components/layouts/main-layout"
import Seo from "../../components/seo"
import sslVideo from "../../videos/alpha_ssl_video3.mp4"

function atfirewall() {
  return (
    <Layout bgDark={true}>
      <Seo title="AT Firewall" />
      <section className="heroSection">
        
        <div className="overlayContent">
          <h1>Evita los ataques externos.</h1>
          <p>
            Brindamos una solución integral de seguridad perimetral. Bajo el
            análisis de nuestros expertos, aplicarán políticas correctas para la
            prevención de ataques a sus sistemas.
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default atfirewall
