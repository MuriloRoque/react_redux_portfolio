import React from 'react';
import '../styles/Projects.scss';
import Tilt from 'react-vanilla-tilt';
import twitter from '../assets/images/twitter-ss.png';
import chemisearch from '../assets/images/chemisearch.png';
import foodTracker from '../assets/images/food-tracker.png';
import martha from '../assets/images/martha.png';
import bookstore from '../assets/images/bookstore.png';

const Projects = () => (
  <section className="Projects">
    <hr />
    <br />
    <h6>Projects</h6>
    <br />
    <Tilt className="tilt">
      <div className="project-div">
        <figure>
          <img src={chemisearch} alt="chemisearch" />
        </figure>
      </div>
    </Tilt>
    <div className="project-description">
      <h4>Chemisearch</h4>
      <small>HTML, SASS</small>
      <p>
        This is a search engine called Chemisearch,
        where you can search for chemical companies that sell these products.
      </p>
      <a href="https://raw.githack.com/MuriloRoque/chemisearch/master/index.html" rel="noopener noreferrer" target="_blank">View online</a>
      <a href="https://github.com/MuriloRoque/chemisearch" rel="noopener noreferrer" target="_blank">View code</a>
    </div>
    <Tilt className="tilt">
      <div className="project-div">
        <figure>
          <img src={twitter} alt="twitter" />
        </figure>
      </div>
    </Tilt>
    <div className="project-description">
      <h4>Twitter Clone</h4>
      <small>Ruby on Rails</small>
      <p>
        This is a Twitter Clone built with Ruby on Rails.
        You can signup, login, and create posts.
      </p>
      <a href="https://shrouded-reaches-36145.herokuapp.com/" rel="noopener noreferrer" target="_blank">View online</a>
      <a href="https://github.com/MuriloRoque/twitter_clone_app" rel="noopener noreferrer" target="_blank">View code</a>
    </div>
    <Tilt className="tilt">
      <div className="project-div">
        <figure>
          <img src={foodTracker} alt="food-tracker" />
        </figure>
      </div>
    </Tilt>
    <div className="project-description">
      <h4>Food Tracker</h4>
      <small>Ruby on Rails, HTML, SCSS</small>
      <p>
        In this app, you can control the total amount of food you consumed
        from a specific group in a certain period of time.
      </p>
      <a href="https://murilo-food-tracker.herokuapp.com/" rel="noopener noreferrer" target="_blank">View online</a>
      <a href="https://github.com/MuriloRoque/food_tracker_app" rel="noopener noreferrer" target="_blank">View code</a>
    </div>
    <Tilt className="tilt">
      <div className="project-div">
        <figure>
          <img src={martha} alt="martha" />
        </figure>
      </div>
    </Tilt>
    <div className="project-description">
      <h4>Martha&apos;s Rescue</h4>
      <small>Javascript, Phaser 3</small>
      <p>
        This is a shooter game featuring Martha, a battle aircraft pilot
        who&apos;s trying to rescue her father.
        In this app, you will be able to help her by shooting and destroying
        the enemy&apos;s aircraft.
      </p>
      <a href="https://marthas-rescue.netlify.app/" rel="noopener noreferrer" target="_blank">View online</a>
      <a href="https://github.com/MuriloRoque/marthas_rescue_shooter_game" rel="noopener noreferrer" target="_blank">View code</a>
    </div>
    <Tilt className="tilt">
      <div className="project-div">
        <figure>
          <img src={bookstore} alt="bookstore" />
        </figure>
      </div>
    </Tilt>
    <div className="project-description">
      <h4>Bookstore</h4>
      <small>React, Redux, SCSS</small>
      <p>
        This is a Bookstore App, where you can add,
        remove, edit and follow the reading progress
        of your books.
      </p>
      <a href="https://murilo-react-bookstore.herokuapp.com/" rel="noopener noreferrer" target="_blank">View online</a>
      <a href="https://github.com/MuriloRoque/react_bookstore" rel="noopener noreferrer" target="_blank">View code</a>
    </div>
    <p><a href="https://medium.com/@muriloengqui" rel="noopener noreferrer" target="_blank">Check out my articles on Medium</a></p>
  </section>
);

export default Projects;
