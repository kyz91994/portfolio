import React, { useState } from 'react';
import './contacts.css';
import { useLang } from '../LangContext';
import github from '../assets/github.png'
import telegram from '../assets/telegram.png'
import linkedin from '../assets/linkedin.png'


function Contact() {

  const { ruLang } = useLang();
  const translation = {
    title: ruLang ? 'контакты' : 'contact',
    textForLinks: ruLang
      ? 'Вы можете найти меня по этим ссылкам:'
      : 'Уou can also find me using these links:',
  };

  return (
    <div id="contact" className="section">
      <div className="contact-box">
        <div className="title">
          <h2>{translation.title}</h2>
          <h2 className="shadow">{translation.title}</h2>
        </div>
        <div className="contact-text">{translation.textForLinks}</div>

        <div className="contact-links">
          <div className="contact-link airplane">
            <a href="https://t.me/kyz91994">
              <img src={telegram} alt="Telegram logo" />
            </a>
          </div>
          <div className="contact-link rotator">
            <a href="https://github.com/kyz91994">
              <img src={github} alt="Github logo" />
            </a>
          </div>
          <div className="contact-link rotator">
            <a href="https://www.linkedin.com/in/evgenii-kuznetsov-958466253/">
              <img src={linkedin} alt="LinkedIn logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
