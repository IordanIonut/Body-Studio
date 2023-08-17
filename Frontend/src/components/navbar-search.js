import React from 'react'
import PropTypes from 'prop-types'
import './navbar-search.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const NavbarSearch = (props) => {
  return (
    <nav className={`navbar-search-navbar ${props.rootClassName} `}>
      <Link to={`home`}>
        <img
          alt={props.BrandingLogo_alt}
          src={process.env.PUBLIC_URL+`/Icons/body studio-800w.png`}
          loading="eager"
          
          className="navbar-branding-logo"
        />
      </Link>
      <div className="navbar-search-input-field">
        <input type="email" className="navbar-search-textinput input" />
        <div className="navbar-search-buy button">
          <span className="navbar-search-text">{props.Text}</span>
          <span className="navbar-search-text1">{props.Text1}</span>
        </div>
      </div>
    </nav>
  )
}

NavbarSearch.defaultProps = {
  rootClassName: '',
  BrandingLogo_alt: 'Planical7012',
  Text: '->',
  Text1: 'Search',
  BrandingLogo_src: '/Icons/body%20studio-200h.png',
}

NavbarSearch.propTypes = {
  rootClassName: PropTypes.string,
  BrandingLogo_alt: PropTypes.string,
  Text: PropTypes.string,
  Text1: PropTypes.string,
  BrandingLogo_src: PropTypes.string,
}

export default NavbarSearch
