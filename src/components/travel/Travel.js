import React, { useState } from 'react';

import build_contruction from '../images/Under-construction-bro.svg';
import moving_forward from '../images/moving-forward-pana.svg';
import beginnig from '../images/market-launch-amico.svg';
import next_steps from '../images/pair-programming-rafiki.svg';
import working_life from '../images/operating-system-rafiki.svg';
import at_the_present from '../images/paper-map-amico.svg';

import './Travel.css';
import './Travel_responsive600px.css';


export default function Preview() {

  return(
    <>
      <section className="travel">
        {alert("Site in construction - Last update: Sunday 8th November 2020, 2:44 a.m. GMT-5")}
        <h2 className="title-first">My journey in tech world</h2>
        <img className="image top" src={moving_forward} alt="person-movinf-forward"/>
        <p className="main-paragraph">
          From the beginning of my academic and working life, I've been connected with software development world, I have programmed PIC microcontrollers, my firsts languages were C++ and Dr. Scheme, I have studied about agile(SCRUM), low level, linux and web development.
          <br /><br />This is my journey in tech world.
        </p>
        <h2 className="title-second">The beginning</h2>
        <section className="story">
          <p className="paragraph-story">
            In the high school
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
          <div className="image-story">
            <img className="image-content" src={beginnig} alt="site-under-construction"/>
          </div>
        </section>
        <h2 className="title-second">The next steps</h2>
        <section className="story">
          
          <p className="paragraph-story">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
          <div className="image-story">
            <img className="image-content" src={next_steps} alt="site-under-construction"/>
          </div>
        </section>
        <h2 className="title-second">Working life</h2>
        <section className="story">
          
          <p className="paragraph-story">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
          <div className="image-story">
            <img className="image-content" src={working_life} alt="site-under-construction"/>
          </div>
          
        </section>
        <h2 className="title-second">At the present</h2>
        <section className="story">
          
          <p className="paragraph-story">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
          <div className="image-story">
            <img className="image-content" src={at_the_present} alt="site-under-construction"/>
          </div>
          
        </section>
      </section>
    </>
  );
};