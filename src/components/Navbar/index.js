import * as React from "react"
import { Link } from "gatsby"
// import { useState } from "react"
// import * as styles from './navbar.module.scss'
import "./navbar.scss"
import "boxicons/css/boxicons.min.css"
import Hamburger from "hamburger-react"
// import NavbarResponsive from "../NavbarResponsive"
import Logo from "../../images/logo/AT-Logo-Complete-Black.svg"

function Navbar() {


    const [menuActive, setMenuActive] = React.useState(false)
    const show = () => setMenuActive(!menuActive)
    
    return (
      <nav className="mainNav">
        <div className="logoContainer">
          <Link to="/">
            <img className="logo" src={Logo} alt="AT-Logo" />
          </Link>
        </div>
        {/* <div role="button" tabIndex={0} id="hamburgerMenu" onClick={toggleHamburger} onKeyDown={toggleHamburger}>
                    <i className="bx bx-menu-alt-right bx-md"/>
                </div> */}
        <div id="hamburgerMenu">
        <Hamburger hideOutline={false} rounded size={20}  toggle={show} toggled={menuActive}/>
          <nav className={menuActive ? 'mainNavResponsive mainNavResponsiveActive' : 'mainNavResponsive'}>
            <div
              className="navLinkListResponsive"
              onClick={show}
              role="none"
            >
              <div>
                <Link to="/" className="navLinkResponsive">
                  Inicio
                </Link>
              </div>
              <div>
                <Link to="/nosotros" className="navLinkResponsive">
                  Nosotros
                </Link>
              </div>
              <div>
                <Link to="/certificados-ssl/" className="navLinkResponsive">
                  SSL
                </Link>
              </div>
              <div>
                <a href="#productos" className="navLinkResponsive">
                  Productos
                </a>
              </div>
              <div>
                <Link to="/contacto/" className="navLinkBtnResponsive">
                  Contacto
                </Link>
              </div>
            </div>
          </nav>
          {/* <Hamburger
            hideOutline={false}
            rounded
            size={20}
            onToggle={toggled => {
              if (toggled) {
                show()
                console.log(toggled)
              } else {
                collapse()
                console.log(toggled)
              }
              
            }}
          /> */}
          
        </div>
        <div className="navLinkList">
          <div>
            <Link to="/" className="navLink">
              Inicio
            </Link>
          </div>
          <div>
            <Link to="/" className="navLink">
              Nosotros
            </Link>
          </div>
          <div>
            <Link to="/certificados-ssl/" className="navLink">
              SSL
            </Link>
          </div>
          <div>
            <a href="#productos" className="navLink">
              Productos
            </a>
          </div>
          <div>
            <Link to="/certificados-ssl/" className="navLinkBtn">
              Contacto
            </Link>
          </div>
        </div>
      </nav>
    )
  
}

export default Navbar
