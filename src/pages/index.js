import * as React from "react"
import { Link } from "gatsby"
// import * as gsap from 'gsap'
// import {ScrollTrigger} from 'gsap/ScrollTrigger'
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layouts/main-layout"
import Seo from "../components/seo"
import Lottie from "../components/Lottie"
import { clients } from "../data/clientsData"

import aSecurity from "../animations/isometric-tech-animation.json"
import aContact from "../animations/computer-contact.json"

import "boxicons/css/boxicons.min.css"
import Globalsign from "../images/Globalsign.svg"
import shieldIcon from "../images/web-browser.svg"
import spamIcon from "../images/spam.svg"
import lockIcon from "../images/internet.svg"

function IndexPage() {
  // let tl = new gsap.gsap.timeline({delay: 0.3, ease: gsap.Power1.easeOut, duration: 1}, 'Sart')

  // React.useEffect(()=>{

  //   gsap.gsap.registerPlugin(ScrollTrigger);

  //   tl.from('h1', {x: -100, opacity:0})
  //   tl.from('h2', {x: -100, opacity:0}, "-=.9")
  //   tl.from('.hfButtons', {y: 100, opacity:0}, "-=.9")
  //   gsap.gsap.from('#simpleSection', {
  //     ScrollTrigger: '#simpleSection',
  //     y: 100,
  //     opacity:0,
  //     duration: 1
  //   })
  // },[])

  return (
    <Layout>
      <Seo title="Inicio" />
      {/* <div id="inicio"></div> */}
      <section className="indexHero">
        <div className="heroContent">
          <div className="heroContentText">
            <h1>La innovación es nuestro segundo nombre.</h1>
            {/* <h1>Innovación es nuestro segundo nombre.</h1> */}
            <h2>
              Soluciones integrales de Seguridad Informática sustentados en las
              tecnologías de la información y la comunicación.
            </h2>
            <div className="heroContentFooter">
              <div className="hfButtons">
                <Link className="primaryBtn" to="/soluciones">
                  Explorar Soluciones
                </Link>
                <Link
                  className="simpleBtn btnSSL"
                  style={{ marginLeft: "1rem" }}
                  to="/certificados-ssl"
                >
                  <i className="bx bx-fw bx-check-shield bx-md" />
                  Certificados SSL
                </Link>
              </div>
            </div>
          </div>
          <div className="heroAnimation lottieDesktop">
            <Lottie src={aSecurity} width={800} loop={true} />
          </div>
          <div className="heroAnimation lottieMobile">
            <Lottie src={aSecurity} width={500} loop={true} />
          </div>
        </div>
      </section>

      <section className="simpleSection" id="animateUp">
        <div className="sectionWrapper">
          <div className="sectionContent">
            <i className="bx bx-lock bx-md" style={{ marginTop: "5rem" }} />
            <h1 className="titleUnderLine">
              Protección, <br /> Seguridad y Confianza
            </h1>
            <p className="mt-4">
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
      </section>

      <section className="fullWSection">
        <div className="sectionWrapper counters">
          <div className="upCounter">
            <span>2500M +</span>
            <p>Cerificados emitidos desde Ecuador a todo el mundo.</p>
          </div>
          <div className="upCounter">
            <span>250M +</span>
            <p>Certificados de confianza accedidos.</p>
          </div>
          <div className="upCounter">
            <span>5M +</span>
            <p>Identificaciones digitales emitidas a sitios web y máquinas.</p>
          </div>
          <div className="upCounter">
            <span>200B +</span>
            <p>
              Respuestas OCSP (Online Certificate Status Protocol) entregadas
              diariamente.
            </p>
          </div>
        </div>
      </section>

      <div className="fullWSection bgBlue">
        <div className="sectionContent">
          <div className="sectionWrapper">
            <h2 className="sectionSubTitle whiteText">
              ¿Intranquilo porque no sabes si tus datos están protegidos?
            </h2>
            <h1 className="sectionTitle mt-4 whiteText">
              Podemos devolverte la tranquilidad.
            </h1>
          </div>
        </div>
      </div>

      <section className="simpleSection overlapUp">
        <div className="cardH">
          <div className="cardHImg">
            <img className="floating" src={lockIcon} alt="Protección" />
          </div>
          <div className="cardHDescription">
            <h1>Navegación segura</h1>
            <p>
              Controla la navegación y optimiza tus recursos. Solución
              corporativa para administrar los recursos de navegación junto con
              un filtro de contenido inteligente, se integra a las necesidades
              de toda corporación.
            </p>
            <Link to="/servicios/at-proxy"> Saber más</Link>
          </div>
        </div>
        <div className="cardH toLeft">
          <div className="cardHDescription">
            <h1>Máxima protección</h1>
            <p>
              Evita los ataques externos. Brindamos una solución integral de
              seguridad perimetral. Bajo el análisis de nuestros expertos,
              aplicarán políticas correctas para la prevención de ataques a sus
              sistemas.
            </p>
            <Link to="/servicios/at-firewall"> Saber más</Link>
          </div>
          <div className="cardHImg">
            <img className="floating" src={shieldIcon} alt="Protección" />
          </div>
        </div>
        <div className="cardH toRight">
          <div className="cardHImg">
            <img className="floating" src={spamIcon} alt="Protección" />
          </div>
          <div className="cardHDescription">
            <h1>Adiós al spam</h1>
            <p>
              Controla y filtra grandes cantidades de correo basura. Usa
              técnicas automáticas avanzadas en la filtración de correo y su
              administración es sencilla. Es compatible con cualquier servidor
              de correo Exchange, Lotus, Zimbra, etc.
            </p>
            <Link to="/servicios/at-inspector"> Saber más</Link>
          </div>
        </div>
      </section>

      <section className="simpleSection mt-4">
        <h1 className="sectionTitle">Los más grandes confían en nosotros</h1>

        <div className="clientsShow">
          {clients.map((item, index) => {
            return (
              <div className="clientLogo" key={index}>
                <img src={item.path} alt={item.name} />
              </div>
            )
          })}
        </div>
      </section>

      <div className="containerFull">
        <div className="helpCTA">
          <div>
            <h1>
              ¿Necesitas ayuda para escoger un servicio?
            </h1>
            <Link className="primaryBtn" to="/contacto">
              Ponte en contacto
            </Link>
          </div>
          <div className="lottieDesktop">
            <Lottie src={aContact} width={800} loop={true} />
          </div>
          <div className="lottieMobile">
            <Lottie src={aContact} width={600} loop={true} />
          </div>
        </div>
      </div>

      {/* <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
      /> */}
    </Layout>
  )
}

export default IndexPage
