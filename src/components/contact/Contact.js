import React from 'react';
import emailjs from 'emailjs-com';
import { useHistory } from 'react-router-dom';

import './Contact.css';
import './Contact_responsive768px.css';

export default function Contact() {
  /* ------------------------------------------------------ */
    const history = useHistory();
  /* ------------------------------------------------------ */

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_jpw8ogu', 'template_mfpppee', e.target, 'user_M1jT3jjTD2Z0FAmnSHZhp')
      .then((response) => {
           console.log('SUCCESS!', response.status, response.text);
      }, (error) => {
          console.log(error.text);
      });
    alert("Message sent successfully")
    history.push('/');
  }

  return (
    <>
      <section className="contact">
        <form className="contact-form" onSubmit={sendEmail}>
          <div className="contact-details">
            <label>Name</label>
            <input type="text" name="from_name" />
            
          </div>
          <div className="contact-details">
            <label>Email</label>
            <input type="email" name="from_email" />
          </div>
          <div className="contact-details">
            <label>Message</label>
          </div>
          <div className="content-message">
            <textarea name="message" />
          </div>
          <input className="btn-send" type="submit" value="Send" />
        </form>
      </section>
    </>
  );
}
