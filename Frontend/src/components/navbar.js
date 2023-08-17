import React from 'react'
import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import './navbar.css'
import Cookies from 'js-cookie';

const Navbar = (props) => {
  return (
    <nav className={`navbar-navbar ${props.rootClassName} `}>
      <Link to={`home`}>
        <img
          alt={props.BrandingLogo_alt}
          src={process.env.PUBLIC_URL+`/Icons/body studio-800w.png`}
          loading="eager"
          className="navbar-branding-logo"
        />
      </Link>
      <div className="navbar-nav-content">
        <div className="navbar-nav-links">
          <Link to={`home`} className="navbar-link nav-link">HOME</Link>
          <Link to={`category`} onClick={() =>{ Cookies.set('category', "food")}} className="navbar-link1 nav-link">FOOD</Link>
          <Link to={`category`} onClick={() =>{ Cookies.set('category', "exercice")}} className="navbar-link2 nav-link">EXERCICE</Link>
          <Link to={`contact`} className="nav-link">CONTACT</Link>
        </div>
        <div className="get-started navbar-get-started">
          <Link to={`login`} className="navbar-text">MY BODY</Link>
        </div>
        <div id="open-mobile-menu" className="navbar-hamburger get-started">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="navbar-image"
          />
        </div>
      </div>
      <div id="mobile-menu" className="navbar-mobile-menu">
        <div className="navbar-branding">
          <img
            alt={props.image_alt1}
            src={props.image_src1}
            className="navbar-image1"
          />
          <div id="close-mobile-menu" className="navbar-container">
            <svg viewBox="0 0 1024 1024" className="navbar-icon">
              <path
                d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"
                className=""
              ></path>
            </svg>
          </div>
        </div>
        <div className="navbar-nav-links1">
          <span className="nav-link">{props.Link4}</span>
          <span className="nav-link">{props.Link5}</span>
          <span className="nav-link">{props.Link6}</span>
          <span className="nav-link">{props.Link7}</span>
        </div>
        <div className="get-started">
          <span className="navbar-text1">{props.Text1}</span>
        </div>
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
  Link: 'Home',
  Link2: 'Exercice',
  image_alt1: 'image',
  Link5: 'Why us',
  image_src1: '/Branding/planical7012-ttpb.svg',
  rootClassName: '',
  BrandingLogo_src: '/Icons/body%20studio-200h.png',
  image_src: '/Icons/hamburger-200h.png',
  Link6: 'Prices',
  Link4: 'Features',
  Text: 'MY BODY',
  Link1: 'Food',
  image_alt: 'image',
  Text1: 'Get started',
  Link7: 'Contact',
  Link3: 'Contact',
  BrandingLogo_alt: 'Planical7012',
}

Navbar.propTypes = {
  Link: PropTypes.string,
  Link2: PropTypes.string,
  image_alt1: PropTypes.string,
  Link5: PropTypes.string,
  image_src1: PropTypes.string,
  rootClassName: PropTypes.string,
  BrandingLogo_src: PropTypes.string,
  image_src: PropTypes.string,
  Link6: PropTypes.string,
  Link4: PropTypes.string,
  Text: PropTypes.string,
  Link1: PropTypes.string,
  image_alt: PropTypes.string,
  Text1: PropTypes.string,
  Link7: PropTypes.string,
  Link3: PropTypes.string,
  BrandingLogo_alt: PropTypes.string,
}

export default Navbar
