import * as React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import Header from "../Header"
import Footer from "../Footer"
import ToTopBtn from "../ToTopBtn"
// import "./main-layout.scss"

class Layout extends React.Component {

  static defaultProps = {
    bgDark: false
  }

  render() {
    return (
      <>
        <Header isDark={this.props.bgDark }/>
        <ToTopBtn/>
        <div>
          <main>
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
