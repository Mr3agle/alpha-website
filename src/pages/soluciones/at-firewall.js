import React from "react"
import Layout from "../../components/layouts/main-layout"
import Seo from "../../components/seo"
import {Link} from 'gatsby'
// import atFirewall from "../../images/products/ATFirewall.svg"
import atFirewall from "../../images/ATFirewall-pkg.png"
// import atOpen from "../../images/ATOpenSource.svg"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"

function atfirewall() {
  return (
    <Layout>
      <Seo title="AT Firewall" />
      <section className="atProductHero">
        <div className="heroWrapper">
          <div className="atProductInfo blackText">
            <h1>Evita los ataques externos.</h1>
            <p className="blackText">
              Brindamos una solución integral de seguridad perimetral. Bajo el
              análisis de nuestros expertos, aplicarán políticas correctas para
              la prevención de ataques a sus sistemas.
            </p>
          </div>
          <div className="atProductImage">
            <img src={atFirewall} alt="At Firewall" />
          </div>
        </div>
      </section>

      <section className="simpleSection" id="animateUp">
        <div className="sectionWrapper">
          <div className="sectionContent">
            <div className="navSpacer productSpacer" />
            <h1 className="titleUnderLine">
              Seguridad perimetral para cada Endpoint
            </h1>
            <p className="mt-4">
              El mayor nivel de cifrado y recursos de valor agregado para
              asegurar tu sitio web, aplicación o tienda online. Estarás
              protegidos y al día con las necesidades actuales de confianza.
              Clientes y visitantes sabrán que la navegación en tu sitio es
              segura y que los detalles de pago e informaciones personales están
              protegidos y fuertemente encriptados.
            </p>
          </div>
        </div>
      </section>
      <div className="informationSection">
        <div>
          <h1>Opensource</h1>
          <p>
          
          Basado en software libre. El Firewall y su administración, permiten adicionar nuevas funcionalidades a través de módulos, sin necesidad de realizar una actualización completa del software. Licenciamiento por nodo. Ilimitado para direcciones IP, usuarios, etc. ATFirewall es accesible a través de SSH y de interfaz Web usando SSL. La herramienta realiza backup/restore de la configuración, permitiendo al administrador programar la realización de los backups en el tiempo deseado. Los Backups pueden ser almacenados localmente, y el administrador puede transferirlos vía SFTP o SCP.
          </p>
          {/* <img src={atOpen} alt="Open source"/> */}
        </div>
        <h1>Fácil de Administrar</h1>
        <p>
        Interfaz de usuario especialmente diseñada para comprensible administración. Administración de políticas unificada, permite que las políticas de seguridad perimetral del negocio, puedan ser administradas en una sola pantalla con opciones de búsqueda y filtrado. Módulo de auditoría. Permite tener un registro histórico de acciones del usuario administrador. Acciones como: Creación de políticas nuevas, eliminadas, deshabilitadas, cambiadas. Módulo de monitoreo de acciones y conexiones en tiempo real para determinar resoluciones inmediatamente. La administración permite exportar las políticas en archivo en formato xls. IDS, IPS personalizado, reportes de intrusiones. Modulo de Calidad de Servicio (QoS) permite el control de ancho de banda, garantizando anchos de banda específicos a los servicios.
        </p>
        <h1>Super Admin (General Management)</h1>
        <p>
        Interfaz de usuario simplificada. Herramientas avanzadas de resolución de problemas en GUI (Ejemplo, Captura de paquetes). Interfaz completa de línea de comandos (CLI) accesible desde la GUI. Administración basadas en roles. Definiciones de objetos del sistema reutilizables para redes, servicios, hosts. Portal de usuario de autoservicio, para la configuración de VPN. Soporte para SNMP.
        </p>
        <h1>
        Firewall Routing and Services
        </h1>
        <p>
        ATFirewall controla el flujo del tráfico, y de esta manera abre dinámicamente y de una forma segura, puertos y un gran rango de protocolos. Permite crear controles de acceso por defecto a por lo menos 150 aplicaciones/servicios/protocolos predefinidos. Protege implementaciones de VoIP, soportando H323 v2/3/4 (incluido h.225 v.2/3/3 y h.254 v3/5/7), SIP. MGCP y SCCP. Incluye la posibilidad de crear NATs dinámicos (N-1 o Hide) y estáticos, permitiendo trasladar direcciones IP y puertos origen y destino, en un mismo paquete y en una sola regla. Tiene opción de negar los parámetros de origen o destino. La comunicación entre la administración y el Firewall es cifrada y autenticada. El firewall soporta métodos de autenticación, por usuario, cliente y por sesión.
        <br /><br />
        Los siguientes esquemas de autenticación son soportados por los módulos de firewall y VPN: RADIUS, certificados digitales. Permite autenticación con usuarios locales sin depender de conexiones o accesorios externos. Soporta DHCP en modos server y relay. El firewall puede conectarse en modo transparente (bridged mode). EL Firewall soporta Alta Disponibilidad y Balanceo de Carga con sincronización de estados, incluyendo todo el licenciamiento necesario para que los dos equipos trabajen en clúster activo/pasivo. El Firewall soporta redundancia a enlaces, sin la necesidad de una licencia adicional o software. Soporta tanto una CA Interna como una CA externa provista por un tercero. Soporta 3DES y AES-256 para las fases I y II de IKE. Soporta los siguientes grupos Diffie-Hellman: Grupo 1 (768 bit), Grupo 2 (1024 bit), Grupo 5 (1536 bit), Grupo 14 (2048 bit), entre otros. Soporta integridad de datos con md5 y sha1. Zona de aislamiento y soporte de políticas basadas en zonas. Zonas por defecto para LAN, WAN, DMZ, VPN. Zonas personalizadas de LAN o DMZ. Enrutamiento: estático. Balanceo de enlaces (WAN link balancing): múltiples conexiones a internet, auto-link health check, automatic failover, balanceo y reglas de trayectoria múltiples (multipath rules). El sistema operativo está integrado con IPv4 e IPv6. Soporta las topologías VPNs site-to-site: todos a todos, sitio remoto a través del sitio central hacia otro sitio remoto.


        </p>
      </div>
      <div className="simpleSection mb-4">
        
        <div className="tabsWrapper">
          <Tabs>
            <TabList>
              <Tab>Opciones de VPN</Tab>
              <Tab>Cliente SSL VPN</Tab>
              <Tab>Filtrado web</Tab>
              <Tab>Características de Antispam</Tab>
              <Tab>Reportes e historial</Tab>
              <Tab>Antivirus</Tab>
              <Tab>IPS/IDS</Tab>
            </TabList>

            <TabPanel>
              <p>
                <b>PSec, SSL, PPTP, L2TP, (iOS y Android), Windows, Linux, Mac.</b>
                <ul className="ml-2">
                  <li>
                    Clientless Portal usando unicamente el portal de auto
                    servicio cifrada HTML5 con soporte para RDP, HTTP, HTTPS,
                    SSH, Telnet y VNC.
                  </li>
                  <li>
                    El administrador puede aplicar reglas de control de tráfico,
                    al interior de la VPN. Soporte a compresión IP para VPNs
                    client-to-site y site-to-site.
                  </li>
                  <li>Cliente VPN Ipsec (VPN IPsecClient)</li>
                  <li>Autentificación: Pre-Shared Key (PSK), PKI (X.509).</li>
                  <li>
                    Encriptación: AES (128/192/256), DES, 3DES (112/168),
                    Blowfish, RSA (hasta 2048 Bit), DH groups 1/2/5/14, MD5 y
                    SHA-256/384/512.
                  </li>
                  <li>
                    Soporte para NAT-transversal. Client-monitor gráfico para la
                    visión general del estado de conexión. Lisencias ilimitadas
                    para clientes VPN.
                  </li>
                </ul>
              </p>
            </TabPanel>
            <TabPanel>
              <b>Soporte para iOS, Android y Licencias ilimitadas para usuarios
                concurrentes.</b>
            <ul className="ml-2">
              <li>Soporte de perfiles para
                diferentes niveles de acceso.</li>
                <li>Soporte para RC4 (128 bits), 3DES
                (128 y 256bits) y AES (128 y 256bits).</li>
                <li>Trabaja para todo
                firewall, independientemente del proxy y NAT.</li>
                <li>La solución tiene
                la opción de reforzar simultáneamente el control de login
                mediante el bloqueo de sesiones concurrentes desde el mismo
                usuario.</li>
                <li>La solución debe permitir el acceso a aplicaciones Web.</li>
                <li>Comprobada SSL-(TLS)-based security</li>
            </ul>
            </TabPanel>
            <TabPanel>
              <b>Filtrado de navegación basado en usuario de forma transparente
                sin la necesidad de configurar un proxy en el navegador cuando 
                <Link to="/soluciones/at-proxy" className="atLink"> ATProxy </Link> está integrado a Active Directory.</b>
            <ul className="ml-2">
              <li>El filtrado de URL es
                basado en categorías.</li>
              <li>Base de datos de filtro de URL con sitios
                ecuatorianos clasificados por categorias.</li>
              <li>Políticas basadas en
                usuarios, grupos, tiempo o redes.</li>
              <li>Navegación basada en cuotas de
                tiempo.</li>
              <li>Escaneo de malware: bloqueo de toda forma de virus, web
                malware, trojanos y spyware sobre HTTP/S, FTP y correo basado en
                web.</li>
              <li>Protección contra malware de web avanzado con emulación de
                JavaScript.</li>
                <li>Live Protection en tiempo real en la nube para las
                búsquedas de la última información de amenazas Permite la
                creación de excepciones basadas en la definición de objetos de
                red.</li>
                <li>
                Permite al administrador, negar o aceptar URLs específicos,
                que no necesariamente están definidos en una categoría, para
                poder ser utilizados en la definición de nuevas regla.
                </li>
                <li>
                El
                Filtrado URL tiene la capacidad de bloquear granularmente sitios
                basado en Web 2.0. Escaneo HTTP y HTTPS sobre una base por
                usuario o la política de red con reglas personalizables y
                excepciones.
                </li>
                <li>
                La detección y ejecución de protocolo SSL
                tunnelling.
                </li>
                <li>
                Validación de certificados. Alto rendimiento de
                caching en contenido web.
                </li>
                <li>
                Filtrado de tipo de archivo por MIME
                type, extensión y tipos de contenido activo (por ejemplo
                ActiveX, applets, cookies, etc.) Control de ancho de banda por
                usuario.
                </li>
            </ul>
              <p>
                            
              </p>
            </TabPanel>
            <TabPanel>
              <b>Integración con motores de antivirus de varias
                marcas.</b>
            <ul className="ml-2">
              <li>Definición de Reglas personalizadas por el administrador. Módulo
                de auditoría.</li>
                <li>
                Permite tener un registro histórico de acciones
                del usuario administrador.
                </li>
                <li>Acciones como: Creación de políticas
                nuevas, eliminadas, deshabilitadas, cambiadas.</li>
                <li>Permite la
                creación de políticas basadas en listas de control propias y
                públicas.</li>
                <li>Proporciona una interfaz que permite la visualización
                previa de los correos electrónicos en cola.</li>
                <li>Ofrece un mecanismo
                para el bloqueo de adjuntos de correo electrónico en base a
                criterios tales como formatos de archivo permitidos, archivos de
                uso común, archivos de formato desconocido o no confiable,
                tamaño del adjunto.</li>
                <li>Permite la visualización previa de registros
                de eventos en un histórico el cual puede filtrar en base a
                métricas tales como: correo origen, correo destino, asunto,
                entre otros.</li>
                <li>Permite la creación y gestión de listas blancas
                propias.</li>
                <li>Permite la creación y gestión de listas negras propias.
                Permite la creación y gestión de excepciones propias.</li>
                <li>Reglas
                basadas en un puntaje configurable.</li>
                <li>Soporte para SNMP.</li>
                <li> Cuarentena SMTP: vista y liberación de mensajes que se mantienen
                en cuarentena. </li>
            </ul>
 
            </TabPanel>
            <TabPanel>
              <b>Gestión de registros y alertas según criterios comunes y
                personalizables.</b>
              <ul className="ml-2">
                <li>El sistema cuenta con un registro histórico que
                permite la búsqueda rápida dentro de un período de tiempo,
                permite filtrar por rango de fechas, origen, destino, asunto,
                estado de envío, contenido adjunto, tamaño, estado de envío,
                razón de bloqueo. Generación de reportes en formato de Microsoft
                Excel (*.xlsx).</li>
                <li>Estadísticas de la información de correos
                enviados analizados y limpios, bloqueados, clasificados como
                spam, potencialmente peligrosos, neutralizados, con adjuntos
                neutralizados, con adjuntos eliminados, eliminados.</li>
                <li>Generación
                de informes de estado y eventos de: detecciones, bloqueos,
                actualizaciones etc.</li>
                <li>Reporte sobre cantidad de recursos
                empleados (CPU, memoria RAM).</li>
                <li>El sistema Antispam se integra con
                servidores de correo como: Zimbra, Exchange entre otros.
                Integración con sistemas syslog. Completo visor de registros.</li>
                <li> Reportes personalizados.</li>
                <li>Integración con sistemas syslog.</li>
                <li>Completo visor de registros.</li>
                <li>Reporte de la red y amenaza de los
                ataques de intrusos.</li>
                <li>Reporte de VPNs.</li>
              </ul>
             
            </TabPanel>
            <TabPanel>
              <b>Bloqueo de virus para los protocoloss SMTP, FTP, HTTP
                Antispyware basado en patrones.</b>
              <ul className="ml-2">
                <li>Realiza descompresión de
                archivos.</li>
                <li>Capacidad para examinar contenido de archivos ZIP,
                RAR, Tar, Gzip, Bzip2, MS OLE2, MS Cabinet, MS CHM y MS SZDD.</li>
                <li>Configuración administrable por tamaño de archivos.</li>
                <li>Ofrece un
                mecanismo para el bloqueo de adjuntos de correo electrónico en
                base a criterios tales como formatos de archivo permitidos,
                archivos de uso común, archivos de formato desconocido o no
                confiable, tamaño del adjunto.</li>
                <li>Avanzada herramienta de
                actualización con soporte para firmas digitales y consultas
                basadas sobre DNS.</li>
                <li>Múltiples firmas para detectar amenazas.</li>
              </ul>

            </TabPanel>
            <TabPanel>
              <b>Se implementa un lenguaje de firma completo para hacer match con
                amenazas conocidas, infracciones de políticas y comportamiento
                malicioso.</b>
              <ul className="ml-2">
                <li>
                También detecta muchas anomalías en el tráfico que
                inspecciona, es capaz de utilizar el conjunto de reglas
                especializadas Emerging Threats y el conjunto de reglas VRT.
                </li>
                <li>
                Una
                sola instancia es capaz de inspeccionar el tráfico de varios
                gigabits.
                </li>
                <li>El motor está construido alrededor de una base de
                código multithread, moderna, limpia y altamente escalable.
                Existe compatibilidad nativa para la aceleración de hardware de
                varios proveedores y a través de PF_RING y AF_PACKET.</li>
                <li>Detecta
                automáticamente protocolos como HTTP en cualquier puerto y
                aplicará la lógica adecuada de detección y registro.</li>
                <li>Esto ayuda
                enormemente a encontrar malware y canales CnC.</li>
                <li>Registra solicitudes HTTP, registra y almacena certificados TLS,
                extrae archivos de flujos y almacena en el disco.</li>
                <li>El soporte
                completo de captura pcap permite un análisis sencillo.</li>
                <li>Registro
                y análisis TLS / SSL: Registra todos los intercambios clave para
                su análisis.</li>
                <li>Una excelente manera de asegurarse de que su red no
                sea víctima de una autoridad certificadora menos que confiable.</li>
                <li>Adaptable, el lenguaje de scripting específico de dominio
                permite políticas de monitoreo específicas.</li>
                <li>Eficiente, dirigida
                a redes de alto rendimiento y se usa operacionalmente en una
                variedad de sitios.</li>
                <li>Flexible, no se restringe a ningún enfoque
                de detección particular y no depende de las firmas
                tradicionales.</li>
                <li>Registra exhaustivamente lo que ve y proporciona
                un archivo de alto nivel de la actividad de una red.</li>
                <li>Se conecta
                con otras aplicaciones para el intercambio de información en
                tiempo real.</li>
              </ul>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </Layout>
  )
}

export default atfirewall
