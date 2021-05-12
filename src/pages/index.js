import * as React from "react"
import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layouts/main-layout"
import Seo from "../components/seo"
import Lottie from "../components/Lottie"
import aSecurity from "../animations/isometric-tech-animation.json"
import "boxicons/css/boxicons.min.css"

import Globalsign from "../images/Globalsign.svg"

import shieldIcon from "../images/web-browser.svg"
import passIcon from '../images/password.svg'
import lockIcon from '../images/internet.svg'
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
          <h1>Innovación es nuestro segundo nombre.</h1>
          <h2>
            Soluciones integrales de Seguridad Informática sustentados en las
            tecnologías de la información y la comunicación.
          </h2>
          <div className="heroContentFooter">
            <div className="hfButtons">
              <Link className="primaryBtn" to="/">
                Explorar Soluciones
              </Link>
              <Link
                className="simpleBtn btnSSL"
                style={{ marginLeft: "1rem" }}
                to="/"
              >
                <i className="bx bx-fw bx-check-shield bx-md" />
                Certificados SSL
              </Link>
            </div>
          </div>
        </div>
        <div className="heroAnimation lottieDesktop">
          <Lottie path={aSecurity} width={800} loop={true} />
        </div>
        <div className="heroAnimation lottieMobile">
          <Lottie path={aSecurity} width={500} loop={true} />
        </div>
      </div>
    </section>

    <section className="simpleSection">
      <div className="sectionWrapper">
        <div className="sectionContent">
            <i className='bx bx-lock bx-md'/>
          <h1>
            Cifrado <br/> de extremo a extremo
          </h1>
          <p>
            Por seis años consecutivos somos distribuidores de GlobalSign, que
            es el proveedor líder a nivel mundial de soluciones de Seguridad e
            Identidad Segura y a la fecha somos representantes exclusivos para
            Ecuador de este socio de negocios.
          </p>
        </div>
        <div className="sectionImg">
          <img src={Globalsign} alt="Globalsign Logo" />
        </div>
      </div>
      <div className="cardH toLeft">
        <div className="cardHImg">
          <img className="floating" src={lockIcon} alt="Protección" />
        </div>
        <div className="cardHDescription">
          <h1>Navegación segura.</h1>
          <p>
            Rigardi la mi sxipo sed ke, pafilo li fordoni ne min. Pafilegojn
            post boato sxipanoj tiu estis bone. Gxis mi.
          </p>
          <Link to="/"> Saber más</Link>
        </div>
      </div>
      <div className="cardH toRight">
        
        <div className="cardHDescription">
          <h1>Protección en tiempo real.</h1>
          <p>
            Rigardi la mi sxipo sed ke, pafilo li fordoni ne min. Pafilegojn
            post boato sxipanoj tiu estis bone. Gxis mi.
          </p>
          <Link to="/"> Saber más</Link>
        </div>
        <div className="cardHImg">
          <img className="floating" src={shieldIcon} alt="Protección" />
        </div>
      </div>
      <div className="cardH toLeft">
        <div className="cardHImg">
          <img className="floating" src={passIcon} alt="Protección" />
        </div>
        <div className="cardHDescription">
          <h1>Seguridad de datos.</h1>
          <p>
            Rigardi la mi sxipo sed ke, pafilo li fordoni ne min. Pafilegojn
            post boato sxipanoj tiu estis bone. Gxis mi.
          </p>
          <Link to="/"> Saber más</Link>
        </div>
      </div>
    </section>

    <section className="simpleSection">
      
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
