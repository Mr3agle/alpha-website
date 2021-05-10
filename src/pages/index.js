import * as React from "react"
import {Link} from 'gatsby'
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layouts/main-layout"
import Seo from "../components/seo"
import Lottie from '../components/Lottie'
import aSecurity from '../animations/isometric-tech-animation.json'
// import lockIcon from '../images/shield.svg'
// import WorldVideo from '../videos/technology-world-green.mp4'
// import WorldVideo from '../videos/Technology-geen-1.mp4'
// import WorldVideo from '../videos/World-Blue-bg.mp4'


const IndexPage = () => (
  <Layout>
    <Seo title="Inicio" />
    {/* <section>
      <video controlsList="nodownload" preload="true" playsInline loop muted disablePictureInPicture className="headerVideo" autoPlay>
        <source src={WorldVideo} type="video/mp4"></source>
      </video>
    </section> */}
    <section className="indexHero">
      <div className="heroContent">
        <div className="heroContentText">
          <h1>La Innovación es nuestro segundo nombre</h1>
          <h2>Soluciones integrales de Seguridad Informática sustentados en las tecnologías de la información y la comunicación con colaboradores profesionalmente capacitados y comprometidos.</h2>
          <div className="heroContentFooter">
            <div className="hfButtons">
              <Link className="primaryBtn" to="/">Explorar Soluciones</Link>
              <Link className="simpleBtn" style={{marginLeft:'1rem'}} to="/"> Certificados SSL</Link>
            </div>
            {/* <div className="certifications">
              <div className="certificatesign">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYgakyQS0uMdLacVh0zE55NQnbueTRyX9eMw&usqp=CAU" width="160" alt="Globalsign" />
              </div>
            </div> */}
          </div>
        </div>
        <div className="heroAnimation">
          <Lottie path={aSecurity} width={800} loop={false}/>
        </div>
      </div>
    </section>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    {/* <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
    /> */}
    <p style={{
      fontSize: "4rem"
    }}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta eum ut voluptatum quis omnis quasi consequatur perferendis neque modi repellat! Cumque sapiente perferendis laudantium voluptate modi sequi at quas esse.
      
    </p>
  </Layout>
)

export default IndexPage
