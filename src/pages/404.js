import * as React from "react"
import {Link} from "gatsby"
// import Layout from "../components/layouts/main-layout"
// import Seo from "../components/seo"
import Lottie from "../components/Lottie"
import notFound from "../animations/error-not-found.json"
import "boxicons/css/boxicons.min.css"

const NotFoundPage = () => (

    <div class="errorFullScreen">
        {/* <Lottie className="lottieDesktop" src={notFound} width={500} loop={true} />
        <Lottie className="lottieMobile" src={notFound} width={300} loop={true} /> */}
        <div className="lottieDesktop">
            <Lottie src={notFound} width={500} loop={true} />
          </div>
          <div className="lottieMobile">
            <Lottie src={notFound} width={300} loop={true} />
          </div>
        <span className="rbigHeading">404</span>
        <p>¡Vaya! No pudimos encontrar lo que buscabas <span role="img" aria-label="sad-emoji">😓</span></p>
        <Link to="/" className="primaryBtn"> Volver a Alpha </Link>

    </div>
)

export default NotFoundPage
