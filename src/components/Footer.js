import React from 'react';
import '../styles/Footer.scss';
import github from '../assets/images/github.png';
import linkedin from '../assets/images/linkedin.png';
import twitter from '../assets/images/twitter.png';
import medium from '../assets/images/medium.png';

const Footer = () => (
  <footer className="Footer">
    <nav>
      <p>
        <a href="https://github.com/MuriloRoque" rel="noopener noreferrer" target="_blank">
          <img src={github} alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/murilo-roque/" rel="noopener noreferrer" target="_blank">
          <img src={linkedin} alt="linkedin" />
        </a>
        <a href="https://twitter.com/MuriloRoquePai1" rel="noopener noreferrer" target="_blank">
          <img src={twitter} alt="twitter" />
        </a>
        <a href="https://medium.com/@muriloengqui" rel="noopener noreferrer" target="_blank">
          <img src={medium} alt="medium" />
        </a>
      </p>
    </nav>
    <div>
      <p>
        Created using
        <a href="https://reactjs.org/">React</a>
        ,
        <a href="https://redux.js.org/" rel="noopener noreferrer" target="_blank"> Redux</a>
        {' '}
        and
        <a href="https://sass-lang.com/" rel="noopener noreferrer" target="_blank"> SASS</a>
        . The design is from
        <a href="https://jgog.in/" rel="noopener noreferrer" target="_blank"> Jenil Gogari</a>
      </p>
      <p>Murilo Roque © 2020</p>
    </div>
  </footer>
);

export default Footer;
