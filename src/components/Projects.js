import React from 'react';
import './projects.css';
import { useLang } from '../LangContext';
import lifeProj from '../assets/life-proj.png'
import yamaguchiX from '../assets/yamaguchi-x.png'
import gide from '../assets/gide.png'
import brilliant from '../assets/brilliant.jpg'
import remover from '../assets/remover.jpg'
import todolist from '../assets/todolist.png'
import socialNet from '../assets/social-new.png'
import idaProj from '../assets/ida-proj.png'


function Projects() {
  const projectsInfo = [
    {
      nameRu: 'Сайт для курса "Искусство жить"',
      live: 'http://project4581970.tilda.ws/',
      photo: lifeProj,
      id: 0,
    },
    {
      nameRu: 'Сайт для продажи Весеннего гайда (only mobile) (2022)',
      live: 'https://stylist-kids.ru/spring-2022/',
      photo: gide,
      id: 1,
    },
    {
      nameRu: 'Страница продукта "Массажное кресло Yamaguchi-X"',
      live: 'https://www.yamaguchi.ru/massazhnyie-kresla/yamaguchi-x',
      photo: yamaguchiX,
      id: 2,
    },
    {
      nameRu: 'Страница продукта "Ультразвуковой прибор для чистки лица Yamaguchi Brilliant"',
      live: 'https://www.yamaguchi.ru/kosmetologicheskiye-apparaty/yamaguchi-brilliant',
      photo: brilliant,
      id: 3,
    },
    {
      nameRu: 'Страница продукта "Прибор для вакуумной чистки и пилинга Yamaguchi Face Remover"',
      live: 'https://www.yamaguchi.ru/kosmetologicheskiye-apparaty/face-remover',
      photo: remover,
      id: 4,
    },
  ];

  const petProjectsInfo = [
    {
      nameRu: 'Список дел',
      live: 'https://kyz91994.github.io/todolists-app',
      photo: todolist,
      technologies: 'HTML, CSS, React, Redux, TypeScript, Axios',
      id: 5,
    },
    {
      nameRu: 'Социальная сеть',
      live: 'https://kyz91994.github.io/social-network-2.0',
      photo: socialNet,
      technologies: 'HTML, CSS, React, Redux, TypeScript, React Router',
      id: 6,
    },
    {
      nameRu: 'Страница добавления товаров',
      live: 'https://github.com/kyz91994/IDAproject',
      photo: idaProj,
      technologies: 'HTML, CSS, Vue, JS',
      id: 7,
    }
  ];

  const { ruLang } = useLang();
  const translation = {
    title: ruLang ? 'Мои работы' : 'projects',
    titleProj: ruLang ? 'Pet-проекты' : 'Petprojects',
    technologies: ruLang ? 'Построено на' : 'Built using',
  };

  const projectBoxes = projectsInfo.map((project) => {
    // const video = require(`../${project.video}`);

    return (
      <div key={project.id} className="project-box">
        <div className="project-info">
          <div className="project-title">
            <h3>{ruLang ? project.nameRu : project.nameEn}</h3>
            <h3 className="shadow">
              {ruLang ? project.nameRu : project.nameEn}
            </h3>
          </div>
        </div>
        <div className="project-video">
          <a href={project.live}>
            <img src={project.photo}/>
          </a>
        </div>
      </div>
    );
  });
  const petProjectBoxes = petProjectsInfo.map((project) => {

    return (
      <div key={project.id} className="project-box">
        <div className="project-info">
          <div className="project-title">
            <h3>{ruLang ? project.nameRu : project.nameEn}</h3>
            <h3 className="shadow">
              {ruLang ? project.nameRu : project.nameEn}
            </h3>
          </div>
          <div className="project-description-text">
            {`${translation.technologies} ${project.technologies}.`}
          </div>
        </div>
        <div className="project-video">
          <a href={project.live}>
            <img src={project.photo}/>
          </a>
        </div>
      </div>
    );
  });

  return (
    <div className='project100'>
      <div id="projects" className="projects section">
        <div className="title">
          <h2>{translation.title}</h2>
          <h2 className="shadow">{translation.title}</h2>
        </div>
        {projectBoxes}
        <div className="title">
          <h2>{translation.titleProj}</h2>
          <h2 className="shadow">{translation.titleProj}</h2>
        </div>
        {petProjectBoxes}
      </div>
    </div>
  );
}

export default Projects;
