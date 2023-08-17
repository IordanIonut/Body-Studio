import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import NavbarSearch from '../components/navbar-search'
import Exercice from '../components/exercice'
import Food from '../components/food'
import Footer from '../components/footer'
import './search-page.css'

const SearchPage = (props) => {
  return (
    <div className="search-page-container">
      <Helmet>
        <title>Body Studio</title>
        <meta property="og:title" content="Body Studio" />
      </Helmet>
      <NavbarSearch rootClassName="navbar-search-root-class-name"></NavbarSearch>
      <div className="search-page-container1">
        <div className="search-page-container2">
          <h3 className="search-page-heading">
            The real workout starts when you want to stop.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </h3>
          <div className="input-login-page">
            <select className="search-page-select input">
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
            </select>
            <div className="search-page-buy">
              <span className="search-page-text">Sort By</span>
            </div>
          </div>
          <div className="input-login-page">
            <select className="search-page-select1 input">
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
            </select>
            <div className="search-page-buy1">
              <span className="search-page-text1">Sort By</span>
            </div>
          </div>
        </div>
        <div className="search-page-exercice">
          <section className="section-category">
            <div className="search-page-hero hero-category">
              <Exercice rootClassName="exercice-root-class-name"></Exercice>
              <Exercice rootClassName="exercice-root-class-name6"></Exercice>
              <Exercice rootClassName="exercice-root-class-name3"></Exercice>
              <Exercice rootClassName="exercice-root-class-name2"></Exercice>
              <Exercice rootClassName="exercice-root-class-name1"></Exercice>
            </div>
          </section>
        </div>
        <div className="search-page-food">
          <section className="search-page-section1 section-category">
            <div className="search-page-hero1 hero-category">
              <Food rootClassName="food-root-class-name"></Food>
              <Food rootClassName="food-root-class-name3"></Food>
              <Food rootClassName="food-root-class-name2"></Food>
              <Food rootClassName="food-root-class-name1"></Food>
            </div>
          </section>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name4"></Footer>
    </div>
  )
}

export default SearchPage
