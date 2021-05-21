import * as React from "react"
import {Link} from "gatsby"
import Layout from "../components/layouts/main-layout"
import Seo from "../components/seo"

function SolucionesPage() {
  return (
    <Layout>
      <Seo title="Soluciones y Servicios" />
      <div className="navSpacer"/>
      <section id="productos" className="simpleSection">
        <h1 className="sectionTitle mb-3">Conoce nuestras soluciones</h1>
        <h2 className="sectionSubTitle">
          Desarrolladas para el mañana listas para implementar hoy.
        </h2>
        <span className="mb-3"></span>
        <div className="productCards">
          <div className="productCard">
            <img
              src="https://www.alphaside.com/wp-content/uploads/2020/02/atfirewall.png"
              alt="AT-Firewall"
            />
            <h2>AT Firewall</h2>
            <p>
              Evita los ataques externos con una solución integral de
              seguridad perimetral.
            </p>
            <Link to="/soluciones/at-firewall/">Ver más</Link>
          </div>
          <div className="productCard">
            <img
              src="https://www.alphaside.com/wp-content/uploads/2020/02/MailInspector.jpg"
              alt="AT-MailInspector"
            />
            <h2>AT Mail Inspector</h2>
            <p>
              Controla y filtra grandes cantidades de correo basura de forma
              sencilla.
            </p>
            <Link to="/soluciones/at-inspector">Ver más</Link>
          </div>
          <div className="productCard">
            <img
              src="https://www.alphaside.com/wp-content/uploads/2020/02/AT-PROXY.png"
              alt="AT-Proxy"
            />
            <h2>AT Proxy</h2>
            <p>
              Controla la navegación con un filtro de contenido inteligente y
              optimiza tus recursos.
            </p>
            <Link to="/soluciones/at-proxy">Ver más</Link>
          </div>
          <div className="productCard">
            <img
              src="https://www.alphaside.com/wp-content/uploads/2020/02/Atmailing-jpg.jpg"
              alt="AT-Mailing"
            />
            <h2>AT Mailing</h2>
            <p>
              Envía más de <b>1.000.000</b> de correos diarios sin caer en
              listas negras.
            </p>
            <Link to="/soluciones/at-mailing">Ver más</Link>
          </div>
          <div className="productCard">
            <img
              src="https://www.alphaside.com/wp-content/uploads/2020/02/athotspot.png"
              alt="AT-Hot Spot"
            />
            <h2>AT Hot Spot</h2>
            <p>
              Tickets de navegación para clientes e invitados en una zona
              segura de acceso inalámbrico.
            </p>
            <Link to="/soluciones/at-hotspot">Ver más</Link>
          </div>
          <div className="productCard">
            <img
              src="https://www.alphaside.com/wp-content/uploads/2020/02/Atlogic-jpg.jpg"
              alt="AT-Logic"
            />
            <h2>AT Logic</h2>
            <p>
              La solución óptima para el balanceo de carga, alto rendimiento y
              alta disponibilidad.
            </p>
            <Link to="/soluciones/at-logic">Ver más</Link>
          </div>
          <div className="productCard">
            <img
              src="https://www.alphaside.com/wp-content/uploads/2020/02/dron2-1024x630-1.jpg"
              alt="AT-Logic"
            />
            <h2>AT Drone</h2>
            <p>
              Drones de alto rendimiento pensados para todo tipo de proyecto táctico o multimedia.
            </p>
            <Link to="/soluciones/at-drone">Ver más</Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default SolucionesPage