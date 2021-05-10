import * as React from 'react'
import {Link} from 'gatsby'

// import * as styles from './navbar.module.scss'
import './navbar.scss'
import Logo from '../../images/logo/AT-Logo-Complete-Black.svg'

class Navbar extends React.Component{
    render(){
        return(
            <nav className='mainNav'>
                <div className='logoContainer'>
                    <Link to="/">
                        <img className='logo' src={Logo} alt="AT-Logo" />
                    </Link>
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
                        <Link to="/productos/" className='navLink'>
                            Productos
                        </Link>
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