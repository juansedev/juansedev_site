import React from "react";
import './body.css';


/* images */
import logo from '../images/logo_icon.jpg';

export default function Body() {

  return (
    <>
      <div className="page-content">
        
          <nav className="nav-content">
            <input type="checkbox" id="nav-check"/>

            <div className="nav-icon">
              <img className='logo-branding' src={logo} alt="Logo" />
            </div>

            <div className="nav-btn">
              <label for="nav-check">
                <span></span>
                <span></span>
                <span></span>
              </label>
            </div>
            
            <div className="nav-links">
              <a href="" target="_blank">About me</a>
              <a href="" target="_blank">Resume</a>
              <a href="" target="_blank">Portfolio</a>
              <a href="" target="_blank">Blog</a>
              <a href="" target="_blank">Contact</a>
            </div>
          </nav>

          <main className="main-content">
            <h1> Main content</h1>
          </main>
          <footer className="footer-content">
              <p>footer</p>
          </footer>
      </div>
    </>
  );
}