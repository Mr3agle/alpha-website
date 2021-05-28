import * as React from 'react';

import './header.scss'
import Navbar from '../Navbar'

const Header = (props) => {

  const [scrolledNav, setScrolledNav] = React.useState(false)

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScrolledNav(true)
    }else{
      setScrolledNav(false)
    }
  }
  React.useEffect(()=>{

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
    
  })

    return(
      <header className={scrolledNav ? 'navHeader scrolledNav' : 'navHeader'}>
        <Navbar darkLogo={props.isDark}/>
      </header>
    )
  
}

export default Header;