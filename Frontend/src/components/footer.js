import React from 'react'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <footer className={`footer-footer ${props.rootClassName} `}>
      <div className="footer-content">
        <main className="footer-main-content">
          <div className="footer-content1">
            <header className="footer-main">
              <div className="footer-header">
                <img
                  alt={props.Branding_alt}
                  src={process.env.PUBLIC_URL+`/Icons/body studio-800w.png`}
                  className="footer-branding"
                />
              </div>
              <div className="footer-socials">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="footer-icon social"
                >
                  <path
                    d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
                    className=""
                  ></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="footer-icon02 social"
                >
                  <path
                    d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
                    className=""
                  ></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="footer-icon04 social"
                >
                  <path
                    d="M199.429 357.143v566.286h-188.571v-566.286h188.571zM211.429 182.286c0.571 54.286-40.571 97.714-106.286 97.714v0h-1.143c-63.429 0-104-43.429-104-97.714 0-55.429 42.286-97.714 106.286-97.714 64.571 0 104.571 42.286 105.143 97.714zM877.714 598.857v324.571h-188v-302.857c0-76-27.429-128-95.429-128-52 0-82.857 34.857-96.571 68.571-4.571 12.571-6.286 29.143-6.286 46.286v316h-188c2.286-513.143 0-566.286 0-566.286h188v82.286h-1.143c24.571-38.857 69.143-95.429 170.857-95.429 124 0 216.571 81.143 216.571 254.857z"
                    className=""
                  ></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="footer-icon06 social"
                >
                  <path
                    d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
                    className=""
                  ></path>
                </svg>
              </div>
            </header>
            <header className="footer-categories">
              <div className="footer-category">
                <div className="footer-header1">
                  <span className="footer-header">{props.Text1}</span>
                </div>
                <div className="footer-links">
                  <div className="footer-container">
                    <svg viewBox="0 0 1024 1024" className="footer-icon08 mr-2">
                      <path
                        d="M128 337.963l359.552 251.691c14.507 10.027 33.92 10.496 48.939 0l359.509-251.691v430.037c0 11.605-4.693 22.229-12.587 30.080s-18.475 12.587-30.080 12.587h-682.667c-11.605 0-22.229-4.693-30.080-12.587s-12.587-18.475-12.587-30.080zM42.667 256.512v511.488c0 35.328 14.507 67.371 37.547 90.453s55.125 37.547 90.453 37.547h682.667c35.328 0 67.371-14.507 90.453-37.547s37.547-55.125 37.547-90.453v-511.488c0-0.427 0-0.853 0-1.28-0.213-35.029-14.635-66.773-37.547-89.685-23.083-23.040-55.125-37.547-90.453-37.547h-682.667c-35.328 0-67.371 14.507-90.453 37.547-22.912 22.912-37.333 54.656-37.547 89.728 0 0.213 0 0.469 0 0.725zM891.477 236.971l-379.477 265.6-379.477-265.6c2.048-4.096 4.779-7.808 8.021-11.051 7.893-7.893 18.517-12.587 30.123-12.587h682.667c11.605 0 22.229 4.693 30.080 12.587 3.243 3.243 5.973 6.997 8.021 11.051z"
                        className=""
                      ></path>
                    </svg>
                    <span className="footer-link">{props.Text2}</span>
                  </div>
                  <div className="footer-container1">
                    <svg viewBox="0 0 1024 1024" className="footer-icon10 mr-2">
                      <path
                        d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"
                        className=""
                      ></path>
                    </svg>
                    <span className="footer-link">{props.Text3}</span>
                  </div>
                </div>
              </div>
            </header>
          </div>
          <section className="footer-copyright">
            <span className="footer-text3">{props.text1}</span>
          </section>
        </main>
        <main className="footer-subscribe">
          <main className="footer-main1">
            <h1 className="footer-heading">{props.Heading}</h1>
            <div className="footer-input-field">
              <input
                type="email"
                placeholder={props.textinput_placeholder}
                className="footer-textinput input"
              />
              <div className="footer-buy button">
                <span className="footer-text4">{props.Text}</span>
                <span className="footer-text5">
                  <span className="">Subscribe now</span>
                  <br className=""></br>
                </span>
              </div>
            </div>
          </main>
          <h1 className="footer-notice">{props.Notice}</h1>
        </main>
        <section className="footer-copyright1">
          <span className="footer-text8">{props.text}</span>
        </section>
      </div>
    </footer>
  )
}

Footer.defaultProps = {
  Text1: 'Contact',
  Branding_src: '/Icons/body%20studio-800w.png',
  rootClassName: '',
  text: '© 2022 latitude. All Rights Reserved.',
  Heading: 'Subscribe to our newsletter',
  Branding_alt: 'image',
  textinput_placeholder: 'Enter your email',
  Text3: '0760045123\n',
  Notice:
    'By subscribing to our newsletter you agree with our Terms and Conditions.',
  text1: '© 2022 Body Studio. All Rights Reserved.',
  Text: '->',
  Text2: 'contact@bodystudio.com',
}

Footer.propTypes = {
  Text1: PropTypes.string,
  Branding_src: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  Heading: PropTypes.string,
  Branding_alt: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  Text3: PropTypes.string,
  Notice: PropTypes.string,
  text1: PropTypes.string,
  Text: PropTypes.string,
  Text2: PropTypes.string,
}

export default Footer
