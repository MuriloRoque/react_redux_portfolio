import React from 'react';
import '../styles/Footer.scss';
import github from '../assets/images/github.png';
import linkedin from '../assets/images/linkedin.png';
import twitter from '../assets/images/twitter.png';
import medium from '../assets/images/medium.png';

const Footer = () => (
  <footer className='Footer'>
    <nav>
      <p>
      <a href={"https://github.com/MuriloRoque"} target={'_blank'}>
        <img src={github} alt="github"/>
      </a>
      <a href={"https://www.linkedin.com/in/murilo-roque/"} target={'_blank'}>
        <img src={linkedin} alt="linkedin"/>
      </a>
      <a href={"https://twitter.com/MuriloRoquePai1"} target={'_blank'}>
        <img src={twitter} alt="twitter"/>
      </a>
      <a href={"https://medium.com/@muriloengqui"} target={'_blank'}>
        <img src={medium} alt="medium"/>
      </a>
      </p>
    </nav>
    <div>
      <p>Created using <a href="https://reactjs.org/">React</a>,
       <a href="https://redux.js.org/">Redux</a> and
       <a href="https://sass-lang.com/">SASS</a></p>. The design is from
       <a href="https://jgog.in/">Jenil Gogari</a>
      <p>Murilo Roque © 2020</p>
    </div>
  </footer>
);

export default Footer;