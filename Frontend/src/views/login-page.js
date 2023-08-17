import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Footer from '../components/footer'
import './login-page.css'

const LoginPage = (props) => {
  return (
    <div className="login-page-container">
      <Helmet>
        <title>Body Studio</title>
        <meta property="og:title" content="Body Studio" />
      </Helmet>
      <nav className="login-page-navbar">
        <Link to={`home`}>
          <img
            alt={props.BrandingLogo_alt}
            src={process.env.PUBLIC_URL+`/Icons/body studio-800w.png`}
            loading="eager"
            style={{width: '10%', height: '10%'}}
          />
        </Link>
      </nav>
      <section className="login-page-login baner">
        <main className="login-page-steps1">
          <div className="login-page-header">
            <h2 className="name">Login</h2>
            <div className="login-page-get-started button">
              <span className="login-page-text01">Google</span>
            </div>
            <form className="login-page-form">
              <div className="input-login-page">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="login-page-textinput input"
                />
                <div className="login-page-buy">
                  <span className="login-page-text02">Email</span>
                </div>
              </div>
              <div className="login-page-input-field01 input-login-page">
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="login-page-textinput01 input"
                />
                <div className="login-page-buy01">
                  <span className="login-page-text03">Password</span>
                </div>
              </div>
            </form>
          </div>
          <span className="login-page-text04">Lost your password?</span>
          <div className="login-page-buttons">
            <div className="login-page-get-started01 button">
              <span className="login-page-text05">Login</span>
            </div>
            <div className="login-page-book-demo button">
              <span className="login-page-text06">CreateAccount</span>
            </div>
          </div>
        </main>
        <main className="login-page-steps2">
          <div className="login-page-header1">
            <h2 className="name">Login</h2>
            <form className="login-page-form1">
              <div className="input-login-page">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="login-page-textinput02 input"
                />
                <div className="login-page-buy02">
                  <span className="login-page-text08">Email</span>
                </div>
              </div>
            </form>
          </div>
          <div className="login-page-buttons1">
            <div className="login-page-get-started02 button">
              <span className="login-page-text09">Send</span>
            </div>
            <div className="login-page-book-demo1 button">
              <span className="login-page-text10">Back</span>
            </div>
          </div>
        </main>
        <main className="login-page-steps3">
          <div className="login-page-header2">
            <h2 className="name">Login</h2>
            <form className="login-page-form2">
              <div className="login-page-input-field03 input-login-page">
                <input
                  type="email"
                  size="1"
                  maxlength="1"
                  minlength="1"
                  placeholder="-"
                  className="code input"
                />
                <input
                  type="email"
                  size="1"
                  maxlength="1"
                  minlength="1"
                  placeholder="-"
                  className="code input"
                />
                <input
                  type="email"
                  size="1"
                  maxlength="1"
                  minlength="1"
                  placeholder="-"
                  className="code input"
                />
                <input
                  type="email"
                  size="1"
                  maxlength="1"
                  minlength="1"
                  placeholder="-"
                  className="code input"
                />
                <input
                  type="email"
                  size="1"
                  maxlength="1"
                  minlength="1"
                  placeholder="-"
                  className="code input"
                />
                <div className="login-page-buy03">
                  <span className="login-page-text12">Code</span>
                </div>
              </div>
            </form>
          </div>
          <div className="login-page-buttons2">
            <div className="login-page-get-started03 button">
              <span className="login-page-text13">Continue</span>
            </div>
            <div className="login-page-book-demo2 button">
              <span className="login-page-text14">Login</span>
            </div>
          </div>
        </main>
        <main className="login-page-steps4">
          <div className="login-page-header3">
            <h2 className="name">Login</h2>
            <form className="login-page-form3">
              <div className="input-login-page">
                <input
                  type="password"
                  placeholder="Enter your new password"
                  className="login-page-textinput08 input"
                />
                <div className="login-page-buy04">
                  <span className="login-page-text16">Email</span>
                </div>
              </div>
              <div className="input-login-page">
                <input
                  type="password"
                  placeholder="Enter your new password"
                  className="login-page-textinput09 input"
                />
                <div className="login-page-buy05">
                  <span className="login-page-text17">Email</span>
                </div>
              </div>
            </form>
          </div>
          <div className="login-page-buttons3">
            <div className="login-page-get-started04 button">
              <span className="login-page-text18">Send</span>
            </div>
            <div className="login-page-book-demo3 button">
              <span className="login-page-text19">Back</span>
            </div>
          </div>
        </main>
      </section>
      <section className="login-page-create-account">
        <div className="login-page-steps">
          <div className="login-page-container01">
            <div className="login-page-step">
              <div className="login-page-container02">
                <div className="login-page-line"></div>
                <div className="login-page-container03">
                  <svg viewBox="0 0 1024 1024" className="login-page-icon">
                    <path d="M634 558q92-64 92-174 0-88-63-151t-151-63-151 63-63 151q0 46 27 96t65 78l36 26v98h172v-98zM512 86q124 0 211 87t87 211q0 156-128 244v98q0 18-12 30t-30 12h-256q-18 0-30-12t-12-30v-98q-128-88-128-244 0-124 87-211t211-87zM384 896v-42h256v42q0 18-12 30t-30 12h-172q-18 0-30-12t-12-30z"></path>
                  </svg>
                </div>
                <div className="login-page-line1"></div>
              </div>
              <div className="login-page-container04">
                <h1 className="login-page-text20">
                  <span>Deploy</span>
                </h1>
              </div>
            </div>
            <div className="login-page-step1">
              <div className="login-page-container05">
                <div className="login-page-line2"></div>
                <div className="login-page-container06">
                  <svg viewBox="0 0 1024 1024" className="login-page-icon2">
                    <path d="M746 512q26 0 45-18t19-46-19-46-45-18-45 18-19 46 19 46 45 18zM618 342q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM406 342q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM278 512q26 0 45-18t19-46-19-46-45-18-45 18-19 46 19 46 45 18zM512 128q158 0 271 100t113 242q0 88-63 150t-151 62h-74q-28 0-46 19t-18 45q0 22 16 42t16 44q0 28-18 46t-46 18q-160 0-272-112t-112-272 112-272 272-112z"></path>
                  </svg>
                </div>
                <div className="login-page-line3"></div>
              </div>
              <div className="login-page-container07">
                <h1 className="login-page-text22">
                  <span>Deploy</span>
                </h1>
              </div>
            </div>
            <div className="login-page-step2">
              <div className="login-page-container08">
                <div className="login-page-line4"></div>
                <div className="login-page-container09">
                  <svg viewBox="0 0 1024 1024" className="login-page-icon4">
                    <path d="M576 736l96 96 320-320-320-320-96 96 224 224z"></path>
                    <path d="M448 288l-96-96-320 320 320 320 96-96-224-224z"></path>
                  </svg>
                </div>
                <div className="login-page-line5"></div>
              </div>
              <div className="login-page-container10">
                <h1 className="login-page-text24">
                  <span>Develop</span>
                </h1>
              </div>
            </div>
            <div className="login-page-step3">
              <div className="login-page-container11">
                <div className="login-page-line6"></div>
                <div className="login-page-container12">
                  <svg viewBox="0 0 1024 1024" className="login-page-icon7">
                    <path d="M480 64c-265.096 0-480 214.904-480 480 0 265.098 214.904 480 480 480 265.098 0 480-214.902 480-480 0-265.096-214.902-480-480-480zM751.59 704c8.58-40.454 13.996-83.392 15.758-128h127.446c-3.336 44.196-13.624 87.114-30.68 128h-112.524zM208.41 384c-8.58 40.454-13.996 83.392-15.758 128h-127.444c3.336-44.194 13.622-87.114 30.678-128h112.524zM686.036 384c9.614 40.962 15.398 83.854 17.28 128h-191.316v-128h174.036zM512 320v-187.338c14.59 4.246 29.044 11.37 43.228 21.37 26.582 18.74 52.012 47.608 73.54 83.486 14.882 24.802 27.752 52.416 38.496 82.484h-155.264zM331.232 237.516c21.528-35.878 46.956-64.748 73.54-83.486 14.182-10 28.638-17.124 43.228-21.37v187.34h-155.264c10.746-30.066 23.616-57.68 38.496-82.484zM448 384v128h-191.314c1.88-44.146 7.666-87.038 17.278-128h174.036zM95.888 704c-17.056-40.886-27.342-83.804-30.678-128h127.444c1.762 44.608 7.178 87.546 15.758 128h-112.524zM256.686 576h191.314v128h-174.036c-9.612-40.96-15.398-83.854-17.278-128zM448 768v187.34c-14.588-4.246-29.044-11.372-43.228-21.37-26.584-18.74-52.014-47.61-73.54-83.486-14.882-24.804-27.75-52.418-38.498-82.484h155.266zM628.768 850.484c-21.528 35.876-46.958 64.746-73.54 83.486-14.184 9.998-28.638 17.124-43.228 21.37v-187.34h155.266c-10.746 30.066-23.616 57.68-38.498 82.484zM512 704v-128h191.314c-1.88 44.146-7.666 87.040-17.28 128h-174.034zM767.348 512c-1.762-44.608-7.178-87.546-15.758-128h112.524c17.056 40.886 27.344 83.806 30.68 128h-127.446zM830.658 320h-95.9c-18.638-58.762-44.376-110.294-75.316-151.428 42.536 20.34 81.058 47.616 114.714 81.272 21.48 21.478 40.362 44.938 56.502 70.156zM185.844 249.844c33.658-33.658 72.18-60.932 114.714-81.272-30.942 41.134-56.676 92.666-75.316 151.428h-95.898c16.138-25.218 35.022-48.678 56.5-70.156zM129.344 768h95.898c18.64 58.762 44.376 110.294 75.318 151.43-42.536-20.34-81.058-47.616-114.714-81.274-21.48-21.478-40.364-44.938-56.502-70.156zM774.156 838.156c-33.656 33.658-72.18 60.934-114.714 81.274 30.942-41.134 56.678-92.668 75.316-151.43h95.9c-16.14 25.218-35.022 48.678-56.502 70.156z"></path>
                  </svg>
                </div>
                <div className="login-page-line7"></div>
              </div>
              <div className="login-page-container13">
                <h1 className="login-page-text26">
                  <span>Deploy</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <main className="login-page-pass1 baner">
          <div className="login-page-header4">
            <span className="login-page-text28 name">Create Account</span>
            <div className="login-page-get-started05 button">
              <span className="login-page-text29">Google</span>
            </div>
            <form className="login-page-form4">
              <div className="input-login-page">
                <input
                  type="email"
                  placeholder="Enter your name"
                  className="login-page-textinput10 input"
                />
                <div className="login-page-buy06">
                  <span className="login-page-text30">Name</span>
                </div>
              </div>
              <div className="input-login-page">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="login-page-textinput11 input"
                />
                <div className="login-page-buy07">
                  <span className="login-page-text31">Email</span>
                </div>
              </div>
              <div className="input-login-page">
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="login-page-textinput12 input"
                />
                <div className="login-page-buy08">
                  <span className="login-page-text32">Password</span>
                </div>
              </div>
              <div className="input-login-page">
                <input
                  type="password"
                  placeholder="Repeat yout password"
                  className="login-page-textinput13 input"
                />
                <div className="login-page-buy09">
                  <span className="login-page-text33">RepeatPassword</span>
                </div>
              </div>
            </form>
          </div>
          <div className="login-page-buttons4">
            <div className="login-page-get-started06 button">
              <span className="login-page-text34">Continue</span>
            </div>
            <div className="login-page-book-demo4 button">
              <span className="login-page-text35">Login</span>
            </div>
          </div>
        </main>
        <main className="login-page-pass2 baner">
          <div className="login-page-header5">
            <span className="login-page-text36 name">Create Account</span>
            <form className="login-page-form5">
              <div className="login-page-input-field10 input-login-page">
                <select className="login-page-select">
                  <option value="Male" selected>
                    Male
                  </option>
                  <option value="Female">Female</option>
                </select>
                <div className="login-page-buy10">
                  <span className="login-page-text37">
                    <span className="login-page-text38">Gender</span>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                  </span>
                </div>
              </div>
              <div className="input-login-page">
                <input
                  type="text"
                  placeholder="Enter your age"
                  className="login-page-textinput14 input"
                />
                <div className="login-page-buy11">
                  <span className="login-page-text44">Age</span>
                </div>
              </div>
              <div className="input-login-page">
                <input
                  type="text"
                  placeholder="Enter your body size"
                  className="login-page-textinput15 input"
                />
                <div className="login-page-buy12">
                  <span className="login-page-text45">Body size</span>
                </div>
              </div>
              <div className="input-login-page">
                <input
                  type="text"
                  placeholder="Enter yout weight"
                  className="login-page-textinput16 input"
                />
                <div className="login-page-buy13">
                  <span className="login-page-text46">Weight</span>
                </div>
              </div>
            </form>
          </div>
          <div className="login-page-buttons5">
            <div className="login-page-get-started07 button">
              <span className="login-page-text47">Continue</span>
            </div>
            <div className="login-page-book-demo5 button">
              <span className="login-page-text48">Back</span>
            </div>
          </div>
        </main>
        <main className="login-page-pass3 baner">
          <div className="login-page-header6">
            <span className="login-page-text49 name">Create Account</span>
            <form className="login-page-form6">
              <div className="login-page-container14">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1483858740158-d8d0c191bbe8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fHNlZGVudGFyeXxlbnwwfHx8fDE2OTAyOTMzODl8MA&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="login-page-image"
                />
                <input type="checkbox" checked="true" />
              </div>
              <div className="login-page-container15">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxzZWRlbnRhcnl8ZW58MHx8fHwxNjkwMjkzMzg5fDA&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="login-page-image1"
                />
                <input type="checkbox" checked="true" />
              </div>
              <div className="login-page-container16">
                <img
                  alt="image"
                  src="https://play.teleporthq.io/static/svg/default-img.svg"
                  className="login-page-image2"
                />
                <input type="checkbox" checked="true" />
              </div>
              <div className="login-page-container17">
                <img
                  alt="image"
                  src="https://play.teleporthq.io/static/svg/default-img.svg"
                  className="login-page-image3"
                />
                <input type="checkbox" checked="true" />
              </div>
            </form>
          </div>
          <div className="login-page-buttons6">
            <div className="login-page-get-started08 button">
              <span className="login-page-text50">Continue</span>
            </div>
            <div className="login-page-book-demo6 button">
              <span className="login-page-text51">Back</span>
            </div>
          </div>
        </main>
        <main className="login-page-pass4 baner">
          <div className="login-page-header7">
            <span className="login-page-text52 name">Create Account</span>
            <form className="login-page-form7">
              <div className="login-page-container18">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1483858740158-d8d0c191bbe8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fHNlZGVudGFyeXxlbnwwfHx8fDE2OTAyOTMzODl8MA&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="login-page-image4"
                />
                <input type="checkbox" checked="true" />
              </div>
              <div className="login-page-container19">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxzZWRlbnRhcnl8ZW58MHx8fHwxNjkwMjkzMzg5fDA&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="login-page-image5"
                />
                <input type="checkbox" checked="true" />
              </div>
              <div className="login-page-container20">
                <img
                  alt="image"
                  src="https://play.teleporthq.io/static/svg/default-img.svg"
                  className="login-page-image6"
                />
                <input type="checkbox" checked="true" />
              </div>
              <div className="login-page-container21">
                <img
                  alt="image"
                  src="https://play.teleporthq.io/static/svg/default-img.svg"
                  className="login-page-image7"
                />
                <input type="checkbox" checked="true" />
              </div>
            </form>
          </div>
          <div className="login-page-buttons7">
            <div className="login-page-get-started09 button">
              <span className="login-page-text53">Create Account</span>
            </div>
            <div className="login-page-book-demo7 button">
              <span className="login-page-text54">Back</span>
            </div>
          </div>
        </main>
      </section>
      <Footer rootClassName="footer-root-class-name3"></Footer>
    </div>
  )
}

export default LoginPage
