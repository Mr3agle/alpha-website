import * as React from "react"
import { Link } from "gatsby"
import Lottie from "../../components/Lottie"
import check from "../../animations/checkmark.json"

const GraciasPage = () => {

  return (
    <div className="simpleSection vh100">
      <div className="simpleWrapper cardH">
        <div className="lottieDesktop">
          <Lottie src={check} width={500} loop={false} />
        </div>
        <div className="lottieMobile">
          <Lottie src={check} width={300} loop={false} />
        </div>

        <div className="cardHDescription">
            <h1>¡Hemos recibido tu mensaje!</h1>
            <p>
            En breve nos pondremos en contacto
            </p>
            <Link to="/"> <i className="bx-fw bx bxs-chevron-left"/> Volver a Alpha</Link>
          </div>
        <br />
      </div>
    </div>
  )
}

export default GraciasPage
