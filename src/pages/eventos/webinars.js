import * as React from "react"
import Layout from "../../components/layouts/main-layout"
import Seo from "../../components/seo"
import Lottie from '../../components/Lottie'
import empty from '../../animations/empty-state.json'

function WebinarsPage() {
  return (
    <Layout>
      <Seo title="Webinars" />
      <div className="errorFullScreen">
        <div className="simpleSection">
        <h1>
        No tenemos webinarios pendientes. <br /> Te haremos saber cuando tengamos uno &nbsp;
          <span role="img" aria-label="smilie-emoji">
            😄
          </span>
        </h1>
        <br /><br />
        <div className="lottieDesktop">
          <Lottie src={empty} width={500} loop={true} />
        </div>
        <div className="lottieMobile">
          <Lottie src={empty} width={300} loop={true} />
        </div>
        </div>
      </div>
    </Layout>
  )
}

export default WebinarsPage