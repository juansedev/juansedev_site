import './App.css';
import './App_responsive600px.css';
import {About, Resume, Travel, Contact }from "./components";

import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

/* images */
import baner from './components/images/banner-juanse-developer.jpg';
import icon_github from './components/images/github.svg';
import icon_linkedin from './components/images/linkedin.svg';
import icon_twitter from './components/images/twitter.svg';
import icon_email from './components/images/email.svg';

function App() {
  return (
    <div className="App">

      {/* Basic implementation of React router dom */}
      <Router>

        {/* in this article it renders whole SPA */}
        <article id="home" className="page-content">
          {/* 
            * Nav bar, implement the logi for render a burguer menu in responsive 600px,
            * Alert: Responsive design is missing for other screen sizes
            */}
          <nav className="nav-content">
            <input type="checkbox" id="nav-check"/>

            <div className="nav-icon">
              <Link to="/"><img className='logo-branding' src={baner} alt="Logo-juanse-developer" /></Link>
            </div>

            <div className="nav-btn">
              <label for="nav-check">
                <span></span>
                <span></span>
                <span></span>
              </label>
            </div> 

            <div className="menu">
              <Link to="/">Home</Link>
              <Link to="/travel_in_tech">Travel in tech</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/contact">Contact</Link>

            </div>

          </nav>

          {/* The Switch component select which component it renders inside it */}
          <Switch>
            <Route exact path="/">
              <About />
            </Route>
            <Route exact path="/travel_in_tech">
              <Travel />
            </Route>
            <Route exact path="/resume">
              <Resume />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>

          {/* footer section */}
          <footer className="footer-content">
            <article id="contact" className="icon-brand">
              {/* <img id="contact" className="icon-js" src={logo} alt="icon juanse-developer"/> */}
              <img className="baner-js" src={baner} alt="baner juanse-developer"/>
            </article>
            <article className="profile-icons">
              <a href="mailto:juanllano93@gmail.com"><img className="icon" src={icon_email} alt="email: juanllano93@gmail.com"/></a>
              <a href="https://github.com/juansedev/" target="blank"><img className="icon" src={icon_github} alt="github_user: @juansedev"/></a>
              <a href="https://www.linkedin.com/in/juansebastianllanogallego/" target="blank"><img className="icon" src={icon_linkedin} alt="linkedin: Juan Sebastian Llano Gallego"/></a>
              <a href="https://twitter.com/juanse_dev" target="blank"><img className="icon" src={icon_twitter} alt="twitter_user: @juanse_dev"/></a>
              
            </article>
            <p>© 2020 All rights reserved. Juan Sebastian Llano.</p>
          </footer>

        </article>
      </Router>
    </div>
  );
}

export default App;
