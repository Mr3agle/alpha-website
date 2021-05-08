import * as React from "react"
// import PropTypes from "prop-types"
import { Link } from "gatsby"

import Navbar from './Navbar'

const Header = ({ siteTitle }) => (
  <header>
    <Navbar/>
    <div>
      <h1>
        <Link
          to="/"
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
