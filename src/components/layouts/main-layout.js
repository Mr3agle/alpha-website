import * as React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import Header from "../Header"
import Footer from "../Footer"
import ToTopBtn from "../ToTopBtn"
// import "./main-layout.scss"
import WhatsAppWidget from "react-whatsapp-widget"
import 'react-whatsapp-widget/dist/index.css'

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
            <WhatsAppWidget 
            style={{
              positio: "fixed !important"
            }}
            phoneNumber="+593980950129"
            textReplyTime="Responderemos cuanto antes"
            message="¡Hola! 👋🏼 Cuéntamos cómo podemos ayudarte..."
            companyName="Alpha Technologies"
            sendButton="Enviar"
            />
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
