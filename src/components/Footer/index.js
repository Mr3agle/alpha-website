import * as React from "react"
import "./footer.scss"
import { Link } from "gatsby"
// import ATSign from "../../images/FirmaDigital02-300x88.png"
import ATSignV from "../../images/FirmaDigital02-300x88.svg"
import GlobalSign from "../../images/Globalsign.svg"
import Zimbra from "../../images/zimbra.svg"
import Mcafee from "../../images/mcafee.svg"
// import SgsSign from "../../images/sgs-sign.png"
// import SgsSign from "../../images/sgs-sign.png"

const Footer = () => (
  <footer>
    <div className="footerContent">
      <div className="footerColumn ATSign">
        <h1>Signed by</h1>
        <img width="200px" src={GlobalSign} alt="Global Sign" />
        <div className="mt-1" />
        <img width="200px" src={ATSignV} alt="At Sign" />
        <img width="160px" src={Zimbra} alt="At Sign" />
        <img width="100px" src={Mcafee} alt="At Sign" />
      </div>
      <div className="footerColumn">
        <h1>Servicios</h1>
        <ul>
          <li>
            <Link to="/eventos/webinars">
              <i className="bx bx-camera-home"></i>
              Webinars
            </Link>
          </li>
          <li>
            <Link to="/soluciones/at-drone">
              <i className="bx bx-loader"></i>
              AT Drone
            </Link>
          </li>
          <li>
            <a
              href="https://www.globalsign.com/es/managed-ssl"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bx bx-lock-alt"></i>
              SSL Global Sign
            </a>
          </li>
          <li>
            <Link to="/contacto">
              <i className="bx bx-user-circle"></i>
              Consultorías
            </Link>
          </li>
          <li>
            <Link to="/contacto">
              <i className="bx bx-bug"></i>
              Análisis de Vulnerabilidad
            </Link>
          </li>
        </ul>
      </div>
      <div className="footerColumn">
        <h1>Contacto</h1>
        <ul>
          <li>
            <a
              href="https://goo.gl/maps/UevBmkUba1DJtfRr9"
              rel="noreferrer"
              target="_blank"
            >
              <i className="bx bx-map"></i>
              Gabriel Araujo E6-136 y José María Batodano. Quito – Ecuador.
            </a>
          </li>
          <li>
            <a href="tel:593022814291">
              <i className="bx bx-phone"></i>
              (+593) 02 281 4291
            </a>
          </li>
          <li>
            <a href="tel:593023281146">
              <i className="bx bx-phone"></i>
              (+593) 02 328 1146
            </a>
          </li>
          <li>
            <a href="mailto:contacto@alphaside.com">
              <i className="bx bx-at"></i>
              contacto@alphaside.com
            </a>
          </li>
          <li className="socialList">
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/AlphasideEc"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className="bx bxl-facebook-square"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/alphasideec/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className="bx bxl-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCjRn9n5mexcXr3UAvqYV9Gw/featured"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className="bx bxl-youtube"></i>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div className="footerMap"></div>
    <div className="copyRight">
      Copyright &copy;{new Date().getFullYear()} Alpha Technologies
    </div>
  </footer>
)

export default Footer
