import React from "react";
import './About.css';
import './About_responsive_600px.css';

/* pdf */
import resume from '../assets/JuanSebastianLlanocV.pdf';
import { useHistory, Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';


/* images */
import profile_photo from '../images/photo-juanse-developer.png';
import launch_rocket from '../images/launching-pana.svg'; 

export default function About() {
  /* ------------------------------------------------------ */
    const history = useHistory();
  /* ------------------------------------------------------ */

  function nextPage(e) {
    e.preventDefault();
    window.scrollTo(0,0); 
    history.push("/travel_in_tech")
  }

  return (
    <>
      <section  id="start"className="intro">
        <div class="circle">
          <img src={profile_photo} alt="Juan Sebastian"/>
        </div>

        <div className="intro-text">
          <h1 className="title-first">Full-Stack Developer, always learner, eager for knowledge, and smiley person..</h1>
          <p className="paragraph">I write my code thinking about the person who will read it, I'm an enthusiastic learner, and sometimes I teach my friends. I'll do my best to help you solve your problems.</p>
          <div className="btn-contact">
            <a href={resume} className="btn" download>Download Resume</a>
            <Link to="/contact" type="button" className="btn left-btn contacts">Contact</Link>
          </div>
        </div>
      </section>

      
      <section className="stack">
        <h2 className="title-first center">Hi, I’m Juan Sebastian. Nice to meet you.</h2>
        <p className="paragraph center">
          From the beginning of my academic and working life, I've been connected with software development world, I have programmed PIC microcontrollers, my firsts languages were C++ and Dr. Scheme, I have studied about agile(Scrum), low level, Linux and web development.
          <br />Let's start this journey.
        </p>
        <Fade bottom>
          <img className='image pointer' src={launch_rocket} alt="image-rocket-launch" onClick={nextPage} />
        </Fade>
      </section>
      
    </>
  );
}


