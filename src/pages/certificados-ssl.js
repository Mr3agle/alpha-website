import * as React from "react"
import Layout from "../components/layouts/main-layout"
import Seo from "../components/seo"

function CertificadosSSLPage() {
  return (
    <Layout>
      <Seo title="SSL" />
      <div className="simpleSection">
        <div className="simpleWrapper">
          <h1>Esta es la página de certificados</h1>
        </div>
      </div>
    </Layout>
  )
}

export default CertificadosSSLPage