import React from 'react';
import '../styles/Intro.scss';
import hello from '../assets/images/hello.png';
import handshake from '../assets/images/handshake.png';

const Intro = () => (
  <section className='Intro'>
    <h2>
      Hello there 
      <img src={hello} alt="hello"/><br/>
      I'm Murilo, a full-stack developer, whose specializations are
      <a href={"https://www.ruby-lang.org/en/"}> Ruby</a>, 
      <a href={"https://rubyonrails.org/"}> Rails</a>, 
      <a href={"https://www.javascript.com/"}> Javascript</a>, and 
      <a href={"https://reactjs.org/"}> React</a>.
    </h2>
    <small>
    I enjoy creating applications, teaching, and helping people
    in my community whenever they need it
    <img src={handshake} alt="handshake"/>
    </small>
  </section>
);

export default Intro;