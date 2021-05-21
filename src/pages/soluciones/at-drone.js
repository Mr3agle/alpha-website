import React from "react"
import Layout from "../../components/layouts/main-layout"
import Seo from "../../components/seo"
import atDroneVideo from "../../videos/alpha_drone_video.mp4"

function atdrone() {
  return (
    <Layout>
      <Seo title="AT Drone" />
      <section className="heroSection heroLight">
        <video
          controlsList="nodownload"
          autoPlay
          preload="true"
          playsInline
          loop
          disablePictureInPicture
          className="headerVideo"
          id="alphaTechVideo"
          muted="true"
        >
          <track none kind="captions" />
          <source src={atDroneVideo} type="video/mp4" />
        </video>
        <div className="overlayContent blackText">
          <h1>Mira el mundo desde otra perspectiva.</h1>
          <p className="blackText">
            AT Drone es útil para Gestión de emergencias, gestión de recursos naturales/minería, análisis de suelos y topografía, agricultura, seguridad/vigilancia, filmación y toma de fotografías.
          </p>
        </div>
      </section>

      <div className="simpleSection">
        <div className="sectionWrapper">
          <h1>Esta es la página del AT Drone</h1>
        </div>
      </div>
    </Layout>
  )
}

export default atdrone
