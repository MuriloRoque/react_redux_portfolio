import React from 'react';
import '../styles/App.scss';
import Header from './Header';
import Intro from './Intro';
import Projects from './Projects';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
