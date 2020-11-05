import React from "react";
import './body.css';


/* images */
import logo from '../images/logo_icon.jpg';
import profile_photo from '../images/profile_photo.png';

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
            <div class="circle">
	            <img src={profile_photo} alt="Juan Sebastian"/>
            </div>

            <div className="presentation">
              <p>Full-stack developer</p>
              <h1> Juan Sebastian Llano Gallego</h1>
              <p>Software developer passionate about sharing knowledge and conveying ideas, with more than two years of experience in customer service and software technical support. Interested in understanding how people consume digital products that find in the environment and how to create products through technology</p>
            </div>

          </main>
          <footer className="footer-content">
              {/* <p>footer</p> */}
          </footer>
      </div>
    </>
  );
}