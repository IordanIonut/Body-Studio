import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import ContactPage from './views/contact-page'
import ViewPage from './views/view-page'
import HomePage from './views/home-page'
import SearchPage from './views/search-page'
import LoginPage from './views/login-page'
import CategoryPage from './views/category-page'
import Page from './views/page'
import AccountHome from './views/account-home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={ContactPage} exact path="/contact" />
        <Route component={ViewPage} exact path="/view" />
        <Route component={HomePage} exact path="/home" />
        <Route component={SearchPage} exact path="/search" />
        <Route component={LoginPage} exact path="/login" />
        <Route component={CategoryPage} exact path="/category" />
        <Route component={Page} path="**" />
        <Route component={AccountHome} exact path="/account" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
