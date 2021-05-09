import * as React from 'react'
import {Link} from 'gatsby'

import * as styles from './navbar.module.scss'
import Logo from '../../images/logo/AT-Logo-White.svg'

const Navbar = () => (

    <nav className={styles.mainNav}>
        <div>
            <Link to="/">
                <img className={styles.logo} src={Logo} alt="AT-Logo" />
            </Link>
        </div>
        <div>
        aqui va el menu de navegación
        <br/>
        <Link to="page-2">Página 2</Link>
        </div>
    </nav>

)

export default Navbar