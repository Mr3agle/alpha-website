import * as React from "react"
import {Link} from 'gatsby'
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layouts/main-layout"
import Seo from "../components/seo"
import Lottie from '../components/Lottie'
import aSecurity from '../animations/isometric-tech-animation.json'
import 'boxicons/css/boxicons.min.css'

// import shieldIcon from '../images/web-browser.svg'
// import passIcon from '../images/internet.svg'
// import lockIcon from '../images/privacy.svg'
// import WorldVideo from '../videos/technology-world-green.mp4'
// import WorldVideo from '../videos/Technology-geen-1.mp4'
// import WorldVideo from '../videos/World-Blue-bg.mp4'


const IndexPage = () => (
  <Layout>
    <Seo title="Inicio" />
    {/* <section>
      <video controlsList="nodownload" preload="true" playsInline loop muted disablePictureInPicture className="headerVideo" autoPlay>
        <source src={WorldVideo} type="video/mp4"></source>
      </video>
    </section> */}
    <section className="indexHero">
      <div className="heroContent">
        <div className="heroContentText">
          <h1>La innovación es nuestro segundo nombre</h1>
          <h2>Soluciones integrales de Seguridad Informática sustentados en las tecnologías de la información y la comunicación con colaboradores profesionalmente capacitados y comprometidos.</h2>
          <div className="heroContentFooter">
            <div className="hfButtons">
              <Link className="primaryBtn" to="/">
                Explorar Soluciones
              </Link>
              <Link className="simpleBtn btnSSL" style={{marginLeft:'1rem'}} to="/"> 
                <i className="bx bx-fw bx-check-shield bx-md"/>
                Certificados SSL
              </Link>
            </div>
            
          </div>
          {/* <div className="certifications">
            <div>
              <img src={shieldIcon} width="70" alt="Protección" />
            </div>
            <div >
              <img src={lockIcon} width="70" alt="Confianza" />
            </div>
            <div >
              <img src={passIcon} width="70" alt="Seguridad" />
            </div>
          </div> */}

          
        </div>
        <div className="heroAnimation lottieDesktop">
          <Lottie path={aSecurity} width={800} loop={true}/>
        </div>
        <div className="heroAnimation lottieMobile">
          <Lottie path={aSecurity} width={500} loop={true}/>
        </div>
      </div>
    </section>
    {/* <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
    /> */}

  </Layout>
)

export default IndexPage
