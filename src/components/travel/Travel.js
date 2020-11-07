import React, { useState } from 'react';
import build_contruction from '../images/Under-construction-bro.svg';

export default function Preview() {

  return(
    <>
      <section className="resume">
        <h1 className="title-first">My journey in tech</h1>
        <img className="image" src={build_contruction} alt="site-under-construction"/>
      </section>
    </>
  );
};