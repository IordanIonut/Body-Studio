import React from 'react'

import { Helmet } from 'react-helmet'

import Footer from '../components/footer'
import './account-home.css'

const AccountHome = (props) => {
  return (
    <div className="account-home-container">
      <Helmet>
        <title>Body Studio</title>
        <meta property="og:title" content="Body Studio" />
      </Helmet>
      <nav className="account-home-navbar">
        <img
          alt="Planical7012"
          src="/Icons/body%20studio-200h.png"
          loading="eager"
          className="account-home-branding-logo"
        />
        <div className="account-home-input-field input-login-page">
          <div className="account-home-buy">
            <button type="button" className="account-home-button button">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="account-home-icon"
              >
                <path d="M804.571 566.857v274.286c0 20-16.571 36.571-36.571 36.571h-219.429v-219.429h-146.286v219.429h-219.429c-20 0-36.571-16.571-36.571-36.571v-274.286c0-1.143 0.571-2.286 0.571-3.429l328.571-270.857 328.571 270.857c0.571 1.143 0.571 2.286 0.571 3.429zM932 527.429l-35.429 42.286c-2.857 3.429-7.429 5.714-12 6.286h-1.714c-4.571 0-8.571-1.143-12-4l-395.429-329.714-395.429 329.714c-4 2.857-8.571 4.571-13.714 4-4.571-0.571-9.143-2.857-12-6.286l-35.429-42.286c-6.286-7.429-5.143-19.429 2.286-25.714l410.857-342.286c24-20 62.857-20 86.857 0l139.429 116.571v-111.429c0-10.286 8-18.286 18.286-18.286h109.714c10.286 0 18.286 8 18.286 18.286v233.143l125.143 104c7.429 6.286 8.571 18.286 2.286 25.714z"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <section className="account-home-section">
        <div className="account-home-hero">
          <div className="account-home-pricing">
            <div className="account-home-container01">
              <div className="account-home-pricing-card">
                <span className="account-home-text">Free</span>
                <div className="account-home-container02">
                  <span className="account-home-text01">9</span>
                  <span className="account-home-text02">/days</span>
                </div>
                <div className="account-home-container03">
                  <div className="account-home-caption">
                    <button
                      type="button"
                      className="account-home-button01 button"
                    >
                      <svg
                        viewBox="0 0 791.4057142857142 1024"
                        className="icon-account"
                      >
                        <path d="M585.143 18.286c0-10.286 8-18.286 18.286-18.286h164.571c20 0 36.571 16.571 36.571 36.571v164.571c0 10.286-8 18.286-18.286 18.286h-36.571c-10.286 0-18.286-8-18.286-18.286v-76.571l-145.143 145.714c44.571 56 72 127.429 72 205.143 0 169.143-128 308.571-292.571 326.857v75.429h54.857c10.286 0 18.286 8 18.286 18.286v36.571c0 10.286-8 18.286-18.286 18.286h-54.857v54.857c0 10.286-8 18.286-18.286 18.286h-36.571c-10.286 0-18.286-8-18.286-18.286v-54.857h-54.857c-10.286 0-18.286-8-18.286-18.286v-36.571c0-10.286 8-18.286 18.286-18.286h54.857v-75.429c-172.571-18.857-305.714-172.571-291.429-353.143 12-155.429 135.429-282.857 289.714-300.571 92.571-10.857 178.286 17.714 243.429 69.714l145.714-145.143h-76.571c-10.286 0-18.286-8-18.286-18.286v-36.571zM329.143 731.429c141.143 0 256-114.857 256-256s-114.857-256-256-256-256 114.857-256 256 114.857 256 256 256z"></path>
                      </svg>
                    </button>
                    <span className="account-home-section01 section-head">
                      RECIPES
                    </span>
                  </div>
                  <div className="account-home-caption01">
                    <button
                      type="button"
                      className="account-home-button02 button"
                    >
                      <svg viewBox="0 0 1024 1024" className="icon-account">
                        <path d="M864 0h-768c-52.8 0-96 43.2-96 96v832c0 52.8 43.2 96 96 96h768c52.8 0 96-43.2 96-96v-832c0-52.8-43.2-96-96-96zM832 896h-704v-768h704v768zM256 576h448v64h-448zM256 704h448v64h-448zM320 288c0-53.019 42.981-96 96-96s96 42.981 96 96c0 53.019-42.981 96-96 96s-96-42.981-96-96zM480 384h-128c-52.8 0-96 28.8-96 64v64h320v-64c0-35.2-43.2-64-96-64z"></path>
                      </svg>
                    </button>
                    <span className="account-home-section02 section-head">
                      RECIPES
                    </span>
                  </div>
                  <div className="account-home-caption02">
                    <button
                      type="button"
                      className="account-home-button03 button"
                    >
                      <svg viewBox="0 0 1024 1024" className="icon-account">
                        <path d="M554 298v428h128l-170 170-170-170h128v-428h-128l170-170 170 170h-128z"></path>
                      </svg>
                    </button>
                    <span className="account-home-section03 section-head">
                      RECIPES
                    </span>
                  </div>
                  <div className="account-home-caption03">
                    <button
                      type="button"
                      className="account-home-button04 button"
                    >
                      <svg viewBox="0 0 1024 1024" className="icon-account">
                        <path d="M128 170h768v172h-768v-172zM128 554v-128h768v128h-768zM128 854v-44h768v44h-768zM128 726v-86h768v86h-768z"></path>
                      </svg>
                    </button>
                    <span className="account-home-section04 section-head">
                      RECIPES
                    </span>
                  </div>
                </div>
              </div>
              <div className="account-home-pricing-card1">
                <span className="account-home-text03">Free</span>
                <div className="account-home-container04">
                  <div className="account-home-caption04">
                    <button
                      type="button"
                      className="account-home-button05 button"
                    >
                      <svg
                        viewBox="0 0 791.4057142857142 1024"
                        className="icon-account"
                      >
                        <path d="M585.143 18.286c0-10.286 8-18.286 18.286-18.286h164.571c20 0 36.571 16.571 36.571 36.571v164.571c0 10.286-8 18.286-18.286 18.286h-36.571c-10.286 0-18.286-8-18.286-18.286v-76.571l-145.143 145.714c44.571 56 72 127.429 72 205.143 0 169.143-128 308.571-292.571 326.857v75.429h54.857c10.286 0 18.286 8 18.286 18.286v36.571c0 10.286-8 18.286-18.286 18.286h-54.857v54.857c0 10.286-8 18.286-18.286 18.286h-36.571c-10.286 0-18.286-8-18.286-18.286v-54.857h-54.857c-10.286 0-18.286-8-18.286-18.286v-36.571c0-10.286 8-18.286 18.286-18.286h54.857v-75.429c-172.571-18.857-305.714-172.571-291.429-353.143 12-155.429 135.429-282.857 289.714-300.571 92.571-10.857 178.286 17.714 243.429 69.714l145.714-145.143h-76.571c-10.286 0-18.286-8-18.286-18.286v-36.571zM329.143 731.429c141.143 0 256-114.857 256-256s-114.857-256-256-256-256 114.857-256 256 114.857 256 256 256z"></path>
                      </svg>
                    </button>
                    <span className="account-home-section05 section-head">
                      RECIPES
                    </span>
                  </div>
                  <div className="account-home-caption05">
                    <button
                      type="button"
                      className="account-home-button06 button"
                    >
                      <svg
                        viewBox="0 0 791.4057142857142 1024"
                        className="icon-account"
                      >
                        <path d="M585.143 18.286c0-10.286 8-18.286 18.286-18.286h164.571c20 0 36.571 16.571 36.571 36.571v164.571c0 10.286-8 18.286-18.286 18.286h-36.571c-10.286 0-18.286-8-18.286-18.286v-76.571l-145.143 145.714c44.571 56 72 127.429 72 205.143 0 169.143-128 308.571-292.571 326.857v75.429h54.857c10.286 0 18.286 8 18.286 18.286v36.571c0 10.286-8 18.286-18.286 18.286h-54.857v54.857c0 10.286-8 18.286-18.286 18.286h-36.571c-10.286 0-18.286-8-18.286-18.286v-54.857h-54.857c-10.286 0-18.286-8-18.286-18.286v-36.571c0-10.286 8-18.286 18.286-18.286h54.857v-75.429c-172.571-18.857-305.714-172.571-291.429-353.143 12-155.429 135.429-282.857 289.714-300.571 92.571-10.857 178.286 17.714 243.429 69.714l145.714-145.143h-76.571c-10.286 0-18.286-8-18.286-18.286v-36.571zM329.143 731.429c141.143 0 256-114.857 256-256s-114.857-256-256-256-256 114.857-256 256 114.857 256 256 256z"></path>
                      </svg>
                    </button>
                    <span className="account-home-section06 section-head">
                      RECIPES
                    </span>
                  </div>
                  <div className="account-home-caption06">
                    <button
                      type="button"
                      className="account-home-button07 button"
                    >
                      <svg
                        viewBox="0 0 791.4057142857142 1024"
                        className="icon-account"
                      >
                        <path d="M585.143 18.286c0-10.286 8-18.286 18.286-18.286h164.571c20 0 36.571 16.571 36.571 36.571v164.571c0 10.286-8 18.286-18.286 18.286h-36.571c-10.286 0-18.286-8-18.286-18.286v-76.571l-145.143 145.714c44.571 56 72 127.429 72 205.143 0 169.143-128 308.571-292.571 326.857v75.429h54.857c10.286 0 18.286 8 18.286 18.286v36.571c0 10.286-8 18.286-18.286 18.286h-54.857v54.857c0 10.286-8 18.286-18.286 18.286h-36.571c-10.286 0-18.286-8-18.286-18.286v-54.857h-54.857c-10.286 0-18.286-8-18.286-18.286v-36.571c0-10.286 8-18.286 18.286-18.286h54.857v-75.429c-172.571-18.857-305.714-172.571-291.429-353.143 12-155.429 135.429-282.857 289.714-300.571 92.571-10.857 178.286 17.714 243.429 69.714l145.714-145.143h-76.571c-10.286 0-18.286-8-18.286-18.286v-36.571zM329.143 731.429c141.143 0 256-114.857 256-256s-114.857-256-256-256-256 114.857-256 256 114.857 256 256 256z"></path>
                      </svg>
                    </button>
                    <span className="account-home-section07 section-head">
                      RECIPES
                    </span>
                  </div>
                  <div className="account-home-caption07">
                    <button
                      type="button"
                      className="account-home-button08 button"
                    >
                      <svg
                        viewBox="0 0 791.4057142857142 1024"
                        className="icon-account"
                      >
                        <path d="M585.143 18.286c0-10.286 8-18.286 18.286-18.286h164.571c20 0 36.571 16.571 36.571 36.571v164.571c0 10.286-8 18.286-18.286 18.286h-36.571c-10.286 0-18.286-8-18.286-18.286v-76.571l-145.143 145.714c44.571 56 72 127.429 72 205.143 0 169.143-128 308.571-292.571 326.857v75.429h54.857c10.286 0 18.286 8 18.286 18.286v36.571c0 10.286-8 18.286-18.286 18.286h-54.857v54.857c0 10.286-8 18.286-18.286 18.286h-36.571c-10.286 0-18.286-8-18.286-18.286v-54.857h-54.857c-10.286 0-18.286-8-18.286-18.286v-36.571c0-10.286 8-18.286 18.286-18.286h54.857v-75.429c-172.571-18.857-305.714-172.571-291.429-353.143 12-155.429 135.429-282.857 289.714-300.571 92.571-10.857 178.286 17.714 243.429 69.714l145.714-145.143h-76.571c-10.286 0-18.286-8-18.286-18.286v-36.571zM329.143 731.429c141.143 0 256-114.857 256-256s-114.857-256-256-256-256 114.857-256 256 114.857 256 256 256z"></path>
                      </svg>
                    </button>
                    <span className="account-home-section08 section-head">
                      RECIPES
                    </span>
                  </div>
                  <div className="account-home-caption08">
                    <button
                      type="button"
                      className="account-home-button09 button"
                    >
                      <svg
                        viewBox="0 0 791.4057142857142 1024"
                        className="icon-account"
                      >
                        <path d="M585.143 18.286c0-10.286 8-18.286 18.286-18.286h164.571c20 0 36.571 16.571 36.571 36.571v164.571c0 10.286-8 18.286-18.286 18.286h-36.571c-10.286 0-18.286-8-18.286-18.286v-76.571l-145.143 145.714c44.571 56 72 127.429 72 205.143 0 169.143-128 308.571-292.571 326.857v75.429h54.857c10.286 0 18.286 8 18.286 18.286v36.571c0 10.286-8 18.286-18.286 18.286h-54.857v54.857c0 10.286-8 18.286-18.286 18.286h-36.571c-10.286 0-18.286-8-18.286-18.286v-54.857h-54.857c-10.286 0-18.286-8-18.286-18.286v-36.571c0-10.286 8-18.286 18.286-18.286h54.857v-75.429c-172.571-18.857-305.714-172.571-291.429-353.143 12-155.429 135.429-282.857 289.714-300.571 92.571-10.857 178.286 17.714 243.429 69.714l145.714-145.143h-76.571c-10.286 0-18.286-8-18.286-18.286v-36.571zM329.143 731.429c141.143 0 256-114.857 256-256s-114.857-256-256-256-256 114.857-256 256 114.857 256 256 256z"></path>
                      </svg>
                    </button>
                    <span className="account-home-section09 section-head">
                      RECIPES
                    </span>
                  </div>
                  <div className="account-home-caption09">
                    <button
                      type="button"
                      className="account-home-button10 button"
                    >
                      <svg viewBox="0 0 1024 1024" className="icon-account">
                        <path d="M864 0h-768c-52.8 0-96 43.2-96 96v832c0 52.8 43.2 96 96 96h768c52.8 0 96-43.2 96-96v-832c0-52.8-43.2-96-96-96zM832 896h-704v-768h704v768zM256 576h448v64h-448zM256 704h448v64h-448zM320 288c0-53.019 42.981-96 96-96s96 42.981 96 96c0 53.019-42.981 96-96 96s-96-42.981-96-96zM480 384h-128c-52.8 0-96 28.8-96 64v64h320v-64c0-35.2-43.2-64-96-64z"></path>
                      </svg>
                    </button>
                    <span className="account-home-section10 section-head">
                      RECIPES
                    </span>
                  </div>
                </div>
              </div>
              <div className="account-home-pricing-card2">
                <span className="account-home-text04">
                  <span>User</span>
                  <span> Date</span>
                </span>
                <div className="account-home-container05">
                  <span className="account-home-text07">9</span>
                  <span className="account-home-text08">/days</span>
                </div>
                <div className="account-home-container06">
                  <div className="account-home-caption10">
                    <button
                      type="button"
                      className="account-home-button11 button"
                    >
                      <svg
                        viewBox="0 0 731.4285714285713 1024"
                        className="icon-account"
                      >
                        <path d="M731.429 799.429c0 83.429-54.857 151.429-121.714 151.429h-488c-66.857 0-121.714-68-121.714-151.429 0-150.286 37.143-324 186.857-324 46.286 45.143 109.143 73.143 178.857 73.143s132.571-28 178.857-73.143c149.714 0 186.857 173.714 186.857 324zM585.143 292.571c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429z"></path>
                      </svg>
                    </button>
                    <span className="account-home-section11 section-head">
                      RECIPES
                    </span>
                  </div>
                  <div className="account-home-caption11">
                    <button
                      type="button"
                      className="account-home-button12 button"
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        className="account-home-icon24 icon-account"
                      >
                        <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                      </svg>
                    </button>
                    <span className="account-home-section12 section-head">
                      RECIPES
                    </span>
                  </div>
                  <div className="account-home-caption12">
                    <button
                      type="button"
                      className="account-home-button13 button"
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        className="account-home-icon26 icon-account"
                      >
                        <path d="M704 0c-176.73 0-320 143.268-320 320 0 20.026 1.858 39.616 5.376 58.624l-389.376 389.376v192c0 35.346 28.654 64 64 64h64v-64h128v-128h128v-128h128l83.042-83.042c34.010 12.316 70.696 19.042 108.958 19.042 176.73 0 320-143.268 320-320s-143.27-320-320-320zM799.874 320.126c-53.020 0-96-42.98-96-96s42.98-96 96-96 96 42.98 96 96-42.98 96-96 96z"></path>
                      </svg>
                    </button>
                    <span className="account-home-section13 section-head">
                      RECIPES
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="account-home-pricing1">
            <div className="account-home-container07">
              <div className="account-home-pricing-card3">
                <span className="account-home-text09">Free</span>
                <div className="account-home-container08">
                  <span className="account-home-text10">9</span>
                  <span className="account-home-text11">/days</span>
                </div>
                <div className="account-home-container09">
                  <div className="account-home-caption13">
                    <button
                      type="button"
                      className="account-home-button14 button"
                    >
                      <svg
                        viewBox="0 0 791.4057142857142 1024"
                        className="icon-account"
                      >
                        <path d="M585.143 18.286c0-10.286 8-18.286 18.286-18.286h164.571c20 0 36.571 16.571 36.571 36.571v164.571c0 10.286-8 18.286-18.286 18.286h-36.571c-10.286 0-18.286-8-18.286-18.286v-76.571l-145.143 145.714c44.571 56 72 127.429 72 205.143 0 169.143-128 308.571-292.571 326.857v75.429h54.857c10.286 0 18.286 8 18.286 18.286v36.571c0 10.286-8 18.286-18.286 18.286h-54.857v54.857c0 10.286-8 18.286-18.286 18.286h-36.571c-10.286 0-18.286-8-18.286-18.286v-54.857h-54.857c-10.286 0-18.286-8-18.286-18.286v-36.571c0-10.286 8-18.286 18.286-18.286h54.857v-75.429c-172.571-18.857-305.714-172.571-291.429-353.143 12-155.429 135.429-282.857 289.714-300.571 92.571-10.857 178.286 17.714 243.429 69.714l145.714-145.143h-76.571c-10.286 0-18.286-8-18.286-18.286v-36.571zM329.143 731.429c141.143 0 256-114.857 256-256s-114.857-256-256-256-256 114.857-256 256 114.857 256 256 256z"></path>
                      </svg>
                    </button>
                    <span className="account-home-section14 section-head">
                      RECIPES
                    </span>
                  </div>
                  <div className="account-home-caption14">
                    <button
                      type="button"
                      className="account-home-button15 button"
                    >
                      <svg viewBox="0 0 1024 1024" className="icon-account">
                        <path d="M864 0h-768c-52.8 0-96 43.2-96 96v832c0 52.8 43.2 96 96 96h768c52.8 0 96-43.2 96-96v-832c0-52.8-43.2-96-96-96zM832 896h-704v-768h704v768zM256 576h448v64h-448zM256 704h448v64h-448zM320 288c0-53.019 42.981-96 96-96s96 42.981 96 96c0 53.019-42.981 96-96 96s-96-42.981-96-96zM480 384h-128c-52.8 0-96 28.8-96 64v64h320v-64c0-35.2-43.2-64-96-64z"></path>
                      </svg>
                    </button>
                    <span className="account-home-section15 section-head">
                      RECIPES
                    </span>
                  </div>
                  <div className="account-home-caption15">
                    <button
                      type="button"
                      className="account-home-button16 button"
                    >
                      <svg viewBox="0 0 1024 1024" className="icon-account">
                        <path d="M554 298v428h128l-170 170-170-170h128v-428h-128l170-170 170 170h-128z"></path>
                      </svg>
                    </button>
                    <span className="account-home-section16 section-head">
                      RECIPES
                    </span>
                  </div>
                  <div className="account-home-caption16">
                    <button
                      type="button"
                      className="account-home-button17 button"
                    >
                      <svg viewBox="0 0 1024 1024" className="icon-account">
                        <path d="M128 170h768v172h-768v-172zM128 554v-128h768v128h-768zM128 854v-44h768v44h-768zM128 726v-86h768v86h-768z"></path>
                      </svg>
                    </button>
                    <span className="account-home-section17 section-head">
                      RECIPES
                    </span>
                  </div>
                </div>
              </div>
              <div className="account-home-pricing-card4">
                <span className="account-home-text12">Free</span>
                <div className="account-home-container10">
                  <div className="account-home-caption17">
                    <button
                      type="button"
                      className="account-home-button18 button"
                    >
                      <svg
                        viewBox="0 0 791.4057142857142 1024"
                        className="icon-account"
                      >
                        <path d="M585.143 18.286c0-10.286 8-18.286 18.286-18.286h164.571c20 0 36.571 16.571 36.571 36.571v164.571c0 10.286-8 18.286-18.286 18.286h-36.571c-10.286 0-18.286-8-18.286-18.286v-76.571l-145.143 145.714c44.571 56 72 127.429 72 205.143 0 169.143-128 308.571-292.571 326.857v75.429h54.857c10.286 0 18.286 8 18.286 18.286v36.571c0 10.286-8 18.286-18.286 18.286h-54.857v54.857c0 10.286-8 18.286-18.286 18.286h-36.571c-10.286 0-18.286-8-18.286-18.286v-54.857h-54.857c-10.286 0-18.286-8-18.286-18.286v-36.571c0-10.286 8-18.286 18.286-18.286h54.857v-75.429c-172.571-18.857-305.714-172.571-291.429-353.143 12-155.429 135.429-282.857 289.714-300.571 92.571-10.857 178.286 17.714 243.429 69.714l145.714-145.143h-76.571c-10.286 0-18.286-8-18.286-18.286v-36.571zM329.143 731.429c141.143 0 256-114.857 256-256s-114.857-256-256-256-256 114.857-256 256 114.857 256 256 256z"></path>
                      </svg>
                    </button>
                    <span className="account-home-section18 section-head">
                      RECIPES
                    </span>
                  </div>
                  <div className="account-home-caption18">
                    <button
                      type="button"
                      className="account-home-button19 button"
                    >
                      <svg
                        viewBox="0 0 791.4057142857142 1024"
                        className="icon-account"
                      >
                        <path d="M585.143 18.286c0-10.286 8-18.286 18.286-18.286h164.571c20 0 36.571 16.571 36.571 36.571v164.571c0 10.286-8 18.286-18.286 18.286h-36.571c-10.286 0-18.286-8-18.286-18.286v-76.571l-145.143 145.714c44.571 56 72 127.429 72 205.143 0 169.143-128 308.571-292.571 326.857v75.429h54.857c10.286 0 18.286 8 18.286 18.286v36.571c0 10.286-8 18.286-18.286 18.286h-54.857v54.857c0 10.286-8 18.286-18.286 18.286h-36.571c-10.286 0-18.286-8-18.286-18.286v-54.857h-54.857c-10.286 0-18.286-8-18.286-18.286v-36.571c0-10.286 8-18.286 18.286-18.286h54.857v-75.429c-172.571-18.857-305.714-172.571-291.429-353.143 12-155.429 135.429-282.857 289.714-300.571 92.571-10.857 178.286 17.714 243.429 69.714l145.714-145.143h-76.571c-10.286 0-18.286-8-18.286-18.286v-36.571zM329.143 731.429c141.143 0 256-114.857 256-256s-114.857-256-256-256-256 114.857-256 256 114.857 256 256 256z"></path>
                      </svg>
                    </button>
                    <span className="account-home-section19 section-head">
                      RECIPES
                    </span>
                  </div>
                  <div className="account-home-caption19">
                    <button
                      type="button"
                      className="account-home-button20 button"
                    >
                      <svg
                        viewBox="0 0 791.4057142857142 1024"
                        className="icon-account"
                      >
                        <path d="M585.143 18.286c0-10.286 8-18.286 18.286-18.286h164.571c20 0 36.571 16.571 36.571 36.571v164.571c0 10.286-8 18.286-18.286 18.286h-36.571c-10.286 0-18.286-8-18.286-18.286v-76.571l-145.143 145.714c44.571 56 72 127.429 72 205.143 0 169.143-128 308.571-292.571 326.857v75.429h54.857c10.286 0 18.286 8 18.286 18.286v36.571c0 10.286-8 18.286-18.286 18.286h-54.857v54.857c0 10.286-8 18.286-18.286 18.286h-36.571c-10.286 0-18.286-8-18.286-18.286v-54.857h-54.857c-10.286 0-18.286-8-18.286-18.286v-36.571c0-10.286 8-18.286 18.286-18.286h54.857v-75.429c-172.571-18.857-305.714-172.571-291.429-353.143 12-155.429 135.429-282.857 289.714-300.571 92.571-10.857 178.286 17.714 243.429 69.714l145.714-145.143h-76.571c-10.286 0-18.286-8-18.286-18.286v-36.571zM329.143 731.429c141.143 0 256-114.857 256-256s-114.857-256-256-256-256 114.857-256 256 114.857 256 256 256z"></path>
                      </svg>
                    </button>
                    <span className="account-home-section20 section-head">
                      RECIPES
                    </span>
                  </div>
                  <div className="account-home-caption20">
                    <button
                      type="button"
                      className="account-home-button21 button"
                    >
                      <svg
                        viewBox="0 0 791.4057142857142 1024"
                        className="icon-account"
                      >
                        <path d="M585.143 18.286c0-10.286 8-18.286 18.286-18.286h164.571c20 0 36.571 16.571 36.571 36.571v164.571c0 10.286-8 18.286-18.286 18.286h-36.571c-10.286 0-18.286-8-18.286-18.286v-76.571l-145.143 145.714c44.571 56 72 127.429 72 205.143 0 169.143-128 308.571-292.571 326.857v75.429h54.857c10.286 0 18.286 8 18.286 18.286v36.571c0 10.286-8 18.286-18.286 18.286h-54.857v54.857c0 10.286-8 18.286-18.286 18.286h-36.571c-10.286 0-18.286-8-18.286-18.286v-54.857h-54.857c-10.286 0-18.286-8-18.286-18.286v-36.571c0-10.286 8-18.286 18.286-18.286h54.857v-75.429c-172.571-18.857-305.714-172.571-291.429-353.143 12-155.429 135.429-282.857 289.714-300.571 92.571-10.857 178.286 17.714 243.429 69.714l145.714-145.143h-76.571c-10.286 0-18.286-8-18.286-18.286v-36.571zM329.143 731.429c141.143 0 256-114.857 256-256s-114.857-256-256-256-256 114.857-256 256 114.857 256 256 256z"></path>
                      </svg>
                    </button>
                    <span className="account-home-section21 section-head">
                      RECIPES
                    </span>
                  </div>
                  <div className="account-home-caption21">
                    <button
                      type="button"
                      className="account-home-button22 button"
                    >
                      <svg
                        viewBox="0 0 791.4057142857142 1024"
                        className="icon-account"
                      >
                        <path d="M585.143 18.286c0-10.286 8-18.286 18.286-18.286h164.571c20 0 36.571 16.571 36.571 36.571v164.571c0 10.286-8 18.286-18.286 18.286h-36.571c-10.286 0-18.286-8-18.286-18.286v-76.571l-145.143 145.714c44.571 56 72 127.429 72 205.143 0 169.143-128 308.571-292.571 326.857v75.429h54.857c10.286 0 18.286 8 18.286 18.286v36.571c0 10.286-8 18.286-18.286 18.286h-54.857v54.857c0 10.286-8 18.286-18.286 18.286h-36.571c-10.286 0-18.286-8-18.286-18.286v-54.857h-54.857c-10.286 0-18.286-8-18.286-18.286v-36.571c0-10.286 8-18.286 18.286-18.286h54.857v-75.429c-172.571-18.857-305.714-172.571-291.429-353.143 12-155.429 135.429-282.857 289.714-300.571 92.571-10.857 178.286 17.714 243.429 69.714l145.714-145.143h-76.571c-10.286 0-18.286-8-18.286-18.286v-36.571zM329.143 731.429c141.143 0 256-114.857 256-256s-114.857-256-256-256-256 114.857-256 256 114.857 256 256 256z"></path>
                      </svg>
                    </button>
                    <span className="account-home-section22 section-head">
                      RECIPES
                    </span>
                  </div>
                  <div className="account-home-caption22">
                    <button
                      type="button"
                      className="account-home-button23 button"
                    >
                      <svg viewBox="0 0 1024 1024" className="icon-account">
                        <path d="M864 0h-768c-52.8 0-96 43.2-96 96v832c0 52.8 43.2 96 96 96h768c52.8 0 96-43.2 96-96v-832c0-52.8-43.2-96-96-96zM832 896h-704v-768h704v768zM256 576h448v64h-448zM256 704h448v64h-448zM320 288c0-53.019 42.981-96 96-96s96 42.981 96 96c0 53.019-42.981 96-96 96s-96-42.981-96-96zM480 384h-128c-52.8 0-96 28.8-96 64v64h320v-64c0-35.2-43.2-64-96-64z"></path>
                      </svg>
                    </button>
                    <span className="account-home-section23 section-head">
                      RECIPES
                    </span>
                  </div>
                </div>
              </div>
              <div className="account-home-pricing-card5">
                <span className="account-home-text13">
                  <span>User</span>
                  <span> Date</span>
                </span>
                <div className="account-home-container11">
                  <span className="account-home-text16">9</span>
                  <span className="account-home-text17">/days</span>
                </div>
                <div className="account-home-container12">
                  <div className="account-home-caption23">
                    <button
                      type="button"
                      className="account-home-button24 button"
                    >
                      <svg
                        viewBox="0 0 731.4285714285713 1024"
                        className="icon-account"
                      >
                        <path d="M731.429 799.429c0 83.429-54.857 151.429-121.714 151.429h-488c-66.857 0-121.714-68-121.714-151.429 0-150.286 37.143-324 186.857-324 46.286 45.143 109.143 73.143 178.857 73.143s132.571-28 178.857-73.143c149.714 0 186.857 173.714 186.857 324zM585.143 292.571c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429z"></path>
                      </svg>
                    </button>
                    <span className="account-home-section24 section-head">
                      RECIPES
                    </span>
                  </div>
                  <div className="account-home-caption24">
                    <button
                      type="button"
                      className="account-home-button25 button"
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        className="account-home-icon50 icon-account"
                      >
                        <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                      </svg>
                    </button>
                    <span className="account-home-section25 section-head">
                      RECIPES
                    </span>
                  </div>
                  <div className="account-home-caption25">
                    <button
                      type="button"
                      className="account-home-button26 button"
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        className="account-home-icon52 icon-account"
                      >
                        <path d="M704 0c-176.73 0-320 143.268-320 320 0 20.026 1.858 39.616 5.376 58.624l-389.376 389.376v192c0 35.346 28.654 64 64 64h64v-64h128v-128h128v-128h128l83.042-83.042c34.010 12.316 70.696 19.042 108.958 19.042 176.73 0 320-143.268 320-320s-143.27-320-320-320zM799.874 320.126c-53.020 0-96-42.98-96-96s42.98-96 96-96 96 42.98 96 96-42.98 96-96 96z"></path>
                      </svg>
                    </button>
                    <span className="account-home-section26 section-head">
                      RECIPES
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default AccountHome
