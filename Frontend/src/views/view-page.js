import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './view-page.css'

const ViewPage = (props) => {
  return (
    <div className="view-page-container">
      <Helmet>
        <title>Body Studio</title>
        <meta property="og:title" content="Body Studio" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name1"></Navbar>
      <div className="view-page-container01">
        <div className="view-page-exercice">
          <section className="section-category">
            <div className="view-page-hero hero-category">
              <video
                src="https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-reverse-curl-front.mp4#t=0.1"
                loop
                poster="https://play.teleporthq.io/static/svg/videoposter.svg"
                autoPlay
                controls
                className="view-page-video"
              ></video>
              <div className="view-page-container02">
                <span className="view-page-caption view-text">asdadsadsad</span>
                <div className="view-page-container03">
                  <div className="view-status">
                    <div className="view-page-icon">
                      <svg viewBox="0 0 1024 1024" className="icon view-icon">
                        <path d="M128 576h342v342h-342v-342zM554 746q0-80 56-136t136-56 136 56 56 136-56 136-136 56-136-56-56-136zM512 86l234 384h-468z"></path>
                      </svg>
                    </div>
                    <span className="text view-text-circle">Dumbbells</span>
                  </div>
                  <div className="view-status">
                    <div className="view-page-icon03">
                      <svg viewBox="0 0 1024 1024" className="icon view-icon">
                        <path d="M682 256h256v256l-98-98-268 268-170-170-256 256-60-60 316-316 170 170 208-208z"></path>
                      </svg>
                    </div>
                    <span className="text view-text-circle">Dumbbells</span>
                  </div>
                  <div className="view-page-container06 view-status">
                    <div className="view-page-icon06">
                      <svg viewBox="0 0 1024 1024" className="icon view-icon">
                        <path d="M384 0l-384 512h384l-256 512 896-640h-512l384-384z"></path>
                      </svg>
                    </div>
                    <span className="text view-text-circle">Dumbbells</span>
                  </div>
                  <div className="view-page-container07 view-status">
                    <div className="view-page-icon09">
                      <svg
                        viewBox="0 0 932.5714285714286 1024"
                        className="icon view-icon"
                      >
                        <path d="M502.857 73.143c-35.429 0-64 28.571-64 64v374.857h-18.286v-301.714c0-35.429-28.571-64-64-64s-64 28.571-64 64v448l-88-117.143c-13.714-18.286-35.429-29.143-58.286-29.143-40.571 0-73.143 33.143-73.143 73.143 0 16 5.143 31.429 14.857 44l219.429 292.571c13.714 18.286 35.429 29.143 58.286 29.143h393.143c26.286 0 49.143-18.857 54.286-44.571l43.429-231.429c1.714-10.857 2.857-22.286 2.857-33.714v-284.571c0-35.429-28.571-64-64-64s-64 28.571-64 64v155.429h-18.286v-301.714c0-35.429-28.571-64-64-64s-64 28.571-64 64v301.714h-18.286v-374.857c0-35.429-28.571-64-64-64zM502.857 0c51.429 0 98.857 29.143 122.286 75.429 8-1.714 16-2.286 24-2.286 75.429 0 137.143 61.714 137.143 137.143v9.714c79.429-4.571 146.286 56.571 146.286 136.571v284.571c0 16-1.714 32-4.571 47.429l-43.429 230.857c-10.857 60.571-64 104.571-125.714 104.571h-393.143c-45.714 0-89.714-22.286-117.143-58.286l-219.429-292.571c-18.857-25.143-29.143-56.571-29.143-88 0-80.571 65.143-146.286 146.286-146.286 24 0 53.143 5.714 73.143 19.429v-248c0-75.429 61.714-137.143 137.143-137.143 8 0 16 0.571 24 2.286 23.429-46.286 70.857-75.429 122.286-75.429z"></path>
                      </svg>
                    </div>
                    <span className="text view-text-circle">Dumbbells</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="view-page-section1 section-category">
            <div className="view-page-hero1 hero-category">
              <div className="view-page-container08">
                <span className="view-page-text04 view-text">Target</span>
                <div className="view-page-container09">
                  <div className="view-page-container10 view-status">
                    <div className="view-page-icon12">
                      <svg viewBox="0 0 1024 1024" className="view-icon">
                        <path d="M1024 448h-100.924c-27.64-178.24-168.836-319.436-347.076-347.076v-100.924h-128v100.924c-178.24 27.64-319.436 168.836-347.076 347.076h-100.924v128h100.924c27.64 178.24 168.836 319.436 347.076 347.076v100.924h128v-100.924c178.24-27.64 319.436-168.836 347.076-347.076h100.924v-128zM792.822 448h-99.762c-19.284-54.55-62.51-97.778-117.060-117.060v-99.762c107.514 24.49 192.332 109.31 216.822 216.822zM512 576c-35.346 0-64-28.654-64-64s28.654-64 64-64c35.346 0 64 28.654 64 64s-28.654 64-64 64zM448 231.178v99.762c-54.55 19.282-97.778 62.51-117.060 117.060h-99.762c24.49-107.512 109.31-192.332 216.822-216.822zM231.178 576h99.762c19.282 54.55 62.51 97.778 117.060 117.060v99.762c-107.512-24.49-192.332-109.308-216.822-216.822zM576 792.822v-99.762c54.55-19.284 97.778-62.51 117.060-117.060h99.762c-24.49 107.514-109.308 192.332-216.822 216.822z"></path>
                      </svg>
                    </div>
                    <span className="text view-text-circle">Dumbbells</span>
                  </div>
                  <div className="view-status">
                    <div className="view-page-icon15">
                      <svg viewBox="0 0 1024 1024" className="view-icon">
                        <path d="M1024 448h-100.924c-27.64-178.24-168.836-319.436-347.076-347.076v-100.924h-128v100.924c-178.24 27.64-319.436 168.836-347.076 347.076h-100.924v128h100.924c27.64 178.24 168.836 319.436 347.076 347.076v100.924h128v-100.924c178.24-27.64 319.436-168.836 347.076-347.076h100.924v-128zM792.822 448h-99.762c-19.284-54.55-62.51-97.778-117.060-117.060v-99.762c107.514 24.49 192.332 109.31 216.822 216.822zM512 576c-35.346 0-64-28.654-64-64s28.654-64 64-64c35.346 0 64 28.654 64 64s-28.654 64-64 64zM448 231.178v99.762c-54.55 19.282-97.778 62.51-117.060 117.060h-99.762c24.49-107.512 109.31-192.332 216.822-216.822zM231.178 576h99.762c19.282 54.55 62.51 97.778 117.060 117.060v99.762c-107.512-24.49-192.332-109.308-216.822-216.822zM576 792.822v-99.762c54.55-19.284 97.778-62.51 117.060-117.060h99.762c-24.49 107.514-109.308 192.332-216.822 216.822z"></path>
                      </svg>
                    </div>
                    <span className="text view-text-circle">Dumbbells</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="view-page-section2 section-category">
            <div className="view-page-hero2 hero-category">
              <div className="view-page-container12">
                <span className="view-page-text07 view-text">
                  <span>Description</span>
                  <br></br>
                </span>
                <span className="view-page-text10">
                  {' '}
                  Barbell Reverse Curl: A Comprehensive Guide Setup Select a
                  barbell with the appropriate weight for your strength level
                  Stand with your feet shoulder-width apart and grip the barbell
                  with a shoulder-width overhand grip Keep your arms straight
                  and the barbell hanging at arm&apos;s length in front of your
                  thighs How to Perform Breathe in and tighten your core Curl
                  the barbell upwards towards your chest, keeping your upper
                  arms stationary and your elbows tucked in close to your torso
                  Hold the contraction at the top for a count of one Lower the
                  barbell back down to the starting position with control,
                  inhaling as you do so Repeat the movement for the desired
                  number of reps Technique Keep your movements smooth and
                  controlled throughout the exercise Avoid using momentum to
                  swing the barbell up and down Keep your head and neck in a
                  neutral position, looking straight ahead and avoiding any
                  unnecessary neck strain Engage your shoulder blades and keep
                  your shoulders down and away from your ears Things to Avoid
                  Using a weight that is too heavy and sacrificing form Arching
                  your back or swaying excessively Locking out your elbows at
                  the top of the movement Allowing your elbows to flare out to
                  the sides
                </span>
              </div>
              <div className="view-page-container13">
                <span className="view-text">Steps</span>
                <div className="view-page-container14">
                  <div className="view-page-container15 view-status">
                    <div className="view-page-icon18">
                      <svg viewBox="0 0 1024 1024" className="view-icon">
                        <path d="M500 810q86 0 145-59t59-145q0-88-24-172-62 82-198 110-120 26-120 132 0 56 40 95t98 39zM576 28q128 104 203 253t75 317q0 140-100 240t-242 100-242-100-100-240q0-216 138-380v16q0 66 44 112t110 46q64 0 105-45t41-113q0-40-8-92t-16-82z"></path>
                      </svg>
                    </div>
                    <span className="text view-text-circle">Dumbbells</span>
                  </div>
                  <div className="view-page-container16 view-status">
                    <div className="view-page-icon21">
                      <svg viewBox="0 0 1024 1024" className="view-icon">
                        <path d="M500 810q86 0 145-59t59-145q0-88-24-172-62 82-198 110-120 26-120 132 0 56 40 95t98 39zM576 28q128 104 203 253t75 317q0 140-100 240t-242 100-242-100-100-240q0-216 138-380v16q0 66 44 112t110 46q64 0 105-45t41-113q0-40-8-92t-16-82z"></path>
                      </svg>
                    </div>
                    <span className="text view-text-circle">Dumbbells</span>
                  </div>
                  <div className="view-page-container17 view-status">
                    <div className="view-page-icon24">
                      <svg viewBox="0 0 1024 1024" className="view-icon">
                        <path d="M500 810q86 0 145-59t59-145q0-88-24-172-62 82-198 110-120 26-120 132 0 56 40 95t98 39zM576 28q128 104 203 253t75 317q0 140-100 240t-242 100-242-100-100-240q0-216 138-380v16q0 66 44 112t110 46q64 0 105-45t41-113q0-40-8-92t-16-82z"></path>
                      </svg>
                    </div>
                    <span className="text view-text-circle">Dumbbells</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="view-page-food">
          <section className="section-category view-page-section3">
            <div className="view-page-hero3 hero-category">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1691991265410-c554a5720d27?ixid=M3w5MTMyMXwwfDF8YWxsfDE1fHx8fHx8Mnx8MTY5MjAwNTY2M3w&amp;ixlib=rb-4.0.3&amp;w=1500"
                className="view-page-image"
              />
              <div className="view-page-container18">
                <span className="view-page-caption1 view-text">
                  asdadsadsad
                </span>
                <div className="view-page-container19">
                  <div className="view-status view-page-container20">
                    <div className="view-page-icon27">
                      <svg viewBox="0 0 1024 1024" className="icon view-icon">
                        <path d="M682 256h256v256l-98-98-268 268-170-170-256 256-60-60 316-316 170 170 208-208z"></path>
                      </svg>
                    </div>
                    <span className="text view-text-circle">dietLabels</span>
                  </div>
                  <div className="view-page-container21 view-status">
                    <div className="view-page-icon30">
                      <svg viewBox="0 0 1024 1024" className="icon view-icon">
                        <path d="M384 0l-384 512h384l-256 512 896-640h-512l384-384z"></path>
                      </svg>
                    </div>
                    <span className="text view-text-circle">calories</span>
                  </div>
                  <div className="view-page-container22 view-status">
                    <div className="view-page-icon33">
                      <svg
                        viewBox="0 0 932.5714285714286 1024"
                        className="icon view-icon"
                      >
                        <path d="M502.857 73.143c-35.429 0-64 28.571-64 64v374.857h-18.286v-301.714c0-35.429-28.571-64-64-64s-64 28.571-64 64v448l-88-117.143c-13.714-18.286-35.429-29.143-58.286-29.143-40.571 0-73.143 33.143-73.143 73.143 0 16 5.143 31.429 14.857 44l219.429 292.571c13.714 18.286 35.429 29.143 58.286 29.143h393.143c26.286 0 49.143-18.857 54.286-44.571l43.429-231.429c1.714-10.857 2.857-22.286 2.857-33.714v-284.571c0-35.429-28.571-64-64-64s-64 28.571-64 64v155.429h-18.286v-301.714c0-35.429-28.571-64-64-64s-64 28.571-64 64v301.714h-18.286v-374.857c0-35.429-28.571-64-64-64zM502.857 0c51.429 0 98.857 29.143 122.286 75.429 8-1.714 16-2.286 24-2.286 75.429 0 137.143 61.714 137.143 137.143v9.714c79.429-4.571 146.286 56.571 146.286 136.571v284.571c0 16-1.714 32-4.571 47.429l-43.429 230.857c-10.857 60.571-64 104.571-125.714 104.571h-393.143c-45.714 0-89.714-22.286-117.143-58.286l-219.429-292.571c-18.857-25.143-29.143-56.571-29.143-88 0-80.571 65.143-146.286 146.286-146.286 24 0 53.143 5.714 73.143 19.429v-248c0-75.429 61.714-137.143 137.143-137.143 8 0 16 0.571 24 2.286 23.429-46.286 70.857-75.429 122.286-75.429z"></path>
                      </svg>
                    </div>
                    <span className="text view-text-circle">totalTime</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="view-page-section4 section-category">
            <div className="view-page-hero4 hero-category">
              <div className="view-page-container23">
                <span className="view-page-text18 view-text">
                  Total Nutrients
                </span>
                <div className="view-page-container24">
                  <div className="view-page-container25 view-status">
                    <div className="view-page-icon36">
                      <svg viewBox="0 0 1024 1024" className="view-icon">
                        <path d="M1024 448h-100.924c-27.64-178.24-168.836-319.436-347.076-347.076v-100.924h-128v100.924c-178.24 27.64-319.436 168.836-347.076 347.076h-100.924v128h100.924c27.64 178.24 168.836 319.436 347.076 347.076v100.924h128v-100.924c178.24-27.64 319.436-168.836 347.076-347.076h100.924v-128zM792.822 448h-99.762c-19.284-54.55-62.51-97.778-117.060-117.060v-99.762c107.514 24.49 192.332 109.31 216.822 216.822zM512 576c-35.346 0-64-28.654-64-64s28.654-64 64-64c35.346 0 64 28.654 64 64s-28.654 64-64 64zM448 231.178v99.762c-54.55 19.282-97.778 62.51-117.060 117.060h-99.762c24.49-107.512 109.31-192.332 216.822-216.822zM231.178 576h99.762c19.282 54.55 62.51 97.778 117.060 117.060v99.762c-107.512-24.49-192.332-109.308-216.822-216.822zM576 792.822v-99.762c54.55-19.284 97.778-62.51 117.060-117.060h99.762c-24.49 107.514-109.308 192.332-216.822 216.822z"></path>
                      </svg>
                    </div>
                    <span className="text view-text-circle">Dumbbells</span>
                  </div>
                  <div className="view-page-container26 view-status">
                    <div className="view-page-icon39">
                      <svg viewBox="0 0 1024 1024" className="view-icon">
                        <path d="M1024 448h-100.924c-27.64-178.24-168.836-319.436-347.076-347.076v-100.924h-128v100.924c-178.24 27.64-319.436 168.836-347.076 347.076h-100.924v128h100.924c27.64 178.24 168.836 319.436 347.076 347.076v100.924h128v-100.924c178.24-27.64 319.436-168.836 347.076-347.076h100.924v-128zM792.822 448h-99.762c-19.284-54.55-62.51-97.778-117.060-117.060v-99.762c107.514 24.49 192.332 109.31 216.822 216.822zM512 576c-35.346 0-64-28.654-64-64s28.654-64 64-64c35.346 0 64 28.654 64 64s-28.654 64-64 64zM448 231.178v99.762c-54.55 19.282-97.778 62.51-117.060 117.060h-99.762c24.49-107.512 109.31-192.332 216.822-216.822zM231.178 576h99.762c19.282 54.55 62.51 97.778 117.060 117.060v99.762c-107.512-24.49-192.332-109.308-216.822-216.822zM576 792.822v-99.762c54.55-19.284 97.778-62.51 117.060-117.060h99.762c-24.49 107.514-109.308 192.332-216.822 216.822z"></path>
                      </svg>
                    </div>
                    <span className="text view-text-circle">Dumbbells</span>
                  </div>
                  <div className="view-page-container27 view-status">
                    <div className="view-page-icon42">
                      <svg viewBox="0 0 1024 1024" className="view-icon">
                        <path d="M1024 448h-100.924c-27.64-178.24-168.836-319.436-347.076-347.076v-100.924h-128v100.924c-178.24 27.64-319.436 168.836-347.076 347.076h-100.924v128h100.924c27.64 178.24 168.836 319.436 347.076 347.076v100.924h128v-100.924c178.24-27.64 319.436-168.836 347.076-347.076h100.924v-128zM792.822 448h-99.762c-19.284-54.55-62.51-97.778-117.060-117.060v-99.762c107.514 24.49 192.332 109.31 216.822 216.822zM512 576c-35.346 0-64-28.654-64-64s28.654-64 64-64c35.346 0 64 28.654 64 64s-28.654 64-64 64zM448 231.178v99.762c-54.55 19.282-97.778 62.51-117.060 117.060h-99.762c24.49-107.512 109.31-192.332 216.822-216.822zM231.178 576h99.762c19.282 54.55 62.51 97.778 117.060 117.060v99.762c-107.512-24.49-192.332-109.308-216.822-216.822zM576 792.822v-99.762c54.55-19.284 97.778-62.51 117.060-117.060h99.762c-24.49 107.514-109.308 192.332-216.822 216.822z"></path>
                      </svg>
                    </div>
                    <span className="text view-text-circle">Dumbbells</span>
                  </div>
                  <div className="view-page-container28 view-status">
                    <div className="view-page-icon45">
                      <svg viewBox="0 0 1024 1024" className="view-icon">
                        <path d="M1024 448h-100.924c-27.64-178.24-168.836-319.436-347.076-347.076v-100.924h-128v100.924c-178.24 27.64-319.436 168.836-347.076 347.076h-100.924v128h100.924c27.64 178.24 168.836 319.436 347.076 347.076v100.924h128v-100.924c178.24-27.64 319.436-168.836 347.076-347.076h100.924v-128zM792.822 448h-99.762c-19.284-54.55-62.51-97.778-117.060-117.060v-99.762c107.514 24.49 192.332 109.31 216.822 216.822zM512 576c-35.346 0-64-28.654-64-64s28.654-64 64-64c35.346 0 64 28.654 64 64s-28.654 64-64 64zM448 231.178v99.762c-54.55 19.282-97.778 62.51-117.060 117.060h-99.762c24.49-107.512 109.31-192.332 216.822-216.822zM231.178 576h99.762c19.282 54.55 62.51 97.778 117.060 117.060v99.762c-107.512-24.49-192.332-109.308-216.822-216.822zM576 792.822v-99.762c54.55-19.284 97.778-62.51 117.060-117.060h99.762c-24.49 107.514-109.308 192.332-216.822 216.822z"></path>
                      </svg>
                    </div>
                    <span className="text view-text-circle">Dumbbells</span>
                  </div>
                  <div className="view-page-container29 view-status">
                    <div className="view-page-icon48">
                      <svg viewBox="0 0 1024 1024" className="view-icon">
                        <path d="M1024 448h-100.924c-27.64-178.24-168.836-319.436-347.076-347.076v-100.924h-128v100.924c-178.24 27.64-319.436 168.836-347.076 347.076h-100.924v128h100.924c27.64 178.24 168.836 319.436 347.076 347.076v100.924h128v-100.924c178.24-27.64 319.436-168.836 347.076-347.076h100.924v-128zM792.822 448h-99.762c-19.284-54.55-62.51-97.778-117.060-117.060v-99.762c107.514 24.49 192.332 109.31 216.822 216.822zM512 576c-35.346 0-64-28.654-64-64s28.654-64 64-64c35.346 0 64 28.654 64 64s-28.654 64-64 64zM448 231.178v99.762c-54.55 19.282-97.778 62.51-117.060 117.060h-99.762c24.49-107.512 109.31-192.332 216.822-216.822zM231.178 576h99.762c19.282 54.55 62.51 97.778 117.060 117.060v99.762c-107.512-24.49-192.332-109.308-216.822-216.822zM576 792.822v-99.762c54.55-19.284 97.778-62.51 117.060-117.060h99.762c-24.49 107.514-109.308 192.332-216.822 216.822z"></path>
                      </svg>
                    </div>
                    <span className="text view-text-circle">Dumbbells</span>
                  </div>
                  <div className="view-page-container30 view-status">
                    <div className="view-page-icon51">
                      <svg viewBox="0 0 1024 1024" className="view-icon">
                        <path d="M1024 448h-100.924c-27.64-178.24-168.836-319.436-347.076-347.076v-100.924h-128v100.924c-178.24 27.64-319.436 168.836-347.076 347.076h-100.924v128h100.924c27.64 178.24 168.836 319.436 347.076 347.076v100.924h128v-100.924c178.24-27.64 319.436-168.836 347.076-347.076h100.924v-128zM792.822 448h-99.762c-19.284-54.55-62.51-97.778-117.060-117.060v-99.762c107.514 24.49 192.332 109.31 216.822 216.822zM512 576c-35.346 0-64-28.654-64-64s28.654-64 64-64c35.346 0 64 28.654 64 64s-28.654 64-64 64zM448 231.178v99.762c-54.55 19.282-97.778 62.51-117.060 117.060h-99.762c24.49-107.512 109.31-192.332 216.822-216.822zM231.178 576h99.762c19.282 54.55 62.51 97.778 117.060 117.060v99.762c-107.512-24.49-192.332-109.308-216.822-216.822zM576 792.822v-99.762c54.55-19.284 97.778-62.51 117.060-117.060h99.762c-24.49 107.514-109.308 192.332-216.822 216.822z"></path>
                      </svg>
                    </div>
                    <span className="text view-text-circle">Dumbbells</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="view-page-section5 section-category">
            <div className="view-page-hero5 hero-category">
              <div className="view-page-container31">
                <span className="view-page-text25 view-text">Ingredients</span>
                <span className="view-page-text26">
                  {' '}
                  Barbell Reverse Curl: A Comprehensive Guide Setup Select a
                  barbell with the appropriate weight for your strength level
                  Stand with your feet shoulder-width apart and grip the barbell
                  with a shoulder-width overhand grip Keep your arms straight
                  and the barbell hanging at arm&apos;s length in front of your
                  thighs How to Perform Breathe in and tighten your core Curl
                  the barbell upwards towards your chest, keeping your upper
                  arms stationary and your elbows tucked in close to your torso
                  Hold the contraction at the top for a count of one Lower the
                  barbell back down to the starting position with control,
                  inhaling as you do so Repeat the movement for the desired
                  number of reps Technique Keep your movements smooth and
                  controlled throughout the exercise Avoid using momentum to
                  swing the barbell up and down Keep your head and neck in a
                  neutral position, looking straight ahead and avoiding any
                  unnecessary neck strain Engage your shoulder blades and keep
                  your shoulders down and away from your ears Things to Avoid
                  Using a weight that is too heavy and sacrificing form Arching
                  your back or swaying excessively Locking out your elbows at
                  the top of the movement Allowing your elbows to flare out to
                  the sides
                </span>
                <span className="view-page-text27">
                  {' '}
                  Barbell Reverse Curl: A Comprehensive Guide Setup Select a
                  barbell with the appropriate weight for your strength level
                  Stand with your feet shoulder-width apart and grip the barbell
                  with a shoulder-width overhand grip Keep your arms straight
                  and the barbell hanging at arm&apos;s length in front of your
                  thighs How to Perform Breathe in and tighten your core Curl
                  the barbell upwards towards your chest, keeping your upper
                  arms stationary and your elbows tucked in close to your torso
                  Hold the contraction at the top for a count of one Lower the
                  barbell back down to the starting position with control,
                  inhaling as you do so Repeat the movement for the desired
                  number of reps Technique Keep your movements smooth and
                  controlled throughout the exercise Avoid using momentum to
                  swing the barbell up and down Keep your head and neck in a
                  neutral position, looking straight ahead and avoiding any
                  unnecessary neck strain Engage your shoulder blades and keep
                  your shoulders down and away from your ears Things to Avoid
                  Using a weight that is too heavy and sacrificing form Arching
                  your back or swaying excessively Locking out your elbows at
                  the top of the movement Allowing your elbows to flare out to
                  the sides
                </span>
                <span className="view-page-text28">
                  {' '}
                  Barbell Reverse Curl: A Comprehensive Guide Setup Select a
                  barbell with the appropriate weight for your strength level
                  Stand with your feet shoulder-width apart and grip the barbell
                  with a shoulder-width overhand grip Keep your arms straight
                  and the barbell hanging at arm&apos;s length in front of your
                  thighs How to Perform Breathe in and tighten your core Curl
                  the barbell upwards towards your chest, keeping your upper
                  arms stationary and your elbows tucked in close to your torso
                  Hold the contraction at the top for a count of one Lower the
                  barbell back down to the starting position with control,
                  inhaling as you do so Repeat the movement for the desired
                  number of reps Technique Keep your movements smooth and
                  controlled throughout the exercise Avoid using momentum to
                  swing the barbell up and down Keep your head and neck in a
                  neutral position, looking straight ahead and avoiding any
                  unnecessary neck strain Engage your shoulder blades and keep
                  your shoulders down and away from your ears Things to Avoid
                  Using a weight that is too heavy and sacrificing form Arching
                  your back or swaying excessively Locking out your elbows at
                  the top of the movement Allowing your elbows to flare out to
                  the sides
                </span>
                <span className="view-page-text29">
                  {' '}
                  Barbell Reverse Curl: A Comprehensive Guide Setup Select a
                  barbell with the appropriate weight for your strength level
                  Stand with your feet shoulder-width apart and grip the barbell
                  with a shoulder-width overhand grip Keep your arms straight
                  and the barbell hanging at arm&apos;s length in front of your
                  thighs How to Perform Breathe in and tighten your core Curl
                  the barbell upwards towards your chest, keeping your upper
                  arms stationary and your elbows tucked in close to your torso
                  Hold the contraction at the top for a count of one Lower the
                  barbell back down to the starting position with control,
                  inhaling as you do so Repeat the movement for the desired
                  number of reps Technique Keep your movements smooth and
                  controlled throughout the exercise Avoid using momentum to
                  swing the barbell up and down Keep your head and neck in a
                  neutral position, looking straight ahead and avoiding any
                  unnecessary neck strain Engage your shoulder blades and keep
                  your shoulders down and away from your ears Things to Avoid
                  Using a weight that is too heavy and sacrificing form Arching
                  your back or swaying excessively Locking out your elbows at
                  the top of the movement Allowing your elbows to flare out to
                  the sides
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name5"></Footer>
    </div>
  )
}

export default ViewPage
