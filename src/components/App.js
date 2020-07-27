import React from 'react';
import '../styles/App.scss';
import Particles from 'react-tsparticles';
import Header from './Header';
import Intro from './Intro';
import Projects from './Projects';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Particles
        height="200"
        id="tsparticles"
        options={{
          background: {},
          backgroundMask: {
            cover: {
              color: {
                value: '#fff',
              },
              opacity: 0.1,
            },
            enable: false,
          },
          detectRetina: true,
          fpsLimit: 60,
          infection: {
            cure: false,
            delay: 0,
            enable: false,
            infections: 0,
            stages: [],
          },
          interactivity: {
            detectsOn: 'canvas',
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onDiv: {
                ids: 'repulse-div',
                enable: false,
                mode: 'repulse',
                type: 'circle',
              },
              onHover: {
                enable: true,
                mode: 'connect',
                parallax: {
                  enable: false,
                  force: 60,
                  smooth: 10,
                },
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.1,
                size: 10,
              },
              connect: {
                distance: 80,
                links: {
                  opacity: 0.1,
                },
                radius: 60,
              },
              grab: {
                distance: 400,
                links: {
                  opacity: 0.1,
                },
              },
              push: {
                quantity: 4,
              },
              remove: {
                quantity: 2,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
                speed: 0,
              },
              slow: {
                factor: 3,
                radius: 200,
              },
            },
          },
          particles: {
            collisions: {
              enable: true,
              mode: 'bounce',
            },
            color: {
              value: 'random',
              animation: {
                enable: true,
                speed: 0,
                sync: true,
              },
            },
            links: {
              blink: false,
              color: {
                value: '#000',
              },
              consent: false,
              distance: 150,
              enable: false,
              opacity: 0.1,
              shadow: {
                blur: 5,
                color: {
                  value: 'lime',
                },
                enable: false,
              },
              triangles: {
                enable: false,
              },
              width: 1,
              warp: false,
            },
            move: {
              angle: 90,
              attract: {
                enable: true,
                rotate: {
                  x: 600,
                  y: 1200,
                },
              },
              direction: 'none',
              enable: true,
              noise: {
                delay: {
                  random: {
                    enable: false,
                    minimumValue: 0,
                  },
                  value: 0,
                },
                enable: false,
              },
              outMode: 'out',
              random: false,
              speed: 0,
              straight: false,
              trail: {
                enable: false,
                length: 10,
                fillColor: {
                  value: '#000000',
                },
              },
              vibrate: false,
              warp: false,
            },
            number: {
              density: {
                enable: true,
                area: 600,
                factor: 1000,
              },
              limit: 500,
              value: 300,
            },
            opacity: {
              animation: {
                enable: false,
                minimumValue: 0.1,
                speed: 0,
                sync: false,
              },
              random: {
                enable: false,
                minimumValue: 1,
              },
              value: 0.3,
            },
            rotate: {
              animation: {
                enable: false,
                speed: 0,
                sync: false,
              },
              direction: 'clockwise',
              random: false,
              value: 0,
            },
            shadow: {
              blur: 0,
              color: {
                value: '#000000',
              },
              enable: false,
              offset: {
                x: 0,
                y: 0,
              },
            },
            shape: {
              options: {
                character: {
                  fill: true,
                  font: 'Verdana',
                  style: '',
                  value: 'M',
                  weight: '400',
                },
                char: {
                  fill: true,
                  font: 'Verdana',
                  style: '',
                  value: 'M',
                  weight: '400',
                },
                polygon: {
                  sides: 5,
                },
                star: {
                  sides: 5,
                },
                image: {
                  height: 25,
                  replaceColor: true,
                  src: 'https://cdn.matteobruni.it/images/particles/github.svg',
                  width: 25,
                },
                images: {
                  height: 25,
                  replaceColor: true,
                  src: 'https://cdn.matteobruni.it/images/particles/github.svg',
                  width: 25,
                },
              },
              type: 'circle',
            },
            size: {
              animation: {
                destroy: 'none',
                enable: false,
                minimumValue: 0.1,
                speed: 0,
                startValue: 'max',
                sync: false,
              },
              random: {
                enable: false,
                minimumValue: 1,
              },
              value: 2.2,
            },
            stroke: {
              color: {
                value: '#000000',
              },
              width: 0,
              opacity: 0.1,
            },
            twinkle: {
              lines: {
                enable: false,
                frequency: 0.05,
                opacity: 0.1,
              },
              particles: {
                enable: false,
                frequency: 0.05,
                opacity: 0.1,
              },
            },
          },
          pauseOnBlur: true,
          polygon: {
            draw: {
              enable: true,
              stroke: {
                color: {
                  value: 'rgba(255,255,255,0.2)',
                },
                width: 0.5,
                opacity: 0.2,
              },
            },
            enable: true,
            inline: {
              arrangement: 'equidistant',
            },
            move: {
              radius: 10,
              type: 'path',
            },
            scale: 2,
            type: 'inline',
          },
        }}
      />
      <Header />
      <Intro />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
