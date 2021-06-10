import * as React from "react"
import Layout from "../components/layouts/main-layout"
import Seo from "../components/seo"
import { Link } from "gatsby"

import sslVideo from "../videos/alpha_ssl_video3.mp4"
// import Globalsign from "../images/Globalsign.svg"
// import shieldIcon from "../images/web-browser.svg"
// import spamIcon from "../images/spam.svg"
// import lockIcon from "../images/internet.svg"
import gsSSL from "../images/globalsign-icons/ssl-certificate.svg"
import gsSecure from "../images/globalsign-icons/secure.svg"
import gsCheck from "../images/globalsign-icons/check.svg"
import gsCode from "../images/globalsign-icons/code.svg"
import gsContract from "../images/globalsign-icons/contract.svg"
import gsUser from "../images/globalsign-icons/user-images.svg"
import checkBp from "../images/check-bp.svg"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"

import Lottie from "../components/Lottie"
import aContact from "../animations/call-center.json"

import gsap from "gsap"

function CertificadosSSLPage() {
  React.useEffect(() => {
    gsap.from(".headerVideo", {
      opacity: 0,
      duration: 3,
    })
  })

  const bpStyles = {
    listStyleImage: `url(${checkBp})`,
  }
  const bpStyles2 = {
    listStyle: "none",
  }

  return (
    <Layout bgDark={true}>
      <Seo title="GlobalSign Ecuador" />
      <section className="heroSection">
        <video
          controlsList="nodownload"
          autoPlay
          preload="true"
          playsInline
          loop
          disablePictureInPicture
          muted={true}
          className="headerVideo"
          style={{
            opacity: "0.2",
          }}
        >
          <track kind="captions" />
          <source src={sslVideo} type="video/mp4" />
        </video>
        <div className="overlayContent">
          <h1>Los certificados digitales más confiables.</h1>
          <p>
            Herramientas, servicios y productos SSL/TLS que necesarios para
            proteger tus servidores públicos e internos y combatir amenazas con
            tecnología de útima generación.
          </p>
        </div>
      </section>
      <section className="simpleSection" id="animateUp">
        <div className="sectionWrapper">
          <div className="sectionContent">
            <div className="navSpacer" />
            <h1 className="titleUnderLine">Soluciones para cada Endpoint</h1>
            {/* <div className="sectionImg">
              <img src={Globalsign} alt="Globalsign Logo" />
            </div> */}
            <p className="mt-4">
              El mayor nivel de cifrado y recursos de valor agregado para
              asegurar tu sitio web, aplicación o tienda online. Estarás
              protegidos y al día con las necesidades actuales de confianza.
              Clientes y visitantes sabrán que la navegación en tu sitio es
              segura y que los detalles de pago e informaciones personales están
              protegidos y fuertemente encriptados.
              <br />
            </p>
          </div>

          <div className="simpleSection">
            <iframe
              src="https://www.youtube.com/embed/_O8qfyDFkWQ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              style={{
                width: "90%",
                height: "500px",
              }}
            ></iframe>
          </div>
          {/* <div className="sectionIcons">
            <div className="sIcon">
              <img src={gsSSL} alt="Certificado SSL" />
              <h3>SSL/TLS</h3>
            </div>
            <div className="sIcon">
              <img src={gsContract} alt="Certificado SSL" />
              <h3>Firma Digital</h3>
            </div>
            <div className="sIcon">
              <img src={gsSecure} alt="Certificado SSL" />
              <h3>Email Seguro</h3>
            </div>
            <div className="sIcon">
              <img src={gsCode} alt="Certificado SSL" />
              <h3>Code Signing</h3>
            </div>
            <div className="sIcon">
              <img src={gsUser} alt="Certificado SSL" />
              <h3>Autenticación</h3>
            </div>
            <div className="sIcon">
              <img src={gsCheck} alt="Certificado SSL" />
              <h3>Seguridad Móvil</h3>
            </div>
          </div> */}
        </div>
      </section>
      <div className="simpleSection mb-4">
        <div className="tabsWrapper">
          <Tabs>
            <TabList>
              <Tab>
                <div className="sIcon">
                  <img src={gsSSL} alt="Certificado SSL" />
                  <h3>SSL/TLS</h3>
                </div>
              </Tab>
              <Tab>
                <div className="sIcon">
                  <img src={gsContract} alt="Certificado SSL" />
                  <h3>Firma Digital</h3>
                </div>
              </Tab>
              <Tab>
                <div className="sIcon">
                  <img src={gsSecure} alt="Certificado SSL" />
                  <h3>Email Seguro</h3>
                </div>
              </Tab>
              <Tab>
                <div className="sIcon">
                  <img src={gsCode} alt="Certificado SSL" />
                  <h3>Code Signing</h3>
                </div>
              </Tab>
              <Tab>
                <div className="sIcon">
                  <img src={gsUser} alt="Certificado SSL" />
                  <h3>Autenticación</h3>
                </div>
              </Tab>
              <Tab>
                <div className="sIcon">
                  <img src={gsCheck} alt="Certificado SSL" />
                  <h3>Seguridad Móvil</h3>
                </div>
              </Tab>
            </TabList>
            <TabPanel>
              <p>
                Ofrecemos una gama de opciones de seguridad <b>SSL/TLS</b> que
                garantizan que sus servidores y sitios públicos estén en línea
                con <b>las mejores prácticas de la industria</b>, pero también
                ofrecemos opciones rentables para
                <b>servidores internos y casos de uso especiales</b>. Todos los
                dominios se revisan previamente para que los certificados
                <b>se emitan de inmediato</b> y estén disponibles para su
                instalación.
                <br />
                <br />
                <br />
                <h1>
                  Simplificamos las tareas de localización, análisis y gestión
                  SSL
                </h1>
                <br />
                <ul className="ml-2">
                  <li style={bpStyles}>
                    Dominios previamente examinados para la emisión instantánea
                    de certificados
                  </li>
                  <li style={bpStyles}>
                    El administrador puede aplicar reglas de control de tráfico,
                    al interior de la VPN. Soporte a compresión IP para VPNs
                    client-to-site y site-to-site.
                  </li>
                  <li style={bpStyles}>
                    Gestión completa del ciclo de vida de los certificados
                  </li>
                  <li style={bpStyles}>
                    Descuentos por volumen y condiciones comerciales flexibles
                  </li>
                  <li style={bpStyles}>
                    Herramienta gratuita de monitoreo e inventario de
                    certificados
                  </li>
                </ul>
                <br />
                <h1>
                  Sólida gama de niveles de protección SSL y opciones de
                  configuración.
                </h1>
                <br />
                <ul className="ml-2">
                  <li style={bpStyles}>
                    Validación Ampliada (EV), Validación de Organización (OV),
                    Wildcard y certificados multidominio, con la opción de
                    añadir hasta 100 SANs
                  </li>
                  <li style={bpStyles}>
                    Compatibilidad de los certificados SSL EV con Certificate
                    Transparency (CT), lo que garantiza la mejor experiencia de
                    usuario durante la navegación
                  </li>
                  <li style={bpStyles}>
                    Ajustes para usos de claves (KU) flexibles y usos de claves
                    ampliados (EKU)
                  </li>
                  <li style={bpStyles}>
                    IntranetSSL es compatible con nombres de servidor internos y
                    periodos de validez más amplios, perfectos para su
                    aplicación en redes internas
                  </li>
                  <li style={bpStyles}>
                    Protección de teléfonos y otros dispositivos móviles con
                    almacenamiento, ancho de banda y capacidad de computación
                    limitados mediante certificados ECC
                  </li>
                  {/* <img src="https://images.pexels.com/photos/4808267/pexels-photo-4808267.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="crypto" width="150" style={{float: 'left'}}/> */}
                </ul>
              </p>
            </TabPanel>
            <TabPanel>
              <h1>Firmas digitales que respaldan tus operaciones</h1>
              <p>
                Una firma digital es similar a la combinación de una firma
                electrónica y una ID digital de confianza. Se trata de
                <b>la mejor forma de firmar documentos importantes</b>, como
                contratos y facturas, sin tener que ir de acá para allá con el
                documento físico.
                <br />
                Ahora, gracias a nuestro <b>Servicio de Firma Digital (DSS)</b>,
                proteger el proceso de firma de documentos en toda la empresa es
                más sencillo que nunca. El DSS, que ha sido concebido pensando
                en la fuerza laboral actual, que trabaja en distintas
                ubicaciones, es la forma más sencilla de implementar y escalar
                las firmas digitales de confianza, independientemente de si va a
                añadirlas a sus flujos de trabajo existentes o, como proveedor
                de servicios, desea ofrecer a sus clientes funciones de firma
                digital basada en certificados.
              </p>
              <br />
              <ul>
                <li style={bpStyles2}>
                  <h3>
                    <i className="bx-fw bx bx-cloud-snow bx-md"></i>
                    Desarrollado para la nube:
                  </h3>
                  <p className="mb-2">
                    El Servicio de Firma Digital (DSS) de GlobalSign es una
                    solución de firma remota totalmente gestionada que no
                    requiere conocimientos expertos en PKI ni gestión de equipos
                  </p>
                </li>
                <li style={bpStyles2}>
                  <h3>
                    <i className="bx-fw bx bx-sitemap bx-md"></i>
                    Opciones de integración flexibles:
                  </h3>
                  <p className="mb-2">
                    La API REST le ayuda a generar de forma rápida y segura
                    sellos digitales desde su software y servicios existentes.
                  </p>
                </li>
                <li style={bpStyles2}>
                  <h3>
                    <i className="bx-fw bx bx-check-shield bx-md"></i>
                    Funciones de confianza:
                  </h3>
                  <p className="mb-2">
                    Verifique la identidad del firmante, añada un sellado de
                    tiempo de confianza a los documentos que implican plazos
                    importantes y proteja el contenido de sus documentos con
                    cada una de las firmas aplicadas.
                  </p>
                </li>
                <li style={bpStyles2}>
                  <h3>
                    <i className="bx-fw bx bx-user-check bx-md"></i>
                    Aprobación por parte del usuario final:
                  </h3>

                  <p className="mb-2">
                    GlobalSign colabora con las principales plataformas de firma
                    de documentos del mundo, como Adobe Sign, DocuSign o
                    HelloSign, lo que le permite añadir firmas digitales de
                    confianza a sus flujos de trabajo existentes de forma
                    rápida.
                  </p>
                </li>
                <li style={bpStyles2}>
                  <h3>
                    <i className="bx-fw bx bx-slider-alt bx-md"></i>
                    Identidad adaptable del firmante:
                  </h3>
                  <p className="mb-2">
                    Los usuarios pueden firmar de forma personal o en nombre de
                    su departamento u organización
                  </p>
                </li>
                <li style={bpStyles2}>
                  <h3>
                    <i className="bx-fw bx bx-stopwatch bx-md"></i>
                    Validez a largo plazo:
                  </h3>

                  <p className="mb-2">
                    El servicio es compatible con la Validez a Largo Plazo (LTV)
                    de AATL, por lo que se adapta a los requisitos de archivado
                    de documentos.
                  </p>
                </li>
              </ul>
            </TabPanel>
            <TabPanel>
              <h1>
                Seguridad para correo electrónico escalable frente a ataques de
                phishing y pérdida de datos
              </h1>
              <br />
              <ul className="ml-2">
                <li style={bpStyles}>Cifrado de mensajes extremo a extremo</li>
                <li style={bpStyles}>
                  S/MIME ofrece compatibilidad nativa con la mayoría de los
                  clientes de correo electrónico de empresa más populares
                </li>
                <li style={bpStyles}>
                  Requiere una mínima formación por parte del usuario. De hecho,
                  para la mayoría de clientes, la firma digital y/o el cifrado
                  de correos electrónicos es tan sencillo como hacer clic en un
                  botón. Habitualmente esta acción puede establecerse de forma
                  automática para todos los mensajes salientes
                </li>
              </ul>
              <br />
              <h1>
                Los correos electrónicos con firma digital contribuyen a luchar
                contra los ataques de spoofing y phishing
              </h1>
              <br />
              <ul className="ml-2">
                <li style={bpStyles}>
                  Vincule la identidad del remitente, previamente verificada por
                  un tercero, con el correo electrónico
                </li>
                <li style={bpStyles}>
                  La identidad del remitente se muestra de forma inequívoca al
                  destinatario, lo que ayuda a discernir qué correos
                  electrónicos son legítimos y cuáles constituyen un ataque de
                  spoofing
                </li>
                <li style={bpStyles}>Fomenta la no repudiación</li>
                <li style={bpStyles}>
                  Evita modificaciones en el contenido de sus correos
                  electrónicos después de enviarlos
                </li>
              </ul>
              <br />
              <h1>
                Cifrado de correo electrónico para proteger los mensajes en
                tránsito y guardados
              </h1>
              <br />
              <ul className="ml-2">
                <li style={bpStyles}>
                  Los correos electrónicos cifrados con S/MIME solo pueden ser
                  descifrados por el destinatario legítimo
                </li>
                <li style={bpStyles}>
                  Cifrado extremo a extremo: el correo electrónico permanece
                  cifrado en tránsito y una vez guardado en los servidores
                </li>
                <li style={bpStyles}>
                  Prevención de pérdidas y filtraciones de datos
                </li>
              </ul>
            </TabPanel>
            <TabPanel>
              <h1>¿Qué es un certificado de firma de código?</h1>
              <p>
                Un certificado de firma de código es un certificado digital
                emitido por una Autoridad de Certificación, como GlobalSign, que
                contiene información que permite identificar completamente a una
                entidad. El certificado digital vincula la identidad de una
                organización con una clave pública relacionada matemáticamente
                con su par de clave privada. El uso de sistemas de claves
                públicas y privadas se denomina Infraestructura de Clave Pública
                (PKI). El desarrollador firma el código con la clave privada y
                el usuario final utiliza la clave pública del mismo
                desarrollador para verificar su identidad. Obtenga más
                información sobre la firma de código y las diferencias entre
                códigos firmados y sin firmar.
              </p>
              <br />
              <p>
                GlobalSign permite instalar
                <b>certificados de firma de código estándar</b> y EV en los HSM
                del cliente o en Azure Key Vault.
                <Link to="/contacto" className="atLink">
                  Ponte en contacto con nosotros
                </Link>
                para obtener más información sobre estas opciones de
                implantación.
                <b>Nota:</b> Dispositivo USB no incluido en las implantaciones
                de HSM o Azure Key Vault.
              </p>
              <br />
              <h1>Compatibilidad con múltiples plataformas</h1>
              <p>
                Los certificados de firma de código de GlobalSign son
                compatibles con múltiples plataformas usando el mismo
                certificado.
              </p>

              <ul className="ml-2">
                <li style={bpStyles}>
                  <a
                    href="https://www.globalsign.com/es/code-signing-certificate/microsoft-authenticode/"
                    target="_blank"
                    rel="noreferrer"
                    className="atLink"
                  >
                    Ms Authenticode
                  </a>
                </li>
                <li style={bpStyles}>
                  <a
                    href="https://www.globalsign.com/es/code-signing-certificate/apple/"
                    target="_blank"
                    rel="noreferrer"
                    className="atLink"
                  >
                    Adobe Air
                  </a>
                </li>
                <li style={bpStyles}>
                  <a
                    href="https://www.globalsign.com/es/code-signing-certificate/apple/"
                    target="_blank"
                    rel="noreferrer"
                    className="atLink"
                  >
                    Apple
                  </a>
                </li>
                <li style={bpStyles}>
                  <a
                    href="https://www.globalsign.com/es/code-signing-certificate/mozilla/"
                    target="_blank"
                    rel="noreferrer"
                    className="atLink"
                  >
                    Objetos de Mozilla y Netscape
                  </a>
                </li>
                <li style={bpStyles}>
                  <a
                    href="https://www.globalsign.com/es/code-signing-certificate/macro-vba/"
                    target="_blank"
                    rel="noreferrer"
                    className="atLink"
                  >
                    Macros y VBA
                  </a>
                </li>
                <li style={bpStyles}>
                  <a
                    href="https://www.globalsign.com/es/code-signing-certificate/java/"
                    target="_blank"
                    rel="noreferrer"
                    className="atLink"
                  >
                    Java
                  </a>
                </li>
              </ul>
              <br />
              <h1>
                Firma de código para distribuidores de software y organizaciones
              </h1>
              <p>
                Los desarrolladores de todas las plataformas recurren a los
                certificados de firma de códigode GlobalSign para firmar
                digitalmente las aplicaciones y el software que distribuyen a
                través de Internet. En esencia, la firma de código ofrece la
                misma garantía que el envoltorio sellado de un CD, ya que el
                código firmado incluye el nombre del editor y verifica que el
                código no ha sido manipulado después de su publicación.
                Cualquiera que descargue software desde Internet puede decidir
                si confiar o no en la descarga.
              </p>
              <p>
                Los certificados de firma de código emplean un hash de cifrado
                único para vincular la identidad del editor con el software. Las
                advertencias de seguridad que se muestran cuando el código no
                está firmado se sustituyen por notificaciones con información
                sobre el desarrollador del software, lo que evita que los
                usuarios abandonen la instalación y aumenta las tasas de
                descarga. La firma de código añade un nivel esencial de
                confianza al proceso de instalación.
              </p>
              <p>
                Al firmar digitalmente el código, se demuestra que el software
                firmado es legítimo, procede de un distribuidor de software
                conocido y garantiza que el código no ha sido manipulado después
                de su publicación. La firma de código evita que los usuarios
                abandonen la instalación de una aplicación por distintos
                motivos, como los mensajes de advertencia de seguridad, las
                alternaciones del código legítimo o el robo de identidad de un
                autor distribuidor.
              </p>

              <br />
              <h1>
                Certificados de firma de código estándar o con validación
                ampliada (EV)
              </h1>
              <p>
                Los certificados de firma de código EV incorporan todas las
                ventajas de los certificados de firma de código estándar y
                ofrecen un nivel de seguridad superior que garantiza que la
                identidad del editor es auténtica y ha sido verificada.
              </p>
              <br />

              <ul className="ml-2">
                <li style={bpStyles}>
                  El estricto proceso de inspección garantiza a los usuarios
                  finales que la identidad del editor ha sido verificada.
                </li>
                <li style={bpStyles}>
                  El reconocimiento inmediato por parte del filtro SmartScreen
                  de Microsoft elimina los alarmantes mensajes de advertencia
                  que informan a los usuarios finales de que la aplicación
                  podría ser fraudulenta.
                </li>
              </ul>
            </TabPanel>
            <TabPanel>
              <h1>
                Controla las personas y dispositivos que tienen acceso a sus
                redes y recursos
              </h1>
              <p>
                La proliferación de robos de identidad y datos aprovechando
                contraseñas débiles parece indicar que los métodos de
                autenticación de factor único (por ejemplo, nombre de
                usuario/contraseña) ya no constituyen un control de seguridad
                suficiente. En la actualidad, la autenticación de doble factor
                resulta esencial para proteger los datos sensibles de las
                organizaciones.
              </p>
              <br />
              <h1>Soluciones de autenticación de doble factor de GlobalSign</h1>
              <br />
              <ul className="ml-2">
                <li style={bpStyles}>
                  <h3>
                    Certificados para computadoras y servidores de controlador
                    de dominio
                  </h3>
                </li>
                <li style={bpStyles}>
                  <h3>Dispositivos móviles</h3>
                </li>
                <li style={bpStyles}>
                  <h3>Acceso con tarjetas inteligentes</h3>
                </li>
                <li style={bpStyles}>
                  <h3>Servicios en la nube</h3>
                </li>
                <li style={bpStyles}>
                  <h3>Dispositivos USB Tokens</h3>
                </li>
                <li style={bpStyles}>
                  <h3>VPN, Portales y Redes Wi-Fi</h3>
                </li>
              </ul>
              <br />
              <h1>Gestión Simple de Certificados con la PKI gestionada</h1>
              <br />
              <p>
                La plataforma de gestión basada en la nube PKI Gestionada (MPKI)
                de GlobalSign simplifica la implementación y gestión de los
                certificados digitales empleados para la autenticación de doble
                factor.
                <br />
                La PKI Gestionada ofrece un ahorro en los costos, fácil gestión
                y la auditoria de identidades para tanto usuarios como para
                dispositivos, permitiendo un control granular sobre quién o qué
                entra a sus servicios, informaciones y recursos digitales.
                <br />
                Pensada para las empresas, la PKI Gestionada también proporciona
                funciones ampliadas perfectamente adaptadas a grandes
                organizaciones que operan entornos Windows que permiten
                aprovechar el Directorio Activo para inscripción automática e
                instalaciones silenciosas de los certificados.
              </p>
              <br />
              <h3>
                Más información sobre cómo simplificar la gestión de
                certificados con la{" "}
                <a
                  href="https://www.globalsign.com/es/managed-pki"
                  target="_blank"
                  rel="noreferrer"
                  className="atLink"
                >
                  PKI Gestionada.
                </a>
              </h3>
            </TabPanel>
            <TabPanel>
              <h1>Autenticación de Dispositivos Móviles</h1>
              <p>
                En muchos aspectos, los dispositivos móviles no son distintos de
                un PC remoto, en cuanto a que también exigen contar con una
                fuerte autenticación que permita autenticar a los usuarios de
                forma segura antes de acceder a las redes corporativas (como
                Wi-Fi o VPN). La autenticación basada en certificados a través
                de la plataforma PKI Gestionada de GlobalSign proporciona una
                solución sencilla y económica que permite a las organizaciones
                balancear la necesidad de los empleados de acceder al correo
                electrónico y los datos corporativos desde cualquier ubicación y
                la necesidad de evitar accesos no autorizados a las aplicaciones
                fundamentales para la organización.
              </p>
              <br />
              <h1>Mejora la Seguridad para Dispositivos Móviles con PKI</h1>
              <p>
                PKI es una tecnología de seguridad completamente confiable
                empleada por las organizaciones desde hace décadas para
                autenticar usuarios, máquinas y servidores dentro de la propia
                organización. La ampliación de la PKI a los dispositivos
                proporciona una solución de gestión de identidades fácil de
                implementar y económica.
                <br />
                <br />
                <b>
                  Los certificados digitales pueden utilizarse en dispositivos
                  móviles para:
                </b>
              </p>
              <br />
              <ul className="ml-2">
                <li style={bpStyles}>
                  <h3>Cifrar y firmar Correos Electrónicos:</h3>
                  <p>
                    Cifrar y firmar digitalmente las comunicaciones a través del
                    correo electrónico enviadas desde dispositivos para
                    garantizar la privacidad de la información sensible y
                    demostrar la autoría/el origen del mensaje.
                  </p>
                </li>
                <li style={bpStyles}>
                  <h3>Autenticación de Correos Electrónicos</h3>
                  <p>
                    Habilite la autenticación de correo electrónico para el
                    acceso de correo electrónico 24 x 7 sin dejar solo cuentas
                    de correo electrónico vulnerables a intrusos. Solo los
                    dispositivos autorizados podrán acceder a sus servidores de
                    correo electrónico corporativos.
                  </p>
                </li>
                <li style={bpStyles}>
                  <h3>Autenticar Redes VPN y Wi-Fi</h3>
                  <p>
                    Sustituir los nombres de usuario y contraseñas débiles y
                    vulnerables por un método de autenticación de factor
                    múltiple para las conexiones Wi-Fi y VPN corporativas y
                    permitir el acceso a sus conexiones empresariales únicamente
                    a los dispositivos autorizados.
                  </p>
                </li>
              </ul>
              <br />
              <br />
              <h1>
                Ventajas del uso de certificados digitales para la autenticación
                de dispositivos móviles
              </h1>
              <ul className="ml-2">
                <li style={bpStyles}>
                  Únicamente los usuarios verificados tienen acceso a los
                  recursos corporativos
                </li>
                <li style={bpStyles}>
                  La configuración prácticamente no requiere asistencia del
                  departamento de TI
                </li>
                <li style={bpStyles}>
                  La configuración no resulta intrusiva y es de facil manejo
                  para el usuario final
                </li>
                <li style={bpStyles}>
                  Su implementación es rápida y económica
                </li>
                <li style={bpStyles}>
                  Los certificados se gestionan cómodamente desde la plataforma
                  gestionada de GlobalSign: emisión, renovación y revocación
                  desde un único portal
                </li>
                <li style={bpStyles}>
                  Es posible su integración con las plataformas MDM/EMM más
                  populares en la actualidad, como Microsoft Intune, AirWatch y
                  MobileIron Cloud o Core
                </li>
                <li style={bpStyles}>
                  Permite a los empleados BYOD (traer sus propios dispositivos)
                  o usar dispositivos de la empresa para acceder de forma segura
                  las aplicaciones de la empresa
                </li>
              </ul>
            </TabPanel>
          </Tabs>
        </div>
      </div>
      <div className="containerFull">
        <div className="helpCTA bgRed">
          <div>
            <h1>¿Todavía tienes dudas?</h1>
            <Link className="primaryBtn" to="/contacto">
              Déjanos un mensaje
            </Link>
          </div>
          <div className="lottieDesktop">
            <Lottie src={aContact} width={500} loop={true} />
          </div>
          <div className="lottieMobile">
            <Lottie src={aContact} width={500} loop={true} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CertificadosSSLPage
