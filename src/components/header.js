import { AnchorLink } from "gatsby-plugin-anchor-links"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className='header'>
  <AnchorLink className='nav-link' to='/#banner'>Top</AnchorLink>
  <AnchorLink className='nav-link' to='/#about'>About</AnchorLink>
      <AnchorLink className='nav-link' to='/#projects'>Work</AnchorLink>
      <AnchorLink className='nav-link' to='/#contact'>Contact</AnchorLink>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
