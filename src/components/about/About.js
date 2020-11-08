import React from "react";
import './About.css';
import './About_responsive_600px.css';

/* pdf */
import resume from '../assets/JuanSebastianLlanocV.pdf';
import { Link} from 'react-router-dom';

/* images */
import profile_photo from '../images/photo-juanse-developer.png';
import launch_rocket from '../images/launching-pana.svg'; 

export default function About() {


  return (
    <>
      <section className="intro">
        <div class="circle">
          <img src={profile_photo} alt="Juan Sebastian"/>
        </div>

        <div className="intro-text">
          <h1 className="title-first">Full-Stack Developer, always learner, and smiley person.</h1>
          <p className="paragraph">I write my code thinking about the person who will read it, I'm an enthusiastic learner, and sometimes I teach my friends. I'll do my best to help you solve your problems.</p>
          <div className="btn-contact">
            <button className="btn" type="button"><a href={resume} download>Download Resume</a></button>
            <button className="btn left-btn" ><a href="#contact" download>Contact</a></button>
          </div>
        </div>
      </section>

      
      <section className="stack">
        <h2 className="title-first center">Hi, I’m Juan Sebastian. Nice to meet you.</h2>
        <p className="paragraph center">
          From the beginning of my academic and working life, I've been connected with software development world, I have programmed PIC microcontrollers, my firsts languages were C++ and Dr. Scheme, I have studied about agile(SCRUM), low level, linux and web development.
          <br />Know more about my journey in <Link to="/travel_in_tech">My journey at Tech</Link>.
        </p>
        <img className='image' src={launch_rocket} alt="image-rocket-launch" />
      </section>
    </>
  );
}