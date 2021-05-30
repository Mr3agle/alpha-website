import React from 'react'
import Layout from '../../components/layouts/main-layout'
import Seo from '../../components/seo'

import atHotspot from "../../images/ATHotspot-pkg.png"

function athotspot() {
    return (
        <Layout>
            <Seo title="AT Hotspot" />
            <section className="atProductHero">
        <div className="heroWrapper">
          <div className="atProductInfo blackText">
            <h1>Puntos de conexión corporativos.</h1>
            <p className="blackText">
            Ofrece tickets de navegación a sus clientes e invitados. con AT HotSpot creamos una zona segura de acceso inalámbrico en tu corporación de acuerdo a tus necesidades.
            </p>
          </div>
          <div className="atProductImage">
            <img src={atHotspot} alt="At Hotspot" />
          </div>
        </div>
      </section>
            <div className="simpleSection">
                <div className="sectionWrapper">
                    <h1>Esta es la página del AT Hotspot</h1>
                </div>
            </div>
        </Layout>
    )
}

export default athotspot