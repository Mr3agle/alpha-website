import * as React from "react"
import Layout from "../components/layouts/main-layout"
import Seo from "../components/seo"
import atDroneVideo from "../videos/alpha_drone_video.mp4"
import atDroneImg from "../images/ATdron2.png"
import atDroneBuild from "../images/at-drone.jpg"
import "boxicons/css/boxicons.min.css"
import gsap from "gsap"

const AtdronePage = () => {

  React.useEffect(() => {
    gsap.from(".headerVideo", {
      opacity: 0,
      duration: 3,
    })
  })

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
          muted={true}
        >
          <track kind="captions" />
          <source src={atDroneVideo} type="video/mp4" />
        </video>
        <div className="overlayContent blackText">
          <h1>Mira el mundo desde otra perspectiva.</h1>
          <p className="blackText">
            AT Drone es útil para Gestión de emergencias, gestión de recursos
            naturales/minería, análisis de suelos y topografía, agricultura,
            seguridad/vigilancia, filmación y toma de fotografías.
          </p>
        </div>
      </section>

      <section className="simpleSection" id="animateUp">
        <div className="sectionWrapper">
          <div className="sectionContent">
            <div className="navSpacer" />
            <h2 className="sectionSubTitle">Producción y Ensamblaje</h2>
            <h1 className="titleUnderLine">100% Ecuatoriano</h1>

            <p className="mt-4">
            En el proceso productivo del AT-Drone se involucran directamente empresas ecuatorianas especializadas en la fabricación de cables, trípodes, sujetadores de aluminio para los motores, fabricación de tubos de fibra de carbono y el desarrollo de software necesario para que funcionen de manera óptima.
            </p>
          </div>
        </div>
      </section>

      {/* <div className="navSpacer"/> */}

      <div className="atDrone">
        
        <div className="productInfo">
          <h1>¿Por qué elegir un ATDrone?</h1>
          <p>
          La diferencia de nuestros drones con los que se adquieren comercialmente es que no estamos limitados a parámetros pre establecidos. La tecnología y la investigación nos permiten crear una solución a la medida de las necesidades de las instituciones.
          </p>

        </div>
        <div className="productImage">
          <img src={atDroneBuild} alt="AT Drone" />
        </div>
      </div>

      {/* <div className="navSpacer"/> */}

      <div className="atDrone">
        <div className="productInfo2">
          <h1>El objetivo</h1>
          <p>
            Construir vehículos aéreos no tripulados (UAV) <i>“Drones"</i> de
            fabricación Ecuatoriana con características y capacidades técnicas
            de alta calidad, que podrán ser utilizado en diferentes ámbitos:
          </p>
          <ul>
            <li>
              <i className="bx-fw bx bx-check-circle" />
              Gestión de emergencias
            </li>
            <li>
              <i className="bx-fw bx bx-check-circle" />
              Gestión de recursos naturales
            </li>
            <li>
              <i className="bx-fw bx bx-check-circle" />
              Exploración y minería
            </li>
            <li>
              <i className="bx-fw bx bx-check-circle" />
              Análisis de suelos y topografía
            </li>
            <li>
              <i className="bx-fw bx bx-check-circle" />
              Agricultura
            </li>
            <li>
              <i className="bx-fw bx bx-check-circle" />
              Seguridad y vigilancia
            </li>
            <li>
              <i className="bx-fw bx bx-check-circle" />
              Proyectos multimedia
            </li>
            <li>
              <i className="bx-fw bx bx-check-circle" />
              Fotografía y video
            </li>
          </ul>
        </div>
        <div className="productImage2">
          <img src={atDroneImg} alt="AT Drone" />
        </div>
      </div>
    </Layout>
  )
}

export default AtdronePage
