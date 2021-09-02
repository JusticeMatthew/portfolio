import React from 'react';
import { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [viewport, setViewport] = useState({
    latitude: 40.712776,
    longitude: -74.005974,
    zoom: 8,
  });

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_4vtbmyk',
        'template_x4txktb',
        e.target,
        'user_vWTAWBnX7NXh9Uus1LXRE',
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    e.target.reset();
  }

  return (
    <>
      <div className='tokyo_tm_contact'>
        <div className='tokyo_tm_title'>
          <div className='title_flex'>
            <div className='left'>
              <span>Contact</span>
              <h3>Get in Touch</h3>
            </div>
          </div>
        </div>
        {/* END TITLE */}

        {/* MENU WRAP */}

        <div className='fields'>
          <form className='contact_form' onSubmit={sendEmail}>
            <div className='first'>
              <ul>
                <li>
                  <input type='text' name='name' placeholder='Name' />
                </li>
                {/* END FIRST NAME */}

                <li>
                  <input type='email' name='user_email' placeholder='Email' />
                </li>
                {/* END EMAIL */}

                <li>
                  <textarea name='message' placeholder='Message'></textarea>
                </li>
                {/* END SUBJECT MESSAGE */}
              </ul>
            </div>
            <div className='tokyo_tm_button'>
              <button type='submit' className='ib-button'>
                Send Message
              </button>
            </div>
            {/* END SUBMIT BUTTON */}
          </form>
          {/* END FORM */}
        </div>
        {/* END FIELDS */}
      </div>
      {/* END COTACT */}
    </>
  );
};

export default Contact;
