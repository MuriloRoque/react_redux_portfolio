import React from 'react';
import '../styles/Projects.scss';
import twitter from '../assets/images/twitter-ss.png';
import chemisearch from '../assets/images/chemisearch.png';
import foodTracker from '../assets/images/food-tracker.png';
import martha from '../assets/images/martha.gif';

const Projects = () => (
  <section className='Projects'>
    <div>
      <figure>
        <img src={chemisearch} alt="chemisearch"/>
      </figure>
      <footer>
        <h4>Chemisearch</h4>
        <small>HTML, SASS</small>
        <p>This is a search engine called Chemisearch,
           where you can search for chemical companies that sell these products.</p>
        <div>
          <a href="https://raw.githack.com/MuriloRoque/chemisearch/master/index.html">View online</a>
          <a href="https://github.com/MuriloRoque/chemisearch">View code</a>
        </div>
      </footer>
    </div>
    <div>
      <figure>
        <img src={twitter} alt="twitter"/>
      </figure>
      <footer>
        <h4>Twitter Clone</h4>
        <small>Ruby on Rails</small>
        <p>This is a Twitter Clone built with Ruby on Rails. You can signup, login, and create posts.</p>
        <div>
          <a href="https://shrouded-reaches-36145.herokuapp.com/">View online</a>
          <a href="https://github.com/MuriloRoque/twitter_clone_app">View code</a>
        </div>
      </footer>
    </div>
    <div>
      <figure>
        <img src={foodTracker} alt="food-tracker"/>
      </figure>
      <footer>
        <h4>Food Tracker</h4>
        <small>Ruby on Rails, HTML, SCSS</small>
        <p>In this app, you can control the total amount of food you consumed
           from a specific group in a certain period of time.</p>
        <div>
          <a href="https://murilo-food-tracker.herokuapp.com/">View online</a>
          <a href="https://github.com/MuriloRoque/food_tracker_app">View code</a>
        </div>
      </footer>
    </div>
    <div>
      <figure>
        <img src={martha} alt="martha"/>
      </figure>
      <footer>
        <h4>Mastha's Rescue</h4>
        <small>Javascript, Phaser 3</small>
        <p>This is a shooter game featuring Martha, a battle aircraft pilot who's trying to rescue her father.
           In this app, you will be able to help her by shooting and destroying the enemy's aircraft.</p>
        <div>
          <a href="https://marthas-rescue.netlify.app/">View online</a>
          <a href="https://github.com/MuriloRoque/marthas_rescue_shooter_game">View code</a>
        </div>
      </footer>
    </div>
  </section>
);

export default Projects;