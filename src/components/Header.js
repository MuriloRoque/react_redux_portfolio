import React from 'react';
import '../styles/Header.scss';
import logo from '../assets/images/murilo.png'
import resume from '../assets/Murilo Roque - Resume.pdf'

const Header = () => (
  <header>
    <div className='header-left'>
      <img src={logo} alt="logo"/>
    </div>
    <div className='header-right'>
      <a href={"https://github.com/MuriloRoque"} target={'_blank'}>GitHub</a>
      <a href={"https://www.linkedin.com/in/murilo-roque/"} target={'_blank'}>LinkedIn</a>
      <a href={"https://twitter.com/MuriloRoquePai1"} target={'_blank'}>Twitter</a>
      <a href={"%mailto: muriloengqui@gmail.com"} target={'_blank'}>E-mail</a>
      <a href={resume} target={'_blank'}>Resume</a>
    </div>
  </header>
);

export default Header;