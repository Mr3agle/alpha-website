import * as React from 'react'
import {Link} from 'gatsby'

import * as styles from './navbar.module.scss'

const Navbar = () => (

    <nav className={styles.mainNav}>
        <div>
            <img src='https://cdn.freelogovectors.net/wp-content/uploads/2018/10/globalsign-logo.jpg' alt="global-sign" />
        </div>
        <div>
        aqui va el menu de navegación
        <br/>
        <Link to={'/'}></Link> 
        </div>
    </nav>

)

export default Navbar