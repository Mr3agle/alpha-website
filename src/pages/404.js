import * as React from "react"
import {Link} from "gatsby"
// import Layout from "../components/layouts/main-layout"
// import Seo from "../components/seo"
import Lottie from "../components/Lottie"
import notFound from "../animations/error-not-found.json"


const NotFoundPage = () => (
  <>
    <div className="navSpacer"/>
    <div class="simpleSection">
      <div class="sectionWrapper">
        <span className="rbigHeading">404</span>
        <p>¡Vaya! No pudimos encontrar lo que buscabas <span role="img" aria-label="sad-emoji">😓</span></p>
        <Lottie src={notFound} width={500} loop={true} />
        <Link to="/"> Volver a Alpha </Link>
      </div>
    </div>
  </>
)

export default NotFoundPage
