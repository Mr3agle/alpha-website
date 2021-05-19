import * as React from "react"
import Layout from "../components/layouts/main-layout"
import Seo from "../components/seo"

function SolucionesPage() {
  return (
    <Layout>
      <Seo title="Soluciones" />
      <div className="simpleSection">
        <div className="simpleWrapper">
          <h1>Esta es la página de productos</h1>
        </div>
      </div>
    </Layout>
  )
}

export default SolucionesPage