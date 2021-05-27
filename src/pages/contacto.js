import * as React from "react"
import Layout from "../components/layouts/main-layout"
import Seo from "../components/seo"
import ContactForm from "../components/ContactForm"

function ContactoPage() {
  return (
    <Layout>
      <Seo title="Contacto" />
      <div className="navSpacer"/>
      <div className="simpleSection">
        <div className="simpleWrapper">
          <ContactForm/>
        </div>
      </div>
      <div className="navSpacer"/>
    </Layout>
  )
}

export default ContactoPage