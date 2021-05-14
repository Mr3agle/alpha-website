import * as React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import Header from "../Header"
import Footer from "../Footer"
// import "./main-layout.scss"

class Layout extends React.Component {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)
  componentDidMount(){
    window.addEventListener("scroll", this.handleScroll)
  }
  componentWillUnmount(){
    window.addEventListener("scroll", this.handleScroll)
  }

  handleScroll = () => {
    if (window.scrollY <= 100) {
      document.querySelector('.toTopBtn').classList.add('hideToTopBtn')
    }else{
      document.querySelector('.toTopBtn').classList.remove('hideToTopBtn')
    }
  }

  render() {
    return (
      <>
        <Header/>
        <a href="#headerTop" className="toTopBtn">
          <i className="bx bxs-chevron-up"/>
        </a>
        <div>
          <main>
            {/* {children} */}
            {this.props.children}
          </main>
        </div>
        <Footer/>
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
