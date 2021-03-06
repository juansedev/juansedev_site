import React, { useState } from 'react';

import Fade from 'react-reveal/Fade';
import build_contruction from '../images/Under-construction-bro.svg';
import moving_forward from '../images/moving-forward-pana.svg';
import beginnig from '../images/market-launch-amico.svg';
import next_steps from '../images/pair-programming-rafiki.svg';
import working_life from '../images/operating-system-rafiki.svg';
import at_the_present from '../images/paper-map-amico.svg';

import './Travel.css';
import './Travel_responsive600px.css';


export default function Travel() {

  return(
    <>
      <section className="travel">
        <h2 className="title-first">My journey in the tech world</h2>
        <img className="image top" src={moving_forward} alt="person-movinf-forward"/>
        <p className="main-paragraph">
          From the beginning of my academic and working life, I've been connected with software development world, I have programmed
          PIC microcontrollers, my firsts languages were <span>C++</span> and <span>Dr. Scheme</span>, I have studied about
          agile(<span>Scrum</span>), <span>low level</span>, <span>Linux</span> and <span>web development</span>.
          <br />This is my journey in the tech world.
        </p>
        <h2 className="title-second">The beginning</h2>
        <section className="story">
          <p className="paragraph-story">
            The first programming languages ​​I learned in the high school, were <span>Lader</span> and <span>Assembler</span>. At the university,
            I studied Electronic Technology, I learned about analogic and digital electronics, among other things.<br />However, the classes
            that I enjoyed most were related to programming, <span>I typed my first lines of code in C++</span>, it was an interesting
            process. Then I worked with PIC microcontrollers, in this ocassions it was special, because I created my first circuit board
            where I tested my programs.
          </p>
          <div className="image-story">
            <Fade left>
              <img className="image-content" src={beginnig} alt="site-under-construction"/>
            </Fade>
          </div>
          
        </section>
        <h2 className="title-second">The next steps</h2>
        <section className="story">
          
          <p className="paragraph-story">
            Eventually, I worked in some companies and then came back to the university, this time I studied System Technology, I studied with
            programming languages such as <span>Dr.Scheme</span>, <span>C++</span>, <span>Java</span>, I improved my logic through classes based
            in <span>computer science</span> from a systemic approach <span>searching to solve problems in an integral way</span>. In this part
            of my story, I had the opportunity to work on a Tech company but I will tell you in a moment.<br/>
            Additionally I did studies related to <span>Scrum</span>, in the process I worked with <span>PHP</span> and <span>MySQL</span>,
            as a final project we refactor a request system(PQR), participated as a frontend developer with the <span>Angular 7</span> Framework.
          </p>
          <div className="image-story">
            <Fade right>
              <img className="image-content" src={next_steps} alt="site-under-construction"/>
            </Fade>
          </div>
          
        </section>
        <h2 className="title-second">Working life</h2>
        <section className="story">
          
          <p className="paragraph-story">
            From my beginnings in the tech world, it passed	8 years before I got <span>my first job in this industry</span>, previously worked
            in customer service and insurance sales, these experiences complemented my profile, I worked as a <span>software support 
            consultant</span>, I learned about <span>Linux</span> and Windows servers and <span>PostgreSQL databases</span>. Then I was selected
            as a <span>lead of a new project</span>, I participated in its implementation, standardization and management.
          </p>
          <div className="image-story">
            <Fade left>
              <img className="image-content" src={working_life} alt="site-under-construction"/>
            </Fade>
          </div>
      
          
        </section>
        <h2 className="title-second">Nowadays</h2>
        <section className="story">
          
          <p className="paragraph-story">
            Finally, I joined Holberton School, in this place I could consolidate all these experiences, it was 9 months working independent and
            sometimes in teams, I faced to problems with <span>data strcutures</span>, <span>DevOps</span>, <span>low level</span>,
            and <span>high level</span> with languages such as <span>C</span>, <span>Bash</span>, <span>Python</span>, <span>JavaScript</span>,
            <span> HTML</span> and <span>CSS</span>, I'm going to share with you my last
            project <span><strong><a href="https://hovify.works/">HoviFy</a></strong></span>, in this project my role was as a Frontend developer with
            <span> React</span>.
          </p>
          <div className="image-story">
            <Fade right>
              <img className="image-content" src={at_the_present} alt="site-under-construction"/>
            </Fade>
          </div>
          
        </section>
        <p className="main-paragraph">
          Up to this point, I have told you a part of my story, the next step is to get more experience in web development.
          In the future, I would like to share with you advices based on my travel. If you like it the idea I invite you to join my network.
        </p>
      </section>
    </>
  );
};