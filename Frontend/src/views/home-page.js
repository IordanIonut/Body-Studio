import React from 'react'
import Cookies from 'js-cookie';
import { Helmet } from 'react-helmet'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './home-page.css'

const HomePage = () => {
  return (
    <div className="home-page-container">
      <Helmet>
        <title>Body Studio</title>
        <meta property="og:title" content="Body Studio" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name"></Navbar>
      <section className="home-page-section">
        <div className="home-page-hero">
          <div className="home-page-content">
            <main className="home-page-main">
              <header className="home-page-header">
                <h1 className="home-page-heading">
                  <span>Physical activity</span>
                  <br></br>
                  <span>enhances positive energy!</span>
                </h1>
              </header>
            </main>
            <div className="home-page-highlight">
              <div className="home-page-avatars">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1552234994-66ba234fd567?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fHBvdHJhaXR8ZW58MHx8fHwxNjY3MjQ0ODcx&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-page-image avatar"
                />
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHBvdHJhaXR8ZW58MHx8fHwxNjY3MjQ0ODcx&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-page-image1 avatar"
                />
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1618151313441-bc79b11e5090?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxwb3RyYWl0fGVufDB8fHx8MTY2NzI0NDg3MQ&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-page-image2 avatar"
                />
              </div>
              <label className="home-page-caption">
                Loved by 10,000+ people
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </label>
            </div>
          </div>
          <div className="home-page-image3">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1587938745570-681161dcfe17?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI5fHxneW18ZW58MHx8fHwxNjg5NTMyMDQyfDA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="home-page-image4"
            />
          </div>
          <div className="home-page-image5">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1594381898411-846e7d193883?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE0fHxneW18ZW58MHx8fHwxNjg5NTMyMDMxfDA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="home-page-image6"
            />
          </div>
        </div>
      </section>
      <section className="home-page-section1">
        <h3 className="home-page-heading1">
          The real workout starts when you want to stop.
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </h3>
        <div className="home-page-features pr-10">
          <header className="home-page-feature feature feature-active mx-2">
            <h3 className="home-page-text3">Exercise Tracking</h3>
            <svg
              viewBox="0 0 1024 1024"
              className="home-page-icon svg-home mt-3"
            >
              <path d="M878 634l60 62-90 90 60 62-60 60-62-60-90 90-62-60-60 60-62-60 152-152-366-366-152 152-60-62 60-60-60-62 90-90-60-62 60-60 62 60 90-90 62 60 60-60 62 60-152 152 366 366 152-152 60 62z"></path>
            </svg>
          </header>
          <header className="feature feature-active mx-3">
            <h3 className="home-page-text4">Privacy and Security</h3>
            <svg viewBox="0 0 1024 1024" className="svg-home mt-3">
              <path d="M945.942 14.058c-18.746-18.744-49.136-18.744-67.882 0l-202.164 202.164c-51.938-15.754-106.948-24.222-163.896-24.222-223.318 0-416.882 130.042-512 320 41.122 82.124 100.648 153.040 173.022 207.096l-158.962 158.962c-18.746 18.746-18.746 49.136 0 67.882 9.372 9.374 21.656 14.060 33.94 14.060s24.568-4.686 33.942-14.058l864-864c18.744-18.746 18.744-49.138 0-67.884zM416 320c42.24 0 78.082 27.294 90.92 65.196l-121.724 121.724c-37.902-12.838-65.196-48.68-65.196-90.92 0-53.020 42.98-96 96-96zM110.116 512c38.292-60.524 89.274-111.924 149.434-150.296 3.918-2.5 7.876-4.922 11.862-7.3-9.962 27.328-15.412 56.822-15.412 87.596 0 54.89 17.286 105.738 46.7 147.418l-60.924 60.924c-52.446-36.842-97.202-83.882-131.66-138.342z"></path>
              <path d="M768 442c0-27.166-4.256-53.334-12.102-77.898l-321.808 321.808c24.568 7.842 50.742 12.090 77.91 12.090 141.382 0 256-114.618 256-256z"></path>
              <path d="M830.026 289.974l-69.362 69.362c1.264 0.786 2.53 1.568 3.786 2.368 60.162 38.374 111.142 89.774 149.434 150.296-38.292 60.522-89.274 111.922-149.436 150.296-75.594 48.218-162.89 73.704-252.448 73.704-38.664 0-76.902-4.76-113.962-14.040l-76.894 76.894c59.718 21.462 123.95 33.146 190.856 33.146 223.31 0 416.876-130.042 512-320-45.022-89.916-112.118-166.396-193.974-222.026z"></path>
            </svg>
          </header>
          <header className="feature feature-active mx-2 home-page-feature2">
            <h3 className="home-page-text5">Food Calorie</h3>
            <svg
              viewBox="0 0 1024 1024"
              className="svg-home mt-3 home-page-icon06"
            >
              <path d="M224 0c-106.040 0-192 100.288-192 224 0 105.924 63.022 194.666 147.706 217.998l-31.788 518.124c-2.154 35.132 24.882 63.878 60.082 63.878h32c35.2 0 62.236-28.746 60.082-63.878l-31.788-518.124c84.684-23.332 147.706-112.074 147.706-217.998 0-123.712-85.96-224-192-224zM869.334 0l-53.334 320h-40l-26.666-320h-26.668l-26.666 320h-40l-53.334-320h-26.666v416c0 17.672 14.326 32 32 32h83.338l-31.42 512.122c-2.154 35.132 24.882 63.878 60.082 63.878h32c35.2 0 62.236-28.746 60.082-63.878l-31.42-512.122h83.338c17.674 0 32-14.328 32-32v-416h-26.666z"></path>
            </svg>
          </header>
        </div>
      </section>
      <section className="home-page-section2">
        <header className="home-page-header1">
          <h3 className="home-page-heading2">
            Get your subscription.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </h3>
        </header>
        <section className="home-page-note">
          <div className="home-page-image7 pr-12">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE3fHxneW18ZW58MHx8fHwxNjg5NTMyMDMxfDA&amp;ixlib=rb-4.0.3&amp;w=1200"
              className="home-page-image8"
            />
          </div>
          <div className="home-page-content1">
            <div className="home-page-main1">
              <div className="home-page-caption1">
                <svg viewBox="0 0 1024 1024" className="icon-home mr-4">
                  <path d="M426 726l342-342-60-60-282 280-110-110-60 60zM512 42l384 172v256q0 178-110 325t-274 187q-164-40-274-187t-110-325v-256z"></path>
                </svg>
                <span className="section-head text-home">RECIPES</span>
              </div>
            </div>
            <div className="home-page-main2">
              <div className="home-page-caption2">
                <svg viewBox="0 0 1024 1024" className="icon-home mr-4">
                  <path d="M426 726l342-342-60-60-282 280-110-110-60 60zM512 42l384 172v256q0 178-110 325t-274 187q-164-40-274-187t-110-325v-256z"></path>
                </svg>
                <span className="home-page-section4 section-head text-home">
                  food calorie
                </span>
              </div>
            </div>
            <div className="home-page-main3">
              <div className="home-page-caption3">
                <svg
                  viewBox="0 0 1024 1024"
                  className="icon-home mr-4 home-page-icon12"
                >
                  <path d="M426 726l342-342-60-60-282 280-110-110-60 60zM512 42l384 172v256q0 178-110 325t-274 187q-164-40-274-187t-110-325v-256z"></path>
                </svg>
                <span className="home-page-section5 section-head text-home">
                  Exercices
                </span>
              </div>
            </div>
            <div className="home-page-main4">
              <div className="home-page-caption4">
                <svg
                  viewBox="0 0 1024 1024"
                  className="icon-home mr-4 home-page-icon14"
                >
                  <path d="M426 726l342-342-60-60-282 280-110-110-60 60zM512 42l384 172v256q0 178-110 325t-274 187q-164-40-274-187t-110-325v-256z"></path>
                </svg>
                <span className="home-page-section6 section-head text-home">
                  recommendation
                </span>
              </div>
            </div>
          </div>
        </section>
      </section>
      <Footer rootClassName="footer-root-class-name2"></Footer>
    </div>
  )
}

export default HomePage
