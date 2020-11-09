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
        {alert("Site in construction - Last update: Sunday 9th November 2020, 2:25 a.m. GMT-5")}
        <h2 className="title-first">My journey in tech world</h2>
        <img className="image top" src={moving_forward} alt="person-movinf-forward"/>
        <p className="main-paragraph">
          From the beginning of my academic and working life, I've been connected with software development world, I have programmed PIC microcontrollers, my firsts languages were C++ and Dr. Scheme, I have studied about agile(SCRUM), low level, linux and web development.
          <br /><br />This is my journey in tech world.
        </p>
        <h2 className="title-second">The beginning</h2>
        <section className="story">
          <p className="paragraph-story">
            Mis primeros lenguajes de programación los conocí en mi colegio, fueron  Lader(especifico para programar PLC's) y assembler.
            En la universidad estudie Tecnología en Electrónica aprendí sobre electrónica analógica, digital entre otras cosas, sin embargo 
            las asignaturas que más disfrute se relacionaban con programación, aprendí desde diseñar algoritmos y secuencias en un papel hasta 
            crear mis primeras líneas de código en C++, fue un proceso muy interesante. Más tarde trabaje con Microcontroladores PIC, este fue
            un paso especial porque yo mismo diseño mi primera placa donde probe mis programas. 
          </p>
          <div className="image-story">
            <img className="image-content" src={beginnig} alt="site-under-construction"/>
          </div>
        </section>
        <h2 className="title-second">The next steps</h2>
        <section className="story">
          
          <p className="paragraph-story">
            Eventualmente trabaje en varias empresas y retome mis estudios, esta vez fue Tecnología en Sistemas, estudie con lenguajes como 
            Dr. Scheme, C++, JAVA, mejore mi lógica a través de asignaturas pensadas en ciencias de la computación desde un enfoque sistémico 
            pensado en resolver los problemas de manera integral, en esta parte de mi historia tome la oportunidad de trabajar, pero eso se los cuento
            en un rato, también realice estudios relacionados con SCRUM en este proceso trabaje con lenguajes como PHP y MySQL, como proyecto
            final realizamos un sistema de peticiones en el que participe como desarrollador frontend con el Framework Angular 7.
          </p>
          <div className="image-story">
            <img className="image-content" src={next_steps} alt="site-under-construction"/>
          </div>
        </section>
        <h2 className="title-second">Working life</h2>
        <section className="story">
          
          <p className="paragraph-story">
            Desde mi inicio en el mundo tech pasaron 8 años antes de mi primer trabajo en Tech, antes había trabajado en atención al cliente y como vendedor
            de seguros, estas experiencias complementaron mi perfil, este trabajo fue como consultor de soporte de software, aprendí sobre
            servidores Linux, Windows y bases de datos PostgreSQL, poco tiempo después me seleccionaron con líder de un nuevo proyecto, participe desde su
            estandarización, puesta en marcha y gestión.
          </p>
          <div className="image-story">
            <img className="image-content" src={working_life} alt="site-under-construction"/>
          </div>
          
        </section>
        <h2 className="title-second">At the present</h2>
        <section className="story">
          
          <p className="paragraph-story">
            Finalmente ingrese a Holberton School un lugar donde pude consolidar todas estas experiencias, fueron 9 meses trabajando de manera
            independiente y en equipo en los que me enfrente a resolver problemas con estructuras de datos, low level, high level con lenguajes
            como C, Bash, Python, JavaScript, HTML y CSS, aprendiendo de todo el proceso de desarrollo de software, te comparto mi ultimo proyecto,
            trabajamos en equipo para desarrollar Hovify, en este proyecto participe como frontend developer en React.
          </p>
          <div className="image-story">
            <img className="image-content" src={at_the_present} alt="site-under-construction"/>
          </div>
          
        </section>
      </section>
    </>
  );
};