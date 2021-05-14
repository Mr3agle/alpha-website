import * as React from 'react'
import {Link} from 'gatsby'

// import * as styles from './navbar.module.scss'
import './navbar.scss'
import 'boxicons/css/boxicons.min.css'
import Hamburger from 'hamburger-react'
import NavbarResponsive from '../NavbarResponsive'
import Logo from '../../images/logo/AT-Logo-Complete-Black.svg'

class Navbar extends React.Component{

    render(){

        const show = () =>{
            document.querySelector('.mainNavResponsive').style.height = '100vh'
        }
        
        const collapse = () =>{
            document.querySelector('.mainNavResponsive').style.height = '0vh'
        }

        return(
            <nav className='mainNav'>
                <div className='logoContainer'>
                    <Link to="/">
                        <img className='logo' src={Logo} alt="AT-Logo" />
                    </Link>
                </div>
                {/* <div role="button" tabIndex={0} id="hamburgerMenu" onClick={toggleHamburger} onKeyDown={toggleHamburger}>
                    <i className="bx bx-menu-alt-right bx-md"/>
                </div> */}
                <div id="hamburgerMenu">
                    <NavbarResponsive/>
                    <Hamburger hideOutline={false} rounded size={20} onToggle={toggled => {
                        if (toggled) {
                            show()
                            console.log(toggled);
                        } else {
                            collapse()
                            console.log(toggled);
                        }
                    }} />
                </div>
                <div className='navLinkList'>
                    <div >
                        <Link to="/" className='navLink'>
                            Inicio
                        </Link>
                    </div>   
                    <div >
                        <Link to="/" className='navLink'>
                            Nosotros
                        </Link>
                    </div>   
                    <div>
                        <Link to="/certificados-ssl/" className='navLink'>
                            SSL
                        </Link>
                    </div>   
                    <div>
                        <a href="#productos" className='navLink'>
                            Productos
                        </a>
                    </div>   
                    <div>
                        <Link to="/certificados-ssl/" className='navLinkBtn'>
                            Contacto
                        </Link>
                    </div>   
                </div>
            </nav>
        )
    }
}

export default Navbar