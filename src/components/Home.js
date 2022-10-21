import React from 'react';
import './home.css';
import { useLang } from '../LangContext';

function Home() {
  const [rotate, setRotate] = React.useState({ xDegrees: 0, yDegrees: 0 });
  const { ruLang, toggleLang } = useLang();

  function countRotation(event) {
    const rotation = 10;
    const rotateY =
      (rotation - (rotation * event.clientX * 2) / event.view.innerWidth) * -1;
    const rotateX =
      rotation - (rotation * event.clientY * 2) / event.view.innerHeight;
    setRotate({ xDegrees: rotateX, yDegrees: rotateY });
  }

  function smoothScroll(event, id) {
    event.preventDefault();
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }

  const rotateStyle = {
    transform: `perspective(1000px) rotateX(${rotate.xDegrees}deg) rotateY(${rotate.yDegrees}deg) translateZ(100px)`,
  };

  const translation = {
    greeting1: ruLang ? 'Привет, я' : "Hi, I'm",
    name: ruLang ? 'Евгений Кузнецов' : 'Evgenii Kuznetsov',
    greeting2: ruLang ? 'Я Frontend-разработчик' : "I'm a Frontend developer",
  };

  return (
    <div id="home" onMouseMove={countRotation} className="home">
      <div className="rotatable" style={rotateStyle}>
        <div>
          {translation.greeting1}{' '}
          <span className="home-my-name">{translation.name}.</span>
        </div>
        <div>{translation.greeting2}.</div>
        <div className="home-buttons">
        </div>
      </div>
    </div>
  );
}

export default Home;
