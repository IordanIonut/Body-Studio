import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import NavbarSearch from '../components/navbar-search'
import Card from '../components/card'
import Article from '../components/article'
import Footer from '../components/footer'
import './category-page.css'
import Cookies from 'js-cookie'
import foods from '../utils/food'

const CategoryPage = () => {
  const [food, setFoods] = useState(false);
  const [exercice, setExercises] = useState(false);

  useEffect(() =>{
    let category = Cookies.get('category');
    if(category === "food")
      setFoods(true);
    else if(category === "exercice")
      setExercises(true);
  },);
console.log(foods?.foodType);
  return (
    <div className="category-page-container">
      <Helmet>
        <title>Body Studio</title>
        <meta property="og:title" content="Body Studio" />
      </Helmet>
      <NavbarSearch></NavbarSearch>
      <div className="category-page-container1">

        <div className="category-page-exercice" style={exercice ? {display: 'flex'} : {display: 'none'}}>
          <section className="section-category">
            <h3 className="category-name ml-80">Category</h3>
            <div className="category-page-hero hero-category">
              <Card rootClassName="card-root-class-name12"></Card>
              <Card rootClassName="card-root-class-name58"></Card>
              <Card rootClassName="card-root-class-name57"></Card>
            </div>
          </section>
          <section className="section-category category-page-section1">
            <h3 className="category-name ml-80">
              <span>Muscles</span>
              <br></br>
            </h3>
            <div className="category-page-hero1 hero-category">
              <Article rootClassName="article-root-class-name15"></Article>
              <Article rootClassName="article-root-class-name27"></Article>
              <Article rootClassName="article-root-class-name60"></Article>
              <Article rootClassName="article-root-class-name24"></Article>
              <Article rootClassName="article-root-class-name23"></Article>
              <Article rootClassName="article-root-class-name22"></Article>
              <Article rootClassName="article-root-class-name21"></Article>
              <Article rootClassName="article-root-class-name20"></Article>
              <Article rootClassName="article-root-class-name19"></Article>
              <Article rootClassName="article-root-class-name18"></Article>
              <Article rootClassName="article-root-class-name17"></Article>
              <Article rootClassName="article-root-class-name16"></Article>
            </div>
          </section>
        </div>


        <div className="category-page-food" style={food ? {display: 'flex'} : {display: 'none'}}>
          <section className="category-page-section2 section-category">
            <h3 className="category-name ml-80">Type</h3>
            <div className="category-page-hero2">
              {Array.isArray(foods?.foodType) && foods?.foodType?.map((item, index) => (
                <Card key={index} food={item} index={index}/>
              ))}
            </div>
          </section>
          <section className="category-page-section3 section-category">
            <h3 className="category-name ml-80">
              <span>Category</span>
              <br></br>
            </h3>
            <div className="category-page-hero3 hero-category">
              {Array.isArray(foods?.foodCategory) && foods?.foodCategory?.map((item, index) => (
                <Card key={index} food={item} index={index}/>
              ))}
            </div>
          </section>
        </div>

      </div>
      <Footer rootClassName="footer-root-class-name1"></Footer>
    </div>
  )
}

export default CategoryPage
