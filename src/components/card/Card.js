import React, { useState } from 'react';


import './Card.css';
import './Card_responsive600px.css';

export default function Card({ key ,title_project, image, descp_project, repo__project,stack__project, last_updated}) {

  return(
    <>
        <article id={key } className="project-section">
          <img className="image-project" src={image} />
          <h2 className="title-project">{title_project}</h2>
          <p className="descp-project">
            {descp_project}
            <br />
            <br/>
            Last updated: <span>{last_updated}</span>
          </p>
          <article className="stack-project">
            Used technologies: <span>{stack__project}</span>
          </article>
          <span><a href={repo__project} target="blank">View Project</a></span>
        </article>
    </>
  );
};