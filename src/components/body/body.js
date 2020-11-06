import React from "react";
import './body.css';

/* pdf */
import resume from '../asets/JuanSebastianLlanocV.pdf';
/* images */
import baner from '../images/banner-juanse-developer.jpg';
import logo from '../images/logo_juanse-developer.jpg';
import profile_photo from '../images/photo-juanse-developer.png';
import icon_github from '../images/github.svg';
import icon_linkedin from '../images/linkedin.svg';
import icon_twitter from '../images/twitter.svg';
import icon_email from '../images/email.svg';

export default function Body() {

  return (
    <>
      <article className="page-content">
        
          <nav className="nav-content">
            <input type="checkbox" id="nav-check"/>

            <div className="nav-icon">
              <img className='logo-branding' src={baner} alt="Logo" />
            </div>

            <div className="nav-btn">
              <label for="nav-check">
                <span></span>
                <span></span>
                <span></span>
              </label>
            </div>
            
            <div className="nav-links">
              {/* <a href="#resume">About me</a> */}
              <a href="#intro">Home</a>
              <a href="#resume">Resume</a>
              <a href="#contact">Contact</a>
              
              
              {/* <a href="">Portfolio</a>
              <a href="#contact">Blog</a> */}
              
            </div>
          </nav>
          
          <main className="main-content">
            <section id="intro"className="intro">
              <div class="circle">
                <img src={profile_photo} alt="Juan Sebastian"/>
              </div>

              <div className="intro-text">
                <h1 className="title-first">Full-Stack Developer, Learner, and smiley person.</h1>
                <p className="paragraph">I write code thinking in the person who will read my code, love learning, in ocasions I teaching to my friends, and if I can, I will help you to resolve your problem.</p>
                <div className="btn-contact">
                  <button className="btn" type="button"><a href={resume} download>Download Resume</a></button>
                  <button className="btn left-btn" ><a href="#contact" download>Contact</a></button>
                </div>
              </div>
              

            </section>
            
            {/* <section  className="about">
              <h1 className="title-first center">About</h1>
              
            </section> */}

            <section id="resume" className="resume">
              <h1 className="title-first">Resume</h1>
              <embed className="pdf" src={resume} type="application/pdf" ></embed>
            </section>
            {/* <section  className="portfolio">
              <h1 className="title-first center">Portfolio</h1>
              
            </section>

            <section  className="blog">
              <h1 className="title-first center">Blog</h1>
              
            </section>
             */}
          </main>
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
    </>
  );
}