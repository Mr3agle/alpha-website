import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layouts/main-layout"
import Seo from "../components/seo"
// import WorldVideo from '../videos/technology-world-green.mp4'
import WorldVideo from '../videos/Technology-geen-1.mp4'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <section>
      <video controlsList="nodownload" preload="true" playsInline loop muted disablePictureInPicture className="headerVideo" autoPlay>
        <source src={WorldVideo} type="video/mp4"></source>
      </video>
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
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
)

export default IndexPage
