import * as React from "react"
import Layout from "../components/layouts/main-layout"
import Seo from "../components/seo"

import aboutVideo from "../videos/alpha_tech_video.mp4"

import produbanco from "../images/clients/Produbanco_Logo.svg"
import cdComercio from "../images/clients/CamaraDeComercio_Logo.svg"
import casabaca from "../images/clients/Casabaca_Logo.svg"
import cnt from "../images/clients/Cnt_Logo.svg"
import cFavorita from "../images/clients/CorporacionFavorita_Logo.svg"
import oSeguros from "../images/clients/OrienteSeguros_Logo.svg"
import salud from "../images/clients/SaludSa_Logo.svg"
import sercop from "../images/clients/Sercop_Logo.svg"
import tventas from "../images/clients/Tventas_Logo.svg"
import gsap from "gsap"

function NosotrosPage() {

  const clients = [
    {
      name: 'Produbanco',
      path: produbanco
    },
    {
      name: 'Cámara de Comercio de Quito',
      path: cdComercio
    },
    {
      name: 'Casabaca',
      path: casabaca
    },
    {
      name: 'CNT',
      path: cnt
    },
    {
      name: 'Corporación Favorita',
      path: cFavorita
    },
    {
      name: 'Oriente Seguros',
      path: oSeguros
    },
    {
      name: 'Salud S.A',
      path: salud
    },
    {
      name: 'SERCOP',
      path: sercop
    },
    {
      name: 'TVENTAS',
      path: tventas
    }
  ]
  React.useEffect(()=>{
    gsap.from('#alphaTechVideo',{
      opacity: 0,
      duration: 3
    })
  })

  return (
    <Layout bgDark={true}>
      <Seo title="Nosotros" />

      <section className="heroSection">
        <video
          controlsList="nodownload"
          autoPlay
          preload="true"
          playsInline
          loop
          disablePictureInPicture
          className="headerVideo"
          id="alphaTechVideo"
        >
          <track none kind="captions"/>
          <source src={aboutVideo} type="video/mp4" />
        </video>
        <div className="overlayContent">
          <h3>Alpha Technologies</h3>
          <h1>Tu seguridad es nuestro objetivo.</h1>
          <p>
          Somos una empresa ecuatoriana de seguridad informática establecida en Quito en el año 2001, especializada en la seguridad de datos, seguridad web y medios digitales. Nuestros productos y servicios son parte del día a día de grandes empresas en todo el mundo.
          </p>
        </div>
      </section>

      <section className="simpleSection">
        <h1 className="sectionTitle">Los más grandes confían en nosotros</h1>

        <div className="clientsShow">
          {
            clients.map((item,index) => {
              return(
                <div className="clientLogo" key={index}>
                  <img src={item.path} alt={item.name} />
                </div>
              )
            })
            
          }
        </div>
      </section>
    </Layout>
  )
}

export default NosotrosPage
