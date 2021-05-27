import * as React from "react"
import Layout from "../components/layouts/main-layout"
import Seo from "../components/seo"
import ContactForm from "../components/ContactForm"

function ContactoPage() {
  return (
    <Layout>
      <Seo title="Contacto" />
      <div className="simpleSection">
        <div className="simpleWrapper">
          <h1>Esta es la página contacto</h1>
          <ContactForm/>
        </div>
      </div>
    </Layout>
  )
}

export default ContactoPage