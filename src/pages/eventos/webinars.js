import * as React from "react"
import Layout from "../../components/layouts/main-layout"
import Seo from "../../components/seo"

function WebinarsPage() {
  return (
    <Layout>
      <Seo title="Webinars" />
      <div className="simpleSection">
        <div className="simpleWrapper">
          <h1>Esta es la página de Webinars</h1>
        </div>
      </div>
    </Layout>
  )
}

export default WebinarsPage