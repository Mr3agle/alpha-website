import * as React from 'react';
// import {Link} from 'gatsby'
// import * as styles from './header.module.scss'
import './header.scss'
import Navbar from '../Navbar'

class Header extends React.Component{

  componentDidMount(){
    window.addEventListener("scroll", this.handleScroll)
  }
  componentWillUnmount(){
    window.addEventListener("scroll", this.handleScroll)
  }

  handleScroll = () => {
    if (window.scrollY > 20) {
      document.querySelector('header').classList.add('scrolledNav')
    }else{
      document.querySelector('header').classList.remove('scrolledNav')
    }
  }

  render(isDark){
    return(
      <header className='navHeader'>
        <Navbar isDark={isDark}/>
      </header>
    )
  }
}

export default Header;