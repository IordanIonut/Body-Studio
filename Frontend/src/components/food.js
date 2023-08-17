import React from 'react'

import PropTypes from 'prop-types'

import './food.css'

const Food = (props) => {
  return (
    <section className={`food-card ${props.rootClassName} `}>
      <main className="food-content">
        <h1 className="food-header">{props.Header}</h1>
        <div className="food-container">
          <h1 className="food-header1">{props.Header1}</h1>
          <h1 className="food-header2">{props.Header11}</h1>
        </div>
      </main>
      <div className="food-container1">
        <div className="food-container2">
          <div className="food-icon">
            <svg viewBox="0 0 1024 1024" className="icon">
              <path
                d="M682 256h256v256l-98-98-268 268-170-170-256 256-60-60 316-316 170 170 208-208z"
                className=""
              ></path>
            </svg>
          </div>
          <span className="food-text text">{props.text3}</span>
        </div>
        <div className="food-container3">
          <div className="food-icon3">
            <svg viewBox="0 0 1024 1024" className="icon">
              <path
                d="M384 0l-384 512h384l-256 512 896-640h-512l384-384z"
                className=""
              ></path>
            </svg>
          </div>
          <span className="food-text1 text">{props.text2}</span>
        </div>
        <div className="food-container4">
          <div className="food-icon6">
            <svg viewBox="0 0 932.5714285714286 1024" className="icon">
              <path
                d="M502.857 73.143c-35.429 0-64 28.571-64 64v374.857h-18.286v-301.714c0-35.429-28.571-64-64-64s-64 28.571-64 64v448l-88-117.143c-13.714-18.286-35.429-29.143-58.286-29.143-40.571 0-73.143 33.143-73.143 73.143 0 16 5.143 31.429 14.857 44l219.429 292.571c13.714 18.286 35.429 29.143 58.286 29.143h393.143c26.286 0 49.143-18.857 54.286-44.571l43.429-231.429c1.714-10.857 2.857-22.286 2.857-33.714v-284.571c0-35.429-28.571-64-64-64s-64 28.571-64 64v155.429h-18.286v-301.714c0-35.429-28.571-64-64-64s-64 28.571-64 64v301.714h-18.286v-374.857c0-35.429-28.571-64-64-64zM502.857 0c51.429 0 98.857 29.143 122.286 75.429 8-1.714 16-2.286 24-2.286 75.429 0 137.143 61.714 137.143 137.143v9.714c79.429-4.571 146.286 56.571 146.286 136.571v284.571c0 16-1.714 32-4.571 47.429l-43.429 230.857c-10.857 60.571-64 104.571-125.714 104.571h-393.143c-45.714 0-89.714-22.286-117.143-58.286l-219.429-292.571c-18.857-25.143-29.143-56.571-29.143-88 0-80.571 65.143-146.286 146.286-146.286 24 0 53.143 5.714 73.143 19.429v-248c0-75.429 61.714-137.143 137.143-137.143 8 0 16 0.571 24 2.286 23.429-46.286 70.857-75.429 122.286-75.429z"
                className=""
              ></path>
            </svg>
          </div>
          <span className="food-text2 text">{props.text1}</span>
        </div>
      </div>
      <div className="food-button">
        <a
          href={props.ButtonLink}
          target="_blank"
          rel="noreferrer noopener"
          className="food-link"
        >
          <p className="food-text3">{props.Button}</p>
        </a>
      </div>
    </section>
  )
}

Food.defaultProps = {
  rootClassName: '',
  text: 'Dumbbells',
  text1: 'Dumbbells',
  ButtonLink: '',
  Button: 'View ->',
  Header1: 'categorie',
  Header11: 'calori',
  Header: 'Bodyweight',
  text2: 'Dumbbells',
  text3: 'Dumbbells',
}

Food.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  ButtonLink: PropTypes.string,
  Button: PropTypes.string,
  Header1: PropTypes.string,
  Header11: PropTypes.string,
  Header: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
}

export default Food
