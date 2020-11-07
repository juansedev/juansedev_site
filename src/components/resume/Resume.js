import React from "react";
import './Resume.css';
import './Resume_responsive600px.css';


/* pdf */
import resume from '../assets/JuanSebastianLlanocV.pdf';

export default function Resume() {


  return (
    <>
      <section id="resume" className="resume">
        <h1 className="title-first">Resume</h1>
        <embed className="pdf" src={resume} type="application/pdf" ></embed>
      </section>
    </>
  );
}