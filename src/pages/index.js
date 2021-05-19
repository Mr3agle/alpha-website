import * as React from "react"
import { Link } from "gatsby"
// import * as gsap from 'gsap'
// import {ScrollTrigger} from 'gsap/ScrollTrigger'
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layouts/main-layout"
import Seo from "../components/seo"
import Lottie from "../components/Lottie"
// import CountUp, {useCountUp} from 'react-countup'


import aSecurity from "../animations/isometric-tech-animation.json"


import "boxicons/css/boxicons.min.css"

// import aboutVideo from "../videos/alpha_tech_video.mp4"
import Globalsign from "../images/Globalsign.svg"
import shieldIcon from "../images/web-browser.svg"
import spamIcon from "../images/spam.svg"
import lockIcon from "../images/internet.svg"
import gsSSL from "../images/globalsign-icons/ssl-certificate.svg"
import gsSecure from "../images/globalsign-icons/secure.svg"
import gsCheck from "../images/globalsign-icons/check.svg"
import gsCode from "../images/globalsign-icons/code.svg"
import gsContract from "../images/globalsign-icons/contract.svg"
import gsUser from "../images/globalsign-icons/user-images.svg"

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
    <Layout isDark>
      <Seo title="Inicio" />
      {/* <div id="inicio"></div> */}
      <section className="indexHero">
        <div className="heroContent">
          <div className="heroContentText">
            <h1>Innovación es nuestro segundo nombre.</h1>
            <h2>
              Soluciones integrales de Seguridad Informática sustentados en
              las tecnologías de la información y la comunicación.
            </h2>
            <div className="heroContentFooter">
              <div className="hfButtons">
                
                  <a className="primaryBtn" href="#productos">
                    Explorar Soluciones
                  </a>
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
            <h1>
              Protección, <br /> Seguridad y Confianza
            </h1>
            <p>
              Por seis años consecutivos somos distribuidores de GlobalSign,
              que es el proveedor líder a nivel mundial de soluciones de
              Seguridad e Identidad Segura y a la fecha somos representantes
              exclusivos para Ecuador de este socio de negocios.
            </p>
          </div>
          <div className="sectionImg">
            <img src={Globalsign} alt="Globalsign Logo" />
          </div>
          <div className="sectionIcons">
            <div className="sIcon">
              <img src={gsSSL} alt="Certificado SSL" />
              <h3>
                SSL/TLS
              </h3>
            </div>
            <div className="sIcon">
              <img src={gsContract} alt="Certificado SSL" />
              <h3>
                Firma Digital
              </h3>
            </div>
            <div className="sIcon">
              <img src={gsSecure} alt="Certificado SSL" />
              <h3>
                Email Seguro
              </h3>
            </div>
            <div className="sIcon">
              <img src={gsCode} alt="Certificado SSL" />
              <h3>
                Code Signing
              </h3>
            </div>
            <div className="sIcon">
              <img src={gsUser} alt="Certificado SSL" />
              <h3>
                Autenticación
              </h3>
            </div>
            <div className="sIcon">
              <img src={gsCheck} alt="Certificado SSL" />
              <h3>
                Seguridad Móvil
              </h3>
            </div>
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
            <p>
              Identificaciones digitales emitidas a sitios web y máquinas.
            </p>
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

      <section className="simpleSection">
        <div className="cardH toeft">
          <div className="cardHImg">
            <img className="floating" src={lockIcon} alt="Protección" />
          </div>
          <div className="cardHDescription">
            <h1>Navegación segura</h1>
            <p>
              Controla la navegación y optimiza tus recursos. Solución
              corporativa para administrar los recursos de navegación junto
              con un filtro de contenido inteligente, se integra a las
              necesidades de toda corporación.
            </p>
            <Link to="/"> Saber más</Link>
          </div>
        </div>
        <div className="cardH">
          <div className="cardHDescription">
            <h1>Protección máxima</h1>
            <p>
              Evita los ataques externos. Brindamos una solución integral de
              seguridad perimetral. Bajo el análisis de nuestros expertos,
              aplicarán políticas correctas para la prevención de ataques a
              sus sistemas.
            </p>
            <Link to="/"> Saber más</Link>
          </div>
          <div className="cardHImg">
            <img className="floating" src={shieldIcon} alt="Protección" />
          </div>
        </div>
        <div className="cardH">
          <div className="cardHImg">
            <img className="floating" src={spamIcon} alt="Protección" />
          </div>
          <div className="cardHDescription">
            <h1>No más spam</h1>
            <p>
              Controla y filtra grandes cantidades de correo basura. Usa
              técnicas automáticas avanzadas en la filtración de correo y su
              administración es sencilla. Es compatible con cualquier servidor
              de correo Exchange, Lotus, Zimbra, etc.
            </p>
            <Link to="/"> Saber más</Link>
          </div>
        </div>
      </section>

      <section id="productos" className="simpleSection">
        <h1 className="sectionTitle">Conoce nuestras soluciones</h1>
        <div className="productCards">
          <div className="productCard">
            <img
              src="https://www.alphaside.com/wp-content/uploads/2020/02/atfirewall.png"
              alt="AT-Firewall"
            />
            <h2>AT Firewall</h2>
            <p>
              Evita los ataques externos con una solución integral de
              seguridad perimetral.
            </p>
            <Link to="/soluciones/at-firewall/">Ver más</Link>
          </div>
          <div className="productCard">
            <img
              src="https://www.alphaside.com/wp-content/uploads/2020/02/MailInspector.jpg"
              alt="AT-MailInspector"
            />
            <h2>AT Mail Inspector</h2>
            <p>
              Controla y filtra grandes cantidades de correo basura de forma
              sencilla.
            </p>
            <Link to="/soluciones/at-inspector">Ver más</Link>
          </div>
          <div className="productCard">
            <img
              src="https://www.alphaside.com/wp-content/uploads/2020/02/AT-PROXY.png"
              alt="AT-Proxy"
            />
            <h2>AT Proxy</h2>
            <p>
              Controla la navegación con un filtro de contenido inteligente y
              optimiza tus recursos.
            </p>
            <Link to="/soluciones/at-proxy">Ver más</Link>
          </div>
          <div className="productCard">
            <img
              src="https://www.alphaside.com/wp-content/uploads/2020/02/Atmailing-jpg.jpg"
              alt="AT-Mailing"
            />
            <h2>AT Mailing</h2>
            <p>
              Envía más de <b>1.000.000</b> de correos diarios sin caer en
              listas negras.
            </p>
            <Link to="/soluciones/at-mailing">Ver más</Link>
          </div>
          <div className="productCard">
            <img
              src="https://www.alphaside.com/wp-content/uploads/2020/02/athotspot.png"
              alt="AT-Hot Spot"
            />
            <h2>AT Hot Spot</h2>
            <p>
              Tickets de navegación para clientes e invitados en una zona
              segura de acceso inalámbrico.
            </p>
            <Link to="/soluciones/at-hotspot">Ver más</Link>
          </div>
          <div className="productCard">
            <img
              src="https://www.alphaside.com/wp-content/uploads/2020/02/Atlogic-jpg.jpg"
              alt="AT-Logic"
            />
            <h2>AT Logic</h2>
            <p>
              La solución óptima para el balanceo de carga, alto rendimiento y
              alta disponibilidad.
            </p>
            <Link to="/soluciones/at-logic">Ver más</Link>
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
  
}

export default IndexPage
