import React from 'react';
import '../styles/Intro.scss';
import hello from '../assets/images/hello.png';
import handshake from '../assets/images/handshake.png';

const Intro = () => (
  <section className="Intro">
    <h2>
      Hello there
      <img src={hello} alt="hello" />
      <br />
      I&apos;m Murilo, a full-stack developer, whose specializations are
      <a href="https://www.ruby-lang.org/en/" rel="noopener noreferrer" target="_blank"> Ruby</a>
      ,
      <a href="https://rubyonrails.org/" rel="noopener noreferrer" target="_blank"> Rails</a>
      ,
      <a href="https://www.javascript.com/" rel="noopener noreferrer" target="_blank"> Javascript</a>
      , and
      <a href="https://reactjs.org/" rel="noopener noreferrer" target="_blank"> React</a>
      .
      <small>
        I enjoy creating applications, teaching, and helping people
        in my community whenever they need it
        <img src={handshake} alt="handshake" />
      </small>
    </h2>
  </section>
);

export default Intro;
