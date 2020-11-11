import React from 'react';

import Card from '../card/Card';

import baner from '../images/banner-juanse-developer.jpg';
import shell_image from '../images/shell_project.png';
import hovify from '../images/hovify.png';
import hbnb from '../images/hbnb.png';
import github from '../images/github.jpeg';
import medium from '../images/medium.jpeg';
import react_logo from '../images/react.png';



import './Projects.css';
import './Projects_responsive600px.css';

const projectList = [
  {
    key: 1,
    title_project: "Portfolio Project",
    image: baner,
    descp_project: 'Developer portfolio, in this project a SPA is created using React-router-dom, React-reveal, HTML and CSS.',
    repo__project: 'https://github.com/juansedev/juansedev_site',
    stack__project: "Html, CSS, React, React-router-dom, React-reveal.",
    last_updated: "October 2020."
  },
  {
    key: 2,
    title_project: "Hovify",
    image: hovify,
    descp_project: 'In this project my role was as Frontend developer with React. In HoviFy we believe that anyone with the right attitude should...',
    repo__project: 'https://hovify.works/',
    stack__project: "Html, CSS, React, React-router-dom, React-reveal, React-hook-form, Material-UI, API.",
    last_updated: "October 2020."
  },
  {
    key: 3,
    title_project: "React/JavaScript Path ",
    image: react_logo,
    descp_project: 'In progress. 🧙 In this repository I will share my react projects, some concepts around react and my experience with this library. 🚀',
    repo__project: 'https://github.com/juansedev/react',
    stack__project: "Html, CSS, JS, React.",
    last_updated: "Octuber 2020."
  },
  {
    key: 4,
    title_project: "AriBnB Clone - Web Static",
    image: hbnb,
    descp_project: 'This is a website clone of AirBnB, with the fundamental features implemented. It has a front-end, a database, an API...',
    repo__project: 'https://github.com/juansedev/AirBnB_clone',
    stack__project: "Html, CSS, Python, MySQL, CRUD, API.",
    last_updated: "July 2020."
  },
  {
    key: 5,
    title_project: "AriBnB Clone - Web Dynamic",
    image: hbnb,
    descp_project: 'Latest version of the AirBnB Clone project, using JavaScript. Python, Flask and Restfull API were used in the backend.',
    repo__project: 'https://github.com/mfcrespo/AirBnB_clone_v4',
    stack__project: "Html, CSS, JS, Pyton, Restfull API.",
    last_updated: "September 2020."
  },
  {
    key: 6,
    title_project: "Simple Shell",
    image: shell_image,
    descp_project: 'In this project we\'ll create a simple UNIX command interpreter in C programming language.',
    repo__project: 'https://github.com/nathsotomayor/simple_shell',
    stack__project: "C.",
    last_updated: "April 2020."
  },
  {
    key: 7,
    title_project: "Blogs",
    image: medium,
    descp_project: 'Writer of topics on Software Development.',
    repo__project: 'https://medium.com/@juansedev',
    stack__project: "Medium."
  },
  {
    key: 8,
    title_project: "Would you like to see more projects?",
    image: github,
    descp_project: 'Writer of topics on Software Development.',
    repo__project: 'https://github.com/juansedev',
    stack__project: "GitHub."
  },
  
];



export default function Projects() {

  return(
    <>
      <section className="projects">
        <h2 className="title-first">Projects</h2>

        <section className="projects-conta">
          {projectList.map( ({key,
                              title_project,
                              image,
                              descp_project,
                              repo__project,
                              stack__project,
                              last_updated}) => (
            <Card
              key={key}
              title_project={title_project}
              image={image}
              descp_project={descp_project}
              repo__project={repo__project}
              stack__project={stack__project}
              last_updated={last_updated}
            />
          ))}

        </section>
      </section>
    </>
  );
};