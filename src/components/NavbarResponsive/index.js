import * as React from 'react'
import {Link} from 'gatsby'

import './navbarResponsive.scss'

class NavbarResponsive extends React.Component{
    render(){
        const collapse = () =>{
            document.querySelector('.mainNavResponsive').style.height = '0vh'
            this.toggled = false
        }
        return(
            <nav className='mainNavResponsive'>

                <div className='navLinkListResponsive' onClick={collapse}>
                    <div >
                        <Link to="/" className='navLinkResponsive'>
                            Inicio
                        </Link>
                    </div>   
                    <div >
                        <Link to="/nosotros" className='navLinkResponsive'>
                            Nosotros
                        </Link>
                    </div>   
                    <div>
                        <Link to="/certificados-ssl/" className='navLinkResponsive'>
                            SSL
                        </Link>
                    </div>   
                    <div>
                        <Link to="/productos/" className='navLinkResponsive'>
                            Productos
                        </Link>
                    </div>   
                    <div>
                        <Link to="/contacto/" className='navLinkBtnResponsive'>
                            Contacto
                        </Link>
                    </div>   
                </div>
            </nav>
        )
    }
}

export default NavbarResponsive