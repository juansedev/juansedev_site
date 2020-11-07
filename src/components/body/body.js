import React from "react";
import './body.css';
import './body_responsive_600px.css';

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
import developer from '../images/Developer-activity-bro.svg';
import developer_1 from '../images/developer-1.svg';
import launch_rocket from '../images/launching-pana.svg'; 

export default function Body() {

  return (
    <>
      <article className="page-content">
        
          <nav className="nav-content">
            <input type="checkbox" id="nav-check"/>

            <div className="nav-icon">
              <img className='logo-branding' src={baner} alt="Logo-juanse-developer" />
            </div>

            <div className="nav-btn">
              <label for="nav-check">
                <span></span>
                <span></span>
                <span></span>
              </label>
            </div> 
            
            <div className="menu">
              <a href="#intro">Home</a>
              <a href="#about">About me</a>
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
                <h1 className="title-first">Full-Stack Developer, learner, and smiley person.</h1>
                <p className="paragraph">I write my code thinking about the person who will read it, I'm an enthusiastic learner, and sometimes I teach my friends. I'll do my best to help you solve your problems.</p>
                <div className="btn-contact">
                  <button className="btn" type="button"><a href={resume} download>Download Resume</a></button>
                  <button className="btn left-btn" ><a href="#contact" download>Contact</a></button>
                </div>
              </div>
            </section>

            
            <section id="about" className="stack">
              <h2 className="title-first center">Hi, I’m Juan Sebastian. Nice to meet you.</h2>
              <p className="paragraph center">
                From the beginning of my academic and laboral life, I've been connected with the software developing world, I have programmed PIC microcontrollers, mis firsts languages were C and Dr. Scheme, I have studied about agile(SCRUM), low level, linux and web development.
                <br />Know more about my journey in <a href="">My journey at Tech</a>
              </p>
              <img className='image' src={launch_rocket} alt="image-rocket-launch" />
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