import React from "react"
import Layout from "../../components/layouts/main-layout"
import Seo from "../../components/seo"
import atProxy from "../../images/ATProxy-pkg.png"

function atproxy() {
  return (
    <Layout>
      <Seo title="AT Proxy" />
      <section className="atProductHero">
        <div className="heroWrapper">
          <div className="atProductInfo blackText">
            <h1>Toma el control total de la navegación.</h1>
            <p className="blackText">
              AT Proxy es una solución corporativa para administrar los recursos
              de navegación junto con un filtro de contenido inteligente, se
              integra a las necesidades de toda corporación.
            </p>
          </div>
          <div className="atProductImage">
            <img src={atProxy} alt="At Firewall" />
          </div>
        </div>
      </section>
      <section className="simpleSection" id="animateUp">
        <div className="sectionWrapper">
          <div className="sectionContent">
            <div className="navSpacer productSpacer" />
            <h3>Certificado IEPI: QUI-043741 23-05-2014</h3>
            <h1 className="titleUnderLine">
              Controla la navegación y optimiza tus recursos.
            </h1>
            <p className="mt-4">
              (NG) NEW GENERATION AT-PROXY es un sistema que se incorpora a la
              arquitectura de seguridades de la red interna e interactúa con el
              sistema Active Directory de Microsoft, el cual garantiza la
              administración de la navegación con el manejo de políticas de
              calidad y servicio por cada uno de los usuarios y servicios
              dependientes de Internet.
            </p>
          </div>
        </div>
      </section>
      <div className="informationSection">
        <div>
          <h1>Opensource</h1>
          <p>
            Basado en software Libre ATProxy y su administración, permiten
            controlar la navegación con configuraciones específicas según el
            origen, destino, ancho de banda. La licencia es por nodo. Ilimitado
            para direcciones IP, usuarios, etc. ATProxy es accesible a través de
            SSH y de interfaz Web usando SSL. La herramienta realiza
            backup/restore de la configuración, permitiendo al administrador
            programar la realización de los backups en el tiempo deseado. Los
            Backups pueden ser almacenados localmente, y el administrador puede
            transferirlos vía SFTP o SCP.
          </p>
          {/* <img src={atOpen} alt="Open source"/> */}
        </div>
        <h1>Administración de políticas amigable</h1>
        <p>
          La administración se realiza de manera gráfica, basada en el mismo
          concepto que se usa al administrar un firewall. Permite combinar
          usuario, host, destino, horario, navegador, se pueden usar estas
          combinaciones y tomar una decisión.
          <h2>Integración con un directorio activo.</h2>
          <h4> Se pueden usar los siguientes escenarios:</h4>
          <ol className="ml-2">
            <li>
              Captive portal Le solicita los datos de autenticación vía browser
              si no existe una sesión de navegación creada para ese usuario. El
              tiempo de asignación de la sesión es configurable.
            </li>
            <li>
              Solo se configura el proxy(ip:puerto) para el sistema y el ATProxy
              detecta de manera transparente el usuario que quiere acceder a
              internet.
            </li>
            <li>
              Cada vez que se abre un navegador se solicita los datos de acceso.
            </li>
            <li>Integración completamente transparente para ambientes AD.</li>
          </ol>
        </p>
        <h1>
          Calidad de servicio QoS (Calidad de servicio) dinámico basado en las
          descargas.
        </h1>
        <p>
          El proxy tiene un sensor que detecta en todo momento que conexiones
          superan un ancho de banda configurable. Si supera el umbral activara
          una regla de calidad de servicio, evitando que un usuario congestione
          el canal de internet. También es posible asignar QoS a través de la
          administración WEB.
          <br />
          <br />
          <b>reportes de navegación:</b> Se tiene reportes diarios, semanales,
          mensuales. Los reportes le permiten conocer al administrador desde
          información general de manera estadística así como información a
          detalle.
          <br /> <br />
          <b>Monitoreo en tiempo real:</b> Permite ver cómo están actuando las
          reglas del proxy en tiempo real, también permite ver que usuarios y
          cuanto están consumiendo del canal de internet.
          <br /> <br />
          <b>Filtración de contenido:</b> Se tiene un control inteligente que
          bloquea el contenido inapropiado La administración permite poner
          excepciones así como también bloqueos, se bloquea pornografía,
          violencia, chat, etc.
        </p>
        <h1>Características de administración</h1>
        <p>
          Interfaz de usuario especialmente diseñada para comprensible
          administración Administración de políticas unificada, permite que las
          políticas de navegación puedan ser administradas en una sola pantalla
          con opciones de búsqueda y filtrado. Módulo de auditoría. Permite
          tener un registro histórico de acciones del usuario administrador.
          Acciones como: Creación de políticas nuevas, eliminadas,
          deshabilitadas, cambiadas. Módulo de monitoreo de acciones y
          conexiones en tiempo real para determinar resoluciones inmediatamente.
          Módulo de Calidad de Servicio (QoS) permite el control de ancho de
          banda, limitando el ancho de banda por dirección IP o por usuario.
        </p>
        <h1>Super Admin (General Management)</h1>
        <p>
          Interfaz de usuario simplificada Interfaz completa de línea de
          comandos (CLI) accesible desde la GUI Administración basadas en roles
          Definiciones de objetos del sistema reutilizables para redes,
          servicios, hosts. Integración con Active Directory. Soporte para SNMP
        </p>
        <h1>Logging y Reporting</h1>
        <p>
          Reportes personalizados Integración con sistemas syslog. Completo
          visor de registros Reporte de navegación diario, semanal y mensual.
          Exportación de reportes en PDF.
        </p>
        <h1>Filtrado web y control de aplicaciones</h1>
        <p>
          Filtrado de navegación basado en usuario de forma transparente sin la
          necesidad de configurar un proxy en el navegador, cuando ATProxy está
          integrado a Active Directory. El filtrado de URL es basado en
          categorías. Políticas basadas en usuarios, grupos, tiempo o redes
          Navegación basada en cuotas de tiempo Escaneo de malware: bloqueo de
          toda forma de virus, web malware, trojanos y spyware sobre HTTP/S, FTP
          y correo basado en web Protección contra malware de web avanzado con
          emulación de JavaScript Live Protection en tiempo real en la nube para
          las búsquedas de la última información de amenazas Permite la creación
          de excepciones basadas en la definición de objetos de red. Permite al
          administrador, negar o aceptar URLs específicos, que no necesariamente
          están definidos en una categoría, para poder ser utilizados en la
          definición de nuevas reglas. El Filtrado URL tiene la capacidad de
          bloquear granularmente sitios basado en Web 2.0. Escaneo HTTP y HTTPS
          sobre una base por usuario o la política de red con reglas
          personalizables y excepciones La detección y ejecución de protocolo
          SSL tunnelling Validación de certificados Alto rendimiento de caching
          en contenido web Filtrado del tipo de archivo por MIME type, extensión
          y tipos de contenido activo (por ejemplo ActiveX, applets, cookies,
          etc.) Control de ancho de banda por usuario Permite limitar el acceso
          web por hora, dirección IP o página web. Pueden crear listas de
          control de acceso simple para definir las actividades ACEPTAR o
          DENEGAR, dependiendo de la configuración inicial. Almacena copia de
          las páginas y archivos solicitados por los usuarios. Existen
          excepciones configurables para sitios que no se requiera almacenar.
          Limita la velocidad del tráfico que se envía a cada usuario en
          particular, Limita el número máximo de conexiones a un servidor desde
          un lugar particular
        </p>
        <h1>Antivirus</h1>
        <p>
          Bloqueo de virus para los protocolos HTTP Antispyware basado en
          patrones Realiza descompresión de archivos. Configuración
          administrable por tamaño de archivos.
        </p>
      </div>
    </Layout>
  )
}

export default atproxy
