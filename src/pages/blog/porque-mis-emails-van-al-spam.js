import React from "react"
import Layout from "../../components/layouts/main-layout"
import Seo from "../../components/seo"
import atMailing from "../../images/ATMailing-pkg.png"
import { Link } from "gatsby"

function BlogPost() {
  return (
    <Layout bgDark={true}>
      <Seo title="Porque mis emails van a la carpeta de SPAM" />
      <section
        className="blogPostHero"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.3)),url('https://images.pexels.com/photos/193003/pexels-photo-193003.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')`,
        }}
      >
        <div className="infoPostWrapper">
          <div className="postTitle">
            <h1>¿Porqué mis emails van a la carpeta de SPAM?</h1>
          </div>
          <div className="postBreadcrums">Blog - ATMailing</div>
        </div>
      </section>

      <div className="blogSection">
        <div className="navSpacer" />

        <h3 className="titleUnderLineL mb-4 italics">
          Al rededor del mundo los correos electrónicos que llegan a la bandeja
          de entrada tienen un promedio del 83%, esto significa que 2 de cada 10
          emails se dirigen directamente a la carpeta de SPAM.
        </h3>
        <br />
        <p>
          Invertir en una campaña de email marketing tiene su costo, y que al
          final los correos no estén llegando a la audiencia se traduce en una
          pérdida de ingreso potencial porque el producto o servicio que ofrece
          no está cumpliendo su función.
        </p>
        <br />
        <p>
          Por esta razón existen herramientas de marketing como{" "}
          <Link to="/soluciones/at-mailing" className="atLink">
            AT Mailing
          </Link>{" "}
          que permite enviar sus correos electrónicos y tener las métricas
          necesarias para controlar todo el proceso de la campaña.
        </p>
        <br />
        <p>
          El seguimiento de la tasa de apertura es una de las métricas de
          seguimiento de marketing por correo electrónico más importantes que
          los especialistas en marketing deben controlar.
        </p>
        <br />
        <p>
          Una tasa de apertura baja podría ser una señal de varios problemas con
          tu marketing, incluida una copia deficiente de la línea de asunto. Sin
          embargo, también podría indicar que tus suscriptores simplemente no
          ven el correo electrónico. Esto podría deberse a que el correo
          electrónico se ha dirigido a tu carpeta de correo no deseado en lugar
          de a tu bandeja de entrada.
        </p>
        <br />
        <p className="italic">
          Entonces nos preguntamos: ¿Por qué mis correos electrónicos se envían
          a correo basura?
        </p>
        <br />
        <h2>
          Estas son las principales razones por las que tus emails podrían estar
          llegando a la carpeta de spam
        </h2>
        <br />
        <p>
          <ol className="ml-3">
            <li>La audiencia correcta</li>
            <li>Tu Dirección IP es o fue usada para enviar SPAM</li>
            <li>El asunto del correo no impacta</li>
            <li>El email fue reportado como no deseado</li>
            <li>Están rompiendo las reglas</li>
            <li>Los email no están siendo abiertos</li>
            <li>La lista de receptores está desactualizada</li>
          </ol>
        </p>
        <br />
        <h1>La audiencia no es la correcta</h1>
        <p>
          Cuando los correos electrónicos se marcan incorrectamente como spam,
          podría deberse a que tiene bajas tasas de interacción. Una de las
          causas reveladoras de las bajas tasas de participación es, en primer
          lugar, tener la audiencia incorrecta en tu lista de correo
          electrónico.
        </p>
        <br />
        <p>
          Ahora, sabemos que todos los especialistas en marketing intentan hacer
          crecer las listas de correo electrónico para que sea lo más grande
          posible. Y teniendo en cuenta la importancia del marketing por correo
          electrónico, deberían intentar mejorar estas lista de correo
          electrónico tanto como puedan.
        </p>
        <br />
        <p>
          Pero en lugar de simplemente conseguir más suscriptores, los
          especialistas en marketing deben centrarse en conseguir el tipo
          adecuado de suscriptores.
        </p>
        <h1>Tu Dirección IP es o fue usada para enviar SPAM</h1>
        <p>
          Incluso si nunca envías emails basura, tus correos electrónicos
          podrían ser marcados si tu dirección IP se usó para spam en el pasado.
        </p>
        <br />
        <p>
          Si envías tus campañas a través de un servicio de marketing por correo
          electrónico, el correo electrónico se entrega a través de sus
          servidores. Entonces, si incluso otro cliente envía spam, también
          podría afectar tu capacidad de entrega.
        </p>
        <br />
        <p>
          En general, debería estar bien si te limitas a un proveedor de
          servicios de correo electrónico de buena reputación. Y aunque no
          podemos verificar todos los proveedores de servicios de correo
          electrónico en esta publicación, recomendamos utilizar{" "}
          <Link to="/soluciones/at-mailing" className="atLink">
            AT Mailing
          </Link>{" "}
          puesto que la arquitectura con la que está construido evita el SPAM a
          toda costa.
        </p>
        <br />
        <h1>El asunto del correo no impacta</h1>
        <p>
          La línea de asunto es la primera impresión que tus correos
          electrónicos causan en los suscriptores, y es importante que la
          impresión sea buena.
        </p>
        <br />
        <p>
          Las líneas de asunto ya no juegan un papel importante en la
          determinación de la carpeta de correo no deseado / basura. En cambio,
          todos los principales proveedores de buzones de correo ahora
          consideran el compromiso como tu principal factor de influencia para
          saber dónde termina tu correo electrónico. La conclusión: las líneas
          de asunto pueden no influir en los proveedores, pero sí influyen en
          los usuarios: una interesante línea de asunto fomenta las aperturas y
          los clics, que luego se prestan a señales positivas para los
          proveedores de buzones de correo.
        </p>
        <br />
        <p>
          La conclusión: una alta participación significa que tus correos
          electrónicos probablemente continuarán llegando. ¿Con poca
          participación? Sus correos electrónicos pueden terminar como spam o
          basura. Por eso es tan importante probar y personalizar las líneas de
          asunto de forma regular.
        </p>
        <br />
        <p>
          Escribir una buena línea de asunto es tu primera línea de defensa
          contra estos filtros. Evite enviar líneas de asunto que puedan parecer
          fraudulentas a los lectores: palabras escritas en mayúsculas,
          puntuadas con numerosos signos de exclamación o el uso de términos
          "spam" notables como "ganador garantizado" y "obsequio". Escribir una
          línea de asunto eficaz puede ayudar a que tus correos electrónicos
          parezcan confiables para los usuarios, lo que aumenta el compromiso.
        </p>
        <br />
        <p>
          Personalizar tu línea de asunto también es una excelente manera de
          destacar entre los lectores. De hecho, los suscriptores tienen un 26%
          más de probabilidades de que los suscriptores abran los correos
          electrónicos personalizados.
        </p>
        <h1>El email fue reportado como no deseado</h1>
        <p>
          En algún momento u otro, un suscriptor probablemente marcará uno de
          tus correos electrónicos como spam. Debido a esto, los especialistas
          en marketing deben realizar un seguimiento del comportamiento de los
          suscriptores para detectar cualquier problema potencial.
        </p>
        <br />
        <p>
          Los proveedores de correo electrónico y los ISP también están
          rastreando los informes de spam. Esto significa que las campañas de
          correo electrónico futuras pueden enviarse a la carpeta de correo no
          deseado, ya sea que el destinatario individual haya marcado sus
          correos electrónicos como spam o no.
        </p>
        <h2>Envía emails solo a aquellos que hayan dado tu consentimiento</h2>
        <p>
          Las quejas de spam ocurren con mayor frecuencia cuando los usuarios
          reciben correos electrónicos sin tu consentimiento. Enviar correo a
          listas compradas aumentará tus posibilidades de ser filtrado como
          spam. Además, las listas compradas son simplemente poco éticas.
        </p>
        <br />
        <p>
          Haga crecer tu lista de manera orgánica a través de actualizaciones de
          contenido, contenido de boletines y obsequios. Incluso puede ir un
          paso más allá y requerir una doble suscripción. Esto requerirá que los
          usuarios confirmen que sí, que realmente se registraron para recibir
          tus correos electrónicos.
        </p>
        <h2>Procura que tu contenido sea relevante</h2>
        <p>
          Hay varias razones por las que alguien puede marcar tus correos
          electrónicos como spam. Una de esas razones es el contenido
          irrelevante. Si bien esto puede no ajustarse a la definición del
          diccionario de correo no deseado, la gente usará la marca de correo no
          deseado de todos modos, simplemente para filtrar tus bandejas de
          entrada y reducir el desorden.
        </p>
        <br />
        <p>
          Esto resalta la importancia de segmentar tu lista de correo
          electrónico y enviar contenido relevante a los suscriptores a los que
          atraerá más.
        </p>
        <h2>Déjales saber quien eres</h2>
        <p>
          Otra razón por la que las personas pueden marcar tu correo electrónico
          como spam es porque no reconocen de inmediato de quién es el correo
          electrónico.
        </p>
        <br />
        <p>
          Un buen diseño puede combatir este tipo de informes de spam. Indique
          claramente el nombre o logotipo de tu empresa en la parte superior de
          tu correo electrónico e incluya otras características de
          identificación. Esto asegurará que los suscriptores puedan ver
          inmediatamente de quién es el correo electrónico.
        </p>
        <br />
        <p>
          <b>
            El siguiente ejemplo es un excelente ejemplo de cómo identificar su
            empresa en un correo electrónico:
          </b>
        </p>
        <p style={{ textAlign: "center", margin: "2rem 0" }}>
          <img
            src="https://files.reallygoodemails.com/emails/u-r-l-so-beautiful.png"
            alt="U R L so beatiful"
          />
          <br />
          Tomado de:{" "}
          <a
            href="https://reallygoodemails.com/emails/u-r-l-so-beautiful"
            target="_blank"
            rel="noreferrer"
            className="atLink"
          >
            Really Good Emails
          </a>
        </p>
        <h1>Están rompiendo las reglas</h1>
        <p>
          En un esfuerzo por reducir el spam y hacer que los consumidores sean
          más conscientes de quién se comunica con ellos con mensajes de
          marketing, los gobiernos de todo el mundo han promulgado leyes y
          regulaciones de contacto digital.
        </p>
        <br />
        <p>
          En los Estados Unidos, estas regulaciones se describen como CAN-SPAM.
          Las empresas que quieran ponerse en contacto con los suscriptores de
          correo electrónico con fines de marketing deben seguir estas reglas.
        </p>
        <br />
        <p>
          Por ejemplo, debe incluir la dirección física de tu empresa como parte
          de tu correo electrónico. Los clientes necesitan saber dónde pueden
          encontrarlo y esta información debe mostrarse claramente en tu campaña
          de marketing.
        </p>
        <br />
        <p>
          Además, en cada correo electrónico se debe incluir un botón o enlace
          de exclusión visible y fácil de encontrar. También existen reglas
          sobre la creación de titulares falsos o engañosos.
        </p>
        <br />
        <p>
          Si bien puede dudar en mostrar claramente un enlace para darse de
          baja, es esencial cumplir con CAN-SPAM. Asegúrese de ofrecer un
          excelente contenido como parte de tus campañas de marketing por correo
          electrónico, y no tendrá que preocuparse de que las personas elijan
          cancelar la suscripción en grandes cantidades.
        </p>
        <h1>Los email no están siendo abiertos</h1>
        <p>
          Los proveedores de servicios de correo electrónico siguen de cerca qué
          correos electrónicos se abren a un ritmo elevado y cuáles no. Los
          correos electrónicos que se eliminan o archivan inmediatamente sin
          abrirse podrían considerarse spam, incluso si el destinatario no ha
          marcado el correo electrónico como tal. Esto resalta aún más la
          importancia de crear una lista de suscriptores de correo electrónico
          comprometidos.
        </p>
        <br />
        <p>
          Las tasas de apertura bajas pueden ser una señal de que tus líneas de
          asunto no son efectivas.
        </p>
        <br />
        <p>
          Es posible que le falte personalización, que la oferta no sea
          emocionante o que la línea de asunto parezca estar redactada de manera
          similar al correo no deseado, como discutimos anteriormente. La línea
          de asunto es tu oportunidad de captar la atención de tus suscriptores
          y convencerlos de que abran tu correo electrónico.
        </p>
        <br />
        <p>
          Si los proveedores de correo electrónico ven que tus correos
          electrónicos se abren a un ritmo adecuado, es menos probable que
          dirijan tus correos electrónicos a la carpeta de correo no deseado
          automáticamente.
        </p>
        <br />
        <p>
          El seguimiento de las tasas de apertura puede revelar qué líneas de
          asunto parecen resonar con los suscriptores y cuáles no. A medida que
          envía más correos electrónicos, puede ver cómo tus suscriptores están
          reaccionando a tus líneas de asunto simplemente monitoreando tu tasa
          de apertura y rastreando el promedio a lo largo del tiempo.
        </p>
        <br />
        <h1>La lista de receptores está desactualizada</h1>
        <p>
          Con el tiempo, tus suscriptores de correo electrónico pueden cambiar
          tu dirección de correo electrónico, dejar de usar la cuenta o salirse
          de la red. Cualquiera sea la razón, el envío de correos electrónicos a
          direcciones que ya no se utilizan puede contribuir a que los correos
          electrónicos se marquen como spam.
        </p>
        <br />
        <p>
          Como resultado, debe evaluar periódicamente tu lista de correo
          electrónico para los suscriptores que ya no interactúan con usted.
        </p>
        <br />
        <p>
          Una campaña de participación es una forma rápida de ver quién sigue
          interesado en tus correos electrónicos.
        </p>
        <p>
          Esta suele ser una oferta que les solicita que vuelvan a participar en
          tu lista de correo electrónico. A veces, se puede incluir una oferta
          especial con una campaña de participación para generar más entusiasmo.
        </p>
        <br />
        <p>
          Si los suscriptores no responden a la campaña de participación, pueden
          ser eliminados de tu lista de correo electrónico. Esto ayuda a
          aumentar tu tasa de apertura, elimina las cuentas inactivas y le
          permite concentrarse más en los suscriptores que aún están
          comprometidos con tu marca.
        </p>
        <br />
        <p>
          Completar regularmente este tipo de revisión de listas de correo
          electrónico asegura que tu lista se mantenga saludable a largo plazo.
        </p>
        <br />
        <p style={{ textAlign: "center", margin: "2rem 0" }}>
          <img
            src="https://files.reallygoodemails.com/emails/don-t-let-free-shipping-go-to-waste.png"
            alt="Rudys Barber Shop"
          />
          <br />
          Tomado de:{" "}
          <a
            href="https://reallygoodemails.com/emails/don-t-let-free-shipping-go-to-waste"
            target="_blank"
            rel="noreferrer"
            className="atLink"
          >
            Really Good Emails
          </a>
        </p>
        <h1 className>En resumen...</h1>
        <p>
          Entonces, ¿por qué mis correos electrónicos peden ser catalogados como
          correo basura?
        </p>
        <br />
        <p>
          Este es el grito frustrado de innumerables especialistas en marketing
          por correo electrónico que saben que tu contenido no es basura. Sin
          embargo, existen algoritmos y tecnologías predictivas que funcionan
          para proteger a los usuarios de correo electrónico del spam.
        </p>
        <br />
        <p>Y, a veces, estas herramientas se vuelven un poco hiperactivas.</p>
        <br />
        <p>
          Si encuentra que tus correos electrónicos terminan en la carpeta de
          correo no deseado con más frecuencia, es posible que desee considerar
          los consejos anteriores para asegurarse de obtener una mejor ubicación
          en la bandeja de entrada de tus suscriptores.
        </p>
        <br />
        <p>
          En Alpha Technologiesr, le brindamos las herramientas para diseñar
          mejores correos electrónicos y realizar un seguimiento de métricas
          importantes que pueden ayudarlo a evitar la carpeta de correo no
          deseado y aumentar las conversiones de tus suscriptores.
        </p>
      </div>
      <div className="simpleSection mb-4 mt-4">
        <div className="cardH">
          <div className="cardHImg">
            <img src={atMailing} alt="AT Mailing" />
          </div>
          <div className="cardHDescription">
            <h1>¡Prueba AT Mailing hoy mismo!</h1>
            <p>
              AT Mailing es una herramienta especial para el marketing digital
              que permite enviar hasta <b>1.000000 </b> correos diarios sin caer
              en listas negras o en la carpeta de SPAM.
            </p>
            <Link to="/soluciones/at-mailing">Pruébalo ahora</Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPost
