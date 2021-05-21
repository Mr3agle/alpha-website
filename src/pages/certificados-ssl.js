import * as React from "react"
import Layout from "../components/layouts/main-layout"
import Seo from "../components/seo"

import sslVideo from "../videos/alpha_ssl_video3.mp4"
// import Globalsign from "../images/Globalsign.svg"
// import shieldIcon from "../images/web-browser.svg"
// import spamIcon from "../images/spam.svg"
// import lockIcon from "../images/internet.svg"
import gsSSL from "../images/globalsign-icons/ssl-certificate.svg"
import gsSecure from "../images/globalsign-icons/secure.svg"
import gsCheck from "../images/globalsign-icons/check.svg"
import gsCode from "../images/globalsign-icons/code.svg"
import gsContract from "../images/globalsign-icons/contract.svg"
import gsUser from "../images/globalsign-icons/user-images.svg"

function CertificadosSSLPage() {
  return (
    <Layout bgDark={true}>
      <Seo title="GlobalSign Ecuador" />
      <section className="heroSection">
        <video
          controlsList="nodownload"
          autoPlay
          preload="true"
          playsInline
          loop
          disablePictureInPicture
          muted="true"
          className="headerVideo"
          style={{
            opacity: "0.2"
          }}
        >
          <track none kind="captions"/>
          <source src={sslVideo} type="video/mp4" />
        </video>
        <div className="overlayContent">
          <h1>Tu seguridad es nuestro objetivo.</h1>
          <p>
          Las herramientas, los servicios y los productos SSL que necesitas para proteger los servidores públicos e internos y combatir amenazas.
          </p>
        </div>
      </section>
      <section className="simpleSection" id="animateUp">
        <div className="sectionWrapper">
          <div className="sectionContent">
            <div className="navSpacer"/>
            <h1>
              Soluciones para cada Endpoint 
            </h1>
            {/* <div className="sectionImg">
              <img src={Globalsign} alt="Globalsign Logo" />
            </div> */}
            <p>
            Necesitas el mayor nivel de cifrado y recursos de valor agregado para asegurar tu sitio web, aplicación o tienda online.
            Estarás protegidos y al día con las necesidades actuales de confianza. Clientes y visitantes sabrán que la navegación en tu sitio es segura y que los detalles de pago e informaciones personales están protegidos y fuertemente encriptados.
            </p>
          </div>
          <div className="sectionIcons">
            <div className="sIcon">
              <img src={gsSSL} alt="Certificado SSL" />
              <h3>
                SSL/TLS
              </h3>
            </div>
            <div className="sIcon">
              <img src={gsContract} alt="Certificado SSL" />
              <h3>
                Firma Digital
              </h3>
            </div>
            <div className="sIcon">
              <img src={gsSecure} alt="Certificado SSL" />
              <h3>
                Email Seguro
              </h3>
            </div>
            <div className="sIcon">
              <img src={gsCode} alt="Certificado SSL" />
              <h3>
                Code Signing
              </h3>
            </div>
            <div className="sIcon">
              <img src={gsUser} alt="Certificado SSL" />
              <h3>
                Autenticación
              </h3>
            </div>
            <div className="sIcon">
              <img src={gsCheck} alt="Certificado SSL" />
              <h3>
                Seguridad Móvil
              </h3>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default CertificadosSSLPage