import React, {useEffect, useState} from 'react';
import './menu.css';
import {useLang} from '../LangContext';

function Menu() {
    const [menuSelector, setMenuSelector] = useState('home');

    function smoothScroll(event, id) {
        event.preventDefault();
        document.getElementById(id).scrollIntoView({behavior: 'smooth'});
    }

    function handleScroll() {
        const addShift = window.screen.height / 3;
        const about = document.getElementById('about').offsetTop;
        const projects = document.getElementById('projects').offsetTop;
        const contact = document.getElementById('contact').offsetTop;
        if (window.scrollY > contact - addShift*3) {
            setMenuSelector('contact');
            return;
        } else if (window.scrollY > projects - addShift) {
            setMenuSelector('projects');
            return;
        } else if (window.scrollY > about - addShift) {
            setMenuSelector('about');
            return;
        } else {
            setMenuSelector('home');
        }
    }

    useEffect(() => {
        document.addEventListener('scroll', handleScroll);
        return () => document.removeEventListener('scroll', handleScroll);
    }, [menuSelector]);

    const selectedNavElement = {
        color: 'rgb(211, 72, 72)',
        borderBottom: '4px solid rgb(211, 72, 72)',
        transform: 'translateY(-2px)',
    };

    const {ruLang} = useLang();
    const translation = {
        resume: ruLang ? 'резюме' : 'resume',
        about: ruLang ? 'обо мне' : 'about',
        projects: ruLang ? 'проекты' : 'projects',
        contact: ruLang ? 'контакты' : 'contact',
    };

    return (
        <nav className="nav-menu">

            <a
                className="nav-link"
                style={menuSelector === 'about' ? selectedNavElement : {}}
                href="#about"
                onClick={(event) => {
                    smoothScroll(event, 'about');
                }}
            >
                {translation.about}
            </a>
            <a
                className="nav-link"
                style={menuSelector === 'projects' ? selectedNavElement : {}}
                href="#projects"
                onClick={(event) => {
                    smoothScroll(event, 'projects');
                }}
            >
                {translation.projects}
            </a>
            <a
                className="nav-link"
                style={menuSelector === 'contact' ? selectedNavElement : {}}
                href="#contact"
                onClick={(event) => {
                    smoothScroll(event, 'contact');
                }}
            >
                {translation.contact}
            </a>
        </nav>
    );
}

export default Menu;
