import * as React from "react"
import { Link } from "gatsby"
import "./navbar.scss"
import "boxicons/css/boxicons.min.css"
import Hamburger from "hamburger-react"
import Logo from "../../images/logo/AT-Logo-Complete-Black.svg"
// import LogoDark from "../../images/logo/AT-Logo-Complete-White.svg"
import { NavbarData } from "./navbarData"
// import * as gsap from "gsap"

function Navbar() {
  const [menuActive, setMenuActive] = React.useState(false)
  const show = () => setMenuActive(!menuActive)

  // const isDarkFn = () => {

  //   console.log("is Nav Dark: " + isDark);
  //   if(isDark){
  //     return(
  //       <Link to="/">
  //         <img id="alphaLogo" className="logo" src={LogoDark} alt="AT-Logo" />
  //       </Link>
  //     )
  //   }else{
  //     return(
  //       <Link to="/">
  //         <img id="alphaLogo" className="logo" src={Logo} alt="AT-Logo" />
  //       </Link>
  //     )
  //   }
    
  // }

  // let tl = new gsap.gsap.timeline({delay: 0.3})

  // React.useEffect(()=>{
  //   tl.from('.logoContainer', {x: -100, opacity:0, ease: gsap.Power1.easeOut, duration: 0.7})
  //   tl.from('.navLinkList', {x: 100, opacity:0, ease: gsap.Power1.easeOut, duration: 0.7}, "-=0.5")
  // }, [])


  return (
    <nav className="mainNav">
      <div className="logoContainer">
      <Link to="/">
        <img id="alphaLogo" className="logo" src={Logo} alt="AT-Logo" />
      </Link>
      </div>
      <div id="hamburgerMenu">
        <Hamburger
          hideOutline={false}
          rounded
          size={20}
          toggle={show}
          toggled={menuActive}
        />
        <nav
          className={
            menuActive
              ? "mainNavResponsive mainNavResponsiveActive"
              : "mainNavResponsive"
          }
        >
          <div className="navLinkListResponsive" onClick={show} role="none">
            {
              NavbarData.map((item)=>{
                return(
                  <div key={item.id}>
                    <Link to={item.path} className={item.classNameResponsive}>
                      {item.name}
                    </Link>
                  </div>
                )
              })
            }
          </div>
        </nav>
      </div>
      <div className="navLinkList">
        {
          NavbarData.map((item) => {
            return (
              <div key={item.id}>
                <Link to={item.path} className={item.className}>
                  {item.name}
                </Link>
              </div>
            )
          })
        }
      </div>
    </nav>
  )
}

export default Navbar
