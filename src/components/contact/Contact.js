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
      .then((result) => {
          console.log(result.text);
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
            <label>Email</label>
          </div>
          <div className="contact-details">
            <input type="text" name="user_name" />
            <input type="email" name="user_email" />
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
