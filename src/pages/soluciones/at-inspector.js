import React from 'react'
import Layout from '../../components/layouts/main-layout'
import Seo from '../../components/seo'
import atInspector from "../../images/ATInspector-pkg.png"


function atinspector() {
    return (
        <Layout>
            <Seo title="AT Mail Inspector" />
            <section className="atProductHero">
        <div className="heroWrapper">
          <div className="atProductInfo blackText">
            <h1>No más correo basura.</h1>
            <p className="blackText">
            Controla y filtra grandes cantidades de correo basura. Usa técnicas automáticas avanzadas en la filtración de correo y su administración es sencilla. Es compatible con cualquier servidor de correo Exchange, Lotus, Zimbra, etc..
            </p>
          </div>
          <div className="atProductImage">
            <img src={atInspector} alt="At Firewall" />
          </div>
        </div>
      </section>
            <div className="simpleSection">
                <div className="sectionWrapper">
                    <h1>Esta es la página del AT MailInspector</h1>
                </div>
            </div>
        </Layout>
    )
}

export default atinspector