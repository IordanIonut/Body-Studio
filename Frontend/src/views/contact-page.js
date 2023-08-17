import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './contact-page.css'

const ContactPage = (props) => {
  return (
    <div className="contact-page-container">
      <Helmet>
        <title>Body Studio</title>
        <meta property="og:title" content="Body Studio" />
      </Helmet>
      <Navbar></Navbar>
      <section className="contact-page-section">
        <header className="contact-page-header">
          <header className="contact-page-left">
            <h2 className="section-heading contact-page-heading">
              <span>Meet our network</span>
              <br></br>
              <span>of licensed providers</span>
            </h2>
          </header>
        </header>
        <main className="contact-page-cards">
          <section className="contact-page-card">
            <div className="contact-page-icon">
              <img
                alt="image"
                src="19725557-19fc-406f-91f9-9d5288b98e01"
                className="contact-page-icon01"
              />
            </div>
            <main className="contact-page-content">
              <h1 className="contact-page-header1">Bodyweight</h1>
            </main>
          </section>
          <section className="contact-page-card1">
            <div className="contact-page-icon02">
              <img
                alt="image"
                src="19725557-19fc-406f-91f9-9d5288b98e01"
                className="contact-page-icon03"
              />
            </div>
            <main className="contact-page-content1">
              <h1 className="contact-page-header2">Bodyweight</h1>
            </main>
          </section>
          <section className="contact-page-card2">
            <div className="contact-page-icon04">
              <img
                alt="image"
                src="19725557-19fc-406f-91f9-9d5288b98e01"
                className="contact-page-icon05"
              />
            </div>
            <main className="contact-page-content2">
              <h1 className="contact-page-header3">Bodyweight</h1>
            </main>
          </section>
        </main>
      </section>
      <section className="contact-page-section1">
        <main className="contact-page-pricing">
          <header className="contact-page-header4">
            <header className="contact-page-left1">
              <h2 className="section-heading contact-page-heading1">
                Start small, think big
              </h2>
            </header>
          </header>
          <div className="contact-page-plans-container">
            <main className="contact-page-plans">
              <div className="contact-page-plan">
                <div className="contact-page-details">
                  <div className="contact-page-header5">
                    <label className="contact-page-name">Basic</label>
                    <div className="contact-page-pricing1">
                      <h1 className="contact-page-price">$9</h1>
                      <span className="contact-page-duration">/mo</span>
                    </div>
                  </div>
                  <p className="contact-page-description">
                    Good for sed quia consequuntur magni dolores eos qui
                    ratione.
                  </p>
                </div>
                <div className="contact-page-buy-details">
                  <div className="contact-page-buy button">
                    <span className="contact-page-text03">
                      <span>Start Basic</span>
                      <br></br>
                    </span>
                  </div>
                  <div className="contact-page-features">
                    <span className="contact-page-heading2">You will get</span>
                    <div className="contact-page-list">
                      <div className="contact-page-mark">
                        <div className="contact-page-icon06">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="contact-page-icon07"
                          >
                            <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                          </svg>
                        </div>
                        <label className="contact-page-label">
                          Sed ut pespiciatis unde omnis
                        </label>
                      </div>
                      <div className="contact-page-mark1">
                        <div className="contact-page-icon09">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="contact-page-icon10"
                          >
                            <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                          </svg>
                        </div>
                        <label className="contact-page-label1">
                          Sed ut pespiciatis unde omnis
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact-page-plan1">
                <div className="contact-page-details1">
                  <div className="contact-page-header6">
                    <label className="contact-page-name1">Professional</label>
                    <div className="contact-page-pricing2">
                      <h1 className="contact-page-price1">$15</h1>
                      <span className="contact-page-duration1">/mo</span>
                    </div>
                  </div>
                  <p className="contact-page-description1">
                    Good for sed quia consequuntur magni dolores eos qui
                    ratione.
                  </p>
                </div>
                <div className="contact-page-buy-details1">
                  <div className="contact-page-buy1 button">
                    <span className="contact-page-text06">
                      <span>Start Professional</span>
                      <br></br>
                    </span>
                  </div>
                  <div className="contact-page-features1">
                    <span className="contact-page-heading3">You will get</span>
                    <div className="contact-page-list1">
                      <div className="contact-page-mark2">
                        <div className="contact-page-icon12">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="contact-page-icon13"
                          >
                            <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                          </svg>
                        </div>
                        <label className="contact-page-label2">
                          Sed ut pespiciatis unde omnis
                        </label>
                      </div>
                      <div className="contact-page-mark3">
                        <div className="contact-page-icon15">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="contact-page-icon16"
                          >
                            <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                          </svg>
                        </div>
                        <label className="contact-page-label3">
                          Sed ut pespiciatis unde omnis
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact-page-plan2">
                <div className="contact-page-details2">
                  <div className="contact-page-header7">
                    <label className="contact-page-name2">Enterprise</label>
                    <div className="contact-page-pricing3">
                      <span className="contact-page-price2">$99</span>
                      <span className="contact-page-duration2">/mo</span>
                    </div>
                  </div>
                  <p className="contact-page-description2">
                    Good for sed quia consequuntur magni dolores eos qui
                    ratione.
                  </p>
                </div>
                <div className="contact-page-buy-details2">
                  <div className="contact-page-buy2 button">
                    <span className="contact-page-text09">
                      <span>Start Enterprise</span>
                      <br></br>
                    </span>
                  </div>
                  <div className="contact-page-features2">
                    <span className="contact-page-heading4">You will get</span>
                    <div className="contact-page-list2">
                      <div className="contact-page-mark4">
                        <div className="contact-page-icon18">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="contact-page-icon19"
                          >
                            <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                          </svg>
                        </div>
                        <label className="contact-page-label4">
                          Sed ut pespiciatis unde omnis
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </main>
      </section>
      <section className="contact-page-section2">
        <header className="contact-page-header8">
          <h2 className="contact-page-heading5 section-heading">
            Frequently asked questions
          </h2>
        </header>
        <main className="contact-page-accordion">
          <div className="contact-page-accordion1">
            <div
              data-role="accordion-container"
              className="contact-page-element accordion-element"
            >
              <div className="contact-page-details3">
                <span className="contact-page-text12">
                  What is sit amet, consectetur adipiscing elit, sed do?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span
                  data-role="accordion-content"
                  className="contact-page-text13"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
              <div data-role="accordion-icon">
                <svg viewBox="0 0 1024 1024" className="contact-page-icon21">
                  <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                </svg>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="contact-page-element1 accordion-element"
            >
              <div className="contact-page-details4">
                <span className="contact-page-text14">
                  We&apos;ll update amet, consectetur adipiscing elit until
                  you&apos;re 100% happy.
                </span>
                <span
                  data-role="accordion-content"
                  className="contact-page-text15"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
              <div data-role="accordion-icon">
                <svg viewBox="0 0 1024 1024" className="contact-page-icon23">
                  <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                </svg>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="contact-page-element2 accordion-element"
            >
              <div className="contact-page-details5">
                <span className="contact-page-text16">
                  Is it really sit amet, consectetur adipiscing elit, sed do?
                </span>
                <span
                  data-role="accordion-content"
                  className="contact-page-text17"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
              <div data-role="accordion-icon">
                <svg viewBox="0 0 1024 1024" className="contact-page-icon25">
                  <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                </svg>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="contact-page-element3 accordion-element"
            >
              <div className="contact-page-details6">
                <span className="contact-page-text18">
                  We work, what is sit amet, consectetur adipiscing elit, sed do
                  sint occaecat cupidatat non proident
                </span>
                <span
                  data-role="accordion-content"
                  className="contact-page-text19"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
              <div data-role="accordion-icon">
                <svg viewBox="0 0 1024 1024" className="contact-page-icon27">
                  <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                </svg>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="contact-page-element4 accordion-element"
            >
              <div className="contact-page-details7">
                <span className="contact-page-text20">
                  What is sit amet, consectetur adipiscing elit, sed do?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span
                  data-role="accordion-content"
                  className="contact-page-text21"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
              <div data-role="accordion-icon">
                <svg viewBox="0 0 1024 1024" className="contact-page-icon29">
                  <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                </svg>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="contact-page-element5 accordion-element"
            >
              <div className="contact-page-details8">
                <span className="contact-page-text22">
                  Amet, consectetur adipiscing elit mollit anim id est laborum.
                </span>
                <span
                  data-role="accordion-content"
                  className="contact-page-text23"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
              <div data-role="accordion-icon">
                <svg viewBox="0 0 1024 1024" className="contact-page-icon31">
                  <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                </svg>
              </div>
            </div>
          </div>
        </main>
      </section>
      <Footer></Footer>
    </div>
  )
}

export default ContactPage
