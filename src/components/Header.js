import React from 'react';
import '../styles/Header.scss';
import logo from '../assets/images/murilo.png';
import resume from '../assets/Murilo Roque - Resume.pdf';
import github from '../assets/images/github.png';
import linkedin from '../assets/images/linkedin.png';
import twitter from '../assets/images/twitter.png';
import mail from '../assets/images/mail.png';
import resumeImg from '../assets/images/resume.png';

const Header = () => (
  <header className="Header">
    <div className="header-left">
      <img src={logo} alt="logo" />
    </div>
    <div className="header-right">
      <a href="https://github.com/MuriloRoque" rel="noopener noreferrer" target="_blank">
        <img src={github} alt="github" />
      </a>
      <a href="https://www.linkedin.com/in/murilo-roque/" rel="noopener noreferrer" target="_blank">
        <img src={linkedin} alt="linkedin" />
      </a>
      <a href="https://twitter.com/MuriloRoquePai1" rel="noopener noreferrer" target="_blank">
        <img src={twitter} alt="twitter" />
      </a>
      <a href="mailto: muriloengqui@gmail.com">
        <img src={mail} alt="mail" />
      </a>
      <a href={resume} rel="noopener noreferrer" target="_blank">
        <img src={resumeImg} alt="resume" />
      </a>
    </div>
  </header>
);

export default Header;
