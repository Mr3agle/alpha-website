import React from "react"
import Layout from "../../components/layouts/main-layout"
// import { Link } from "gatsby"
import Seo from "../../components/seo"
import atInspector from "../../images/ATInspector-pkg.png"

function atinspector() {
  return (
    <Layout>
      <Seo title="AT Mail Inspector" />
      <section className="atProductHero">
        <div className="heroWrapper">
          <div className="atProductInfo blackText">
            <h1>
              No más <br /> correo basura.
            </h1>
            <p className="blackText">
              Controla y filtra grandes cantidades de correo basura. Usa
              técnicas automáticas avanzadas en la filtración de correo y su
              administración es sencilla. Es compatible con cualquier servidor
              de correo Exchange, Lotus, Zimbra, etc..
            </p>
          </div>
          <div className="atProductImage">
            <img src={atInspector} alt="At Firewall" />
          </div>
        </div>
      </section>
      <section className="simpleSection" id="animateUp">
        <div className="sectionWrapper">
          <div className="sectionContent">
            <div className="navSpacer productSpacer" />
            <h3>Certificado IEPI: QUI-043740 23-05-2014</h3>
            <h1 className="titleUnderLine">Protección anti spam</h1>
            <p className="mt-4">
              Motor Antispam avanzado basado en reglas que permita identificar
              las amenazas adicionales de spam y phishing ingeniería social con
              archivos de firmas para obtener una defensa multicapa Bloqueo de
              phishing dirigido a instituciones y otros ataques dirigidos antes
              de que lleguen a su objetivo.
            </p>
          </div>
        </div>
      </section>
      <div className="informationSection">
        <h1>Características y Funciones</h1>
        <div>
          <ul className="ml-2">
            <li>
              Interfaz de usuario especialmente diseñada para comprensible
              administración.
            </li>
            <li>
              Protección frente a ataques dirigidos de correo electrónico,
              incluidas las amenazas persistentes avanzadas (APT), y amenazas
              tradicionales. Filtrado por contenido de archivos adjuntos
              (independiente del tipo de archivos).
            </li>
            <li>
              Protección frente a amenazas Web, bloqueo de correos electrónicos
              de phishing con URL maliciosas, protección frente a virus y
              malware, protection frente a Spyware / grayware, protección frente
              a Graymail (Publicidad engañosa).{" "}
            </li>
            <li>
              Protección contra la denegación de servicio. Creación de Listas
              negras y blancas configurables por el usuario administrador y
              usuario final.
            </li>
            <li>
              Creación de Listas negras y blancas generales para bloqueos de
              dominios, emails, palabras clave, juego de caracteres, etc.
            </li>
            <li>Actualización automática de reglas de filtrado.</li>

            <li>
              Detección y bloqueo de la dirección IP atacante Detección de spam
              en tiempo real y en base al contenido de correos individuales.{" "}
            </li>
            <li>
              {" "}
              Filtrado de correo electrónico no deseados de forma automática y
              manual.
            </li>
            <li>
              Posibilidad de editar Listas Negras y Blancas definidas por el
              Administrador.
            </li>
            <li>
              Políticas de filtrado editables, configurables con posibilidad a
              crear nuevas políticas de acuerdo a las necesidades.{" "}
            </li>
            <li>
              Posee capacidad de identificación y bloqueo de Spam en distintos
              idiomas (capacidad heurística) Bloqueo inverso de DNS. Bloqueo de
              categorías y patrones de URL Políticas de cifrado TLS.
            </li>
            <li>
              Correo electrónico en cola. Cuarentena y boletines por correo
              electrónico para usuarios finales.
            </li>
            <li>
              Capacidad de seleccionar los posibles correos basura que no se
              desean bloquear.{" "}
            </li>
            <li>
              Generación de informes de estado y eventos de: detecciones,
              bloqueos, actualizaciones etc.
            </li>
            <li>
              Registros e informes (Notificaciones de riesgos de seguridad al
              Administrador).
            </li>
            <li>
              Gestión de políticas centralizada para la protección de datos y
              amenazas.{" "}
            </li>
            <li>Administración a través de interface web.</li>
            <li>
              Permite añadir un prefijo al asunto (ejemplo SPAM) a correos con
              baja calificación para registrarlos y alertas a los usuarios en
              caso de ser necesario.
            </li>
            <li>
              Identificación y bloqueo de los mensajes de marketing masivos.
            </li>
            <li>
              Impedir que las amenazas accedan al entorno con protección
              inmediata basada en información sobre amenazas mundiales.
            </li>
            <li>
              Protección contra ataques DOS. Protección de correo entrante y
              saliente.{" "}
            </li>
            <li>
              El sistema Antispam se integra con servidores de correo como:
              Zimbra, Exchange y otros Licenciamiento por servidor.
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default atinspector
