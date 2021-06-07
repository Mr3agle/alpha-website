import React from "react"
import Layout from "../../components/layouts/main-layout"
import Seo from "../../components/seo"
import atHotspot from "../../images/ATHotspot-pkg.png"
// import hotspot from "../../images/hotspot-img.jpg"
import {Link} from 'gatsby'
import Lottie from '../../components/Lottie'
import wifi from '../../animations/wifi.json'
import wifiConnect from '../../animations/wifi-connection.json'

function athotspot() {
  return (
    <Layout>
      <Seo title="AT Hotspot" />
      <section className="atProductHero">
        <div className="heroWrapper">
          <div className="atProductInfo blackText">
            <h1>Puntos de conexión corporativos.</h1>
            <p className="blackText">
              Ofrece tickets de navegación a sus clientes e invitados con AT
              HotSpot; crea una zona segura de acceso inalámbrico en tu
              corporación de acuerdo a tus necesidades.
            </p>
          </div>
          <div className="atProductImage">
            <img src={atHotspot} alt="At Hotspot" />
          </div>
        </div>
      </section>
      <section className="simpleSection">
        <div className="sectionWRImg">
          <div className="productInfo">
            <h1>Tickets de navegación controlados</h1>
            <p>
              Ofrece puntos de conección con las reglas que establezcas.
            </p>
          </div>
          <div className="productImage">
            {/* <img src={hotspot}
            alt="Email Marketing" /> */}
            <Lottie src={wifi} loop={true} ></Lottie>
          </div>
        </div>
      </section>


      <section className="simpleSection">
        <div className="sectionWRImg">
          <div className="productInfo2">
            <h1>¿A quién va dirigido?</h1>
            <p>
              AT Hotspot puede ser integrado en cualquier lugar, sin embargo va dirigido especialmente a:
            </p>
            <ul>
              <li>
              <i className="bx-fw bx bx-check-circle" />
                Aeropuertos
              </li>
              <li>
              <i className="bx-fw bx bx-check-circle" />
                Cafeterías
              </li>
              <li>
              <i className="bx-fw bx bx-check-circle" />
                Escuelas y Colegios
              </li>
              <li>
              <i className="bx-fw bx bx-check-circle" />
                Supermercados
              </li>
              <li>
              <i className="bx-fw bx bx-check-circle" />
                Eventos
              </li>
              <li>
              <i className="bx-fw bx bx-check-circle" />
                Centros comerciales
              </li>
              <li>
              <i className="bx-fw bx bx-check-circle" />
                Bibliotecas
              </li>
              <li>
              <i className="bx-fw bx bx-check-circle" />
                Restaurantes
              </li>
            </ul>
          </div>
          <div className="productImage">
            {/* <img src={wifiConnect} alt="Hotspot Connect" /> */}
            <Lottie src={wifiConnect} loop={true} ></Lottie>

          </div>
        </div>
      </section>
      

      <section className="simpleSection mb-3">
        <section className="sectionWrapper">
          <div className="sectionContent">
            <h1>
              Accede ahora a todos los beneficios.
            </h1>
            <p>
              Ponte en contacto con nosotros para más información.
            </p>
            <Link to="/contacto" className="primaryBtn">
              ¡Quiero saber más!
            </Link>
          </div>
        </section>
      </section>
    </Layout>
  )
}

export default athotspot
