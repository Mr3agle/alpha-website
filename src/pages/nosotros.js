import * as React from "react"
import Layout from "../components/layouts/main-layout"
import Seo from "../components/seo"

import aboutVideo from "../videos/alpha_tech_video.mp4"

function NosotrosPage() {
  return (
    <Layout>
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
        >
          <track none kind="captions"/>
          <source src={aboutVideo} type="video/mp4" />
        </video>
        <div className="overlayContent">
          <h3>Alpha Technologies</h3>
          <h1>La gente confía en nosotros.</h1>
          <p>
          Somos una empresa ecuatoriana de seguridad informática establecida en Quito en el año 2001, especializada en la seguridad de datos, seguridad web y medios digitales. Nuestros productos y servicios son parte del día a día del trabajo de importantes entidades bancarias.
          </p>
        </div>
      </section>

      <section className="simpleSection">
        <div className="simpleWrapper">
          <h1>Esta es la página nosotros</h1>
        </div>
      </section>
    </Layout>
  )
}

export default NosotrosPage
